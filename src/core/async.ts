export interface ColorState {
  current: 'RED' | 'GREEN' | 'BLUE';
  previous: 'RED' | 'GREEN' | 'BLUE'
}

/**
 * Example function that updates a state object using a callback.
 * @param state The state object to update
 * @param fn The callback function that updates the state
 */
export function updateColor(state: ColorState, fn: (state: ColorState) => void): void {
  fn(state);
}

/**
 * Example function that updates a state object after a timeout, using a
 * callback.
 * @param timeout The timeout in milliseconds; defaults to 0
 * @param state The state object to update
 * @param fn The callback function that updates the state
 */
export function asyncUpdateColor(
  state: ColorState,
  fn: (state: ColorState) => void,
  timeout?: number,
): void {
  if (!timeout) {
    timeout = 0;
  }
  setTimeout(() => { fn(state) }, timeout);
}
