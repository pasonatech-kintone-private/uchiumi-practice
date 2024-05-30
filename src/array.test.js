test("配列(indexOf)の練習", () => {
    const numbers = [1,2,3,4]
    ;
    expect(numbers.indexOf(1)).toBe(0);
    expect(numbers.indexOf(3)).toBe(2);
    expect(numbers.indexOf(5)).toBe(-1);
  });

  test("配列(findIndex)の練習", () => {
    const numbers = [1,2,3,4]
    ;
    expect(numbers.indexOf(1)).toBe(0);
    expect(numbers.indexOf(3)).toBe(2);
    expect(numbers.indexOf(5)).toBe(-1);
  });

  test("配列(find)の練習", () => {
    const numbers = [1,2,3,4]
    ;
    expect(numbers.indexOf(1)).toBe(0);
    expect(numbers.indexOf(3)).toBe(2);
    expect(numbers.indexOf(5)).toBe(-1);
  });

  test("配列(includes,some)の練習", () => {
    const numbers = [1,2,3,4];
    const animals = [
        {"animal":"cat"},
        {"animal":"dog"},
        {"animal":"pig"}
    ];
    expect(animals.some((animal)=>{
        return animal.animal === "cat"
    })).toBe(true);
  });



