'use client';

import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import LangSwitcher from '@/widgets/LangSwitcher/LangSwitcher';
import Sidebar from '@/widgets/Sidebar';
import ThemeSwitcher from '@/widgets/ThemeSwitcher/ui/ThemeSwitcher';
import React, { Suspense, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
	children: React.ReactNode;
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ children, className = '' }) => {
	const { theme } = useTheme();
	const { t } = useTranslation();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<nav className={classNames(styles.navbar, {}, [className])}>
					<div className={styles.links}>
						<AppLink
							href="/"
							className={styles.MainLink}
							theme={AppLinkTheme.PRIMARY}
						>
							{t('Home link')}
						</AppLink>
						<AppLink
							href="/back"
							className="three"
							theme={AppLinkTheme.SECONDARY}
						>
							{t('Back link')}
						</AppLink>
					</div>
					<ThemeSwitcher mode="row" theme={theme} />
					<LangSwitcher />
				</nav>
				<div className="content-page">
					<Sidebar />
					<div className="page-wrapper">{children}</div>
				</div>
			</Suspense>
		</div>
	);
};

export default Navbar;
