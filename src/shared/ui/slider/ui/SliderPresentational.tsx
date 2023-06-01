import { FC, memo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import './Slider.scss';
import { Swiper as SwiperType } from 'swiper';
import { useResize } from 'shared';

interface PresentationalProps {
	imageLinks: string[];
	title: string;
}

export const SliderPresentational: FC<PresentationalProps> = memo(
	({ imageLinks, title }) => {
		const [thumbsSwiper, setThumbsSwiper] = useState<
			SwiperType | null | undefined
		>(null);
		const currentWidth = useResize();
		const isSmallerThanTablet = currentWidth && currentWidth !== 'pc';

		return (
			<div className='slider'>
				<Swiper
					loop={true}
					spaceBetween={10}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[Navigation, Thumbs]}
					className='main-slider'
				>
					{imageLinks.map((link, i) => (
						<SwiperSlide key={i}>
							<img src={link} alt={title} />
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					onSwiper={setThumbsSwiper}
					direction={!isSmallerThanTablet ? 'vertical' : 'horizontal'}
					loop={true}
					spaceBetween={5}
					slidesPerView={4}
					watchSlidesProgress={true}
					modules={[Navigation, Thumbs]}
					className='small-slider'
				>
					{imageLinks.map((link, i) => (
						<SwiperSlide key={i}>
							<img src={link} alt={title} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);
	}
);
