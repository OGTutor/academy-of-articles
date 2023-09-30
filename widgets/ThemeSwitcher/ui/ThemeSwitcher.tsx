import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import Image from 'next/image';
import { type FC } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	theme: string;
	mode: 'column' | 'row';
	className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
	mode = 'row',
	theme,
	className = '',
}) => {
	const { toggleTheme } = useTheme();

	return (
		<div
			className={classNames(
				'',
				{
					[styles.RowMode]: mode === 'row',
					[styles.ColumnMode]: mode === 'column',
				},
				[className]
			)}
		>
			<Image
				src="/icons/light_dark_icon.svg"
				alt="Icon"
				width={50}
				height={50}
			/>
			<span className={styles.icon}>
				{theme === Theme.DARK ? <BsFillSunFill /> : <BsFillMoonFill />}
			</span>
			<span className={styles.text}>
				{theme === Theme.DARK ? 'Light Mode' : 'Dark Mode'}
			</span>
			<Button
				theme={ThemeButton.CLEAR}
				className={classNames(
					styles.ToggleSwitch,
					{
						[styles.SwitchDark]: theme === Theme.DARK,
					},
					[]
				)}
				onClick={toggleTheme}
			>
				<span className={styles.switch}></span>
			</Button>
		</div>
	);
};

export default ThemeSwitcher;
