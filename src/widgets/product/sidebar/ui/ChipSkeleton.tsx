import ContentLoader from 'react-content-loader';

export const ChipSkeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={90}
		height={35}
		viewBox='0 0 90 35'
		backgroundColor='#212123'
		foregroundColor='#979797'
		{...props}
	>
		<rect x='0' y='0' rx='25' ry='25' width='90' height='35' />
	</ContentLoader>
);
