import { FC } from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useResize } from 'shared';

interface PresentationalProps {
	currentPage: number;
	onChangePage: (page: number) => void;
	pageCount: number;
}

export const PaginationPresentational: FC<PresentationalProps> = ({
	currentPage,
	onChangePage,
	pageCount,
}) => {
	const currentWidth = useResize();

	return (
		<ReactPaginate
			className={styles['pagination']}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={event => onChangePage(event.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={pageCount}
			activeClassName={styles['active-page']}
		/>
	);
};
