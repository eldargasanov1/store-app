/* UI */
export { Badge } from './ui/badge';
export { Button } from './ui/button';
export { Container } from './ui/container';
export { MyInput } from './ui/my-input';
export { Select, Option } from './ui/select';
export { Slider, SliderSkeleton } from './ui/slider';
export { XButton } from './ui/x-button';
export { MyInputsBlock } from './ui/my-inputs-block';

/* Lib */
export {
	useEvent,
	useWindowEvent,
	useResize,
	getSizes,
	getColors,
	transformProduct,
	transformProducts,
	useOutsideClick,
	capitalizeWord,
	highlightLetters,
	getErrorForUser,
	getStatusQuery,
} from './lib';

/* Config */
export { BASE_URL } from './config';

/* Data */
export { colors, sizes } from './data';

/* Types */
export type {
	PropsWithChildren,
	MyInputProps,
	MenuButtonProps,
} from './types/commonTypes';
export type {
	Category,
	ProductBase,
	Product,
	ProductCart,
	GetProductsParams,
	FiltersState,
	FiltersConfig,
	ConfigTypes,
	OptionProps,
	SelectProps,
} from './types/productTypes';
export type {
	CheckEmail,
	Tokens,
	RegisterArgs,
	User,
	LoginArgs,
	Auth,
	AuthState,
	StatusQueryType,
} from './types/userTypes';
export type { ButtonProps } from './ui/button';
