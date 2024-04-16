// Welcome to JSS , this is the main script that perform operations and functions to the jss file after reading it and then write it in a js file
// This code is made by othman Kharbouch github : othman4dev
// Comments are written by othman Kharbouch

const fs = require("fs");
const parser = require("../parser/parser.js");
const yargs = require("yargs");
const chalk = require("chalk");

console.log(chalk.yellow.bgBlue("JSS framework running ... "));

// Define command-line options using yargs
const argv = yargs
  .option("both", {
    alias: "b",
    description: "Generate both CSS and JavaScript files",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

// Check if the 'both' flag is provided
if (argv.both) {
  // Generate both CSS and JavaScript files
  generateBothFiles();
} else {
  // Generate only JavaScript file
  generateJavaScriptFile();
}

function generateBothFiles() {
  // Your logic to generate both CSS and JavaScript files
  console.log(
    chalk.green.bold(
      "\nGenerating both CSS and JavaScript files ( jss.js , jss.css )..."
    )
  );
  fs.readFile("style.jss", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // Parsed JSS syntax in this const
    const parseTree = parser.parse(data);
    // Function that flatten arrays to text
    function flattenAndJoin(arr) {
      return arr.flat(Infinity).join("");
    }
    // Function that generate a uniqueID for initializing variables in the new js file. (used to store old css propreties in a variable for future)
    function uniqueid() {
      return Math.random().toString(36).substr(2, 9);
    }
    // Get the root of the parse tree with the selectors
    let selectors = parseTree[1];
    // Ths js script that will be eventually written in the jss.js file after operations
    let js = `function numberSupport(string,coe) {\n\tlet numbers = string.match(/\\d+/g);\n\tlet letters = string.match(/[a-zA-Z]+/g);\n\tlet percetage = string.match(/%/g);\n\tlet result;\n\tif (!string.match(/\\d+/g)) {\n\t\tresult = string;\n\t} else\n\tif (letters && numbers) {\n\t\tlet number = numbers * coe;\n\t\tresult = number + letters;\n\t} else\n\tif (percetage) {\n\t\tlet number = numbers * coe;\n\t\tresult = number + '%';\n\t} else if (numbers) {\n\t\tlet number = numbers * coe;\n\t\tresult = number;\n\t} else {\n\t\tresult = string;\n\t}\n\treturn result;\n}\n`;
    let css = "";
    // Loops on all selectors and
    selectors.forEach((element) => {
      // inside the selector we initialize the prop the selector as a string and the value
      let selector = "";
      let prop = "";
      let value = "";

      if (element[0].includes("function")) {
        let event = flattenAndJoin(element[10][1]);
        let event_selector = flattenAndJoin(element[7]);
        let randomSelectors = [];
        if (event == "hover") {
          let statements = element[15];
          statements.forEach((element3) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              let randSelector = `initial${uniqueid()}`;
              randomSelectors.push(randSelector);
              selectorNoPseudo = selector.split(":")[0];
              prop = flattenAndJoin(element2[0]);
              let cssLikeProp = prop.replace(
                /[A-Z]/g,
                (match) => `-${match.toLowerCase()}`
              );
              js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
            });
          });
          js += `document.querySelector('${event_selector}').addEventListener('mouseover', function() {\n`;
          statements.forEach((element3) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              prop = flattenAndJoin(element2[0]);
              value = flattenAndJoin(element2[4]);
              if (value.includes("->")) {
                let referenceSelector = flattenAndJoin(element2[4][1]);
                let referenceProp = flattenAndJoin(element2[4][6]);
                let camelCaseCssProp = referenceProp;
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                js += `\tdocument.querySelector('${selector}').style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
              } else {
                js += `\tdocument.querySelector('${selector}').style.${prop} = '${value}';\n`;
              }
            });
          });
          js += `});\n`;
        } else {
          let statements = element[15];
          js += `document.querySelector('${event_selector}').addEventListener('${event}', function() {\n`;
          statements.forEach((element3) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              prop = flattenAndJoin(element2[0]);
              value = flattenAndJoin(element2[4]);
              if (value.includes("->")) {
                let referenceSelector = flattenAndJoin(element2[4][1]);
                let referenceProp = flattenAndJoin(element2[4][6]);
                let camelCaseCssProp = referenceProp;
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                js += `\tdocument.querySelector('${selector}').style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
              } else {
                js += `\tdocument.querySelector('${selector}').style.${prop} = '${value}';\n`;
              }
            });
          });
          js += `});\n`;
        }
      } else {
        // we use the flattenAndJoin function to turn [ '#' , ['d','i','v']] to '#div'
        selector = flattenAndJoin(element[0][0]);
        // in this variable we get the entire line of proprety like : width = 100px; and put it in this variable which help loop on all lines of a selection (ofc the format of this is still in arrays)
        let propVal = element[0][4];
        // here we check if the selector contain any pseudo-classes because in javaScript it is not possible to select an element with its pseudo-class which require a little more treatment for example :
        // :hover we need to initialize two event listeners one on mouseover and one on mouseout
        if (selector.includes(":")) {
          propVal.forEach((element2) => {
            prop = flattenAndJoin(element2[0]);
            value = flattenAndJoin(element2[4]);
            // the first part of the selector here
            let selectorNoPseudo = selector.split(":")[0];
            // the pseudo_class
            let pseudo_class = selector.split(":")[1];
            // now we can handle all the javaScript events with this jss syntax like onclick or onmouseover and add any style to it
            if (pseudo_class) {
              if (value.includes("->")) {
                // Here get the reference selector like #div in (#div)->something and put it inside this variable
                let referenceSelector = flattenAndJoin(element2[4][1]);
                // Get the proprety that you want to access from the referenceSelector like height in : (#something)->height
                let referenceProp = flattenAndJoin(element2[4][6]);
                // For getting styles from an element we need to use getComputedStyle(element).getPropretyValue(proprety here) and the proprety here should be like in CSS format not like in JS format
                // Here we put the camelCase js format of the proprety
                let camelCaseCssProp = referenceProp;
                // Here we turn it to a CSS format proprety like : from this : backgroundColor to : background-color
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                // Initializing a unique ID for the variable that will store the older style for any other use like in :hover it might need older style to perform two listeners that listen to onmouseover and onmouseout
                // Then put the assigned style to th onmouseover event and put the older style to the onmouseout event
                let randSelector = `initial${uniqueid()}`;
                // Check if it is :hover to perform two eventListeners
                if (pseudo_class == "hover") {
                  // This script will store the initial value of proprety in a rand variable
                  js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  // Then add the onmouseover eventListener on mouseover to change the proprety to the reference proprety value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseover', function() {\n`;
                  js += `\tthis.style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `});\n`;
                  // Then add the onmouseout eventListener on mouseout to return the proprety to its initial value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseout', function() {\n`;
                  js += `\tthis.style.${prop} = ${randSelector};\n`;
                  js += `});\n`;
                } else {
                  // js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('${pseudo_class}', function() {\n`;
                  js += `\tthis.style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `});\n`;
                }
              } else {
                let camelCaseCssProp = prop;
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                let randSelector = `initial${uniqueid()}`;
                // js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                // js += `document.querySelector('${selector.split(':')[0]}').addEventListener('${pseudo_class}', function() {\n`;
                // js += `this.style.${prop} = '${value}';\n`;
                // js += `});\n`;
                if (pseudo_class == "hover") {
                  // This script will store the initial value of proprety in a rand variable
                  js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  // Then add the onmouseover eventListener on mouseover to change the proprety to the reference proprety value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseover', function() {\n`;
                  js += `\tthis.style.${prop} = '${value}';\n`;
                  js += `});\n`;
                  // Then add the onmouseout eventListener on mouseout to return the proprety to its initial value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseout', function() {\n`;
                  js += `\tthis.style.${prop} = ${randSelector};\n`;
                  js += `});\n`;
                } else {
                  // js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('${pseudo_class}', function() {\n`;
                  js += `\tthis.style.${prop} = '${value}';\n`;
                  js += `});\n`;
                }
              }
            }
          });
        } else {
          propVal.forEach((element2) => {
            prop = flattenAndJoin(element2[0]);
            value = flattenAndJoin(element2[4]);
            if (value.includes("->")) {
              let referenceSelector = flattenAndJoin(element2[4][1]);
              let referenceProp = flattenAndJoin(element2[4][6]);
              let camelCaseCssProp = referenceProp;
              let cssLikeProp = camelCaseCssProp.replace(
                /[A-Z]/g,
                (match) => `-${match.toLowerCase()}`
              );
              js += `document.querySelector('${selector}').style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
            } else {
              let cssLikeProp = prop.replace(
                /[A-Z]/g,
                (match) => `-${match.toLowerCase()}`
              );
              css += `\n${selector} {\n \t${cssLikeProp} : ${value} ;\n }`;
            }
          });
        }
      }
    });
    fs.writeFile("jss.js", js, (err) => {
      if (err) {
        console.error(chalk.bgRed.black("Error writing file:", err));
        return;
      }
      const lineCount = js.split("\n").length;
      console.log(chalk.yellow.bold(`\n* Wrote ${lineCount} lines to jss.js`));
    });
    // Here we should Combine all styles with their common selectors
    function combineSelectors(css) {
      const rules = css.split("}").filter(Boolean);
      const combined = {};

      for (const rule of rules) {
        const [fullSelector, properties] = rule.split("{").map((s) => s.trim());
        const props = properties.split(";").filter(Boolean);

        if (!combined[fullSelector]) {
          combined[fullSelector] = [];
        }

        for (const prop of props) {
          combined[fullSelector].push(prop.trim());
        }
      }

      let combinedCss = "";

      for (const selector in combined) {
        combinedCss += `${selector} {\n`;

        for (const property of combined[selector]) {
          combinedCss += `\t${property};\n`;
        }

        combinedCss += "}\n";
      }

      return combinedCss;
    }

    css = combineSelectors(css);
    fs.writeFile("jss.css", css, (err) => {
      if (err) {
        console.error(chalk.bgRed.black("Error writing file:", err));
        return;
      }
      const lineCount = css.split("\n").length;
      console.log(chalk.blue(`\n* Wrote ${lineCount} lines to jss.css\n`));
      console.log(
        chalk.underline.magenta("\nMade By Otman Kharbouch : "),
        chalk.blueBright.bold("Othman4dev"),
        chalk.underline.magenta(" (GitHub)\n")
      );
    });
  });
}
function generateJavaScriptFile() {
  console.log(
    chalk.green.bold("\nGenerating JavaScript file only ( jss.js )...")
  );
  fs.readFile("style.jss", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // Parsed JSS syntax in this const
    const parseTree = parser.parse(data);

    //console.log(parseTree[1][13]);
    // Function that flatten arrays to text
    function flattenAndJoin(arr) {
      return arr.flat(Infinity).join("");
    }
    // Function that generate a uniqueID for initializing variables in the new js file. (used to store old css propreties in a variable for future)
    function uniqueid() {
      return Math.random().toString(36).substr(2, 9);
    }
    // Get the root of the parse tree with the selectors
    let selectors = parseTree[1];
    // Ths js script that will be eventually written in the jss.js file after operations
    let js = `function numberSupport(string,coe) {\n\tlet numbers = string.match(/\\d+/g);\n\tlet letters = string.match(/[a-zA-Z]+/g);\n\tlet percetage = string.match(/%/g);\n\tlet result;\n\tif (!string.match(/\\d+/g)) {\n\t\tresult = string;\n\t} else\n\tif (letters && numbers) {\n\t\tlet number = numbers * coe;\n\t\tresult = number + letters;\n\t} else\n\tif (percetage) {\n\t\tlet number = numbers * coe;\n\t\tresult = number + '%';\n\t} else if (numbers) {\n\t\tlet number = numbers * coe;\n\t\tresult = number;\n\t} else {\n\t\tresult = string;\n\t}\n\treturn result;\n}\n`;
    // Loops on all selectors and
    selectors.forEach((element) => {
      // inside the selector we initialize the prop the selector as a string and the value
      let selector = "";
      let prop = "";
      let value = "";
      //console.log(element[1]);
      if (element[1].includes(":::")) {
        let tunnel = element[0] + element[1] + element[2];
        tunnel = tunnel.replace(/,/g, "");
        let firstSelector = tunnel.split(":::")[0];
        let secondSelector = tunnel.split(":::")[1];
        let prop_functions = element[6];
        let uniquID = uniqueid();
        prop_functions.forEach((element) => {
          let prop = flattenAndJoin(element[0]);
          let cssLikeProp = prop.replace(
            /[A-Z]/g,
            (match) => `-${match.toLowerCase()}`
          );
          let coe = element[2][1][0];
          js += ` var observer${uniquID} = new MutationObserver(function(mutations) {\n\tmutations.forEach(function(mutation) {\n\t\tif (mutation.attributeName === 'style') {\n`;
          js += `\t\t\tdocument.querySelector('${secondSelector}').style.${prop} = numberSupport(getComputedStyle(document.querySelector('${firstSelector}')).getPropertyValue('${cssLikeProp}') , ${coe});\n`;
          js += `\t\t}\n\t});\n});\nvar config${uniquID} = { attributes: true, attributeFilter: ['style'] };\nobserver${uniquID}.observe(document.querySelector('${firstSelector}'), config${uniquID});\n`;
        });
      }
      // we use the flattenAndJoin function to turn [ '#' , ['d','i','v']] to '#div'
      else if (element[0].includes("function")) {
        let event = flattenAndJoin(element[10][1]);
        let event_selector = flattenAndJoin(element[7]);
        let randomSelectors = [];
        if (event == "hover") {
          let statements = element[15];
          statements.forEach((element3) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              let randSelector = `initial${uniqueid()}`;
              randomSelectors.push(randSelector);
              selectorNoPseudo = selector.split(":")[0];
              prop = flattenAndJoin(element2[0]);
              let cssLikeProp = prop.replace(
                /[A-Z]/g,
                (match) => `-${match.toLowerCase()}`
              );
              js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
            });
          });
          js += `document.querySelector('${event_selector}').addEventListener('mouseover', function() {\n`;
          statements.forEach((element3) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              prop = flattenAndJoin(element2[0]);
              value = flattenAndJoin(element2[4]);
              if (value.includes("->")) {
                let referenceSelector = flattenAndJoin(element2[4][1]);
                let referenceProp = flattenAndJoin(element2[4][6]);
                let camelCaseCssProp = referenceProp;
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                js += `\tdocument.querySelector('${selector}').style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
              } else {
                js += `\tdocument.querySelector('${selector}').style.${prop} = '${value}';\n`;
              }
            });
          });
          js += `});\n`;

          js += `document.querySelector('${event_selector}').addEventListener('mouseout', function() {\n`;
          statements.forEach((element3, index) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              prop = flattenAndJoin(element2[0]);
              value = flattenAndJoin(element2[4]);
              js += `\tdocument.querySelector('${selector}').style.${prop} = ${randomSelectors[index]};\n`;
              index++;
            });
          });
          js += `});\n`;
        } else {
          let statements = element[15];
          js += `document.querySelector('${event_selector}').addEventListener('${event}', function() {\n`;
          statements.forEach((element3) => {
            let selector = flattenAndJoin(element3[0][0]);
            let propVal = element3[0][4];
            propVal.forEach((element2) => {
              prop = flattenAndJoin(element2[0]);
              value = flattenAndJoin(element2[4]);
              if (value.includes("->")) {
                let referenceSelector = flattenAndJoin(element2[4][1]);
                let referenceProp = flattenAndJoin(element2[4][6]);
                let camelCaseCssProp = referenceProp;
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                js += `\tdocument.querySelector('${selector}').style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
              } else {
                js += `\tdocument.querySelector('${selector}').style.${prop} = '${value}';\n`;
              }
            });
          });
          js += `});\n`;
        }
      } else {
        selector = flattenAndJoin(element[0][0]);

        // in this variable we get the entire line of proprety like : width = 100px; and put it in this variable which help loop on all lines of a selection (ofc the format of this is still in arrays)
        let propVal = element[0][4];
        // here we check if the selector contain any pseudo-classes because in javaScript it is not possible to select an element with its pseudo-class which require a little more treatment for example :
        // :hover we need to initialize two event listeners one on mouseover and one on mouseout
        if (selector.includes(":")) {
          propVal.forEach((element2) => {
            prop = flattenAndJoin(element2[0]);
            value = flattenAndJoin(element2[4]);
            // the first part of the selector here
            let selectorNoPseudo = selector.split(":")[0];
            // the pseudo_class
            let pseudo_class = selector.split(":")[1];
            // now we can handle all the javaScript events with this jss syntax like onclick or onmouseover and add any style to it
            if (pseudo_class) {
              if (value.includes("->")) {
                // Here get the reference selector like #div in (#div)->something and put it inside this variable
                let referenceSelector = flattenAndJoin(element2[4][1]);
                // Get the proprety that you want to access from the referenceSelector like height in : (#something)->height
                let referenceProp = flattenAndJoin(element2[4][6]);
                // For getting styles from an element we need to use getComputedStyle(element).getPropretyValue(proprety here) and the proprety here should be like in CSS format not like in JS format
                // Here we put the camelCase js format of the proprety
                let camelCaseCssProp = referenceProp;
                // Here we turn it to a CSS format proprety like : from this : backgroundColor to : background-color
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                // Initializing a unique ID for the variable that will store the older style for any other use like in :hover it might need older style to perform two listeners that listen to onmouseover and onmouseout
                // Then put the assigned style to th onmouseover event and put the older style to the onmouseout event
                let randSelector = `initial${uniqueid()}`;
                // Check if it is :hover to perform two eventListeners
                if (pseudo_class == "hover") {
                  // This script will store the initial value of proprety in a rand variable
                  js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  // Then add the onmouseover eventListener on mouseover to change the proprety to the reference proprety value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseover', function() {\n`;
                  js += `\tthis.style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `});\n`;
                  // Then add the onmouseout eventListener on mouseout to return the proprety to its initial value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseout', function() {\n`;
                  js += `\tthis.style.${prop} = ${randSelector};\n`;
                  js += `});\n`;
                } else {
                  // js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('${pseudo_class}', function() {\n`;
                  js += `\tthis.style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `});\n`;
                }
              } else {
                let camelCaseCssProp = prop;
                let cssLikeProp = camelCaseCssProp.replace(
                  /[A-Z]/g,
                  (match) => `-${match.toLowerCase()}`
                );
                let randSelector = `initial${uniqueid()}`;
                // js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                // js += `document.querySelector('${selector.split(':')[0]}').addEventListener('${pseudo_class}', function() {\n`;
                // js += `this.style.${prop} = '${value}';\n`;
                // js += `});\n`;
                if (pseudo_class == "hover") {
                  // This script will store the initial value of proprety in a rand variable
                  js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  // Then add the onmouseover eventListener on mouseover to change the proprety to the reference proprety value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseover', function() {\n`;
                  js += `\tthis.style.${prop} = '${value}';\n`;
                  js += `});\n`;
                  // Then add the onmouseout eventListener on mouseout to return the proprety to its initial value
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('mouseout', function() {\n`;
                  js += `\tthis.style.${prop} = ${randSelector};\n`;
                  js += `});\n`;
                } else {
                  // js += `let ${randSelector} = getComputedStyle(document.querySelector('${selectorNoPseudo}')).getPropertyValue('${cssLikeProp}');\n`;
                  js += `document.querySelector('${selectorNoPseudo}').addEventListener('${pseudo_class}', function() {\n`;
                  js += `\tthis.style.${prop} = '${value}';\n`;
                  js += `});\n`;
                }
              }
            }
          });
        } else {
          propVal.forEach((element2) => {
            prop = flattenAndJoin(element2[0]);
            value = flattenAndJoin(element2[4]);
            if (value.includes("->")) {
              let referenceSelector = flattenAndJoin(element2[4][1]);
              let referenceProp = flattenAndJoin(element2[4][6]);
              let camelCaseCssProp = referenceProp;
              let cssLikeProp = camelCaseCssProp.replace(
                /[A-Z]/g,
                (match) => `-${match.toLowerCase()}`
              );
              js += `document.querySelector('${selector}').style.${prop} = getComputedStyle(document.querySelector('${referenceSelector}')).getPropertyValue('${cssLikeProp}');\n`;
            } else {
              js += `document.querySelector('${selector}').style.${prop} = '${value}';\n`;
            }
          });
        }
      }
    });
    fs.writeFile("jss.js", js, (err) => {
      if (err) {
        console.error(chalk.bgRed.black("Error writing file:", err));
        return;
      }

      const lineCount = js.split("\n").length;
      console.log(chalk.yellow.bold(`\n* Wrote ${lineCount} lines to jss.js`));
      console.log(
        chalk.underline.magenta("\nMade By Otman Kharbouch : "),
        chalk.blueBright.bold("Othman4dev"),
        chalk.underline.magenta(" (GitHub)\n")
      );
    });
  });
}
