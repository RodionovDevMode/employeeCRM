import AppInfo from '../app-info/app-info'
import AppSearchPanel from '../app-search/app-search'
import AppFilter from '../app-filter/app-filter'
import './app.css'
import AppEmployeesList from '../app-employees-list/app-employees-list'
import AppEmployeesAddForm from '../app-employees-add-form/app-employees-add-form'
import type { Employee } from '../../types/employee'

const App = () => {
	const data: Employee[] = [
		{
			name: 'John Small',
			salary: 800,
			increase: false,
			id: 1,
		},
		{
			name: 'Big Ben',
			salary: 1200,
			increase: false,
			id: 2,
		},
		{
			name: 'Clark Kent',
			salary: 2500,
			increase: true,
			id: 3,
		},
	]
	return (
		<div className='app'>
			<AppInfo nameCo='DevMode' employeesNum={3} employeesBonus={1} />
			<div className='app-search'>
				<AppSearchPanel />
				<AppFilter />
			</div>
			<AppEmployeesList data={data} />
			<AppEmployeesAddForm />
		</div>
	)
}

export default App
