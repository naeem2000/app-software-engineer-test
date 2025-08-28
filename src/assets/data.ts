import { routes } from '../utils/routes';
import { NavLinks } from '../types';

export const navLinks: NavLinks = [
	{
		link: 'Home',
		href: routes.home,
	},
	{
		link: 'About us',
		href: routes.about,
	},
	{
		link: 'Contact us',
		href: routes.contact,
	},
];
