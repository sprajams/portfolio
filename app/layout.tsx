import type { Metadata } from 'next';
import { Inter, Red_Hat_Display } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const redHat = Red_Hat_Display({
	weight: ['900'],
	subsets: ['latin'],
	variable: '--font-redHat',
});

export const metadata: Metadata = {
	title: 'Suph-ware Developer',
	description:
		'Los Angeles based software developer, converting code into tasty treats alongside my scrappy canine co-pilot.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(inter.variable, redHat.variable)}>{children}</body>
		</html>
	);
}
