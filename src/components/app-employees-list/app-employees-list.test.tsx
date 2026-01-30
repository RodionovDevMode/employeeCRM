import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppEmployeesList from './app-employees-list'
import type { Employee } from '../../types/employee'

interface MockListItemProps {
	name: string
	onToggleIncrease: () => void
	onToggleRise: () => void
	onDelete: () => void
}

vi.mock('../app-employees-list-item/app-employees-list-item.tsx', () => ({
	default: ({
		name,
		onToggleIncrease,
		onToggleRise,
		onDelete,
	}: MockListItemProps) => (
		<li>
			<span>{name}</span>
			<button onClick={onToggleIncrease}>increase</button>
			<button onClick={onToggleRise}>rise</button>
			<button onClick={onDelete}>delete</button>
		</li>
	),
}))

describe('AppEmployeesList behavior', () => {
	const employees: Employee[] = [
		{
			id: '1',
			name: 'Jack',
			salary: 4000,
			increase: true,
			rise: true,
		},
		{
			id: '2',
			name: 'Edward',
			salary: 5000,
			increase: false,
			rise: false,
		},
	]

	it('renders employees from data', () => {
		render(
			<AppEmployeesList
				data={employees}
				onToggleIncrease={vi.fn()}
				onToggleRise={vi.fn()}
				onDelete={vi.fn()}
			/>,
		)
		expect(screen.getByText('Jack')).toBeInTheDocument()
		expect(screen.getByText('Edward')).toBeInTheDocument()
	})

	it('calls onToggleIncrease with correct id', async () => {
		const onToggleIncrease = vi.fn()
		const user = userEvent.setup()

		render(
			<AppEmployeesList
				data={employees}
				onToggleIncrease={onToggleIncrease}
				onToggleRise={vi.fn()}
				onDelete={vi.fn()}
			/>,
		)

		await user.click(screen.getAllByText('increase')[0])

		expect(onToggleIncrease).toHaveBeenCalledTimes(1)
		expect(onToggleIncrease).toHaveBeenCalledWith('1')
	})

	it('calls onToggleRise with correct id', async () => {
		const onToggleRise = vi.fn()
		const user = userEvent.setup()

		render(
			<AppEmployeesList
				data={employees}
				onToggleIncrease={vi.fn()}
				onToggleRise={onToggleRise}
				onDelete={vi.fn()}
			/>,
		)
		await user.click(screen.getAllByText('rise')[1])

		expect(onToggleRise).toHaveBeenCalledTimes(1)
		expect(onToggleRise).toHaveBeenCalledWith('2')
	})

	it('calls onDelete with correct id', async () => {
		const onDelete = vi.fn()
		const user = userEvent.setup()

		render(
			<AppEmployeesList
				data={employees}
				onToggleIncrease={vi.fn()}
				onToggleRise={vi.fn()}
				onDelete={onDelete}
			/>,
		)
		await user.click(screen.getAllByText('delete')[0])

		expect(onDelete).toHaveBeenCalledTimes(1)
		expect(onDelete).toHaveBeenCalledWith('1')
	})
})
