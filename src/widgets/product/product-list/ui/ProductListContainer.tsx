import { FC, memo } from 'react';
import { ProductListPresentational } from './ProductListPresentational';
import { ConfigTypes } from 'shared';
import { useGetProductListProps } from '../lib/useGetProductListProps';

interface ContainerProps {
	type: ConfigTypes;
	title?: string;
	isLight?: boolean;
	isShowMore?: boolean;
	className?: string;
}

export const ProductListContainer: FC<ContainerProps> = memo(props => {
	const { type, title, isShowMore: isShowMoreProp } = props;

	const { setFiltersProductName, filters, ...listPropsRest } =
		useGetProductListProps({
			type,
			isShowMore: isShowMoreProp,
			title,
		});

	const presentationalProps = {
		isLight: props.isLight,
		className: props.className,
		isShowMore: listPropsRest.isShowMore,
		setFiltersProductName,
		setFiltersPriceFrom: listPropsRest.setFiltersPriceFrom,
		setFiltersPage: listPropsRest.setFiltersPage,
		setFiltersLimit: listPropsRest.setFiltersLimit,
		setIsShowMore: listPropsRest.setIsShowMore,
		currentPage: filters.page,
		pageCount: listPropsRest.pageCount,
		productsLength: listPropsRest.productsLength,
		productsBase: listPropsRest.productsBase,
		status: listPropsRest.status,
		titleBase: listPropsRest.titleBase,
	};

	return <ProductListPresentational {...presentationalProps} />;
});
