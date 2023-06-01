import { Product, ProductBase, getColors, getSizes } from 'shared';

export const transformProduct = (response: ProductBase) => {
	const currentProductColors = getColors();
	const currentProductSizes = getSizes();

	const newProduct: Product = {
		...response,
		colors: currentProductColors,
		sizes: currentProductSizes,
		purchases: Math.floor(Math.random() * 5000 + 1),
	};

	return newProduct;
};
