import { FC } from 'react';
import styles from './ToCart.module.scss';
import { Link, useParams } from 'react-router-dom';
import { SITE_URL } from 'shared/config';
import { CartBadge } from './CartBadge';

export const ToCartPresentational: FC = () => {
	const { category } = useParams();

	return (
		<Link
			to={`/${category}/cart`}
			className={styles['to-cart']}
			style={{ position: 'relative' }}
		>
			<svg className={`${styles['icon']} ${styles['icon-cart']}`}>
				<use href={`${SITE_URL}/src/shared/images/sprite.svg#bag`} />
			</svg>
			<CartBadge />
		</Link>
	);
};
