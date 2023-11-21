//2.直列実行
const response4 = fetch("http://google.com/");
const response5 = fetch("http://www.yahoo.co.jp/");
const response6 = fetch("https://kintone.cybozu.co.jp/");
response4
  .then((resp) => {
    resp.ok;
    console.log("ok4:" + resp.ok);
  })
  .then(
    response5.then((resp) => {
      resp.ok;
      console.log("ok5" + resp.ok);
    })
  )
  .then(
    response6.then((resp) => {
      resp.ok;
      console.log("ok6:" + resp.ok);
    })
  );
