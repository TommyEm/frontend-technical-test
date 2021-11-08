import React, { FC } from 'react'

import { Icon } from '@/components/icon/Icon'
import styles from './IconButton.module.css'


export interface IIconButtonProps {
	label: string
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const IconButton: FC<IIconButtonProps> = ({
	label,
	onClick,
}) => {
	return (
		<button
			className={styles.button}
			onClick={onClick}
		>
			<div className={styles.label}>
				{label}
			</div>
			<Icon />
		</button>
	)
}
