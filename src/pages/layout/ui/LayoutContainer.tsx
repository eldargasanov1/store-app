import { FC, useEffect } from 'react';
import { LayoutPresentational } from './LayoutPresentational';
import { useActionCreators, useAppSelector } from 'app/store';
import { authActions } from 'entities/user';
import { useParams } from 'react-router-dom';
import { searchActions } from 'entities/product';

export const LayoutContainer: FC = () => {
	const params = useParams();
	const actionsAuth = useActionCreators(authActions);
	const actionsSearch = useActionCreators(searchActions);
	const isAuth = Boolean(useAppSelector(state => state.auth.user));
	const isAuthFormOpen = useAppSelector(state => state.auth.isAuthFormOpen);
	const isSearchFormOpen = useAppSelector(
		state => state.product.search.isSearchFormOpen
	);

	if (isAuthFormOpen || isSearchFormOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}

	useEffect(() => {
		if (isAuth && isAuthFormOpen) {
			actionsAuth.setIsAuthFormOpen(false);
		}
	}, [isAuth, isAuthFormOpen]);

	useEffect(() => {
		if (isSearchFormOpen) {
			actionsSearch.setIsSearchFormOpen(false);
		}
	}, [params.productId]);

	return (
		<LayoutPresentational
			isAuthFormOpen={isAuthFormOpen}
			isSearchFormOpen={isSearchFormOpen}
		/>
	);
};
