export interface ICatalog {
	title: string
	imgUrl: string
	onClick?: () => void
}
export interface ICarItem {
	id: string
	title: string
	imgUrl: string
	price: string
	desc: IDescription,
	type: string
}
interface IDescription {
	motor: string
	power: string
	toplivo: string
}