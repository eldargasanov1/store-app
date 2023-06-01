import { FC, memo } from 'react';
import styles from './Layout.module.scss';
import { Header } from 'widgets/header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/footer';
import { AuthForm } from 'widgets/user';
import { SearchModal } from 'widgets/product';

interface PresentationalProps {
	isAuthFormOpen: boolean;
	isSearchFormOpen: boolean;
}

export const LayoutPresentational: FC<PresentationalProps> = memo(
	({ isAuthFormOpen, isSearchFormOpen }) => {
		return (
			<>
				<header>
					<Header />
				</header>
				<main>
					<Outlet />
				</main>
				<footer>
					<Footer />
				</footer>
				{isAuthFormOpen && (
					<div className={styles['auth-form']}>
						<AuthForm />
					</div>
				)}
				{isSearchFormOpen && (
					<div className={styles['search-form']}>{<SearchModal />}</div>
				)}
			</>
		);
	}
);
