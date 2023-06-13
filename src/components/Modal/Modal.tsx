import { FC } from 'react'
import styles from './Modal.module.scss'
import Category from './Category'
import Sorted from '../Sorted/Sorted'
import { motion, AnimatePresence } from 'framer-motion'
interface IModal {
	dataSort: TypeDataSort[]
	isOpen: boolean
	setIsOpen: () => void
}
export type TypeDataSort = {
	name: string
	sorteding: string
}
const Modal: FC<IModal> = ({ dataSort, isOpen, setIsOpen }) => {
	const divVariants = {
		hidden: {
			y: '-500px',
			opacity: 0
		},
		visible: {
			y: '0px',
			opacity: 1
		}
	}
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0
					}}
					className={`${styles.wrapper}`}
				>
					<motion.div
						variants={divVariants}
						initial={'hidden'}
						animate={'visible'}
						exit={'hidden'}
						transition={{
							duration: 1
						}}
						className={styles.content}
					>
						<div className={styles.header}>
							<p>Фильтрация</p>
							<img
								onClick={() => setIsOpen()}
								src='public/servicesImg/img_229857.png'
								alt=''
							/>
						</div>
						<div className={styles.main}>
							<Category />
							<div className={styles.sorted}>
								<Sorted data={dataSort} />
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
