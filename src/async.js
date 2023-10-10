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
