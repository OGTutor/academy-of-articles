'use client';

import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {
	children: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<button onClick={toggleTheme}>Change Theme</button>
			</nav>
			<main>{children}</main>
		</div>
	);
};

export default Navbar;
