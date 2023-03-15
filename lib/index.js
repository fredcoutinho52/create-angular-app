const fs = require("fs");
const { updateProjectFiles, createComponentFiles } = require("../utils/create");

const packageFolder = __dirname.split("lib")[0];

function createApp(appName = "angular-app") {
	const startTime = new Date();
	const options = { recursive: true }

	// check if there is a folder with the same name
	fs.readdir(__dirname, options, (err, files) => {
		if (err) {
			throw err;
		}

		console.log(files);
	});
	
	// console.log(`✔ Creating project ${appName}`);

	// // create project folder
	// fs.mkdir(appName, options, (err) => {
	// 	if (err) {
	// 		throw err;
	// 	}

	// 	console.log("✔ Project folder created successfully!");
	// });

	// // copy template to folder
	// fs.cp(`${packageFolder}templates\\project`, `${appName}`, options, (err) => {
	// 	if (err) {
	// 		throw err;
	// 	}

	// 	console.log("✔ Project created successfully!");
	// 	updateProjectFiles(appName);
	// 	const finishTime = new Date() - startTime;
	// 	console.log(`✔ Done in ${finishTime}ms`);
	// 	console.log("\nInstall the dependencies with your favorite package manager.");
	// });
}

function createComponent(componentName) {
	const projectFolder = process.cwd();
	fs.readdir(projectFolder, (err, files) => {
		if (err) {
			throw err;
		}
		
		const isAngularProject = files.some(item => item === "angular.json");
		if (isAngularProject) {
			console.log(`✔ Creating component ${componentName}`);
			createComponentFiles(projectFolder, componentName);
			return;
		}
		console.log("X Angular project not found!");
	});
}

function createModule(moduleName) {

}

function createService(serviceName) {
	
}

module.exports = {
	createApp,
	createComponent,
	createModule,
	createService,
}
