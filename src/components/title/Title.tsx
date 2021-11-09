import { FC } from 'react'
import styles from './Title.module.css'


export interface ITitle {
	children: React.ReactNode
}

export const Title: FC<ITitle> = ({ children }) => {
	return (
		<h1
			className={styles.title}
			data-testid='test-Title'
		>
			{children}
		</h1>
	)
}