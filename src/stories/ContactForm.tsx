import { useCallback, useState } from 'react';
import { ContactFormTypes } from '../types';
import { submitForm } from '../utils/api';
import Success from './Success';
import Button from './Button';
import './contact-form.scss';
import React from 'react';

export default function ContactForm() {
	const [phoneKeys, setPhoneKeys] = useState<string[]>([crypto.randomUUID()]);
	const [isAddressEnabled, setIsAddressEnabled] = useState<boolean>(false);
	const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [contactData, setContactData] = useState<ContactFormTypes>({
		FullName: '',
		EmailAddress: '',
		PhoneNumbers: [''],
		Message: '',
		bIncludeAddressDetails: false,
		AddressDetails: {
			AddressLine1: '',
			AddressLine2: '',
			CityTown: '',
			StateCounty: '',
			Postcode: '',
			Country: '',
		},
	});

	const onSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setIsLoading(true);
			try {
				const postForm = await submitForm(contactData);
				if (postForm.Status === '1') {
					setIsSuccessful(true);
				}
				setIsLoading(false);
				setContactData({
					FullName: '',
					EmailAddress: '',
					PhoneNumbers: [''],
					Message: '',
					bIncludeAddressDetails: false,
					AddressDetails: {
						AddressLine1: '',
						AddressLine2: '',
						CityTown: '',
						StateCounty: '',
						Postcode: '',
						Country: '',
					},
				});
			} catch (error) {
				setIsLoading(false);

				console.error('Error submitting form:', error);
			}
		},
		[contactData]
	);

	const toggleCheckbox = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setIsAddressEnabled(e.target.checked);
			setContactData({
				...contactData,
				bIncludeAddressDetails: e.target.checked,
			});
		},
		[contactData]
	);

	const addPhoneNumber = useCallback(() => {
		setContactData((prev) => ({
			...prev,
			PhoneNumbers: [...prev.PhoneNumbers, ''],
		}));
		setPhoneKeys((prev) => [...prev, crypto.randomUUID()]);
	}, []);

	if (isSuccessful) {
		return <Success />;
	}

	return (
		<form onSubmit={onSubmit}>
			<div className='name-email'>
				<div>
					<label htmlFor='name'>Full name</label>
					<input
						required
						type='text'
						id='name'
						value={contactData.FullName}
						onChange={(e) =>
							setContactData({ ...contactData, FullName: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email address</label>
					<input
						required
						type='email'
						name='email'
						id='email'
						value={contactData.EmailAddress}
						onChange={(e) =>
							setContactData({ ...contactData, EmailAddress: e.target.value })
						}
					/>
				</div>
			</div>
			<div className='phone-number'>
				{contactData.PhoneNumbers.map((value, index) => (
					<div key={phoneKeys[index]}>
						<label htmlFor={`phone-number-${index}`}>
							Phone number {index < 9 && '0'}
							{index + 1} - optional
						</label>
						<input
							type='tel'
							pattern='[0-9]*'
							inputMode='numeric'
							id={`phone-number-${index}`}
							name={`phone-number-${index}`}
							value={value}
							onChange={(e) =>
								setContactData((prev) => {
									const newNumbers = [...prev.PhoneNumbers];
									newNumbers[index] = e.target.value;
									return { ...prev, PhoneNumbers: newNumbers };
								})
							}
						/>
					</div>
				))}
				<Button
					type='button'
					label='Add new phone number'
					variant='light'
					onClick={addPhoneNumber}
				/>
			</div>
			<div className='message'>
				<div>
					<label htmlFor='message'>Message</label>
					<span>Maximum text length is 1000 characters</span>
				</div>
				<textarea
					required
					placeholder='Type your text here'
					name='message'
					id='message'
					maxLength={1000}
					value={contactData.Message}
					onChange={(e) =>
						setContactData({ ...contactData, Message: e.target.value })
					}
				/>
			</div>
			<div className='address-checkbox'>
				<input
					type='checkbox'
					name=''
					id='address-checkbox'
					onChange={(e) => toggleCheckbox(e)}
				/>
				<label htmlFor='address-checkbox'>Add address details</label>
			</div>
			{isAddressEnabled && (
				<div className='address'>
					<div className='address-row'>
						<div>
							<label htmlFor='address-line-1'>Address line 1</label>
							<input
								required
								type='text'
								name='address 1'
								id='address-line-1'
								value={contactData.AddressDetails.AddressLine1}
								onChange={(e) =>
									setContactData({
										...contactData,
										AddressDetails: {
											...contactData.AddressDetails,
											AddressLine1: e.target.value,
										},
									})
								}
							/>
						</div>
						<div>
							<label htmlFor='address-line-2'>Address line 2 - optional</label>
							<input
								required
								type='text'
								name='address 2'
								id='address-line-2'
								value={contactData.AddressDetails.AddressLine2}
								onChange={(e) =>
									setContactData({
										...contactData,
										AddressDetails: {
											...contactData.AddressDetails,
											AddressLine2: e.target.value,
										},
									})
								}
							/>
						</div>
					</div>
					<div className='state-details'>
						<div>
							<label htmlFor='city/town'>City/Town</label>
							<input
								required
								type='text'
								name='city/town'
								id='city/town'
								value={contactData.AddressDetails.CityTown}
								onChange={(e) =>
									setContactData({
										...contactData,
										AddressDetails: {
											...contactData.AddressDetails,
											CityTown: e.target.value,
										},
									})
								}
							/>
						</div>
						<div>
							<label htmlFor='state/county'>State/County</label>
							<input
								required
								type='text'
								name='state/county'
								id='state/county'
								value={contactData.AddressDetails.StateCounty}
								onChange={(e) =>
									setContactData({
										...contactData,
										AddressDetails: {
											...contactData.AddressDetails,
											StateCounty: e.target.value,
										},
									})
								}
							/>
						</div>
						<div>
							<label htmlFor='postcode'>Postcode</label>
							<input
								required
								type='text'
								name='postcode'
								id='postcode'
								value={contactData.AddressDetails.Postcode}
								onChange={(e) =>
									setContactData({
										...contactData,
										AddressDetails: {
											...contactData.AddressDetails,
											Postcode: e.target.value.toString(),
										},
									})
								}
							/>
						</div>
						<div>
							<label htmlFor='Country'>Country</label>
							<input
								required
								type='text'
								name='country'
								id='Country'
								value={contactData.AddressDetails.Country}
								onChange={(e) =>
									setContactData({
										...contactData,
										AddressDetails: {
											...contactData.AddressDetails,
											Country: e.target.value,
										},
									})
								}
							/>
						</div>
					</div>
				</div>
			)}
			<Button
				isLoading={isLoading}
				icon
				label='Submit'
				variant='dark'
				type='submit'
			/>
		</form>
	);
}
