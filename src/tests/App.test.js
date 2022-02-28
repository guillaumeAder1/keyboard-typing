import { render, screen, getByRole, fireEvent } from '@testing-library/react';
import App from '../App';


let phraseContainer;
beforeEach(() => {
  render(<App />)
  phraseContainer = document.querySelector('.grid-container')
})

describe('render app', () => {
  test('should renders basic app with "ASD" phrase by defaultm and first char should be blinking', () => {
    const init = getByRole(phraseContainer, 'cell', { name: 'a' })
    getByRole(phraseContainer, 'cell', { name: 's' })
    getByRole(phraseContainer, 'cell', { name: 'd' })
    expect(init).toHaveClass('blink')
  });
  test('should move blink state to next char after typing the correct letter', () => {
    expect(getByRole(phraseContainer, 'cell', { name: 't' })).toHaveClass('blink')
    expect(getByRole(phraseContainer, 'cell', { name: 'r' })).not.toHaveClass('blink')
    // type correct char
    fireEvent.keyDown(window, { key: 't' })
    expect(getByRole(phraseContainer, 'cell', { name: 't' })).not.toHaveClass('blink')
    expect(getByRole(phraseContainer, 'cell', { name: 'r' })).toHaveClass('blink')
  });
  test('should not move blink state to next char after typing the incorrect letter', () => {
    expect(getByRole(phraseContainer, 'cell', { name: 't' })).toHaveClass('blink')
    expect(getByRole(phraseContainer, 'cell', { name: 'r' })).not.toHaveClass('blink')
    // type incorrect char
    fireEvent.keyDown(window, { key: 'r' })
    expect(getByRole(phraseContainer, 'cell', { name: 't' })).toHaveClass('blink')
    expect(getByRole(phraseContainer, 'cell', { name: 'r' })).not.toHaveClass('blink')
  });
})