test("関数の練習", () => {
  function callname(name, kunsan = "さん") {
    return name + kunsan;
  }
  expect(callname("山田")).toBe("山田さん");
  expect(callname("田中", "くん")).toBe("田中くん");
  expect(callname("山根", "")).toBe("山根");
});
