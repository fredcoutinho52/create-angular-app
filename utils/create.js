const fs = require("fs");
const { htmlComponentContent, tsComponentContent } = require("./content");
const { formatClassName } = require("./format");

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

function createComponentFiles(projectFolder, componentName) {
  const componentPath = `${projectFolder}\\src\\app\\${componentName}`;
  const modulePath = `${projectFolder}\\src\\app\\app.module.ts`;
  const options = { recursive: true }

  // check if component already exists
  fs.readFile(modulePath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const componentNameFormatted = formatClassName(componentName);
    const componentAlreadyExists = data.includes(componentNameFormatted);
    if (componentAlreadyExists) {
      throw new Error("Component already exists!");
    }
  });

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

  updateProjectWithComponent(projectFolder, componentName);
}

function updateProjectWithComponent(projectFolder, componentName) {
  const modulePath = `${projectFolder}\\src\\app\\app.module.ts`;

  fs.readFile(modulePath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const componentNameFormatted = formatClassName(componentName);
    const importLine = `import { ${componentNameFormatted}Component } from './${componentName}/${componentName}.component';`;
    const moduleContent = data.split("@NgModule");
    const contentWithImport = moduleContent[0] + `${importLine}\n` + "\n@NgModule" + moduleContent[1];

    const moduleImports = contentWithImport.split("declarations: [");
    const result = moduleImports[0] + "declarations: [\n" + `\t\t${componentNameFormatted}Component,` + moduleImports[1];

    fs.writeFile(modulePath, result, "utf-8", (err) => {
      if (err) {
        throw err;
      }
      console.log("✔ Module updated successfully!");
    });
  });
}

module.exports = {
  updateProjectFiles,
  createComponentFiles,
}
