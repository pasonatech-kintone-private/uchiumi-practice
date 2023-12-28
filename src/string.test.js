test("改行がある文字列の練習", () => {
  const str1 = "てすと\nということが\nできてます";
  const str2 = `てすと
ということが
できてます`;
  console.log(str1);
  console.log(str2);
  expect(str1).toBe(str2);
});

test("テンプレートリテラルの練習", () => {
  const str1 = "りんご";
  const str2 = `私の好きな食べ物は${str1}です
ホントに？`;
  console.log(str1);
  console.log(str2);
  expect(str2).toBe("私の好きな食べ物はりんごです\nホントに？");
  expect(str2).toBe(`私の好きな食べ物はりんごです
ホントに？`);
  expect(str2).toBe(`私の好きな食べ物はりんごです\nホントに？`);
  expect(`1+1=${1 + 1}`).toBe("1+1=2");
  expect(`1+1=${str1}`).toBe("1+1=りんご");
});
