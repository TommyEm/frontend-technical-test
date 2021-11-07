import { FC } from 'react'

import { IConversation } from '@/types/conversation'
import { loggedUserId } from '@/pages/_app'
import { ConversationsListItem } from './ConversationsListItem'
import styles from './ConversationsList.module.css'
import { useUsers } from '@/hooks/useUsers'
import { useConversations } from '@/hooks/useConversations'


export interface IConversationsListProps {
}

export const ConversationsList: FC<IConversationsListProps> = ({
}) => {
	const {
		data: users,
		error,
		isError,
		isLoading,
	} = useUsers()
	const {
		data: conversations,
		error: conversationsError,
		isError: isConversationsError,
		isLoading: isConversationsLoading,
	} = useConversations(loggedUserId)

	if (isLoading || isConversationsLoading) {
		return <p>Loading...</p>
	}

	if (isError || isConversationsError) {
		return (
			<>
				<p>Something went wrong.</p>
				<p>{error.message}</p>
			</>
		)
	}

	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{conversations.map(conversation => {
					const userId = conversation.recipientId !== loggedUserId ? conversation.recipientId : conversation.senderId;

					const user = users.filter(user => {
						return user.id == userId
					})[0]

					return (
						<ConversationsListItem
							key={conversation.id}
							userName={user.nickname}
							conversationData={conversation}
						/>
					)
				})}
			</ul>
		</div>
	)
}