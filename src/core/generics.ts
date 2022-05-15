// Copyright 2021 Google LLC
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

/**
 * Example of a generic function.
 * Returns the largest item in the array, or the first item, if all objects are equal.
 * @param arr An array of items to be compared.
 */
export function getLargest<T>(arr: T[]): T {
  let largest: T = arr[0];
  arr.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}

export interface HasBirthday {
  dob: Date;
}

export function getOldest<T extends HasBirthday>(arr: T[]): T {
  let oldest: T = arr[0];
  arr.forEach((born) => {
    if (born.dob < oldest.dob) {
      oldest = born;
    }
  });
  return oldest;
}

/**
 * A mapping of generic keys to generic values.
 */
export class Entry<K, V> {
  private key: K;

  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  public getKey(): K {
    return this.key;
  }

  public getValue(): V {
    return this.value;
  }
}

/**
 * A stack implemented on an array.
 */
export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }
}
