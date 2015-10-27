import test from 'ava';
import fn from './';

test('should work without specifying a number', t => {
	t.is(fn().length, 40);
	t.end();
});

test('should work if specifying a number', t => {
	t.is(fn(2).length, 2);
	t.end();
});
