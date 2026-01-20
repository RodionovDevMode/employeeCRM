import './app-filter.css'

interface AppFilterProps {
	onUpdateFilter: (filter: 'all' | 'rise' | 'increase') => void
	currentFilter: 'all' | 'rise' | 'increase'
}

const AppFilter = ({ onUpdateFilter, currentFilter }: AppFilterProps) => {
	const buttons = [
		{ name: 'Все сотрудники', value: 'all' },
		{ name: 'На повышение', value: 'rise' },
		{ name: 'З/П больше 1000$', value: 'increase' },
	]
	return (
		<div className='btn-group'>
			{buttons.map(btn => (
				<button
					key={btn.value}
					type='button'
					className={`btn ${
						currentFilter === btn.value ? 'btn-light' : 'btn-outline-light'
					}`}
					onClick={() =>
						onUpdateFilter(btn.value as 'all' | 'rise' | 'increase')
					}
				>
					{btn.name}
				</button>
			))}
		</div>
	)
}

export default AppFilter
