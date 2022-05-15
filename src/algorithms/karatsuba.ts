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

export function size(n: bigint): number {
  return n.toString().length;
}

/**
 * Splits a big int
 * @param n number to split
 * @param m number of digits to take from the right
 * @returns { high: bigint, low: bigint }
 */
export function splitAt(n: bigint, m: number): { high: bigint, low: bigint } {
  const nStr = n.toString();
  const l = nStr.length;
  const index = l - m;
  return {
    high: BigInt(nStr.slice(0, index)),
    low: BigInt(nStr.slice(index)),
  };
}

/**
 * Performs Karatsuba multiplication. To learn more, see:
 * https://en.wikipedia.org/wiki/Karatsuba_algorithm
 * https://mathworld.wolfram.com/KaratsubaMultiplication.html
 * @param n1 a number
 * @param n2 a number
 * @returns the product of n1 and n2
 */
export function multiply(n1: bigint, n2: bigint): string {
  const ten = BigInt(10);
  if (n1 < ten || n2 < ten) {
    const result = n1 * n2;
    return result.toString();
  }

  const m = Math.min(size(n1), size(n2));
  const m2 = Math.floor(m / 2);

  const r1 = splitAt(n1, m2);
  const r2 = splitAt(n2, m2);

  const z0 = BigInt(multiply(r1.low, r2.low));
  const z1 = BigInt(multiply(r1.low + r1.high, r2.low + r2.high));
  const z2 = BigInt(multiply(r1.high, r2.high));

  const two = BigInt('2');
  const bm2 = BigInt(m2);
  const result = ((z2 * ten ** (bm2 * two)) + ((z1 - z2 - z0) * ten ** bm2) + z0);
  return result.toString();
}
