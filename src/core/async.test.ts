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
