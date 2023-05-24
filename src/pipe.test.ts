import { pipe } from './pipe';

const map =
  <T, U>(callback: (x: T) => U) =>
  (array: T[]) =>
    array.map(callback);

describe('pipe', () => {
  it('single operation', () => {
    const before = 1;
    const after = 2;
    const result = pipe(before, (x) => x * 2);
    global.info(before, after, result);
    expect(result).toEqual(after);
  });

  it('multi operations', () => {
    const before = 1;
    const after = 6;
    const result = pipe(
      before,
      (x) => x * 2,
      (x) => x * 3
    );
    global.info(before, after, result);
    expect(result).toEqual(after);
  });

  it('array data', () => {
    const before = [0, 1, 2, 3];
    const after = [2, 4, 6, 8];
    const result = pipe(
      before,
      map((x) => x + 2)
    );
    global.info(before, after, result);
    expect(result).toEqual(after);
  });

  it('return type check', () => {
    const before = 'a';
    const after = 'string';
    const result = pipe(before, (x) => typeof x);
    global.info(before, after, result);
    expect(result).toEqual(after);
  });
});
