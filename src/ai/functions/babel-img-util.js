const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');

function findImageNodes(code) {
  const ast = babelParser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  const candidateNodes = [];
  const detectedLoopImages = new Set(); // Prevent duplicates

  // Handle images defined as object literals (e.g. { src: '/foo.png', alt: 'foo' })
  // BUT SKIP data objects like product arrays
  traverse(ast, {
    ObjectExpression(path) {
      const properties = path.node.properties;
      
      // Check if this looks like a data object (has id, name, price, etc.)
      const hasDataProps = properties.some(prop => 
        prop.type === 'ObjectProperty' && 
        prop.key.name && 
        ['id', 'name', 'price', 'title', 'description'].includes(prop.key.name)
      );
      
      if (hasDataProps) {
        // Skip product/data objects - we don't want these
        return;
      }
      
      properties.forEach((prop) => {
        if (
          prop.type === 'ObjectProperty' &&
          (prop.key.name === 'src' || prop.key.name === 'url' || prop.key.name === 'image')
        ) {

          // Skip if the src value contains "akira-ui-generator.s3"
          if (prop.value.type === 'StringLiteral' && 
            prop.value.value.includes('akira-ui-generator.s3')) {
            return;
          }
          const nodeSourceCode = generator(path.node).code;
          candidateNodes.push(nodeSourceCode);
        }
      });
    },
    JSXElement(path) {
      const openingElement = path.node.openingElement;
      // Ensure we can extract the tag name properly
      const tagName = openingElement.name && openingElement.name.name;
      if (tagName === 'img' || tagName === 'Image') {
        const nodeSourceCode = generator(openingElement).code;
        const existingSrcAttr = openingElement.attributes.find(attr => attr.name && attr.name.name === 'src');

        // Skip if the src value contains "akira-ui-generator.s3"
        if (existingSrcAttr && existingSrcAttr.value && existingSrcAttr.value.type === 'StringLiteral' && 
          existingSrcAttr.value.value.includes('akira-ui-generator.s3')) {
          return;
        }

        // Check if this image is inside a loop
        let currentPath = path;
        let loopInfo = null;
        
        while (currentPath) {
          if (currentPath.node.type === 'CallExpression' && 
              currentPath.node.callee && 
              currentPath.node.callee.property && 
              (currentPath.node.callee.property.name === 'map' || 
               currentPath.node.callee.property.name === 'forEach' ||
               currentPath.node.callee.property.name === 'filter')) {
            
            // Get the callback function
            const callback = currentPath.node.arguments[0];
            if (callback && (callback.type === 'ArrowFunctionExpression' || callback.type === 'FunctionExpression')) {
              loopInfo = {
                arraySource: generator(currentPath.node.callee.object).code,
                mapMethod: currentPath.node.callee.property.name,
                callbackParam: callback.params[0] ? callback.params[0].name : 'item'
              };
              break;
            }
          }
          currentPath = currentPath.parentPath;
        }

        if (loopInfo) {
          // This is an image inside a loop
          const loopContext = {
            type: 'loop-image',
            arraySource: loopInfo.arraySource,
            mapMethod: loopInfo.mapMethod,
            imageElement: nodeSourceCode,
            callbackParam: loopInfo.callbackParam,
            srcExpression: existingSrcAttr && existingSrcAttr.value ? generator(existingSrcAttr.value).code : null
          };
          
          // Create a unique key to prevent duplicates
          const uniqueKey = `${loopInfo.arraySource}:${loopInfo.callbackParam}:${tagName}`;
          
          if (!detectedLoopImages.has(uniqueKey)) {
            detectedLoopImages.add(uniqueKey);
            candidateNodes.push(JSON.stringify(loopContext));
          }
        } else {
          // Regular image (not in a loop)
          if (existingSrcAttr) {
            if (existingSrcAttr.value.type === 'StringLiteral') {
              candidateNodes.push(nodeSourceCode);
            }
          } else {
            // If does not have existing src property, we would still want to capture it to add that. 
            candidateNodes.push(nodeSourceCode);
          }
        }
      }
    }
  });

  return candidateNodes;
}

