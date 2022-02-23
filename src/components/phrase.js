export default function Phrase({ phrase }) {
    console.log(phrase)
    const charList = phrase.replace(/ /g, '_').split('')
    const index = 0
    return (
        <div className='grid-container centered'>
            <div className="box-row">
                { charList.map((char, i) => <div key={i} className={`${index === i ? 'blink' : ''} box`}>{char}</div>) }
            </div>
        </div>
    )
}