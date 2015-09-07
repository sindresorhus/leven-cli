'use strict';
var test = require('ava');
var childProcess = require('child_process');

test(function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['cat', 'cow'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.error(err);
		t.is(Number(stdout), 2);
	});
});
