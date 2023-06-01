import { FC, memo } from 'react';
import styles from './Home.module.scss';
import { Container } from 'shared';
import { ProductList, Sidebar } from 'widgets/product';
import { Outlet } from 'react-router-dom';
import { BigBanner } from 'widgets/banner';

interface PresentationalProps {
	isProductId: boolean;
}

export const HomePresentational: FC<PresentationalProps> = memo(
	({ isProductId }) => {
		return (
			<Container className={styles['home']}>
				<div className={styles['top']}>
					<Sidebar />
					<div className={styles['variable']}>
						<Outlet />
					</div>
				</div>
				{isProductId && <ProductList type='Related products' />}
				<ProductList type='Trending' />
				<ProductList type='Worth seeing' isLight={true} />
				<BigBanner />
				<ProductList type='Less than 100$' />
			</Container>
		);
	}
);
