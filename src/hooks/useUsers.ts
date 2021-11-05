import axios from 'axios'
import { useQuery } from 'react-query'

import { IUser } from '../types/user'
import { API_USERS } from '../constants/api'

export const useUsers = () => {
	return useQuery<IUser[], Error>(
		'users',
		() => axios.get(API_USERS)
			.then(res => res.data)
	)
}