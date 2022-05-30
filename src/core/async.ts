// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
export function updateColorWithTimeout(
  state: ColorState,
  fn: (state: ColorState) => void,
  timeout?: number,
): void {
  if (!timeout) {
    timeout = 0;
  }
  setTimeout(() => { fn(state) }, timeout);
}
