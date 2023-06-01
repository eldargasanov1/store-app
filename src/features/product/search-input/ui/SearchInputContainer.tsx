import { FC, useState, memo } from 'react';
import styles from './SearchInput.module.scss';
import { MyInput, MyInputProps } from 'shared';

interface ContainerProps {
	handleSearchValue: (searchValue: string) => void;
}

export const SearchInputContainer: FC<ContainerProps> = memo(
	({ handleSearchValue }) => {
		const [searchValue, setSearchValue] = useState('');

		const onChange = (value: string) => {
			setSearchValue(value);
			handleSearchValue(value);
		};

		const searchInputProps: MyInputProps = {
			className: styles['search-input'],
			placeholder: 'Search...',
			type: 'search',
			value: searchValue,
			onChange: e => onChange(e.target.value),
		};

		return <MyInput {...searchInputProps} />;
	}
);
