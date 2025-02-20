test("Practice function", () => {
    function createName(name,suffix) {
        const resultName = name + suffix;
        return resultName;
    }

    expect(createName("山田","さん")).toBe("山田さん");
    expect(createName("山田")).toBe("山田undefined");
    expect(createName("山田",0)).toBe("山田0");
    expect(createName("山田","")).toBe("山田");
    expect(createName("山田",)).toBe("山田undefined");

    function createName1(name,suffix = "さん") {
        const resultName = name + suffix;
        return resultName;
    }
    expect(createName1("山田","くん")).toBe("山田くん");
    expect(createName1("山田")).toBe("山田さん");
    expect(createName1("山田",)).toBe("山田さん");
    expect(createName1("山田","")).toBe("山田");
    expect(createName1("山田",0)).toBe("山田0");
    expect(createName1("山田",undefined)).toBe("山田さん");
    expect(createName1("山田",null)).toBe("山田null");
    expect(createName1(1,2)).toBe(3);
    expect(createName1(1,undefined)).toBe("1さん");
    expect(createName1(1,null)).toBe(1);
  });
  test("Practice function", () => {
    function fn(x = "test") {
        return x;
    };
    expect(fn()).toBe("test");
    expect(fn(1)).toBe(1);
    expect(fn(undefined)).tobeundefined;
    expect(fn("aaa")).toBe("aaa");
  });

