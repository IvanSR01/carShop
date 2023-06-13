import { FC } from 'react'
import Home from '../pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Store from '../pages/Store/Store'
import Basket from '../pages/Basket/Basket'
import Favorite from '../pages/Favorite/Favorite'
import { data } from './RouterData'
const Router: FC = () => {
	return (
		<Routes>
			{data.map(item => (
				<Route path={item.path} element={<item.element/>}/>
			))}
		</Routes>
	)
}

export default Router
