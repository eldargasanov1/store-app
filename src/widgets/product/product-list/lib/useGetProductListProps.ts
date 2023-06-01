import { useEffect, useMemo, useState } from 'react';
import { useGetCurrentCategory, useGetProducts } from 'entities/product';
import { Product, ConfigTypes, useEvent } from 'shared';
import { useGetProductListFilters } from './useGetProductListFilters';
import { useDebounce } from 'shared/lib';

interface UseGetProductListProps {
	title?: string;
	products?: Product[];
	type?: ConfigTypes;
	isShowMore?: boolean;
}

export const useGetProductListProps = ({
	title,
	products,
	type,
	isShowMore: isShowMoreProp,
}: UseGetProductListProps) => {
	const [isShowMore, setIsShowMore] = useState(false);
	const { queryFilters, setFilters, filters } = useGetProductListFilters({
		type,
		isShowMoreProp: isShowMoreProp || isShowMore,
	});
	const titleBase = useMemo(() => title || type || 'Untitled', []);
	const { products: allProductsBase, status } = useGetProducts(queryFilters);

	const productsBase = (products || allProductsBase)?.slice(
		filters.page * filters.limit - filters.limit,
		filters.page * filters.limit
	);
	const productsBaseMemoized = useMemo(
		() => productsBase,
		[isShowMore, allProductsBase, filters.page]
	);

	const productsLength = allProductsBase ? allProductsBase.length : 0;
	const pageCount = Math.ceil(
		(productsLength || filters.limit) / filters.limit
	);

	const currentCategory = useGetCurrentCategory();
	useEffect(() => {
		setIsShowMore(false);
	}, [currentCategory]);

	const setFiltersPage = useEvent((value: number) =>
		setFilters(prev => ({ ...prev, page: value }))
	);
	const setFiltersProductName = useDebounce((value: string) => {
		setFilters(prev => ({ ...prev, productName: value, page: 1 }));
	}, 1000);
	const setFiltersPriceFrom = useDebounce((value: number) => {
		setFilters(prev => ({ ...prev, priceFrom: value, page: 1 }));
	}, 1000);
	const setFiltersLimit = useEvent((value: number) =>
		setFilters(prev => ({ ...prev, limit: value, page: 1 }))
	);
	const handleIsShowMore = useEvent(setIsShowMore);

	return {
		isShowMore,
		setIsShowMore: handleIsShowMore,
		productsLength,
		productsBase: productsBaseMemoized,
		status,
		titleBase,
		filters,
		pageCount,
		setFiltersPage,
		setFiltersProductName,
		setFiltersPriceFrom,
		setFiltersLimit,
	};
};
