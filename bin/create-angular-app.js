#!/usr/bin/env node

const {
  createApp,
  createComponent,
  createModule,
  createService,
} = require("../lib");
const { instructions } = require("../utils/constants");

const args = process.argv.splice(process.execArgv.length + 2);

const instruction = args[0];
const userInput = args[1];

const isInstructionValid = instructions.some(item => item === instruction);

if (!isInstructionValid) {
  throw `Command not valid: ${instruction}`;
}

switch (instruction) {
  case "app":
    createApp(userInput);
    break;
  case "component":
    createComponent(userInput);
    break;
  case "module":
    createModule(userInput);
    break;
  case "service":
    createService(userInput);
    break;
}
