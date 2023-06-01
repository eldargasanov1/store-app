import { useParams } from 'react-router-dom';
import { Category } from 'shared';
import { useGetCategoriesQuery } from 'entities/product';

export const useGetCurrentCategory = (): Category | undefined => {
	const { category: categoryParam } = useParams();

	const { currentCategory } = useGetCategoriesQuery(undefined, {
		selectFromResult: ({ data: categories }) => {
			const currentCategory = categories?.find(
				category => category.name.toLowerCase().trim() === categoryParam
			);
			return {
				currentCategory: currentCategory,
			};
		},
	});

	return currentCategory;
};
