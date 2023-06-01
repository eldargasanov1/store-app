import { useAppSelector } from 'app/store';
import { selectAllCart } from 'entities/product';
import { FC } from 'react';
import { Badge } from 'shared';

export const CartBadge: FC = () => {
	const cartItemsQuantity = useAppSelector(selectAllCart).length;
	const position = { bottom: 0, right: -1 };

	return <Badge badgeContent={cartItemsQuantity} positionStyle={position} />;
};
