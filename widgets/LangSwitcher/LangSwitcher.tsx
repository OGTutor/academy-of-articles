import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
	className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
	const { t, i18n } = useTranslation();

	const toggle = (): void => {
		i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{t('Language')}
		</Button>
	);
};

export default LangSwitcher;
