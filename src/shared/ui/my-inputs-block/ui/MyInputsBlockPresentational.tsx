import { FC } from 'react';
import styles from './MyInputsBlock.module.scss';
import { MyInput, MyInputProps } from 'shared';
import clsx from 'clsx';

interface PresentationalProps {
	inputProps: MyInputProps[];
	className?: string;
}

export const MyInputsBlockPresentational: FC<PresentationalProps> = ({
	inputProps,
	className,
}) => {
	return (
		<div className={clsx(styles['my-inputs-block'], className)}>
			{inputProps.map((inputProp, i) => (
				<MyInput key={i} {...inputProp} />
			))}
		</div>
	);
};
