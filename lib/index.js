#! /usr/bin/env node
'use strict'
const commander = require('commander')
commander
  .version('0.0.1')
  .option('-f, --file <file>', 'create HTML file')
  .option('-b, --browser <file>', 'open markdown in browser')
  .on('--help', () => {
    console.log('  Examples:')
    console.log('')
    console.log('    $ easymd -b index.md')
    console.log('    $ easymd -f index.md /your/html/path/ ')
    console.log('')
  })
commander.parse(process.argv)
