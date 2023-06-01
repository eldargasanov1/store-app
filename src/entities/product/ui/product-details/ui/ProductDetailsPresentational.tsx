import { FC, memo, ReactElement } from 'react';
import styles from './ProductDetails.module.scss';
import { Button, capitalizeWord, Product, Slider } from 'shared';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface PresentationalProps {
	product: Product;
	addToCart: ReactElement;
	addToFavorites: ReactElement;
	activeColor: string;
	handleActiveColor: (color: string) => void;
	activeSize: number;
	handleActiveSize: (size: number) => void;
}

export const ProductDetailsPresentational: FC<PresentationalProps> = memo(
	({
		product,
		addToCart,
		addToFavorites,
		activeColor,
		handleActiveColor,
		activeSize,
		handleActiveSize,
	}) => {
		return (
			<div className={styles['product-details']}>
				<Slider imageLinks={product.images} title={product.title} />
				<div className={styles['info-block']}>
					<div className={styles['title']}>{product.title}</div>
					<div className={styles['content']}>
						<div className={styles['prices']}>
							<div className={styles['price']}>{product.price}$</div>
							<div className={styles['oldPrice']}>
								{Math.floor(product.price * 1.2)}$
							</div>
						</div>
						<div className={styles['colors']}>
							<div className={styles['colors-title']}>Color:</div>
							<div className={styles['colors-content']}>
								{product.colors.map(color => (
									<Button
										key={color}
										className={clsx(styles['color'], {
											[styles['active']]: color === activeColor,
										})}
										onClick={() => handleActiveColor(color)}
									>
										{capitalizeWord(color)}
									</Button>
								))}
							</div>
						</div>
						<div className={styles['sizes']}>
							<div className={styles['sizes-title']}>Size:</div>
							<div className={styles['sizes-content']}>
								{product.sizes.map(size => (
									<Button
										key={size}
										className={clsx(styles['size'], {
											[styles['active']]: size === activeSize,
										})}
										onClick={() => handleActiveSize(size)}
									>
										{size}
									</Button>
								))}
							</div>
						</div>
						<div className={styles['description']}>{product.description}</div>
						<div className={styles['buttons']}>
							{addToCart}
							{addToFavorites}
						</div>
					</div>
					<div className={styles['additional-block']}>
						<div className={styles['purchases']}>
							{product.purchases} purchased
						</div>
						<Link to={'/'} className={styles['find']}>
							Find in a store
						</Link>
					</div>
				</div>
			</div>
		);
	}
);
