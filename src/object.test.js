test("objectの練習", () => {
  const obj = {
    key: "value",
    name: "田中",
    age: "84",
    color: "silver",
  };
  expect(obj.age).toBe("84");
  expect(obj.name).toBe("田中");
  expect(obj.color).toBe("silver");
  expect(obj["age"]).toBe("84");
});
test("配列の練習", () => {
  const testArray = [1, "red", true, -100, null];
  expect(testArray[0]).toBe(1);
  expect(testArray[1]).toBe("red");
  expect(testArray[2]).toBe(true);
  expect(testArray[3]).toBe(-100);
  expect(testArray[4]).toBe(null);
});
test("methodの練習", () => {
  const objTest = {
    method1: function (num) {
      return num * 100;
    },
    method2: (num1, num2) => {
      return (num1 + num2) * 200;
    },
  };
  expect(objTest.method1(1)).toBe(100);
  expect(objTest.method2(2, 3)).toBe(1000);
});
test("1_オブジェクトを宣言して中身を確認", () => {
  const colors = {
    red: "赤",
    blue: "青",
    black: "黒",
  };
  expect(colors.red).toBe("赤");
  expect(colors.blue).toBe("青");
  expect(colors.black).toBe("黒");
});
test("2_特殊なキー名を利用したオブジェクトの宣言と中身の確認", () => {
  const obj = {
    key: "key",
    123: 123,
    "my-prop": "my-prop",
  };
  expect(obj.key).toBe("key");
  expect(obj[123]).toBe(123);
  expect(obj["my-prop"]).toBe("my-prop");
});
test("オブジェクト宣言省略記法の練習", () => {
  const red = "赤";
  const blue = "青";
  const black = "黒";
  const colors = {
    red,
    blue,
    black,
  };
  expect(colors.red).toBe("赤");
  expect(colors.blue).toBe("青");
  expect(colors.black).toBe("黒");
});
test("3_分割代入の練習", () => {
  const colors = {
    red: "赤",
    blue: "青",
    black: "黒",
  };
  const { red, blue, black } = colors;
  expect(red).toBe("赤");
  expect(blue).toBe("青");
  expect(black).toBe("黒");
  expect(red).toBe(colors.red);
  expect(blue).toBe(colors.blue);
  expect(black).toBe(colors.black);
});

test("オブジェクトの列挙の練習", () => {
  const objTest = {
    key1: "test1",
    key2: "test2",
    key3: "test3",
  };
  expect(Object.keys(objTest)).toStrictEqual(["key1", "key2", "key3"]);
  expect(Object.values(objTest)).toStrictEqual(["test1", "test2", "test3"]);
  expect(Object.entries(objTest)).toStrictEqual([
    ["key1", "test1"],
    ["key2", "test2"],
    ["key3", "test3"],
  ]);
});
test("オブジェクトアサインの練習", () => {
  const obj1 = {
    key1: "test1",
  };
  const obj2 = {
    key2: "test2",
  };
  const obj3 = {
    key3: "test3",
  };

  expect(Object.assign({}, obj1, obj2, obj3)).toStrictEqual({
    key1: "test1",
    key2: "test2",
    key3: "test3",
  });
  expect({ ...obj1, ...obj2, ...obj3 }).toStrictEqual({
    key1: "test1",
    key2: "test2",
    key3: "test3",
  });
});
