const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function findImportStatements(code) {
    const ast = babelParser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
    });

    const imports = new Map();

    traverse(ast, {
        ImportDeclaration(path) {
            const source = path.node.source.value;
            path.node.specifiers.forEach(specifier => {
                if (specifier.type === 'ImportSpecifier' || specifier.type === 'ImportDefaultSpecifier') {
                    const importedName = specifier.local.name;
                    if (imports.has(source)) {
                        const existing = imports.get(source);
                        if (Array.isArray(existing)) {
                            existing.push(importedName);
                        } else {
                            imports.set(source, [existing, importedName]);
                        }
                    } else {
                        imports.set(source, [importedName]);
                    }
                }
            });
        }
    });

    const standardImports = {};
    for (const [source, importList] of imports.entries()) {
        if (Array.isArray(importList)) {
            importList.forEach(importName => {
                standardImports[importName] = source;
            });
        } else {
            standardImports[importList] = source;
        }
    }

    return standardImports;
}


if (require.main === module) {
    const code = process.argv[2];
    
    if (!code) {
        console.error('Please provide code as an argument');
        process.exit(1);
    }
    
    try {
        const imports = findImportStatements(code);
        console.log(JSON.stringify(imports));
    } catch (error) {
        console.error('Error processing code:', error.message);
        process.exit(1);
    }
}

