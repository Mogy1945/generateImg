const textToImage = require("text-to-image");
const path = require("path");

//必要画像数
const imgNumber = 10;

for (let i = 0; i < imgNumber; i++) {
  textToImage.generate(`${i}`, {
    debug: true,
    customHeight: 100, //高さ
    maxWidth: 100, //幅
    fontSize: 20, //文字の大きさ
    textAlign: "center", //行の並び
    verticalAlign: "center", //列の並び
    debugFilename: path.join("src", "img", `${i}.png`), //ファイル保存設定
  });
}
