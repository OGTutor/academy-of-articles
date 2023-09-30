'use client';

import { classNames } from '@/shared/lib/classNames/classNames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoSquare } from 'react-icons/bs';
import { FiSettings, FiUser } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFilePaper2Line } from 'react-icons/ri';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
	const pathname = usePathname();
	const { t } = useTranslation();

	const [activeIndex, setActiveIndex] = useState(pathname);

	const handleLiClick = (pathname: string): void => {
		setActiveIndex(pathname);
	};
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = (): void => {
		setCollapsed((prevState) => !prevState);
	};

	return (
		<>
			<div
				className={classNames(
					styles.sidebar,
					{ [styles.collapsed]: collapsed },
					[className]
				)}
			>
				<div className={classNames(styles.navigation, {}, [])}>
					<ul>
						<li
							key={1}
							className={classNames('', {
								[styles.active]: activeIndex === '/',
							})}
							onClick={() => {
								handleLiClick('/');
							}}
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
									{t('Home link')}
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
							onClick={() => {
								handleLiClick('/profile');
							}}
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
									{t('Profile link')}
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
							onClick={() => {
								handleLiClick('/about');
							}}
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
									{t('About link')}
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
							onClick={() => {
								handleLiClick('/articles');
							}}
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
									{t('Articles link')}
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
								[styles.active]: activeIndex === '/settings',
							})}
							onClick={() => {
								handleLiClick('/settings');
							}}
						>
							<Link href="/settings">
								<span
									className={classNames(styles.icon, {}, [])}
								>
									<FiSettings />
								</span>
								<span
									className={classNames(styles.text, {}, [])}
								>
									{t('Settings link')}
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
						<div
							className={classNames(styles.indicator, {}, [])}
						></div>
					</ul>
				</div>
			</div>
			<button onClick={onToggle}>
				<IoIosArrowBack />
			</button>
		</>
	);
};

export default Sidebar;
