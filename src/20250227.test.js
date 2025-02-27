test("関数の呼び出し練習1", () => {
  function add(a, b) {
    return a + b;
  }
  const x = add;
  expect(x(1, 2)).toBe(3);
  expect(add(3, 4)).toBe(7);
});

test("関数の呼び出し練習2", () => {
  const x = function (a, b) {
    return a + b;
  };
  expect(x(1, 2)).toBe(3);
});

test("関数の呼び出し練習2", () => {
  const arrayMap = (arr, fn) => {
    const result = [];
    for (const a of arr) {
      const r = fn(a);
      result.push(r);
    }

    return result;
  };

  const array = [1, 2, 3];
  const pow = (x) => {
    return x * x;
  };
  const minus = (x) => {
    return x - 1;
  };
  const plus = (x) => {
    return x + 1;
  };

  expect(arrayMap(array, pow)).toStrictEqual([1, 4, 9]);
  expect(arrayMap(array, plus)).toStrictEqual([2, 3, 4]);
  expect(arrayMap(array, minus)).toStrictEqual([0, 1, 2]);
  expect(array.map(pow)).toStrictEqual([1, 4, 9]);
});

test("コールバック関数", () => {
  const array = [1, 2, 3];

  expect(array.map((x) => x + 1)).toStrictEqual([2, 3, 4]);
  expect(array.map((x) => x * x)).toStrictEqual([1, 4, 9]);
  expect(array.map((x) => x + x)).toStrictEqual([2, 4, 6]);
});
