import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './app'

describe('App container', () => {
	it('renders child components with correct props', () => {
		render(<App />)

		expect(screen.getByText(/Общее число сотрудников:/i)).toBeInTheDocument()
		expect(screen.getByText(/Премию получат:/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Найти сотрудника')).toBeInTheDocument()
		expect(screen.getByText('Все сотрудники')).toBeInTheDocument()
	})

	it('adds a new employee', async () => {
		const user = userEvent.setup()
		render(<App />)

		const inputName = screen.getByPlaceholderText('Как его зовут?')
		const inputSalary = screen.getByPlaceholderText('З/П в $?')
		const addButton = screen.getByText('Добавить')

		await user.type(inputName, 'Test Employee')
		await user.type(inputSalary, '1000')
		await user.click(addButton)

		expect(screen.getByText('Test Employee')).toBeInTheDocument()
	})

	it('filters employees by search term', async () => {
		const user = userEvent.setup()
		render(<App />)

		const searchInput = screen.getByPlaceholderText('Найти сотрудника')
		await user.type(searchInput, 'Clark')

		expect(screen.getByText('Clark Kent')).toBeInTheDocument()
		expect(screen.queryByText('John Small')).not.toBeInTheDocument()
	})
})
