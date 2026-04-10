export function validateField(field, value) {
    if (!value) {
        return 'This field is required'
    }

    const num = Number(value)

    if (field === 'day'){
        if(num < 1 || num > 31){
            return 'Must be a valid day'
        }
    }

    if (field === 'month'){
        if(num < 1 || num > 12){
            return 'Must be a valid month'
        }
    }
    if (field === 'year'){
        const currentYear = new Date().getFullYear()

        if(num > currentYear){
            return 'Must be in the past'
        }
    }


    return ''
}