import { FC } from 'react'
import styles from './Input.module.css'


export interface IInputProps {
	value?: string
	placeholder?: string
	onChange: (e: any) => void
}

export const Input: FC<IInputProps> = ({
	value = '',
	placeholder = '',
	onChange,
}) => {
	return (
		<input
			className={styles.input}
			type='text'
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			data-testid='test-Input'
		/>
	)
}
