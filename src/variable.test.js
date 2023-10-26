test("constの練習", () => {
  const apple = "りんご";
  const peach = "桃";
  expect(apple).toBe("りんご");
  //peachの中味の確認を追加
  expect(peach).toBe("桃");
});
test("変数宣言の練習", () => {
  const animal = "動物";
  expect(animal).toBe("動物");
  let dog;
  expect(dog).toBe = undefined;
  dog = "犬";
  expect(dog).toBe = "犬";
});
