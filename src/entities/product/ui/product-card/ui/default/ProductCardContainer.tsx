import { FC } from 'react';
import { ProductCardPresentational } from './ProductCardPresentational';
import { Product, SITE_URL } from 'shared';

interface ContainerProps {
	product: Product;
}

export const ProductCardContainer: FC<ContainerProps> = ({ product }) => {
	const imageSrc =
		product.images[0] || `${SITE_URL}/src/shared/images/shoe.png`;
	const linkTo = `/${product.category.name.toLowerCase()}/${product.id}`;

	return (
		<ProductCardPresentational
			product={product}
			imageSrc={imageSrc}
			linkTo={linkTo}
		/>
	);
};
