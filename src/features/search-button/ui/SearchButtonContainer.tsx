import { FC } from 'react';
import { SearchButtonPresentational } from './SearchButtonPresentational';
import { useActionCreators } from 'app/store';
import { searchActions } from 'entities/product';

export const SearchButtonContainer: FC = () => {
	const actions = useActionCreators(searchActions);

	return (
		<SearchButtonPresentational
			onOpen={() => actions.setIsSearchFormOpen(true)}
		/>
	);
};
