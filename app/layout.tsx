'use client';

import Navbar from '@/widgets/Navbar';

import i18n from '@/shared/config/i18n/i18n';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './providers/ThemeProvider';
import './styles/index.scss';

const MainFont = localFont({
	src: '../public/fonts/Cyberpunk.ttf',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'AOA. Academy Of Articles',
	description: 'Academy Of Articles',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode {
	return (
		<html lang="en">
			<body className={MainFont.className}>
				<ThemeProvider>
					<I18nextProvider i18n={i18n}>
						<Navbar>{children}</Navbar>
					</I18nextProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
