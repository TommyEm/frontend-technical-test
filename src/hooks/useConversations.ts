import axios from 'axios'
import { useQuery } from 'react-query'

import { IConversation } from '@/types/conversation'
import { API_CONVERSATIONS } from '@/constants/api'


export const useConversations = (userId: number) => {
	return useQuery<IConversation[], Error>(
		'conversations',
		() => axios.get(`${API_CONVERSATIONS}/${userId}`)
			.then(res => res.data),
	)
}
