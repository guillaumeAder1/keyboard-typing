import './style/App.scss';
import { generateWords, useCollectUserInput } from './hooks/'
import Keyboard from './components/keyboard';
import Phrase from './components/phrase';
import { useState, useCallback, useEffect } from 'react';

// let currentPhrase;
function App() {
  const [currentPhrase, setCurrentPhrase] = useState(generateWords())
  // const [currentPhrase] = useState();
  const [currentChar, setCurrentChar] = useState('')
  const [pointer, setPointer] = useState(0) 
  useCollectUserInput(currentPhrase, pointer, key => {
    setPointer(pointer + 1)
  });
  useEffect(() => {
    if (pointer >= currentPhrase.length) {
      console.log('shoudl generate a new word...')
      setCurrentPhrase('another sentence has been called and generated')
      setPointer(0)
    }
  }, [pointer])
  return (
    <div className="App">
      <Phrase
        phrase={currentPhrase}
        currentChar={currentChar}
        pointer={pointer}
      />
      <Keyboard currentChar={currentChar} />
    </div>
  );
}

export default App;
