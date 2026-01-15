import type { Employee } from '../../types/employee'
import AppEmployeesListItem from '../app-employees-list-item/app-employees-list-item'
import './app-employees-list.css'

interface AppEmployeesListProps {
	data: Employee[]
}

const AppEmployeesList = ({ data }: AppEmployeesListProps) => {
	const elements = data.map(({ id, ...otherProps }) => {
		return <AppEmployeesListItem key={id} {...otherProps} />
	})
	return <ul className='app-list list-group'>{elements}</ul>
}

export default AppEmployeesList
