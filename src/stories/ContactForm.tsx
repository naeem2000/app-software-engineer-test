import { useCallback, useState } from 'react';
import Button from './Button';
import './contact-form.scss';

export default function ContactForm() {
	const [isAddressEnabled, setIsAddressEnabled] = useState<boolean>(false);
	const [phoneNumberCount, setPhoneNumberCount] = useState<number>(1);

	const addPhoneNumber = useCallback(() => {
		setPhoneNumberCount((prev) => prev + 1);
	}, []);

	const PhoneNumber = ({ index }: { index: number }) => {
		return (
			<div>
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
				/>
			</div>
		);
	};

	return (
		<form>
			<div className='name-email'>
				<div>
					<label htmlFor='name'>Full name</label>
					<input required type='text' id='name' />
				</div>
				<div>
					<label htmlFor='email'>Email address</label>
					<input required type='email' name='' id='email' />
				</div>
			</div>
			<div className='phone-number'>
				{Array.from({ length: phoneNumberCount }).map((_, index) => (
					<PhoneNumber key={index} index={index} />
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
					name=''
					id='message'
				/>
			</div>
			<div className='address-checkbox'>
				<input
					type='checkbox'
					name=''
					id='address-checkbox'
					onChange={(e) => setIsAddressEnabled(e.target.checked)}
				/>
				<label htmlFor='address-checkbox'>Add address details</label>
			</div>
			{isAddressEnabled && (
				<div className='address'>
					<div>
						<div>
							<label htmlFor='address-line-1'>Address line 1</label>
							<input type='text' name='address 1' id='address-line-1' />
						</div>
						<div>
							<label htmlFor='address-line-1'>Address line 2 - optional</label>
							<input type='text' name='address 2' id='address-line-1' />
						</div>
					</div>
					<div className='state-details'>
						<div>
							<label htmlFor='city/town'>City/Town</label>
							<input type='text' name='city/town' id='city/town' />
						</div>
						<div>
							<label htmlFor='state/county'>State/County</label>
							<input type='text' name='state/county' id='state/county' />
						</div>
						<div>
							<label htmlFor='postcode'>Postcode</label>
							<input
								type='text'
								pattern='[0-9]*'
								inputMode='numeric'
								name='postcode'
								id='postcode'
							/>
						</div>
						<div>
							<label htmlFor='Country'>Country</label>
							<input type='text' name='country' id='Country' />
						</div>
					</div>
				</div>
			)}
			<Button icon label='Submit' variant='dark' type='submit' />
		</form>
	);
}
