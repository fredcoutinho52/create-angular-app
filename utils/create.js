const fs = require("fs");
const { htmlComponentContent, tsComponentContent } = require("./content");

const oldStr = "replace-here";

function updateProjectFiles(appName) {
  fs.readFile(`${appName}/angular.json`, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    const result = data.replaceAll(oldStr, appName);

    fs.writeFile(`${appName}/angular.json`, result, "utf-8", (err) => {
      if (err) {
        throw err;
      }
    });
  });

  fs.readFile(`${appName}/package.json`, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    const result = data.replaceAll(oldStr, appName);

    fs.writeFile(`${appName}/package.json`, result, "utf-8", (err) => {
      if (err) {
        throw err;
      }
    });
  });
}

function createComponentFiles(packageFolder, projectFolder, componentName) {
  const componentPath = `${projectFolder}\\src\\app\\${componentName}`;
  const options = { recursive: true }

  // create component folder
  fs.mkdir(componentPath, options, (err) => {
    if (err) {
      throw err;
    }
    console.log("✔ Component folder created successfully!");
  });

  // create html file
  const htmlFilePath = `${componentPath}\\${componentName}.component.html`;
  const htmlFileContent = htmlComponentContent(componentName);
  fs.writeFile(htmlFilePath, htmlFileContent, "utf-8", (err) => {
    if (err) {
      throw err;
    }
    console.log("✔ HTML file created successfully!");
  });

  // create css file
  const cssFilePath = `${componentPath}\\${componentName}.component.css`;
  fs.writeFile(cssFilePath, "", "utf-8", (err) => {
    if (err) {
      throw err;
    }
    console.log("✔ CSS file created successfully!");
  });

  // create ts file
  const tsFilePath = `${componentPath}\\${componentName}.component.ts`;
  const tsFileContent = tsComponentContent(componentName);
  fs.writeFile(tsFilePath, tsFileContent, "utf-8", (err) => {
    if (err) {
      throw err;
    }
    console.log("✔ TypeScript file created successfully!");
  });
}

module.exports = { updateProjectFiles, createComponentFiles }
