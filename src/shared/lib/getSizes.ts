import { sizes } from 'shared';

export const getSizes = () => {
	const newSizes = sizes.filter(() => (Math.random() > 0.5 ? true : false));
	if (newSizes.length === 0) {
		newSizes.push(4, 5);
	}
	return newSizes;
};
