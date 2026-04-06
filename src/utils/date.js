export function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day)

    return (
        date.getFullYear() === Number(year) &&
        date.getMonth() === Number(month) - 1 &&
        date.getDate() === Number(day)
    )
}