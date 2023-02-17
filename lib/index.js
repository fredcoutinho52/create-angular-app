const fs = require("fs");
const { exec } = require("child_process");

function createApp(appName = "angular-app") {
	console.log(`Creating app ${appName}`);

	exec(`ng new ${appName}`, (error, stdout, stderr) => {
    if (error) {
			console.log(`Error: ${error.message}`);
			return;
    }
    if (stderr) {
			console.log(stderr);

			fs.unlink(`${appName}/README.md`, (err) => {
				if (err) {
					console.log(err);
				}
			});

			fs.unlink(`${appName}/package-lock.json`, (err) => {
				if (err) {
					console.log(err);
				}
			});

			return;
    }
	});
}

function createComponent(componentName) {
	console.log("creating component " + componentName);
}

module.exports = { createApp, createComponent }
