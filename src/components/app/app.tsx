import AppInfo from '../app-info/app-info'
import AppSearchPanel from '../app-search/app-search'
import AppFilter from '../app-filter/app-filter'
import './app.css'
import AppEmployeesList from '../app-employees-list/app-employees-list'
import AppEmployeesAddForm from '../app-employees-add-form/app-employees-add-form'

const App = () => {
	return (
		<div className='app'>
			<AppInfo />
			<div className='app-search'>
				<AppSearchPanel />
				<AppFilter />
			</div>
			<AppEmployeesList />
			<AppEmployeesAddForm />
		</div>
	)
}

export default App
