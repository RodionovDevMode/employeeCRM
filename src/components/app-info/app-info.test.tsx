import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AppInfo from './app-info'

describe('AppInfo', () => {
	it('renders company name and employee stats', () => {
		render(<AppInfo nameCo='DevMode' employeesNum={10} employeesBonus={3} />)

		expect(screen.getByText('Учёт сотрудников в компании DevMode')).toBeTruthy()
		expect(screen.getByText('Общее число сотрудников: 10')).toBeTruthy()
		expect(screen.getByText('Премию получат: 3')).toBeTruthy()
	})
})
