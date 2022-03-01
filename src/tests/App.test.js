import { render, screen, getByRole, fireEvent } from '@testing-library/react';
import App from '../App';


let phraseContainer, keyboardContainer;

describe('render app', () => {
  beforeEach(() => {
    render(<App />)
    phraseContainer = document.querySelector('.grid-container')
    keyboardContainer = document.querySelector('.keyboard-container')
  })
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
  test('should add red color if typing wrong letter', () => {
    expect(getByRole(keyboardContainer, 'cell', { name: 't' }).className).toEqual(expect.stringContaining('gap'))
    fireEvent.keyDown(window, { key: 'r' })
    expect(getByRole(keyboardContainer, 'cell', { name: 't' }).className).toEqual(expect.stringContaining('red-1'))
    fireEvent.keyDown(window, { key: 'k' })
    expect(getByRole(keyboardContainer, 'cell', { name: 't' }).className).toEqual(expect.stringContaining('red-2'))
    fireEvent.keyDown(window, { key: 'o' })
    expect(getByRole(keyboardContainer, 'cell', { name: 't' }).className).toEqual(expect.stringContaining('red-3'))
  })
  test('should add green color if typing correct letter', () => {
    expect(getByRole(keyboardContainer, 'cell', { name: 't' }).className).toEqual(expect.stringContaining('gap'))
    fireEvent.keyDown(window, { key: 't' })
    expect(getByRole(keyboardContainer, 'cell', { name: 't' }).className).toEqual(expect.stringContaining('green-1'))
    fireEvent.keyDown(window, { key: 'r' })
    expect(getByRole(keyboardContainer, 'cell', { name: 'r' }).className).toEqual(expect.stringContaining('green-1'))
    fireEvent.keyDown(window, { key: 'e' })
    expect(getByRole(keyboardContainer, 'cell', { name: 'e' }).className).toEqual(expect.stringContaining('green-1'))
  })
})