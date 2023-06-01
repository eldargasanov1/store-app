import { FC, useEffect, useMemo, useState, memo, useRef } from 'react';
import {
	ProductDetailsEntity,
	ProductDetailsSkeleton,
	getCartId,
	useGetProduct,
} from 'entities/product';
import { Product, ProductCart, SliderSkeleton, useEvent } from 'shared';
import { AddToCart, AddToFavorites } from 'features/product';
import styles from './ProductDetails.module.scss';
import { useParams } from 'react-router-dom';

interface Props {
	product: Product;
}

const ProductDetails: FC<Props> = memo(({ product }) => {
	const initialColor = product.colors[0];
	const initialSize = product.sizes[0];

	const [activeColor, setActiveColor] = useState<string>(initialColor);
	const [activeSize, setActiveSize] = useState<number>(initialSize);

	const handleActiveColor = useEvent((color: string) => setActiveColor(color));
	const handleActiveSize = useEvent((size: number) => setActiveSize(size));

	useEffect(() => {
		if (activeColor !== initialColor) {
			handleActiveColor(initialColor);
		}
		if (activeSize !== initialSize) {
			handleActiveSize(initialSize);
		}
	}, [product]);

	const { colors, sizes, ...restProduct } = product;
	const cartId = useMemo(
		() => getCartId(restProduct.id, activeColor, activeSize),
		[activeColor, activeSize, restProduct]
	);

	const cartProduct: ProductCart = useMemo(
		() => ({
			...restProduct,
			color: activeColor,
			size: activeSize,
			quantity: 1,
			cartId: cartId,
		}),
		[restProduct, activeColor, activeSize]
	);

	const addToCart = <AddToCart product={cartProduct} />;
	const addToFavorites = <AddToFavorites product={product} />;

	const productDetailsProps = {
		product,
		addToCart,
		addToFavorites,
		activeColor,
		handleActiveColor,
		activeSize,
		handleActiveSize,
	};

	return <ProductDetailsEntity {...productDetailsProps} />;
});

export const ProductDetailsWrapper: FC = memo(() => {
	const { productId } = useParams();
	const { product, status } = useGetProduct();

	const detailsRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (detailsRef.current) {
			const detailsCoords = detailsRef.current.getBoundingClientRect();
			window.scrollTo({
				left: 0,
				top: detailsCoords.top + window.scrollY - 25,
				behavior: 'smooth',
			});
		}
	}, [productId]);

	return (
		<div ref={detailsRef}>
			{product && status === 'fulfilled' ? (
				<ProductDetails product={product} />
			) : status === 'pending' ? (
				<div className={styles['skeleton-wrapper']}>
					<div className={styles['skeleton']}>
						<SliderSkeleton />
						<ProductDetailsSkeleton />
					</div>
				</div>
			) : (
				<div className={styles['not-found']}>Not found</div>
			)}
		</div>
	);
});
