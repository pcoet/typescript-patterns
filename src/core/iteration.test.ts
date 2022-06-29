import { getCharsFor, spreadString, IterableFibonacci } from './iteration';

describe('iteration', () => {
  test('getCharsFor', () => {
    expect(getCharsFor('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
  });
  test('spreadString', () => {
    expect(spreadString('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
  });
  test('IterableFibonacci', () => {
    const oneFib = new IterableFibonacci(1);
    expect([...oneFib]).toEqual([1]);
    const twoFibs = new IterableFibonacci(2);
    expect([...twoFibs]).toEqual([1, 1]);
    const threeFibs = new IterableFibonacci(3);
    expect([...threeFibs]).toEqual([1, 1, 2]);
    const sevenFibs = new IterableFibonacci(7);
    expect([...sevenFibs]).toEqual([1, 1, 2, 3, 5, 8, 13]);
    const tenFibs = new IterableFibonacci(10);
    expect([...tenFibs]).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
