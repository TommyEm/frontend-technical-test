import { FC } from 'react'
import { useMessages } from '../../hooks/useMessages'
import { useUsers } from '../../hooks/useUsers'
import { Avatar } from '../avatar/Avatar'
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
		<div>
			<ul>
				{messages.map(message => {
					const author = users.filter(user => user.id === message.authorId)[0]

					return (
						<li key={message.id}>
							<div>
								<div>
									<Avatar userName={author.nickname} />
								</div>
								<div>
									{message.body}
								</div>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}