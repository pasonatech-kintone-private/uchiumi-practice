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
