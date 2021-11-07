import axios from 'axios'
import {
	useMutation,
	useQuery,
	useQueryClient,
} from 'react-query'

import { IMessage } from '../types/message'
import { API_MESSAGES } from '../constants/api'
import dayjs from 'dayjs'


export const useMessages = (conversationId: number) => {
	return useQuery<IMessage[], Error>(
		['messages', conversationId],
		() => axios.get(`${API_MESSAGES}/${conversationId}`)
			.then(res => {
				console.log('GET MESSAGES', res.data);
				return res.data
			}),
	)
}


export const usePostMessage = (conversationId: number) => {
	const queryClient = useQueryClient()

	return useMutation<any, any, { authorId: number, message: string }, any>(
		(queryData) => {
			return axios.post(
				`${API_MESSAGES}/${conversationId}`,
				{
					authorId: queryData.authorId,
					body: queryData.message,
					conversationId: conversationId,
					timestamp: dayjs()
				}
			)
		},
		{
			onSuccess: (res) => {
				console.log(res);

				queryClient.invalidateQueries('messages')
			},
			// onError: err => {
			// 	console.log(err)
			// },
			// onSettled: () => {
			// }
		}
	)
}