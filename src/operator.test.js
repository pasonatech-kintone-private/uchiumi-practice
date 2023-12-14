test("+=の練習", () => {
  let num = 1;
  num += 10;
  expect(num).toBe(11);
});
test("分割代入の練習(配列)", () => {
  const array = ["test", 1, "abc"];
  const [a, b, c] = array;
  const [d, e, f] = array;
  expect(a).toBe("test");
  expect(b).toBe(1);
  expect(c).toBe("abc");
  expect(d).toBe("test");
  expect(e).toBe(1);
  expect(f).toBe("abc");
});
test("分割代入の練習(object)", () => {
  const obj = {
    "color": "red",
    "size": "Large"
  };
  //変数目例はオブジェクトの属性名と同じ必要がある
  //全部の属性を指定しなくても指定できる
  //  const {color} = obj; 1つだけ指定したら指定したものだけ変数宣言される
  const { color, size } = obj;
  expect(color).toBe("red");
  expect(size).toBe("Large");
});
test("三項演算子の練習", () => {
  const A = true ? "A" : "B";
  const B = false ? "A" : "B";
  const C = A.length > 0 ? "空文字でない" : "空文字です";
  expect(A).toBe("A");
  expect(B).toBe("B");
  expect(C).toBe("空文字でない");
});

