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

import {
  updateColorWithTimeout,
  ColorState,
  updateColor,
  makePromise,
  makePromiseForPositiveNumber,
  processNumberAsync,
  processNumberPromise,
} from './async';

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

  describe('makePromise', () => {
    test('returns a promise for a string', async () => {
       // For a better demo, *temporarily* change the delay from 0 to 3000.
      const result = await makePromise('my string', 0);
      expect(result).toBe('my string');
    });

    test('returns a promise for a number', async () => {
      // For a better demo, *temporarily* change the delay from 0 to 3000.
     const result = await makePromise(42, 0);
     expect(result).toBe(42);
   });
  });

  describe('makePromiseForPositiveNumber', () => {
    test('returns a promise for the input string', async () => {
       // For a better demo, *temporarily* change the delay from 0 to 3000.
      const result = await makePromiseForPositiveNumber(42, 0);
      expect(result).toBe(42);
    });
  });

  describe('processNumberPromise', () => {
    test('processes a non-negative number and returns the expected result', async () => {
      expect(await processNumberPromise(11)).toBe('23');
    })
    test('rejects a negative number and returns the expected error message', async () => {
      expect(await processNumberPromise(-11)).toBe('Negative number -11 not allowed');
    })
  });

  describe('processNumberAsync', () => {
    test('processes a non-negative number and returns the expected result', async () => {
      expect(await processNumberAsync(11)).toBe('23');
    })
    test('rejects a negative number and returns the expected error message', async () => {
      expect(await processNumberAsync(-11)).toBe('Negative number -11 not allowed');
    })
  });
});
