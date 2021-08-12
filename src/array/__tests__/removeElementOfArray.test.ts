import { removeElementOfArray } from '../removeElementOfArray';

describe('removeElementOfArray()', () => {
  let array: number[];
  beforeEach(() => {
    array = [0, 1, 2];
  });
  it(`remove "1" from [0, 1, 2]`, () => {
    expect(removeElementOfArray(array, 1)).toStrictEqual([0, 2]);
  });
  it(`doesn't remove if an invalid index is specified`, () => {
    expect(removeElementOfArray(array, -1)).toStrictEqual([0, 1, 2]);
  });
  it(`doesn't remove if an out-of-range index is specified`, () => {
    expect(removeElementOfArray(array, 3)).toStrictEqual([0, 1, 2]);
  });
});
