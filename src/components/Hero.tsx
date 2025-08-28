import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { routes } from '../utils/routes';
import { Link } from 'react-router-dom';
import Button from '../stories/Button';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './homeStyles.scss';
import 'swiper/css';

export default function Hero() {
	return (
		<section className='hero'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={true}
				pagination={{ clickable: true }}
				className='swiper-container'
			>
				<SwiperSlide className='slide'>
					<div className='overlay' />
				</SwiperSlide>
				<SwiperSlide className='slide'>
					<div className='overlay' />
				</SwiperSlide>

				<div className='max-width'>
					<div className='hero-text'>
						<h1>Lorem ipsum dolor</h1>
						<p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
						<Link to={routes.contact}>
							<Button label='Contact us' variant='dark' />
						</Link>
					</div>
				</div>
			</Swiper>
		</section>
	);
}
