import { FC } from 'react'

import styles from './Icon.module.css'
import * as svgIcons from './SvgIcons'


const icons = {
	back: svgIcons.BackIcon,
	send: svgIcons.SendIcon,
}

export interface IIconProps {
	icon: 'back' | 'send'
	type?: 'primary' | 'secondary' | 'tertiary'
}

export const Icon: FC<IIconProps> = ({
	icon,
	type = 'primary',
}) => {
	const typeClass = `mod-${type}`

	const svgIcon = icons[icon]

	return (
		<span
			className={`${styles.container} ${styles[typeClass]}`}
			data-testid='test-Icon'
		>
			{svgIcon()}
		</span>
	)
}
