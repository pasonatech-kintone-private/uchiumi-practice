//2.直列実行
const response4 = fetch("http://google.com/");
response4
  .then((resp) => {
    resp.ok;
    console.log("ok4:" + resp.ok);
    const response5 = fetch("http://www.yahoo.co.jp/");
    return response5;
  })
  .then((resp) => {
    resp.ok;
    console.log("ok5" + resp.ok);
    const response6 = fetch("https://kintone.cybozu.co.jp/");
    return response6;
  })
  .then((resp) => {
    resp.ok;
    console.log("ok6:" + resp.ok);
  });
