#!/usr/bin/env node

const args = process.argv.splice(process.execArgv.length + 2);
const nome = args[0];

const ola = require('../lib/index.js').ola;
ola(nome);
