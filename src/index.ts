const textToImage = require("text-to-image");
const path = require("path");

//必要画像数
const imgNumber = 10;

for (let i = 1; i <= imgNumber; i++) {
  textToImage.generate(`No${i}`, {
    debug: true,
    customHeight: 400, //高さ
    maxWidth: 400, //幅
    fontSize: 30, //文字の大きさ
    textAlign: "center", //行の並び
    verticalAlign: "center", //列の並び
    debugFilename: path.join("src", "img", `No${i}.png`), //ファイル保存設定
  });
}
