import { useGetCurrentCategory, useGetProduct } from 'entities/product';
import { useEffect, useMemo, useState } from 'react';
import { FiltersState, GetProductsParams, ConfigTypes, useEvent } from 'shared';
import { useGetConfig } from './useGetConfig';

interface UseGetProductListFilters {
	type?: ConfigTypes;
	isShowMoreProp?: boolean;
}

export const useGetProductListFilters = ({
	type,
	isShowMoreProp,
}: UseGetProductListFilters) => {
	const currentCategory = useGetCurrentCategory();
	const { product: currentProduct } = useGetProduct();

	const { priceFrom, priceMax } = useGetConfig({
		type,
		currentProduct,
	});

	const filtersInitialState: FiltersState = {
		productName: '',
		priceFrom,
		priceMax,
		limit: isShowMoreProp ? 10 : 5,
		page: 1,
	};

	const [filters, setFilters] = useState<FiltersState>(filtersInitialState);
	const handleFilters = useEvent(setFilters);
	const filtersMemoized = useMemo(() => filters, [filters]);
	const queryFilters: Partial<GetProductsParams> = useMemo(
		() => ({
			currentCategoryId: currentCategory?.id,
			limit: filters.limit * (filters.page + 2),
			price_min: filters.priceFrom,
			price_max: filters.priceMax,
			title: filters.productName,
			offset: 0,
		}),
		[filters, currentCategory?.id]
	);

	useEffect(() => {
		if (type === 'Related products') {
			setFilters(filtersInitialState);
		}
	}, [currentCategory, currentProduct]);

	useEffect(() => {
		handleFilters(filtersInitialState);
	}, [isShowMoreProp]);

	return { queryFilters, setFilters: handleFilters, filters: filtersMemoized };
};
