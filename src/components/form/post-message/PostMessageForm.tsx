import {
	FC,
	useCallback,
	useContext,
	useState,
} from 'react'

import { Input } from '../input/Input'
import { IconButton } from '@/components/button/icon/IconButton'
import { usePostMessage } from '@/hooks/useMessages'
import { LoggedUserIdContext } from '@/store/context'
import styles from './PostMessageForm.module.css'


export interface IPostMessageFormProps {
	conversationId: number
}

export const PostMessageForm: FC<IPostMessageFormProps> = ({
	conversationId,
}) => {
	const loggedUserId = useContext(LoggedUserIdContext)
	const [newMessage, setNewMessage] = useState<string>('')
	const { mutate: postMessage } = usePostMessage(conversationId)

	const handleChangeNewMessage = useCallback((e) => {
		setNewMessage(e.currentTarget.value)
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault()

		if (newMessage !== '') {
			postMessage({
				authorId: loggedUserId,
				message: newMessage,
			})
			setNewMessage('')
		}
	}

	return (
		<form
			className={styles.container}
			onSubmit={handleSubmit}
		>
			<div className={styles.input}>
				<Input
					value={newMessage}
					onChange={handleChangeNewMessage}
				/>
			</div>
			<div className={styles.button}>
				<IconButton
					label='Send'
					onClick={handleSubmit}
				/>
			</div>
		</form>
	)
}
