import { FC } from 'react'
import dayjs from 'dayjs'
import { Conversation } from '../../../types/conversation'
import { User } from '../../../types/user'
import { Avatar } from '../../avatar/Avatar'
import styles from './ConversationsList.module.css'


export interface IConversationsListItem {
	conversationData: Conversation
	userName: string
}

export const ConversationsListItem: FC<IConversationsListItem> = ({
	conversationData,
	userName,
}) => {
	const lastMessageDate = dayjs(conversationData.lastMessageTimestamp).format('DD MMMMM YYYY hh:mm')

	return (
		<li className={styles.listItem}>
			<div className={styles.avatar}>
				<Avatar userName={userName} />
			</div>
			<div>
				<div>{userName}</div>
				<div>{lastMessageDate}</div>
			</div>
		</li>
	)
}