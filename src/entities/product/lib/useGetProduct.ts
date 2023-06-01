import { Location, useLocation, useParams } from 'react-router-dom';
import { useGetProductQuery, useGetCurrentCategory } from 'entities/product';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { Product, getStatusQuery } from 'shared';

interface ILocationProduct extends Location {
	state: {
		product: Product | undefined;
	};
}

export const useGetProduct = () => {
	const location = useLocation() as ILocationProduct;

	const { productId } = useParams();
	const currentCategory = useGetCurrentCategory();

	const useQueryArgs = productId ? productId : skipToken;

	const { data, isFetching, isError, isSuccess, isUninitialized } =
		useGetProductQuery(useQueryArgs);

	let product = data;

	const status = getStatusQuery({
		isFetching,
		isError,
		isSuccess,
		isUninitialized,
	});

	if (location.state?.product) {
		product = location.state.product;
	}

	if (product?.category.id !== currentCategory?.id) {
		product = undefined;
	}

	return { product, status };
};
