import AppInfo from '../app-info/app-info'
import AppSearchPanel from '../app-search/app-search'
import AppFilter from '../app-filter/app-filter'
import './app.css'
import AppEmployeesList from '../app-employees-list/app-employees-list'
import AppEmployeesAddForm from '../app-employees-add-form/app-employees-add-form'

const App = () => {
	const data = [
		{
			name: 'John Small',
			salary: 800,
			increase: false,
		},
		{
			name: 'Big Ben',
			salary: 1200,
			increase: false,
		},
		{
			name: 'Clark Kent',
			salary: 2500,
			increase: true,
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
