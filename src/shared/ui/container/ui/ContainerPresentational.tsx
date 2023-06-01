import { CSSProperties, FC } from 'react';
import styles from './Container.module.scss';
import { PropsWithChildren } from 'shared';

interface PresentationalProps extends PropsWithChildren {
	maxWidth?: number;
	sx?: CSSProperties;
	className?: string;
}

export const ContainerPresentational: FC<PresentationalProps> = ({
	children,
	sx,
	className,
}) => {
	const classNameWrapper = styles['wrapper'] ? styles['wrapper'] : '';
	const classNameWrapperFull = `${
		className ? `${classNameWrapper} ${className}` : `${classNameWrapper}`
	}`;

	return (
		<div className='_container' style={sx}>
			<div className={classNameWrapperFull}>{children}</div>
		</div>
	);
};
