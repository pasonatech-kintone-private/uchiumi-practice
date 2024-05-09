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
