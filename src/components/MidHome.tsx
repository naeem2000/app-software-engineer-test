import midHome from '../assets/Img_004.jpg';
import Button from '../stories/Button';
import './homeStyles.scss';

export default function MidHome() {
	return (
		<section className='mid-home'>
			<div className='max-width'>
				<div>
					<h2>Justo petentium te vix, scripta regione urbanitas</h2>
					<br />
					<p>
						Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
						aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan
						at vix. Ad vix legere impetus, nam consequat reformidans ut. No sit
						consul integre voluptatibus, omnium lucilius ne mel. Et ancillae
						recteque deterruisset sed, ea nec odio option, ferri assum eum et.
					</p>
					<br />
					<ul>
						<li>Te pri efficiendi assueverit, id molestie suavitate per</li>
						<li>
							Te nam dolorem rationibus repudiandae, ne ius falli aliquip
							consetetur
						</li>
						<li>Ut qui dicant copiosae interpretaris</li>
						<li>
							Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
						</li>
					</ul>
					<Button
						className='mid-home-button'
						label='Learn more'
						variant='dark'
					/>
				</div>
				<img src={midHome} alt='mid home' />
			</div>
		</section>
	);
}
