import { useEffect, useState } from 'react'

const PREFIX = 'hermes-app-'

// Local Storage function
export default function useLocalStorage(key, initialValue) {
    // Set PREFIX to differentiate your keys across different projects
    const prefixedKey = PREFIX + key 

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
    return [value, setValue]
}
