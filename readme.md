# data-test-name

> Helpers for clean and maintainable selectors in browser (end-to-end, puppeteer) tests

[![Build Status](https://travis-ci.org/futpib/data-test-name.svg?branch=master)](https://travis-ci.org/futpib/data-test-name) [![Coverage Status](https://coveralls.io/repos/github/futpib/data-test-name/badge.svg?branch=master)](https://coveralls.io/github/futpib/data-test-name?branch=master)

## Example

```js
// test.js
import { selector } from 'data-test-name';

const loginForm = selector('login');

await page.waitFor(loginForm());
await page.type(selector(loginForm, 'email')(), 'user@example.com');
await page.type(selector(loginForm, 'password')(), 'secret');
await page.click(selector(loginForm, 'submit')());
```

```js
// LoginForm.jsx

export const LoginForm = ({ onSubmit }) => (
	<form
		onSubmit={onSubmit}
		data-test-name="login"
	>
		<input
			type="email"
			data-test-name="email"
		/>

		<input
			type="password"
			data-test-name="password"
		/>

		<button
			type="submit"
			data-test-name="submit"
		>
	</form>
);
```

## Why

When selectors in your tests do not use classnames, `id`s or `name`s, you can easily change styles, swap commponents, etc. without breaking the tests. Just keep the same `data-test-name` values.

## Install

```
yarn add --dev data-test-name
```
