import './style/App.scss';
import { generateWords, useCollectUserInput } from './hooks/'
import Keyboard from './components/keyboard';
import Phrase from './components/phrase';
import { useState, useCallback } from 'react';

function App() {
  const currentPhrase = generateWords()
  // const [currentPhrase] = useState();
  const [currentChar, setCurrentChar] = useState('')
  const [pointer, setPointer] = useState(0) 
  useCollectUserInput(currentPhrase, pointer, key => {
    // console.warn('key', key)
    // etCurrentChar(key)
    setPointer(pointer + 1)
  });
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
