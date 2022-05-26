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

type Sortable = number | string;

/**
 * Sorts an input array using insertion sort.
 * @param a An array of Sortable elements
 */
export function insertionSort(a: Sortable[]): void {
  let i = 1;
  while (i < a.length) {
    const x = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > x) {
      a[j + 1] = a[j];
      j = j - 1;
    }
    a[j + 1] = x;
    i = i + 1;
  }
}

/**
 * Sorts an input array using selection sort.
 * @param a An array of Sortable elements
 */
export function selectionSort(a: Sortable[]): void {
  const l = a.length;
  let i = 0;
  while (i < l - 1) {
    let min = i;
    let j = i + 1;
    while (j < l) {
      if (a[j] < a[min]) {
        min = j
      }
      j = j + 1;
    }
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]] // swap a[i] and a[min]
    }
    i = i + 1;
  }
}
