import { FC, useEffect, useState } from 'react'
// import { User } from '../types/user'
import { Conversation } from '../types/conversation'
import styles from '../styles/App.module.css'
import { Header } from '../components/header/Header'
import { ConversationsList } from '../components/list/conversations/ConversationsList'


const AppLayout: FC = () => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	// const [users, setUsers] = useState<User[]>([])
	const [conversations, setConversations] = useState<Conversation[] | null>(null)

	// TODO: get user from global state
	const userId = 1

	// useEffect(() => {
	// 	fetch('http://localhost:3005/users')
	// 	.then(res => res.json())
	// 	.then(usersData => {
	// 		setUsers(usersData)
	// 	})
	// 	.catch(err => console.log(err))
	// }, [])

	useEffect(() => {
		const convs = fetch(`http://localhost:3005/conversations/${userId}`)
			.then(res => res.json())
			.then(data => {
				console.log('convs', data);

				setConversations(data)
				setIsLoaded(true)
			}).catch(err => console.log(err))
	}, [])

	if (!conversations) {
		return <p>Loading...</p>

	} else {
		return (
			<div>
				<div className={styles.header}>
					<Header />
				</div>
				<main className={styles.main}>
					<ConversationsList
						conversationData={conversations}
					/>
				</main>
			</div>
		)
	}
}

export default AppLayout
