import { FC } from 'react'
import Link from 'next/link'
import styles from '@/styles/App.module.css'
import { Header } from '@/components/header/Header'
import { Conversation } from '@/components/conversation/Conversation'
import { Icon } from '@/components/icon/Icon'


interface IConversationPageProps {
	id: number
}

const ConversationPage: FC<IConversationPageProps> = ({ id }) => {
	return (
		<div>
			<div className={styles.header}>
				<Header>
					<div className={styles.backLink}>
						<Link href='/app'>
							<a>
								<Icon
									icon='back'
									type='tertiary'
								/>
							</a>
						</Link>
					</div>
				</Header>
			</div>
			<main className={styles.main}>
				<Conversation
					conversationId={id}
				/>
			</main>
		</div>
	)
}

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			id: params.id,
		},
	}
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export default ConversationPage
