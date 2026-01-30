import { describe, it, vi, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppFilter from './app-filter'

describe('AppFilter', () => {
	const setup = (currentFilter: 'all' | 'rise' | 'increase' = 'all') => {
		const onUpdateFilter = vi.fn()
		render(
			<AppFilter
				onUpdateFilter={onUpdateFilter}
				currentFilter={currentFilter}
			/>,
		)
		return { onUpdateFilter }
	}
	it('renders all filter buttons', () => {
		setup()
		expect(screen.getByText('Все сотрудники')).toBeInTheDocument()
		expect(screen.getByText('На повышение')).toBeInTheDocument()
		expect(screen.getByText('З/П больше 1000$')).toBeInTheDocument()
	})
	it('applies correct class based on currentFilter', () => {
		const { rerender } = render(
			<AppFilter onUpdateFilter={vi.fn()} currentFilter='all' />,
		)
		expect(screen.getByText('Все сотрудники')).toHaveClass('btn-light')
		expect(screen.getByText('На повышение')).toHaveClass('btn-outline-light')
		expect(screen.getByText('З/П больше 1000$')).toHaveClass(
			'btn-outline-light',
		)
		rerender(<AppFilter onUpdateFilter={vi.fn()} currentFilter='rise' />)
		expect(screen.getByText('На повышение')).toHaveClass('btn-light')
		expect(screen.getByText('Все сотрудники')).toHaveClass('btn-outline-light')
	})

	it('calls onUpdateFilter with correct value when button is clicked', async () => {
		const user = userEvent.setup()
		const { onUpdateFilter } = setup()

		await user.click(screen.getByText('На повышение'))
		expect(onUpdateFilter).toHaveBeenCalledTimes(1)
		expect(onUpdateFilter).toHaveBeenCalledWith('rise')

		await user.click(screen.getByText('З/П больше 1000$'))
		expect(onUpdateFilter).toHaveBeenCalledTimes(2)
		expect(onUpdateFilter).toHaveBeenCalledWith('increase')
	})
})
