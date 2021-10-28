
export interface DataTestNameOptions {
	attribute?: string;
}

export interface DataTestNameSelector {
	(): string;
	toString(): string;
}

export type DataTestNameSelectorOrString = string | DataTestNameSelector;

let attribute: string;

export function configure({
	attribute: newAttribute = 'data-test-name',
}: DataTestNameOptions) {
	attribute = newAttribute;
}

configure({});

const stringify = (x: DataTestNameSelectorOrString) => {
	if (typeof x === 'string') {
		return `[${attribute}=${JSON.stringify(x)}]`; // TODO: `CSS.escape`?
	}

	return String(x);
};

const css = (cssSelector: string): DataTestNameSelector => {
	const toString = () => cssSelector;
	return Object.assign(toString, { toString });
};

export const selector = (...things: DataTestNameSelectorOrString[]): DataTestNameSelector => {
	const string = things.map(x => stringify(x)).join(' ');
	return css(string);
};

selector.or = (...things: DataTestNameSelectorOrString[]): DataTestNameSelector => {
	const string = things.map(x => stringify(x)).join(', ');
	return css(string);
};

selector.css = css;
