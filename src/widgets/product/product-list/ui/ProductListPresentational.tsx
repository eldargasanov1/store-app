import { FC, memo } from 'react';
import styles from './ProductList.module.scss';
import { Button, Product, StatusQueryType } from 'shared';
import clsx from 'clsx';
import { Pagination } from 'features/pagination';
import {
	ProductCardEntity,
	ProductCardLightEntity,
	ProductCardLightSkeleton,
	ProductCardSkeleton,
} from 'entities/product';
import { ProductFilters } from 'features/product';

interface PresentationalProps {
	isLight?: boolean;
	isShowMore?: boolean;
	className?: string;
	setFiltersProductName: (value: string) => void;
	setFiltersPriceFrom: (value: number) => void;
	setFiltersPage: (value: number) => void;
	setFiltersLimit: (value: number) => void;
	setIsShowMore: (value: boolean) => void;
	currentPage: number;
	pageCount: number;
	productsLength: number;
	productsBase: Product[] | undefined;
	status: StatusQueryType;
	titleBase: string;
}

export const ProductListPresentational: FC<PresentationalProps> = memo(
	({
		isLight,
		className,
		isShowMore,
		setFiltersProductName,
		setFiltersPriceFrom,
		setFiltersPage,
		setFiltersLimit,
		setIsShowMore,
		currentPage,
		pageCount,
		productsLength,
		productsBase,
		status,
		titleBase,
	}) => {
		const showMore = () => {
			setIsShowMore(true);
			setFiltersLimit(10);
		};
		const showLess = () => {
			setIsShowMore(false);
			setFiltersLimit(5);
			setFiltersPage(1);
		};

		return (
			<div className={clsx(styles['product-list'], className)}>
				<div className={styles['title']}>{titleBase}</div>
				{!isLight ? (
					<div className={styles['content']}>
						{isShowMore && (
							<ProductFilters
								handleProductName={setFiltersProductName}
								handlePriceFrom={setFiltersPriceFrom}
								className={styles['filters']}
							/>
						)}
						<div className={styles['list']}>
							{status === 'pending' || status === 'uninitialized' ? (
								[...new Array(5)].map((_, i) => <ProductCardSkeleton key={i} />)
							) : productsBase?.length && status === 'fulfilled' ? (
								productsBase.map(product => (
									<ProductCardEntity key={product.id} product={product} />
								))
							) : (
								<div className={styles['not-found']}>Not found</div>
							)}
						</div>
					</div>
				) : (
					<div className={styles['list']}>
						{status === 'pending' || status === 'uninitialized' ? (
							[...new Array(5)].map((_, i) => (
								<ProductCardLightSkeleton key={i} />
							))
						) : productsBase?.length && status === 'fulfilled' ? (
							productsBase.map(product => (
								<ProductCardLightEntity key={product.id} product={product} />
							))
						) : (
							<div className={styles['not-found']}>Not found</div>
						)}
					</div>
				)}
				{isShowMore && productsBase?.length ? (
					<Pagination
						currentPage={currentPage}
						onChangePage={value => setFiltersPage(value)}
						pageCount={pageCount}
					/>
				) : null}
				{productsLength > 5 ? (
					<div>
						<Button onClick={!isShowMore ? showMore : showLess}>
							{!isShowMore ? 'Show more' : 'Show less'}
						</Button>
					</div>
				) : null}
			</div>
		);
	}
);
