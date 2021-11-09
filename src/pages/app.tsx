import { FC } from 'react'

import { Header } from '@/components/header/Header'
import { Title } from '@/components/title/Title'
import { ConversationsList } from '@/components/list/conversations/ConversationsList'

import styles from '@/styles/App.module.css'

const AppLayout: FC = () => {
	return (
		<div>
			<div className={styles.header}>
				<Header />
			</div>
			<main className={styles.main}>
				<Title>Conversations</Title>
				<ConversationsList />
			</main>
		</div>
	)

}

export default AppLayout


// export async function getServerSideProps() {
// 	const queryClient = new QueryClient()

// 	await queryClient.prefetchQuery<any, any, any, any>('conversations', () => getConversations(loggedUserId))

// 	return {
// 		props: {
// 		}
// 	}
// }
