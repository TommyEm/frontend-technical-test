import { FC } from 'react'
import { Conversation } from '../../../types/conversation'
import { loggedUserId } from '../../../pages/_app'
// import { User } from '../../../types/user'
import { ConversationsListItem } from './ConversationsListItem'
import styles from './ConversationsList.module.css'
import { useUsers } from '../../../hooks/useUsers'


export interface IConversationsList {
	conversationData: Conversation[]
}

export const ConversationsList: FC<IConversationsList> = ({
	conversationData,
}) => {
	const {
		data: users,
		error,
		isError,
		isLoading,
	} = useUsers()

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (isError) {
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
				{conversationData.map(conversation => {
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