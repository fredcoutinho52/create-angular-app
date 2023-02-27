import fs from "fs";
import { updateProjectFiles } from "../utils/create.js";

export function createApp(appName = "angular-app") {
	const startTime = new Date();
	
	console.log(`✔ Creating project ${appName}`);

	const options = { recursive: true }

	// create project folder
	fs.mkdir(appName, options, (err) => {
		if (err) {
			throw err;
		}

		console.log("✔ Project folder created successfully!");
	});

	// copy template to folder
	fs.cp("templates/project", `${appName}`, options, (err) => {
		if (err) {
			throw err;
		}

		console.log("✔ Project created successfully!");
		updateProjectFiles(appName);
		const finishTime = new Date() - startTime;
		console.log(`✔ Done in ${finishTime}ms`);
		console.log("\nInstall the dependencies with your favorite package manager.");
	});
}

export function createComponent(componentName) {
	console.log(`✔ Creating component ${componentName}`);
}
