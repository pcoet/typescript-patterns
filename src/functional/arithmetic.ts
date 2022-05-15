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

/**
 * Adds 1 to x. A unary operation.
 * @param x The operand
 * @returns The operand + 1
 */
 export function increment(x: number): number {
  return x + 1;
}

/**
 * Sums two numbers. A binary operation.
 * @param x The first operand
 * @param y The second operand
 * @returns The sum of the two operands
 */
export function add(x: number, y: number): number {
  return x + y;
}

/**
 * Sums a sequence of numbers. An n-ary operation.
 * @param nums The operands
 * @returns The sum of the operands
 */
export function sum(...nums: number[]): number {
  return nums.reduce((prev, cur) => prev + cur)
}

/**
 * Subtracts 1 from x. A unary operation.
 * @param x The operand
 * @returns The operand - 1
 */
export function decrement(x: number): number {
  return x - 1;
}

/**
 * Subtracts the second operand from the first operand. A binary operation.
 * @param x The first operand
 * @param y The second operand
 * @returns The difference between the first operand and the second operand
 */
export function subtract(x: number, y: number): number {
  return x - y;
}

/**
 * Multiplies the first operand by the second operand. A binary operation.
 * @param x The first operand
 * @param y The second operand
 * @returns The product of the two operands
 */
 export function multiply(x: number, y: number): number {
  return x * y;
}

/**
 * Divides the first operand by the second operand. A binary operation.
 * @param x The first operand
 * @param y The second operand
 * @returns The quotient of the first operand divided by the second operand
 */
 export function divide(x: number, y: number): number {
  return x / y;
}
