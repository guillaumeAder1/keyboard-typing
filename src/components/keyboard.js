
export default function Keyboard () {
    const qwerty = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const asdf = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const zxcv = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    return (
        <div className="keyboard-container centered">
            <div role="row">
                {qwerty.map(char => <span key={char} role="cell" className={`gap`}>{char}</span>)}
            </div>
            <div role="row">
                {asdf.map(char => <span key={char} role="cell" className={`gap`}>{char}</span>)}
            </div>
            <div role="row">
                {zxcv.map(char => <span key={char} role="cell" className={`gap`}>{char}</span>)}
            </div>
        </div>
    )
}