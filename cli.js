#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fn = require('./');

var cli = meow([
	'Usage',
	'  $ 0126af95c0e2d9b0a7c78738c4c00a860b04acc8 [number]',
	'',
	'Examples',
	'  $ 0126af95c0e2d9b0a7c78738c4c00a860b04acc8',
	'  ghEhhkYYnuetAyWY9vKE8N0PYb48gD3HoM2zj6kV',
	'  $ 0126af95c0e2d9b0a7c78738c4c00a860b04acc8 3',
	'  wJP'
]);

console.log(fn(cli.input[0]));
