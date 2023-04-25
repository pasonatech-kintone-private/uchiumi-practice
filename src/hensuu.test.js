test("constの練習", () => {
  const booktitle = "本";
  const bookprice = 3000;
  expect(booktitle).toBe("本");
  expect(bookprice).toBe(3000);
});

test("constの練習", () => {
  const booktitle = "書籍",
    bookprice = 2000;
  //    const bookprice = 3000;
  expect(booktitle).toBe("書籍");
  expect(bookprice).toBe(2000);
});

test("constの練習", () => {
  const booktitle = "本";
  //booktitle = "書籍";
  expect(booktitle).toBe("本");
  //    expect(bookprice).toBe(3000);
});
