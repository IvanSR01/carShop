import { FC } from 'react'
import Home from '../pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Store from '../pages/Store/Store'
import Basket from '../pages/Basket/Basket'
import Favorite from '../pages/Favorite/Favorite'
const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/store' element={<Store/>}/>
			<Route path='/basket' element={<Basket/>}/>
			<Route path='/favorite' element={<Favorite/>}/>
		</Routes>
	)
}

export default Router
