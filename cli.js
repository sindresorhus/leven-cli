#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import leven from 'leven';

const cli = meow(`
	Example
	  $ leven cat cow
	  2
`, {
	importMeta: import.meta,
});

if (cli.input.length < 2) {
	console.error('Expected two strings');
	process.exit(1);
}

const [first, second] = cli.input;

console.log(leven(first, second));
