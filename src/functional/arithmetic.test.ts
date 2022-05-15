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
  add,
  decrement,
  divide,
  increment,
  multiply,
  subtract,
  sum,
} from './arithmetic';

describe('arithmetic', () => {
  test('increment', () => {
    expect(increment(1)).toEqual(2);
  });
  test('add', () => {
    expect(add(2, 2)).toEqual(4);
  });
  test('sum', () => {
    expect(sum(2, 2, 2, 2, 2)).toEqual(10);
  });
  test('decrement', () => {
    expect(decrement(1)).toEqual(0);
  });
  test('subtract', () => {
    expect(subtract(2, 2)).toEqual(0);
  });
  test('multiply', () => {
    expect(multiply(2, 3)).toEqual(6);
  });
  test('divide', () => {
    expect(divide(2, 2)).toEqual(1);
  });
});
