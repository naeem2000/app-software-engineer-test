import './button.scss';
import Icon_Submit from '../assets/icons/Icon_Submit.svg';

interface Props {
	label: string;
	variant: 'light' | 'dark';
	className?: string;
	onClick?: () => void;
	type: 'submit' | 'button' | 'reset';
	icon?: boolean;
}

export default function Button({
	variant,
	className,
	onClick,
	label,
	type,
	icon,
}: Props) {
	const variantClass = variant === 'light' ? 'light' : 'dark';
	return icon ? (
		<button
			type={type}
			className={`icon-button ${className} ${variantClass}`}
			onClick={onClick}
		>
			<span>{label}</span>
			<img src={Icon_Submit} alt='submit' />
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
