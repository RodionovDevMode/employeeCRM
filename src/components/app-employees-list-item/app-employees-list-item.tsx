import './app-employees-list-item.css'

export interface AppEmployeesListItemProps {
	id: number
	name: string
	salary: number
	increase: boolean
	rise: boolean
	onToggleIncrease: () => void
	onToggleRise: () => void
}

const AppEmployeesListItem = (props: AppEmployeesListItemProps) => {
	const { name, salary, increase, rise, onToggleIncrease, onToggleRise } = props

	const classNames = [
		'list-group-item',
		'd-flex',
		'justify-content-between',
		increase && 'increase',
		rise && 'rise',
	]
		.filter(Boolean)
		.join(' ')

	return (
		<li className={classNames}>
			<span className='list-group-item-label' onClick={onToggleRise}>
				{name}
			</span>
			<input
				type='text'
				className='list-group-item-input'
				defaultValue={salary + '$'}
			/>
			<div className='d-flex justify-content-center align-items-center'>
				<button
					type='button'
					className='btn-cookie btn-sm '
					onClick={onToggleIncrease}
				>
					<i className='fas fa-cookie'></i>
				</button>

				<button type='button' className='btn-trash btn-sm '>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}

export default AppEmployeesListItem
