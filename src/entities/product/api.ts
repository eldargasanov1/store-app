import { api } from 'app/store';
import {
	Category,
	GetProductsParams,
	Product,
	ProductBase,
	transformProduct,
	transformProducts,
} from 'shared';

const productsApi = api.injectEndpoints({
	endpoints: build => ({
		getCategories: build.query<Category[], void>({
			query: () => 'categories',
		}),
		getProducts: build.query<Product[], GetProductsParams>({
			query: ({
				currentCategoryId,
				limit = 0,
				offset = 0,
				title = '',
				price_min = 0,
				price_max = 100000,
			}) => ({
				url: `products/`,
				params: {
					limit: limit,
					categoryId: currentCategoryId,
					offset: offset,
					title: title,
					price_min: price_min,
					price_max: price_max,
				},
			}),
			transformResponse: (response: ProductBase[]) =>
				transformProducts(response),
		}),
		getProduct: build.query<Product, string>({
			query: productId => `products/${productId}`,
			transformResponse: (response: ProductBase) => transformProduct(response),
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetProductsQuery,
	useGetProductQuery,
} = productsApi;
