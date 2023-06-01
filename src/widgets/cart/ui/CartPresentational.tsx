import { FC, memo, useState } from 'react';
import styles from './Cart.module.scss';
import { Button, ProductCart, XButton } from 'shared';
import { ProductCartEntity } from 'entities/product';
import clsx from 'clsx';
import { HandleQuantity } from 'features/handle-quantity';

interface PresentationalProps {
	products: ProductCart[];
	removeAllProducts: () => void;
	removeProduct: (id: string) => void;
	onMinus: (id: string, quantity: number) => void;
	onPlus: (id: string, quantity: number) => void;
	isCard?: boolean;
}

export const CartPresentational: FC<PresentationalProps> = memo(
	({ products, removeAllProducts, removeProduct, onMinus, onPlus, isCard }) => {
		const [isOrdered, setIsOrdered] = useState(false);
		const totalPrice = products.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		);
		const handleClick = () => {
			removeAllProducts();
			setIsOrdered(true);
			setTimeout(() => setIsOrdered(false), 2000);
		};

		return (
			<div className={styles['cart']}>
				<div className={styles['title']}>Your cart</div>
				{products.length ? (
					<>
						<div className={styles['cart-list']}>
							{products.map(product => (
								<ProductCartEntity
									key={product.cartId}
									product={product}
									quantity={product.quantity}
									isCard={isCard}
									quantityElement={
										<HandleQuantity
											quantity={product.quantity}
											onMinus={() => onMinus(product.cartId, product.quantity)}
											onPlus={() => onPlus(product.cartId, product.quantity)}
										/>
									}
									removeElement={
										<XButton onClick={() => removeProduct(product.cartId)} />
									}
								/>
							))}
						</div>
						<div className={styles['bottom']}>
							<div className={styles['total-price']}>
								Total price: <span>{totalPrice}$</span>
							</div>
							<Button onClick={handleClick}>Order</Button>
						</div>
					</>
				) : isOrdered ? (
					<div className={clsx(styles['big-text'], styles['order'])}>
						Thank you for your purchase :)
					</div>
				) : (
					<div className={styles['big-text']}>Cart is empty</div>
				)}
			</div>
		);
	}
);
