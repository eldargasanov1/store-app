import { FC } from 'react';
import styles from './AddToFavorites.module.scss';
import { Button, Product } from 'shared';

interface PresentationalProps {
	product: Product;
	onAdd: (product: Product) => void;
	onRemove: (product: Product) => void;
	isInFavorites: boolean;
}

export const AddToFavoritesPresentational: FC<PresentationalProps> = ({
	product,
	onAdd,
	onRemove,
	isInFavorites,
}) => {
	const handleClick = (product: Product) => {
		if (isInFavorites) {
			onRemove(product);
			return;
		}
		onAdd(product);
	};

	return (
		<Button
			className={styles['add-to-favorites']}
			onClick={() => handleClick(product)}
		>
			{isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
		</Button>
	);
};
