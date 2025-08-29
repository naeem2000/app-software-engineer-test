import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getBannerData } from '../utils/api';
import { ClipLoader } from 'react-spinners';
import { routes } from '../utils/routes';
import { Link } from 'react-router-dom';
import Button from '../stories/Button';
import { BannerData } from '../types';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './homeStyles.scss';
import 'swiper/css';

export default function Hero() {
	const [bannerData, setBannerData] = useState<BannerData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const fetchBannerData = useCallback(async () => {
		try {
			const bannerRequest = await getBannerData();
			setBannerData(bannerRequest);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
			console.error('Error loading banner details', e);
		}
	}, []);

	useEffect(() => {
		fetchBannerData();
	}, [fetchBannerData]);

	return (
		<section className='hero'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={true}
				pagination={{ clickable: true }}
				className='swiper-container'
				lazyPreloaderClass='swiper-lazy-preloader'
			>
				{bannerData.map((item, index) => (
					<SwiperSlide className='slide' key={index}>
						<div className='overlay' />
						{isLoading || bannerData.length < 0 ? (
							<div className='loader'>
								<ClipLoader color='white' />
							</div>
						) : (
							<>
								<img
									src={item.ImageUrl}
									className='swiper-lazy'
									loading='lazy'
									decoding='async'
									sizes='100vw'
									alt={item.Title}
								/>
								<div className='swiper-lazy-preloader' />
								<div className='max-width'>
									<div className='hero-text'>
										<h1>{item.Title}</h1>
										<p>{item.Subtitle}</p>
										<Link to={routes.contact}>
											<Button type='button' label='Contact us' variant='dark' />
										</Link>
									</div>
								</div>
							</>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
