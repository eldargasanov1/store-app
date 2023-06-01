import { FC, memo } from 'react';
import styles from './Sidebar.module.scss';
import { Category, StatusQueryType, useResize } from 'shared';
import { Link } from 'react-router-dom';
import { CategorySkeleton } from './CategorySkeleton';
import { ChipSkeleton } from './ChipSkeleton';

interface PresentationalProps {
	categories: Category[] | undefined;
	status: StatusQueryType;
	errorForUser: string | undefined;
	activeCategoryId: number | undefined;
}

export const SidebarPresentational: FC<PresentationalProps> = memo(
	({ categories, errorForUser, activeCategoryId, status }) => {
		const currentWidth = useResize();

		if (errorForUser) {
			return (
				<div className={styles['sidebar']}>
					<div className={styles['title']}>{errorForUser}</div>
				</div>
			);
		}

		return (
			<div className={styles['sidebar']}>
				<div className={styles['title']}>CATEGORIES</div>
				<div className={styles['content']}>
					<ul className={styles['categories']}>
						{categories &&
							status === 'fulfilled' &&
							categories.map(category => (
								<li
									key={category.id}
									className={
										category.id === activeCategoryId
											? `${styles['category']} ${styles['active']}`
											: styles['category']
									}
								>
									<Link to={`/${category.name.toLowerCase()}`}>
										{category.name}
									</Link>
								</li>
							))}
						{status === 'rejected' && (
							<li className={`${styles['category']} ${styles['active']}`}>
								Not found
							</li>
						)}
						{status === 'pending' && (
							<>
								{!currentWidth
									? [...new Array(6)].map((_, i) => (
											<CategorySkeleton key={i + 'category'} />
									  ))
									: [...new Array(6)].map((_, i) => (
											<ChipSkeleton key={i + 'chip'} />
									  ))}
							</>
						)}
					</ul>
					<div className={styles['bottom']}>
						<Link to='/'>Help</Link>
						<Link to='/' className={styles['terms']}>
							Terms & Conditions
						</Link>
					</div>
				</div>
			</div>
		);
	}
);
