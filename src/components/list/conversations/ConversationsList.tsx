import { FC } from 'react'
import { Conversation } from '../../../types/conversation'
import { User } from '../../../types/user'
import { ConversationsListItem } from './ConversationsListItem'
import styles from './ConversationsList.module.css'


export interface IConversationsList {
	conversationData: Conversation[]
}

export const ConversationsList: FC<IConversationsList> = ({
	conversationData,
}) => {
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{conversationData.map(conversation => {
					return (
						<ConversationsListItem
							key={conversation.id}
							userName={'conversation.senderId'}
							conversationData={conversation}
						/>
					)
				})}
			</ul>
		</div>
	)
}