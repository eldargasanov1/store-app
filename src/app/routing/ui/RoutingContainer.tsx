import { FC, useEffect } from 'react';
import { Product, ProductCart, useEvent, useWindowEvent } from 'shared';
import { useNavigateUser } from '../lib/useNavigateUser';
import { RoutingPresentational } from './RoutingPresentational';
import { useActionCreators, useAppSelector } from 'app/store';
import {
	cartActions,
	favoritesActions,
	selectAllCart,
	selectAllFavorites,
} from 'entities/product';

export const RoutingContainer: FC = () => {
	const actionsCart = useActionCreators(cartActions);
	const actionsFavorites = useActionCreators(favoritesActions);

	const cart = useAppSelector(selectAllCart);
	const favorites = useAppSelector(selectAllFavorites);
	const tokens = useAppSelector(state => state.auth.tokens);

	const setCartFromLocalStorage = useEvent(() => {
		const savedCart = localStorage.getItem('cart');
		if (!savedCart) {
			return;
		}

		const parsedCart: ProductCart[] = JSON.parse(savedCart);
		if (!parsedCart.length) {
			return;
		}

		actionsCart.setCart(parsedCart);
		localStorage.removeItem('cart');
	});
	const setFavoritesFromLocalStorage = useEvent(() => {
		const savedFavorites = localStorage.getItem('favorites');
		if (!savedFavorites) {
			return;
		}

		const parsedFavorites: Product[] = JSON.parse(savedFavorites);
		if (!parsedFavorites.length) {
			return;
		}

		actionsFavorites.setFavorites(parsedFavorites);
		localStorage.removeItem('favorites');
	});
	const setFromLocalStorage = useEvent(() => {
		setCartFromLocalStorage();
		setFavoritesFromLocalStorage();
	});

	const setCartToLocalStorage = useEvent(() => {
		if (cart.length === 0) {
			return;
		}

		const cartStringified = JSON.stringify(cart);
		localStorage.setItem('cart', cartStringified);
	});
	const setFavoritesToLocalStorage = useEvent(() => {
		if (favorites.length === 0) {
			return;
		}

		const favoritesStringified = JSON.stringify(favorites);
		localStorage.setItem('cart', favoritesStringified);
	});
	const setTokensToLocalStorage = useEvent(() => {
		if (!tokens) {
			return;
		}

		const tokensStringified = JSON.stringify(tokens);
		localStorage.setItem('tokens', tokensStringified);
	});
	const setToLocalStorage = useEvent(() => {
		setCartToLocalStorage();
		setFavoritesToLocalStorage();
		setTokensToLocalStorage();
	});

	useNavigateUser();
	useEffect(() => {
		setFromLocalStorage();
	}, []);
	useWindowEvent('unload', setToLocalStorage);

	return <RoutingPresentational />;
};
