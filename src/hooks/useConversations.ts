import axios from 'axios'
import { useQuery } from 'react-query'

import { Conversation } from '../types/conversation'
import { API_CONVERSATIONS } from '../constants/api'


export const useConversations = (userId: number) => {
	return useQuery<Conversation[], Error>(
		['conversations', userId],
		() => axios.get(`${API_CONVERSATIONS}${userId}`)
			.then(res => res.data)
	)
}
