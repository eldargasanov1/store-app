import { useGetCategoriesQuery } from 'entities/product';
import { FC } from 'react';
import { OptionProps, Select } from 'shared';

interface ContainerProps {
	selectedOption: OptionProps | null;
	setSelectedOption: (option: OptionProps) => void;
}

export const SelectCategoryContainer: FC<ContainerProps> = ({
	selectedOption,
	setSelectedOption,
}) => {
	const { data: categories } = useGetCategoriesQuery();
	if (!categories) {
		return null;
	}
	const selectOptions: OptionProps[] = [
		...categories.map(category => ({
			title: category.name,
			value: category.id,
		})),
		{ title: 'All', value: 0 },
	];

	return (
		<Select
			selected={selectedOption}
			onChange={setSelectedOption}
			options={selectOptions}
			placeholder='Select a category'
		/>
	);
};
