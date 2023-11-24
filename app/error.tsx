'use client';

import PageError from '@/widgets/PageError/PageError';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}): React.ReactNode {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return <PageError reset={reset} />;
}
