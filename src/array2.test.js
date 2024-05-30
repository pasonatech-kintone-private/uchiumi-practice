test("配列(map)の練習", () => {
  const names = ["山田", "田中", "鈴木"];
  const names2 = names.map((name,index,names) => {
    return name + "さん";
  })
  expect(names2).toStrictEqual(["山田さん", "田中さん", "鈴木さん"])
});
