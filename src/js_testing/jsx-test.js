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

    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties;
            properties.forEach(prop => {
                if (prop.type === 'ObjectProperty' && (prop.key.name === 'src' || prop.key.name === 'url' || prop.key.name === 'image')) {
                    const nodeSourceCode = generator(path.node).code;
                    candidateNodes.push(nodeSourceCode);
                }
            });
        },
        JSXElement(path) {
            const openingElement = path.node.openingElement;
            const tagName = openingElement.name.name;
            if (tagName === 'img' || tagName === 'Image') {
                const nodeSourceCode = generator(openingElement).code;
                const existingSrcAttr = openingElement.attributes.find(attr => attr.name.name === 'src');
                // We check if the src attribute is a string literal, because we only want to grab the nodes that have a string literal src
                // e.g. <Image src="/placeholder.png" alt="A placeholder image for a t-shirt" width={1200} height={900} />
                // but not <Image src={someVariable} alt="A placeholder image for a t-shirt" width={1200} height={900} />
                // because these non-string literal src attributes are already handled by the ObjectExpression path
                if (existingSrcAttr) {
                    if (existingSrcAttr.value.type === 'StringLiteral') {
                        candidateNodes.push(nodeSourceCode);
                    } else if (existingSrcAttr.value.type === 'JSXExpressionContainer' && 
                             existingSrcAttr.value.expression.type === 'TemplateLiteral') {
                        candidateNodes.push(nodeSourceCode);
                    }
                } else {
                    candidateNodes.push(nodeSourceCode);
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

    const resultMap = new Map(nodeResults);

    traverse(ast, {
        ObjectExpression(path) {
            const properties = path.node.properties;
            const nodeSourceCode = generator(path.node).code;
            
            if (resultMap.has(nodeSourceCode)) {
                properties.forEach(prop => {
                    if (prop.type === 'ObjectProperty' && 
                        (prop.key.name === 'src' || prop.key.name === 'url' || prop.key.name === 'image')) {
                        prop.value = t.stringLiteral(resultMap.get(nodeSourceCode));
                    }
                });
            }
        },
        JSXElement(path) {
            const openingElement = path.node.openingElement;
            const nodeSourceCode = generator(openingElement).code;
            
            if (resultMap.has(nodeSourceCode)) {
                const srcAttr = openingElement.attributes.find(attr => 
                    attr.type === 'JSXAttribute' && attr.name.name === 'src'
                );
                
                if (srcAttr) {
                    srcAttr.value = t.stringLiteral(resultMap.get(nodeSourceCode));
                }
            }
        }
    });

    return generator(ast).code;
}

// Handle command line input
if (require.main === module) {
    const code = process.argv[2];
    const results = process.argv[3];  // New argument for results
    
    if (!code) {
        console.error('Please provide code as an argument');
        process.exit(1);
    }
    
    try {
        if (results) {
            // If results are provided, update the nodes
            const nodeResults = JSON.parse(results);
            const updatedCode = updateNodesWithResults(code, nodeResults);
            console.log(updatedCode);
        } else {
            // Original node finding behavior
            const nodes = findImageNodes(code);
            console.log(JSON.stringify(nodes));
        }
    } catch (error) {
        console.error('Error processing code:', error.message);
        process.exit(1);
    }
}
