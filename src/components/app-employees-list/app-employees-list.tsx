import AppEmployeesListItem from '../app-employees-list-item/app-employees-list-item'
import './app-employees-list.css'

const AppEmployeesList = () => {
	return (
		<ul className='app-list list-group'>
			<AppEmployeesListItem />
			<AppEmployeesListItem />
			<AppEmployeesListItem />
		</ul>
	)
}

export default AppEmployeesList
