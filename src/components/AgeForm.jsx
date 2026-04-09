import { useState } from 'react'
import DateInput from './DateInput'
import ButtonSubmit from './ButtonSubmit'
import { isValidDate } from '../utils/date'
import { calculateAge } from '../utils/calculateAge'
import ResultAge from './ResultAge'

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

    const [age, setAge] = useState('')

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

    function validateField(field, value) {
        if (!value) {
            return 'This field is required'
        }

        return ''
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
                <ResultAge label='years' value={age} />
                <ResultAge label='months' />
                <ResultAge label='days' />
            </div>
        </div>

    )
}

export default AgeForm