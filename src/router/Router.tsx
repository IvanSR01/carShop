import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
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
