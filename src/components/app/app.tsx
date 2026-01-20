import { useEffect, useState } from 'react'
import type { Employee } from '../../types/employee'

import AppInfo from '../app-info/app-info'

import AppFilter from '../app-filter/app-filter'
import AppEmployeesList from '../app-employees-list/app-employees-list'
import AppEmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
import './app.css'
import AppSearchPanel from '../app-search-panel/app-search-panel'

const App = () => {
	const [data, setData] = useState<Employee[]>(() => {
		const saved = localStorage.getItem('employees')
		return saved
			? JSON.parse(saved)
			: [
					{
						id: 1,
						name: 'John Small',
						salary: 800,
						increase: false,
						rise: false,
					},
					{
						id: 2,
						name: 'Big Ben',
						salary: 1200,
						increase: false,
						rise: false,
					},
					{
						id: 3,
						name: 'Clark Kent',
						salary: 2500,
						increase: true,
						rise: false,
					},
			  ]
	})
	const [searchTerm, setSearchTerm] = useState('')
	const [filter, setFilter] = useState<'all' | 'rise' | 'increase'>('all')

	useEffect(() => {
		localStorage.setItem('employees', JSON.stringify(data))
	}, [data])

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

	const onDelete = (id: number) => {
		setData(prev => prev.filter(item => item.id !== id))
	}

	const onUpdateSearch = (term: string) => {
		setSearchTerm(term)
	}

	const onUpdateFilter = (filter: 'all' | 'rise' | 'increase') => {
		setFilter(filter)
	}

	const searchEmployees = (items: Employee[], term: string) => {
		if (!term) return items
		return items.filter(item =>
			item.name.toLowerCase().includes(term.toLowerCase())
		)
	}

	const filterEmployees = (items: Employee[], filter: string) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'increase':
				return items.filter(item => item.increase)
			default:
				return items
		}
	}

	const visibleData = filterEmployees(searchEmployees(data, searchTerm), filter)

	return (
		<div className='app'>
			<AppInfo
				nameCo='DevMode'
				employeesNum={data.length}
				employeesBonus={data.filter(e => e.increase).length}
			/>
			<div className='app-search'>
				<AppSearchPanel onUpdateSearch={onUpdateSearch} />

				<AppFilter onUpdateFilter={onUpdateFilter} currentFilter={filter} />
			</div>
			<AppEmployeesList
				data={visibleData}
				onToggleIncrease={onToggleIncrease}
				onToggleRise={onToggleRise}
				onDelete={onDelete}
			/>
			<AppEmployeesAddForm onAddEmployee={onAddEmployee} />
		</div>
	)
}

export default App
