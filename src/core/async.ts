export interface ColorState {
  current: 'RED' | 'GREEN' | 'BLUE';
  previous: 'RED' | 'GREEN' | 'BLUE'
}

/**
 * Example function that updates a state object using a synchronous callback.
 * @param state The state object to update.
 * @param fn The callback function to update the state.
 */
export function updateColor(state: ColorState, fn: (state: ColorState) => void): void {
  fn(state);
}
