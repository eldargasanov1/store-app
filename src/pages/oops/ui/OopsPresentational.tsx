import { FC } from 'react';
import styles from './Oops.module.scss';

export const OopsPresentational: FC = () => {
	return (
		<div className={styles['oops']}>
			<p>Oops!</p>
			<p>Something went wrong :(</p>
		</div>
	);
};
