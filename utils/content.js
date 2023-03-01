const { formatComponentName } = require("./format");

function htmlComponentContent(componentName) {
    return `<h1>Change this file to start develop ${componentName}!</h1>`;
}

function tsComponentContent(componentName) {
    const nameFormatted = formatComponentName(componentName);
    return `import { Component } from '@angular/core';

    @Component({
        selector: 'app-${componentName}',
        templateUrl: './${componentName}.component.html',
        styleUrls: ['./${componentName}.component.css']
    })
    export class ${nameFormatted}Component { }`;
}

module.exports = { htmlComponentContent, tsComponentContent }
