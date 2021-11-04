import { FC } from 'react'

import { loggedUserId } from './_app'
import { Header } from '../components/header/Header'
import { Title } from '../components/title/Title'
import { ConversationsList } from '../components/list/conversations/ConversationsList'
import { useConversations } from '../hooks/useConversations'

import styles from '../styles/App.module.css'


const AppLayout: FC = () => {
	const {
		data: conversations,
		error,
		isError,
		isLoading,
	} = useConversations(loggedUserId)

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
		<div>
			<div className={styles.header}>
				<Header />
			</div>
			<main className={styles.main}>
				<Title>Conversations</Title>
				<ConversationsList
					conversationData={conversations}
				/>
			</main>
		</div>
	)

}

export default AppLayout
