import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
type IButton = {
	children: ReactNode,
	onClick?: () => void
}

const Button: FC<IButton> = ({ children, onClick }) => {
	return <button onClick={onClick} className={styles.button}>{children}</button>
}

export default Button
