import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppEmployeesListItem from './app-employees-list-item'

describe('AppEmployeesListItem', () => {
	const setup = (
		overrideProps: Partial<
			React.ComponentProps<typeof AppEmployeesListItem>
		> = {},
	) => {
		const props = {
			id: 1,
			name: 'Jack',
			salary: 4000,
			increase: false,
			rise: false,
			onToggleIncrease: vi.fn(),
			onToggleRise: vi.fn(),
			onDelete: vi.fn(),
			...overrideProps,
		}
		render(<AppEmployeesListItem {...props} />)
		return props
	}

	it('renders name and salary', () => {
		setup()
		expect(screen.getByText('Jack')).toBeInTheDocument()
		expect(screen.getByDisplayValue('4000$')).toBeInTheDocument()
	})

	it('calls onToggleRise when name is clicked', async () => {
		const user = userEvent.setup()
		const props = setup()

		await user.click(screen.getByText('Jack'))
		expect(props.onToggleRise).toHaveBeenCalledTimes(1)
	})

	it('calls onDelete when trash button is clicked', async () => {
		const user = userEvent.setup()
		const props = setup()

		const buttons = screen.getAllByRole('button')
		await user.click(buttons[1])

		expect(props.onDelete).toHaveBeenCalledTimes(1)
	})
	it('adds "increase" class when increase is true', () => {
		const { container } = render(
			<AppEmployeesListItem
				id={1}
				name='Jack'
				salary={4000}
				increase={true}
				rise={false}
				onToggleIncrease={vi.fn()}
				onToggleRise={vi.fn()}
				onDelete={vi.fn()}
			/>,
		)
		expect(container.firstChild).toHaveClass('increase')
	})

	it('adds "rise" class when rise is true', () => {
		const { container } = render(
			<AppEmployeesListItem
				id={1}
				name='Jack'
				salary={4000}
				increase={false}
				rise={true}
				onToggleIncrease={vi.fn()}
				onToggleRise={vi.fn()}
				onDelete={vi.fn()}
			/>,
		)
		expect(container.firstChild).toHaveClass('rise')
	})
})
