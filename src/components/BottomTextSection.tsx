import { routes } from '../utils/routes';
import { Link } from 'react-router-dom';
import Button from '../stories/Button';
import './homeStyles.scss';

export default function BottomTextSection() {
	return (
		<section className='max-width bottom-text-section'>
			<div>
				<h2>Justo petentium te vix, scripta regione urbanitas</h2>
				<p>Taria duo ut vis semper abhorreant</p>
			</div>
			<div className='text-grid'>
				<div>
					<p>
						Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor,
						nec laoreet nulla. Nam auctor ultricies dapibus. Donec ac interdum
						dui, quis finibus lectus. Cras in ultrices neque. Curabitur eget
						turpis iaculis diam congue sagittis a vel ligula. Mauris ut arcu ex.
						Nullam quis orci ante. Nunc felis massa, posuere non gravida in,
						commodo in arcu. In feugiat magna non volutpat faucibus. Nam aliquam
						justo nec aliquam iaculis. Integer laoreet pulvinar elit pulvinar
						fermentum. Morbi vehicula sodales nunc ac varius. Proin porttitor
						porttitor libero vel pharetra.
					</p>
					<br />
					<p>
						Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis
						dis parturient montes, nascetur
					</p>
				</div>
				<div>
					<p>
						ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce
						ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non,
						eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie
						mattis velit maximus ac. Quisque iaculis hendrerit ex et tincidunt.
						Aenean eu magna ut nisi placerat fringilla in sed diam. Suspendisse
						tristique vel dui nec imperdiet. Cras mattis ligula quis fermentum
						suscipit. Proin et elementum arcu, sit amet porttitor diam.
						Curabitur euismod, erat vitae tristique volutpat, augue lectus
						dignissim justo, at faucibus orci est a elit.
					</p>
					<br />
					<p>
						Sed sed sapien pretium, maximus felis vel, mollis elit. Sed libero
						justo, lobortis sit amet suscipit non, auctor non
					</p>
				</div>
				<div>
					<p>
						libero. Maecenas quis nisl eget enim porta blandit a nec sapien.
						Mauris porttitor lorem ut egestas euismod. Donec molestie tempor
						nibh, nec venenatis arcu ullamcorper sit amet. Nulla facilisi. Proin
						cursus neque ut tortor scelerisque, at iaculis nunc ornare.
						Pellentesque non nunc nulla. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Aenean et sodales diam. ullamcorper sit
						amet. Nulla facilisi. Proin cursus neque ut tortor scelerisque, at
						iaculis nunc ornare. Pellentesque non nunc nulla. Interdum et
						malesuada fames ac ante ipsum primis in faucibus. Aenean et sodales
						diam
					</p>
				</div>
			</div>
			<div className='button-container'>
				<Link to={routes.contact}>
					<Button
						type='button'
						className='contact-button'
						label='Contact us'
						variant='dark'
					/>
				</Link>
			</div>
		</section>
	);
}
