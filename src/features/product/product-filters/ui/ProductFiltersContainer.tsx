import { FC, memo, useState } from 'react';
import { MyInputProps, MyInputsBlock } from 'shared';

interface FiltersState {
	productName: string;
	priceFrom: number;
}

interface ContainerProps {
	handleProductName: (productName: string) => void;
	handlePriceFrom: (priceFrom: number) => void;
	className?: string;
}

export const ProductFiltersContainer: FC<ContainerProps> = memo(
	({ handleProductName, handlePriceFrom, className }) => {
		const [filtersState, setFiltersState] = useState<FiltersState>({
			productName: '',
			priceFrom: 0,
		});

		const onProductNameChange = (newProductName: string) => {
			setFiltersState(prev => ({ ...prev, productName: newProductName }));
			handleProductName(newProductName);
		};

		const onPriceFromChange = (newPriceFrom: number) => {
			setFiltersState(prev => ({ ...prev, priceFrom: newPriceFrom }));
			handlePriceFrom(newPriceFrom);
		};

		const inputProps: MyInputProps[] = [
			{
				type: 'search',
				placeholder: 'Product name',
				value: filtersState.productName,
				onChange: e => onProductNameChange(e.target.value),
			},
			{
				type: 'number',
				placeholder: 'Price from',
				value: filtersState.priceFrom === 0 ? '' : filtersState.priceFrom,
				onChange: e => onPriceFromChange(Number(e.target.value)),
				after: '$',
			},
		];

		return <MyInputsBlock className={className} inputProps={inputProps} />;
	}
);
