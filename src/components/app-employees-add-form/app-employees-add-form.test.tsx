import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppEmployeesAddForm from './app-employees-add-form'

describe('AppEmployeesAddForm', () => {
	it('renders the form inputs and button', () => {
		render(<AppEmployeesAddForm onAddEmployee={vi.fn()} />)

		expect(screen.getByPlaceholderText('Как его зовут?')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('З/П в $?')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Добавить' })).toBeDisabled()
	})
	it('enables submit button when valid input is provided', async () => {
		render(<AppEmployeesAddForm onAddEmployee={vi.fn()} />)
		const user = userEvent.setup()
		const nameInput = screen.getByPlaceholderText('Как его зовут?')
		const salaryInput = screen.getByPlaceholderText('З/П в $?')
		const button = screen.getByRole('button', { name: 'Добавить' })

		await user.type(nameInput, 'Андрей')
		await user.type(salaryInput, '5000')

		expect(button).not.toBeDisabled()
	})

	it('calls onAddEmployee with correct values on submit', async () => {
		const onAddEmployee = vi.fn()
		render(<AppEmployeesAddForm onAddEmployee={onAddEmployee} />)
		const user = userEvent.setup()
		const nameInput = screen.getByPlaceholderText('Как его зовут?')
		const salaryInput = screen.getByPlaceholderText('З/П в $?')
		const button = screen.getByRole('button', { name: 'Добавить' })

		await user.type(nameInput, 'Андрей')
		await user.type(salaryInput, '5000')
		await user.click(button)

		expect(onAddEmployee).toHaveBeenCalledWith('Андрей', 5000)
		expect(nameInput).toHaveValue('')
		expect(salaryInput).toHaveValue(null)
	})
})
