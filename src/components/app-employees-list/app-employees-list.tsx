import type { Employee } from '../../types/employee'
import AppEmployeesListItem from '../app-employees-list-item/app-employees-list-item'
import './app-employees-list.css'

interface AppEmployeesListProps {
	data: Employee[]
	onToggleIncrease: (id: string) => void
	onToggleRise: (id: string) => void
	onDelete: (id: string) => void
}

const AppEmployeesList = ({
	data,
	onToggleIncrease,
	onToggleRise,
	onDelete,
}: AppEmployeesListProps) => {
	const elements = data.map(item => {
		const { id, ...rest } = item
		return (
			<AppEmployeesListItem
				id={id}
				key={id}
				{...rest}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
				onDelete={() => onDelete(id)}
			/>
		)
	})

	return <ul className='app-list list-group'>{elements}</ul>
}

export default AppEmployeesList
