import { FC, useRef } from 'react';
import styles from './SearchModal.module.scss';
import {
	OptionProps,
	Product,
	StatusQueryType,
	XButton,
	useOutsideClick,
} from 'shared';
import { SelectCategory } from 'features/select-category';
import { SearchFilters, SearchInput } from 'features/product';
import { ProductCardEntity, ProductCardSkeleton } from 'entities/product';
import { Pagination } from 'features/pagination';

export interface SearchModalPresentationalProps {
	selectedOption: OptionProps | null;
	setSelectedOption: (option: OptionProps) => void;
	onClose: () => void;
	handleSearchValue: (searchValue: string) => void;
	handleMinPrice: (minPrice: number) => void;
	handleMaxPrice: (maxPrice: number) => void;
	handlePage: (page: number) => void;
	products: Product[] | undefined;
	status: StatusQueryType;
	pageCount: number;
}

export const SearchModalPresentational: FC<SearchModalPresentationalProps> = ({
	selectedOption,
	setSelectedOption,
	onClose,
	handleSearchValue,
	handleMinPrice,
	handleMaxPrice,
	handlePage,
	products,
	status,
	pageCount,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	useOutsideClick({
		elementRef: modalRef,
		onOutsideClick: onClose,
	});

	return (
		<div className={styles['search-modal']} ref={modalRef}>
			<div className={styles['top']}>
				<SearchInput handleSearchValue={handleSearchValue} />
				<div className={styles['filters']}>
					<SelectCategory
						selectedOption={selectedOption}
						setSelectedOption={setSelectedOption}
					/>
					<SearchFilters
						handleMinPrice={handleMinPrice}
						handleMaxPrice={handleMaxPrice}
						className={styles['search-filters']}
					/>
				</div>
			</div>
			<div className={styles['products']}>
				{status === 'pending' || status === 'uninitialized' ? (
					[...new Array(21)].map((_, i) => <ProductCardSkeleton key={i} />)
				) : products?.length && status === 'fulfilled' ? (
					products.map(product => (
						<ProductCardEntity key={product.id} product={product} />
					))
				) : (
					<div className={styles['big-text']}>Not found</div>
				)}
			</div>
			{products?.length ? (
				<Pagination
					onChangePage={value => handlePage(value)}
					pageCount={pageCount}
				/>
			) : null}
			<div className={styles['close-modal']}>
				<XButton onClick={onClose} />
			</div>
		</div>
	);
};
