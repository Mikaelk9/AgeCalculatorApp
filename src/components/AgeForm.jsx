import { useState } from 'react'
import DateInput from './DateInput'
import ButtonSubmit from './ButtonSubmit'
import ResultAge from './ResultAge'

import { isValidDate } from '../utils/date'
import { calculateAge } from '../utils/calculateAge'
import { validateField } from '../utils/validateField'

function AgeForm() {

    const [formData, setFormData] = useState({
        day: '',
        month: '',
        year: ''
    })

    const [errors, setErrors] = useState({
        day: '',
        month: '',
        year: ''
    })

    const [age, setAge] = useState({
        years: '--',
        months: '--',
        days: '--'
    })

    function handleChange(field, value) {
        if (!/^\d*$/.test(value)) return

        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))

        const errorMessage = validateField(field, value)

        setErrors((prev) => ({
            ...prev,
            [field]: errorMessage
        }))
    }

    

    function handleSubmit() {
        const newErrors = {
            day: '',
            month: '',
            year: ''
        }

        if (!formData.day) newErrors.day = 'This field is required'
        if (!formData.month) newErrors.month = 'This field is required'
        if (!formData.year) newErrors.year = 'This field is required'

        if (formData.day && formData.month && formData.year) {
            const isValid = isValidDate(
                formData.day,
                formData.month,
                formData.year
            )

            if (!isValid) {
                newErrors.day = 'Must be a valid date'
            }

            if (isValid) {
                const birthDate = new Date(formData.year, formData.month - 1, formData.day)
                const today = new Date()

                birthDate.setHours(0, 0, 0, 0)
                today.setHours(0, 0, 0, 0)

                if (birthDate > today) {
                    newErrors.day = 'Date must be in the past'
                }

            }
        }

        setErrors(newErrors)

        const hasError = Object.values(newErrors).some(error => error !== '')
        if (hasError) return

        const resultado = calculateAge(formData.day, formData.month, formData.year)

        setAge(resultado)

    }



    return (

        <div className='flex flex-col gap-6'>
            <div className='flex gap-3'>
                <DateInput
                    label='Day'
                    placeholder='DD'
                    value={formData.day}
                    onChange={(e) => handleChange('day', e.target.value)}
                    error={errors.day}
                />

                <DateInput
                    label='Month'
                    placeholder='MM'
                    value={formData.month}
                    onChange={(e) => handleChange('month', e.target.value)}
                    error={errors.month}
                />

                <DateInput
                    label='Year'
                    placeholder='YYYY'
                    value={formData.year}
                    onChange={(e) => handleChange('year', e.target.value)}
                    error={errors.year}
                />

            </div>

            < ButtonSubmit onClick={handleSubmit} />

            <div className='flex flex-col gap-2'>
                <ResultAge label='years' value={age.years} />
                <ResultAge label='months' value={age.months} />
                <ResultAge label='days' value={age.days} />
            </div>
        </div>

    )
}

export default AgeForm