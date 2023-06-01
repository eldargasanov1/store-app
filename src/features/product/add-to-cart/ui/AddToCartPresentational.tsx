import { FC } from 'react';
import styles from './AddToCart.module.scss';
import { Button, ProductCart } from 'shared';

interface PresentationalProps {
	product: ProductCart;
	onAdd: (product: ProductCart) => void;
	onRemove: (product: ProductCart) => void;
	isInCart: boolean;
}

export const AddToCartPresentational: FC<PresentationalProps> = ({
	product,
	onAdd,
	onRemove,
	isInCart,
}) => {
	const handleClick = (product: ProductCart) => {
		if (isInCart) {
			onRemove(product);
			return;
		}
		onAdd(product);
	};

	return (
		<Button
			className={styles['add-to-cart']}
			onClick={() => handleClick(product)}
		>
			{isInCart ? 'Remove from cart' : 'Add to cart'}
		</Button>
	);
};
