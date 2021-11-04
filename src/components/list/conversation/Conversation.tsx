import { FC } from 'react'
import { Message } from '../../../types/message'
import { User } from '../../../types/user'
import { Avatar } from '../../avatar/Avatar'
import styles from './Conversation.module.css'


export interface IConversation {
	messagesData: Message[]
	// currentUserId: number
}

export const Conversation: FC<IConversation> = ({
	messagesData,
}) => {
	return (
		<div>
			<ul>
				{messagesData.map(message => {
					return (
						<li key={message.id}>
							<div>
								<div>
									<Avatar userName={'Author'} />
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