import type { JLPTLevel, JLPTSection, TestQuestion } from "@/models/Test";

export interface JLPTTestDefinition {
  level: JLPTLevel;
  section: JLPTSection;
  testNumber: number;
  questions: TestQuestion[];
}

export const jlptTests: JLPTTestDefinition[] = [
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 1,
    questions: [
      {
        question: "_______ 、えいがをみにいきませんか？",
        options: ["ゆうべ", "きのう", "あした", "おととい"],
        correctIndex: 2,
      },
      {
        question: "わたしはいつも　_______ をききながらべんきょうします。",
        options: ["ぺん", "ラジオ", "テーブル", "ストーブ"],
        correctIndex: 1,
      },
      {
        question: "わたしのすきなのみものは　_______ です。",
        options: ["おかし", "こうちゃ", "みかん", "ねこ"],
        correctIndex: 1,
      },
      {
        question: "わたしはじてんしゃを　_______ もっています。",
        options: ["にだい", "にさつ", "にほん", "にまい"],
        correctIndex: 0,
      },
      {
        question: "この　_______ じしょはだれのですか？",
        options: ["ほそい", "まるい", "みじかい", "ちいさい"],
        correctIndex: 3,
      },
      {
        question: "ちちはことし80さいですが、_______ です。",
        options: ["げんき", "けっこう", "ざんねん", "かんたん"],
        correctIndex: 0,
      },
      {
        question: "あめがふっています。みんなかさを　_______ います。",
        options: ["あけて", "あげて", "さして", "つけて"],
        correctIndex: 2,
      },
      {
        question:
          "がくせいたちはきょうしつでやまだせんせいににほんごを　_______ います。",
        options: ["ならって", "つくって", "おぼえて", "べんきょうして"],
        correctIndex: 0,
      },
      {
        question: "やまださんはあかいぼうしを　_______ います。",
        options: ["きて", "しめて", "はいって", "かぶって"],
        correctIndex: 3,
      },
      {
        question: "やまださんはたいていおふろにはいって、_______ ねます。",
        options: ["ちょうど", "すぐに", "まだ", "だんだん"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 2,
    questions: [
      {
        question: "なのかのつぎは　_______ です。",
        options: ["とおか", "ようか", "むいか", "よっか"],
        correctIndex: 1,
      },
      {
        question: "わたしはゆうべともだちに　_______ をかきました。",
        options: ["ふうとう", "きって", "でんわ", "てがみ"],
        correctIndex: 3,
      },
      {
        question: "わたしのすきなスポーツは　_______ です。",
        options: ["ピアノ", "レコード", "スキー", "テーブル"],
        correctIndex: 2,
      },
      {
        question: "わたしのうちにねこが　_______ います。",
        options: ["ふたつ", "ふたり", "にだい", "にひき"],
        correctIndex: 3,
      },
      {
        question: "このみちは　_______ です。",
        options: ["わかい", "うすい", "せまい", "おもい"],
        correctIndex: 2,
      },
      {
        question: "さかながかわを　_______ います。",
        options: ["およいで", "はしって", "あるいて", "とんで"],
        correctIndex: 0,
      },
      {
        question: "きのうのパーテイーでやまださんに　_______ あいました。",
        options: ["はじめ", "はじめて", "はじめの", "はじめから"],
        correctIndex: 1,
      },
      {
        question: "たなかさんはきょうはあおいズボンを　_______ います。",
        options: ["かぶって", "はいて", "きて", "かけて"],
        correctIndex: 1,
      },
      {
        question: "えきででんしゃに　_______ ます。",
        options: ["のり", "とり", "すわり", "のぼり"],
        correctIndex: 0,
      },
      {
        question: "まちださんはせが　_______ です。",
        options: ["とおい", "ながい", "おもい", "たかい"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 3,
    questions: [
      {
        question: "わたしはよるねるまえにはを _______ 。",
        options: ["あらいます", "つかいます", "あびます", "みがきます"],
        correctIndex: 3,
      },
      {
        question: "つぎのかどをみぎに _______ 。",
        options: ["まがります", "わたります", "のぼります", "とまります"],
        correctIndex: 0,
      },
      {
        question: "わたしの　いえは　えきの　ちかくです。とても _______ です。",
        options: ["べんり", "ひま", "じょうず", "いろいろ"],
        correctIndex: 0,
      },
      {
        question: "かぜを _______ 、かいしゃをやすみました。",
        options: ["やって", "なって", "ふいて", "ひいて"],
        correctIndex: 3,
      },
      {
        question: "まいつきほんを _______ よみます。",
        options: ["さんさつ", "さんだい", "さんぼん", "さんまい"],
        correctIndex: 0,
      },
      {
        question: "きのう _______ にほんのえいがをみました。",
        options: ["どきどき", "もちろん", "はじめに", "はじめて"],
        correctIndex: 3,
      },
      {
        question: "きのうかぞくのしゃしんを _______ 。",
        options: ["とりました", "つくりました", "かきました", "しました"],
        correctIndex: 0,
      },
      {
        question: "_______ をしめてかいしゃへいきます。",
        options: ["セーター", "シャツ", "ズボン", "ネクタイ"],
        correctIndex: 3,
      },
      {
        question: "それはとても _______ もんだいです。",
        options: ["じゅうような", "いろいろな", "じょうぶな", "にぎやかな"],
        correctIndex: 0,
      },
      {
        question: "なつはまいにち　_______ へおよぎにいきます。",
        options: ["えき", "みせ", "プール", "テーブル"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 4,
    questions: [
      {
        question: "たなかさんはべんきょうをして、_______ いしゃになりました。",
        options: ["りっぱな", "きれいな", "まっすぐな", "だいじょうぶな"],
        correctIndex: 0,
      },
      {
        question: "あのおおきいはしを _______ 、みぎにまがってください。",
        options: ["あがって", "あそんで", "あるいて", "わたって"],
        correctIndex: 3,
      },
      {
        question:
          "このケーキにはさとうがたくさんはいっています。とても _______ です。",
        options: ["からい", "あまい", "まるい", "わかい"],
        correctIndex: 1,
      },
      {
        question: "すずきさんのじてんしゃは _______ きれいです。",
        options: ["いそがしくて", "わかくて", "あたらしくて", "あつくて"],
        correctIndex: 2,
      },
      {
        question: "「そろそろ、_______ 」と　いってせんせいのへやをでました。",
        options: [
          "しつれいしません",
          "しつれいします",
          "しつれいしています",
          "しつれいしました",
        ],
        correctIndex: 1,
      },
      {
        question: "きょうはたくさんしごとをしたから、とても _______ 。",
        options: [
          "つかれました",
          "つくりました",
          "つかいました",
          "つとめました",
        ],
        correctIndex: 0,
      },
      {
        question: "ラジオをけすときは、このボタンを _______ ください。",
        options: ["おして", "きって", "つけて", "さして"],
        correctIndex: 0,
      },
      {
        question: "わたしは _______ あさ７じにおきます。",
        options: ["たいてい", "たいへん", "だいぶ", "だんだん"],
        correctIndex: 0,
      },
      {
        question: "えいがかんのまえにみせが _______ ならんでいます。",
        options: ["ひじめて", "たいへん", "たくさん", "おおぜい"],
        correctIndex: 2,
      },
      {
        question: "くるまでうちからびょういんまで２０ぷん _______ 。",
        options: ["かけます", "かかります", "いります", "います"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 5,
    questions: [
      {
        question:
          "このぎゅうにゅうはれいぞこにいれてありました。とても _______ 。",
        options: ["ひくいです", "つめたいです", "さむいです", "すずしいです"],
        correctIndex: 1,
      },
      {
        question: "ゆうびんきょくへいって、はがきと　_______ をかいます。",
        options: ["きっぷ", "きって", "ざっし", "しんぶん"],
        correctIndex: 1,
      },
      {
        question: "コーヒーにさとうをいれて _______ してください。",
        options: ["あまく", "からく", "つよく", "あつく"],
        correctIndex: 0,
      },
      {
        question: "きょうは _______ がわるいから、かさをもっていきます。",
        options: ["そら", "くもり", "かぜ", "てんき"],
        correctIndex: 3,
      },
      {
        question: "ひらがなはぜんぶ _______ が、かたかなはまだです。",
        options: ["しりました", "よびました", "おぼえました", "ちがいました"],
        correctIndex: 2,
      },
      {
        question: "おとうさんのおとこのきょうだいは　_______ です。",
        options: ["おじさん", "おばさん", "おじいさん", "おばあさん"],
        correctIndex: 0,
      },
      {
        question: "わたしはいつもよる _______ ねます。",
        options: ["ちかく", "ほそく", "はやく", "おもく"],
        correctIndex: 2,
      },
      {
        question: "_______ 、そのニュースをしりました。",
        options: [
          "ちじをみて",
          "きっぷをかって",
          "じしょをひいて",
          "しんぶんをよんで",
        ],
        correctIndex: 3,
      },
      {
        question: "「はじめまして。どうぞよろしく。」",
        options: [
          "「　_______　。」",
          "おげんきで",
          "こちらこそ",
          "しつれいしました",
          "すみませんでした",
        ],
        correctIndex: 1,
      },
      {
        question:
          "わたしは　_______ がおおきいです。ちょうどいいくつがありません。",
        options: ["め", "あし", "みみ", "からだ"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 6,
    questions: [
      {
        question: "このくつしたはうすいですが、_______ です。",
        options: ["かんたん", "じょうぶ", "げんき", "じょうず"],
        correctIndex: 1,
      },
      {
        question: "いっしゅかんに _______ テニスを　します。",
        options: ["さんかい", "さんばん", "さんがい", "さんぼん"],
        correctIndex: 0,
      },
      {
        question: "あの _______ をわたって、だいがくへいきます。",
        options: ["もん", "まど", "はし", "やま"],
        correctIndex: 2,
      },
      {
        question: "このほんをたむらさんに _______ ください。",
        options: ["みて", "かいて", "かえって", "わたして"],
        correctIndex: 3,
      },
      {
        question: "ほんだなにほんを　_______ 。",
        options: [
          "ならいましょう",
          "ならしましょう",
          "ならびましょう",
          "ならべましょう",
        ],
        correctIndex: 3,
      },
      {
        question: "あのレストランのりょうりはとても　_______ ですよ。",
        options: ["へた", "おいしい", "にぎやか", "じょうず"],
        correctIndex: 1,
      },
      {
        question: "このみちを _______ びょういんへいきます。",
        options: ["あるいて", "だして", "およいで", "とんで"],
        correctIndex: 0,
      },
      {
        question:
          "いもうとは　きょねん _______ 。　ことし、いっさいに　なります。",
        options: [
          "うまれました",
          "おきなました",
          "はじまりました",
          "つきました",
        ],
        correctIndex: 0,
      },
      {
        question: "やまだ「このほん、どうもありがとうございました。」",
        options: [
          "たなか「いいえ、 _______ 。",
          "どういたしまして",
          "ごちそうさまでした",
          "おねがいします",
          "ごめんなさい",
        ],
        correctIndex: 0,
      },
      {
        question: "たくさんありますから、_______ たべてください。",
        options: ["もう", "よく", "もっと", "とても"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 7,
    questions: [
      {
        question: "_______ はどうぶつです。",
        options: ["さくら", "てんぶら", "ひこうき", "いぬ"],
        correctIndex: 3,
      },
      {
        question: "ここはとしょかんです。 _______ べんきょうしてください。",
        options: ["べんりに", "しずかに", "にぎやかに", "かんたんに"],
        correctIndex: 1,
      },
      {
        question: "やまだ「はじめまして。どうぞよろしく。」",
        options: [
          "たなか「 _______ 。どうぞよろしく。」",
          "ごめんください",
          "さようなら",
          "こちらこそ",
          "おやすみなさい",
        ],
        correctIndex: 2,
      },
      {
        question: "さとうさんは _______ こないでしょう。",
        options: ["ちょうど", "すこし", "たぶん", "だんだん"],
        correctIndex: 2,
      },
      {
        question: "さむくなったから、_______ をつけてください。",
        options: ["スリッパ", "コート", "テレビ", "ストーブ"],
        correctIndex: 3,
      },
      {
        question: "ふうとうにきってを _______ 。",
        options: ["とります", "かります", "うります", "はります"],
        correctIndex: 3,
      },
      {
        question: "おふろに　_______ からだをあらいました。",
        options: ["あびて", "とって", "とおって", "はいって"],
        correctIndex: 3,
      },
      {
        question: "_______ てでごはんをたべないでください。",
        options: ["まずい", "わるい", "きたない", "あぶない"],
        correctIndex: 2,
      },
      {
        question: "いそがしくてほんをよむ　_______ がありません。",
        options: ["ひま", "しごと", "つくえ", "やすみ"],
        correctIndex: 0,
      },
      {
        question: "すみません。あのおさらを _______ ください。",
        options: ["まって", "すんで", "とって", "しめて"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 8,
    questions: [
      {
        question: "リーさんはにほんごをならっています。",
        options: [
          "リーさんはにほんごをいれています。",
          "リーさんはにほんごをおしえています。",
          "リーさんはにほんごをやめています。",
          "リーさんはにほんごをべんきょうしています。",
        ],
        correctIndex: 3,
      },
      {
        question: "おととしりょこうしました。",
        options: [
          "りょこうはにねんまえです。",
          "りょこうはふつかまえです。",
          "りょこうはいちにちまえです。",
          "りょこうはいちねんまえです。",
        ],
        correctIndex: 0,
      },
      {
        question: "やまださんはすずきさんにえいごをおしえました。",
        options: [
          "すずきさんはやまださんにえいごをみせました。",
          "やまださんはすずきさんにえいごををみせました。",
          "すずきさんはやまださんにえいごをならいました。",
          "やまださんはすずきさんにえいごをならいました。",
        ],
        correctIndex: 2,
      },
      {
        question: "じしょをがっこうにわすれてかえりました。",
        options: [
          "じしょはいえにあります。",
          "じしょはがっこうにありません。",
          "いまじしょをもっていません。",
          "いまじしょをもっています。",
        ],
        correctIndex: 2,
      },
      {
        question: "きのうせんたくしました。",
        options: [
          "きのうへやにきれいにしました。",
          "きのうようふくをあらいました。",
          "きのうりょうりをつくりました。",
          "きのうほんをかいました。",
        ],
        correctIndex: 1,
      },
      {
        question: "わたしのうちにはペットがいます。",
        options: [
          "わたしのうちにはとりがいます。",
          "わたしのうちにはいしゃがいます。",
          "わたしのうちにはかぞくがいます。",
          "わたしのうちにはりょうしんがいます。",
        ],
        correctIndex: 0,
      },
      {
        question: "このホテルはゆうめいです。",
        options: [
          "みんなこのホテルをしりません。",
          "みんなこのホテルをすんでいます。",
          "みんなこのホテルをしっています。",
          "みんなこのホテルをすんでいません。",
        ],
        correctIndex: 2,
      },
      {
        question: "このじしょをかしてください。",
        options: [
          "このじしょをかえしたいです。",
          "このじしょをかえりたいです。",
          "このじしょをかりたいです。",
          "このじしょをかいたいです。",
        ],
        correctIndex: 2,
      },
      {
        question: "まいばん１２じごろやすみます。",
        options: [
          "まいばん１２じごろねます。",
          "まいばん１２じごろおきます。",
          "まいばん１２じごろでます。",
          "まいばん１２じごろさんぽします。",
        ],
        correctIndex: 0,
      },
      {
        question: "たなか：「あのひとはどなたですか。」",
        options: [
          "たなかさんはあのひとのいえがわかりません。",
          "たなかさんはあのひとのなまえがわかりません。",
          "たなかさんはあのひとのしごとがわかりません。",
          "たなかさんはあのひとのくにがわかりません。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 9,
    questions: [
      {
        question: "友だちはしんせつですが、いつも　_______ です。",
        options: ["うれしい", "いそがしい", "むずかしい", "やさしい"],
        correctIndex: 1,
      },
      {
        question: "インドの　_______　はどうですか？おいしいですか？",
        options: ["かいもの", "しょくぶつ", "たてもの", "たべもの"],
        correctIndex: 3,
      },
      {
        question:
          "「とうきょうまでのきっぷはいくらですか。」「＿＿＿＿ は２００えんで、こどもは１００えんです。」",
        options: ["おとこ", "おとな", "おんな", "おとうと"],
        correctIndex: 1,
      },
      {
        question: "_______　のちょうしがわるいですか？",
        options: ["あたま", "げんき", "じぶん", "からだ"],
        correctIndex: 3,
      },
      {
        question:
          "このおかしにはさとうがたくさんはいっています。とても　_______　です。",
        options: ["あまい", "あかい", "あおい", "あつい"],
        correctIndex: 0,
      },
      {
        question: "_______ までべんきょうしますか？",
        options: ["なに", "なんかい", "なんじ", "なんにん"],
        correctIndex: 2,
      },
      {
        question: "すぐわたしの _______ へ来てください。",
        options: ["いえ", "かばん", "えんぴつ", "ベア"],
        correctIndex: 0,
      },
      {
        question: "きょうはとてもつかれました。いえにかえって _______ ねます。",
        options: ["ほんとう", "すぐに", "たぶん", "ちょうど"],
        correctIndex: 1,
      },
      {
        question: "_______　はサッカーがだいすきです。",
        options: ["いす", "あに", "ねこ", "りんご"],
        correctIndex: 1,
      },
      {
        question: "こどもたちはかわで　_______　います。",
        options: ["あるいて", "はしって", "およいで", "すわって"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "vocabulary",
    testNumber: 10,
    questions: [
      {
        question: "_______ ぼうしをかいました。",
        options: ["ひろい", "せまい", "おもい", "あおい"],
        correctIndex: 3,
      },
      {
        question: "_______　に入ろうとおもっています。",
        options: ["だいがく", "かばん", "まど", "おととし"],
        correctIndex: 0,
      },
      {
        question:
          "あなたがここにきてから、わたしのしごとが　_______　いくようになったんですよ。",
        options: ["うまく", "あまく", "おもく", "やすく"],
        correctIndex: 0,
      },
      {
        question:
          "「ゆうびんきょくはどこですか。」「このみちを _______ いってください。すぐそこですよ。」",
        options: ["まえに", "ちょうど", "はじめに", "まっすぐ"],
        correctIndex: 3,
      },
      {
        question: "わたしはコーヒーにさとうを _______ のみます。",
        options: ["いれて", "いって", "はいて", "はいって"],
        correctIndex: 0,
      },
      {
        question: "きょうはつよいかぜが　_______　います。",
        options: ["はいて", "ふいて", "ふって", "ひいて"],
        correctIndex: 1,
      },
      {
        question: "しけんはおわりました。きょうしつを _______ ください。",
        options: ["すわって", "でて", "かえって", "べんきょうして"],
        correctIndex: 1,
      },
      {
        question: "うちからかいしゃまであるいて１５ふん　_______　。",
        options: ["いります", "あります", "かけます", "かかります"],
        correctIndex: 3,
      },
      {
        question: "いえにはいぬが　_______　います。",
        options: ["にだい", "にひき", "にほん", "にこ"],
        correctIndex: 1,
      },
      {
        question: "もう５じですね。_______ 失礼します。",
        options: ["そろそろ", "もう", "ちょっと", "すぐ"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 1,
    questions: [
      {
        question: "まいにちしんぶん　_______ 読みます。",
        options: ["へ", "を", "に", "が"],
        correctIndex: 1,
      },
      {
        question: "田中さんは　_______ 来ていませんよ。",
        options: ["もう", "だけ", "まだ", "まで"],
        correctIndex: 2,
      },
      {
        question: "ナイフ　_______ パンをきりました。",
        options: ["で", "を", "に", "が"],
        correctIndex: 0,
      },
      {
        question: "家にかえってねたほう　_______ いいですよ。",
        options: ["と", "に", "が", "は"],
        correctIndex: 2,
      },
      {
        question: "お母さん、もうあそびに　_______ もいいですか？",
        options: ["行く", "行って", "行った", "行っている"],
        correctIndex: 1,
      },
      {
        question: "すいようびには日本語のテスト　_______ 。",
        options: ["はいます", "はあります", "がいます", "があります"],
        correctIndex: 3,
      },
      {
        question: "あなたのかみは　_______ よ。",
        options: [
          "長ってすぎます",
          "長くすぎます",
          "長いすぎます",
          "長すぎます",
        ],
        correctIndex: 3,
      },
      {
        question: "わたしはけいかんに　_______ です。",
        options: ["なりたい", "したい", "いきたい", "いたい"],
        correctIndex: 0,
      },
      {
        question: "わたしは、これから　_______ に行きます。",
        options: ["およぐ", "およいで", "およぎ", "およいだ"],
        correctIndex: 2,
      },
      {
        question: "あの人たちはどこに行っているん　_______ 。",
        options: ["だろう", "つもりだ", "から", "けれども"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 2,
    questions: [
      {
        question: "この本は　_______ 読みました。",
        options: ["どう", "もう", "も", "まだ"],
        correctIndex: 1,
      },
      {
        question:
          "山田さんはたいへんいい人ですよ。なにもわるいことはきいたことが　_______ わ。",
        options: ["しません", "いません", "なりません", "ありません"],
        correctIndex: 3,
      },
      {
        question: "ここにじゅうしょを書いて　_______ か？",
        options: [
          "ください",
          "くださいます",
          "くださいません",
          "くださいましょうか",
        ],
        correctIndex: 2,
      },
      {
        question: "あなたはあそこへ行って　_______ いけませんよ。",
        options: ["が", "は", "と", "に"],
        correctIndex: 1,
      },
      {
        question: "どれ　_______ ここではたらいていましたか？",
        options: ["まで", "もう", "より", "くらい"],
        correctIndex: 3,
      },
      {
        question: "わたしはおんがくをきく_______ 好きです。",
        options: ["のが", "ので", "のに", "のは"],
        correctIndex: 0,
      },
      {
        question: "わたしは一人でクリスマスをすごす _______ です。",
        options: ["たい", "つもり", "だろう", "ほう"],
        correctIndex: 1,
      },
      {
        question: "_______ ながら水を飲まないでください。",
        options: ["あるく", "あるいて", "あるき", "あるかな"],
        correctIndex: 2,
      },
      {
        question:
          "れいぞうこにビールが入っている　_______ 、そこにすわって飲みましょう。",
        options: ["から", "と", "なら", "たら"],
        correctIndex: 0,
      },
      {
        question: "わたしのことをいつまでも　_______ ください。",
        options: ["わすれない", "わすれないて", "わすれなくて", "わすれないで"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 3,
    questions: [
      {
        question: "まっすぐベッドに行きなさい。明日は　_______ なりますよ。",
        options: ["いそがしいに", "いそがしく", "いそがしい", "いそがしくて"],
        correctIndex: 1,
      },
      {
        question:
          "とうきょうにかえる　_______ 、もういちどあなたに会いたいです。",
        options: ["まえ", "まえで", "まえに", "まえには"],
        correctIndex: 2,
      },
      {
        question: "もうすこし　_______ してくださいませんか。",
        options: ["しずかに", "しずかだ", "しずか", "しずかで"],
        correctIndex: 0,
      },
      {
        question: "わたしは、あなたに　_______ にここに来ました。",
        options: ["会う", "会って", "会い", "会います"],
        correctIndex: 2,
      },
      {
        question: "そんなにしんぱい　_______ な。彼はぜったい大丈夫だ。",
        options: ["し", "する", "した", "している"],
        correctIndex: 1,
      },
      {
        question: "わたしたちはもうあの家にすんで　_______ 。",
        options: ["あります", "いました", "います", "いません"],
        correctIndex: 3,
      },
      {
        question: "それ、母には　_______ ほうがいいですよ。",
        options: ["言うな", "言わないで", "言わない", "言わなくて"],
        correctIndex: 2,
      },
      {
        question: "こどもたちが先生のまわりに　_______ います。",
        options: ["すわり", "すわって", "すわる", "すわった"],
        correctIndex: 1,
      },
      {
        question: "兄はたにんにものを教える　_______ 上手なんです。",
        options: ["のは", "のが", "ので", "のに"],
        correctIndex: 1,
      },
      {
        question: "かのじょのへやはあまりきれい　_______ 。",
        options: ["いません", "じゃいません", "ありません", "じゃありません"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 4,
    questions: [
      {
        question: "わたしはここにいちど　_______ 来たことがあります。",
        options: ["だけ", "もう", "まだ", "まえ"],
        correctIndex: 0,
      },
      {
        question:
          "アキラ　_______ わたし　_______ あなたのともだちなんですよ。",
        options: ["は/は", "や/や", "と/と", "も/も"],
        correctIndex: 3,
      },
      {
        question:
          "母はとなりのおくさんと少し話を　_______ から家にかえっていった。",
        options: ["し", "する", "して", "した"],
        correctIndex: 2,
      },
      {
        question: "家にいるよりここ　_______ ほうがきけんですよ。",
        options: ["を", "な", "に", "の"],
        correctIndex: 3,
      },
      {
        question: "わたしがあなた　_______ ならんで立ってもいいですか？",
        options: ["と", "で", "を", "に"],
        correctIndex: 0,
      },
      {
        question: "コーヒーでも飲みながら　_______ 。",
        options: ["話します", "話しません", "話しましょう", "話しましよう"],
        correctIndex: 2,
      },
      {
        question: "みなさん、なぜここにあつまったか、わかっている　_______ 。",
        options: ["でした", "でしました", "でしょう", "でしましょう"],
        correctIndex: 2,
      },
      {
        question: "わたしの学校にはたくさんの学生が　_______ 。",
        options: ["いっています", "います", "あります", "あっています"],
        correctIndex: 1,
      },
      {
        question: "このじしょはここ　_______ つかってください。",
        options: ["に", "の", "で", "を"],
        correctIndex: 2,
      },
      {
        question: "なにか　_______ ことがありますか？",
        options: ["言たい", "言いたい", "言うたい", "言ってたい"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 5,
    questions: [
      {
        question: "これ　_______ ちずです。",
        options: ["に", "を", "は", "や"],
        correctIndex: 2,
      },
      {
        question: "スーパー　_______ かいものをしました。",
        options: ["か", "に", "で", "へ"],
        correctIndex: 2,
      },
      {
        question: "犬が２ひきいます。ねこ　_______ ２ひきいます。",
        options: ["や", "も", "で", "に"],
        correctIndex: 1,
      },
      {
        question: "らいげつおきなわへりょこう　_______ 行きます。",
        options: ["と", "が", "を", "に"],
        correctIndex: 3,
      },
      {
        question: "ぼくはまいにち中国語　_______ べんきょうします。",
        options: ["と", "の", "や", "を"],
        correctIndex: 3,
      },
      {
        question:
          "– らいしゅうもひとりで来ますか？- いいえ、らいしゅうはともだち　_______ 来ます。",
        options: ["と", "は", "へ", "が"],
        correctIndex: 0,
      },
      {
        question: "“どういたしまして”はえいご　_______ なんといいますか？",
        options: ["が", "を", "で", "に"],
        correctIndex: 2,
      },
      {
        question: "ここにじゅうしょ　_______ せいねんがっぴをかいてください。",
        options: ["で", "を", "と", "も"],
        correctIndex: 2,
      },
      {
        question: "わたしはいつもうちからがっこう　_______ くるまで行きます。",
        options: ["しか", "まで", "ごろ", "で"],
        correctIndex: 1,
      },
      {
        question: "このバスはゆうびんきょくのまえ　_______ とおります。",
        options: ["で", "に", "へ", "を"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 6,
    questions: [
      {
        question: "どれ　_______ あなたのかぎですか？",
        options: ["は", "や", "を", "が"],
        correctIndex: 3,
      },
      {
        question: "なつやすみはなんにち　_______ はじまりますか？",
        options: ["だけ", "では", "から", "まで"],
        correctIndex: 2,
      },
      {
        question: "しんぶんをさがしましたが、どこ　_______ ありません。",
        options: ["にも", "でも", "までも", "へも"],
        correctIndex: 0,
      },
      {
        question: "パーティーはなんじにはじまる　_______ しっていますか？",
        options: ["か", "で", "を", "が"],
        correctIndex: 0,
      },
      {
        question: "おかねは1000円　_______ あります。",
        options: ["ぐらい", "ごろ", "しか", "にも"],
        correctIndex: 0,
      },
      {
        question: "かさはそこ　_______ おいてください。",
        options: ["と", "が", "を", "に"],
        correctIndex: 3,
      },
      {
        question: "わたしはあまり　_______ ありませんでした。",
        options: ["げんきでは", "げんきには", "げんきな", "げんきだ"],
        correctIndex: 0,
      },
      {
        question: "わたしのへやは　_______ ないです。",
        options: ["ひろいく", "ひろいでは", "ひろく", "ひろい"],
        correctIndex: 2,
      },
      {
        question: "あの子はうたを　_______ うたいます。",
        options: ["じょうず", "じょううな", "じょうずに", "じょうずで"],
        correctIndex: 2,
      },
      {
        question: "字をもうすこし　_______ かきましょう。",
        options: ["大きい", "大きく", "大きいに", "大きくに"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 7,
    questions: [
      {
        question: "わたしはもっと　_______ たいです。",
        options: ["はなし", "はなす", "はなした", "はなします"],
        correctIndex: 0,
      },
      {
        question: "ここで　_______ ください。",
        options: ["あそばない", "あそばなく", "あそばなくて", "あそばないで"],
        correctIndex: 3,
      },
      {
        question: "わたしはきのう　_______ まえに、てがみをかきました。",
        options: ["ねる", "ねた", "ねるの", "ねたの"],
        correctIndex: 0,
      },
      {
        question: "きのう本を　_______ に行きました。",
        options: ["かって", "かう", "かわ", "かい"],
        correctIndex: 3,
      },
      {
        question: "わたしはおんがくを　_______ ながらべんきょうします。",
        options: ["きく", "きき", "きいた", "きいて"],
        correctIndex: 1,
      },
      {
        question: "あした山田さんが　_______ 人はだれですか？",
        options: ["あって", "あいます", "あった", "あう"],
        correctIndex: 3,
      },
      {
        question:
          "いますぐビールをのみますか？いいえ、おふろに　_______ からのみます。",
        options: ["はいる", "はいり", "はいります", "はいって"],
        correctIndex: 3,
      },
      {
        question: "かべにポスターがはって　_______ 。",
        options: ["います", "なります", "あります", "します"],
        correctIndex: 2,
      },
      {
        question: "このえはわたしがきのうこうえんで　_______ えです。",
        options: ["かく", "かかない", "かいた", "かいて"],
        correctIndex: 2,
      },
      {
        question: "こどもはゆうべばんごはんを　_______ ねました。",
        options: ["たべなくた", "たべないで", "たべない", "たべなく"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 8,
    questions: [
      {
        question: "しんぶんはあまり _______ 。",
        options: ["よみます", "よみません", "よんでください", "よみましょう"],
        correctIndex: 1,
      },
      {
        question: "りょこうは　_______ でしたか？",
        options: ["どう", "いつ", "なぜ", "だれ"],
        correctIndex: 0,
      },
      {
        question:
          "– _______ しごとをやすみましたか？ – びょうきだったからです。",
        options: ["どこの", "どなたが", "どうして", "どのぐらい"],
        correctIndex: 2,
      },
      {
        question: "– それは　_______ の国のきってですか？ – 日本のです。",
        options: ["なに", "どれ", "いつ", "どこ"],
        correctIndex: 3,
      },
      {
        question:
          "– パーティーではどんな　_______ をのみましたか？ – ジュースやコーラをのみました。",
        options: ["ひと", "こと", "もの", "とき"],
        correctIndex: 2,
      },
      {
        question: "びょうきできょういちにち、_______ たべませんでした。",
        options: ["なにに", "なにか", "なんで", "なにも"],
        correctIndex: 3,
      },
      {
        question: "_______ ください。",
        options: [
          "りんごを３つを",
          "りんごが３つを",
          "りんごを３つ",
          "りんごが３つ",
        ],
        correctIndex: 2,
      },
      {
        question: "おにいさんはおげんきですか？",
        options: [
          "はい、おかげさまで。",
          "いいえ、ありがとう。",
          "あ、どういたしまして。",
          "ええ、すみません。",
        ],
        correctIndex: 0,
      },
      {
        question: "さとうさんはもう来ましたか？",
        options: [
          "いいえ、来ませんでした。",
          "いいえ、まだです。",
          "はい、そうです。",
          "はい、もうです。",
        ],
        correctIndex: 1,
      },
      {
        question: "– えきからがっこうまではとおいですか？ – いいえ、_______ 。",
        options: [
          "あるいて3ぷんです",
          "3ぷんあるきます。",
          "あるいて3ぷんかかります",
          "3分あるいています",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 9,
    questions: [
      {
        question: "パ－ティーはいつ _______ いいですか。",
        options: ["が", "に", "を", "と"],
        correctIndex: 0,
      },
      {
        question: "目の中にゴミ _______ 入って、いたいです。",
        options: ["を", "が", "に", "で"],
        correctIndex: 1,
      },
      {
        question: "あの店は何 _______ いう名前ですか。",
        options: ["が", "に", "の", "と"],
        correctIndex: 3,
      },
      {
        question: "30分 _______ まちましたが、バスは来ませんでした。",
        options: ["ごろ", "など", "しか", "ぐらい"],
        correctIndex: 3,
      },
      {
        question: "1日 _______ 3かいくすりをのみます。",
        options: ["が", "に", "へ", "を"],
        correctIndex: 1,
      },
      {
        question: "大学 _______ 電車で30分かかります。",
        options: ["を", "が", "では", "まで"],
        correctIndex: 3,
      },
      {
        question: "このしんぶんは _______ からもういりません。",
        options: [
          "おとといの",
          "おとといのだ",
          "おとといので",
          "おとといだった",
        ],
        correctIndex: 1,
      },
      {
        question: "このことばを _______ ください。",
        options: ["おぼえて", "おぼりて", "おぼって", "おぼえって"],
        correctIndex: 0,
      },
      {
        question: "公園の花はとても _______ 。",
        options: [
          "きれいだった",
          "きれかった",
          "きれくなかった",
          "きれくないだった",
        ],
        correctIndex: 0,
      },
      {
        question: "まいあさうちでせんたくを _______ から、学校に行きます。",
        options: ["する", "して", "します", "した"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "grammar",
    testNumber: 10,
    questions: [
      {
        question: "パンを _______ きります。",
        options: ["うす", "うすい", "うすいで", "うすく"],
        correctIndex: 3,
      },
      {
        question: "A「もうこの本を読みましたか。」B「いいえ、 _______ 。」",
        options: [
          "まだです",
          "まだ読みました",
          "もうです",
          "もう読みませんでした",
        ],
        correctIndex: 0,
      },
      {
        question: "ひるごはんの時間をもっと _______ しませんか。",
        options: ["おそく", "おそい", "おそいに", "おそくて"],
        correctIndex: 0,
      },
      {
        question: "そのこうさてん _______ 左にまがってください。",
        options: ["が", "を", "に", "と"],
        correctIndex: 1,
      },
      {
        question: "パーティーで、だれ _______ ギターをひきましたか。",
        options: ["を", "も", "は", "が"],
        correctIndex: 3,
      },
      {
        question: "わたしがきのう _______ カメラはどこにありますか。",
        options: ["買って", "買う", "買った", "買わない"],
        correctIndex: 2,
      },
      {
        question: "あたらしいようふく _______ ほしいです。",
        options: ["に", "が", "と", "の"],
        correctIndex: 1,
      },
      {
        question: "時間がありません。 _______ ください。",
        options: [
          "はやくして",
          "はやくなって",
          "はやいにして",
          "はやいになって",
        ],
        correctIndex: 0,
      },
      {
        question: "駅までいっしょに _______ ましょう。",
        options: ["かえ", "かえり", "かえる", "かえって"],
        correctIndex: 1,
      },
      {
        question: "このテストは、じしょを _______ ください。",
        options: ["つかうないで", "つかわないで", "つかいないで", "つかないで"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 1,
    questions: [
      {
        question: "日本では、はる·なつ·あき·ふゆの四つの _______ があります。",
        options: ["てんき", "きぶん", "きおん", "きせつ"],
        correctIndex: 3,
      },
      {
        question: "きのうならったことをもう _______ しまいました。",
        options: ["わすれて", "すてて", "なくして", "とって"],
        correctIndex: 0,
      },
      {
        question:
          "シャツのうりばは、このうえの３がいです。あの _______ でいってください。",
        options: ["ドア", "タクシー", "サンダル", "エスカレーター"],
        correctIndex: 3,
      },
      {
        question: "あまり勉強しなかったので、テストのてんが _______ です。",
        options: ["しんぱい", "きけん", "あんぜん", "あんしん"],
        correctIndex: 0,
      },
      {
        question: "おもしろいえいがだと聞いたので、_______ みたいです。",
        options: ["たぶん", "そんなに", "ぜひ", "きゅうに"],
        correctIndex: 2,
      },
      {
        question: "たかださんは _______ をしながらだいがくにかよっています。",
        options: ["オートバイ", "デパート", "アルバイト", "カレンダー"],
        correctIndex: 2,
      },
      {
        question: "はなこさんは白いスカートと _______ をはいています。",
        options: ["セーター", "ハンカチ", "サンダル", "オーバー"],
        correctIndex: 2,
      },
      {
        question:
          "父はとうきょうへ行くと、いつも _______ をかってきてくれます。",
        options: ["おまつり", "おれい", "おみやげ", "おいわい"],
        correctIndex: 2,
      },
      {
        question: "あのあたらしい _______ はデパートです。",
        options: ["アパート", "ホテル", "プール", "ビル"],
        correctIndex: 3,
      },
      {
        question:
          "じゅぎょうがおわってから、まいにち、ピンポンの _______ をします。",
        options: ["しゅみ", "うんどう", "れんしゅう", "しゅうかん"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 2,
    questions: [
      {
        question: "雨がやっと _______ 。",
        options: ["とまりました", "やみました", "しまりました", "あきました"],
        correctIndex: 1,
      },
      {
        question: "つぎのえきでおりて、バスに _______ ください。",
        options: ["かわって", "のりかえて", "ひっこして", "とりかえて"],
        correctIndex: 1,
      },
      {
        question: "えきからここまでバスでいちじかんで _______ 。",
        options: ["できます", "かかります", "とおれます", "こられます"],
        correctIndex: 3,
      },
      {
        question: "うちには _______ こどもがいて、いつもにぎやかです。",
        options: ["ひくい", "わかい", "ほそい", "ちいさい"],
        correctIndex: 3,
      },
      {
        question: "たなかさんのしゅみは _______ をすることです。",
        options: ["バレーボール", "カメラ", "タクシー", "ニュース"],
        correctIndex: 0,
      },
      {
        question: "どこかであかんぼうのなく _______ がします。",
        options: ["みみ", "こえ", "おと", "くち"],
        correctIndex: 1,
      },
      {
        question: "わたしはじてんしゃを _______ もっています。",
        options: ["にだい", "にさい", "にほん", "にまい"],
        correctIndex: 0,
      },
      {
        question: "今年、大学に入学することができて、とても _______ です。",
        options: [
          "おいしかった",
          "たのしかった",
          "うれしかった",
          "ただしかった",
        ],
        correctIndex: 2,
      },
      {
        question: "みちをおしえてもらったので、 _______ をいいました。",
        options: ["おれい", "おかげ", "おいわい", "おだいじに"],
        correctIndex: 0,
      },
      {
        question: "わたしのうちへも _______ あそびにきてください。",
        options: ["いちど", "いっこ", "いちばん", "いっけん"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 3,
    questions: [
      {
        question: "いとうさんはしごとがおおくて _______ のようです。",
        options: ["あそびすぎ", "はたらきすぎ", "やすみすぎ", "つとめすぎ"],
        correctIndex: 1,
      },
      {
        question: "うちのちかくにほんやが _______ あります。",
        options: ["二けん", "二さつ", "二ほん", "二かい"],
        correctIndex: 0,
      },
      {
        question: "わたしは日本に来てから _______ このいえにすんでいます。",
        options: ["もっと", "きっと", "ずっと", "やっと"],
        correctIndex: 2,
      },
      {
        question: "このみずうみの _______ はどのくらいですか。",
        options: ["ふかさ", "あつさ", "さむさ", "おもさ"],
        correctIndex: 0,
      },
      {
        question: "あねは _______ になって、びょういんではたらいています。",
        options: ["かんごふ", "せんせい", "けいかん", "サラリーマン"],
        correctIndex: 0,
      },
      {
        question:
          "おなかがすいていたので、れいぞうこの中の食べ物を _______ 食べてしましました。",
        options: ["すっかり", "びっくり", "ぐっすり", "はっきり"],
        correctIndex: 0,
      },
      {
        question: "きのうみたえいがはとても _______ です。",
        options: ["うれしかった", "にがかった", "よわかった", "こわかった"],
        correctIndex: 3,
      },
      {
        question: "もうおそいから、_______ かえりましょう。",
        options: ["そろそろ", "だんだん", "ときどき", "とうとう"],
        correctIndex: 0,
      },
      {
        question: "わたしの先生はたいへん _______ です。",
        options: ["すずしい", "みじかい", "ただしい", "きびしい"],
        correctIndex: 3,
      },
      {
        question: "やさしいしつもんにこたえられなくて、とても _______ 。",
        options: [
          "はずかしかったです",
          "すばらしかったです",
          "すごかったです",
          "めずらしかったです",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 4,
    questions: [
      {
        question: "きょうしつのかべにきれいなえが _______ あります。",
        options: ["のせて", "かけて", "おいて", "つけて"],
        correctIndex: 1,
      },
      {
        question: "この川のみずはのんでも _______ か。",
        options: [
          "すみません",
          "だいじょうぶです",
          "まにあいます",
          "できません",
        ],
        correctIndex: 1,
      },
      {
        question: "あしたべんきょうするかんじを　_______ しておいてください。",
        options: ["けいけん", "よしゅう", "はんたい", "ふくしゅう"],
        correctIndex: 1,
      },
      {
        question: "あのかわは _______ だから、あそこでおよいではいけません。",
        options: ["あんぜん", "きけん", "さかん", "じゅうぶん"],
        correctIndex: 1,
      },
      {
        question: "たばこを　_______ ほうがいいとともだちにいわれました。",
        options: ["おわった", "しめた", "とまった", "やめた"],
        correctIndex: 3,
      },
      {
        question: "わたしの国はやきゅうが _______ です。",
        options: ["ねっしん", "さかん", "じゅうぶん", "じょうぶ"],
        correctIndex: 1,
      },
      {
        question: "やまだ「おにいさんのびょうきはよくなりましたか。」",
        options: [
          "たなか「はい、_______ 。」",
          "おげんきで",
          "おかげさまで",
          "ごめんなさい",
          "ごめんください",
        ],
        correctIndex: 1,
      },
      {
        question: "だれでもテストを _______ のはすきではありません。",
        options: ["とる", "もつ", "うける", "ひろう"],
        correctIndex: 2,
      },
      {
        question: "_______ でじどうしゃにガソリンをいれました。",
        options: [
          "ガソリンコート",
          "ガソリンテーブル",
          "ガソリンスタンド",
          "ガソリンプール",
        ],
        correctIndex: 2,
      },
      {
        question: "きのうからからだのぐあいが _______ 。",
        options: ["いやです", "いたいです", "きらいです", "わるいです"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 5,
    questions: [
      {
        question: "わたしはでんきやでテレビを _______ もらいました。",
        options: ["ならんで", "なおって", "なおして", "ならって"],
        correctIndex: 2,
      },
      {
        question: "これはさとうせんせいがわたしに _______ ほんです。",
        options: ["くださった", "さしあげた", "いただいた", "なさった"],
        correctIndex: 0,
      },
      {
        question: "たなかさんがにゅういんしたので、_______ に行きました。",
        options: ["おみまい", "おいわい", "おまつり", "あいさつ"],
        correctIndex: 0,
      },
      {
        question: "うちのテレビはふるいので、 _______ こしょうします。",
        options: ["ぜんぜん", "たいへん", "よく", "なかなか"],
        correctIndex: 2,
      },
      {
        question: "ゆうべはこわい _______ をみて、よくねむれませんでした。",
        options: ["うそ", "かがみ", "はなし", "ゆめ"],
        correctIndex: 3,
      },
      {
        question: "あつかったら、どうぞうわぎを _______ ください。",
        options: ["はずして", "むいて", "すてて", "ぬいで"],
        correctIndex: 3,
      },
      {
        question: "わたしはくだものがすきです。 _______ りんごがだいすきです。",
        options: ["とくに", "はっきり", "すっかり", "ほとんど"],
        correctIndex: 0,
      },
      {
        question: "おとうとさんのびょうきがなおるように _______ います。",
        options: ["あやまって", "こまって", "みつかって", "いのって"],
        correctIndex: 3,
      },
      {
        question: "_______ があったら、また日本へ行きたいです。",
        options: ["りゆう", "ばあい", "きかい", "げんいん"],
        correctIndex: 2,
      },
      {
        question: "あたらしいいえにだんだん _______ きました。",
        options: ["はじまって", "おぼえて", "なれて", "すんで"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 1,
    questions: [
      {
        question:
          "あの人は病気ではない　_______ くすりをたくさん飲んでいます。",
        options: ["ので", "ために", "のに", "から"],
        correctIndex: 2,
      },
      {
        question:
          "これから日本に行くけど１週間で戻る。戻ったらすぐに会いたいと思う。それまで、なにも　_______ 。",
        options: [
          "決めないようほしい",
          "決めないほしい",
          "決めなくてほしい",
          "決めないでほしい",
        ],
        correctIndex: 3,
      },
      {
        question:
          "社長から電話が　_______ とき、私は子供とピクニックに出かける準備をしていた。",
        options: [
          "かかってきた",
          "かかっていった",
          "かかっておいた",
          "かかってみた",
        ],
        correctIndex: 0,
      },
      {
        question:
          "でもあなたと話が　_______ よ。だって二人で話をしたことなんて一度もなかったものな。",
        options: [
          "できてよい",
          "できてよかった",
          "できたらよかった",
          "できればよかった",
        ],
        correctIndex: 1,
      },
      {
        question: "彼は私たちが部屋に入った　_______ ドアを閉めた。",
        options: ["ごで", "あとで", "まえで", "まえに"],
        correctIndex: 1,
      },
      {
        question: "このバスは郵便局の前　_______ 通りますか？",
        options: ["で", "に", "へ", "を"],
        correctIndex: 3,
      },
      {
        question: "この本のほうがあなたには　_______ はずだ。",
        options: [
          "わかったやすい",
          "わかるやすい",
          "わかりやすい",
          "わかってやすい",
        ],
        correctIndex: 2,
      },
      {
        question:
          "電車を待っていたとき、わたしは友だち　_______ 名前を呼ばれました。",
        options: ["を", "が", "に", "で"],
        correctIndex: 2,
      },
      {
        question:
          "昨日は仕事を守れる　_______ が不安だった。しかしいまは、命を守れる　_______ が不安だ。",
        options: [
          "かどうか/かどうか",
          "か/か",
          "じゃないか/じゃないか",
          "の/の",
        ],
        correctIndex: 0,
      },
      {
        question:
          "明日の夕方　_______ 東京に戻りたい。アルバイトに行かなければならないから。",
        options: ["までで", "まで", "までに", "にまで"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 2,
    questions: [
      {
        question:
          "男の子がバケツ一杯の水をもって帰る　_______ 一時間近くもかかった。",
        options: ["のに", "のを", "のは", "ので"],
        correctIndex: 0,
      },
      {
        question: "食事は果物と野菜　_______ にしています。",
        options: ["しか", "だけ", "など", "くらい"],
        correctIndex: 1,
      },
      {
        question: "三週間たっても彼女　_______ 返事は来なかった。",
        options: ["までの", "からの", "のまでの", "のからの"],
        correctIndex: 1,
      },
      {
        question: "あなた　_______ 一番したいことはなんですか？",
        options: ["が", "は", "に", "も"],
        correctIndex: 0,
      },
      {
        question:
          "このとき、二階でことんという音　_______ が誰も気づかなかった。",
        options: ["をした", "になった", "にした", "がした"],
        correctIndex: 3,
      },
      {
        question:
          "兄さんったら、寝ながら　_______ するもんだから、僕は半分ぐらいしか眠れないよ。",
        options: [
          "動きまわるし、しゃべるし",
          "動きまわると、しゃべると",
          "動きまわったり、しゃべったり",
          "動きまわっても、しゃべっても",
        ],
        correctIndex: 2,
      },
      {
        question: "今日はうんと楽しんで、好きなだけ　_______ つもりよ。",
        options: ["食べ", "食べる", "食べている", "食べよう"],
        correctIndex: 1,
      },
      {
        question:
          "電話で彼に叫んだ　_______ わ。「そんなの違うじゃない」って。",
        options: [
          "ことがいます",
          "ことがいました",
          "ことがあります",
          "ことがありました",
        ],
        correctIndex: 2,
      },
      {
        question:
          "子どものころきらいだったやさいが、さいきん　_______ ようになりました。",
        options: ["食べる", "食べた", "食べられる", "食べられた"],
        correctIndex: 2,
      },
      {
        question: "わたしは弟に　_______ と思って、この本を買いました。",
        options: ["読ませよう", "読ませる", "読みたい", "読みたがる"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 3,
    questions: [
      {
        question: "私はどうしても家に帰らなければ　_______ 。",
        options: ["いかない", "ならない", "なってない", "いってない"],
        correctIndex: 1,
      },
      {
        question: "窓の外では雨が　_______ いる。",
        options: [
          "降りつづけて",
          "降ってつづけて",
          "降るつづけて",
          "降ったつづけて",
        ],
        correctIndex: 0,
      },
      {
        question:
          "高木くんはこの仕事が気に入らなかった　_______ だけど、僕はとっても楽しかったです。",
        options: ["みたい", "のみたい", "にみたい", "なみたい"],
        correctIndex: 0,
      },
      {
        question: "生まれた　_______ の子牛が立ち上がり、歩こうとしている。",
        options: ["だけ", "とき", "ところ", "ばかり"],
        correctIndex: 3,
      },
      {
        question: "A 「今すぐ何かして働きたいと思うわ。」",
        options: [
          "B 「何かやさしいお料理を　_______ どうですか？」",
          "習うと",
          "習うなら",
          "習っても",
          "習ったら",
        ],
        correctIndex: 3,
      },
      {
        question: "しゃべりたくない　_______ 、　しゃべらなくてもいいですよ。",
        options: ["のたら", "のなら", "のと", "のは"],
        correctIndex: 1,
      },
      {
        question: "中国を旅しているあいだ、実家への連絡はあまり　_______ 。",
        options: ["した", "しないでいた", "していた", "していなかった"],
        correctIndex: 3,
      },
      {
        question: "機械工作をすごいと言ったけど、鈴木は手を　_______ 。",
        options: [
          "汚しがらなかった",
          "汚したくなかった",
          "汚したがらなくなった",
          "汚したがらなかった",
        ],
        correctIndex: 3,
      },
      {
        question: "駅へ行きたいんですが、どう　_______ いいですか。",
        options: ["行って", "行けば", "行くなら", "行くのは"],
        correctIndex: 1,
      },
      {
        question:
          "けさはいつもより早く学校へ行きました。しかし、山田さんはもう　_______ 。",
        options: ["きます", "きています", "きてでした", "きていました"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 4,
    questions: [
      {
        question: "今日は寒いので、風邪をひいて　_______ そうです。",
        options: ["しまい", "み", "いき", "おき"],
        correctIndex: 0,
      },
      {
        question:
          "彼は「クラシック音楽」をタップした。悲しいメロディーと歌詞が　_______ 。",
        options: ["流れはじめた", "流れいった", "流れつづけた", "流れみた"],
        correctIndex: 0,
      },
      {
        question: "わたしはけさ山田さんがひとりで　_______ を見ました。",
        options: ["走る", "走ること", "走っているの", "走っていること"],
        correctIndex: 2,
      },
      {
        question:
          "彼とはじめてデートした　_______ 、新しい生活をはじめたいと思っていました。",
        options: ["とき", "ところ", "あと", "ごろ"],
        correctIndex: 0,
      },
      {
        question: "十五分　_______ パトカーのサイレンがきこえた。",
        options: ["おきに", "までに", "ように", "あとに"],
        correctIndex: 0,
      },
      {
        question: "両親はふたりともわたしを理解して　_______ いた。",
        options: ["あげて", "くれて", "やって", "もらって"],
        correctIndex: 1,
      },
      {
        question: "これから新宿駅で松本さんに　_______ 予定です。",
        options: ["会っている", "会える", "会おう", "会う"],
        correctIndex: 3,
      },
      {
        question: "このようなプロダクトを開発させて _______ 。",
        options: ["いる", "ほしい", "ひつよう", "したい"],
        correctIndex: 1,
      },
      {
        question:
          "同じような趣味を持つ人の集まりに参加　_______ はいかがでしょうか？",
        options: ["していて", "していって", "してきて", "してみて"],
        correctIndex: 3,
      },
      {
        question: "彼らはいつも　_______ ソファーの上でレコードをきいていた。",
        options: ["のように", "のような", "みたいに", "みたいな"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 5,
    questions: [
      {
        question:
          "お時間をとりましたことを _______ ください。ご健康とご幸福を祈ります。",
        options: ["おゆるし", "ゆるして", "おゆるして", "ゆるし"],
        correctIndex: 0,
      },
      {
        question:
          "はじめにうまく　_______ 、何度でも、何度でも、やってみるんだね。",
        options: ["いかなかったら", "いかなくて", "いかないと", "いかないで"],
        correctIndex: 0,
      },
      {
        question: "子供たちが動物園への　_______ をたずねた。",
        options: ["行方", "行き方", "行く方", "行った方"],
        correctIndex: 1,
      },
      {
        question: "電車を　_______ としたとき、　ころんでけがをしました。",
        options: ["おり", "おりる", "おりて", "おりよう"],
        correctIndex: 3,
      },
      {
        question:
          "誰が相手　_______ 、どんなこと　_______ 、彼は納得させてしまう。",
        options: ["ても/ても", "など/など", "でも/でも", "なら/なら"],
        correctIndex: 2,
      },
      {
        question: "隠れるところがない　_______ ！",
        options: ["じゃないが", "じゃないかな", "じゃないかしら", "じゃないか"],
        correctIndex: 3,
      },
      {
        question: "りんごとバナナとではどちら　_______ すきですか。",
        options: ["で", "が", "は", "と"],
        correctIndex: 1,
      },
      {
        question:
          "彼女は自分がとてもひどいことをして　_______ と思って後悔した。",
        options: ["みたんだ", "しまったんだ", "きたんだ", "おいたんだ"],
        correctIndex: 1,
      },
      {
        question: "私、父から五百万円を借りる　_______ 。",
        options: [
          "ものができた",
          "ものができていた",
          "ことができていた",
          "ことができた",
        ],
        correctIndex: 3,
      },
      {
        question:
          "一人　_______ 子供のいない両親はあまり仲が良くないっていうのは本当だと思う？",
        options: ["もう", "しか", "だけ", "ばかり"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 1,
    questions: [
      {
        question:
          "_______ な資金は、安定した経営、さらに事業拡大できるチャンスにつながります。",
        options: ["豊富", "贅沢", "幸福", "多量"],
        correctIndex: 0,
      },
      {
        question:
          "シジンは真面目な時は本当に真面目なのですが、ちゃっかりした面や、_______ が好きな面もあり、それも私と似ているかもしれません。",
        options: ["評判", "快適", "確認", "冗談"],
        correctIndex: 3,
      },
      {
        question: "受話器を置いた大統領は、前進する _______ ができていた。",
        options: ["覚悟", "感覚", "発覚", "自覚"],
        correctIndex: 0,
      },
      {
        question:
          "僕はすばらしいデザインを見れば元気になるし、_______ 工程のわずかな違いにまでこだわる。",
        options: ["造作", "製造", "創造", "製品"],
        correctIndex: 1,
      },
      {
        question:
          "彼がここに電話をかけてきたのは単なる _______ の一致かもしれない。",
        options: ["自然", "天然", "突然", "偶然"],
        correctIndex: 3,
      },
      {
        question:
          "資金の _______ を突き止めれば、テロリストを突き止め、制圧することができる。",
        options: ["連れ", "哀れ", "流れ", "恐れ"],
        correctIndex: 2,
      },
      {
        question:
          "私は農家の長男なのですが、父が商業高校への _______ を勧めてくれたのです。",
        options: ["通学", "進学", "留学", "奨学"],
        correctIndex: 1,
      },
      {
        question: "後輩に仕事のやり方について _______ をしました。",
        options: ["アイデア", "アドバイス", "デザイン", "イメージ"],
        correctIndex: 1,
      },
      {
        question:
          "セミナーに参加したい人は、_______ に住所、氏名、希望日を書いてください。",
        options: ["証明書", "領収書", "申込書", "参考書"],
        correctIndex: 2,
      },
      {
        question: "私は、外国語を１日で _______ マスターしたい。",
        options: ["完成", "完了", "完全", "完璧"],
        correctIndex: 2,
      },
      {
        question: "彼が何を言っているのか、_______ わからない。",
        options: ["ぐっすり", "すっきり", "のんびり", "さっぱり"],
        correctIndex: 3,
      },
      {
        question: "楽しみにしていたコンサートが中止になって _______ した。",
        options: ["はらはら", "うっかり", "どきどき", "がっかり"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 2,
    questions: [
      {
        question:
          "企業がインターネット広告にかける「費用」は年々増加している。",
        options: ["オーバー", "コスト", "エネルギー", "グランド"],
        correctIndex: 1,
      },
      {
        question:
          "わたしはこの馬の美しさに魅せられ、「帰宅」してからインターネットで調べてみた。",
        options: ["家に帰る", "会社に行く", "国に戻る", "学校に通う"],
        correctIndex: 0,
      },
      {
        question:
          "あれは僕が「望む」仕事ではなかった。個人に製品を売れない状況に、本当に気が滅入ってしまった。",
        options: ["願う", "祈る", "想う", "図る"],
        correctIndex: 0,
      },
      {
        question: "特に懸念されている点の一つは、市場が「拡大」することだ。",
        options: ["成長", "拡張", "発展", "進化"],
        correctIndex: 1,
      },
      {
        question:
          "壁は告知や「証明」書でごちゃごちゃしていて、大きな時計がやかましくカチカチ鳴っている。",
        options: ["デモ", "プルーフ", "カスタム", "アナウンス"],
        correctIndex: 1,
      },
      {
        question: "笑顔を浮かべて「機嫌」がいいふりをする必要はない。",
        options: ["様子", "具合", "調子", "気分"],
        correctIndex: 3,
      },
      {
        question: "実験がうまくいかなかったので、「やりなおした」。",
        options: [
          "やり方を調べた",
          "やり方を教わった",
          "もう一度やった",
          "やるのを途中でやめた",
        ],
        correctIndex: 2,
      },
      {
        question: "このことは、「ないしょにしてください」。",
        options: [
          "だれにも話さないで",
          "いろいろな人に話して",
          "早く忘れて",
          "忘れないで",
        ],
        correctIndex: 0,
      },
      {
        question: "あのスーパーは、「年中」、セールをしている。",
        options: ["最近", "いつも", "ときどき", "前から"],
        correctIndex: 1,
      },
      {
        question: "彼が留学したのは、大学卒業の「翌年」です。",
        options: ["前の前の年", "次の次の年", "前の年", "次の年"],
        correctIndex: 3,
      },
      {
        question: "人によるが、年を取ると、同じ話を何度も「繰り返す」。",
        options: ["聞き返す", "考える", "言い続ける", "作る"],
        correctIndex: 2,
      },
      {
        question: "何度失敗しても、彼女は「あきらめなかった」。",
        options: [
          "気にしなかった",
          "やめようとしなかった",
          "怒らなかった",
          "謝ろうとしなかった",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 3,
    questions: [
      {
        question:
          "日本は１９４１年末に真珠湾を _______ し、翌年にはインドネシアに侵攻した。",
        options: ["批判", "攻撃", "評判", "攻勢"],
        correctIndex: 1,
      },
      {
        question:
          "一度見たら何もかも頭の中に記憶できる _______ があったら面白いですよね。",
        options: ["強力", "努力", "協力", "能力"],
        correctIndex: 3,
      },
      {
        question:
          "製品と同じように、すごい店にするには注意をそらすものを _______ シンプルにするのが重要だ。",
        options: ["増して", "減らして", "縮めて", "広げて"],
        correctIndex: 1,
      },
      {
        question:
          "鈴木さんはそんなに若いのに、あの子たちみんなの生活の _______ を見るなんて、すごく立派ね。",
        options: ["援助", "賛成", "設計", "面倒"],
        correctIndex: 3,
      },
      {
        question:
          "詩人たちは数千年という歳月をかけて愛について _______ きました。",
        options: ["言った", "話した", "語って", "喋った"],
        correctIndex: 2,
      },
      {
        question: "インド経済は世界最速で _______ している大市場だ。",
        options: ["成功", "成長", "成績", "成人"],
        correctIndex: 1,
      },
      {
        question:
          "今日の浅草寺は無人に近く、数人の観光 _______ がまばらにいるだけだ。",
        options: ["人", "者", "客", "官"],
        correctIndex: 2,
      },
      {
        question: "学者として、これらの伝説の史料を _______ ことはできない。",
        options: ["否定する", "感動する", "警告する", "信頼する"],
        correctIndex: 0,
      },
      {
        question:
          "廊下の電気は、スイッチを押さなくても、人が通ると _______ につきます。",
        options: ["機械的", "自動的", "積極的", "間接的"],
        correctIndex: 1,
      },
      {
        question: "台風により、この辺りは大きな _______ を受けた。",
        options: ["誤解", "不満", "変化", "被害"],
        correctIndex: 3,
      },
      {
        question: "将来のために、お金を _______ います。",
        options: ["ためて", "のせて", "かさねて", "くわえて"],
        correctIndex: 0,
      },
      {
        question: "バスとトラックが _______ して、負傷者が出た。",
        options: ["混雑", "競争", "邪魔", "衝突"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 4,
    questions: [
      {
        question: "経由",
        options: [
          "この公園の中を経由するとちょっと近道になる。",
          "このバスは市役所を経由して駅へ向かいます。",
          "田中さんは会社員を経由して大学に入った。",
          "会議は昼休みを経由して午後まで続いた。",
        ],
        correctIndex: 1,
      },
      {
        question: "訪問",
        options: [
          "就職活動のために、先輩の会社を訪問しました。",
          "友人から結婚式の招待の手紙が訪問しました。",
          "週末はいつも家族で海を訪問しています。",
          "突然海外旅行のチャンスが訪問しました。",
        ],
        correctIndex: 0,
      },
      {
        question: "滑る",
        options: [
          "船は海の上を滑るように進んだ。",
          "山のふもとを大きな川が滑っている。",
          "地震では地面は上下、そして横に滑る。",
          "楽しい時は時間が早く滑るように感じる。",
        ],
        correctIndex: 0,
      },
      {
        question: "見送る",
        options: [
          "毎日かならずメールを見送るようにしている。",
          "何ページか見送ってみたが、難しくて分からなかった。",
          "電車の窓から景色を見送るのが好きだ。",
          "国に帰る友人を空港まで見送った。",
        ],
        correctIndex: 3,
      },
      {
        question: "受け入れる",
        options: [
          "入り口でパンフレットを受け入れてから席にお座りください。",
          "わたしの大学では、毎年大勢の留学生を受け入れています。",
          "チケットのお申し込みは電話で受け入れています。",
          "最新の技術を受け入れた製品について説明してもらいました。",
        ],
        correctIndex: 1,
      },
      {
        question: "用事",
        options: [
          "今では携帯電話にはいろいろな用事がある。",
          "結婚のために用事をやめる女性が大勢いる。",
          "その部屋はあなたが使えるよう用事ができている。",
          "ゲームをしているうちに用事を忘れてしまった。",
        ],
        correctIndex: 3,
      },
      {
        question: "募集",
        options: [
          "授業の説明のために、新入生を一番教室に募集した。",
          "わたしの趣味は、いろいろな国のコインを募集することです。",
          "スピーチ大会の参加者を募集しています。",
          "この市では週2回、ごみを募集しています。",
        ],
        correctIndex: 2,
      },
      {
        question: "緊張",
        options: [
          "初めて雪を見て、うれしくて胸が緊張した。",
          "夏休みは、あそびの計画がとても緊張している。",
          "新しいパソコンは使い方が緊張していて、うまく使えない人が多い。",
          "テレビのインタビューを受けて、とても緊張した。",
        ],
        correctIndex: 3,
      },
      {
        question: "性格",
        options: [
          "短気の性格の人は、この仕事にはあまり向かない。",
          "雨のせいで、今日はグランドの性格がよくない。",
          "この車の性格は電気で走る点だ。",
          "あの人はその日の性格で言うことが変わる。",
        ],
        correctIndex: 0,
      },
      {
        question: "ゆるい",
        options: [
          "朝の電車はこんでいたが、帰りはゆるかった。",
          "ズボンがゆるいので、ベルトをきつくしめた。",
          "今回の旅行は荷物が少ないので、スーツケースがまだゆるい。",
          "この家は、夫婦二人で住むなら十分ゆるいです。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 5,
    questions: [
      {
        question: "あした家族を公園に _______ 行くことになっている。",
        options: ["むけて", "おこして", "つれて", "かえして"],
        correctIndex: 2,
      },
      {
        question: "息子から _______ に帰ったという連絡がありました。",
        options: ["無事", "意外", "穏やか", "安らか"],
        correctIndex: 0,
      },
      {
        question:
          "空港でホストファミリーと _______ 一人になったときは、とても寂しかった。",
        options: ["つきあって", "かかわって", "まちあわせて", "わかれて"],
        correctIndex: 3,
      },
      {
        question: "山田さんは、よく _______ を言う面白い人です。",
        options: ["冗談", "文句", "感想", "希望"],
        correctIndex: 0,
      },
      {
        question: "書類や本がきちんと _______ されていて、きれいな部屋ですね。",
        options: ["準備", "世話", "選択", "整理"],
        correctIndex: 3,
      },
      {
        question: "薬を飲んだおかげで、もう _______ 元気になりました。",
        options: ["すっかり", "はっきり", "ぐっすり", "ぴったり"],
        correctIndex: 0,
      },
      {
        question: "朝から何も飲んでいないので、のどが _______ です。",
        options: ["ぺらぺら", "からから", "ふらふら", "ぺこぺこ"],
        correctIndex: 1,
      },
      {
        question: "水をやるのを忘れていたので、花が _______ しまった。",
        options: ["こわれて", "こげて", "かれて", "とけて"],
        correctIndex: 2,
      },
      {
        question:
          "寝坊しないように、昨日は目覚まし時計を二つ _______ して寝ました。",
        options: ["ストップ", "セット", "キャンセル", "スタート"],
        correctIndex: 1,
      },
      {
        question: "銀行でドルを円に _______ した。",
        options: ["貯金", "会計", "借金", "両替"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 1,
    questions: [
      {
        question:
          "二度とあの部屋に入らないと約束しろ _______ 言われたけど、僕は約束しなかった。",
        options: ["を", "って", "のを", "だ"],
        correctIndex: 1,
      },
      {
        question:
          "私は何百回もこの手紙を読み返した。そして読み返す　_______ たまらなく哀しい気持になった。",
        options: ["うちに", "はじめに", "たびに", "だけに"],
        correctIndex: 2,
      },
      {
        question: "本を読んでいたら、　_______ 五時間も経ってしまった。",
        options: ["そろそろ", "だんだん", "ようやく", "いつの間にか"],
        correctIndex: 3,
      },
      {
        question:
          "ふたりはそれから３０年あまり、死がふたりを分かつまで幸せな結婚生活を送る　_______ 。",
        options: ["ことだ", "ことになった", "ことにした", "ようになった"],
        correctIndex: 1,
      },
      {
        question:
          "彼女が蛇口をあけ、僕の傷ついた前腕を氷　_______ 冷たい水の下へ導いた。",
        options: ["のように", "みたいに", "のときに", "そうに"],
        correctIndex: 0,
      },
      {
        question:
          "まさかあのふたり　_______ なにかあったと言いたいんじゃないだろうな！",
        options: ["の間と", "の間の", "の間に", "の間で"],
        correctIndex: 2,
      },
      {
        question: "鍵はお客様のお部屋のテーブルの上に　_______ 。",
        options: ["ございます", "いらっしゃいます", "いる", "おります"],
        correctIndex: 0,
      },
      {
        question: "あなた　_______ ちょっと内密で話したいことがあるのですが…",
        options: ["だけ", "だけで", "だけを", "だけに"],
        correctIndex: 3,
      },
      {
        question:
          "勉強して、ある程度日本が話せる　_______ 日本語の授業がおもしろくなった。",
        options: [
          "ことができるまで",
          "ことができてから",
          "ようになるまで",
          "ようになってから",
        ],
        correctIndex: 3,
      },
      {
        question:
          "A社の商品が腰の痛みにどのくらい効果が　_______ 詳しく知りたい。",
        options: [
          "あるのかによって",
          "あるのかについて",
          "あるのかどうかによって",
          "あるのかどうかについて",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 2,
    questions: [
      {
        question: "あなたのお父さんもきっと彼を助けた _______ 。",
        options: ["による", "にすぎない", "に違いない", "には限らない"],
        correctIndex: 2,
      },
      {
        question:
          "表紙 _______ 、この演目はシェイクスピアの「真夏の夜の夢」で、上演されたのは三十四年ほど前だ。",
        options: ["にしては", "によると", "にかけて", "に関する"],
        correctIndex: 1,
      },
      {
        question:
          "きみは十八歳になる。これは大事なことだ。法律的に成人になる _______ から。",
        options: ["という", "ものだ", "ことだ", "わけだ"],
        correctIndex: 3,
      },
      {
        question:
          "多くの賞金を得るために、彼は自分の妻 _______ 多くの同志を売りました。",
        options: ["にむけて", "をはじめ", "につれて", "とともに"],
        correctIndex: 1,
      },
      {
        question: "これに _______ 会社のイメージは著しく傷ついた。",
        options: ["によって", "になって", "にとって", "について"],
        correctIndex: 0,
      },
      {
        question:
          "鈴木はその場で目をつぶり、気を _______ のか、ゆっくりと大きく息をついた。",
        options: [
          "静めようとした",
          "静めようとしている",
          "静めるようにしている",
          "静めるようにした",
        ],
        correctIndex: 1,
      },
      {
        question: "サユリ _______ 名前の学生は北島サユリひとりしかいなかった。",
        options: ["という", "といって", "というと", "というのは"],
        correctIndex: 0,
      },
      {
        question:
          "彼女は自分の子供はこっそり家を抜け出すということは知らなかった _______ 。",
        options: ["つもりだ", "ように", "らしい", "ものだ"],
        correctIndex: 2,
      },
      {
        question:
          "みんな、ビジネスマン _______ 話をしていた。私が聞いたこともない頭文字が並んだ略語とか、そんなものが聞こえたよ。",
        options: ["ような", "っぱなし", "らしい", "っぽい"],
        correctIndex: 3,
      },
      {
        question:
          "ハードウエアと同じようにソフトウエアも、専門家だけでなく一般 _______ にも販売すべきだと僕は考えた。",
        options: ["向き", "向け", "に向き", "に向け"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 3,
    questions: [
      {
        question:
          "いま、あれやこれや面倒なことを考えるのはよそう。明日 _______ わ。",
        options: [
          "考えればいい",
          "考えればよかった",
          "考えるといい",
          "考えられる",
        ],
        correctIndex: 0,
      },
      {
        question: "昨日はどこまで話した _______ ？",
        options: ["かしら", "かい", "かな", "っけ"],
        correctIndex: 3,
      },
      {
        question: "健康体の男なら前線に出る _______ だろうと私も思いました。",
        options: ["べき", "がち", "もの", "わけ"],
        correctIndex: 0,
      },
      {
        question:
          "子供たちが学校から帰って _______ 、お菓子を隠してしまいましょう。",
        options: [
          "きたうちに",
          "くるうちに",
          "こないうちに",
          "きていないうちに",
        ],
        correctIndex: 2,
      },
      {
        question: "旧市街へ向かおう。答えがある _______ おそらくそこだ。",
        options: ["といっても", "としたら", "として", "とたん"],
        correctIndex: 1,
      },
      {
        question: "わたしの耳に、噴水 _______ 水音が聞こえてきた。",
        options: ["のような", "のように", "らしい", "みたい"],
        correctIndex: 0,
      },
      {
        question:
          "それを _______ 、アミが信じられないと言いたげな顔でタクミのほうを向き、呆然と見つめた。",
        options: ["聞いたら", "聞いてはじめて", "聞いたとたん", "聞いたとき"],
        correctIndex: 2,
      },
      {
        question: "入る許可がないよ。誰かに見つかったら、それ _______ 大変よ。",
        options: ["こそ", "なのに", "たび", "かぎり"],
        correctIndex: 0,
      },
      {
        question:
          "明日嵐のコンサートに行く。パパの _______ いい席が手に入った。",
        options: ["ともに", "ため", "せいで", "おかげで"],
        correctIndex: 3,
      },
      {
        question: "彼は目を大きく見開いた _______ 、寝返りを打った。",
        options: ["まま", "がち", "すでに", "だらけ"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 4,
    questions: [
      {
        question:
          "用心しろよ。誰かに見られたら、おれ _______ きみも縛り首になるぞ。",
        options: ["どころか", "どころでなく", "ばかりに", "ばかりか"],
        correctIndex: 3,
      },
      {
        question: "おれは _______ 、あいつに会えて嬉しいと思った。",
        options: [
          "生まれ初めたら",
          "生まれて初めて",
          "生まれて初めたら",
          "生まれ初めて",
        ],
        correctIndex: 1,
      },
      {
        question:
          "どんなにすばらしいごちそうだったか、とても口では言えない _______ ですよ。",
        options: ["くらい", "ほど", "ぎみ", "がち"],
        correctIndex: 0,
      },
      {
        question: "わたしは地球外生命 _______ 本を書いています。",
        options: ["にとって", "に対して", "によって", "に関する"],
        correctIndex: 3,
      },
      {
        question: "それは奇妙な屋敷だった。 _______ 、とても屋敷には見えない。",
        options: ["それでも", "やはり", "むしろ", "かわりに"],
        correctIndex: 2,
      },
      {
        question:
          "A社の製品は、機能的にはたいした _______ が、B製品ほど複雑で高価でもなかった。",
        options: ["ものはない", "ことはない", "ものだ", "ことだ"],
        correctIndex: 1,
      },
      {
        question: "われわれが母なる自然 _______ 犯した罪は桁違いに増えている。",
        options: ["に対して", "に反して", "に比べて", "にかわって"],
        correctIndex: 0,
      },
      {
        question:
          "絵を描き、絵 _______ 暮らすことで、私は神聖なるときめきの形と色、音を体験するのです。",
        options: ["最中に", "うちに", "の中に", "と共に"],
        correctIndex: 3,
      },
      {
        question: "どうやら下での論争は終わった _______ ね。",
        options: ["らしい", "よう", "みたい", "そう"],
        correctIndex: 2,
      },
      {
        question:
          "「ちょっと待ってください」の _______ 「少々お待ちください」を使うとさらに丁寧な言い回しになります。",
        options: ["かわりに", "かわって", "かかわって", "わりに"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 5,
    questions: [
      {
        question:
          "この町は無人島かと思う _______ 静かで、世の中との接点をもたず独立している。",
        options: ["ごろ", "はず", "ほど", "など"],
        correctIndex: 2,
      },
      {
        question: "弱い者には、毅然と _______ やさしい態度で接するのですよ。",
        options: ["しながらも", "してから", "しつづけて", "してはじめて"],
        correctIndex: 0,
      },
      {
        question:
          "医者は血 _______ のタオルを取り、私の手首をぎゅっとしばって血を止め傷口を消毒した。",
        options: ["ぎみ", "どころ", "だらけ", "ばかり"],
        correctIndex: 2,
      },
      {
        question:
          "僕は彼女と二人 _______ で歩くのも初めてだし、こんなに長く話をするのも初めてだった。",
        options: ["だけ", "きり", "かけ", "かた"],
        correctIndex: 1,
      },
      {
        question:
          "彼女はひと口も _______ ダイニングルームを後にし、裏のポーチへ出ていった。",
        options: ["食べなくて", "食べないで", "食べないように", "食べずに"],
        correctIndex: 3,
      },
      {
        question: "知って _______ 、われわれにはわれわれの手立てがある。",
        options: ["とおり", "のとおり", "とおりに", "のとおりに"],
        correctIndex: 1,
      },
      {
        question:
          "「ママが新しいおもちゃを買ってあげるよ」と彼女は息子を元気づける _______ 言った。",
        options: ["つもり", "つもりに", "つもりだ", "つもりで"],
        correctIndex: 3,
      },
      {
        question: "彼女は双子の息子たちの区別がつく _______ 。",
        options: ["ようだ", "ことになった", "らしくなった", "ようになった"],
        correctIndex: 3,
      },
      {
        question: "彼はよろこび _______ おそろしい叫びをもらした。",
        options: ["のため", "のおかげで", "のあまり", "のせいで"],
        correctIndex: 2,
      },
      {
        question:
          "「これを食べてもいいですか」女の子がためらい _______ 聞いた。",
        options: ["がちに", "ふり", "ように", "ぜに"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 1,
    questions: [
      {
        question: "若い大統領には経験不足という _______ がある。",
        options: ["弱点", "過失", "飢饉", "落第"],
        correctIndex: 0,
      },
      {
        question:
          "ここの研究 _______ の多くは古代言語で記された文章を含んでいる。",
        options: ["給料", "資料", "送料", "原料"],
        correctIndex: 1,
      },
      {
        question:
          "_______ されている象牙の在庫が底を突いた後、大量生産ができなければ、密猟業者が参入してくる。",
        options: ["持続", "維持", "貯蔵", "整備"],
        correctIndex: 2,
      },
      {
        question:
          "象牙の売却許可が発表された _______ 、密猟は６６％、密売は７１％増加したとされる。",
        options: ["直接", "直通", "直線", "直後"],
        correctIndex: 3,
      },
      {
        question:
          "彼は高校の転入 _______ もすでにすませていて、車を買うのにも協力してくれた。",
        options: ["手続", "配置", "処理", "作業"],
        correctIndex: 0,
      },
      {
        question: "新たな _______ になると、気になりはじめるのが健康診断です。",
        options: ["年鑑", "年月", "年齢", "年度"],
        correctIndex: 3,
      },
      {
        question:
          "今日は先輩がサッカーの試合に出るので、友達と一緒に _______ に行った。",
        options: ["参加", "指導", "応援", "競争"],
        correctIndex: 2,
      },
      {
        question: "受け取った後、必ず箱の _______ を確認してください。",
        options: ["最中", "中身", "仲間", "以内"],
        correctIndex: 1,
      },
      {
        question: "彼は辛いことがあっても、_______ な顔をしている。",
        options: ["得意", "不安", "正直", "平気"],
        correctIndex: 3,
      },
      {
        question: "彼の説明はいつも長くて _______ ので、いらいらする。",
        options: ["えらい", "くどい", "かゆい", "ゆるい"],
        correctIndex: 1,
      },
      {
        question:
          "有名なレストランに出かけたが、店は休みで _______ が閉まっていた。",
        options: ["ロッカー", "クーラー", "メニュー", "シャッター"],
        correctIndex: 3,
      },
      {
        question:
          "きのうは国の友だちに会ったので、_______ 遅くまで話し込んでしまった。",
        options: ["おしくて", "くやしくて", "したしくて", "なつかしくて"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 2,
    questions: [
      {
        question: "今、そこの駅前で田中さんに _______ 会った。",
        options: ["ときどき", "たまに", "つい", "ばったり"],
        correctIndex: 3,
      },
      {
        question: "近所で火事があったが、その家の人たちは幸い _______ だった。",
        options: ["安定", "用心", "無事", "不足"],
        correctIndex: 2,
      },
      {
        question:
          "お父さまに、あさっての午前１１時にうかがうと _______ ください。",
        options: ["お届け", "お渡し", "お伝え", "お配り"],
        correctIndex: 2,
      },
      {
        question: "私は気が _______ 方だから、いつまででも持ちますよ。",
        options: ["遠い", "長い", "細い", "遅い"],
        correctIndex: 1,
      },
      {
        question:
          "コンピューターを使って、国内だけでなく海外とも _______ が可能になった。",
        options: ["通知", "通信", "通行", "通用"],
        correctIndex: 1,
      },
      {
        question: "親が自分の子供をかわいいと思うのは _______ 。",
        options: ["あたりまえだ", "なまいきだ", "おおざっぱだ", "えらそうだ"],
        correctIndex: 0,
      },
      {
        question: "_______ の結果、私たちの活動は社会に認められました。",
        options: ["自慢", "努力", "目的", "覚悟"],
        correctIndex: 1,
      },
      {
        question:
          "真の国際交流とは何かを考えなければならない _______ にきている。",
        options: ["期間", "期限", "時間", "時期"],
        correctIndex: 3,
      },
      {
        question:
          "今年の夏は天候が非常に悪かった。_______ 米の収穫がかなりすくなくなりそうだ。",
        options: ["あるいは", "したがって", "ただし", "ところで"],
        correctIndex: 1,
      },
      {
        question: "ここにある物は、_______ 自由に使ってかまいませんよ。",
        options: ["なんでも", "なんだか", "なんで", "なんとも"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 3,
    questions: [
      {
        question:
          "彼は顔が _______ から、彼に頼めばいい人を紹介してくれるだろう。",
        options: ["大きい", "太い", "多い", "広い"],
        correctIndex: 3,
      },
      {
        question:
          "学校の _______ にようちえんがあって、子供が遊んでいるのが教室からよく見える。",
        options: ["向き", "向かい", "向かう", "向け"],
        correctIndex: 1,
      },
      {
        question: "予算が _______ しまったので、計画は中止になった。",
        options: ["とじられて", "こすらてて", "にげられて", "けずられて"],
        correctIndex: 3,
      },
      {
        question:
          "急な用事ができて、私は子どもを友人の家に _______ ことにした。",
        options: ["あずかる", "あずける", "うけとる", "あたえる"],
        correctIndex: 1,
      },
      {
        question: "この湖は水がきれいで、まるで _______ ガラスのようだ。",
        options: ["新鮮な", "正確な", "透明な", "明確な"],
        correctIndex: 2,
      },
      {
        question: "夜おそく暗い道を一人で歩くのは _______ ものです。",
        options: ["にくらしい", "おそろしい", "おとなしい", "やかましい"],
        correctIndex: 1,
      },
      {
        question: "このホテルは _______ が良いので、お客は満足しているようだ。",
        options: ["サービス", "チッブ", "リズム", "スピード"],
        correctIndex: 0,
      },
      {
        question: "「悲しい」や「うれしい」は _______ を表すことばです。",
        options: ["感心", "意見", "意志", "感情"],
        correctIndex: 3,
      },
      {
        question: "今 _______ いる風邪は、高い熱が出る。",
        options: ["かたよって", "つながって", "はやって", "やとって"],
        correctIndex: 2,
      },
      {
        question:
          "他の人はみんなスーツを着ているのに自分だけ　_______　着で恥ずかしかった。",
        options: ["普通", "平凡", "普段", "本来"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 4,
    questions: [
      {
        question:
          "何をするにも、_______ 方法をとっていては、成功はむずかしい。",
        options: ["安静な", "安定な", "安易な", "安価な"],
        correctIndex: 2,
      },
      {
        question: "目が痛かったので、しばらく目を _______ いた。",
        options: ["さげて", "しめて", "とじて", "とめて"],
        correctIndex: 2,
      },
      {
        question: "その話に深く _______ して、泣いてしまった。",
        options: ["強調", "理解", "暗記", "感動"],
        correctIndex: 3,
      },
      {
        question: "むだな抵抗はやめて、_______ 武器をすてて出てきなさい。",
        options: ["げんに", "ただちに", "ついた", "めったに"],
        correctIndex: 1,
      },
      {
        question: "少し走っただけでそんなに疲れるなんて _______ 。",
        options: ["だらしない", "やかましい", "くだらない", "ずうずうしい"],
        correctIndex: 0,
      },
      {
        question: "悪い人にだまされて、財産をすべて _______ しまった。",
        options: ["失って", "疑って", "補って", "払って"],
        correctIndex: 0,
      },
      {
        question: "弟は毎日、研究所で化学の _______ をしている。",
        options: ["実行", "実験", "実用", "実感"],
        correctIndex: 1,
      },
      {
        question:
          "父が死んだ後、わたしたちは悲しみを _______ 、今日までがんばってきた。",
        options: ["のりかえて", "のりすぎて", "のりこえて", "のりあげて"],
        correctIndex: 2,
      },
      {
        question:
          "病気の母が泣いて止めたけれど、_______ 留学したい気持ちは変わらなかった。",
        options: ["それとも", "それで", "それなら", "それでも"],
        correctIndex: 3,
      },
      {
        question:
          "初めて降りた駅で _______ していたら、知らない人が親切に案内してくれた。",
        options: ["ぶつぶつ", "まごまご", "はきはき", "もともと"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 5,
    questions: [
      {
        question:
          "医者に、太りすぎだから _______ の高くない食事をしろと言われた。",
        options: ["カロリー", "ナンバー", "サービス", "アイデア"],
        correctIndex: 0,
      },
      {
        question: "この辞書は説明がわかりやすく、_______ くわしい。",
        options: ["さて", "ただ", "しかも", "または"],
        correctIndex: 2,
      },
      {
        question:
          "私は家へ帰ると、いつも _______ まどを開けて空気を入れかえる。",
        options: ["まつさおに", "まっすぐに", "まっさきに", "まっしろに"],
        correctIndex: 2,
      },
      {
        question: "この仕事は私に _______ ください。",
        options: ["働いて", "引き受けて", "役立って", "任せて"],
        correctIndex: 3,
      },
      {
        question: "このテープレコーダーは電池が _______ いて、動かない。",
        options: ["きれて", "たまって", "とまって", "おくれて"],
        correctIndex: 0,
      },
      {
        question:
          "大きな仕事を完成させるためには、人と対立することがあっても _______ と思う。",
        options: [
          "うむをえない",
          "やむをえらない",
          "やむをえない",
          "うむをえらない",
        ],
        correctIndex: 2,
      },
      {
        question: "信号が青になって、止まっていた車が _______ 走り出した。",
        options: ["いっそうに", "いっぱんに", "いっせいに", "いったんに"],
        correctIndex: 2,
      },
      {
        question:
          "今年文学賞をもらった作家に、新聞記者が _______ をして記事を書いた。",
        options: ["ステージ", "コンクール", "インタビュー", "レクリエーション"],
        correctIndex: 2,
      },
      {
        question:
          "姉は健康のため、プールに通っている。私も姉に _______ 、水泳を始めることにした。",
        options: ["かわって", "ならって", "まざって", "ならんで"],
        correctIndex: 1,
      },
      {
        question: "食べたら歯をみがく習慣を _______ ものだ。",
        options: ["もらいたい", "とりたい", "つけたい", "したい"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 1,
    questions: [
      {
        question:
          "米国の心理学者によると、新しい環境に慣れるのに20歳い平均6か月、30歳で1年、40歳では3年かかるが、19歳以下だと３か月 _______ そうです。つまり、若ければ若いほど早いと言えそうです。",
        options: ["もかかる", "しかかからない", "は必要だ", "では十分でない"],
        correctIndex: 1,
      },
      {
        question:
          "中村さんとは長時間にわたって協議した。その結果、昨夜の私の見聞に　_______　一つの戦略をたてることになった。",
        options: ["限って", "反して", "対して", "基づいて"],
        correctIndex: 3,
      },
      {
        question:
          "彼はいまこの時にも、戦場で _______　かけているかもしれない。",
        options: ["死", "死ね", "死ぬ", "死に"],
        correctIndex: 3,
      },
      {
        question: "これはシンプルで　_______　純粋で魅力的なスピーチです。",
        options: ["あってながら", "あるながら", "ありながら", "ありながらも"],
        correctIndex: 2,
      },
      {
        question:
          "私たち、これから出発するところでさ。今妻が荷造りの　_______　だ。",
        options: ["中", "際", "最中", "うち"],
        correctIndex: 2,
      },
      {
        question:
          "このような新聞報道が　_______　、黙っているわけにはいかない。",
        options: ["出た以上", "出た上", "出た以上に", "出た上に"],
        correctIndex: 0,
      },
      {
        question:
          "母親は嫌な顔ひとつしなかったが、娘の食生活がどんどん変になっていく　_______　困っていた。",
        options: ["のには", "のから", "のでは", "のとは"],
        correctIndex: 0,
      },
      {
        question:
          "誰だって、子供のころ、おもちゃをなくすという辛い経験をしたこと　_______　。",
        options: [
          "ではないだろう",
          "ではあるまい",
          "にかぎらない",
          "があるだろう",
        ],
        correctIndex: 3,
      },
      {
        question:
          "この仕事は、忙しくて大変な　_______　、給料があまりよくない。",
        options: ["かわりに", "わりに", "だけに", "かぎりに"],
        correctIndex: 1,
      },
      {
        question:
          "先生の講義が終わるか　_______　かのうちに、ノートや教科書を閉じてかたづけはじめる学生もいる。",
        options: ["終わる", "終わらない", "終わっている", "終わっていない"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 2,
    questions: [
      {
        question: "暖かくなって _______　が、いかがお過ごしでしょうか。",
        options: [
          "まいりました",
          "いただきました",
          "くださいました",
          "いらっしゃいました",
        ],
        correctIndex: 0,
      },
      {
        question:
          "携帯電話をポケットに入れて歩く _______　音楽が再生されたり電話をかけてしまったりするのはよくない。",
        options: ["ところに", "うちに", "なかに", "最中に"],
        correctIndex: 1,
      },
      {
        question:
          "行きたくない _______　はないんですが、今日は、時間がないんです。",
        options: ["ほう", "もの", "よう", "こと"],
        correctIndex: 3,
      },
      {
        question:
          "ひとりが使える清浄な水を増やしたければ、地球上の人間を減らす _______ 。",
        options: ["しかない", "ことがない", "わけがない", "はずがない"],
        correctIndex: 0,
      },
      {
        question:
          "十四世紀、イタリア文学は、ある基準 _______ ふたつの種類に分けられていました。",
        options: ["にかけて", "にわたって", "によって", "につけて"],
        correctIndex: 2,
      },
      {
        question: "日本語は、勉強すれば _______ ほど難しくなるような気がする。",
        options: ["した", "する", "して", "すれ"],
        correctIndex: 1,
      },
      {
        question:
          "息子はコーチが用意した練習メニュー _______ 一生懸命練習を続けている。",
        options: ["にとって", "に対して", "に関して", "に従って"],
        correctIndex: 3,
      },
      {
        question:
          "そういった落ちつかない日々が何週間かつづいたあとで、私はまた神経を仕事に集中するようになった。いつまでもこんなことをしている _______ と思ったのだ。",
        options: [
          "わけでもない",
          "わけのわからない",
          "わけにはいかない",
          "わけではない",
        ],
        correctIndex: 2,
      },
      {
        question: "遠くからもよく見える _______ 、字を大きく書いてください。",
        options: ["ように", "ために", "だけに", "ばかりに"],
        correctIndex: 0,
      },
      {
        question:
          "その靴はじつのところ、夕べ渋谷で _______ 、まだ一度もはいてないのです。",
        options: ["買ったすえ", "買ったきり", "買ったあと", "買ったところで"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 3,
    questions: [
      {
        question:
          "「課長、きょうは熱があるので、_______　いただきたいのですが。」",
        options: [
          "「はい、わかりました。じゃ、おだいじに。」",
          "休まれて",
          "お休みになって",
          "お休みいたして",
          "休ませて",
        ],
        correctIndex: 3,
      },
      {
        question: "あの医者の _______ 、命が助かった。",
        options: ["おかげで", "せいで", "くせに", "ためで"],
        correctIndex: 0,
      },
      {
        question: "彼は家族 _______ 、シンガポールに行くことになった。",
        options: ["としたら", "とすれば", "ろころに", "とともに"],
        correctIndex: 3,
      },
      {
        question: "有能なA君のこと _______ 、きっといい仕事をするだろう。",
        options: ["ながら", "にして", "だから", "にせよ"],
        correctIndex: 2,
      },
      {
        question:
          "わたしは彼女にいろいろ親切にしたつもりなんですが、感謝されるどころか、_______ 。",
        options: [
          "うらまれました",
          "とても喜ばれました",
          "もっと感謝すべきです",
          "とてもうれしそうでした",
        ],
        correctIndex: 0,
      },
      {
        question:
          "桜の種類は、昔はあまり多くなかったが、今 _______ 、300種以上にもなっている。",
        options: ["では", "でも", "には", "にも"],
        correctIndex: 0,
      },
      {
        question:
          "女性の管理職が増えたといわれているが、まだほんの１割程度 _______ 。",
        options: ["に限りない", "にすぎない", "に達している", "に及んでいる"],
        correctIndex: 1,
      },
      {
        question: "先生がていねいにご説明 _______ ので、私もよくわかりました。",
        options: ["いただいた", "くださった", "いたした", "さしあげた"],
        correctIndex: 1,
      },
      {
        question:
          "日本へ来てしばらくは、国へ電話はかけるまいと思っていたが、今日はさびしくてたまらず、つい _______ 。",
        options: [
          "かけたかった",
          "かけるべきだ",
          "かけてしまった",
          "かけるはずだ",
        ],
        correctIndex: 2,
      },
      {
        question:
          "商品というのは、店に並べておくだけで、それを買う人がいなければ、商品として成立しない。とすると、高すぎて品物が売れない場合には _______ 。そうすることによって、その品物の買い手が見つかり、その結果はじめて商品になるわけだ。",
        options: [
          "値下げすることはない",
          "値下げすべきではない",
          "値下げせざるをえない",
          "値下げするおそれがある",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 4,
    questions: [
      {
        question:
          "先週は試験勉強 _______　。毎日、送別会や歓迎会で夜遅くまで帰れなかった。",
        options: [
          "どころではなかった",
          "するはずではなかった",
          "しかなかった",
          "するべきではなかった",
        ],
        correctIndex: 0,
      },
      {
        question:
          "高木はひどく無口のうえに超然としている _______　、友だちというものがない。",
        options: ["ものか", "ためか", "ものだから", "からして"],
        correctIndex: 2,
      },
      {
        question: "朝起きて外を _______　、雪がふっていました。",
        options: ["見て", "見ると", "見るなら", "見ながら"],
        correctIndex: 1,
      },
      {
        question:
          "直子は七歳のときに家出したが、聡明な _______　、見つかることなく十日間もひとりで生きていた。",
        options: ["だけあって", "だけに", "だけ", "だけは"],
        correctIndex: 0,
      },
      {
        question:
          "技術が進歩してなにかが新しくできるようになると、それを _______　のです。",
        options: [
          "使ってみたくてならない",
          "使ってみたくてたまらない",
          "使ってみたくてしょうがない",
          "使ってみたくて当然",
        ],
        correctIndex: 1,
      },
      {
        question:
          "周りがうるさくしゃべる _______　、なにか考えようにも気が散ってしまう。",
        options: ["ものの", "ものがある", "ものだから", "ものか"],
        correctIndex: 2,
      },
      {
        question:
          "今のロンドンの成長率　_______　、この先の二十年で彼の資産価値は十倍以上にふくらむだろう。",
        options: ["からこそ", "からには", "からして", "からすれば"],
        correctIndex: 3,
      },
      {
        question: "私はサプライズギフトが大好きで、開けてみずには　_______　。",
        options: ["いられない", "なりえない", "おわらない", "とまらまい"],
        correctIndex: 0,
      },
      {
        question:
          "山本はスライドを示しながら、３０分　_______　本社のデザインについて説明した。",
        options: ["において", "にそって", "につけ", "にわたって"],
        correctIndex: 3,
      },
      {
        question: "どんな人か、実際会ってみないことには、_______　。",
        options: [
          "だいたいわかるだろう",
          "わかるはずだ",
          "わからなければならない",
          "よくわからない",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 5,
    questions: [
      {
        question: "真実は死者の目　_______　のみ見える。",
        options: ["をめぐって", "をもとに", "をはじめ", "を通して"],
        correctIndex: 3,
      },
      {
        question: "「禁帯出」とは、外に　_______　ならない、という意味である。",
        options: ["持ち出し", "持ち出しては", "持ち出したら", "持ち出すと"],
        correctIndex: 1,
      },
      {
        question:
          "火事が起こると、このドアは自動的に閉まる　_______　になっています。",
        options: ["べき", "ため", "よう", "そう"],
        correctIndex: 2,
      },
      {
        question:
          "あなたが何を見つけようと、それは途方もなく危険なもの　_______　。おおぜいの人間が私たちを殺そうとしてるんだから。",
        options: [
          "に間違いない",
          "に越したことはない",
          "に相違ない",
          "に決まっている",
        ],
        correctIndex: 3,
      },
      {
        question: "あの人は人殺し　_______　、そのうえ泥棒でございます。",
        options: ["ではなく", "どころか", "だけでなく", "ばかりか"],
        correctIndex: 2,
      },
      {
        question:
          "妻が準備したのは、親しい友達や仕事仲間　_______　パーティーだった。",
        options: ["を中心とした", "を契機に", "を除いて", "を問わず"],
        correctIndex: 0,
      },
      {
        question: "幸いな　_______　、社長はこのアイデアが気に入った。",
        options: ["ことに", "せいで", "ものから", "ばかりに"],
        correctIndex: 0,
      },
      {
        question:
          "階段をのぼりきった　_______　、警官がキーパッドにいくつか番号を打ち込むと、ブザー音とともにドアが開いた。",
        options: ["すえ", "なかで", "うえで", "ところで"],
        correctIndex: 3,
      },
      {
        question:
          "お父さんの病気はすぐによくなるから、君は何も心配する　_______　。",
        options: ["ことはない", "ことはある", "ことでない", "ことである"],
        correctIndex: 0,
      },
      {
        question:
          "来る　_______　生徒のひとりが階段の下で立ち止まり、後ろを向いた。",
        options: ["最中に", "途中で", "うちに", "同時に"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 1,
    questions: [
      {
        question:
          "ケネディ殺害の容疑者は _______ に謎を残したままマフィアに撃たれて死亡した。",
        options: ["動機", "本音", "動力", "下心"],
        correctIndex: 0,
      },
      {
        question:
          "いつ見つけても _______ の早いがんでは予後が悪く、遅いがんは予後がいい。早くても遅くても意味はないのです。",
        options: ["先進", "増進", "進出", "進行"],
        correctIndex: 3,
      },
      {
        question:
          "インターネット広告 _______ と広告の効果の関係について考えてみよう。",
        options: ["値", "費", "料", "額"],
        correctIndex: 1,
      },
      {
        question:
          "この数年間で千葉や隣接県では女児連れ去り事件が多発していた。まだ _______ 解決の案件もあるが、未遂に終わり、容疑者が逮捕されたケースもある。",
        options: ["非", "双", "未", "無"],
        correctIndex: 2,
      },
      {
        question:
          "辞書を引いたら、最初に _______ されている語義だけでなく、すべての語義をざっと確認する習慣を付けましょう。",
        options: ["記載", "援用", "参照", "出典"],
        correctIndex: 0,
      },
      {
        question:
          "専門学校で、デザインという仕事の難しさに _______ することになりました。",
        options: ["対決", "直面", "抵抗", "挑戦"],
        correctIndex: 1,
      },
      {
        question: "この機械を _______ にはかなりの技術が必要だ。",
        options: ["使いこなす", "使いおわる", "使いはたす", "使いすてる"],
        correctIndex: 0,
      },
      {
        question:
          "最近の青少年はしっかりしているようだが、精神的に _______ 面がある。",
        options: ["しぶい", "だるい", "ゆるい", "もろい"],
        correctIndex: 3,
      },
      {
        question: "何回会議をやっても結論が出ないので、_______ いやになった。",
        options: ["つくづく", "わざわざ", "ぞくぞくと", "くれぐれも"],
        correctIndex: 0,
      },
      {
        question: "不況の影響で、この地域の中小企業は _______ 倒産した。",
        options: ["いまさら", "ひたすら", "のきなみ", "ひいては"],
        correctIndex: 2,
      },
      {
        question: "年をとると、だんだん新しい考え方が _______ にくくなる。",
        options: ["うけあい", "うけいれ", "うけとり", "うけもち"],
        correctIndex: 1,
      },
      {
        question:
          "このアンケートに協力するかしないかは自由で、________ はしないということにしたい。",
        options: ["圧迫", "強制", "催促", "一致"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 2,
    questions: [
      {
        question:
          "アップルは１０億ドルの赤字に _______ し、１９９１年に７０ドルだった株価は１４ドルと低迷した。",
        options: ["転落", "減少", "緊縮", "締付"],
        correctIndex: 0,
      },
      {
        question:
          "_______ のほうの女の子がファッションショーで見るみたいな優雅な足取りですばやく去った。",
        options: ["小売", "小銭", "小柄", "小児"],
        correctIndex: 2,
      },
      {
        question:
          "ワシントン条約は、サイの角の国際取引を _______ いるが、ベトナムや中国への密輸はなくならない。",
        options: ["案じて", "禁じて", "報じて", "興じて"],
        correctIndex: 1,
      },
      {
        question:
          "もちろん、こうしたロシアの動きを受けて、北極圏の他の国々も軍事面で北方を注視するようになり、_______ も北に移している。",
        options: ["軍隊力", "軍艦力", "軍事力", "軍備力"],
        correctIndex: 2,
      },
      {
        question:
          "そのとき、かなたからサイレンの音が聞こえ、疲労 _______ が自分に重くのしかかるのを感じた。",
        options: ["力", "感", "覚", "性"],
        correctIndex: 1,
      },
      {
        question:
          "密猟からサイを守るための _______ は、ほぼマイケルのような飼育家の肩にのしかかっているのが現状だ。",
        options: ["負担", "厄介", "積載", "干渉"],
        correctIndex: 0,
      },
      {
        question:
          "体力が回復するまで二、三週間 _______ にして、抗生物質と流動食を与える必要がある。",
        options: ["沈静", "平和", "安静", "円満"],
        correctIndex: 2,
      },
      {
        question:
          "この仕事には特別な資格はいらないが、日本語がある程度できることが _______ 。",
        options: ["のぞましい", "ふさわしい", "まちどおしい", "めざましい"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ 性格でみんなに好かれている。",
        options: ["明確な", "明解な", "明朗な", "明白な"],
        correctIndex: 2,
      },
      {
        question: "首相の軽率な発言で、良好であった両国の関係が _______ 。",
        options: [
          "きずきはじめた",
          "きたえはじめた",
          "きしみはじめた",
          "きざみはじめた",
        ],
        correctIndex: 2,
      },
      {
        question: "わたしの秘書はとても _______ がいいので助かっている。",
        options: ["てぎわ", "しらべ", "こころえ", "うちわけ"],
        correctIndex: 0,
      },
      {
        question: "この都市は、周辺から人が集まりすぎて _______ 状態だ。",
        options: ["過密", "窮屈", "不潔", "不服"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 3,
    questions: [
      {
        question:
          "無辜の者が _______ されるという不正義ほど理不尽なものはこの世に存在しない。",
        options: ["裁決", "所見", "審判", "処罰"],
        correctIndex: 3,
      },
      {
        question: "Ｘ線撮影をして、_______ 出血の徴候がないことを確認した。",
        options: ["内", "上", "中", "下"],
        correctIndex: 0,
      },
      {
        question: "この国内取引禁止措置は、近く _______ されるかもしれない。",
        options: ["解約", "解放", "解釈", "解除"],
        correctIndex: 3,
      },
      {
        question: "店舗の大きさはブランドの価値を示すと社長は _______ した。",
        options: ["識別", "指摘", "認定", "束縛"],
        correctIndex: 1,
      },
      {
        question:
          "波打ち _______ では、鳥たちが目を凝らしてエサをついばんでいる。",
        options: ["際", "辺", "側", "端"],
        correctIndex: 0,
      },
      {
        question: "Suicaの _______ は、実は国鉄時代から進められてきた。",
        options: ["搾取", "収奪", "拓殖", "開発"],
        correctIndex: 3,
      },
      {
        question: "国内取引を解禁することには _______ な反対論もある。",
        options: ["堅調", "強硬", "健全", "固体"],
        correctIndex: 1,
      },
      {
        question: "これから、この経験を仕事に _______ いきたいと思う。",
        options: ["生かして", "慣れて", "使って", "努力して"],
        correctIndex: 0,
      },
      {
        question: "最近仕事が忙しくて、社員は _______ 気味だ。",
        options: ["過多", "過剰", "過労", "過密"],
        correctIndex: 2,
      },
      {
        question: "周囲の人々の気持ちに _______ して対策を考えるべきだ。",
        options: ["気配", "配慮", "配置", "分配"],
        correctIndex: 1,
      },
      {
        question:
          "知らない漢字でも、その部首を見て意味を _______ できることがある。",
        options: ["予知", "予言", "推進", "類推"],
        correctIndex: 3,
      },
      {
        question:
          "たいこの音が聞こえてきて、祭りの _______ がいちだんと盛り上がってきた。",
        options: ["ブーム", "ポーズ", "ムード", "リード"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 4,
    questions: [
      {
        question: "自然保護を _______ に入れた開発計画が大事だ。",
        options: ["思考", "想像", "促進", "考慮"],
        correctIndex: 3,
      },
      {
        question:
          "科学技術の歴史からみると、コンピューターの発明は _______ できごとだった。",
        options: ["画期的な", "周期的な", "定期的な", "末期的な"],
        correctIndex: 0,
      },
      {
        question:
          "高い木に登っている子供が落ちはしないかと、大人は _______ して見ている。",
        options: ["はらはら", "ひらひら", "ぶかぶか", "ふらふち"],
        correctIndex: 0,
      },
      {
        question:
          "大型の台風が近づいているので、きょうは出発を _______ ことにした。",
        options: ["見はからう", "見ならう", "見のがす", "見あわせる"],
        correctIndex: 3,
      },
      {
        question:
          "あれ、まだ家にいたんですか。_______ もう出かけたのだと思っていました。",
        options: ["きっかり", "てっきり", "じっくり", "きっちり"],
        correctIndex: 1,
      },
      {
        question:
          "けがをしたが、その場ですぐ _______ 処置をしたので、大事にはいたらなかった。",
        options: ["救援", "救助", "応急", "応援"],
        correctIndex: 2,
      },
      {
        question: "年をとったせいか、何をするのも _______ 。",
        options: ["まぎらわしい", "なやましい", "みすぼらしい", "わずらわしい"],
        correctIndex: 3,
      },
      {
        question: "この古い寺の庭は _______ がある。",
        options: ["おおすじ", "おもむき", "おとも", "おそれ"],
        correctIndex: 1,
      },
      {
        question: "計画がうまく行くように、みんなで作戦を _______ 。",
        options: ["こめた", "ねった", "ほどこした", "あつらえた"],
        correctIndex: 1,
      },
      {
        question:
          "テレビ番組の表現が差別的だったので、さっそく放送局に _______ した。",
        options: ["協議", "決議", "抗議", "物議"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 5,
    questions: [
      {
        question: "仕事はできるだけ早めに始めるように _______ いる。",
        options: ["いどんで", "とりくんで", "こころがけて", "はかどって"],
        correctIndex: 2,
      },
      {
        question:
          "田中さんは目上の人にはていねいだが、下の人にはとても _______ なる。",
        options: ["おろかに", "おろそかに", "ぞんざいに", "つきなみに"],
        correctIndex: 2,
      },
      {
        question:
          "始めて会った瞬間、_______ 的にこの人とはうまくいくと思った。",
        options: ["主観", "悲観", "予感", "直感"],
        correctIndex: 3,
      },
      {
        question: "彼は仕事に対する _______ があまい。",
        options: ["常識", "知識", "認識", "見識"],
        correctIndex: 2,
      },
      {
        question: "彼は将来 _______ 小説家だ。",
        options: ["有効な", "有利な", "有益な", "有望な"],
        correctIndex: 3,
      },
      {
        question: "彼は _______ 勢いで仕事を片付けていった。",
        options: ["もうれつな", "ものずきな", "だいたんな", "たくみな"],
        correctIndex: 0,
      },
      {
        question: "この深刻な不況の中で、_______ 見通しを持つ人は少ない。",
        options: ["間接的な", "平均的な", "楽観的な", "伝統的な"],
        correctIndex: 2,
      },
      {
        question:
          "人間関係でこんなに苦労するなら、_______ この会社をやめてしまおう。",
        options: ["いっこうに", "いっしんに", "いったい", "いっそ"],
        correctIndex: 3,
      },
      {
        question:
          "建物に入るのに、いちいち証明書を見せなければならないので、本当に _______ 。",
        options: [
          "わずらわしい",
          "まちどおしい",
          "みすぼらしい",
          "はなはだしい",
        ],
        correctIndex: 0,
      },
      {
        question:
          "この選手は _______ が足りないので、いつも最後に負けてしまう。",
        options: ["はげみ", "はずみ", "ねばり", "むすび"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 1,
    questions: [
      {
        question:
          "私の調べたかぎりでは、何人と _______ その男を害することを欲するような理由が、どこにもまったく見あたらないんですよ。",
        options: ["いえども", "いったらば", "いえばこそ", "いったからには"],
        correctIndex: 0,
      },
      {
        question:
          "さすがに一流の歌手　_______ 違う。１回の出演料が数百万円だという。",
        options: ["ともすると", "ともなると", "のはいえ", "といっても"],
        correctIndex: 1,
      },
      {
        question:
          "車が角を曲がると、橋本は身を起こし、わたしの血　_______ の腕を握った。",
        options: ["ずくめ", "まみれ", "ばはり", "みずく"],
        correctIndex: 1,
      },
      {
        question:
          "人前で演技をするのは初めての経験　_______ 、彼はひどく緊張していた。",
        options: ["とあって", "にあって", "として", "にして"],
        correctIndex: 0,
      },
      {
        question:
          "コンピュータがデジタルハブになると最初に見 _______ のはわが社だ。",
        options: ["ぬいて", "ぬく", "ぬいた", "ぬき"],
        correctIndex: 2,
      },
      {
        question:
          "もう少し早く病院に行けば助かった　_______ 、放っておいたので、手遅れになってしまった。",
        options: ["もので", "ものか", "ものを", "ものに"],
        correctIndex: 2,
      },
      {
        question:
          "中村は三杯目のウォッカを飲みほし、キッチンの窓から外を見る　_______ 見た。",
        options: ["ばかりか", "のみならず", "ともなしに", "どころではなく"],
        correctIndex: 2,
      },
      {
        question:
          "彼は自分の息子がどうなっているかを、一度　_______ 調べようとはしない。",
        options: ["よりも", "だけは", "たりとも", "ばかりか"],
        correctIndex: 2,
      },
      {
        question: "子どものころ、死については　_______ だに恐ろしかった。",
        options: ["考え", "考えた", "考えて", "考える"],
        correctIndex: 3,
      },
      {
        question:
          "僕が席に着く　_______ 、彼女が待ってましたとばかりにやって来た。",
        options: ["次第で", "や否や", "が最後", "末に"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 2,
    questions: [
      {
        question: "彼は思わせ _______ な笑みを浮かべてわたしを見た。",
        options: ["びる", "だの", "すら", "ぶり"],
        correctIndex: 3,
      },
      {
        question: "苦難に満ちたあの人の人生は、涙なくしては _______ 。",
        options: ["語る", "語らない", "語れる", "語れない"],
        correctIndex: 3,
      },
      {
        question:
          "他人を犠牲にする _______ なしに、個人の望みを達成することは困難だと考えている人も います。",
        options: ["の", "こと", "もの", "ところ"],
        correctIndex: 1,
      },
      {
        question:
          "そこは小さなアパートメントで、においについて言えば、バニラの香りのキャンドルと古いカーペットが負けじと張り合っているらしかった。家具や装飾品は貧相としか　_______ 。",
        options: [
          "言いそうもない",
          "言うそうもない",
          "言うようがない",
          "言いようがない",
        ],
        correctIndex: 3,
      },
      {
        question:
          "わかりました。貸金庫に何がはいっているの　_______ 、それを三浦さんに届けましょう。",
        options: ["であれ", "ごとき", "まじき", "にして"],
        correctIndex: 0,
      },
      {
        question:
          "あいつはどこへ逃げたかは　_______ 、どこから来たかだけはわかりそうです。",
        options: [
          "わからるほどで",
          "わからるまでも",
          "わからないほどで",
          "わからないまでも",
        ],
        correctIndex: 3,
      },
      {
        question:
          "映画を見終わって、主人公の生き方に　_______ 、自分の生き方がいかにいいかげんだったか、強く反省した。",
        options: ["かけて", "よって", "あって", "ひきかえ"],
        correctIndex: 3,
      },
      {
        question:
          "髪　_______ 、夕べはふさふさと豊かだったのに、けさはまだシャワーを浴びていないのか、べっとりと湿っている。",
        options: ["とみると", "ときている", "ときたら", "といわず"],
        correctIndex: 2,
      },
      {
        question:
          "チンパンジーは人間の模倣を　_______ のみならず、互いに協力して共同作業をしているらしいという報告もある。",
        options: ["して", "する", "せず", "しまい"],
        correctIndex: 1,
      },
      {
        question:
          "びっくりした。ただただ、ぼうぜん。あの瞬間のことは、　_______ 忘れることができない。",
        options: [
          "忘れようにも",
          "忘れても",
          "忘れようとしても",
          "忘れようとも",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 3,
    questions: [
      {
        question: "たった三十分のあいだに、高木の変わり様 _______ 。",
        options: [
          "といえなかった",
          "といおうもなかった",
          "といってもなかった",
          "といったらなかった",
        ],
        correctIndex: 3,
      },
      {
        question: "強風で、家から　_______ 出られなかった。",
        options: ["出ようにも", "出ようが", "出たなら", "出れば"],
        correctIndex: 0,
      },
      {
        question:
          "急に大学を退学したのはなぜか、わたし　_______ 思う理由があります。",
        options: ["だに", "なりに", "ままに", "なしに"],
        correctIndex: 1,
      },
      {
        question: "損失を最小限度に　_______ ことには気持ちがやすまらない。",
        options: [
          "くいとめた",
          "くいとめる",
          "くいとめない",
          "くいとめなかった",
        ],
        correctIndex: 2,
      },
      {
        question:
          "脱ぎ捨てられたドレスたちが床　_______ 、ベッド　_______ 、椅子　_______ 広げられ、鮮やかな色があれこれと重なり、そこにはぐれたリボンがごっちゃになっている。",
        options: [
          "としたって/としたって/としたって",
          "とあれば/とあれば/とあれば",
          "ともなく/ともなく/ともなく",
          "といわず/といわず/といわず",
        ],
        correctIndex: 3,
      },
      {
        question:
          "わたしたちは小道に入るころには、細かい雨さえ降りだしてきた。だが千葉くんは　_______ 、もどかしげに路をいそぐし、わたしたちもあとに続いた。",
        options: ["ものともせず", "ものとして", "ものならず", "ものながら"],
        correctIndex: 0,
      },
      {
        question:
          "白鳥がそばを離れてからはまた独りでおり、議論が白熱していくの　_______ 、一言も発さずにいた。",
        options: ["をもとに", "をよそに", "をもって", "をこめて"],
        correctIndex: 1,
      },
      {
        question:
          "できるかぎり早く新しいウェディングドレスを作ると約束しないかぎり結婚式はおこなわない」と彼女が涙　_______ 訴えた。",
        options: ["ながら", "ながらに", "ながらも", "ながらで"],
        correctIndex: 1,
      },
      {
        question:
          "申請書の提出締め切りは明日の午後４時だが、早めに出せればそれに　_______ 。",
        options: [
          "こしたことはない",
          "こすことはない",
          "こしたことではない",
          "こすことではない",
        ],
        correctIndex: 0,
      },
      {
        question:
          "彼はテレビゲームが大好きでゲーム機の前に　_______　最後、何時間でもやり続ける。",
        options: ["すわったが", "すわったの", "すわるの", "すわったから"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 4,
    questions: [
      {
        question:
          "まだ十五の小娘 _______ 、彼女にはプランテーションの女主人として責任を引き受ける心構えが充分にできている。",
        options: ["といえば", "とばかりに", "とはいえ", "ともなく"],
        correctIndex: 2,
      },
      {
        question: "身長２メートル _______ 大男が、突然、目の前に現れた。",
        options: ["だけある", "からする", "だけする", "からある"],
        correctIndex: 3,
      },
      {
        question:
          "今日び、鉄製のレールの交換 _______ 、あらゆる鉄製品は補充がきわめて困難な状況にある。",
        options: ["はおかず", "はさておき", "はおろか", "はそっちのけで"],
        correctIndex: 2,
      },
      {
        question:
          "話をおもしろくするためだろうか、あの人はものごとを大げさに言う _______ 。",
        options: [
          "きらいがある",
          "きらいではない",
          "きらいらしい",
          "きらいがない",
        ],
        correctIndex: 0,
      },
      {
        question:
          "その頃すでに、いたずらではすまされぬことをしでかして、私が裁判所から注意を受ける _______ 。",
        options: ["しまつだ", "しまいだ", "かぎりだ", "おわりだ"],
        correctIndex: 0,
      },
      {
        question:
          "大阪でわたしに会って _______ 、あなたの人生はいたってスキャンダラスなものになっているし、その責任の大半はわたしにある。",
        options: ["というもの", "はいうものの", "たるもの", "からというもの"],
        correctIndex: 3,
      },
      {
        question: "前線の兵力がますます衰え、ますます後方へと退却を _______ 。",
        options: [
          "余儀なくしている",
          "余儀なくされている",
          "余儀なくさせている",
          "余儀なくしてもらっている",
        ],
        correctIndex: 1,
      },
      {
        question:
          "人を殺さ _______ 毒物を三日前に飲まされたのに、あなたがどうしてまだ生きているの？",
        options: ["ずとも", "ずじまい", "ずにはおかない", "ずにはならない"],
        correctIndex: 2,
      },
      {
        question:
          "腕のいい熟練工たちであり、彼ら _______ 連合軍はプストル、ライフル、大砲、弾薬などを造るのにもひどく難儀していただろう。",
        options: ["なければ", "なしには", "ないので", "ないのに"],
        correctIndex: 1,
      },
      {
        question:
          "あの作家は天才なのだから、わずか三日で傑作を書いたからといって、驚く _______ 。",
        options: [
          "にはあたらない",
          "べきことだ",
          "にきまっている",
          "にちがいない",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 5,
    questions: [
      {
        question:
          "子供じゃ _______ まいし、わたしだって目はついているんだよ。あなたが妊娠していることぐり分かる。",
        options: ["いる", "ある", "である", "いっている"],
        correctIndex: 1,
      },
      {
        question:
          "君自身の問題だから、「やめてしまえ」 _______ 、いまいちど考え直してみたらどうだろうか。",
        options: [
          "とまでは言わなくて",
          "とも言うまいし",
          "とまでは言わないが",
          "とも言わねばならず",
        ],
        correctIndex: 2,
      },
      {
        question:
          "亜美はうんざりして耐えられないと _______ ばかりに口をゆがめた。",
        options: ["言った", "言わん", "言おう", "言わない"],
        correctIndex: 1,
      },
      {
        question:
          "経済問題の解決には、政府や企業の対応もさること _______ 、消費者の態度も重要な要素となる。",
        options: ["ながら", "であり", "でなく", "とともに"],
        correctIndex: 0,
      },
      {
        question:
          "必ずしも二人きりにならなくてもいいですよ。先輩がわたしたちの話に同席しても _______ のです。",
        options: ["むりである", "むりもない", "さしつかえる", "さしつかえない"],
        correctIndex: 3,
      },
      {
        question: "橋本さんは親切で _______ 五十万円くれました。",
        options: ["ありえず", "あるがまま", "あればこそ", "あってさえ"],
        correctIndex: 2,
      },
      {
        question:
          "ブラウン家の娘のなかでも一番きれいな子が、なんでまた、あんなどら声で赤ら顔で自分の耳のあたりまでしか背丈がない小男と結婚することになったのか、その理由は _______ だった。",
        options: [
          "分からずすまない",
          "分からずにはおかない",
          "分からずにはすまない",
          "分からずじまい",
        ],
        correctIndex: 3,
      },
      {
        question:
          "町　_______　のゴミを少なく運動が効を奏して、一年でゴミの量が半滅した。",
        options: ["さかり", "ぐるみ", "みどろ", "まみれ"],
        correctIndex: 1,
      },
      {
        question:
          "アメリカがこの連合国の勝利に力をかす _______ 乗り込んでくるはずだ。",
        options: ["べく", "びる", "かれ", "なみ"],
        correctIndex: 0,
      },
      {
        question:
          "実際には、彼があなたをねたんでいたと信ずる _______ 理由はないよ。",
        options: ["にたえる", "にたる", "にたりない", "にたりていない"],
        correctIndex: 1,
      },
    ],
  },
  // N5 Reading Tests
  {
    level: "N5",
    section: "reading",
    testNumber: 1,
    questions: [
      {
        passage:
          "アパートの皆さんへ\n来週の月曜日と火曜日の午前１０時から午後５時までエレベーターを使わないでください。階段を使ってください。",
        question:
          "アパートの人は、来週の月曜日と火曜日には、外に出る時、どうしますか。",
        options: [
          "来週の月曜日の午前１１時には、階段を使います。",
          "来週の月曜日の午後３時には、エレベーターを使います。",
          "来週の火曜日の午前１１時には、エレベーターを使います。",
          "来週の火曜日の午後３時には、階段を使いません。",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "きのうのよる１０時に友だちのうちに電話をしましたが、友だちはいませんでした。１時間あとでもういちどかけました。でも友だちはまだかえっていませんでした。わたしは１１時ごろねました。",
        question: "次の文で正しいのはどれですか。",
        options: [
          "わたしはきのうのよる友だちと話したあとでねました。",
          "わたしはきのうのよる友だちに１かいしか電話しませんでした。",
          "わたしはきのうのよる友だちと２かい電話で話しました。",
          "わたしはきのうのよる友だちと電話で話しませんでした。",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "先月わたしは学校の友達といっしょに、おきなわへ旅行に行きました。わたしたちは、旅行の前に、おきなわから来た日本人の友達にいろいろ（ア）。友達は、「おきなわはとうきょうよりずっと南だから、とても暑いよ。（イ）、夏の服をたくさん持っていったほうがいい」と言いました。そのころとうきょうはまだ４月だったので、きおんが１４どぐらいでした。（ウ）、わたしはおしいれのおくから、夏の洋服を出して、かばんにいっぱい入れて出かけることにしました。２はく３日の旅行ですが、一日中、おきなわの町をけんぶつしたり、海で泳いだりするので、ようふくはたくさんあったほうがいいと思ったのです。",
        question: "（ア）には何を入れますか。",
        options: ["話しました", "答えました", "呼びました", "聞きました"],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "（イ）には何を入れますか。",
        options: ["だから", "それから", "すると", "だけど"],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "（ウ）には何を入れますか。",
        options: ["そうすると", "ところが", "それで", "それに"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 2,
    questions: [
      {
        passage:
          "Ａ「きのうかさを買いました。」\nＢ「あ、そのかさですか。きれいなかさですね。高かったですか。」\nＡ「いいえ。きょねん買ったのは高くておもかったですが、このかさはかるくていいです。」",
        question: "きのう買ったかさはどんなかさですか。",
        options: [
          "高くておもいです。",
          "安いですが、おもいです。",
          "かるくてきれいです。",
          "きれいですが、高いです。",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "わたしたちはまいあさうたのれんしゅうをします。けさのれんしゅうは９時２０分から１時間でした。山川さんと大山さんは来ませんでした。高木さんは３０分おそく来ました。",
        question: "ただしいものはどれですか。",
        options: [
          "れんしゅうを休んだ人は３人です。",
          "れんしゅうは９時２０分から１時までです。",
          "高木さんは１時間れんしゅうしました。",
          "高木さんは９時５０分にれんしゅうに来ました。",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "パク: すみません、あの上にある本を見たいです。（ ア ）。\n店の人: はい、わかりました。（ イ ）。\nパク: あれです。あの『にほんご』と書いてある本です。\n店の人: これですか。\nパク　: いいえ、かんじじゃなくてひらがなで『にほんご』と書いてある本です。\n店の人: ああ、これですか。\nパク: はい、それです。それはいくらですか。\n店の人: ３０００円です。\nパク: ３０００円ですか。ちょっと高いですね。（ウ）すみません。\n店の人: いいえ。またどうぞ。",
        question: "（ア）には何を入れますか。",
        options: [
          "とりますか",
          "とりましょうか",
          "とっていますか",
          "とってくださいませんか",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "（イ）には何を入れますか。",
        options: [
          "どの本ですか",
          "どれが本ですか",
          "これは本ですか",
          "この本はありませんか",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "（ウ）には何を入れますか。",
        options: [
          "じゃ、それです",
          "じゃ、いいです",
          "じゃ、それにします",
          "じゃ、そうしましょう",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 3,
    questions: [
      {
        passage:
          "学生: すみません。この本をかりたいです。\nとしょかんの人: この学校の学生ですか。\n学生: はい。\nとしょかんの人: では、はじめにこのかみに名前とじゅうしょと電話ばんごうを書いてぐださい。\n学生: はい。\nとしょかんの人: 書きましたか。\n学生: はい。\nとしょかんの人: これはじしょですね。としょかんの中でつかってぐださい。\n学生: はい、わかりました。では、この７さつをかしてぐださい。\nとしょかんの人: ああ、学生は４さつまでです。\n学生: そうですか。では、この３さつはかりません。\nとしょかんの人: わかりました。では、こちらの本は２しゅうかん、ざっしは1しゅうかんでかえしてぐださい。きょうは１５日ですから、[_______]",
        question: "[_______] には何を入れますか。",
        options: [
          "本は２９日、ざっしは２２日です。",
          "本は２２日、ざっしは２９日です。",
          "本もざっしも２９日です。",
          "本もざっしも２２日です。",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "この学生は何さつかりましたか。",
        options: ["３さつ", "４さつ", "５さつ", "６さつ"],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "この学生はとしょかんで何をしましたか。",
        options: [
          "本に名前を書きました。",
          "かみに本の名前を書きました。",
          "じしょをかりました。",
          "本とざっしをかりました。",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "このとしょかんで学生ができることは何ですか。",
        options: [
          "ざっしを２しゅうかんかりること",
          "本を５さつかりること",
          "本やざっしを４さつまでかりること",
          "本とじしょを１しゅうかんかりること",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "リン「むらたさん、ちょっといいですか。」\nむらた「はい、なんですか。」\nリン「明日病院へ行きますから、じゅぎょうに出ません。明日の夜電話しますから、宿題をおしえてください。」\nむらた「はい、わかりました。」",
        question: "ただしいものはどれですか。",
        options: [
          "むらたさんはきょう宿題をおしえます。",
          "りんさんはきょう授業を休みます。",
          "むらたさんはあした病院へ行きます。",
          "りんさんはむらたさんに電話します。",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 4,
    questions: [
      {
        passage:
          "新しいパン屋です！\n私たちがまいあさこの店でパンを作ります。野菜は入っているパンもあります。ほかに、甘いパンもあります。\n１０月３日の月曜日からです。\n１０月５日まで甘いパンを安く売ります。\n皆さん、どうぞ来てください。",
        question: "ただしいものはどれですか。",
        options: [
          "毎週月曜日はパンが安いです。",
          "パンはまいばん店で作ります。",
          "１０月３日からいろいろなパンを売ります。",
          "野菜が入っているパンは甘いです。",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "わたしのうちにくろいねことちゃいろのいぬがいます。どちらもとてもかわいいです。いつも外であそんでいます。",
        question: "ただしいものはどれですか。",
        options: [
          "ねこもいぬもくろいです。",
          "ねこもいぬもかわいいです。",
          "ねこは外であそびますが、いぬはあそびません。",
          "ねこはくろくないですが、いぬはくろいです。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "田中さんは絵を見るのが好きです。一人でゆっくりと好きな絵を見るために、今年は５月の休みに外国へ行くことにしました。でも、一人で飛行機に乗るのははじめてで、少し心配でした。旅行した国では、日本と時間が違うので、はじめは少しねむくなりました。また食べ物もからかったので、水をたくさん飲みすぎて、お腹が痛くなってしまいました。でも、見たかった絵をゆっくり見ることができたので、そんなことはすぐ忘れてしまいました。田中さんは、旅行中に友達になった人は、今でも手紙を書いています。",
        question: "田中さんはどんなことが好きですか。",
        options: [
          "友達と美術館に行くこと",
          "一人でゆっくり絵を見ること",
          "５月の休みに旅行に行くこと",
          "外国に行って友達に手紙を書くこと",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "田中さんは旅行に行く前にどんなことが心配でしたか。",
        options: [
          "はじめて一人で飛行機に乗ること",
          "食べ物がからくて水を飲みすぎること",
          "旅行した国でねむくなってしまうこと",
          "水を飲みすぎてお腹が痛くなること",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "わたしの家から会社までちかてつでもバスでも行ける。バスはやすいが、乗るところまで遠いし、長い時間待たなければならない。ちかてつはバスにくらべると高いが、駅は近い。さいきんは運動のために天気のいい日だけは遠くまで歩いてバスに乗ることにしている。",
        question: "ただしいものはどれですか。",
        options: [
          "この人はいつもバスに乗る",
          "この人はいつもちかてつに乗る",
          "この人は雨の日はバスに乗る",
          "この人は雨の日はちかてつに乗る",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 5,
    questions: [
      {
        passage:
          "すずき　　「あのう、すみません。きのう電車にかさをわすれました。」\n駅の人　　「どこに行く電車ですか。」\nすずき　　「さくら駅に行く電車です。９時１５分につばき駅でのって、あやめ駅でおりました。」\n駅の人　　「そうですか。どんなかさですか。」\nすずき　　「長くて大きいかさです。いろはくろです。」\n駅の人　　「長くてくろいかさですね。」\nすずき　　「はい。」駅の人「ちょっとまってください…これはみじかいですね…あ、ありました。え-、２本あります。かさには名前が書いてありますか。」\nすずき　　「はい、すずきと書いてあります。」\n駅の人　　「すずき……。ああ、こちらですね。」\nすずき　　「そうです。_______！ありがとうございました。」",
        question: "_______　には何を入れますか。",
        options: ["けっこうです", "こちらこそ", "いいですね", "よかった"],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "今日すずきさんはどうして駅の人と話しましたか。",
        options: [
          "かさに名前を書いたから",
          "かさをわすれたから",
          "電車にのりたかったから",
          "さくら駅に行きたかったから",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "すずきさんのかさはつぎのどれですか。",
        options: [
          "みじかいかさで、名前が書いてあります。",
          "くろいかさで、名前が書いてあります。",
          "長いかさで、名前は書いてありません。",
          "大きいかさで、名前は書いてありません。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "王さんの日記\n昨日なおこさんと銀座のデパートに行った。なおこさんと１０時に駅の西口で会う約束をしていたが、１０時半になっても、なおこさんは来なかった。東口とまちがえたかもしれないと思って、東口のほうへ行ってみたが、やはりなおこさんはいなかった。おかしいと思ってなおこさんの家に電話をしたら、なおこさんはまだ家にいて、１２時の約束だと思っていたと言った。なおこさんがすぐ出てきてくれたので、１１時には会うことができた。",
        question:
          "王さんはどうしてなおこさんと１０時に会うことができなかったのですか。",
        options: [
          "王さんが西口と東口をまちがえていたからです。",
          "王さんが１０時と１１時をまちがえていたからです。",
          "なおこさんが西口と東口をまちがえていたからです。",
          "なおこさんが１０時と１２時をまちがえていたからです。",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "まち子さんは４年前におんがくをべんきょうしに外国へ行きました。それまでぎんこうにつとめていました。２年前に日本にかえってきました。それからずっとギタ－をおしえています。",
        question: "まち子さんは今何をしていますか。",
        options: [
          "日本でぎんこうにつとめています。",
          "外国でぎんこうにつとめています。",
          "日本でギタ－をおしえています。",
          "外国でギタ－をおしえています。",
        ],
        correctIndex: 2,
      },
    ],
  },
];
