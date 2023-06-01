import { FC, useEffect } from 'react';
import { HomePresentational } from './HomePresentational';
import { useParams } from 'react-router-dom';
import { searchActions, useGetCurrentCategory } from 'entities/product';
import { useActionCreators } from 'app/store';

export const HomeContainer: FC = () => {
	const actions = useActionCreators(searchActions);
	const { productId } = useParams();
	const currentCategory = useGetCurrentCategory();
	useEffect(() => {
		actions.setSearch('');
	}, [currentCategory]);

	return <HomePresentational isProductId={Boolean(productId)} />;
};
