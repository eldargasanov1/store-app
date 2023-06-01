import { FC, memo } from 'react';
import { FavoritesPresentational } from './FavoritesPresentational';
import { useEvent } from 'shared/lib';
import { useActionCreators, useAppSelector } from 'app/store';
import { favoritesActions, selectAllFavorites } from 'entities/product';

export const FavoritesContainer: FC = memo(() => {
	const actions = useActionCreators(favoritesActions);
	const products = useAppSelector(selectAllFavorites);
	const handleClear = useEvent(() => actions.removeAllProductsFromFavorites());

	return (
		<FavoritesPresentational products={products} handleClear={handleClear} />
	);
});
