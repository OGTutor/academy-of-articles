'use client';

import Link from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.NotFound}>
			<div className={styles.NotFoundContent}>
				<h2>{t('Not found title')}</h2>
				<p>{t('Not found text')}</p>
				<Link href="/">{t('Back')}</Link>
			</div>
		</div>
	);
};

export default NotFound;
