import { useState } from 'react'
import './app-employees-add-form.css'

interface AppEmployeesAddFormProps {
	onAddEmployee: (name: string, salary: number) => void
}

const AppEmployeesAddForm = ({ onAddEmployee }: AppEmployeesAddFormProps) => {
	const [formData, setFormData] = useState({ name: '', salary: '' })

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		console.log(name, value)
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!formData.name || !formData.salary) return
		const salaryNumber = Number(formData.salary)
		onAddEmployee(formData.name, salaryNumber)
		setFormData({ name: '', salary: '' })
		console.log(formData)
	}

	return (
		<div className='app-add-form'>
			<h3>Добавьте нового сотрудника</h3>
			<form className='add-form d-flex' onSubmit={onSubmit}>
				<input
					type='text'
					className='form-control new-post-label'
					name='name'
					placeholder='Как его зовут?'
					value={formData.name}
					onChange={onInputChange}
				/>
				<input
					type='number'
					className='form-control new-post-label'
					name='salary'
					placeholder='З/П в $?'
					value={formData.salary}
					onChange={onInputChange}
				/>

				<button type='submit' className='btn btn-outline-light'>
					Добавить
				</button>
			</form>
		</div>
	)
}

export default AppEmployeesAddForm
