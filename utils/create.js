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

module.exports = { updateProjectFiles }
