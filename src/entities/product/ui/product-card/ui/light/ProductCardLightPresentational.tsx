import { FC, memo } from 'react';
import styles from './ProductCardLight.module.scss';
import { Link } from 'react-router-dom';
import { Product } from 'shared';
import clsx from 'clsx';

interface PresentationalProps {
	product: Product;
	imageSrc: string;
	linkTo: string;
}

export const ProductCardLightPresentational: FC<PresentationalProps> = memo(
	({ product, imageSrc, linkTo }) => {
		return (
			<Link
				to={linkTo}
				state={{ product: product }}
				className={styles['product-card-light']}
			>
				<div className={styles['image-wrapper']}>
					<div
						className={clsx('_image-ibg', {
							[styles['image']]: styles['image'],
						})}
					>
						<img src={imageSrc} alt={product.title} />
					</div>
				</div>
				<div className={styles['title']}>{product.title}</div>
			</Link>
		);
	}
);
