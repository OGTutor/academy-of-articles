'use client';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
	const { t } = useTranslation('about');

	return <div>{t('About page')}</div>;
};

export default About;
