import AppEmployeesListItem, {
	type AppEmployeesListItemProps,
} from '../app-employees-list-item/app-employees-list-item'
import './app-employees-list.css'

interface AppEmployeesListProps {
	data: AppEmployeesListItemProps[]
}

const AppEmployeesList = ({ data }: AppEmployeesListProps) => {
	const elements = data.map(item => {
		return <AppEmployeesListItem {...item} />
	})
	return <ul className='app-list list-group'>{elements}</ul>
}

export default AppEmployeesList
