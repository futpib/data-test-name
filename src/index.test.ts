
import test from 'ava';

import type { DataTestNameSelector } from '.';
import { selector } from '.';

test('selector', t => {
	const a = selector('a');
	const c = selector.css('#c');

	const is = (actual: DataTestNameSelector, expected: string) => {
		t.is(actual(), expected);
		t.is(String(actual), expected);
	};

	is(a, '[data-test-name="a"]');
	is(c, '#c');
	is(selector(a, 'b'), '[data-test-name="a"] [data-test-name="b"]');
	is(selector('b', c), '[data-test-name="b"] #c');
	is(selector.or(a, 'b'), '[data-test-name="a"], [data-test-name="b"]');
	is(selector.or('b', c), '[data-test-name="b"], #c');
	is(selector.or(a, c), '[data-test-name="a"], #c');
});
