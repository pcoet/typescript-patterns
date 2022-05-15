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

import { multiply, size, splitAt } from './karatsuba';

describe('size', () => {
  test('correctly returns the size of a small number', () => {
    expect(size(BigInt(100))).toEqual(3);
  });

  test('correctly returns the size of a small number', () => {
    expect(size(BigInt('3141592653589793238462643383279502884197169399375105820974944592'))).toEqual(64);
  });

  test('correctly returns the size of a small number', () => {
    expect(size(BigInt('2718281828459045235360287471352662497757247093699959574966967627'))).toEqual(64);
  });
});

describe('splitAt', () => {
  test('splits a small even number', () => {
    expect(splitAt(BigInt(1234), 2)).toEqual({ high: BigInt(12), low: BigInt(34) });
  });

  test('splits a small odd number', () => {
    expect(splitAt(BigInt(12345), 3)).toEqual({ high: BigInt(12), low: BigInt(345) });
  });

  test('splits a bigger number', () => {
    const input = BigInt(4966967627);
    expect(splitAt(input, 2)).toEqual({ high: BigInt(49669676), low: BigInt(27) });
    expect(splitAt(input, 3)).toEqual({ high: BigInt(4966967), low: BigInt(627) });
  });

  test('splits a big number', () => {
    const result = splitAt(BigInt('3141592653589793238462643383279502884197169399375105820974944592'), 11);
    expect(result.high.toString()).toEqual('31415926535897932384626433832795028841971693993751058');
    expect(result.low.toString()).toEqual('20974944592');
  });
});

describe('multiply', () => {
  test('correctly multiplies small numbers', () => {
    expect(multiply(BigInt('123'), BigInt('456'))).toEqual('56088');
  });
  test('correctly multiplies bigger numbers', () => {
    expect(multiply(BigInt('123456'), BigInt('789012'))).toEqual('97408265472');
  });
  test('correctly multiplies big numbers', () => {
    expect(
      multiply(BigInt('3141592653589793238462643383279502884197169399375105820974944592'),
        BigInt('2718281828459045235360287471352662497757247093699959574966967627')),
    ).toEqual('8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184');
  });
});
