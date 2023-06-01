import { FC, memo } from 'react';
import { AddToCartPresentational } from './AddToCartPresentational';
import { useActionCreators, useAppSelector } from 'app/store';
import { cartActions, selectByIdCart } from 'entities/product';
import { ProductCart } from 'shared';

interface ContainerProps {
	product: ProductCart;
}

export const AddToCartContainer: FC<ContainerProps> = memo(({ product }) => {
	const isInCart = Boolean(
		useAppSelector(state => selectByIdCart(state, product.cartId))
	);

	const actions = useActionCreators(cartActions);

	return (
		<AddToCartPresentational
			product={product}
			isInCart={isInCart}
			onAdd={() => actions.addProductInCart(product)}
			onRemove={() => actions.removeProductFromCart(product.cartId)}
		/>
	);
});
