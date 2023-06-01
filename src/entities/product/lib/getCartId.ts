import { nanoid } from '@reduxjs/toolkit';

const cartIds: Record<string, string> = {};

type GetCartId = (productId: number, color: string, size: number) => string;

export const getCartId: GetCartId = (productId, color, size) => {
	const cartIdsKey = `${productId}:${color}:${size}`;
	if (cartIdsKey in cartIds) {
		return cartIds[cartIdsKey];
	}

	const cartId = nanoid();
	cartIds[cartIdsKey] = cartId;

	return cartId;
};
