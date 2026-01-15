import './app-info.css'

interface AppInfoProps {
	nameCo: string
	employeesNum: number
	employeesBonus: number
}

const AppInfo = (props: AppInfoProps) => {
	const { nameCo, employeesNum, employeesBonus } = props
	return (
		<div className='app-info'>
			<h1>Учёт сотрудников в компании {nameCo}</h1>
			<h2>Общее число сотрудников: {employeesNum}</h2>
			<h2>Премию получат: {employeesBonus}</h2>
		</div>
	)
}
export default AppInfo
