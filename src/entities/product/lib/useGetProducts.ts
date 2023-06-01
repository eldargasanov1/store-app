import { GetProductsParams, getStatusQuery } from 'shared';
import { useGetProductsQuery, useGetCurrentCategory } from 'entities/product';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export const useGetProducts = (params?: Partial<GetProductsParams>) => {
	const currentCategory = useGetCurrentCategory();
	const currentCategoryId = params?.currentCategoryId
		? params?.currentCategoryId
		: currentCategory?.id;

	const useQueryArgs = currentCategoryId
		? { currentCategoryId, ...params }
		: skipToken;

	const {
		data: products,
		isFetching,
		isError,
		isSuccess,
		isUninitialized,
	} = useGetProductsQuery(useQueryArgs);

	const status = getStatusQuery({
		isFetching,
		isError,
		isSuccess,
		isUninitialized,
	});

	return { products, status };
};
