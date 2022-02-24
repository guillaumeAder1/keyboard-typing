import React, { useState } from 'react'

function Phrase({ phrase, currentChar, pointer }) {
    // console.log(phrase, currentChar)
    const charList = phrase.replace(/ /g, '_').split('')
    // const [index, setIndex] = useState(0) 
    return (
        <div className='grid-container centered'>
            <div className="box-row">
                { charList.map((char, i) => <div key={i} className={`${pointer === i ? 'blink' : ''} box`}>{char}</div>) }
            </div>
        </div>
    )
}

export default React.memo(Phrase)