const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const a = 1;

test("someとfilterの練習", () => {
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];

  //偶数のテスト
  expect(array.some((number) => number % 2 === 0)).toBe(true);
  expect(array1.some((number) => number % 2 === 0)).toBe(false);
  expect(array2.some((number) => number % 2 === 0)).toBe(true);

  expect(array.filter((number) => number % 2 === 0)).toStrictEqual([2, 4]);
  expect(array1.filter((number) => number % 2 === 0)).toStrictEqual([]);
  expect(array2.filter((number) => number % 2 === 0)).toStrictEqual([
    2, 4, 6, 8,
  ]);

  //奇数のテスト
  expect(array.some((number) => number % 2 === 1)).toBe(true);
  expect(array1.some((number) => number % 2 === 1)).toBe(true);
  expect(array2.some((number) => number % 2 === 1)).toBe(false);

  expect(array.filter((number) => number % 2 === 1)).toStrictEqual([1, 3, 5]);
  expect(array1.filter((number) => number % 2 === 1)).toStrictEqual([
    1, 3, 5, 7,
  ]);
  expect(array2.filter((number) => number % 2 === 1)).toStrictEqual([]);
});

test("indexOfの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];

  //テスト
  expect(array.indexOf(obj)).toStrictEqual(3);
  expect(array.indexOf({ test: "中身" })).toStrictEqual(-1);
});

test("findIndexの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];

  //テスト
  expect(
    array.findIndex((o) => {
      return o.test === "中身";
    })
  ).toStrictEqual(3);
  expect(
    array.find((o) => {
      return o.test === "中身";
    })
  ).toStrictEqual(obj);
  expect(
    array.find((o) => {
      return false;
    })
  ).toStrictEqual(undefined);
});

test("sliceの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];

  //テスト
  expect(array.slice(0, 3)).toStrictEqual([1, 2, 3]);
  expect(array.slice(-1)).toStrictEqual([obj]);
});

test("InCludesの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];

  //テスト
  expect(array.includes(obj)).toStrictEqual(true);
  expect(array.includes("abc")).toStrictEqual(false);
  expect(array.includes("中身")).toStrictEqual(false);
});

test("someの練習", () => {
  const obj = { test: "中身" };
  const array = [1, 2, 3, obj];

  //テスト
  expect(
    array.some((o) => {
      return o.test === "中身";
    })
  ).toStrictEqual(true);
});

test("push,concat,flatの練習", () => {
  const array = [];
  const array1 = [];
  array.push([1, 2, 3]);
  array1.push(1, 2, 3);

  //テスト
  expect(array).toStrictEqual([[1, 2, 3]]);
  //console.log(array);
  //console.log(array1);
  //const newArray1 = array1.concat(array);
  //console.log(newArray1);
  const newArray = array.concat([4, 5, 6]);
  // console.log(newArray);
  expect(array).toStrictEqual([[1, 2, 3]]);
  expect(newArray).toStrictEqual([[1, 2, 3], 4, 5, 6]);
  expect(newArray.flat()).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("mapとメソッドチェーンの練習", () => {
  const array = ["A", "B", "C"];
  const obj = [{ value: "A" }, { value: "B" }, { value: "C" }];

  expect(array.map((value) => ({ value }))).toStrictEqual(obj);
  expect(array.map((asc) => asc.toLocaleLowerCase())).toStrictEqual([
    "a",
    "b",
    "c",
  ]);
  expect(
    array.map((asc) => asc.toLocaleLowerCase()).map((value) => ({ value }))
  ).toStrictEqual([{ value: "a" }, { value: "b" }, { value: "c" }]);
});

test("正規表現(真偽値)の練習", () => {
  const phoneNum = ["012-3456-7890", "000-0000-0000", "999-9999-9999"];
  const notphoneNum = [
    "a123-3456-7890",
    "123-3456-7890a",
    "a23-3456-7890",
    "123-4567",
  ];
  const pattern = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
  for (const test of phoneNum) {
    expect(pattern.test(test)).toStrictEqual(true);
  }

  for (const test of notphoneNum) {
    expect(pattern.test(test)).toStrictEqual(false);
  }
});
test("replace,replaceallの練習", () => {
  const phoneNum = "012-3456-7890";
  const isNumPattern = /[0-9]/;
  const isNumPatternGlobal = /[0-9]/g;
  const pattern = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
  expect(phoneNum.replace("0","a")).toStrictEqual("a12-3456-7890");
  expect(phoneNum.replaceAll("0","a")).toStrictEqual("a12-3456-789a");
  expect(phoneNum.replace(pattern,"a")).toStrictEqual("a");
  expect(phoneNum.replace(isNumPattern,"a")).toStrictEqual("a12-3456-7890");
  expect(phoneNum.replaceAll(isNumPatternGlobal,"a")).toStrictEqual("aaa-aaaa-aaaa");
});
