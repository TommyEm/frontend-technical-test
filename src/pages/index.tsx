import { FC } from 'react'

import { Header } from '@/components/header/Header'
import { Title } from '@/components/title/Title'
import { ConversationsList } from '@/components/list/conversations/ConversationsList'

import styles from '@/styles/Home.module.css'

const Home: FC = () => {
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

export default Home