export function calculateAge(day, month, year) {

    const dayNum = Number(day)
    const monthNum = Number(month)
    const yearNum = Number(year)

    const birthDate = new Date(yearNum, monthNum - 1, dayNum)
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()


    if (
        today.getMonth() < birthDate.getMonth() ||
        (
            today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--
    }
    return age
}