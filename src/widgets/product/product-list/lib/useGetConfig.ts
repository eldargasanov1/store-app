import { useMemo } from 'react';
import { Product, ConfigTypes, FiltersConfig } from 'shared';

interface UseGetConfig {
	type?: ConfigTypes;
	currentProduct?: Product;
}

type GetConfig = ({ type, currentProduct }: UseGetConfig) => FiltersConfig;

const getConfig: GetConfig = ({ type, currentProduct }) => {
	switch (type) {
		case 'Trending':
			return {
				priceFrom: 0,
				priceMax: 999999,
			};

		case 'Related products':
			return {
				priceFrom: currentProduct
					? currentProduct.price - 100 >= 0
						? currentProduct.price - 100
						: 0
					: 0,
				priceMax: currentProduct ? currentProduct.price + 100 : 0,
			};

		case 'Worth seeing':
			return {
				priceFrom: 500,
				priceMax: 999999,
			};

		case 'Less than 100$':
			return {
				priceFrom: 0,
				priceMax: 100,
			};

		default:
			return {
				priceFrom: 0,
				priceMax: 999999,
			};
	}
};

export const useGetConfig = ({
	type,
	currentProduct,
}: UseGetConfig): FiltersConfig => {
	const result = useMemo(
		() => getConfig({ type, currentProduct }),
		[currentProduct]
	);
	return result;
};
