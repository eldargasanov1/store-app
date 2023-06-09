import { FC } from 'react';
import { ProductCardPresentational } from './ProductCardPresentational';
import { Product } from 'shared';

interface ContainerProps {
	product: Product;
}

export const ProductCardContainer: FC<ContainerProps> = ({ product }) => {
	const imageSrc = product.images[0] || `images/shoe.png`;
	const linkTo = `/${product.category.name.toLowerCase()}/${product.id}`;

	return (
		<ProductCardPresentational
			product={product}
			imageSrc={imageSrc}
			linkTo={linkTo}
		/>
	);
};
