test("and演算子", () => {
  const x = 1;
  const y = 2;
  expect(x === 1 && y === 2).toBe(true);
  expect(x === 2 && y === 2).toBe(false);
  expect(x === 1 && y === 1).toBe(false);
  expect(x === 2 && y === 1).toBe(false);
});

test("or演算子", () => {
  const x = 1;
  const y = 2;
  expect(x === 1 || y === 2).toBe(true);
  expect(x === 2 || y === 2).toBe(true);
  expect(x === 1 || y === 1).toBe(true);
  expect(x === 2 || y === 1).toBe(false);
});

test("or演算子", () => {
  const x = 1;
  const y = 2;
  expect(!(x === 1 || y === 2)).toBe(false);
  expect(!(x === 2 || y === 2)).toBe(false);
  expect(!(x === 1 || y === 1)).toBe(false);
  expect(!(x === 2 || y === 1)).toBe(true);
});

test("calc", () => {
  expect((1 + 1) * 2).toBe(4);
});

test("parsInt", () => {
  expect(Number.parseInt("17", 10)).toBe(17);
  expect(Number.parseInt(17, 10)).toBe(17);
  expect(Number.parseFloat("-2.8", 10)).toBe(-2.8);
});
