import axios from 'axios'
import { useQuery } from 'react-query'

import { Message } from '../types/message'
import { API_MESSAGES } from '../constants/api'


export const useMessages = (conversationId: number) => {
	return useQuery<Message[], Error>(
		['messages', conversationId],
		() => axios.get(`${API_MESSAGES}${conversationId}`)
			.then(res => res.data)
	)
}
