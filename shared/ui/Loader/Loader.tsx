import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

const Loader: FC<LoaderProps> = ({ className = '' }) => {
	return <span className={classNames(styles.loader, {}, [className])}></span>;
};

export default Loader;
