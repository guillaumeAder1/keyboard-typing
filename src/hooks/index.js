import { useEffect } from "react"
import randomSentence from "random-sentence";

const mockGetRandomSentence = () => {
    // const list = [
    //     'this is a random sentence',
    //     'here we go again'
    // ]
    const list = [
        'tres',
        'asd'
    ]
    return () => {
        list.reverse();
        return list[0]
    }
}

export function generateWords() {
    return process.env.NODE_ENV === 'production'
        ? () => randomSentence({
            min: 4,
            max: 6 
        }).toLocaleLowerCase().replace(/\./g, '') 
        : mockGetRandomSentence()
    
}

export function useCollectUserInput(currentPhrase, pointer, cb, errCb) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz '
    const fn = e => {
        const { key, keyCode } = e
        if (key.length > 1) return
        if (!alphabet.includes(key)) return
        if (currentPhrase[pointer] === key) {
            cb && cb(currentPhrase[pointer])
        } else {
            errCb && errCb(currentPhrase[pointer])
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', fn)
        return () => {
            window.removeEventListener('keydown', fn)
        }
    }, [fn])
}