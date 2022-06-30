import { getCharsFor, spreadString, FibonacciIterable } from './iteration';

describe('iteration', () => {
  describe('getCharsFor', () => {
    test('iterates over a string and returns the chars as an array', () => {
      expect(getCharsFor('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
    });
  });

  describe('spreadString', () => {
    test('spreads a string into an array of characters', () => {
      expect(spreadString('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
    });
  });

  describe('FibonacciIterable', () => {
    test('generates Fibonacci numbers using spread', () => {
      const oneFib = new FibonacciIterable(1);
      expect([...oneFib]).toEqual([1]);
      const twoFibs = new FibonacciIterable(2);
      expect([...twoFibs]).toEqual([1, 1]);
      const threeFibs = new FibonacciIterable(3);
      expect([...threeFibs]).toEqual([1, 1, 2]);
      const sevenFibs = new FibonacciIterable(7);
      expect([...sevenFibs]).toEqual([1, 1, 2, 3, 5, 8, 13]);
      const tenFibs = new FibonacciIterable(10);
      expect([...tenFibs]).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
    test('generates Fibonacci numbers using for...of', () => {
      const result: number[] = [];
      const sevenFibs = new FibonacciIterable(7);
      for (const n of sevenFibs) {
        result.push(n);
      }
      expect(result).toEqual([1, 1, 2, 3, 5, 8, 13]);
    });
  });
});
