import clsx from 'clsx';
import { BaseButton, BaseButtonProps, BaseButtonComponent } from './BaseButton';
import styles from './Button.module.scss';

export type ButtonProps<C extends BaseButtonComponent = 'button'> =
	BaseButtonProps<C> & {
		loading?: boolean;
		disabled?: boolean;
	};

export function Button<C extends BaseButtonComponent = 'button'>({
	className,
	loading,
	disabled,
	disableDefaultStyles = false,
	...props
}: ButtonProps<C>) {
	return (
		<BaseButton<C>
			className={clsx(className, {
				[styles.button]: !disableDefaultStyles,
				[styles.loading]: loading && !disableDefaultStyles,
				[styles.disabled]: disabled && !disableDefaultStyles,
			})}
			{...(props as BaseButtonProps<C>)}
		/>
	);
}
