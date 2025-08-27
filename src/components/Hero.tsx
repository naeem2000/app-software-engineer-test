import './homeStyles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Button from '../stories/Button';
import { Link } from 'react-router-dom';
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
						<Link to='/contact-us'>
							<Button label='Contact us' variant='dark' />
						</Link>
					</div>
				</div>
			</Swiper>
		</section>
	);
}
