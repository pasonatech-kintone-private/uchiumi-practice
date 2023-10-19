console.log("a");

setTimeout(() => {
  console.log("1秒後に実行");
}, 1000);

console.log("b");

function asyncPromiseTask() {
  return new Promise((resolve, reject) => {
    // さまざまな非同期処理を行う
    // 非同期処理に成功した場合は、resolveを呼ぶ
    //resolve("できた");
    // 非同期処理に失敗した場合は、rejectを呼ぶ
    reject(new Error("だめ"));
  });
}
// asyncPromiseTask関数の非同期処理が成功した時、失敗した時に呼ばれる処理をコールバック関数として登録する
asyncPromiseTask()
  .then((num) => {
    // 非同期処理が成功したときの処理
    console.log(num);
  })
  .catch((error) => {
    // 非同期処理が失敗したときの処理
    console.log(error);
  });

  //1.並列実行
  const response1 = fetch("http://google.com/");
  const response2 = fetch("http://www.yahoo.co.jp/");
  const response3 = fetch("https://kintone.cybozu.co.jp/");
response1.then((resp)=> {
    resp.ok
    console.log("ok1:" + resp.ok);
}
);
response2.then((resp)=> {
  resp.ok
  console.log("ok2" + resp.ok);
}
);
response3.then((resp)=> {
  resp.ok
  console.log("ok3:" + resp.ok);
}
)

 //2.直列実行
 const response4 = fetch("http://google.com/");
 const response5 = fetch("http://www.yahoo.co.jp/");
 const response6 = fetch("https://kintone.cybozu.co.jp/");
response4.then((resp)=> {
   resp.ok
   console.log("ok4:" + resp.ok);
}
).then(
response5.then((resp)=> {
 resp.ok
 console.log("ok5" + resp.ok);
}
)
).then(
response6.then((resp)=> {
 resp.ok
 console.log("ok6:" + resp.ok);
}
))



