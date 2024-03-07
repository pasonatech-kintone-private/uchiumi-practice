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

test("関数の練習(可変長引数)2", () => {
  expect(Math.max(1, 2, 3)).toBe(3);
  expect(Math.max(1, 4, 3)).toBe(4);
  expect(Math.min(1)).toBe(1);
  expect(Math.min(2, 5)).toBe(2);
  expect(Math.min(3, 6, 8)).toBe(3);
});
test("関数の練習(分割代入)", () => {
  function hello({ firstname, familyname }) {
    return "hello" + firstname + familyname + "san";
  }
  expect(hello({ firstname: "Taro", familyname: "Yamada" })).toBe(
    "helloTaroYamadasan"
  );
});
test("関数の練習(分割代入.配列)", () => {
  function multiply([x, y]) {
    return x * y;
  }
  expect(multiply([3, 4])).toBe(12);
});
