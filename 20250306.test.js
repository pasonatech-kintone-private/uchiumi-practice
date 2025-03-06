test("method", () => {
  const obj = {
    methodA: function (x, y) {
      return x + y;
    },
    methodB: (num) => {
      return num + 1;
    },
    methodC(x) {
      return x * 2;
    },
  };

  expect(obj.methodA(1, 2)).toBe(3);
  expect(obj.methodB(2)).toBe(3);
  expect(obj.methodC(2)).toBe(4);
});

test("if", () => {
  function greater(x) {
    if (x > 10) {
      return true;
    }
  }
  expect(greater(11)).toBe(true);
  expect(greater(8)).toBe(undefined);
});
