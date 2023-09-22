'use client';

import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillMoonFill, BsFillSunFill, BsInfoSquare } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { RiFilePaper2Line } from 'react-icons/ri';
import styles from './Navbar.module.scss';

interface NavbarProps {
	children: React.ReactNode;
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ children, className = '' }) => {
	const { toggleTheme, theme } = useTheme();
	const pathname = usePathname();

	console.log(pathname);

	const [activeIndex, setActiveIndex] = useState(pathname);

	const handleLiClick = (pathname: string) => {
		setActiveIndex(pathname);
	};

	return (
		<div className={classNames('app', {}, [theme])}>
			<nav className={classNames(styles.navbar, {}, [className])}>
				<div className={classNames(styles.navigation, {}, [])}>
					<ul>
						<li
							key={1}
							className={classNames('', {
								[styles.active]: activeIndex === '/',
							})}
							onClick={() => handleLiClick('/')}
						>
							<Link href="/">
								<span
									className={classNames(styles.icon, {}, [])}
								>
									<AiOutlineHome />
								</span>
								<span
									className={classNames(styles.text, {}, [])}
								>
									Home
								</span>
								<span
									className={classNames(
										styles.circle,
										{},
										[]
									)}
								></span>
							</Link>
						</li>
						<li
							key={2}
							className={classNames('', {
								[styles.active]: activeIndex === '/profile',
							})}
							onClick={() => handleLiClick('/profile')}
						>
							<Link href="/profile">
								<span
									className={classNames(styles.icon, {}, [])}
								>
									<FiUser />
								</span>
								<span
									className={classNames(styles.text, {}, [])}
								>
									Profile
								</span>
								<span
									className={classNames(
										styles.circle,
										{},
										[]
									)}
								></span>
							</Link>
						</li>
						<li
							key={3}
							className={classNames('', {
								[styles.active]: activeIndex === '/about',
							})}
							onClick={() => handleLiClick('/about')}
						>
							<Link href="/about">
								<span
									className={classNames(styles.icon, {}, [])}
								>
									<BsInfoSquare />
								</span>
								<span
									className={classNames(styles.text, {}, [])}
								>
									About
								</span>
								<span
									className={classNames(
										styles.circle,
										{},
										[]
									)}
								></span>
							</Link>
						</li>
						<li
							key={4}
							className={classNames('', {
								[styles.active]: activeIndex === '/articles',
							})}
							onClick={() => handleLiClick('/articles')}
						>
							<Link href="/articles">
								<span
									className={classNames(styles.icon, {}, [])}
								>
									<RiFilePaper2Line />
								</span>
								<span
									className={classNames(styles.text, {}, [])}
								>
									Articles
								</span>
								<span
									className={classNames(
										styles.circle,
										{},
										[]
									)}
								></span>
							</Link>
						</li>
						<li key={5}>
							<Link href="">
								<button onClick={toggleTheme}>
									<span
										className={classNames(
											styles.icon,
											{},
											[]
										)}
									>
										{theme === 'dark' ? (
											<BsFillSunFill />
										) : (
											<BsFillMoonFill />
										)}
									</span>
								</button>
							</Link>
						</li>
						<div
							className={classNames(styles.indicator, {}, [])}
						></div>
					</ul>
				</div>
			</nav>
			<AppLink href="/" className="two" theme={AppLinkTheme.PRIMARY}>
				Home
			</AppLink>
			<AppLink
				href="/back"
				className="three"
				theme={AppLinkTheme.SECONDARY}
			>
				Back
			</AppLink>
			<main>{children}</main>
		</div>
	);
};

export default Navbar;
