const { formatClassName } = require("./format");

function htmlComponentContent(componentName) {
    return `<h1>Change this file to start develop ${componentName}!</h1>`;
}

function tsComponentContent(componentName) {
    const nameFormatted = formatClassName(componentName);
    return `import { Component } from '@angular/core';

    @Component({
        selector: 'app-${componentName}',
        templateUrl: './${componentName}.component.html',
        styleUrls: ['./${componentName}.component.css']
    })
    export class ${nameFormatted}Component { }`;
}

function serviceContent(serviceName) {
    const nameFormatted = formatClassName(serviceName);
    return `import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({
    providedIn: 'root'
    })
    export class ${nameFormatted}Service {

    constructor(
        private http: HttpClient,
    ) { }

    // write your http methods here
    }`;
}

module.exports = {
    htmlComponentContent,
    tsComponentContent,
    serviceContent,
}
