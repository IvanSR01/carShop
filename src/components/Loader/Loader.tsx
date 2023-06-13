import { FC } from 'react'
import './style.css'
const Loader: FC = () => {
	return (
		<div className='loading'>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default Loader
