import { useGetCategoriesQuery } from 'entities/product';
import { useEffect } from 'react';
import { Location, useLocation, useMatch, useNavigate } from 'react-router-dom';

interface ILocationRouting extends Location {
	state: {
		from: string;
	};
}

export const useNavigateUser = () => {
	const isMainPage = useMatch('/');
	const isOopsPage = useMatch('/oops');
	const navigate = useNavigate();
	const location = useLocation() as ILocationRouting;

	const { data: categories, isFetching, error } = useGetCategoriesQuery();

	useEffect(() => {
		let navigatePath = '';

		if (categories) {
			navigatePath = categories[0].name.toLowerCase();
		}

		if (location.state?.from) {
			navigatePath = location.state.from;
		}

		if (error) {
			navigatePath = 'oops';
			navigate(`/${navigatePath}`);
		}

		if (isMainPage || isOopsPage) {
			navigate(`/${navigatePath}`);
		}
	}, [isFetching, location.pathname]);
};
