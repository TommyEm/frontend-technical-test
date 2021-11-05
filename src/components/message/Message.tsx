import { FC } from 'react'

import styles from './Message.module.css'


export interface IMessageProps {
	authorName: string
	toUser?: boolean
	message: string
}

export const Message: FC<IMessageProps> = ({
	authorName,
	toUser = false,
	message,
}) => {
	const containerClasses = toUser ? styles.container : `${styles.container} ${styles.fromOther}`

	return (
		<div className={containerClasses}>
			{!toUser ? (
				<div className={styles.author}>
					{authorName}
				</div>
			) : null}

			<div className={styles.message}>
				{message}
			</div>
		</div>
	)
}