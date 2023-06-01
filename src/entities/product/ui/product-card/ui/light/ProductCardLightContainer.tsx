import { FC } from 'react';
import { ProductCardLightPresentational } from './ProductCardLightPresentational';
import { Product, SITE_URL } from 'shared';

interface ContainerProps {
	product: Product;
}

export const ProductCardLightContainer: FC<ContainerProps> = ({ product }) => {
	const imageSrc =
		product.images[0] || `${SITE_URL}/src/shared/images/shoe.png`;
	const linkTo = `/${product.category.name.toLowerCase()}/${product.id}`;

	return (
		<ProductCardLightPresentational
			product={product}
			imageSrc={imageSrc}
			linkTo={linkTo}
		/>
	);
};
