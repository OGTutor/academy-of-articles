import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

interface PageErrorProps {
	reset: () => void;
}

const PageError: FC<PageErrorProps> = ({ reset }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.PageError}>
			<h2>{t('Error page header')}</h2>
			<button
				onClick={() => {
					reset();
				}}
			>
				{t('Error page button')}
			</button>
		</div>
	);
};

export default PageError;
