import { FC } from 'react'
import Image from 'next/image'
import Logo from '../../assets/lbc-logo.webp'
import styles from './Header.module.css'


export interface IHeader {
	children?: React.ReactNode;
}

export const Header: FC<IHeader> = ({ children }) => {
	return (
		<header className={styles.container}>
			<div className='Header-logo'>
				<Image src={Logo} alt="Leboncoin's logo" width={150} height={47} />
			</div>
			{children}
		</header>
	)
}