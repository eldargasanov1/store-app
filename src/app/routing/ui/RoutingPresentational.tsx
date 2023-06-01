import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Layout, Oops } from 'pages';
import { SmallBanner } from 'widgets/banner';
import { ProductDetails } from 'widgets/product';
import { Cart } from 'widgets/cart';
import { Favorites } from 'widgets/favorites';

export const RoutingPresentational: FC = memo(() => {
	const bannerProps = {
		backgroundText: 'BIG SALE 20',
		subtitle: 'the bestseller of 2022',
		title: `LENNON r2d2 with NVIDIA 5090 TI`,
	};
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path=':category/' element={<Home />}>
					<Route index element={<SmallBanner {...bannerProps} />} />
					<Route path=':productId' element={<ProductDetails />} />
					<Route path='cart' element={<Cart />} />
					<Route path='favorites' element={<Favorites />} />
				</Route>
				<Route path='oops' element={<Oops />} />
			</Route>
		</Routes>
	);
});
