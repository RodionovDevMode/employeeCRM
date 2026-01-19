import { useState } from 'react'
import AppInfo from '../app-info/app-info'
import AppSearchPanel from '../app-search/app-search'
import AppFilter from '../app-filter/app-filter'
import './app.css'
import AppEmployeesList from '../app-employees-list/app-employees-list'
import AppEmployeesAddForm from '../app-employees-add-form/app-employees-add-form'

const App = () => {
	const [data, setData] = useState([
		{ id: 1, name: 'John Small', salary: 800, increase: false, rise: false },
		{ id: 2, name: 'Big Ben', salary: 1200, increase: false, rise: false },
		{ id: 3, name: 'Clark Kent', salary: 2500, increase: true, rise: false },
	])

	const onAddEmployee = (name: string, salary: number) => {
		const newEmployee = {
			id: Date.now(),
			name,
			salary,
			increase: false,
			rise: false,
		}
		setData(prev => [...prev, newEmployee])
	}

	const onToggleIncrease = (id: number) => {
		setData(prev =>
			prev.map(item =>
				item.id === id ? { ...item, increase: !item.increase } : item
			)
		)
	}

	const onToggleRise = (id: number) => {
		setData(prev =>
			prev.map(item => (item.id === id ? { ...item, rise: !item.rise } : item))
		)
	}

	return (
		<div className='app'>
			<AppInfo
				nameCo='DevMode'
				employeesNum={data.length}
				employeesBonus={data.filter(e => e.increase).length}
			/>
			<div className='app-search'>
				<AppSearchPanel />
				<AppFilter />
			</div>
			<AppEmployeesList
				data={data}
				onToggleIncrease={onToggleIncrease}
				onToggleRise={onToggleRise}
			/>
			<AppEmployeesAddForm onAddEmployee={onAddEmployee} />
		</div>
	)
}

export default App
