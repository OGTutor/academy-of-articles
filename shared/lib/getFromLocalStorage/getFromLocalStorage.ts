export const getFromLocalStorage = (key: string): string => {
	if (key === '' || typeof window === 'undefined') {
		return '';
	}
	return String(localStorage.getItem(key));
};
