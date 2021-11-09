import styles from './Icon.module.css'


export const BackIcon = () => {
	return (
		<svg
			className={styles.icon}
			xmlns='http://www.w3.org/2000/svg'
			viewBox="0 0 42 42"
		>
			<polygon fillRule="evenodd" points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "/>
		</svg>
	)
}

export const SendIcon = () => {
	return (
		<svg
			className={styles.icon}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
		>
			<path d='M16,464,496,256,16,48V208l320,48L16,304Z' />
		</svg>
	)
}
