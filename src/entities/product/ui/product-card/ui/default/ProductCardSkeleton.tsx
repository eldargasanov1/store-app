import ContentLoader from 'react-content-loader';

export const ProductCardSkeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={230}
		height={220}
		viewBox='0 0 230 220'
		backgroundColor='#212123'
		foregroundColor='#979797'
		{...props}
	>
		<rect x='0' y='0' rx='0' ry='0' width='230' height='110' />
		<rect x='0' y='110' rx='0' ry='0' width='3' height='110' />
		<rect x='227' y='110' rx='0' ry='0' width='3' height='110' />
		<rect x='3' y='217' rx='0' ry='0' width='224' height='3' />
		<rect x='12' y='122' rx='8' ry='8' width='205' height='18' />
		<rect x='12' y='145' rx='8' ry='8' width='60' height='15' />
		<rect x='12' y='181' rx='8' ry='8' width='80' height='24' />
		<rect x='135' y='187' rx='8' ry='8' width='80' height='12' />
	</ContentLoader>
);
