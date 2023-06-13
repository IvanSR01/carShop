import { FC } from 'react'
import './assets/global.scss'
import Header from './components/Header/Header'
import Router from './router/Router'
const App: FC = () => {
	return (
		<div className='body'>
			<Header/>
			<Router/>
		</div>
	)
}

export default App
