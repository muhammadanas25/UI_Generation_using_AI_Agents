const openingElement = path.node.openingElement;
const tagName = openingElement.name.name;


if (tagName === 'img' || tagName === 'Image') {
    // Look for a src attribute
    const srcAttr = openingElement.attributes.find(
      (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'src'
    );
    
    const nodeSourceCode = generator(openingElement).code;
    // Even if src is dynamic (non-string), we want to capture this node.
    if (srcAttr) {
      candidateNodes.push(nodeSourceCode);
    } else {
      // If no src exists, still capture the node so it can be updated.
      candidateNodes.push(nodeSourceCode);
    }
  }


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
        }
    } else {
        // If does not have existing src property, we would still wana capture it to add that. 
        candidateNodes.push(nodeSourceCode);
    }
}

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