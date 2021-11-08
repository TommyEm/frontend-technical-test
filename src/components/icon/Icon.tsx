import React, { FC } from 'react'

import styles from './Icon.module.css'


export interface IIconProps {
	type?: 'primary' | 'secondary'
}

export const Icon: FC<IIconProps> = ({
	type = 'primary',
}) => {
	const typeClass = type === 'primary' ? 'mod-primary' : 'mod-secondary'

	return (
		<svg
			className={`${styles.icon} ${styles[typeClass]}`}
			viewBox='0 0 512 512'
			xmlns='http://www.w3.org/2000/svg'
			data-testid='test-Icon'
		>
			<path d='M16,464,496,256,16,48V208l320,48L16,304Z' />
		</svg>
	)
}
