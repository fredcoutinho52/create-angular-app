const fs = require("fs");

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

  // copy template files
  fs.cp(`${packageFolder}templates\\component`, componentPath, options, (err) => {
    if (err) {
      throw err;
    }

    console.log("✔ Component created successfully!");
  });

  // update files with component name

}

module.exports = { updateProjectFiles, createComponentFiles }
