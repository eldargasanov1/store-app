import { Product, ProductBase, transformProduct } from 'shared';

export const transformProducts = (response: ProductBase[]) => {
	const newProducts: Product[] = response.map(product =>
		transformProduct(product)
	);
	return newProducts;
};
