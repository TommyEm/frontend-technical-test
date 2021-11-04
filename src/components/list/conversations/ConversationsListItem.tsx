import { FC } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Conversation } from '../../../types/conversation'
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
			<Link
				href={`/conversation/${conversationData.id}`}
				passHref
			>
				<a>
					<span className={styles.avatar}>
						<Avatar userName={userName} />
					</span>
					<span>
						<span>{userName}</span>
						<span>{lastMessageDate}</span>
					</span>
				</a>
			</Link>
		</li>
	)
}