import { FC, memo, useState } from 'react';
import { MyInputProps, MyInputsBlock } from 'shared';

interface FiltersState {
	minPrice: number;
	maxPrice: number;
}

interface ContainerProps {
	handleMinPrice: (minPrice: number) => void;
	handleMaxPrice: (maxPrice: number) => void;
	className?: string;
}

export const SearchFiltersContainer: FC<ContainerProps> = memo(
	({ handleMinPrice, handleMaxPrice, className }) => {
		const [filtersState, setFiltersState] = useState<FiltersState>({
			minPrice: 0,
			maxPrice: 999999,
		});

		const onMinPriceChange = (newMinPrice: number) => {
			setFiltersState(prev => ({ ...prev, minPrice: newMinPrice }));
			handleMinPrice(newMinPrice);
		};

		const onMaxPriceChange = (newMaxPrice: number) => {
			setFiltersState(prev => ({ ...prev, maxPrice: newMaxPrice }));
			handleMaxPrice(newMaxPrice);
		};

		const inputProps: MyInputProps[] = [
			{
				type: 'number',
				placeholder: 'Min price',
				value: filtersState.minPrice === 0 ? '' : filtersState.minPrice,
				onChange: e => onMinPriceChange(Number(e.target.value)),
				after: '$',
			},
			{
				type: 'number',
				placeholder: 'Max price',
				value:
					filtersState.maxPrice === 999999 || filtersState.maxPrice === 0
						? ''
						: filtersState.maxPrice,
				onChange: e => onMaxPriceChange(Number(e.target.value)),
				after: '$',
			},
		];

		return <MyInputsBlock className={className} inputProps={inputProps} />;
	}
);
