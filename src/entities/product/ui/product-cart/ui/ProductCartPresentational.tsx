import { FC, ReactElement } from 'react';
import styles from './ProductCart.module.scss';
import { ProductCart } from 'shared';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface PresentationalProps {
	product: ProductCart;
	quantity: number;
	quantityElement: ReactElement;
	removeElement: ReactElement;
	isCard?: boolean;
}

export const ProductCartPresentational: FC<PresentationalProps> = ({
	product,
	quantity,
	quantityElement,
	removeElement,
	isCard = false,
}) => {
	const productLink = `/${product.category.name.toLowerCase()}/${product.id}`;
	const categoryLink = `/${product.category.name.toLowerCase()}`;

	return (
		<div className={styles['product-cart']}>
			<div className={styles['link-block']}>
				<Link to={productLink} className={clsx('_image-ibg', styles['image'])}>
					<img src={product.images[0]} alt={product.title} />
				</Link>
				<div className={styles['info']}>
					<Link to={productLink} className={styles['title']}>
						{product.title}
					</Link>
					<Link to={categoryLink} className={styles['category']}>
						{product.category.name}
					</Link>
				</div>
			</div>
			<div className={styles['product-info']}>
				<div className={styles['color']}>
					Color: <span>{product.color}</span>
				</div>
				<div className={styles['size']}>
					Size: <span>{product.size}</span>
				</div>
			</div>
			<div className={styles['price']}>{product.price}$</div>
			{!isCard && <div className={styles['quantity']}>{quantityElement}</div>}
			{isCard && (
				<div className={styles['quantity-and-remove']}>
					<div className={styles['quantity']}>{quantityElement}</div>
					<div className={styles['remove']}>{removeElement}</div>
				</div>
			)}
			<div className={styles['total-price']}>{product.price * quantity}$</div>
			{!isCard && <div className={styles['remove']}>{removeElement}</div>}
		</div>
	);
};
