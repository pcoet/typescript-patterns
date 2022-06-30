/**
 * Example of spread syntax, which uses the iterable protocol.
 * @param str A string
 * @returns An array of characters
 */
 export function spreadString(str: string): string[] {
  return [...str];
}

/**
 * Example of iterating over a string using `for...of`.
 * @param str A string
 * @returns An array of characters
 */
 export function getCharsFor(str: string): string[] {
  const result: string[] = [];
  for (const char of str) {
    result.push(char);
  }
  return result;
}

/**
 * Example of an iterable class. Generates Fibonacci numbers.
 */
export class FibonacciIterable implements Iterable<number> {
  private numFibs: number;

  /**
   * @param numFibs How many Fibonacci numbers to generate
   */
  constructor(numFibs: number) {
    if (numFibs < 1 || !Number.isInteger(numFibs)) {
      throw new Error('Number must be a positive integer');
    }
    this.numFibs = numFibs;
  }

  [Symbol.iterator](): Iterator<number> {
    const limit = this.numFibs;
    let count = 0;
    let n1 = 1;
    let n2 = 1;
    return {
      next: (): IteratorResult<number> => {
        count++;
        if (count === 1) {
          return {
            done: count > limit,
            value: 1,
          }
        }
        [n1, n2] = [n2, n1 + n2];
        return {
          done: count > limit,
          value: n1,
        }
      }
    }
  }
}
