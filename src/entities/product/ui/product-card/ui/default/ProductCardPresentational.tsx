import { FC, memo } from 'react';
import styles from './ProductCard.module.scss';
import { Product } from 'shared';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface PresentationalProps {
	product: Product;
	imageSrc: string;
	linkTo: string;
}

export const ProductCardPresentational: FC<PresentationalProps> = memo(
	({ product, imageSrc, linkTo }) => {
		return (
			<Link
				to={linkTo}
				state={{ product: product }}
				className={styles['product-card']}
			>
				<div className={clsx('_image-ibg', styles['image'])}>
					<img src={imageSrc} alt={product.title} />
				</div>
				<div className={styles['content']}>
					<div className={styles['wrapper']}>
						<div className={styles['title']}>{product.title}</div>
						<div className={styles['category']}>{product.category.name}</div>
					</div>
					<div className={styles['info']}>
						<div className={styles['prices']}>
							<div className={styles['price']}>{product.price}$</div>
							<div className={styles['oldPrice']}>
								{Math.floor(product.price * 1.2)}$
							</div>
						</div>
						<div className={styles['purchases']}>
							{product.purchases} purchased
						</div>
					</div>
				</div>
			</Link>
		);
	}
);
