import { baseUrl } from '../assets/data';
import { ContactFormTypes } from '../types';

export const getBannerData = async () => {
	try {
		const res = await fetch(`${baseUrl}/api/v1/home/banner-details`);
		const data = await res.json();

		return data.Details;
	} catch (e) {
		console.error('Error fetching banner data:', e);
	}
};

export const submitForm = async (contactData: ContactFormTypes) => {
	try {
		const response = await fetch(`${baseUrl}/api/v1/contact-us/submit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(contactData),
		});
		if (!response.ok) {
			const text = await response.text();
			throw new Error(`Server error: ${text}`);
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Network error:', error);
		throw error;
	}
};
