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

import { insertionSort, selectionSort } from './sort';

describe('sort', () => {
  describe('insertionSort', () => {
    test('sorts an array of numbers', () => {
      const input = [11, 5, 19, 2, 13, 1, 7, 17, 3];
      insertionSort(input);
      expect(input).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19]);
    });
    test('sorts an array of strings', () => {
      const input = ['d', 'h', 'f', 'c', 'e', 'a', 'g', 'b'];
      insertionSort(input);
      expect(input).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
    });
  });

  describe('selectionSort', () => {
    test('sorts an array of numbers', () => {
      const input = [11, 5, 19, 2, 13, 1, 7, 17, 3];
      selectionSort(input);
      expect(input).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19]);
    });
    test('sorts an array of strings', () => {
      const input = ['d', 'h', 'f', 'c', 'e', 'a', 'g', 'b'];
      selectionSort(input);
      expect(input).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
    });
  });
});
