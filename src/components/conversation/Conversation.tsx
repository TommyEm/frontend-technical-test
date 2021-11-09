import { FC } from 'react'

import { loggedUserId } from '@/pages/_app'
import { useConversations } from '@/hooks/useConversations'
import { useMessages } from '@/hooks/useMessages'
import { useUsers } from '@/hooks/useUsers'
import { Title } from '../title/Title'
import { Message } from '@/components/message/Message'
import { PostMessageForm } from '../form/post-message/PostMessageForm'
import styles from './Conversation.module.css'


export interface IConversation {
	conversationId: number
}

export const Conversation: FC<IConversation> = ({
	conversationId,
}) => {

	const {
		data: users,
		error: usersError,
		isError: isUsersError,
		isLoading: isUsersLoading,
	} = useUsers()
	const {
		data: conversations,
		error: conversationsError,
		isError: isConversationsError,
		isLoading: isConversationsLoading,
	} = useConversations(loggedUserId)
	const {
		data: messages,
		error,
		isError,
		isLoading,
	} = useMessages(conversationId)

	if (isLoading || isConversationsLoading || isUsersLoading) {
		return <p>Loading...</p>
	}

	if (isError || isConversationsError || isUsersError) {
		return (
			<>
				<p>Something went wrong</p>
				<p>{error.message}</p>
			</>
		)
	}

	const conversation = conversations.filter(conv => conv.id == conversationId)[0]
	const interlocutor = conversation.recipientId !== loggedUserId ? conversation.recipientNickname : conversation.senderNickname

	return (
		<div className={styles.container}>
			<Title>{interlocutor}</Title>

			<ul className={styles.list}>
				{messages.map(message => {
					const author = users.filter(user => user.id === message.authorId)[0]

					return (
						<li
							key={message.id}
							className={styles.listItem}
						>
							<Message
								authorName={author.nickname}
								toUser={author.id === loggedUserId}
								message={message.body}
							/>
						</li>
					)
				})}
			</ul>

			<div className={styles.input}>
				<PostMessageForm
					conversationId={conversationId}
				/>
			</div>
		</div>
	)
}
