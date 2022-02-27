import { useEffect, useState } from "react"
import randomSentence from "random-sentence";

export function generateWords() {
    console.warn('generateWords')
    return randomSentence({
        min: 4,
        max: 6 
    }).toLocaleLowerCase().replace(/\./g, '');
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