import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
	theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
	className = '',
	children,
	theme = ThemeButton.CLEAR,
	...rest
}) => {
	return (
		<button
			className={classNames(styles.button, {}, [
				className,
				styles[theme],
			])}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
