//1.並列実行
const response1 = fetch("http://google.com/");
const response2 = fetch("http://www.yahoo.co.jp/");
const response3 = fetch("https://kintone.cybozu.co.jp/");
response1.then((resp) => {
  resp.ok;
  console.log("ok1:" + resp.ok);
});
response2.then((resp) => {
  resp.ok;
  console.log("ok2" + resp.ok);
});
response3.then((resp) => {
  resp.ok;
  console.log("ok3:" + resp.ok);
});
