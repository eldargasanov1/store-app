import { FC } from 'react';
import styles from './Option.module.scss';
import { OptionProps } from 'shared';

interface PresentationalProps {
	option: OptionProps;
	onClick: (option: OptionProps) => void;
}

export const OptionPresentational: FC<PresentationalProps> = ({
	option,
	onClick,
}) => {
	return (
		<li className={styles['option']}>
			<button
				className={styles['button']}
				type='button'
				value={option.value}
				onClick={() => onClick(option)}
			>
				{option.title}
			</button>
		</li>
	);
};
