#!/usr/bin/env node

const { createApp, createComponent } = require("../lib");
const { primaryInstructions } = require("../utils/constants");

const args = process.argv.splice(process.execArgv.length + 2);

const instruction = args[0];
const userInput = args[1];

const isInstructionValid = primaryInstructions.some(item => item === instruction);

if (!isInstructionValid) {
  throw `Command not valid: ${instruction}`;
}

switch (instruction) {
  case "new":
    createApp(userInput);
    break;
  case "generate":
    createComponent(userInput);
    break;
}
