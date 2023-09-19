import Navbar from '@/components/Navbar';
import ThemeProvider from '@/hooks/theme/ThemeProvider';
import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'AOA. Academy Of Articles',
	description: 'Academy Of Articles',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<Navbar>{children}</Navbar>
				</ThemeProvider>
			</body>
		</html>
	);
}
