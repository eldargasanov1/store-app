import { FC, memo } from 'react';
import styles from './Favorites.module.scss';
import { Button, Product } from 'shared';
import { ProductCardEntity } from 'entities/product';

interface PresentationalProps {
	products: Product[];
	handleClear: () => void;
}

export const FavoritesPresentational: FC<PresentationalProps> = memo(
	({ products, handleClear }) => {
		return (
			<div className={styles['favorites']}>
				<div className={styles['title']}>Your favorites</div>
				{products.length ? (
					<>
						<div className={styles['favorites-list']}>
							{products.map(product => (
								<ProductCardEntity key={product.id} product={product} />
							))}
						</div>
						<Button onClick={handleClear}>Clear</Button>
					</>
				) : (
					<div className={styles['big-text']}>Favorites is empty</div>
				)}
			</div>
		);
	}
);
