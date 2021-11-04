import { FC } from 'react'
import Image from 'next/image'


export interface IAvatar {
	userName: string
}

export const Avatar: FC<IAvatar> = ({ userName }) => {
	return (
		<Image
			src={`https://eu.ui-avatars.com/api/?name=${userName}`}
			width={48}
			height={48}
			alt={userName}
		/>
	)
}