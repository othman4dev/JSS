const fs = require('fs');
const parser = require('./grammar.js');

// Read the JSS script file
fs.readFile('style.jss', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const parseTree = parser.parse(data);
    function flattenAndJoin(arr) {
        return arr.flat(Infinity).join('');
    }
    let selectors = parseTree[1];
    let js = '';
    selectors.forEach(element => {
        let selector = '';
        let prop = '';
        let value = '';
        selector = flattenAndJoin(element[0][0]);
        let propVal = element[0][4];
        propVal.forEach(element2 => {
            prop = flattenAndJoin(element2[0]);
            value = flattenAndJoin(element2[4]);
            if (value.includes('(')) {
                let referenceSelector = flattenAndJoin(element2[4][1]);
                let referenceProp = flattenAndJoin(element2[4][6]);
                js += `document.querySelector('${selector}').style.${prop} = document.querySelector('${referenceSelector}').style.${referenceProp};\n`;
            } else {
                js += `document.querySelector('${selector}').style.${prop} = '${value}';\n`;
            }
        });
    });
    // console.log(selectors[0][0][4][1][4]);
    // let propreties = parseTree[1][0][0][4];
    // propreties.forEach(element => {
    //     console.log(flattenAndJoin(element[0]));
    // });
    // let property = flattenAndJoin(parseTree[1][0][0][4][0][0]);
    // console.log(property);
    // let property2 = flattenAndJoin(parseTree[1][0][0][4][1][0]);
    // console.log(property2);
    // let value = flattenAndJoin(parseTree[1][0][0][4][0][4]);
    // console.log(value);
    
    // Process the parse tree
    
    fs.writeFile('jss.js', js, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
    });
});

// Process the parse tree
function processParseTree(parseTree) {
    let css = '';

    parseTree.forEach(statement => {
        if (statement.selector && statement.properties) {
            const selector = statement.selector;
            const properties = statement.properties;
            let cssRule = `${selector} {`;
            properties.forEach(property => {
                cssRule += `${property.name}: ${property.value};`;
            });
            cssRule += '}';
            css += cssRule;
        }
    });

    return css;
}