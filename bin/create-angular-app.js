#!/usr/bin/env node

const { create } = require("../lib/index.js");

const args = process.argv.splice(process.execArgv.length + 2);
const nome = args[0];

create(nome);
