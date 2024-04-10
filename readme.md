# JStyle.js Readme

This readme file provides instructions for getting started with JStyle.js, a JavaScript framework for styling web pages.

## Requirements

- Node.js installed on your machine.

## Getting Started

1. Clone the repository by running the following command in your terminal:
    ```bash
    git clone https://github.com/othman4dev/jStyle.js.git
    ```

2. Navigate to the cloned folder:
    ```bash
    cd jStyle.js
    ```

3. Write your code in the `style.jss` file using the correct syntax.

4. Run the following command to generate the `jss.js` file only , which contains your JavaScript code that will be linked to the DOM:
    ```bash
    node main.js
    ```
5. Optionaly you can run this command which will output 2 files : jss.js and jss.css , which you would have then to link then to your DOM :
    ```bash
    node main.js --both
    ```


## Contributing

If you want to contribute to this framework, follow these steps:

1. Install `pegjs` globally by running the following command:
    ```bash
    npm install -g pegjs
    ```

2. Edit the `grammar.pegjs` file, which contains the grammar of the framework.

3. After editing the grammar, run the following command to update the parser (`grammar.js`):
    ```bash
    npx pegjs grammar.pegjs
    ```

## Additional Information

- The `main.js` file contains the structure and logic for parsing the JSS syntax. It uses the `FS` module to read and write files and the `grammar.js` parser to parse the JSS syntax.

- Modifying the `jss.js` file directly will not have any effect.

We hope you find JStyle.js useful for your web development projects. If you have any questions or encounter any issues, please feel free to reach out to us.

#### otman kharbouch , github : [othman4dev](https://github.com/othman4dev)