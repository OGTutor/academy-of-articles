'use client';

import { useMemo, useState, type FC } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
	const defaultTheme = (storedTheme as Theme) ?? Theme.LIGHT;

	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
