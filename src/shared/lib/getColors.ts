import { colors } from 'shared';

export const getColors = () => {
	const newColors = colors.filter(() => (Math.random() > 0.5 ? true : false));
	if (newColors.length === 0) {
		newColors.push('Black');
	}
	return newColors;
};
