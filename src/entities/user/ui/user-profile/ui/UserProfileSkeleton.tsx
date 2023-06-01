import ContentLoader from 'react-content-loader';
import { useResize } from 'shared';

export const UserProfileSkeleton = (props: any) => {
	const currentWidth = useResize();
	const isShowTitle =
		!currentWidth || currentWidth === 'pc' || currentWidth === 'tablet';

	const width = isShowTitle ? 110 : 36;
	const viewBox = isShowTitle ? '0 0 110 36' : '0 0 36 36';
	return (
		<ContentLoader
			speed={2}
			width={width}
			height={36}
			viewBox={viewBox}
			backgroundColor='#191919'
			foregroundColor='#979797'
			{...props}
		>
			<circle cx='18' cy='18' r='18' />
			{isShowTitle && (
				<rect x='46' y='12' rx='3' ry='3' width='60' height='10' />
			)}
		</ContentLoader>
	);
};
