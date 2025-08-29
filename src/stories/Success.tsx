import Icon_Valid from '../assets/icons/Icon_Valid.svg';
import './success.scss';

export default function Success() {
	return (
		<section className='success'>
			<div>
				<img src={Icon_Valid} alt='success' />
			</div>
			<p>YOUR MESSAGE HAS BEEN SENT</p>
			<p>We will be in contact with you within 24 hours.</p>
		</section>
	);
}
