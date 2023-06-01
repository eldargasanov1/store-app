import { FC, memo } from 'react';
import { SidebarPresentational } from './SidebarPresentational';
import { useGetCategoriesQuery } from 'entities/product';
import { getErrorForUser, getStatusQuery } from 'shared';
import { useParams } from 'react-router-dom';

export const SidebarContainer: FC = memo(() => {
	const params = useParams();
	const { data, isFetching, isError, isSuccess, isUninitialized, error } =
		useGetCategoriesQuery();
	const status = getStatusQuery({
		isFetching,
		isError,
		isSuccess,
		isUninitialized,
	});
	const errorForUser = error && getErrorForUser(error);
	const activeCategoryId = data?.find(
		category => category.name.toLocaleLowerCase().trim() === params.category
	)?.id;

	return (
		<SidebarPresentational
			categories={data}
			status={status}
			errorForUser={errorForUser}
			activeCategoryId={activeCategoryId}
		/>
	);
});
