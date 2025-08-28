import Button from '../stories/Button';
import './homeStyles.scss';

export default function BottomHomeSection() {
	return (
		<section className='bottom-home-section'>
			<div className='max-width'>
				<div>
					<h2>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
					<br />
					<p>
						Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis
						dis parturient montes, nascetur ridiculus mus. Donec finibus nulla
						quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue
						ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum
						rutrum malesuada turpis, molestie mattis velit maximus ac. Quisque
						iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat
						fringilla in sed diam.
					</p>
					<Button className='overlay-button' label='Log in' variant='light' />
				</div>
			</div>
		</section>
	);
}