function updateNodesWithResults(code, nodeResults) {
  const ast = babelParser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  // Create a mapping from the original node source code to its result
  const resultMap = new Map(nodeResults);

  traverse(ast, {
    ObjectExpression(path) {
      const properties = path.node.properties;
      const nodeSourceCode = generator(path.node).code;

      if (resultMap.has(nodeSourceCode)) {
        properties.forEach((prop) => {
          if (
            prop.type === 'ObjectProperty' &&
            (prop.key.name === 'src' || prop.key.name === 'url' || prop.key.name === 'image')
          ) {
            // Update the src property with the new image_url
            prop.value = t.stringLiteral(resultMap.get(nodeSourceCode)['image_url']);

            // Update the alt property with the description
            const existingAlt = properties.find((p) => p.key.name === 'alt');
            if (existingAlt) {
              existingAlt.value = t.stringLiteral(resultMap.get(nodeSourceCode)['description']);
            } else {
              const altProperty = t.objectProperty(
                t.identifier('alt'),
                t.stringLiteral(resultMap.get(nodeSourceCode)['description'])
              );
              path.node.properties.push(altProperty);
            }
          }
        });
      }
    },
    JSXElement(path) {
      const openingElement = path.node.openingElement;
      const nodeSourceCode = generator(openingElement).code;

      // Handle regular JSX elements
      if (resultMap.has(nodeSourceCode)) {
        // Find the src attribute regardless of its type
        const srcAttr = openingElement.attributes.find(
          (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'src'
        );

        if (srcAttr) {
          // Always update src with the new image URL as a string literal.
          srcAttr.value = t.stringLiteral(resultMap.get(nodeSourceCode)['image_url']);

          // Update or add the alt attribute with the new description.
          const existingAltAttr = openingElement.attributes.find(
            (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'alt'
          );
          if (existingAltAttr) {
            existingAltAttr.value = t.stringLiteral(resultMap.get(nodeSourceCode)['description']);
          } else {
            openingElement.attributes.push(
              t.jsxAttribute(
                t.jsxIdentifier('alt'),
                t.stringLiteral(resultMap.get(nodeSourceCode)['description'])
              )
            );
          }
        }
      }

      // NEW: Handle loop images - check if this JSX element matches any loop image contexts
      for (const [key, result] of resultMap.entries()) {
        try {
          const loopContext = JSON.parse(key);
          if (loopContext.type === 'loop-image') {
            // Check if this JSX element matches the loop image pattern
            const tagName = openingElement.name && openingElement.name.name;
            
            if ((tagName === 'img' || tagName === 'Image') && 
                nodeSourceCode.includes(loopContext.callbackParam || 'item')) {
              
              // This is likely the image element from the loop
              const srcAttr = openingElement.attributes.find(
                (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'src'
              );

              if (srcAttr) {
                // Replace template literal or dynamic src with static URL
                srcAttr.value = t.stringLiteral(result['image_url']);

                // Update alt attribute
                const existingAltAttr = openingElement.attributes.find(
                  (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'alt'
                );
                if (existingAltAttr) {
                  existingAltAttr.value = t.stringLiteral(result['description']);
                } else {
                  openingElement.attributes.push(
                    t.jsxAttribute(
                      t.jsxIdentifier('alt'),
                      t.stringLiteral(result['description'])
                    )
                  );
                }
                
                console.error(`Updated loop image: ${nodeSourceCode.substring(0, 50)}...`);
              }
            }
          }
        } catch (e) {
          // Not a JSON string, skip
          continue;
        }
      }
    },

    // NEW: Handle updates for array method calls (map, forEach)
    CallExpression(path) {
      const { node } = path;
      
      // Check if this is a .map() call that we need to update
      if (node.callee && 
          node.callee.property && 
          (node.callee.property.name === 'map' || 
           node.callee.property.name === 'forEach')) {
        
        for (const [key, result] of resultMap.entries()) {
          try {
            const loopContext = JSON.parse(key);
            if (loopContext.type === 'loop-image' && 
                loopContext.arraySource === generator(node.callee.object).code) {
              
              // This is the map call we need to update
              // For now, we'll add a comment indicating the image should be replaced
              console.error(`Found matching loop context for: ${loopContext.arraySource}`);
              
              // TODO: More sophisticated replacement logic could be added here
              // For simple cases, the JSXElement handler above should catch most cases
            }
          } catch (e) {
            // Not a JSON string, skip
            continue;
          }
        }
      }
    }
  });

  return generator(ast).code;
}

if (require.main === module) {
  const code = process.argv[2];
  const results = process.argv[3];

  if (!code) {
    console.error('Please provide code as an argument');
    process.exit(1);
  }

  try {
    if (results) {
      const nodeResults = JSON.parse(results);
      const updatedCode = updateNodesWithResults(code, nodeResults);
      console.log(updatedCode);
    } else {
      const nodes = findImageNodes(code);
      console.log(JSON.stringify(nodes));
    }
  } catch (error) {
    console.error('Error processing code:', error.message);
    process.exit(1);
  }
}
