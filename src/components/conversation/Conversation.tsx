import React, { FC, useCallback, useState } from 'react'

import { loggedUserId } from '@/pages/_app'
import { useMessages } from '@/hooks/useMessages'
import { useUsers } from '@/hooks/useUsers'
import { Message } from '@/components/message/Message'
import { Input } from '@/components/form/input/Input'
import styles from './Conversation.module.css'
import { usePostMessage } from '@/hooks/useMessages'


export interface IConversation {
	conversationId: number
}

export const Conversation: FC<IConversation> = ({
	conversationId,
}) => {

	const [newMessage, setNewMessage] = useState<string>('')
	const {
		data: users
	} = useUsers()
	const {
		data: messages,
		error,
		isError,
		isLoading,
	} = useMessages(conversationId)
	const { mutate: postMessage } = usePostMessage(conversationId)

	const handleChangeNewMessage = useCallback((e) => {
		setNewMessage(e.currentTarget.value)
	}, [])

	const handleSubmit = (event: any) => {
		event.preventDefault()

		if (newMessage !== '') {
			postMessage({
				authorId: loggedUserId,
				message: newMessage,
			})
			setNewMessage('')
		}
	}

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
				<form onSubmit={handleSubmit}>
					<Input
						value={newMessage}
						onChange={handleChangeNewMessage}
					/>
				</form>
			</div>
		</div>
	)
}
