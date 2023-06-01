import { FC, memo } from 'react';
import { CartPresentational } from './CartPresentational';
import { useActionCreators, useAppSelector } from 'app/store';
import { cartActions, selectAllCart } from 'entities/product';
import { useEvent, useResize } from 'shared';

export const CartContainer: FC = memo(() => {
	const currentWidth = useResize();
	const actions = useActionCreators(cartActions);
	const products = useAppSelector(selectAllCart);
	const removeAllProducts = useEvent(actions.removeAllProductsFromCart);
	const removeProduct = useEvent((id: string) =>
		actions.removeProductFromCart(id)
	);
	const onMinus = useEvent((id: string, quantity: number) =>
		actions.updateProductInCart({
			id,
			changes: {
				quantity: quantity - 1,
			},
		})
	);
	const onPlus = useEvent((id: string, quantity: number) =>
		actions.updateProductInCart({
			id,
			changes: {
				quantity: quantity + 1,
			},
		})
	);
	const isCard = (currentWidth && currentWidth !== 'pc') || undefined;

	return (
		<>
			<CartPresentational
				products={products}
				removeAllProducts={removeAllProducts}
				removeProduct={removeProduct}
				onMinus={onMinus}
				onPlus={onPlus}
				isCard={isCard}
			/>
		</>
	);
});
