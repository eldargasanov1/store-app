import { FC, CSSProperties } from 'react';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'shared/images/logo.svg';
import { useGetCurrentCategory } from 'entities/product';

interface PresentationalProps {
	sx?: CSSProperties;
}

export const LogoPresentational: FC<PresentationalProps> = ({ sx }) => {
	const currentCategory = useGetCurrentCategory();

	return (
		<div className={styles['logo']} style={sx}>
			<Link to='/' state={{ from: currentCategory?.name.toLowerCase() }}>
				<LogoIcon />
			</Link>
		</div>
	);
};
