export function calculateAge(day, month, year) {

    const dayNum = Number(day)
    const monthNum = Number(month)
    const yearNum = Number(year)

    const birthDate = new Date(yearNum, monthNum - 1, dayNum)
    const today = new Date()

    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    if (days < 0) {
        const daysInPreviousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate()

        days = days + daysInPreviousMonth
        months--
    }

    if (months < 0 ){

        months = months + 12

        years--

    }

    return {
        years,
        months,
        days
    }
}