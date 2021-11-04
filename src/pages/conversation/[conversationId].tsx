import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/App.module.css'
import { Header } from '../../components/header/Header'
import { Conversation } from '../../components/conversation/Conversation'


const ConversationPage: FC = () => {
	const { query } = useRouter()

	return (
		<div>
			<div className={styles.header}>
				<Header />
				<Link href='/app'>
					<a>Back</a>
				</Link>
			</div>
			<main className={styles.main}>
				<Conversation
					conversationId={Number(query.conversationId)}
				/>
			</main>
		</div>
	)
}

export default ConversationPage
