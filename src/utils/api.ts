import { baseUrl } from '../assets/data';

export const getBannerData = async () => {
	try {
		const res = await fetch(`${baseUrl}/api/v1/home/banner-details`);
		const data = await res.json();

		return data.Details;
	} catch (e) {
		console.error('Error fetching banner data:', e);
	}
};

export const submitForm = async () => {};
