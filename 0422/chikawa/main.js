import { Chiikawa } from "./class.js";

// story:話, title:題名, image:サムネイル名, id:YouTube動画id
const chiikawas = [
    { story: 1, title: "かためのプリン／ホットケーキ", image: "chiikawa-001.webp", id: "pbQQAwSQUX4" },
    { story: 2, title: "スフィンクス／ほんものだ", image: "chiikawa-002.webp", id: "i6d3K6ln-d4" },
    { story: 3, title: "イカ／パイシチュー", image: "chiikawa-003.webp", id: "a7cwqxmn7rY" },
    { story: 4, title: "ブロッコリー／ピザまん", image: "chiikawa-004.webp", id: "l9IAr7WY-Xk" },
    { story: 5, title: "チャリメラ／チャルメラ", image: "chiikawa-005.webp", id: "cE8wVmwY7VY" },
];

//DOMの取得
const container = document.querySelector(".contents");

//インスタンスの生成
const chiikawaContents = [];
chiikawas.forEach((chiikawa) => {
    const instance = new Chiikawa(chiikawa.story, chiikawa.title, chiikawa.image, chiikawa.id);
    chiikawaContents.push(instance);
});

//DOMに追加
chiikawaContents.forEach((chiikawa) => {
    container.insertAdjacentHTML("beforeend", chiikawa.createMarkup());
});
