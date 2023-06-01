import { FC, memo } from 'react';
import { AddToFavoritesPresentational } from './AddToFavoritesPresentational';
import { Product } from 'shared';
import { favoritesActions, selectByIdFavorites } from 'entities/product';
import { useActionCreators, useAppSelector } from 'app/store';

interface ContainerProps {
	product: Product;
}

export const AddToFavoritesContainer: FC<ContainerProps> = memo(
	({ product }) => {
		const isInFavorites = useAppSelector(state =>
			selectByIdFavorites(state, product.id)
		)
			? true
			: false;
		const actions = useActionCreators(favoritesActions);

		return (
			<AddToFavoritesPresentational
				product={product}
				isInFavorites={isInFavorites}
				onAdd={() => actions.addProductInFavorites(product)}
				onRemove={() => actions.removeProductFromFavorites(product.id)}
			/>
		);
	}
);
