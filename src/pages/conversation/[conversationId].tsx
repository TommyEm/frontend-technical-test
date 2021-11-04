import { FC } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/App.module.css'
import { Header } from '../../components/header/Header'
import { Conversation } from '../../components/list/conversation/Conversation'


const ConversationPage: FC = () => {
	const { query } = useRouter()
	console.log(query);

	return (
		<div>
			<div className={styles.header}>
				<Header />
			</div>
			<main className={styles.main}>
				<Conversation
					messagesData={[]}
				/>
			</main>
		</div>
	)
}

export default ConversationPage
