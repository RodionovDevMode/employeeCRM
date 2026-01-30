import { render, screen } from '@testing-library/react'
import { describe, vi, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import AppSearchPanel from './app-search-panel'

describe('AppSearchPanel behavior', () => {
	it('calls onUpdateSearch with typed value', async () => {
		const onUpdateSearch = vi.fn()
		const user = userEvent.setup()

		render(<AppSearchPanel onUpdateSearch={onUpdateSearch} />)
		const input = screen.getByPlaceholderText('Найти сотрудника')

		await user.type(input, 'Jack')

		expect(onUpdateSearch).toHaveBeenCalledTimes(4)
		expect(onUpdateSearch).toHaveBeenCalledWith('Jack')
	})
})
