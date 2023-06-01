interface HighlightLetters {
	fullText: string;
	mainText: string | string[];
	tag?: string;
	delimiter?: string;
	joiner?: string;
}

export function highlightLetters({
	fullText,
	mainText,
	tag = 'span',
	delimiter = ' ',
	joiner = ' ',
}: HighlightLetters) {
	const wrapper = `<${tag}>$</${tag}>`;

	const text = fullText
		.split(delimiter)
		.map((letter: string) => {
			if (mainText.includes(letter)) {
				return wrapper.replace(/\$/g, letter);
			} else {
				return letter;
			}
		})
		.join(joiner);

	return text;
}
