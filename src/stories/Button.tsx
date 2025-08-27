import './button.scss';

interface Props {
	label: string;
	variant: 'light' | 'dark';
	className?: string;
	onClick?: () => void;
}

export default function Button({ variant, className, onClick, label }: Props) {
	const variantClass = variant === 'light' ? 'light' : 'dark';
	return (
		<button className={`${className} ${variantClass}`} onClick={onClick}>
			{label}
		</button>
	);
}
