import { FC } from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

interface PresentationalProps {
	onChangePage: (page: number) => void;
	pageCount: number;
}

export const PaginationPresentational: FC<PresentationalProps> = ({
	onChangePage,
	pageCount,
}) => {
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
