const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const a = 1;

test("someとfilterの練習", () => {
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];

  //偶数のテスト
  expect(array.some((number) => number % 2 === 0)).toBe(true);
  expect(array1.some((number) => number % 2 === 0)).toBe(false);
  expect(array2.some((number) => number % 2 === 0)).toBe(true);

  expect(array.filter((number) => number % 2 === 0)).toStrictEqual([2, 4]);
  expect(array1.filter((number) => number % 2 === 0)).toStrictEqual([]);
  expect(array2.filter((number) => number % 2 === 0)).toStrictEqual([
    2, 4, 6, 8,
  ]);

  //奇数のテスト
  expect(array.some((number) => number % 2 === 1)).toBe(true);
  expect(array1.some((number) => number % 2 === 1)).toBe(true);
  expect(array2.some((number) => number % 2 === 1)).toBe(false);

  expect(array.filter((number) => number % 2 === 1)).toStrictEqual([1, 3, 5]);
  expect(array1.filter((number) => number % 2 === 1)).toStrictEqual([
    1, 3, 5, 7,
  ]);
  expect(array2.filter((number) => number % 2 === 1)).toStrictEqual([]);
});

test("indexOfの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];

  //テスト
  expect(array.indexOf(obj)).toStrictEqual(3);
  expect(array.indexOf({ test: "中身" })).toStrictEqual(-1);
});
