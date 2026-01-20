import './app-search-panel.css'

interface AppSearchPanelProps {
	onUpdateSearch: (term: string) => void
}

const AppSearchPanel = ({ onUpdateSearch }: AppSearchPanelProps) => {
	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Найти сотрудника'
			onChange={e => onUpdateSearch(e.target.value)}
		/>
	)
}

export default AppSearchPanel
