import { updateColorWithTimeout, ColorState, updateColor } from './async';

describe('async', () => {
  describe('updateColor', () => {
    test('updates state using a callback function', () => {
      const colorState: ColorState = { current: 'BLUE', previous: 'RED'}
      function setGreen(cs: ColorState): void {
        cs.previous = cs.current;
        cs.current = 'GREEN';
      }
      updateColor(colorState, setGreen);
      expect(colorState.current).toBe('GREEN');
      expect(colorState.previous).toBe('BLUE');
    });
  });
  describe('updateColorWithTimeout', () => {
    test('updates state after a timeout, using a callback function', done => {
      const colorState: ColorState = { current: 'BLUE', previous: 'RED'}
      function waitForSetGreen(cs: ColorState): void {
        cs.previous = cs.current;
        cs.current = 'GREEN';
        expect(colorState.current).toBe('GREEN');
        expect(colorState.previous).toBe('BLUE');
        done();
      }
      // For a better demo, *temporarily* change the timeout from 0 to 3000.
      updateColorWithTimeout(colorState, waitForSetGreen, 0);
    });
  });
});
