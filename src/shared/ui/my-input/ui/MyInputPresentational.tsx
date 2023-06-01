import { FC, InputHTMLAttributes } from 'react';
import styles from './MyInput.module.scss';
import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

interface PresentationalProps extends InputHTMLAttributes<HTMLInputElement> {
	after?: any;
	className?: string;
	registerProps?: UseFormRegisterReturn<'email' | 'password' | 'name'>;
	error?: Record<string, any>;
}

export const MyInputPresentational: FC<PresentationalProps> = ({
	hidden,
	className,
	after,
	registerProps,
	error,
	...rest
}) => {
	return (
		<>
			{!hidden && (
				<div className={styles['wrapper']}>
					<div
						className={clsx([styles['my-input']], className, {
							[styles['error']]: error,
							[styles['icon-active']]: rest.type === 'search',
						})}
					>
						{rest.type === 'search' && (
							<svg className={styles['icon']}>
								<use xlinkHref='images/sprite.svg#search' />
							</svg>
						)}
						<input {...registerProps} {...rest} />
						{after && <div>{after}</div>}
					</div>
					{error && (
						<div className={styles['error-message']}>{error.message}</div>
					)}
				</div>
			)}
		</>
	);
};
