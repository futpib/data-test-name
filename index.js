
const attr = 'data-test-name';

const stringify = x => {
	if (typeof x === 'string') {
		return `[${attr}=${JSON.stringify(x)}]`; // TODO: `CSS.escape`?
	}

	return String(x);
};

const css = s => {
	const toString = () => s;
	return Object.assign(toString, { toString });
};

const selector = (...things) => {
	const str = things.map(stringify).join(' ');
	return css(str);
};

selector.or = (...things) => {
	const str = things.map(stringify).join(', ');
	return css(str);
};

selector.css = css;

module.exports = {
	selector,
};
