import { FC, useEffect, useMemo, useState } from 'react';
import {
	SearchModalPresentational,
	SearchModalPresentationalProps,
} from './SearchModalPresentational';
import { GetProductsParams, OptionProps, useEvent } from 'shared';
import { useActionCreators } from 'app/store';
import { searchActions, useGetProducts } from 'entities/product';
import { useDebounce } from 'shared/lib';

interface ModalState {
	searchValue: string;
	selectedCategory: OptionProps;
	minPrice: number;
	maxPrice: number;
	limit: number;
	page: number;
}

export const SearchModalContainer: FC = () => {
	const actionsSearch = useActionCreators(searchActions);
	const [modalOptions, setModalOptions] = useState<ModalState>({
		searchValue: '',
		selectedCategory: {
			title: 'All',
			value: 0,
		},
		minPrice: 1,
		maxPrice: 999999,
		limit: 21,
		page: 1,
	});
	const handleSearchValue = useDebounce(
		(newSearchValue: string) =>
			setModalOptions(prev => ({
				...prev,
				searchValue: newSearchValue,
				page: 1,
			})),
		1000
	);
	const handleSelectedCategory = useEvent((category: OptionProps) =>
		setModalOptions(prev => ({ ...prev, selectedCategory: category, page: 1 }))
	);
	const handleMinPrice = useDebounce(
		(newMinPrice: number) =>
			setModalOptions(prev => ({ ...prev, minPrice: newMinPrice, page: 1 })),
		1000
	);
	const handleMaxPrice = useDebounce(
		(newMaxPrice: number) =>
			setModalOptions(prev => ({ ...prev, maxPrice: newMaxPrice, page: 1 })),
		1000
	);
	const handlePage = useEvent((newPage: number) =>
		setModalOptions(prev => ({ ...prev, page: newPage }))
	);

	const onClose = () => actionsSearch.setIsSearchFormOpen(false);

	const queryFilters: Partial<GetProductsParams> = useMemo(
		() => ({
			currentCategoryId: modalOptions.selectedCategory.value,
			limit: modalOptions.limit * (modalOptions.page + 2),
			price_min: modalOptions.minPrice,
			price_max: modalOptions.maxPrice,
			title: modalOptions.searchValue,
			offset: 0,
		}),
		[modalOptions]
	);

	const { products: allProductsBase, status } = useGetProducts(queryFilters);
	const products = useMemo(
		() =>
			allProductsBase?.slice(
				modalOptions.page * modalOptions.limit - modalOptions.limit,
				modalOptions.page * modalOptions.limit
			),
		[allProductsBase, modalOptions.page]
	);

	const productsLength = allProductsBase ? allProductsBase.length : 0;
	const pageCount = Math.ceil(
		(productsLength || modalOptions.limit) / modalOptions.limit
	);

	useEffect(() => {
		handlePage(1);
	}, [modalOptions.selectedCategory.value]);

	const searchModalProps: SearchModalPresentationalProps = {
		selectedOption: modalOptions.selectedCategory,
		setSelectedOption: handleSelectedCategory,
		handleSearchValue,
		handleMinPrice,
		handleMaxPrice,
		handlePage,
		onClose,
		products,
		status,
		pageCount,
	};

	return <SearchModalPresentational {...searchModalProps} />;
};
