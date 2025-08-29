import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';
import { navLinks } from '../assets/data';
import Button from './Button';
import './nav.scss';

export default function Nav() {
	const location = useLocation();

	return (
		<>
			<nav>
				<div className='max-width'>
					<img src={logo} alt='Logo' />
					<div>
						<ul>
							{navLinks.map((item, index) => {
								return (
									<li key={index}>
										<Link
											className={
												location.pathname === item.href ? 'active' : ''
											}
											to={item.href}
										>
											{item.link}
										</Link>
									</li>
								);
							})}
						</ul>
						<Button type='button' variant='light' label='Sign in' />
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
}
