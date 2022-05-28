import { ColorState, updateColor } from './async';

describe('async', () => {
  describe('eventHandler', () => {
    test('invokes callback on event', () => {
      const state: ColorState = { current: 'BLUE', previous: 'RED'}
      function setGreen(state: ColorState): void {
        state.previous = state.current;
        state.current = 'GREEN';
      }
      updateColor(state, setGreen);
      expect(state.current).toBe('GREEN');
      expect(state.previous).toBe('BLUE');
    });
  });
});
