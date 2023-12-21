test("Number.parseIntの練習", () => {
  const num1 = Number.parseInt("123");
  const num2 = Number.parseInt("-10");
  const num3 = Number.parseInt("abc");
  const num4 = Number.parseInt("3.14");
  const num5 = Number.parseInt("-2abc");
  const num6 = Number.parseInt("3+5");
  const num7 = undefined;
  const num8 = Number.parseInt(num7);
  expect(num1).toBe(123);
  expect(num2).toBe(-10);
  expect(num1 - num2).toBe(133);
  expect(num1 + num3).toBe(NaN);
  expect(num4).toBe(3);
  expect(num5).toBe(-2);
  expect(num6).toBe(3);
  expect(num8).toBe(NaN);
});

test("Number.parseFloatの練習", () => {
  const num1 = Number.parseFloat("1.23");
  const num2 = Number.parseFloat("-10.1bbq");
  const num3 = Number.parseFloat("abc");
  expect(num1).toBe(1.23);
  expect(num2).toBe(-10.1);
  expect(num1 - num2).toBe(11.33);
  expect(num1 + num3).toBe(NaN);
});
