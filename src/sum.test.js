const sum = require("./sum");

test("繰り返し処理", () => {
  function sum(max) {
    let total = 0;
    for (let i = 0; i < max; i++) {
      total += i + 1;
    }
    return total;
  }

  expect(sum(4)).toBe(10);
});

test("繰り返し処理", () => {
  function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  expect(sum([1])).toBe(1);
  expect(sum([1, 2, 3])).toBe(6);
});
