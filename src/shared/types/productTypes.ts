export interface Category {
	id: number;
	name: string;
	image: string;
}

export interface ProductBase {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	images: string[];
}

export interface Product extends ProductBase {
	colors: string[];
	sizes: number[];
	purchases: number;
}

export interface ProductCart extends ProductBase {
	cartId: string;
	color: string;
	size: number;
	quantity: number;
}

export interface GetProductsParams {
	currentCategoryId: number;
	limit?: number;
	offset?: number;
	title?: string;
	price_min?: number;
	price_max?: number;
}

export interface FiltersState {
	productName: string;
	priceFrom: number;
	priceMax: number;
	limit: number;
	page: number;
}

export type FiltersConfig = Pick<FiltersState, 'priceFrom' | 'priceMax'>;

export type ConfigTypes =
	| 'Trending'
	| 'Related products'
	| 'Worth seeing'
	| 'Less than 100$';

export interface OptionProps {
	title: string;
	value: number;
}

export interface SelectProps {
	selected: OptionProps | null;
	options: OptionProps[];
	placeholder?: string;
	onChange?: (option: OptionProps) => void;
	onClose?: () => void;
}
