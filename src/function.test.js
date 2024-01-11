test("関数の練習", () => {
  function callname(name, kunsan = "さん") {
    return name + kunsan;
  }
  expect(callname("山田")).toBe("山田さん");
  expect(callname("田中", "くん")).toBe("田中くん");
  expect(callname("山根", "")).toBe("山根");
});
test("関数の練習(可変長引数)", () => {
  function SUM(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum = args[i] + sum;
    }

    return sum;
  }
  expect(Math.max(1, 2, 3)).toBe(3);
  expect(Math.max(1, 4, 3)).toBe(4);
  expect(SUM(1, 2, 3)).toBe(6);
});
