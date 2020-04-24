#!/usr/bin/env node

let input = ''
if (process.argv.length > 2) {
    input = process.argv.slice(2).join(' ').trim()
}
if (!input) {
    console.error('input required');
    process.exit(1);
}

const chrono = require('chrono-node');
const d = chrono.parseDate(input)
if (!d || typeof d.toISOString !== 'function') {
    console.error(`cannot parse date: "${input}"`)
    process.exit(2);
}
console.log(d.toISOString());
