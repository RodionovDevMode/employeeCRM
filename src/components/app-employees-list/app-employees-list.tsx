import AppEmployeesListItem from '../app-employees-list-item/app-employees-list-item'
import './app-employees-list.css'

interface AppEmployeesListProps {
	data: {
		id: number
		name: string
		salary: number
		increase: boolean
		rise: boolean
	}[]
	onToggleIncrease: (id: number) => void
	onToggleRise: (id: number) => void
}

const AppEmployeesList = ({
	data,
	onToggleIncrease,
	onToggleRise,
}: AppEmployeesListProps) => {
	const elements = data.map(item => {
		return (
			<AppEmployeesListItem
				key={item.id}
				{...item}
				onToggleIncrease={() => onToggleIncrease(item.id)}
				onToggleRise={() => onToggleRise(item.id)}
			/>
		)
	})
	return <ul className='app-list list-group'>{elements}</ul>
}

export default AppEmployeesList
