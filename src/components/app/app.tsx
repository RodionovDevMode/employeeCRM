import { useEffect, useState } from 'react'

import type { Employee } from '../../types/employee'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import AppEmployeesList from '../app-employees-list/app-employees-list'
import AppEmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
import AppSearchPanel from '../app-search-panel/app-search-panel'
import './app.css'

const App = () => {
	const [data, setData] = useState<Employee[]>([])
	const [searchTerm, setSearchTerm] = useState('')
	const [filter, setFilter] = useState<'all' | 'rise' | 'increase'>('all')

	useEffect(() => {
		fetch('http://localhost:3000/employees')
			.then(res => {
				if (!res.ok) {
					throw new Error('Failed to fetch 	employees')
				}
				return res.json()
			})
			.then((employees: Employee[]) => {
				setData(employees)
			})
			.catch(err => {
				console.error(err)
			})
	}, [])

	const onAddEmployee = async (name: string, salary: number) => {
		if (!name.trim() || salary <= 0) return
		const res = await fetch('http://localhost:3000/employees', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				salary,
				increase: false,
				rise: false,
			}),
		})
		const createdEmployee = await res.json()
		setData(prev => [...prev, createdEmployee])
	}

	const onToggleIncrease = (id: string) => {
		setData(prev =>
			prev.map(item =>
				item.id === id ? { ...item, increase: !item.increase } : item,
			),
		)
	}

	const onToggleRise = (id: string) => {
		setData(prev =>
			prev.map(item => (item.id === id ? { ...item, rise: !item.rise } : item)),
		)
	}

	const onDelete = (id: string) => {
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
			item.name.toLowerCase().includes(term.toLowerCase()),
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
	const employeesCount = data.length
	const employeesBonus = data.filter(e => e.increase).length
	return (
		<div className='app'>
			<AppInfo
				nameCo='DevMode'
				employeesNum={employeesCount}
				employeesBonus={employeesBonus}
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
