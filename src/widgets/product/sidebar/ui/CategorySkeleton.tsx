import ContentLoader from 'react-content-loader';

export const CategorySkeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={150}
		height={18}
		viewBox='0 0 150 18'
		backgroundColor='#212123'
		foregroundColor='#979797'
		{...props}
	>
		<rect x='0' y='0' rx='3' ry='3' width='150' height='18' />
	</ContentLoader>
);
