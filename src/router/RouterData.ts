import Basket from '../pages/Basket/Basket'
import Favorite from '../pages/Favorite/Favorite'
import Home from '../pages/Home/Home'
import Store from '../pages/Store/Store'

export const data = [
	{
		path: '/',
		element: Home
	},
	{
		path: '/store',
		element: Store
	},
	{
		path: '/basket',
		element: Basket
	},
	{
		path: '/favorite',
		element: Favorite
	}
]
