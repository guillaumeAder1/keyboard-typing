import React, { useState } from 'react'

function Phrase({ phrase, currentChar, pointer }) {
    const charList = phrase.replace(/ /g, '_').split('')
    return (
        <div className='grid-container centered'>
            <div className="box-row" role="row">
                { charList.map((char, i) => <div key={i} role="cell" className={`${pointer === i ? 'blink' : ''} box`}>{char}</div>) }
            </div>
        </div>
    )
}

export default React.memo(Phrase)