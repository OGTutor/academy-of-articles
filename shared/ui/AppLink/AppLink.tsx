import { classNames } from '@/shared/lib/classNames/classNames';
import Link, { type LinkProps } from 'next/link';
import { type FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
	children: React.ReactNode;
}

const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	theme = AppLinkTheme.PRIMARY,
	href,
	...rest
}) => {
	return (
		<Link
			href={href}
			className={classNames(styles.AppLink, {}, [
				(className = ''),
				styles[theme],
			])}
			{...rest}
		>
			{children}
		</Link>
	);
};

export default AppLink;
