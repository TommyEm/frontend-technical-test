import { FC } from 'react'
import Image from 'next/image'

import styles from './Avatar.module.css'


export interface IAvatar {
	userName: string
}

export const Avatar: FC<IAvatar> = ({ userName }) => {
	return (
		<div className={styles.container}>
			<Image
				className={styles.image}
				src={`https://eu.ui-avatars.com/api/?name=${userName}`}
				width={48}
				height={48}
				alt={userName}
			/>
		</div>
	)
}