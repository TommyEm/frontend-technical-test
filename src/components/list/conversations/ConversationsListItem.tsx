import { FC } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

import { IConversation } from '@/types/conversation'
import { Avatar } from '@/components/avatar/Avatar'
import styles from './ConversationsListItem.module.css'


export interface IConversationsListItemProps {
	conversationData: IConversation
	userName: string
}

export const ConversationsListItem: FC<IConversationsListItemProps> = ({
	conversationData,
	userName,
}) => {
	const lastMessageDate = dayjs(conversationData.lastMessageTimestamp).format('DD MMMMM YYYY hh:mm')

	return (
		<li className={styles.container}>
			<Link
				href={`/conversations/${conversationData.id}`}
				passHref
			>
				<a className={styles.link}>
					<span className={styles.avatar}>
						<Avatar userName={userName} />
					</span>
					<span className={styles.infos}>
						<span className={styles.username}>
							{userName}
						</span>
						<span className={styles.date}>
							{lastMessageDate}
						</span>
					</span>
				</a>
			</Link>
		</li>
	)
}