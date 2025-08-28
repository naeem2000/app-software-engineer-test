export type NavLinks = {
	link: string;
	href: string;
}[];

export type Routes = {
	home: string;
	about: string;
	contact: string;
};

export type BannerData = {
	Title: 'string';
	Subtitle: 'string';
	ImageUrl: 'string';
};

export type ContactFormTypes = {
	FullName: string;
	EmailAddress: string;
	PhoneNumbers: string[];
	Message: string;
	bIncludeAddressDetails: boolean;
	AddressDetails: {
		AddressLine1: string;
		AddressLine2: string;
		CityTown: string;
		StateCounty: string;
		Postcode: string;
		Country: string;
	};
};
