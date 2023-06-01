import { FC } from 'react';
import { ProductCardLightPresentational } from './ProductCardLightPresentational';
import { Product } from 'shared';

interface ContainerProps {
	product: Product;
}

export const ProductCardLightContainer: FC<ContainerProps> = ({ product }) => {
	const imageSrc = product.images[0] || `images/shoe.png`;
	const linkTo = `/${product.category.name.toLowerCase()}/${product.id}`;

	return (
		<ProductCardLightPresentational
			product={product}
			imageSrc={imageSrc}
			linkTo={linkTo}
		/>
	);
};
