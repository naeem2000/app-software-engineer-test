import ContactForm from '../../stories/ContactForm';
import Footer from '../../stories/Footer';
import Nav from '../../stories/Nav';
import './contact-us.scss';

export default function ContactUs() {
	return (
		<main>
			<Nav />
			<div className='contact-us max-width'>
				<h2>Contact us</h2>
				<p>
					Fusce efficitur eu purus ac posuere nean imperdiet risus dolor, nec
					accumsan velit ornare sit amet.
				</p>
				<ContactForm />
			</div>
			<Footer />
		</main>
	);
}
