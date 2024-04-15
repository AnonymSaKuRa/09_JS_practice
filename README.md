# 09_JS_practice
 2024前期「JavaScript」リポジトリ


## オブジェクトとクラス

- 4月15日（月）

### オブジェクト復習
```js
 // オブジェクトの定義
 const parson = {
     // プロパティ
     name: "", // ""は空文字といってデータが何もない文字列を意味しています。
     age: 0, // メソッド
     information: function () {
         return "名前：" + this.name + "\n年齢：" + this.age;
     },
 };

 // プロパティの値を代入
 parson.name = "山田太郎";
 parson.age = 18; // 情報の開示

 const info = parson.information();
 console.log(info);

 const dict = { apple: "りんご", banana: "バナナ", orange: "オレンジ" };
 console.log(dict.apple);
 console.log(dict["apple"]); // ブラケットの場合は、文字列にする

 // 内容を変更
 dict.apple = "林檎";

 // ぶどうを加える
 dict.grape = "ぶどう"; // 無いキーを設定すると新しく追加される

 // オブジェクトの要素を削除
 delete dict.orange;
 console.log(dict);
```

### インスタントラーメン
```js
const demaeicchou = {
    name: "出前一丁",
    soup: "醤油",
    preview: function () {
        const area = document.querySelector("#result");
        area.innerHTML = `${this.name}は、${this.soup}ラーメンです。`;
    },
};

demaeicchou.soup = "とんこつ";
demaeicchou.preview = function () {
    const area = document.querySelector("#result");
    area.innerHTML = `${this.name}は、${this.soup}ラーメンではありません。`;
};

delete demaeicchou.name;
demaeicchou.preview();
// クラスを定義
class InstantNoodle {
    // 静的プロパティ
    static TYPE = "インスタントラーメン";
    // 静的メソッド
    static making() {
        return `<p>${InstantNoodle.TYPE}は、鍋で作ります。</p>`;
    };
    // コンストラクタ
    constructor(ramen, taste) {
        this.name = ramen;
        this.soup = taste;
    }
    descript() {
        return `<P>${this.name}は、${this.soup}味です。</p>`;
    }
}

// インスタンス化
const ramens = []
ramens.push(new InstantNoodle("出前一丁", "醤油"));
ramens.push(new InstantNoodle("サッポロ一番塩", "塩"));
ramens.push(new InstantNoodle("うまかっちゃん", "とんこつ"));
console.log(ramens);

// 「ramen」の中に「ramens」の要素が入る
ramens.forEach((ramen) => {
    document.body.insertAdjacentHTML("beforeend", ramen.descript());
})

document.body.insertAdjacentHTML("beforeend", InstantNoodle.making());
console.log(InstantNoodle.TYPE);
```

### ちいかわ
```js
class Chikawa {
  constructor(story, title, image, id) {
    this.story = story;
    this.title = title;
    this.image = image;
    this.id = id;
  }
  createMarkup() {
    return `
    <dl>
      <dt><span>第${this.story}話</span>${this.story}</dt>
      <dd>
        <a href="https://www.youtube.com/watch?v=${this.id}">
          <img src="./images/${this.image}" alt="${this.title}" />
        </a>
      </dd>
    </dl>`;
  }
};

const chikawasContents = [];
const container = document.querySelector(".contents");

for (let i = 0; i < chiikawas.length; i++) {
  chikawasContents.push(new Chikawa(chiikawas[i].story, chiikawas[i].title, chiikawas[i].image, chiikawas[i].id));
  container.insertAdjacentHTML("beforeend", chikawasContents[i].createMarkup());
}

console.log(chikawasContents);
```