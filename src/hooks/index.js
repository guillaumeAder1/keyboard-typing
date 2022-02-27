import { useEffect, useState } from "react"

export function generateWords() {
    // const [value, setValue] = useState('') 
    // useEffect(() => {
    //     setValue('this is a random sentence')
    // }, [])
    // return value
    console.warn('generateWords')
    return 'this is a random sentence';
}

export function useCollectUserInput(currentPhrase, pointer, cb) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz '
    const fn = e => {
        const { key, keyCode } = e
        if (key.length > 1) return
        if (!alphabet.includes(key)) return
        if (currentPhrase[pointer] === key) cb && cb(key)
    }
    useEffect(() => {
        // console.warn('mounted')
        window.addEventListener('keydown', fn)
        return () => {
            // console.warn('removed')
            window.removeEventListener('keydown', fn)
        }
    }, [fn])
}