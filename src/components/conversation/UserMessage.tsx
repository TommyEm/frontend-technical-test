import { FC } from 'react'

import { Avatar } from '../avatar/Avatar'
import styles from './UserMessage.module.css'


export interface IUserMessage {
	authorName: string
	isFromUser?: boolean
	message: string
}

export const UserMessage: FC<IUserMessage> = ({
	authorName,
	isFromUser = false,
	message,
}) => {
	const containerClasses = isFromUser ? `${styles.container} ${styles.fromUser}` : styles.container

	return (
		<div className={containerClasses}>
			<div className={styles.avatar}>
				<Avatar userName={authorName} />
			</div>
			<div className={styles.message}>
				{message}
			</div>
		</div>
	)
}