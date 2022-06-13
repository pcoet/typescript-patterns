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

/**
 * Takes a number as input and returns a promise for the number. Rejects negative numbers.
 * @param n The input number
 * @param delay The duration of the delay before the promise is resolved
 * @return A promise for the input number
 */
export function makePromiseForNumber(n: number, delay?: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(`Negative number ${n} not allowed`);
      }
      resolve(n);
    }, delay);
  });
}

/**
 * Returns a promise for the result of the following operations on n:
 * double; add 1; stringify.
 * @param n The number to be processed
 * @return The stringified result of doubling n and adding 1, or an error message.
 */
export function processPromiseForNumber(n: number): Promise<string> {
  return makePromiseForNumber(n)
    .then(n => { return n * 2 })
    .then(n => { return n + 1 })
    .then(n => { return n.toString() })
    .catch((err: string) => { return err });
}

/**
 * Returns a promise for the result of the following operations on n:
 * double; add 1; stringify.
 * @param n The number to be processed
 * @return The stringified result of doubling n and adding 1, or an error message.
 */
 export async function processNumberAsync(n: number): Promise<string> {
  try {
     const promiseForN = await makePromiseForNumber(n);
     const doubled = promiseForN * 2;
     const plusOne = doubled + 1;
     return plusOne.toString();
   } catch (err) {
     return err as string;
   }
}
