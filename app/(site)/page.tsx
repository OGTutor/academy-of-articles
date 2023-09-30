'use client';

import { useTranslation } from 'react-i18next';

export default function Home(): React.ReactNode {
	const { t } = useTranslation('home');

	return <div>{t('Home page')}</div>;
}
