import { FC } from 'react'

import { loggedUserId } from '@/pages/_app'
import { useMessages } from '@/hooks/useMessages'
import { useUsers } from '@/hooks/useUsers'
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
		data: users
	} = useUsers()
	const {
		data: messages,
		error,
		isError,
		isLoading,
	} = useMessages(conversationId)

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (isError) {
		return (
			<>
				<p>Something went wrong</p>
				<p>{error.message}</p>
			</>
		)
	}

	return (
		<div className={styles.container}>
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
