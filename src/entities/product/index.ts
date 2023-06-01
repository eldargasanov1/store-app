export {
	ProductCardEntity,
	ProductCardSkeleton,
	ProductCardLightEntity,
	ProductCardLightSkeleton,
} from './ui/product-card';
export {
	ProductDetailsEntity,
	ProductDetailsSkeleton,
} from './ui/product-details';
export { ProductCartEntity } from './ui/product-cart';

//===============================================

export {
	useGetCategoriesQuery,
	useGetProductsQuery,
	useGetProductQuery,
} from './api';
export { useGetCurrentCategory } from './lib/useGetCurrentCategory';
export { useGetProduct } from './lib/useGetProduct';
export { useGetProducts } from './lib/useGetProducts';
export { getCartId } from './lib/getCartId';

//===============================================

export {
	cartReducer,
	cartActions,
	selectByIdCart,
	selectIdsCart,
	selectEntitiesCart,
	selectAllCart,
	selectTotalCart,
} from './model/cartSlice';

export {
	favoritesReducer,
	favoritesActions,
	selectByIdFavorites,
	selectIdsFavorites,
	selectEntitiesFavorites,
	selectAllFavorites,
	selectTotalFavorites,
} from './model/favoritesSlice';

export { searchReducer, searchActions } from './model/searchSlice';

export { productReducer } from './model/productReducer';
