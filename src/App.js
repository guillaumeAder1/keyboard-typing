import './style/App.scss';

import { useGenerateWords } from './hooks/'
import Keyboard from './components/keyboard';
import Phrase from './components/phrase';

function App() {
  const currentPhrase = useGenerateWords();
  return (
    <div className="App">
      <Phrase phrase={currentPhrase} />
      <Keyboard />
    </div>
  );
}

export default App;
