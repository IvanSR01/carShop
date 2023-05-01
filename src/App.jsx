import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/screens/Home/Home'
import Store from './components/screens/Store/Store'
import Basket from './components/screens/Basket/Basket'
import { createContext, useState } from 'react'
import Favorite from './components/screens/Favorite/Favorite'

export const SearchContext = createContext()

const App = () => {
	const [search, setSearch] = useState('')
	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			<div className='body'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
					<Route path='/basket' element={<Basket />} />
					<Route path='/favorite' element={<Favorite />} />
				</Routes>
			</div>
		</SearchContext.Provider>
	)
}

export default App
