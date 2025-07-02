const babelParser = require('@babel/parser');

function validateSyntax(code) {
    const errors = [];
    
    try {
        // Try to parse the code
        babelParser.parse(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript'],
        });
        
        // If we get here, parsing was successful
        return { errors: [] };
    } catch (error) {
        // Check for specific error types
        if (error.message.includes('Adjacent JSX elements')) {
            errors.push(`JSX structure error: ${error.message}`);
        } else if (error.message.includes('Unexpected token')) {
            errors.push(`Syntax error: ${error.message}`);
        } else {
            errors.push(`Parse error: ${error.message}`);
        }
        
        return { errors };
    }
}

if (require.main === module) {
    const code = process.argv[2];
    
    if (!code) {
        console.error('Please provide code as an argument');
        process.exit(1);
    }
    
    try {
        const result = validateSyntax(code);
        console.log(JSON.stringify(result));
    } catch (error) {
        console.log(JSON.stringify({ errors: [`Validation failed: ${error.message}`] }));
    }
}

module.exports = { validateSyntax }; 