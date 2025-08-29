import Icon_Submit from '../assets/icons/Icon_Submit.svg';
import { ClipLoader } from 'react-spinners';
import './button.scss';

interface Props {
	label: string;
	variant: 'light' | 'dark';
	className?: string;
	onClick?: () => void;
	type: 'submit' | 'button' | 'reset';
	icon?: boolean;
	isLoading?: boolean;
}

export default function Button({
	isLoading,
	className,
	onClick,
	variant,
	label,
	type,
	icon,
}: Props) {
	const variantClass = variant === 'light' ? 'light' : 'dark';
	return icon ? (
		<button
			type={type}
			className={`${
				isLoading ? '' : 'icon-button'
			} ${className} ${variantClass}`}
			onClick={onClick}
		>
			{isLoading ? (
				<ClipLoader size={20} color='white' />
			) : (
				<>
					<span>{label}</span>
					<img src={Icon_Submit} alt='submit' />
				</>
			)}
		</button>
	) : (
		<button
			type={type}
			className={`${className} ${variantClass}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
}
