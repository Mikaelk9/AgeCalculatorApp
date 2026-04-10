import { useState, useEffect } from "react"

function AnimatedNumber({ value }) {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        let start = 0
        const duration = 500
        const increment = Math.ceil(value / (duration / 16))

        const interval = setInterval(() => {
            start += increment

            if (start >= value) {
                start = value
                clearInterval(interval)
            }

            setDisplayValue(start)
        }, 16)

        return () => clearInterval(interval)
    }, [value])

    return <span>{displayValue}</span>
}

export default AnimatedNumber