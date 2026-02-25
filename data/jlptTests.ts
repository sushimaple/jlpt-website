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
    section: "vocabulary",
    testNumber: 6,
    questions: [
      {
        question: "このみちをまっすぐいって、_______ を右にまがってください。",
        options: ["はし", "かど", "みち", "とおり"],
        correctIndex: 1,
      },
      {
        question: "きょうは _______ がつよいので、せんたくものを外にほさないでください。",
        options: ["あめ", "かぜ", "ゆき", "くも"],
        correctIndex: 1,
      },
      {
        question: "しけんに _______ ために、まいにちべんきょうしています。",
        options: ["とおる", "うかる", "すすむ", "のぼる"],
        correctIndex: 1,
      },
      {
        question: "このりょうりは _______ がたりません。もうすこしいれましょう。",
        options: ["しお", "さとう", "こしょう", "みそ"],
        correctIndex: 0,
      },
      {
        question: "でんわばんごうを _______ にメモしておきました。",
        options: ["ノート", "カード", "チケット", "きっぷ"],
        correctIndex: 0,
      },
      {
        question: "やまださんは _______ がはやいので、いつもじかんどおりに来ます。",
        options: ["あるく", "おきる", "ねる", "おわる"],
        correctIndex: 1,
      },
      {
        question: "このくつは _______ すぎて、あるくとつかれます。",
        options: ["かるく", "おもく", "ひくく", "たかく"],
        correctIndex: 1,
      },
      {
        question: "かいしゃまで _______ でどのくらいかかりますか。",
        options: ["あるき", "あるく", "あるいて", "あるいた"],
        correctIndex: 2,
      },
      {
        question: "あの _______ のうしろにバスていがあります。",
        options: ["みせ", "たてもの", "はし", "とおり"],
        correctIndex: 1,
      },
      {
        question: "まいあさ _______ をのみながらしんぶんをよみます。",
        options: ["ごはん", "みず", "コーヒー", "パン"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 7,
    questions: [
      {
        question: "えきの _______ でともだちをまっていました。",
        options: ["いりぐち", "でぐち", "ひこうき", "ちかてつ"],
        correctIndex: 0,
      },
      {
        question: "この _______ はとてもきれいなうみがみえます。",
        options: ["まど", "かべ", "いす", "つくえ"],
        correctIndex: 0,
      },
      {
        question: "_______ にのって、きょうとへいきました。",
        options: ["タクシー", "バス", "でんしゃ", "ひこうき"],
        correctIndex: 2,
      },
      {
        question: "しゅうまつは _______ でゆっくりやすみます。",
        options: ["うち", "がいこく", "りょこう", "かいしゃ"],
        correctIndex: 0,
      },
      {
        question: "この _______ はあまくておいしいです。",
        options: ["くだもの", "やさい", "にく", "パン"],
        correctIndex: 0,
      },
      {
        question: "でんきを _______ ままねてしまいました。",
        options: ["つけて", "けして", "あけて", "しめて"],
        correctIndex: 0,
      },
      {
        question: "あの _______ はいつもこんでいます。",
        options: ["みせ", "とおり", "まち", "えき"],
        correctIndex: 1,
      },
      {
        question: "_______ をわすれないでください。",
        options: ["きっぷ", "おかね", "かばん", "でんわ"],
        correctIndex: 0,
      },
      {
        question: "この _______ はあたらしいので、とてもきれいです。",
        options: ["アパート", "うち", "へや", "まち"],
        correctIndex: 0,
      },
      {
        question: "_______ がなったので、でんわに出ました。",
        options: ["ドア", "ベル", "まど", "でんき"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 8,
    questions: [
      {
        question: "かいものに _______ いきました。",
        options: ["あるいて", "はしって", "のって", "とんで"],
        correctIndex: 0,
      },
      {
        question: "この _______ はなんとよみますか。",
        options: ["かんじ", "ひらがな", "かたかな", "えいご"],
        correctIndex: 0,
      },
      {
        question: "_______ がさむいので、コートをきています。",
        options: ["きょう", "あした", "きのう", "まいにち"],
        correctIndex: 0,
      },
      {
        question: "しょくじの _______ にてをあらいましょう。",
        options: ["まえ", "あと", "あいだ", "なか"],
        correctIndex: 0,
      },
      {
        question: "_______ のよるはねむれませんでした。",
        options: ["うるさい", "しずか", "きれい", "にぎやか"],
        correctIndex: 0,
      },
      {
        question: "この _______ はちょっとむずかしいです。",
        options: ["もんだい", "こたえ", "しつもん", "れい"],
        correctIndex: 0,
      },
      {
        question: "_______ をきいて、びっくりしました。",
        options: ["はなし", "おと", "こえ", "おんがく"],
        correctIndex: 0,
      },
      {
        question: "にほんごの _______ をならっています。",
        options: ["ぶんぽう", "れきし", "すうがく", "りか"],
        correctIndex: 0,
      },
      {
        question: "_______ がおおきいので、にもつがたくさんはこべます。",
        options: ["くるま", "じてんしゃ", "バス", "でんしゃ"],
        correctIndex: 0,
      },
      {
        question: "この _______ はどこのくにでつくられましたか。",
        options: ["くつ", "とけい", "かばん", "めがね"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 9,
    questions: [
      {
        question: "_______ にじゅぎょうがあります。",
        options: ["きょうしつ", "としょかん", "じむしょ", "うけつけ"],
        correctIndex: 0,
      },
      {
        question: "_______ をひらいて、本をよみます。",
        options: ["まど", "とびら", "でんき", "ほんだな"],
        correctIndex: 1,
      },
      {
        question: "この _______ はあついので、きをつけてください。",
        options: ["みず", "おちゃ", "スープ", "コーヒー"],
        correctIndex: 2,
      },
      {
        question: "_______ がおわったら、れんしゅうをはじめます。",
        options: ["やすみ", "しゅくだい", "じゅぎょう", "しけん"],
        correctIndex: 0,
      },
      {
        question: "_______ にでんわばんごうをかきました。",
        options: ["てがみ", "はがき", "ちず", "メモ"],
        correctIndex: 3,
      },
      {
        question: "_______ がとおいので、バスでいきます。",
        options: ["みせ", "がっこう", "えき", "びょういん"],
        correctIndex: 2,
      },
      {
        question: "この _______ はやすいですが、じょうぶです。",
        options: ["カメラ", "パソコン", "かばん", "とけい"],
        correctIndex: 2,
      },
      {
        question: "_______ をわすれたので、かえりました。",
        options: ["さいふ", "かぎ", "めがね", "ぼうし"],
        correctIndex: 1,
      },
      {
        question: "_______ がふって、かさがひつようです。",
        options: ["ゆき", "あめ", "くもり", "かぜ"],
        correctIndex: 1,
      },
      {
        question: "_______ のしたにねこがいます。",
        options: ["いす", "つくえ", "ベッド", "ソファ"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "vocabulary",
    testNumber: 10,
    questions: [
      {
        question: "この _______ はにほんごでなんといいますか。",
        options: ["もの", "こと", "ひと", "ところ"],
        correctIndex: 0,
      },
      {
        question: "_______ にえいがをみにいきます。",
        options: ["いつ", "どこ", "だれ", "なに"],
        correctIndex: 0,
      },
      {
        question: "_______ がすきなスポーツはなんですか。",
        options: ["あなた", "わたし", "かれ", "かのじょ"],
        correctIndex: 0,
      },
      {
        question: "_______ のいちにちはなんですか。",
        options: ["きょう", "たのしい", "いそがしい", "ひま"],
        correctIndex: 2,
      },
      {
        question: "_______ をのんで、びょうきをなおしました。",
        options: ["くすり", "みず", "ごはん", "くだもの"],
        correctIndex: 0,
      },
      {
        question: "_______ がきれいなので、さんぽにいきました。",
        options: ["てんき", "きおん", "きせつ", "しつど"],
        correctIndex: 0,
      },
      {
        question: "_______ にほんごをべんきょうしています。",
        options: ["まいにち", "まいしゅう", "まいつき", "まいとし"],
        correctIndex: 0,
      },
      {
        question: "この _______ はいくらですか。",
        options: ["しなもの", "みせ", "ねだん", "かいもの"],
        correctIndex: 0,
      },
      {
        question: "_______ がおおいので、バスでいきます。",
        options: ["ひと", "くるま", "みち", "まち"],
        correctIndex: 0,
      },
      {
        question: "_______ をみて、えきまでのいきかたをしりました。",
        options: ["ちず", "しんぶん", "ざっし", "ほん"],
        correctIndex: 0,
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
    level: "N4",
    section: "grammar",
    testNumber: 6,
    questions: [
      {
        question: "このレストランは _______ おいしいです。",
        options: ["とても", "あまり", "ほとんど", "なかなか"],
        correctIndex: 0,
      },
      {
        question: "でんしゃが _______ ので、いそがなくてもいいです。",
        options: ["おそい", "おくれる", "おくれた", "おくれている"],
        correctIndex: 1,
      },
      {
        question: "あした _______ なら、えいがをみにいきませんか。",
        options: ["ひま", "ひまな", "ひまだ", "ひまで"],
        correctIndex: 1,
      },
      {
        question: "この本は _______ 読むほどおもしろくなります。",
        options: ["読む", "読んだ", "読んで", "読めば"],
        correctIndex: 0,
      },
      {
        question: "かれは _______ しずかで、いい人です。",
        options: ["いつも", "いつでも", "いつか", "いつ"],
        correctIndex: 0,
      },
      {
        question: "にほんごが _______ 話せます。",
        options: ["じょうずに", "じょうずで", "じょうず", "じょうずな"],
        correctIndex: 0,
      },
      {
        question: "あの _______ はだれですか。",
        options: ["人", "人を", "人が", "人に"],
        correctIndex: 0,
      },
      {
        question: "きのう _______ で、きょうはねつがあります。",
        options: ["かぜをひいた", "かぜをひいて", "かぜをひく", "かぜをひき"],
        correctIndex: 0,
      },
      {
        question: "この _______ はいくらですか。",
        options: ["りんご", "りんごと", "りんごが", "りんごを"],
        correctIndex: 0,
      },
      {
        question: "まいにち _______ をききます。",
        options: ["おんがく", "おんがくが", "おんがくを", "おんがくに"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 7,
    questions: [
      {
        question: "ともだちが _______ ので、いっしょにべんきょうしました。",
        options: ["来た", "来て", "来る", "来たの"],
        correctIndex: 0,
      },
      {
        question: "この _______ はあたらしいです。",
        options: ["パソコン", "パソコンが", "パソコンを", "パソコンに"],
        correctIndex: 0,
      },
      {
        question: "あした _______ まえに、れんしゅうしておいてください。",
        options: ["しけん", "しけんの", "しけんだ", "しけんで"],
        correctIndex: 1,
      },
      {
        question: "やまださんは _______ がたかいです。",
        options: ["からだ", "せ", "あたま", "て"],
        correctIndex: 1,
      },
      {
        question: "この _______ はとてもむずかしいです。",
        options: ["もんだい", "もんだいが", "もんだいを", "もんだいに"],
        correctIndex: 0,
      },
      {
        question: "でんわ _______ ばんごうをおしえてください。",
        options: ["の", "が", "を", "に"],
        correctIndex: 0,
      },
      {
        question: "にほん _______ りょうりがすきです。",
        options: ["の", "が", "を", "に"],
        correctIndex: 0,
      },
      {
        question: "あの _______ はなんといいますか。",
        options: ["え", "えを", "えが", "えに"],
        correctIndex: 0,
      },
      {
        question: "まいあさ _______ をのみます。",
        options: ["ミルク", "ミルクが", "ミルクを", "ミルクに"],
        correctIndex: 2,
      },
      {
        question: "きょうは _______ がつよいです。",
        options: ["おてんき", "かぜ", "あめ", "ゆき"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 8,
    questions: [
      {
        question: "この _______ はどこでかったんですか。",
        options: ["とけい", "とけいが", "とけいを", "とけいに"],
        correctIndex: 0,
      },
      {
        question: "にほんごの _______ をべんきょうしています。",
        options: ["ぶんぽう", "ぶんぽうが", "ぶんぽうを", "ぶんぽうに"],
        correctIndex: 0,
      },
      {
        question: "あの _______ はだれのほんですか。",
        options: ["つくえ", "つくえのうえ", "つくえのした", "つくえのまえ"],
        correctIndex: 0,
      },
      {
        question: "まいにち _______ にいきます。",
        options: ["がっこう", "がっこうへ", "がっこうを", "がっこうに"],
        correctIndex: 1,
      },
      {
        question: "この _______ はおいしいです。",
        options: ["ケーキ", "ケーキが", "ケーキを", "ケーキに"],
        correctIndex: 0,
      },
      {
        question: "でんしゃ _______ のっています。",
        options: ["で", "に", "を", "が"],
        correctIndex: 1,
      },
      {
        question: "あした _______ がはじまります。",
        options: ["しけん", "しけんの", "しけんだ", "しけんで"],
        correctIndex: 0,
      },
      {
        question: "この _______ はいくらですか。",
        options: ["ほん", "ほんが", "ほんを", "ほんに"],
        correctIndex: 0,
      },
      {
        question: "にちようび _______ なにをしますか。",
        options: ["は", "が", "を", "に"],
        correctIndex: 0,
      },
      {
        question: "あの _______ はなんですか。",
        options: ["たてもの", "たてものが", "たてものを", "たてものに"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 9,
    questions: [
      {
        question: "きのう _______ をみました。",
        options: ["えいが", "えいがが", "えいがを", "えいがに"],
        correctIndex: 2,
      },
      {
        question: "まいしゅう _______ にテニスをします。",
        options: ["にど", "にども", "にどは", "にどが"],
        correctIndex: 0,
      },
      {
        question: "この _______ はだれのですか。",
        options: ["かばん", "かばんが", "かばんを", "かばんに"],
        correctIndex: 0,
      },
      {
        question: "にほん _______ いつきましたか。",
        options: ["へ", "に", "で", "を"],
        correctIndex: 1,
      },
      {
        question: "あの _______ はわたしのともだちです。",
        options: ["ひと", "ひとが", "ひとを", "ひとに"],
        correctIndex: 0,
      },
      {
        question: "きょう _______ はあついです。",
        options: ["のてんき", "てんき", "てんきが", "てんきを"],
        correctIndex: 0,
      },
      {
        question: "この _______ はにほんごでなんといいますか。",
        options: ["もの", "ものが", "ものを", "ものに"],
        correctIndex: 0,
      },
      {
        question: "まいあさ _______ をおきて、あさごはんをたべます。",
        options: ["しちじ", "しちじに", "しちじで", "しちじが"],
        correctIndex: 1,
      },
      {
        question: "あの _______ はなんのえですか。",
        options: ["え", "えが", "えを", "えに"],
        correctIndex: 0,
      },
      {
        question: "にほんご _______ がむずかしいです。",
        options: ["の", "が", "を", "に"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    testNumber: 10,
    questions: [
      {
        question: "この _______ はどこでならいましたか。",
        options: ["うた", "うたが", "うたを", "うたに"],
        correctIndex: 0,
      },
      {
        question: "あした _______ がふるかもしれません。",
        options: ["あめ", "あめが", "あめを", "あめに"],
        correctIndex: 0,
      },
      {
        question: "にほん _______ りょうりがたべたいです。",
        options: ["の", "が", "を", "に"],
        correctIndex: 0,
      },
      {
        question: "この _______ はとてもおいしいです。",
        options: ["りょうり", "りょうりが", "りょうりを", "りょうりに"],
        correctIndex: 0,
      },
      {
        question: "まいにち _______ をよみます。",
        options: ["しんぶん", "しんぶんが", "しんぶんを", "しんぶんに"],
        correctIndex: 2,
      },
      {
        question: "あの _______ はなんさいですか。",
        options: ["こども", "こどもが", "こどもを", "こどもに"],
        correctIndex: 0,
      },
      {
        question: "きょう _______ はさむいです。",
        options: ["のてんき", "てんき", "てんきが", "てんきを"],
        correctIndex: 0,
      },
      {
        question: "この _______ はだれがかきましたか。",
        options: ["え", "えが", "えを", "えに"],
        correctIndex: 0,
      },
      {
        question: "にほんご _______ べんきょうしています。",
        options: ["の", "が", "を", "に"],
        correctIndex: 2,
      },
      {
        question: "あの _______ はなんといいますか。",
        options: ["どうぶつ", "どうぶつが", "どうぶつを", "どうぶつに"],
        correctIndex: 0,
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
    section: "vocabulary",
    testNumber: 6,
    questions: [
      {
        question: "会議の _______ をまとめて、全員に配布した。",
        options: ["内容", "内側", "内部", "内面"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ な態度に、周りは困っている。",
        options: ["乱暴", "丁寧", "親切", "真面目"],
        correctIndex: 0,
      },
      {
        question: "この _______ は明日までに提出してください。",
        options: ["報告", "報酬", "返事", "回答"],
        correctIndex: 0,
      },
      {
        question: "_______ の結果、プロジェクトは成功した。",
        options: ["協力", "努力", "能力", "威力"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が広く、いろいろなことを知っている。",
        options: ["知識", "意識", "常識", "認識"],
        correctIndex: 0,
      },
      {
        question: "この問題は _______ が複雑だ。",
        options: ["状況", "状態", "場合", "様子"],
        correctIndex: 0,
      },
      {
        question: "_______ を守って、安全に運転してください。",
        options: ["規則", "規律", "紀律", "規格"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ はいつも的確だ。",
        options: ["判断", "判定", "批判", "裁判"],
        correctIndex: 0,
      },
      {
        question: "会議で _______ な意見が出た。",
        options: ["貴重", "重大", "重要", "重大"],
        correctIndex: 0,
      },
      {
        question: "この _______ は来週から始まります。",
        options: ["計画", "計算", "企画", "設計"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 7,
    questions: [
      {
        question: "彼は _______ に優れた人だ。",
        options: ["才能", "材料", "資源", "財産"],
        correctIndex: 0,
      },
      {
        question: "_______ のため、電車が遅れています。",
        options: ["事故", "事態", "事件", "事情"],
        correctIndex: 0,
      },
      {
        question: "この _______ はとても役に立つ。",
        options: ["情報", "消息", "連絡", "通信"],
        correctIndex: 0,
      },
      {
        question: "_______ をよく聞いてから決めてください。",
        options: ["説明", "解釈", "解説", "注釈"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は立派だ。",
        options: ["行動", "行為", "活動", "行動"],
        correctIndex: 0,
      },
      {
        question: "この _______ は難しい。",
        options: ["課題", "問題", "主題", "話題"],
        correctIndex: 0,
      },
      {
        question: "_______ を大切にしてください。",
        options: ["時間", "時刻", "時期", "時代"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が高い。",
        options: ["技術", "技能", "技芸", "技量"],
        correctIndex: 0,
      },
      {
        question: "この _______ は重要だ。",
        options: ["点", "所", "箇所", "部分"],
        correctIndex: 0,
      },
      {
        question: "_______ に注意してください。",
        options: ["健康", "健全", "健在", "健やか"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 8,
    questions: [
      {
        question: "彼の _______ は素晴らしい。",
        options: ["成績", "成果", "成功", "成就"],
        correctIndex: 0,
      },
      {
        question: "この _______ は複雑だ。",
        options: ["関係", "関連", "関心", "関与"],
        correctIndex: 0,
      },
      {
        question: "_______ を確認してください。",
        options: ["予定", "予約", "予想", "予測"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が深い。",
        options: ["経験", "経過", "経歴", "経由"],
        correctIndex: 0,
      },
      {
        question: "この _______ は適切だ。",
        options: ["方法", "方式", "手段", "手法"],
        correctIndex: 0,
      },
      {
        question: "_______ を尊重してください。",
        options: ["意見", "意味", "意志", "意図"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は正しい。",
        options: ["考え", "考え方", "思考", "思想"],
        correctIndex: 0,
      },
      {
        question: "この _______ は明確だ。",
        options: ["目的", "目標", "目安", "目印"],
        correctIndex: 0,
      },
      {
        question: "_______ を守ってください。",
        options: ["約束", "契約", "協定", "規定"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が豊かだ。",
        options: ["表現", "表示", "表明", "表記"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 9,
    questions: [
      {
        question: "この _______ は効果的だ。",
        options: ["対策", "対応", "対処", "対抗"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["分析", "分解", "分類", "分配"],
        correctIndex: 0,
      },
      {
        question: "_______ を向上させてください。",
        options: ["能力", "可能", "可能性", "可能"],
        correctIndex: 0,
      },
      {
        question: "この _______ は妥当だ。",
        options: ["結論", "決論", "結末", "決着"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が優れている。",
        options: ["理解力", "理解", "了解", "了承"],
        correctIndex: 0,
      },
      {
        question: "_______ を深めてください。",
        options: ["交流", "交際", "交渉", "交換"],
        correctIndex: 0,
      },
      {
        question: "この _______ は妥当だ。",
        options: ["判断", "判定", "批判", "批評"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は立派だ。",
        options: ["人格", "人物", "人柄", "人性"],
        correctIndex: 0,
      },
      {
        question: "_______ を高めてください。",
        options: ["品質", "品質", "品格", "品位"],
        correctIndex: 0,
      },
      {
        question: "この _______ は重要だ。",
        options: ["要素", "要因", "要点", "要領"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "vocabulary",
    testNumber: 10,
    questions: [
      {
        question: "彼は _______ に富んでいる。",
        options: ["創造力", "創造", "創意", "創設"],
        correctIndex: 0,
      },
      {
        question: "この _______ は適切だ。",
        options: ["評価", "評判", "批評", "評論"],
        correctIndex: 0,
      },
      {
        question: "_______ を大切にしてください。",
        options: ["信頼", "信用", "信念", "信仰"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は素晴らしい。",
        options: ["実績", "実力", "実現", "実践"],
        correctIndex: 0,
      },
      {
        question: "この _______ は効果的だ。",
        options: ["改善", "改修", "改正", "改革"],
        correctIndex: 0,
      },
      {
        question: "_______ を広げてください。",
        options: ["視野", "視点", "視力", "視界"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が鋭い。",
        options: ["観察力", "観察", "観測", "観点"],
        correctIndex: 0,
      },
      {
        question: "この _______ は明確だ。",
        options: ["方針", "方向", "方法", "方式"],
        correctIndex: 0,
      },
      {
        question: "_______ を重ねてください。",
        options: ["努力", "労力", "尽力", "勢力"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["指摘", "指示", "指名", "指導"],
        correctIndex: 0,
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
    level: "N3",
    section: "grammar",
    testNumber: 6,
    questions: [
      {
        question: "この仕事は経験 _______ やったほうがいい。",
        options: ["があると", "があれば", "があるなら", "があるから"],
        correctIndex: 1,
      },
      {
        question: "彼は約束 _______ 来なかった。",
        options: ["をしたのに", "したのに", "のに", "をのに"],
        correctIndex: 1,
      },
      {
        question: "雨 _______ 試合は中止になった。",
        options: ["なので", "のため", "だから", "なのでに"],
        correctIndex: 0,
      },
      {
        question: "彼女は泣き _______ 話した。",
        options: ["ながら", "ながらに", "つつ", "つつも"],
        correctIndex: 0,
      },
      {
        question: "この本は読む _______ おもしろい。",
        options: ["と", "ば", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ 言えば、みんな納得する。",
        options: ["が", "は", "なら", "では"],
        correctIndex: 2,
      },
      {
        question: "会議は来週 _______ 延期された。",
        options: ["に", "まで", "までに", "から"],
        correctIndex: 2,
      },
      {
        question: "彼の話 _______ 、彼は成功したそうだ。",
        options: ["によると", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "この問題は難し _______ 、時間がかかる。",
        options: ["くて", "いので", "いから", "くてに"],
        correctIndex: 0,
      },
      {
        question: "彼は医者 _______ 働いている。",
        options: ["として", "にとって", "に対して", "について"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 7,
    questions: [
      {
        question: "彼女は歌 _______ 踊りも上手だ。",
        options: ["だけでなく", "ばかりでなく", "のみならず", "しかない"],
        correctIndex: 0,
      },
      {
        question: "この薬を飲め _______ 治る。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ 誰も知らない。",
        options: ["以外", "以外に", "以外は", "以外の"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ どう思いますか。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 0,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 8,
    questions: [
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 0,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 9,
    questions: [
      {
        question: "彼女は歌 _______ 踊りも上手だ。",
        options: ["だけでなく", "ばかりでなく", "のみならず", "しかない"],
        correctIndex: 2,
      },
      {
        question: "この薬を飲め _______ 治る。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 2,
      },
      {
        question: "彼 _______ 誰も知らない。",
        options: ["以外", "以外に", "以外は", "以外の"],
        correctIndex: 2,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 0,
      },
      {
        question: "この問題 _______ どう思いますか。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 3,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 1,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 2,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 1,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "grammar",
    testNumber: 10,
    questions: [
      {
        question: "彼は医者 _______ 働いている。",
        options: ["として", "にとって", "に対して", "について"],
        correctIndex: 0,
      },
      {
        question: "彼女は泣き _______ 話した。",
        options: ["ながら", "ながらに", "つつ", "つつも"],
        correctIndex: 0,
      },
      {
        question: "この本は読む _______ おもしろい。",
        options: ["と", "ば", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ 言えば、みんな納得する。",
        options: ["が", "は", "なら", "では"],
        correctIndex: 2,
      },
      {
        question: "会議は来週 _______ 延期された。",
        options: ["に", "まで", "までに", "から"],
        correctIndex: 2,
      },
      {
        question: "彼の話 _______ 、彼は成功したそうだ。",
        options: ["によると", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "この問題は難し _______ 、時間がかかる。",
        options: ["くて", "いので", "いから", "くてに"],
        correctIndex: 1,
      },
      {
        question: "彼は約束 _______ 来なかった。",
        options: ["をしたのに", "したのに", "のに", "をのに"],
        correctIndex: 1,
      },
      {
        question: "雨 _______ 試合は中止になった。",
        options: ["なので", "のため", "だから", "なのでに"],
        correctIndex: 1,
      },
      {
        question: "この仕事は経験 _______ やったほうがいい。",
        options: ["があると", "があれば", "があるなら", "があるから"],
        correctIndex: 2,
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
    section: "vocabulary",
    testNumber: 6,
    questions: [
      {
        question: "彼の _______ な態度に、みんなが感動した。",
        options: ["真剣", "深刻", "慎重", "親切"],
        correctIndex: 0,
      },
      {
        question: "会議で _______ な意見が交わされた。",
        options: ["活発", "活気", "活動", "活躍"],
        correctIndex: 0,
      },
      {
        question: "この _______ は非常に複雑だ。",
        options: ["制度", "制定", "制限", "制御"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ に優れている。",
        options: ["交渉力", "交際", "交流", "交差"],
        correctIndex: 0,
      },
      {
        question: "_______ を慎重に検討する。",
        options: ["方策", "方法", "方針", "方向"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だった。",
        options: ["指摘", "指示", "指名", "指導"],
        correctIndex: 0,
      },
      {
        question: "この _______ は効果的だ。",
        options: ["措置", "処置", "処分", "処理"],
        correctIndex: 1,
      },
      {
        question: "_______ を重んじる文化だ。",
        options: ["和諧", "調和", "協調", "融和"],
        correctIndex: 1,
      },
      {
        question: "彼は _______ が高い。",
        options: ["洞察力", "洞察", "洞窟", "洞察的"],
        correctIndex: 0,
      },
      {
        question: "この _______ は画期的だ。",
        options: ["改革", "改修", "改正", "改善"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 7,
    questions: [
      {
        question: "_______ を欠いた判断だった。",
        options: ["公平", "公正", "公表", "公開"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は注目に値する。",
        options: ["業績", "業務", "業界", "業種"],
        correctIndex: 0,
      },
      {
        question: "_______ な対応が求められる。",
        options: ["柔軟", "柔和", "柔道", "柔らか"],
        correctIndex: 0,
      },
      {
        question: "この _______ は妥当だ。",
        options: ["見解", "見方", "見地", "見当"],
        correctIndex: 0,
      },
      {
        question: "_______ を図ることが重要だ。",
        options: ["効率化", "効力", "効果", "効用"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ に長けている。",
        options: ["説得", "説明", "解釈", "解説"],
        correctIndex: 0,
      },
      {
        question: "この _______ は革新的だ。",
        options: ["手法", "手段", "手順", "手続"],
        correctIndex: 0,
      },
      {
        question: "_______ を尊重する。",
        options: ["多様性", "多量", "多数", "多岐"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は鋭い。",
        options: ["観察", "観測", "観点", "観光"],
        correctIndex: 0,
      },
      {
        question: "この _______ は実現可能だ。",
        options: ["計画", "計算", "企画", "設計"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 8,
    questions: [
      {
        question: "_______ を凝らして検討した。",
        options: ["知恵", "知識", "知見", "知性"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["分析", "分解", "分類", "分配"],
        correctIndex: 0,
      },
      {
        question: "この _______ は不可欠だ。",
        options: ["要素", "要因", "要点", "要領"],
        correctIndex: 0,
      },
      {
        question: "_______ を深める。",
        options: ["理解", "了解", "了承", "了見"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が豊かだ。",
        options: ["経験", "経過", "経歴", "経由"],
        correctIndex: 0,
      },
      {
        question: "この _______ は適切だ。",
        options: ["評価", "評判", "批評", "評論"],
        correctIndex: 0,
      },
      {
        question: "_______ を欠かさない。",
        options: ["努力", "労力", "尽力", "勢力"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は立派だ。",
        options: ["人格", "人物", "人柄", "人性"],
        correctIndex: 0,
      },
      {
        question: "この _______ は明確だ。",
        options: ["目的", "目標", "目安", "目印"],
        correctIndex: 0,
      },
      {
        question: "_______ を守る。",
        options: ["原則", "原理", "原意", "原本"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 9,
    questions: [
      {
        question: "彼の _______ は素晴らしい。",
        options: ["実績", "実力", "実現", "実践"],
        correctIndex: 0,
      },
      {
        question: "この _______ は複雑だ。",
        options: ["状況", "状態", "場合", "様子"],
        correctIndex: 0,
      },
      {
        question: "_______ を重視する。",
        options: ["品質", "品格", "品位", "品目"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が鋭い。",
        options: ["直感", "直観", "直接", "直線"],
        correctIndex: 0,
      },
      {
        question: "この _______ は効果的だ。",
        options: ["対策", "対応", "対処", "対抗"],
        correctIndex: 0,
      },
      {
        question: "_______ を高める。",
        options: ["生産性", "生活", "生命", "生計"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["判断", "判定", "批判", "批評"],
        correctIndex: 0,
      },
      {
        question: "この _______ は重要だ。",
        options: ["観点", "観察", "観測", "観光"],
        correctIndex: 0,
      },
      {
        question: "_______ を重ねる。",
        options: ["改善", "改修", "改正", "改革"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ に富んでいる。",
        options: ["創意", "創設", "創造", "創出"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "vocabulary",
    testNumber: 10,
    questions: [
      {
        question: "この _______ は妥当だ。",
        options: ["結論", "決論", "結末", "決着"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は優れている。",
        options: ["交渉力", "交際", "交流", "交差"],
        correctIndex: 0,
      },
      {
        question: "_______ を欠いた対応だった。",
        options: ["透明性", "透過", "透視", "透明"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が深い。",
        options: ["見識", "見解", "見方", "見当"],
        correctIndex: 0,
      },
      {
        question: "この _______ は画期的だ。",
        options: ["試み", "試行", "試練", "試作"],
        correctIndex: 0,
      },
      {
        question: "_______ を尊重する。",
        options: ["自主性", "自由", "自発", "自然"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["助言", "助力", "助成", "助長"],
        correctIndex: 0,
      },
      {
        question: "この _______ は不可欠だ。",
        options: ["協力", "協調", "協定", "協会"],
        correctIndex: 0,
      },
      {
        question: "_______ を図る。",
        options: ["最適化", "最大", "最小", "最終"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が高い。",
        options: ["適応力", "適正", "適切", "適当"],
        correctIndex: 0,
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
    level: "N2",
    section: "grammar",
    testNumber: 6,
    questions: [
      {
        question: "彼は約束 _______ 必ず守る人だ。",
        options: ["をしたら", "したら", "すると", "をすると"],
        correctIndex: 1,
      },
      {
        question: "この問題は、彼 _______ 解けない。",
        options: ["にとって", "に対して", "について", "によって"],
        correctIndex: 0,
      },
      {
        question: "彼女は泣き _______ 話し始めた。",
        options: ["ながら", "ながらに", "つつ", "つつも"],
        correctIndex: 0,
      },
      {
        question: "会議は来週 _______ 延期された。",
        options: ["に", "まで", "までに", "から"],
        correctIndex: 2,
      },
      {
        question: "彼の話 _______ 、彼は成功したそうだ。",
        options: ["によると", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "この仕事は経験 _______ やったほうがいい。",
        options: ["があると", "があれば", "があるなら", "があるから"],
        correctIndex: 1,
      },
      {
        question: "彼は約束 _______ 来なかった。",
        options: ["をしたのに", "したのに", "のに", "をのに"],
        correctIndex: 1,
      },
      {
        question: "雨 _______ 試合は中止になった。",
        options: ["なので", "のため", "だから", "なのでに"],
        correctIndex: 0,
      },
      {
        question: "彼女は泣き _______ 話した。",
        options: ["ながら", "ながらに", "つつ", "つつも"],
        correctIndex: 0,
      },
      {
        question: "この本は読む _______ おもしろい。",
        options: ["と", "ば", "たら", "なら"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 7,
    questions: [
      {
        question: "彼 _______ 言えば、みんな納得する。",
        options: ["が", "は", "なら", "では"],
        correctIndex: 2,
      },
      {
        question: "会議は来週 _______ 延期された。",
        options: ["に", "まで", "までに", "から"],
        correctIndex: 2,
      },
      {
        question: "彼の話 _______ 、彼は成功したそうだ。",
        options: ["によると", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "この問題は難し _______ 、時間がかかる。",
        options: ["くて", "いので", "いから", "くてに"],
        correctIndex: 0,
      },
      {
        question: "彼は医者 _______ 働いている。",
        options: ["として", "にとって", "に対して", "について"],
        correctIndex: 0,
      },
      {
        question: "彼女は歌 _______ 踊りも上手だ。",
        options: ["だけでなく", "ばかりでなく", "のみならず", "しかない"],
        correctIndex: 0,
      },
      {
        question: "この薬を飲め _______ 治る。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ 誰も知らない。",
        options: ["以外", "以外に", "以外は", "以外の"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ どう思いますか。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 8,
    questions: [
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 0,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 9,
    questions: [
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 1,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 0,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 3,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 1,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 2,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 2,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 2,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "grammar",
    testNumber: 10,
    questions: [
      {
        question: "この問題 _______ どう思いますか。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 3,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 2,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 1,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
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
    section: "vocabulary",
    testNumber: 6,
    questions: [
      {
        question: "彼の _______ な態度に、周囲は困惑した。",
        options: ["曖昧", "明確", "的確", "適切"],
        correctIndex: 0,
      },
      {
        question: "この _______ は画期的な成果を上げた。",
        options: ["施策", "処方", "処分", "処置"],
        correctIndex: 0,
      },
      {
        question: "_______ を欠いた判断は避けるべきだ。",
        options: ["客観性", "主観", "観点", "観察"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は高く評価されている。",
        options: ["実績", "実力", "実現", "実践"],
        correctIndex: 0,
      },
      {
        question: "この _______ は慎重に検討する必要がある。",
        options: ["案件", "案内", "案外", "案内"],
        correctIndex: 0,
      },
      {
        question: "_______ を重んじる組織文化だ。",
        options: ["透明性", "透過", "透視", "透明"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ に優れている。",
        options: ["交渉力", "交際", "交流", "交差"],
        correctIndex: 0,
      },
      {
        question: "この _______ は効果が期待できる。",
        options: ["方策", "方法", "方針", "方向"],
        correctIndex: 0,
      },
      {
        question: "_______ を欠いた対応だった。",
        options: ["一貫性", "一括", "一気", "一瞬"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だった。",
        options: ["指摘", "指示", "指名", "指導"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 7,
    questions: [
      {
        question: "この _______ は革新的だ。",
        options: ["手法", "手段", "手順", "手続"],
        correctIndex: 0,
      },
      {
        question: "_______ を図ることが急務だ。",
        options: ["効率化", "効力", "効果", "効用"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は鋭い。",
        options: ["洞察力", "洞察", "洞窟", "洞察的"],
        correctIndex: 0,
      },
      {
        question: "この _______ は妥当だ。",
        options: ["見解", "見方", "見地", "見当"],
        correctIndex: 0,
      },
      {
        question: "_______ を尊重する姿勢が大切だ。",
        options: ["多様性", "多量", "多数", "多岐"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は立派だ。",
        options: ["人格", "人物", "人柄", "人性"],
        correctIndex: 0,
      },
      {
        question: "この _______ は明確だ。",
        options: ["目的", "目標", "目安", "目印"],
        correctIndex: 0,
      },
      {
        question: "_______ を守ることが重要だ。",
        options: ["原則", "原理", "原意", "原本"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は素晴らしい。",
        options: ["業績", "業務", "業界", "業種"],
        correctIndex: 0,
      },
      {
        question: "この _______ は複雑だ。",
        options: ["状況", "状態", "場合", "様子"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 8,
    questions: [
      {
        question: "_______ を凝らして検討した。",
        options: ["知恵", "知識", "知見", "知性"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["分析", "分解", "分類", "分配"],
        correctIndex: 0,
      },
      {
        question: "この _______ は不可欠だ。",
        options: ["要素", "要因", "要点", "要領"],
        correctIndex: 0,
      },
      {
        question: "_______ を深めることが大切だ。",
        options: ["理解", "了解", "了承", "了見"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が豊かだ。",
        options: ["経験", "経過", "経歴", "経由"],
        correctIndex: 0,
      },
      {
        question: "この _______ は適切だ。",
        options: ["評価", "評判", "批評", "評論"],
        correctIndex: 0,
      },
      {
        question: "_______ を欠かさない姿勢が大切だ。",
        options: ["努力", "労力", "尽力", "勢力"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は優れている。",
        options: ["適応力", "適正", "適切", "適当"],
        correctIndex: 0,
      },
      {
        question: "この _______ は画期的だ。",
        options: ["試み", "試行", "試練", "試作"],
        correctIndex: 0,
      },
      {
        question: "_______ を尊重する。",
        options: ["自主性", "自由", "自発", "自然"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 9,
    questions: [
      {
        question: "彼の _______ は的確だ。",
        options: ["助言", "助力", "助成", "助長"],
        correctIndex: 0,
      },
      {
        question: "この _______ は不可欠だ。",
        options: ["協力", "協調", "協定", "協会"],
        correctIndex: 0,
      },
      {
        question: "_______ を図ることが重要だ。",
        options: ["最適化", "最大", "最小", "最終"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が高い。",
        options: ["創造力", "創造", "創意", "創設"],
        correctIndex: 0,
      },
      {
        question: "この _______ は妥当だ。",
        options: ["結論", "決論", "結末", "決着"],
        correctIndex: 0,
      },
      {
        question: "_______ を重んじる。",
        options: ["信頼", "信用", "信念", "信仰"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は優れている。",
        options: ["交渉力", "交際", "交流", "交差"],
        correctIndex: 0,
      },
      {
        question: "この _______ は効果的だ。",
        options: ["改善", "改修", "改正", "改革"],
        correctIndex: 0,
      },
      {
        question: "_______ を広げることが大切だ。",
        options: ["視野", "視点", "視力", "視界"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が鋭い。",
        options: ["観察力", "観察", "観測", "観点"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "vocabulary",
    testNumber: 10,
    questions: [
      {
        question: "この _______ は明確だ。",
        options: ["方針", "方向", "方法", "方式"],
        correctIndex: 0,
      },
      {
        question: "_______ を重ねることが成功の鍵だ。",
        options: ["努力", "労力", "尽力", "勢力"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["指摘", "指示", "指名", "指導"],
        correctIndex: 0,
      },
      {
        question: "この _______ は重要だ。",
        options: ["観点", "観察", "観測", "観光"],
        correctIndex: 0,
      },
      {
        question: "_______ を高めることが課題だ。",
        options: ["生産性", "生活", "生命", "生計"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だ。",
        options: ["判断", "判定", "批判", "批評"],
        correctIndex: 0,
      },
      {
        question: "この _______ は効果的だ。",
        options: ["対策", "対応", "対処", "対抗"],
        correctIndex: 0,
      },
      {
        question: "_______ を重視する。",
        options: ["品質", "品格", "品位", "品目"],
        correctIndex: 0,
      },
      {
        question: "彼は _______ が鋭い。",
        options: ["直感", "直観", "直接", "直線"],
        correctIndex: 0,
      },
      {
        question: "この _______ は妥当だ。",
        options: ["結論", "決論", "結末", "決着"],
        correctIndex: 0,
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
  {
    level: "N1",
    section: "grammar",
    testNumber: 6,
    questions: [
      {
        question: "彼 _______ この問題は解決できない。",
        options: ["なくしては", "なしには", "なくては", "ないでは"],
        correctIndex: 1,
      },
      {
        question: "彼女の説明 _______ 、事態は深刻らしい。",
        options: ["によれば", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "彼は約束 _______ 行動する人だ。",
        options: ["をしたら", "したら", "すると", "をすると"],
        correctIndex: 1,
      },
      {
        question: "この _______ は避けられない。",
        options: ["結果", "結末", "結論", "決着"],
        correctIndex: 0,
      },
      {
        question: "彼の _______ は的確だった。",
        options: ["指摘", "指示", "指名", "指導"],
        correctIndex: 0,
      },
      {
        question: "会議は来週 _______ 延期された。",
        options: ["に", "まで", "までに", "から"],
        correctIndex: 2,
      },
      {
        question: "彼の話 _______ 、彼は成功したそうだ。",
        options: ["によると", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "この問題は難し _______ 、時間がかかる。",
        options: ["くて", "いので", "いから", "くてに"],
        correctIndex: 0,
      },
      {
        question: "彼は医者 _______ 働いている。",
        options: ["として", "にとって", "に対して", "について"],
        correctIndex: 0,
      },
      {
        question: "彼女は泣き _______ 話した。",
        options: ["ながら", "ながらに", "つつ", "つつも"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 7,
    questions: [
      {
        question: "この本は読む _______ おもしろい。",
        options: ["と", "ば", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ 言えば、みんな納得する。",
        options: ["が", "は", "なら", "では"],
        correctIndex: 2,
      },
      {
        question: "会議は来週 _______ 延期された。",
        options: ["に", "まで", "までに", "から"],
        correctIndex: 2,
      },
      {
        question: "彼の話 _______ 、彼は成功したそうだ。",
        options: ["によると", "によって", "について", "に対して"],
        correctIndex: 0,
      },
      {
        question: "この仕事は経験 _______ やったほうがいい。",
        options: ["があると", "があれば", "があるなら", "があるから"],
        correctIndex: 1,
      },
      {
        question: "彼は約束 _______ 来なかった。",
        options: ["をしたのに", "したのに", "のに", "をのに"],
        correctIndex: 1,
      },
      {
        question: "雨 _______ 試合は中止になった。",
        options: ["なので", "のため", "だから", "なのでに"],
        correctIndex: 0,
      },
      {
        question: "彼女は歌 _______ 踊りも上手だ。",
        options: ["だけでなく", "ばかりでなく", "のみならず", "しかない"],
        correctIndex: 0,
      },
      {
        question: "この薬を飲め _______ 治る。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ 誰も知らない。",
        options: ["以外", "以外に", "以外は", "以外の"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 8,
    questions: [
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ どう思いますか。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 0,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 0,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 9,
    questions: [
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 2,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 1,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 3,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 1,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 0,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "grammar",
    testNumber: 10,
    questions: [
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 2,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 1,
      },
      {
        question: "この問題 _______ どう思いますか。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 0,
      },
      {
        question: "彼は走り _______ 来た。",
        options: ["ながら", "つつ", "ながらに", "つつも"],
        correctIndex: 0,
      },
      {
        question: "彼女 _______ この仕事はできない。",
        options: ["なしでは", "なしに", "なくて", "ないで"],
        correctIndex: 0,
      },
      {
        question: "彼は来る _______ 待っていた。",
        options: ["まで", "までに", "うちに", "あいだ"],
        correctIndex: 2,
      },
      {
        question: "この本は読め _______ 読むほどおもしろい。",
        options: ["ば", "と", "たら", "なら"],
        correctIndex: 0,
      },
      {
        question: "彼 _______ この問題は解けない。",
        options: ["以外に", "以外は", "以外の", "以外で"],
        correctIndex: 1,
      },
      {
        question: "彼は来る _______ 言っていた。",
        options: ["と", "って", "ように", "そうに"],
        correctIndex: 0,
      },
      {
        question: "この問題 _______ 考えている。",
        options: ["について", "に対して", "によって", "にとって"],
        correctIndex: 3,
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
  {
    level: "N5",
    section: "reading",
    testNumber: 6,
    questions: [
      {
        passage:
          "たなかさんへ\nあしたのパーティーは何時からですか。わたしは５時まで仕事があります。仕事がおわってから行きます。",
        question: "この人はいつパーティーに行きますか。",
        options: [
          "５時まえに行きます。",
          "５時ごろ行きます。",
          "５時すぎに行きます。",
          "仕事を休んで行きます。",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "きょうしつに「しずかに」と書いてあります。",
        question: "何をしなければなりませんか。",
        options: [
          "大きい声で話します。",
          "静かにします。",
          "走ります。",
          "歌います。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "この店は月曜日が休みです。火曜日から日曜日まであいています。",
        question: "土曜日にこの店で買い物ができますか。",
        options: [
          "いいえ、できません。",
          "はい、できます。",
          "月曜日だけできます。",
          "日曜日だけできません。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "山田さんは毎朝７時に起きます。それから顔をあらって、朝ごはんを食べます。８時に家を出ます。",
        question: "山田さんは何時に家を出ますか。",
        options: ["７時", "７時半", "８時", "８時半"],
        correctIndex: 2,
      },
      {
        passage:
          "この電車は東京駅で止まりません。次の駅まで行きます。",
        question: "東京駅で何をしますか。",
        options: [
          "電車に乗ります。",
          "電車を降りません。",
          "電車が止まります。",
          "次の駅で降ります。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 7,
    questions: [
      {
        passage:
          "わたしのうちには犬がいます。名前はポチです。毎日わたしと散歩します。",
        question: "ポチは何ですか。",
        options: ["猫", "犬", "鳥", "魚"],
        correctIndex: 1,
      },
      {
        passage:
          "日曜日は図書館が休みです。本を借りたい人は土曜日までに来てください。",
        question: "いつ図書館で本が借りられますか。",
        options: [
          "日曜日だけ",
          "土曜日だけ",
          "日曜日以外",
          "土曜日以外",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "ここで写真を撮らないでください。",
        question: "ここで何をしてはいけませんか。",
        options: ["写真を見ること", "写真を撮ること", "写真を買うこと", "写真を送ること"],
        correctIndex: 1,
      },
      {
        passage:
          "会議は３時からです。２時５０分に会議室に集まってください。",
        question: "何時に会議室に来ますか。",
        options: ["２時", "２時５０分", "３時", "３時５０分"],
        correctIndex: 1,
      },
      {
        passage:
          "このバスは空港へ行きません。空港へ行くバスはあちらの停留所から出ます。",
        question: "空港へ行くバスはどこにありますか。",
        options: [
          "ここ",
          "あちらの停留所",
          "空港",
          "このバス",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 8,
    questions: [
      {
        passage:
          "新しい本がたくさん入りました。借りたい人はカードを持って来てください。",
        question: "本を借りるとき、何が必要ですか。",
        options: ["お金", "カード", "かばん", "ペン"],
        correctIndex: 1,
      },
      {
        passage:
          "明日は雨が降るでしょう。傘を持って出かけてください。",
        question: "明日何を持って出かけますか。",
        options: ["かばん", "傘", "帽子", "眼鏡"],
        correctIndex: 1,
      },
      {
        passage:
          "この道をまっすぐ行って、右に曲がってください。銀行が見えます。",
        question: "銀行はどこにありますか。",
        options: [
          "左に曲がったところ",
          "右に曲がったところ",
          "まっすぐ行ったところ",
          "曲がらないところ",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "会議の時間が変わりました。１０時から１２時までになりました。",
        question: "会議は何時から何時までですか。",
        options: ["９時から１１時", "１０時から１２時", "１１時から１時", "１２時から２時"],
        correctIndex: 1,
      },
      {
        passage:
          "ここに名前と住所を書いてください。電話番号は書かなくてもいいです。",
        question: "何を書かなければなりませんか。",
        options: [
          "名前だけ",
          "住所だけ",
          "名前と住所",
          "電話番号",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 9,
    questions: [
      {
        passage:
          "食堂は２階にあります。エレベーターで行けます。",
        question: "食堂はどこにありますか。",
        options: ["１階", "２階", "３階", "地下"],
        correctIndex: 1,
      },
      {
        passage:
          "この薬は食事の後に飲んでください。一日三回です。",
        question: "薬はいつ飲みますか。",
        options: [
          "食事の前",
          "食事の後",
          "一日一回",
          "寝る前だけ",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "申し込みは今週の金曜日までです。遅れないでください。",
        question: "いつまで申し込みができますか。",
        options: ["木曜日", "金曜日", "土曜日", "日曜日"],
        correctIndex: 1,
      },
      {
        passage:
          "今日は暑いです。冷たい飲み物を飲みましょう。",
        question: "今日どんな飲み物がいいですか。",
        options: ["熱い", "温かい", "冷たい", "涼しい"],
        correctIndex: 2,
      },
      {
        passage:
          "この部屋ではたばこを吸わないでください。外で吸ってください。",
        question: "たばこはどこで吸えますか。",
        options: ["この部屋", "どこでも", "外", "窓のそば"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N5",
    section: "reading",
    testNumber: 10,
    questions: [
      {
        passage:
          "来週の月曜日は祝日で休みです。火曜日から仕事があります。",
        question: "来週月曜日は何をしますか。",
        options: ["仕事", "休み", "学校", "会議"],
        correctIndex: 1,
      },
      {
        passage:
          "このボタンを押すと、ドアが開きます。",
        question: "ドアを開けるにはどうしますか。",
        options: ["引く", "押す", "回す", "閉める"],
        correctIndex: 1,
      },
      {
        passage:
          "会議室は予約が必要です。前の日に予約してください。",
        question: "会議室を使うにはいつ予約しますか。",
        options: [
          "使う日",
          "前の日",
          "次の日",
          "一週間前",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "この機械は壊れています。使わないでください。",
        question: "この機械を使いますか。",
        options: ["はい、使います", "いいえ、使いません", "修理してから使います", "わかりません"],
        correctIndex: 1,
      },
      {
        passage:
          "急いでいます。早く食べてください。",
        question: "どうして早く食べますか。",
        options: ["おいしいから", "急いでいるから", "たくさんあるから", "熱いから"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 1,
    questions: [
      {
        passage:
          "A「日本人が昼ごはんによく食べるものは何だと思いますか。」\nB「そうですね。日本人なら [ 1 ] おすしでしょう。」\nA「いいえ、ちがうんですよ。」\nB「じゃあ、てんぷらですか。」\nA「いいえ、てんぷらでもないんです。ちょっとからい食べ物です。」\nB「わかった！カレ－でしょう。」\nA「そうです。この間ざっしで読んだんですが、カレ－だそうです。」\nB「じゃあ、2ばんめはおすしですか。」\nA「 [ 2 ] 。でも、2ばんめもすしじゃないです。ラ－メンなんです。」\nB「そうなんですか。日本人はおすしとてんぷらをよく食べると思っていました。」\nA「私はすしが大好きで、日本にいたときよく食べました。」\nB「いいですね。わたしも日本へ行っておすしをたくさん食べたいです。」\nA「いつか行けるといいですね。日本のすしはほんとうにおいしいですから。」",
        question: "[ 1 ] には何を入れますか。",
        options: ["とても", "しっかり", "やっぱり", "たいへん"],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "[ 2 ] には何を入れますか。",
        options: [
          "そう思いませんね。",
          "そう思うでしょう。",
          "そう思いましょうか。",
          "そう思っていませんよ。",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "日本人は昼ごはんによく食べるものは何ですか。",
        options: [
          "カレ－とラ－メン",
          "カレ－とすし",
          "すしとてんぷら",
          "ラ－メンとてんぷら",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "正しいものはどれですか。",
        options: [
          "AさんもBさんも日本へ行ったことがあります。",
          "AさんもBさんも日本へ行ったことがありません。",
          "Bさんは日本へ行ったことがありますが、Aさんはありません。",
          "Aさんは日本へ行ったことがありますが、Bさんはありません。",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "（じょんさんはたけしくんの中学校で英語を教えていました。つぎのぶんはじょうんさんからたけしくんへのメ－ルです。）\nたけしくん\nメ－ル、ありがとう。前のメ－ルに「英語の勉強はつまらない」と書いてありましたが。まず好きなことから始めたらどうですか。\nぼくが日本語の勉強を始めたのは中学１年のときです。友だちの家ではじめて日本のまんがを見ました。そのときは日本語がぜんぜんわからなかったのですが、えがあるから話はだいたいわかりました。日本語で読めるようになりたいと思って、自分で勉強を始めました。かんじは、むずかしかったですが、まんがを何さつも読んでいたら、かんたんなかんじはおぼえていました。\nまんがはよくないと言う人もいますが、どんなものにもいいものと悪いものがあると思います。だから、まんがもえらんで読めばいいと思います。人をいじめるようなまんがはよくないですが、サッカ－やバスケットボ－ルなどスポ－ツのまんがはおもしろいし、読むと元気になります。\nたけしくんは、何かきょうみがありますか。音楽ですか、映画ですか。（　　　　）\nじゃ、またメ－ルします。\nジョン",
        question: "ジョンさんが日本語の勉強を始めたのはどうしてですか。",
        options: [
          "漢字をたくさんおぼえたかったから",
          "日本語でまんがを読みたいと思ったから",
          "友だちに日本のまんがをもらったから",
          "日本のまんががぜんぜんわからなかったから",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "ジョンさんはまんがについてどう思っていますか。",
        options: [
          "日本語の勉強のためにどんなまんがでも読んだほうがいい",
          "サッカ－やバスケットボ－ルのまんが以外は読んではいけない。",
          "いろいろなまんががあるので、いいものだけえらんで読んだらいい。",
          "まんがばかり読むと人をいじめるようになるので、読まないほうがいい。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "（　　　）には何を入れますか。",
        options: [
          "映画がきらいでも、毎日見ればわかるようになりますよ。",
          "日本語のまんがを読めば、漢字がおぼえられるようになりますよ。",
          "毎日れんしゅうすれば、サッカ－やバスケットボ－ルがじょうずになりますよ。",
          "英語を使って好きなことをすれば、勉強が楽しくなりますよ。",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 2,
    questions: [
      {
        passage:
          "医者「どうしましたか。川田(かわだ)さん。」\n川田「[ 1 ]。」\n医者「そうですか。いつからですか。」\n川田「きのう、ばんごはんを食べてからです。」\n医者「ばんごはんは何でしたか。」\n川田「魚と野菜です。自分で魚をやいて、サラダを作りました。」\n医者「魚は古くありませんでしたか。」\n川田「[ 2 ]。でも、とてもおいしかったです。」\n医者「そうですか。じゃあ、そこのベッドにねて、おなかをみせてください。」\n川田「はい、ちょっと待ってください。……[ 3 ]。」\n医者「ええ、けっこうです。ここを おしますよ。どうですか。いたいですか。」\n川田「はい。」\n医者「そうですか。川田さん、ばんごはんを食べすぎませんでしたか。」\n川田「ああ……。おいしかったから、ごはんを５はい食べました。」\n医者「ああ、それでいたくなったんですよ。薬を出しますから、飲んでください。」\n川田「わかりました。どうもありがとうございました。」",
        question: "[ 1 ] には何を入れますか。",
        options: [
          "おなかがいたいんです",
          "おなかがいたいでしょう",
          "おなかがいたいんですから",
          "おなかがいたくなりますか",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "[ 2 ] には何を入れますか。",
        options: [
          "ええと、ありました",
          "あのう、よく食べました",
          "ええ、そうします",
          "さあ、わかりません",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "[ 3 ] には何を入れますか。",
        options: [
          "これがいいですか",
          "これでいいですか",
          "それからいいですか",
          "それならいいですか",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "医者は、川田さんの病気のげんいんは何だと言っていますか。",
        options: [
          "食べすぎたこと",
          "おなかをおされたこと",
          "古い魚を食べたこと",
          "ばんごはんを食べなかったこと",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "かいぎ室を利用する人へ\nこのビルには、三つの大きさのかいぎ室があります。\n大かいぎ室\n５かいに一つあります。100人入れます。\n【よやくのしかた】\n３か月前から１週間前までよやくできます。ここを使いたいときは、よやくの紙に使う日や時間を書いて、じむしょに出してください。よやくの紙はじむしょでもらえます。毎月１日になると、その月のよやくを書いたカレンダーがじむしょの前にはられます。\n中かいぎ室\n６かいに一つあります。50人入れます。\n【よやくのしかた】\n２か月前から前の日までよやくできます。毎月１日に、このかいぎ室の前に２か月後の大きいカレンダーをはります。\nたとえば、３月１日には５月のカレンダーをはります。使いたい日の使いたい時間のところに名前を書いてください。\n小かいぎ室\n２かいから４かいまで一つずつあります。一つのかいぎ室に20人入れます。\n【よやくのしかた】\n１週間からよやくできます。利用する日でもよやくできます。\n使いたいときはじむしょの人に言ってください。",
        question: "このビルにはかいぎ室がぜんぶでいくつありますか。",
        options: ["三つ", "四つ", "五つ", "六つ"],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "３日前によやくできるかいぎ室はどれですか。",
        options: [
          "大かいぎ室と中かいぎ室",
          "中かいぎ室と小かいぎ室",
          "大かいぎ室と小かいぎ室",
          "ぜんぶのかいぎ室",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question:
          "４月５日に80人でかいぎをします。正しくよやくしているのはどれですか。",
        options: [
          "２月１日にかいぎ室の前のカレンダーによていを書きます。",
          "４月１日にかいぎ室の前のカレンダーによていを書きます。",
          "２月１日にじむしょへ行って、よやくの紙に書いて出します。",
          "４月１日にじむしょへ行って、よやくの紙に書いて出します。",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 3,
    questions: [
      {
        passage:
          "さとう　　「今月から仕事の時間が早くなったそうだね。」\nすぐき　「ええ。でも、朝仕事の時間に間に合わなくて……。」\nさとう　　「えっ、間に合わない？」\nすずき　「[ 1 ]。」\nさとう　　「ふん、どんなとけい？」\nすずき　「大きな音が出る時計です。ベッドのそばに四つおきました。」\nさとう　　「へえ、四つも！いっしょに音が　出たら、とても大きいね。」\nすずき　「ええ、妹に [ 2 ] とおこられました。わたしも音は聞こえるんですが、すぐ止めてまたねてしまうんです。」\nさとう　　「そうか。」\nすずき　「妹に　おこられても　いいから、早く　起きたいんです。どうしたらいいでしょうか。」\nさとう　　「そうだね。まず、時計は [ 3 ]\nようにするといいよ。たとえば、6時に起きたかったら5時50分に。」\nすずき　「10分前ですね。」\nさとう　　「そう。それから、時計をいろいろな場所におくといいよ。四つの時計がぜんぶちがう場所にあったら、音を止めるために起きなければならないから。」\nすずき　「なるほど！そうですね。すぐにやってみます。」",
        question: "[ 1 ] には何を入れますか。",
        options: [
          "時計を買ったから、だいじょうぶです",
          "時計を買ったのに、起きられないんです",
          "お金がないから、時計が買えないんです",
          "店に行ったのに、いい時計がなかったんです",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "[ 2 ] には何を入れますか。",
        options: [
          "音がうるさくてこまる",
          "音が小さくて聞こえない",
          "なかなか起きられない",
          "もっと時間を早くしてください",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "[ 3 ] には何を入れますか。",
        options: [
          "音が大きいものだけ使う",
          "時間が見やすいものを使う",
          "一つずつちがう時間に音が出る",
          "起きたい時間の少し前に音が出る",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "これからすずきさんは時計をどこにおきますか。",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
      },
      {
        passage:
          "さいきん犬やねこなどのペットといっしょに住めるアパ－トがふえてきています。10年前、この町にはペットと住めるアパ－トがほとんどありませんでしたが、去年はぜんぶのアパ－トの半分以上になりました。そして、今もふえつづけているそうです。\n\n先月花田さんとおくさんがこの町のアパ－トにひっこしてきました。ひっこしてから、犬2ひきといっしょに住んでいます。花田さんは65さいで仕事を　やめてから元気がありませんでしたが、犬といっしょにいて気持ちが明るくなったそうです。おくさんは体がじょうぶになりました。ひっこす前は足が悪くて、ほとんど家の中にいましたが、今は毎日犬といっしょにさんぽしています。二人は、いやなことがあっても、かわいい2ひきを見ると気持ちがやさしくなって、毎日楽しくせいかつできると言っています。\n\nわたしは今までペットがほしいと思ったことが　ありませんでした。ペットは毎日世話がたいへんです。食べ物やトイレの世話があるし、病気のときは病院につれて行かなければなりません。でも、花田さんの話を聞いて、わたしもペットと住んでみたいと思いました。",
        question: "この町のアパ－トの説明で正しいものはどれですか。",
        options: [
          "今はペットといっしょに住めるアパ－トのほうが多い。",
          "今はペットといっしょに住めないアパ－トのほうが多い。",
          "今はほとんどのアパ－トでペットといっしょに住めない。",
          "今はどんなアパ－トでもペットといっしょに住める。",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "花田さんのおくさんの説明で正しいものはどれですか。",
        options: [
          "仕事をやめたので、せいかいつが楽しくなりました。",
          "足が悪くて、ほとんど家の中にいます。",
          "10年前から犬2ひきといっしょに住んでいます。",
          "この町にひっこしてから前より元気になりました。",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "「ペットと住んでみたい」と思ったのはどうしてですか。",
        options: [
          "ペットの世話が10年前よりかんたんになったから",
          "ペットといっしょにせいかつするのは楽しそうだから",
          "ペットと住めるアパ－トがさいきんふえてきたから",
          "ペットは食べ物やトイレの世話があるから",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 4,
    questions: [
      {
        passage:
          "(すずきさんは ひっこしたいと思っています。アパートをしょうかいする店に行きました。)\nすずき「あのう、アパートをさがしているんですが。」\n店の人「どんなアパートがいいですか。」\nすずき「そうですね……やっぱり明るいほうが……」\n店の人「これはどうでしょう。となりに大きな建物がないし [ 1 ] から、明るいですよ。これ写真です。」\nすずき「ああ、いいですね。このアパートは、駅からどれくらいですか。」\n店の人「歩いて5分です。」\nすずき「そうですか。べんりですね。このへやは1か月いくらですか。」\n店の人「7万円です。」\nすずき「えっ、7万円ですか。わたしが今住んでいるへやは、4万円ぐらいだから、ちょっと……」\n店の人「 [ 2 ] 。では、このへやはどうですか。このアパートも駅から近くて…」\nすずき「あの、わたしは自転車に乗りますから、駅から [ 3 ]\n。でも、高いとこまります。1か月3万円ぐらいの安いアパートはありませんか。古くていいですから。」\n店の人「3万円ですか。そうですね、さがしてみます。ええと、あ、ありました。ちょっと古いですが、へやは2つで、まども大きいですよ。今から…見に行きますか。」\nすずき「ええ、見たいです。」",
        question: "[ 1 ] には何を入れますか。",
        options: [
          "まどが大きい",
          "へやが2つある",
          "駅から近い",
          "1か月7万円だ",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "[ 2 ] には何を入れますか。",
        options: [
          "そうですよ、高いですよ",
          "そうですか、高いですか",
          "そうですよ、安いですよ",
          "そうですか、安いですか",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "[ 3 ] には何を入れますか。",
        options: [
          "遠くてもこまりません",
          "遠いとこまります",
          "近いほうがこまりません",
          "近くてこまります",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "すずきさんはこれからどんなアパートを見に行きますか。",
        options: [
          "べんりで高いアパート",
          "広くて高いアパート",
          "明るくて安いアパート",
          "広くて安いアパート",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "日本では、雨がふる日は天気が悪い日と言う。どうして日本では雨がふる日だけ天気が悪いと言うのだろうか。\nもちろん、雨がふるとかさをささなければならない。くつがよごれるし、かばんもぬれる。でも、わたしは雨の日が好きだ。雨の日は、木のみどりがうつくしく見える。雨がきたない空気を洗っているようで、はれの日よりきれいに見える。また、デパートや映画館は雨の日のほうがすいている。それに、わたしがいつも行くスーパーは雨の日のほうがねだんが安い。特に野菜やくだものはとても安くなるのでうれしい。\nわたしは雨ではなく、風が強いほうが天気が\n悪いと思う。風が強い日は、よく目にごみが入ってこまる。それに、家にすなが入ったり、せんたくものがとんだりして、たいへんだからだ。\n雨がふると天気が悪いと言われるけれど、わたしは ( …………. ) と思う。みなさんはどう考えるだろうか。",
        question: "日本ではふつう「天気が悪い日」とはどんな日ですか。",
        options: ["雨がふらない日", "雨がふる日", "風が強い日", "風が弱い日"],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "「わたし」はどうして雨の日好きですか",
        options: [
          "でかける人が多いから",
          "野菜やくだものがおいしいから",
          "くつやかばんがきれいになるから",
          "いつものけしきがきれいに見えるから",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "( …………. ) には何を入れますか。",
        options: [
          "雨がふらない日は天気がいい日だ",
          "雨がふる日より風が強い日のほうが天気がいい",
          "天気がいいか悪いかは風の強さではきめられない",
          "天気がいいか悪いかは雨だけではきめられない",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 5,
    questions: [
      {
        passage:
          "スミスさんとキムさんが、スポーツ教室の前で話しています。\nスミス「あ、キムサン。どの教室に入るかもうきめましたか。」\nキム「いいえ、まだ [ 1 ] 。すいえい教室はむずかしいでしょうか。」\nスミス「すいえいはたいへんですよ。はじめてならテニスのほうがいいかもしれません。私は去年仕事が終ってからテニス教室に通っていました。」\nキム「テニスは少しやったことがあります。去年のテスト教室では [ 2 ] 。」\nスミス「正しいうちかたを習ったり、４にんで試合をしたりしました。楽しかったですよ。」\nキム「テニスがうまくなりそうですね。」\nスミス「ええ。でも、始まる時間に [ 3 ] 、れんしゅうのやりかたがわからなくてこまりますよ。」\nキム「だいじょうぶです。私の仕事はいつも５時に終わりますから。」\nスミス「 [ 4 ] 。じゃあ、時間に間に合いますね。",
        question: "[ 1 ] には何を入れますか。",
        options: [
          "きめなかったんです",
          "きめないんです",
          "きめていないんです",
          "きめないと思うんです",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "[ 2 ] には何を入れますか。",
        options: [
          "何をしたことがありますか",
          "どんなことをするでしょう",
          "どんなことをしましたか",
          "何をすると思いますか",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "[ 3 ] には何を入れますか。",
        options: ["おくれても", "おくれないで", "おくれるように", "おくれると"],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "[ 4 ] には何を入れますか。",
        options: [
          "それはいいですね",
          "あれがいいですね",
          "それはたいへんですね",
          "あれがたいへんですね",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "私の町は、秋のおまつりで有名だ。このおまつりは、こめや野菜がたくさんできたことをよろこぶもので、毎年１０月に行われる。\nこの日、町の男の人は水をあびて白い服を着る。そして、山の上の神社まで走る。いちばん先に神社についた人がいちばん強い男の人だ。いちばんになろうとして、みんな一生懸命走る。さいごのひとがじんじゃに着いてから、みんなでお酒を飲んで、特別な野菜料理を食べる。みんなたくさん食べるから、女の人は前の日の夜からねないで野菜料理を作る。\nおまつりの日には町じゅうの子どもたちがじんじゃに集まって、大人といっしょに楽しむ。歌やおどりが上手な子どもが、みんなの前で歌ったりおどったりする。この子どもたちは２か月前にえらばれて、毎日れんしゅうするので、歌もおどりもとてもりっぱだ。",
        question: "おまつりのひに男の人は何をしますか。",
        options: [
          "神社までできるだけはやく走る。",
          "白い服を着てから水をあびる。",
          "走る前にみんなで飲んだり食べたりする。",
          "ねないで野菜料理をたくさん作る。",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "おまつりのひに子どもは何をしますか。",
        options: [
          "じんじゃに集った子どもが大人といっしょにおどる。",
          "歌やおどりが上手な子どもがえらばれる。",
          "町じゅうの子どもが歌やおどりをれんしゅうする。",
          "えらばれた子どもが歌ったりおどったりする。",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "この町では秋にどんなおまつりをしますか。",
        options: [
          "この町の女の子を強くするおまつり。",
          "こめや野菜ができたことをよろこぶおつまり。",
          "子どもの歌やおどりを上手にするためのおまつり。",
          "みんなで特別な野菜料理を食べるためのおまつり。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 6,
    questions: [
      {
        passage:
          "来週の水曜日、会議室を使いたい人は事務所に申し込んでください。先に申し込んだ人が使えます。",
        question: "会議室はどうしたら使えますか。",
        options: [
          "水曜日に事務所に行く。",
          "先に申し込む。",
          "会議室の前で待つ。",
          "誰かに聞く。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "この薬は食後に飲んでください。一日二回、朝と晩です。水で飲んでください。",
        question: "薬はいつ飲みますか。",
        options: ["食事の前", "食事の後", "朝だけ", "晩だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "図書館の本は二週間借りられます。長く借りたい人は、もう一度申し込んでください。",
        question: "本を三週間借りたいとき、どうしますか。",
        options: [
          "借りない。",
          "もう一度申し込む。",
          "お金を払う。",
          "新しい本を借りる。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "明日の会議は午後三時からです。資料は前の日に渡します。読んでから来てください。",
        question: "資料はいつ読みますか。",
        options: ["会議の後", "会議の前の日", "会議の日", "会議の後"],
        correctIndex: 1,
      },
      {
        passage:
          "この店は毎週火曜日が休みです。祝日が火曜日のときは水曜日が休みになります。",
        question: "火曜日が祝日のとき、いつ休みですか。",
        options: ["火曜日", "水曜日", "両方", "休みではない"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 7,
    questions: [
      {
        passage:
          "申し込みは今月の末までです。遅れた場合は受け付けません。",
        question: "今月の末の翌日に申し込めますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "この機械はボタンを押すと動きます。止めるときはもう一度同じボタンを押してください。",
        question: "機械を止めるにはどうしますか。",
        options: ["別のボタンを押す", "同じボタンを押す", "引く", "待つ"],
        correctIndex: 1,
      },
      {
        passage:
          "会議は三時から始まります。二時五十分に会議室に集まってください。",
        question: "何時に会議室に来ますか。",
        options: ["二時", "二時五十分", "三時", "三時十分"],
        correctIndex: 1,
      },
      {
        passage:
          "ここで写真を撮ってはいけません。撮りたい人は受付で許可をもらってください。",
        question: "写真を撮りたいとき、どうしますか。",
        options: ["撮らない", "受付で許可をもらう", "どこでも撮る", "後で撮る"],
        correctIndex: 1,
      },
      {
        passage:
          "新しい本が入りました。借りたい人はカードを持って来てください。",
        question: "本を借りるとき、何が必要ですか。",
        options: ["お金", "カード", "かばん", "ペン"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 8,
    questions: [
      {
        passage:
          "明日は雨が降るでしょう。傘を持って出かけてください。",
        question: "明日何を持って出かけますか。",
        options: ["かばん", "傘", "帽子", "眼鏡"],
        correctIndex: 1,
      },
      {
        passage:
          "この道をまっすぐ行って、二つ目の角を左に曲がってください。銀行が見えます。",
        question: "銀行はどこにありますか。",
        options: [
          "一つ目の角を曲がったところ",
          "二つ目の角を左に曲がったところ",
          "まっすぐ行ったところ",
          "右に曲がったところ",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "会議の時間が変わりました。十時から十二時までになりました。",
        question: "会議は何時から何時までですか。",
        options: ["九時から十一時", "十時から十二時", "十一時から一時", "十二時から二時"],
        correctIndex: 1,
      },
      {
        passage:
          "ここに名前と住所を書いてください。電話番号は書かなくてもいいです。",
        question: "何を書かなければなりませんか。",
        options: ["名前だけ", "住所だけ", "名前と住所", "電話番号"],
        correctIndex: 2,
      },
      {
        passage:
          "食堂は二階にあります。エレベーターで行けます。",
        question: "食堂はどこにありますか。",
        options: ["一階", "二階", "三階", "地下"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 9,
    questions: [
      {
        passage:
          "この薬は食事の後に飲んでください。一日三回です。",
        question: "薬はいつ飲みますか。",
        options: ["食事の前", "食事の後", "一日一回", "寝る前だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "申し込みは今週の金曜日までです。遅れないでください。",
        question: "いつまで申し込みができますか。",
        options: ["木曜日", "金曜日", "土曜日", "日曜日"],
        correctIndex: 1,
      },
      {
        passage:
          "今日は暑いです。冷たい飲み物を飲みましょう。",
        question: "今日どんな飲み物がいいですか。",
        options: ["熱い", "温かい", "冷たい", "涼しい"],
        correctIndex: 2,
      },
      {
        passage:
          "この部屋ではたばこを吸わないでください。外で吸ってください。",
        question: "たばこはどこで吸えますか。",
        options: ["この部屋", "どこでも", "外", "窓のそば"],
        correctIndex: 2,
      },
      {
        passage:
          "来週の月曜日は祝日で休みです。火曜日から仕事があります。",
        question: "来週月曜日は何をしますか。",
        options: ["仕事", "休み", "学校", "会議"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "reading",
    testNumber: 10,
    questions: [
      {
        passage:
          "このボタンを押すと、ドアが開きます。",
        question: "ドアを開けるにはどうしますか。",
        options: ["引く", "押す", "回す", "閉める"],
        correctIndex: 1,
      },
      {
        passage:
          "会議室は予約が必要です。前の日に予約してください。",
        question: "会議室を使うにはいつ予約しますか。",
        options: ["使う日", "前の日", "次の日", "一週間前"],
        correctIndex: 1,
      },
      {
        passage:
          "この機械は壊れています。使わないでください。",
        question: "この機械を使いますか。",
        options: ["はい、使います", "いいえ、使いません", "修理してから使います", "わかりません"],
        correctIndex: 1,
      },
      {
        passage:
          "急いでいます。早く食べてください。",
        question: "どうして早く食べますか。",
        options: ["おいしいから", "急いでいるから", "たくさんあるから", "熱いから"],
        correctIndex: 1,
      },
      {
        passage:
          "この電車は東京駅で止まりません。次の駅まで行きます。",
        question: "東京駅で何をしますか。",
        options: [
          "電車に乗る。",
          "電車を降りない。",
          "電車が止まる。",
          "次の駅で降りる。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 1,
    questions: [
      {
        passage:
          "忘年会のご案内\n\n拝啓　時下ますますご健勝のこととお喜び申し上げます。\nさて、この一年を振り返り、下記により忘年会を開催いたします。ご参加くださいますようお願いいたします。\n\n敬具\n\n記\n\n1.日時： 平成25年12月28日（土）　午後15時～午後19時\n2. 場所： ミドリホテル東京都品川区広町1-2-3\n3.会費：　お一人様　5000円\n4. 担当者： 山田太郎\n5. 連絡先： 0123-456-789\n\n※参加を希望される方は12月20日までに弊社担当者にご連絡くださいますようお願いいたします。\n以上",
        question: "この案内書の内容と合っているものはどれか。",
        options: [
          "参加しない人が山田さんに連絡しなければならない。",
          "参加する人が山田さんに連絡しなければならない。",
          "参加しなくても会費を払わなければならない。",
          "参加する人が12月20日までに会費を払わなければならない。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "好きな人と会話をするのなら、禁句（注1）にしたい言葉がある。それは「はい」と「いいえ」だ。例えば、「海外旅行に行ったことある？」という質問に「いいえ」で返してしまうと、終わりだ。別に相手の話に肯定も否定もするな、と言っているわけではない。「はい」と「いいえ」は使わず、別の表現に言い換えてみよう。「海外旅行に行ったことある？」という質問に「行ったことはないけど行ってみたい。一番行ってみたいのは中国。万里の長城を実際に見てみたい」そう言うと、相手は興味を引かれ、会話がさらに続くことだろう。\n\n（注1）禁句（きんく）：使わないほうがいい言葉",
        question: "筆者が「はい」と「いいえ」を禁句にしたがる理由は何か。",
        options: [
          "相手の話を肯定しても否定してもいけないからだ。",
          "いつも同じ返事をしたらつまらないと思われるからだ。",
          "このような返事で会話が一瞬で終わってしまうからだ。",
          "短すぎて、相手のことが嫌いだと思われるからだ。",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "第5回　日本文学館文庫大賞\n作家になる夢、叶えませんか？作家志望の方の作品募集中。\n\n原稿用紙50枚以上300枚以下の文章作品を募集します。小説、エッセイ、詩、童話などどれもご応募いただけます。また横書き、縦書き、どちらでもいいです。\n大賞　3名　　無料で出版\n最終締め切り　2013年7月15日\n\n＊氏名・年齢・郵便番号・住所・電話番号・連絡可能時間帯を書いた別紙（注1）を添えてください。\n＊作品の返却（注2）はいたしません。コピーでの応募をおすすめいたします。\n\n詳しくはホームページ（http://www.nihonbungakukan.co.jp）をご覧ください。\nご不明の場合は、お気軽にお問い合わせください（0120-71-5050・通話無料）。\n\n（注1）：別紙（べっし）：別の紙\n（注2）：返却（へんきゃく）：借りていた物や預かっていた物を返すこと",
        question: "応募する人は、どうしなければならないか。",
        options: [
          "決められた字数で文章を縦書きで書いて送る。",
          "連絡先などを書いた別紙を作品と一緒に送る。",
          "作品の原稿を２部コピーして送る。",
          "電話で問い合わせた後で作品を送る。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "みどり電気の川崎さんから次のメールが届いた。\n\n件名：みどり電気の新製品のご説明について\n丸友商事（株）\n香川　竜　様\nメールを拝読いたしました。\n弊社の新製品にご質問をいただき、心から感謝いたします。\n\n早速ですが、製品の説明に伺いたいと思います。\n来週、以下のどちらかで貴社に伺わせていただきたいのですが、いかがでしょうか。\n\n日時：　4月17日（水）　14：00～15：00\n4月18日（木）　10：00～11：00\nご連絡をお待ちしております。\n\nみどり電気（株）\n川崎　裕太",
        question: "メールの用件は何か。",
        options: [
          "みどり電気で、二回の説明会を開きたい。",
          "みどり電気で、製品の説明をしたい。",
          "丸友商事で、二回の説明会を開きたい。",
          "丸友商事で、製品の説明をしたい。",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "学校では、難しい顔をしていると一生懸命に勉強していると見てくれる。[1]険しい表情をして、額に汗を流して勉強していると「偉いね」と言われる。\n\nしかし、これは、本当によい勉強法ではない。難しくて面白くないと感じることは、身につかないことが目に見えている。勉強は、楽しいと感じる人ほど、身につき、成績もよくなるのだ。\n\n中学生のころ、西岡君という友人がいった。彼は数学や理科は誰にも負けないくらい、いつも成績がよかった。そんな西岡君は、いつも楽しそうな表情をして勉強をしているのだ。難しい顔をして勉強することがよいことだと思っていた私は、[2]いつも不思議だった。数学や理科の話をすると、笑いながら教えてくれる。\n\nある日、西岡君に「なぜそんなに成績がいいの」と聞いてみたことがある。すると「[3]」というあっさりした返事が返ってきた。\n\n学生のころに聞いた言葉は、そのとき軽く聞き流していた。しかし、実際に社会に出て、仕事のできる人や頭の切れる人は、決まって「楽しんでいる人」だ。難しく険しい表情をしている人は、仕事が遅くて、質が悪い。嫌いだという感情があると、スピードが落ちて、熱心さ、集中力、根気が欠けてしまう。\n\n私は昔、難しい顔をしている人が頑張っている人だと思っていたが、大きな間違いだったのだ。本当に頑張って成果を発揮できる人は、楽しんでいる人なのだ。",
        question: "[3]に入る適当な言葉はどれか。",
        options: ["易いから", "頑張っているから", "頭がいいから", "楽しいから"],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 2,
    questions: [
      {
        passage:
          "この冬の３ヶ月間、私は会社の仕事でアメリカに行っていました。私は日本料理の店にはまったく行きませんでした。外国にいる時は、その国の料理を食べたいと思っているからです。ところが、３週間経った１２月の終わりの頃、なぜか正月は日本料理を食べたいという気持ちになってきました。日本人の友だちの奥さんに、材料はどこへ行ったら買えるのか聞いてみました。[1]そういうのをまとめて売っているスーパーがダウンタウン注１にあるから、今から頼んでおくといいと教えてくれました。\n\nこれには本当にびっくりしました。１５年前、まだ学生だったころの冬休みにここへ遊びにきたとき、日本料理の店に行かなければ、正月の料理は食べられなかったのです。それが今、安い値段で簡単に買えてしまうのですから、これは大きな変化です。\n\n[[2]この１５年の間に何があったのでしょうか。ここに住んでいる日本人が増えたのでしょうか。それとも、日本料理の人気が高くなったのでしょうか。どちらも正しいように思えるし、どちらも違うような気もします。とにかく、正月に日本料理が食べられたのは、嬉しいことでした。\n\n（注１）ダウンタウン：下町。商業地域。",
        question: "そういうのとありますが、どういうものか。",
        options: [
          "日本人の友だちの奥さんに頼んだもの",
          "アメリカの料理に使うもの",
          "正月の日本料理に使うもの",
          "ダウンタウンのスーパーにあるもの",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question:
          "この15年の間に何があったのでしょうかとあるが、筆者は何に対してそう言っているか。",
        options: [
          "アメリカのダウンタウンにスーパーができた理由",
          "アメリカに住んでいる日本人が増えた理由",
          "アメリカで日本料理の人気がますます高くなる理由",
          "アメリカでも日本料理の材料が簡単に買える理由",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "この文章の内容と合っているのはどれか。",
        options: [
          "日本人の友だちの奥さんが正月の日本料理に使うものを買ってくれた。",
          "アメリカでも正月の日本料理が食べられるようになってびっくりした。",
          "アメリカでは日本料理の店に行かなくても日本料理は食べられるようになった。",
          "最近都市の中心部に住む日本人が増えるにつれ、日本料理の人気は高くなった。",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "最近都市の中心部に住む日本人が増えるにつれ、日本料理の人気は高くなった。\n\n言葉には人の心に影響を与える力がある。暗くて否定的な言葉をあなたの中から排除（はいじょ）すれば、明るいあなたに生まれ変わる（注1）ことができる。まず、排除してもらいたい言葉は「できない」という一言だ。それを使えば使うほど、あなたの可能性はどんどん小さくなり、やろうというやる気まで小さくなる。どうしても「できない」としよう。「難しい」は少しでも可能性が残っていることを表現する言葉だ。だから、あなたの心の電気を真っ暗にすることはない。\n\n（注1）生まれ変わる：いままでとはまったく別人のようなすぐれた人になる。",
        question: "この文章の内容と合わないものはどれか。",
        options: [
          "暗い言葉は人の心に悪い影響を与えるかもしれない。",
          "否定的な言葉を使うほど、成功の可能性が小さくなる。",
          "「難しい」という言葉は「できない」よりすこしいい。",
          "暗い言葉を全部排除すれば、何をしても成功できる。",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "東京国立博物館の料金・開館時間のご案内\n料金のご案内\n一般600（500）円、大学生400（300）円\n（注）（ ）内は20名以上の団体料金です。\n（注）特別展の場合は別料金となります。各特別展の案内ページをご参照ください。\n（注）高校生以下および満18歳未満，満70歳以上の方は，総合文化展について無料です。\n子どもといっしょ割引\n子ども（高校生以下および満18歳未満）と一緒に来館した入館者（子ども1名につき同伴者2名まで）は、団体料金で総合文化展を観覧できます。\n総合文化展割引パス\n総合文化展割引パス(満65～69歳限定)は、2000円(有効期限：発行から1年間)で総合文化展を何度でも観覧できます。\n（注）総合文化展割引パスは、2013年3月31日(日)で販売終了となります。発行日から1年間はご利用いただけます。\n* 資料館（図書・写真の利用）\n入館無料\n開館時間のご案内\n9:30～17:00(入館は16:30まで)\n2013年3月から12月までの特別展開催期間中の毎週金曜日は20:00まで開館します。\n*\n2013年4月から9月までの土曜、日曜、祝日、休日は18:00まで開館します。\n（注）入館は閉館の30分前まで\n* 資料館(写真・図書の利用)\n開館時間：9:30～17:00（月曜日から金曜日）\n\n東京国立博物館へのお問合せ\n利用案内や展示・催し物に関するお問い合わせ\n電話番号：03-5777-8600（ハローダイヤル）\nその他のお問い合わせ\n住所：〒110-8712　東京都台東区上野公園13-9　東京国立博物館\n電話番号：03-3822-1111(代表)",
        question:
          "次の来館者のうちで、団体料金で総合文化展が観覧できないのはだれか。",
        options: [
          "東京市内の高校に通っている１７歳の娘と一緒に観覧する母親",
          "東京市内の高校に通っている１８歳の息子と一緒に観覧する父親",
          "東京市内の中学校に通っている１５歳の娘と一緒に観覧する母親",
          "東京市内の小学校で働いている20歳の娘と一緒に観覧する父親",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 3,
    questions: [
      {
        passage:
          "日本には「食べ合わせ」と言う言葉がある。食べ合わせとは食事のときに一緒に食べると体にいいとか，体に悪いという組み合わせのことである。少し前の時代なら子供でも一つや二つは必ず言えるような常識だった。うっかり食べ合わせの悪いものを食べてしまって、ものすごく悪いことをしたかのように親に怒られたという人もいる。\n\n最も有名な例として、うなぎと梅干を一緒に食べるとよくないと言われている。天ぷらとスイカを一緒に食べるのは本当にお腹を壊す原因になるし、きゅうりとトマトはお互いの栄養を弱くしてしまうのだそうだ。(中略）\n\nでも、医者の友人は食べ合わせよりもっと気をつけなければならないのは薬の飲み合わせだと言っていた。ちゃんと医者の説明を聞かずにいろんな薬を一緒に飲むと、予想しない効果が現れてしまうこともあるという。実際に、それが原因で別の病気になってしまった人もいるという。最近では、もらった薬の成分表や、飲み合わせの悪いものなどを書いたものが医者からもらえるし、ネットには専門のサイトもある。",
        question: "食べ合わせの悪い例として、正しいのはどれか。",
        options: [
          "うなぎとてんぷら",
          "天ぷらと梅干",
          "トマトと天ぷら",
          "きゅうりとトマト",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question:
          "食べ合わせよりもっと気をつけなければならないのは薬の飲み合わせだとあるが、どうしてか。",
        options: [
          "常識として薬の飲み合わせは子どもの頃からよく知られているから。",
          "薬の飲み合わせが悪くておなかを壊してしまうことになるから。",
          "薬の飲み合わせが悪いと、別の病気になってしまう可能性があるから。",
          "薬の飲み合わせの悪いものは医者しか分からないから。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "この文章を書いた人が一番伝えたいことは何か。",
        options: [
          "食べ合わせが悪いと、お腹を壊す原因になるので気をつけたほうがいい。",
          "薬の飲み合わせが悪いと、予想しない効果が現れてしまうこともある。",
          "薬の飲み合わせの悪いものを書いたものは医者からもらわなければならない。",
          "最近は、ネットには薬の飲み合わせについての専門のサイトも出てきた。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "学校では、難しい顔をしていると一生懸命に勉強していると見てくれる。[1]険しい表情をして、額に汗を流して勉強していると「偉いね」と言われる。\n\nしかし、これは、本当によい勉強法ではない。難しくて面白くないと感じることは、身につかないことが目に見えている。勉強は、楽しいと感じる人ほど、身につき、成績もよくなるのだ。\n\n中学生のころ、西岡君という友人がいった。彼は数学や理科は誰にも負けないくらい、いつも成績がよかった。そんな西岡君は、いつも楽しそうな表情をして勉強をしているのだ。難しい顔をして勉強することがよいことだと思っていた私は、[2]いつも不思議だった。数学や理科の話をすると、笑いながら教えてくれる。\n\nある日、西岡君に「なぜそんなに成績がいいの」と聞いてみたことがある。すると「[3]」というあっさりした返事が返ってきた。\n\n学生のころに聞いた言葉は、そのとき軽く聞き流していた。しかし、実際に社会に出て、仕事のできる人や頭の切れる人は、決まって「楽しんでいる人」だ。難しく険しい表情をしている人は、仕事が遅くて、質が悪い。嫌いだという感情があると、スピードが落ちて、熱心さ、集中力、根気が欠けてしまう。\n\n私は昔、難しい顔をしている人が頑張っている人だと思っていたが、大きな間違いだったのだ。本当に頑張って成果を発揮（はっき）できる人は、楽しんでいる人なのだ。",
        question: "[1]険しい表情とあるが、どのような表情か。",
        options: ["悲しい顔", "難しい顔", "怒った顔", "迷った顔"],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "[2]いつも不思議だったとあるが、何を指しているか。",
        options: [
          "西岡君がクラスの中で成績が一番よかったこと",
          "西岡君が笑いながら勉強を教えてくれたこと",
          "成績のいい西岡君がいつも楽しそうに勉強していたこと",
          "成績のいい西岡君が険しい表情をして勉強していたこと",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 4,
    questions: [
      {
        passage:
          "先日、友人を訪ねて岐阜に行きました。待ち合わせの時間まで少し時間があったので古い和傘の店があったので入ってみると、「いらっしゃいませ」と元気な声で店の主人が迎えてくれました。\n\n和傘作りは江戸時代から続く技術で、明治時代まではどこの町にも必ず1人や2人職人（注）がいたそうです。しかし、日本に西洋文化が入ってくると、今私たちが日頃使っているような、作るのも簡単で値段も安い洋傘がいっきに全国に広まりました。\n\n今年の79歳になる主人の加藤さんはいま、各県に1人か2人いるかいないかという和傘職人（注）の1人です。和傘づくりをやめようと思ったことがあります。そんなある日、たまたま店の前を通りかかった外国のお客さんが「和傘は日本人の性格をとてもよくあらわしているね」と言ったのを聞いて、(1)「ああ、やめちゃだめだ」と、考え直したそうです。\n\n加藤さんは、「まだまだ元気だから、あと10年は大丈夫。」と笑顔を見せてくれましたが、わたしはとてもさびしい気持ちになりました。\n\n（注）職人：身につけた技術によって物を作り出したりする職業の人。",
        question: "どうして明治時代以降、洋傘は全国に広まりましたか。",
        options: [
          "和傘より質がよいし、もっと丈夫だし",
          "和傘より値段が安いし、作り方も簡単だし",
          "和傘より材料が高級だし、作り方も簡単だし",
          "和傘よりデザインがいいし、美しく見えるし",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question:
          "(1) 「ああ、やめちゃだめだ」と、考え直したとあるが、その理由は何か。",
        options: [
          "日本では和傘職人は1人か2人しか残らないから",
          "和傘の好きな外国人がどんどん増えてきたから",
          "和傘作りの必要な技術はあまり高くないから",
          "和傘作りの伝統を守り続けたいと思うから",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "本文と合っているものはどれか。",
        options: [
          "和傘作りの伝統を守るのは大切だが、難しいことだ。",
          "和傘作りの職人はたくさんいるが、一人前のは少ない。",
          "職人の加藤さんが和傘作りを続けるのは幸い。",
          "職人の加藤さんは和傘作りの伝統を守るのに自信がある。",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "フランスのパリでは犬を飼っている人が多いが、散歩につれていく犬がアパートの玄関を出たところでフンをしても、それをかたづける人はだれもいないと、パリに長く住んでいる日本人が書いています。東京の住宅地を歩いていると、私がよく見る犬の散歩には、わりばし注１と紙袋を持っている人が多いので、フンで道路を汚すことを悪いと考えている人は[1]日本のほうが多いのではないかと思います。フランスでは犬を散歩させる人がフンをかたづけるのは、掃除をする人の仕事をとってしまうのだというのが[2]ふつうの考えのように思えるからです。\n\nしかし、その考えはおかしいと思います。町の中で犬をつれて歩くには、町の美しさを守るという気持ちが必要なのではないでしょうか。なぜかそう思ったかというと、「パリの歩道には犬のフンがとても多く、それをかたづけるためには年間7000万フラン注２（約１２億円）かかる」という新聞記事を読んだからです。そのお金はだれが出しているのでしょうか。\n\n（注１）わりばし：使うときに二つに割るはし。\n（注２）フラン：フランス・ベルギーなどの旧通貨単位。",
        question: "何が[1]日本のほうが多いのか。",
        options: [
          "犬を散歩につれていく人",
          "犬のフンをかたづけようとしない人",
          "わりばしと紙袋を持っている人",
          "フンで道を汚すことを悪いと考えている人",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "[2] ふつうの考えとは、ここではどんな考えか。",
        options: [
          "フンで道路を汚すことを悪いと考える必要はない",
          "犬を散歩させる人が犬のフンをかたづける必要はない",
          "掃除をする人が町の美しさを守る必要はない",
          "フンをかたづけるのはお金がかかると考える必要はない",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 5,
    questions: [
      {
        passage:
          "あなたの目はいくつありますか。\nもちろん「二つ」と答える人がほとんどでしょう。\nたしかにそのとおりですが、[1]それだけではいけないのです。失敗を避けて成功につなげるためには、三つの目を持ちましょう。\nまずは一番目の「鳥の目」です。勉強でも仕事でも、いきなり細かいところから着手（ちゃくしゅ）するのは、かしこい方法ではありません。自分の現在地が把握できないのでは、頭の整理がしにくくなり、大きなストレスの原因になります。\nだからこそ鳥の目です。鳥になり、高い位置から下の様子を把握（はあく）することから始めるのです。本であれば[2]を見ます。建築であれば設計書（せっけいしょ）を見ます。仕事であれば目的や段階などを知ります。難しく思えることも、大体の構成（こうせい）が分かると、取り組みやすく（注1）なります。\n次に「虫の目」で見ます。虫は、小さい生き物です。地に面した低い位置にいるからこそ、上からは見えなかったことが見えてくるようになります。ターゲット（注2）を絞れば、虫のように狭く深くを心がけ、徹底（てってい）するのです。\n最後に「魚の目」です。魚は、目には見えない川の流れを体全体で感じ取っています。あなたは魚の目を持ち、どの方向へ流れていくのかを読み取ります。勉強にも仕事にも流れがあります。歴史の勉強も流れを理解すれば、覚えやすく忘れにくくなります。仕事でも流れを理解すれば、取り組みやすく忘れにくくなります。\n勉強でも仕事でも使える三つの目を持ちましょう。\n\n（注1）取り組む：全力でする\n（注2）ターゲット：目標",
        question: "[1]それとはどのようなことか。",
        options: [
          "人間は二つの目があること",
          "実際に三つの目があること",
          "多くが二つの目があると答えること",
          "失敗を避けて、成功につなげること",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "[2]に入る適当な言葉はどれか。",
        options: ["目次", "本文", "解答", "索引"],
        correctIndex: 0,
      },
      {
        passage: "",
        question:
          "「鳥の目」、「虫の目」、「魚の目」はそれぞれ何を指しているか。",
        options: [
          "全体の把握、流れの把握、部分の把握",
          "部分의 把握、流れの把握、全体の把握",
          "全体の把握、部分の把握、流れの把握",
          "流れの把握、全体の把握、部分の把握",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "この文章を書いた人が一番伝えたいことは何か。",
        options: [
          "もともと人間は二つの目があると思っている人が少なくない。",
          "失敗を避けるために三つの目が必要だと思っている人が少ない。",
          "勉強や仕事がうまく行くように、三つの目を持ったほうがいい。",
          "人間の目は動物の目とのあいだに、三つの共通点がある。",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "騙される経験は学校では教えてくれない。だから私たちは、人生のどこかで必ず一度は騙される。学校で教えてくれないので、免疫力（めんえき力）がないのだ。場合によっては、大きな痛手を負う（注1）こともある。ないほうがいい騙される経験だが、誰もが一度は通る関門（注2）だ。そういうときには、損をした経験をいい勉強ができたと言い換えましょう。数少ない（注3）経験だからこそ、しっかり教訓（きょうくん）を得てください。騙された金額は、授業料だと考えればいいのだ。そういうふうに受け入れたとき、人生では本当の損はなくなる。\n\n（注1）痛手（いたで）を負う：大きい被害や損害を受ける\n（注2）関門（かんもん）：通りにくいところ\n（注3）数少ない（かずすくない）：少数である",
        question: "そういうふうに受け入れたとあるが、どのように受け入れたか。",
        options: [
          "誰もが一度は騙されると考えて受け入れた。",
          "騙された経験をいい勉強だと考えて受け入れた。",
          "騙された経験を大きな損失だと考えて受け入れた。",
          "騙されることはお金を取られることだと考えて受け入れた。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 6,
    questions: [
      {
        passage:
          "会議は来週の月曜日に変更になりました。時間は午後二時からです。場所は変わりません。",
        question: "会議はいつどこでありますか。",
        options: [
          "今週月曜日、同じ場所",
          "来週月曜日、午後二時、同じ場所",
          "来週火曜日、午後二時",
          "今週月曜日、午後二時",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "この資料は会議の前に読んでおいてください。質問がある人は、事前にメールで送ってください。",
        question: "質問があるとき、どうしますか。",
        options: ["会議で聞く", "事前にメールで送る", "読まない", "資料を返す"],
        correctIndex: 1,
      },
      {
        passage:
          "申し込みは今月末までです。必要な書類をそろえて、窓口に提出してください。",
        question: "申し込みはいつまでですか。",
        options: ["今週末", "来月末", "今月末", "来週末"],
        correctIndex: 2,
      },
      {
        passage:
          "明日の会議は午前三時からです。資料は前の日に配布します。読んでから参加してください。",
        question: "資料はいつ読むべきですか。",
        options: ["会議の後", "会議の前の日", "会議の日", "会議の一週間前"],
        correctIndex: 1,
      },
      {
        passage:
          "この機械は赤いボタンを押すと止まります。止めるときは必ず赤いボタンを押してください。",
        question: "機械を止めるとき、何をしますか。",
        options: ["青いボタンを押す", "赤いボタンを押す", "待つ", "引く"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 7,
    questions: [
      {
        passage:
          "新製品の説明会は来週火曜日と水曜日にあります。どちらか都合のいい日に参加してください。",
        question: "説明会はいつありますか。",
        options: ["火曜日だけ", "水曜日だけ", "火曜日と水曜日", "今週"],
        correctIndex: 2,
      },
      {
        passage:
          "参加を希望する人は、今週金曜日までに担当者に連絡してください。",
        question: "参加したいとき、いつ連絡しますか。",
        options: ["来週", "今週金曜日まで", "説明会の日", "明日"],
        correctIndex: 1,
      },
      {
        passage:
          "この薬は食後に飲んでください。一日三回です。水で飲んでください。",
        question: "薬はいつ飲みますか。",
        options: ["食事の前", "食事の後", "朝だけ", "晩だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "図書館の利用時間は午前九時から午後八時までです。土曜日は午後五時までです。",
        question: "土曜日は何時まで利用できますか。",
        options: ["午後八時", "午後五時", "午前九時", "午後九時"],
        correctIndex: 1,
      },
      {
        passage:
          "駐車場は建物の北側にあります。自転車は東側の駐輪場に止めてください。",
        question: "自転車はどこに止めますか。",
        options: ["北側", "駐車場", "東側の駐輪場", "建物の中"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 8,
    questions: [
      {
        passage:
          "会議室の予約は前日までにしてください。当日の予約は受け付けません。",
        question: "当日会議室を予約できますか。",
        options: ["はい、できます", "いいえ、できません", "午前だけ", "午後だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "この書類は必ず黒のボールペンで書いてください。鉛筆では書かないでください。",
        question: "何で書きますか。",
        options: ["鉛筆", "黒のボールペン", "青のペン", "万年筆"],
        correctIndex: 1,
      },
      {
        passage:
          "提出期限は来週の金曜日です。遅れた場合は受け付けません。",
        question: "来週の土曜日に提出できますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "研修は三日間です。一日目は講義、二日目は実習、三日目は試験です。",
        question: "二日目は何をしますか。",
        options: ["講義", "実習", "試験", "休み"],
        correctIndex: 1,
      },
      {
        passage:
          "欠席する場合は、必ず前日までに連絡してください。当日の連絡は困ります。",
        question: "欠席するとき、いつ連絡しますか。",
        options: ["当日", "前日までに", "一週間後", "連絡しない"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 9,
    questions: [
      {
        passage:
          "このイベントは予約制です。参加したい人は、ウェブサイトから申し込んでください。",
        question: "どうしたら参加できますか。",
        options: ["当日行く", "ウェブサイトから申し込む", "電話する", "手紙を送る"],
        correctIndex: 1,
      },
      {
        passage:
          "受付は午前九時から午後五時までです。それ以外の時間は受け付けません。",
        question: "午後六時に申し込めますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "写真を撮るときは、フラッシュを使わないでください。他のお客様のご迷惑になります。",
        question: "写真を撮るとき、何をしてはいけませんか。",
        options: ["撮ること", "フラッシュを使うこと", "カメラを持つこと", "動くこと"],
        correctIndex: 1,
      },
      {
        passage:
          "この施設は月曜日が休館日です。祝日が月曜日の場合は火曜日が休館日になります。",
        question: "月曜日が祝日のとき、いつ休みですか。",
        options: ["月曜日", "火曜日", "両方", "休みではない"],
        correctIndex: 1,
      },
      {
        passage:
          "入館料は大人千円、子供五百円です。団体の場合は割引があります。",
        question: "大人二人と子供一人ではいくらですか。",
        options: ["千五百円", "二千円", "二千五百円", "千円"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    testNumber: 10,
    questions: [
      {
        passage:
          "応募書類は必ず期限内に送ってください。期限を過ぎたものは審査の対象になりません。",
        question: "期限を過ぎて送った場合、どうなりますか。",
        options: ["審査される", "審査の対象にならない", "後で審査される", "連絡が来る"],
        correctIndex: 1,
      },
      {
        passage:
          "面接は三十分程度を予定しています。遅刻しないようにしてください。",
        question: "面接はどのくらいの時間ですか。",
        options: ["十五分", "三十分程度", "一時間", "二時間"],
        correctIndex: 1,
      },
      {
        passage:
          "この商品は返品できません。ご了承ください。",
        question: "買った後、返品できますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "お支払いは現金またはカードでお願いします。つり銭のない場合がありますので、できるだけおつりの少ないようにお願いします。",
        question: "支払い方法は何がありますか。",
        options: ["現金だけ", "カードだけ", "現金またはカード", "電子マネーだけ"],
        correctIndex: 2,
      },
      {
        passage:
          "この駐車場は三十分まで無料です。それを過ぎると有料になります。",
        question: "四十分止めたら、どうなりますか。",
        options: ["無料", "有料", "追い出される", "わからない"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 1,
    questions: [
      {
        passage:
          "現代は、(1) 時間がどんどん加速されているとも言われます。何事にも「早く、早く」とせかされ（注１）、時間と競争するかのように忙しさに追われていることを、大人たちはこういう言い方をしているのです。いつも同じ速さで時間が流れているはずなのに、時間の間隔（かんかく）が短くなったような気分で追い立てられて（注２）いるためでしょう。それをエンデ（注３）は『モモ』という作品の中で「時間どろぼう」と呼びました。ゆっくり花を見たり音楽を楽しんだりする、そんなゆったりした時間が盗まれていく、という話でした。(2)\nいつも何かしていないと気が落ち着かない、現代人はそんなふうになっています。\n\nその一つの原因は、世の中が便利になり、能率的になって、より早く仕事を仕上げることがより優れていると評価されるようになっているためと思われます。競争が激しくなって、人より早くしなければ負けてしまうという恐れを心に抱くようになったためでしょう。「時間は金なり」となってしまったのです。\n\nしかし、それでは心が貧しくなってしまいそうです。何も考えずにひたすら決められたことをしていて人生が楽しいはずがありません。ゆっくり歩むからこそ、道ばたに咲く花に気づいたり、きれいな夕日を楽しむ気分になれるのです。私たちは、時間を取り返し、もっとゆったりした時間を生きる必要がありそうですね。\n\n（池内了『時間とは何か』による）\n\n（注１） せかされる：急がされる\n（注２） 追い立てられる：ここでは、何かをしないではいられない気持ちにさせられる\n（注３） エンデ：ドイツの児童文学者",
        question: "時間がどんどん加速されているとはどういうことか。",
        options: [
          "しなければならないことが多くて時間が短く感じられる。",
          "何かに夢中になっていると一日の時間が短く感じられる。",
          "作業能率が上がって一日の仕事の時間が短くなっている。",
          "技術の進歩によって仕事にかかる時間が短くなっている。",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question:
          "いつも何かしていないと気が落ち着かない原因を筆者はどう考えているか。",
        options: [
          "何もしないと心が貧しくなってしまうと感じること",
          "早く何かを仕上げないと他の人に勝てないと思うこと",
          "失った時間を取り戻さないと競争に負けてしまうと思うこと",
          "奪（うば）われた時間を取り戻さないと人生を楽しめないと感じること",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "筆者は、時間の使い方についてどのように考えているか。",
        options: [
          "時間は貴重なので、休むときにも能率的に過ごしたほうがよい。",
          "忙しい中にも、のんびり過ごす時間をできるだけ持ったほうがよい。",
          "人生を楽しむためには、ひたすらゆっくり時間を過ごしたほうがよい。",
          "人との競争に勝つためには、時間をもっと有効に使うようにしたほうがよい。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "“練習のための練習”が行われているというチームがたくさんあります。練習は本番（ほんばん）の試合のために存在すべきものです。本番で最高の実力を発揮（はっき）させるためにすることを、練習と呼びます。すなわち、休養することが試合にとって、今、最もするべきことだとすれば、休養こそ勝つための練習といえるときがあるのです。休養はサボることではなく、時として練習なのです。",
        question: "筆者は、試合で実力を出すために何が大事だと述べているか。",
        options: [
          "“練習のための練習”をすること",
          "練習でも最高の力を出すこと",
          "必要であれば休養を取ること",
          "試合の前に休養を取ること",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "会社勤めの生活は楽だった。\n\n楽しくはないが、楽だった。\n\nずっと一人で生きてきた後で、集団に入ってみると、その居心地（いごこち）の良さ、安楽さに驚くのである。一人の時は、朝目覚めて寝るまで「何をすべきか」という判断、決定を自分でしなければならない。つまり、それを「自由」というのだが、実力のない者には自由は重すぎる。一日中、選択（せんたく）と決断をし、その結果を自分一人でひき受けねばならない。",
        question: "筆者によると、なぜ会社勤めが楽だったのか。",
        options: [
          "実力があれば、自由にできる部分もあるから",
          "周囲の協力が得られれば、時間を自由に使えるから",
          "自分の能力に適した仕事が与えられ無理がないから",
          "自分一人で決めることも責任を取ることもしなくてすむから",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 2,
    questions: [
      {
        passage:
          "これはビジネス文書に限ったことではないのだが、何であれ文書を書いていると、少しばかり緊張感を覚えるものだ。書きながら、頭の中でこんなことを考えている。\n\nこの書き方でいいのかな。\n\nこれ、ひどく下手な書き方じゃないだろうか。\n\nこれでわかるかな。\n\nそういう気がしきりに（注１）して、ちょっとしたプレッシャーになっている。だからこそ、文章を書くのは苦手だ、と思っている人もいるのじゃないだろうか。\n\nしかし、その逆もまた真である。文章を書く面白さとは、そういうプレッシャーを感じながら、なんとか諸問題をクリアして、一応のものを書き上げることにあるのだ。\nテレビゲームが楽しいのと同じ理屈（りくつ）（注２）である。あれは、攻略（こうりゃく）する（注３）のが簡単ではない様々な障害をかわしながら（注４）、次々に問題を解決していって、なんとかクリアしていくところが面白いのである。むずかしいからこそ、うまくやったときに楽しいのだ。\n\n文章を書くのも、（１）そういうことである。これでいいのかな、と一抹いちまつの（注５）不安を抱えながら、なんとか書いていくってことを楽しまなければならない。\n\n別の言い方にすると、文章というものは、書く人に対して、うまく書いてくれ、と要求してくるのである。なぜなら、文章とは人と人とのコミュニケーションの道具だからだ。この例外は、自分だけにわかればいいメモと、絶対に他人に見せない日記だけである。\n\nそれ以外の文章は、必ず、書く人間のほかに、（２）読む人間がいて完成されるのだ。そして、書いた人の伝えたかったことが、読んだ人にちゃんとわかってこそ、文章は役をはたしたことになる。\n\n（清水義範『スラスラ書ける！ビジネス文書』による）\n\n（注１） しきりに：何度も\n（注２） 理屈：ここでは、考え方\n（注３） 攻略（こうりゃく）する：うまく解決する\n（注４） かわしながら：避けながら\n（注５） 一抹の：ほんの少しの",
        question:
          "筆者は、文章を書くときに何がプレッシャーになっていると述べているか。",
        options: [
          "このまま最後まで書き上げられるか不安だという気持ち",
          "読む人が期待する書き方をしているかという気持ち",
          "自分は字を書くのが下手だから嫌だという気持ち",
          "書きたいことがうまく書けているかという気持ち",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "（１）そういうことであるとはどういうことか。",
        options: [
          "様々な障害をクリアしていくことがむずかしい。",
          "プレッシャーを忘れ、いろいろ考えるのが楽しい。",
          "苦労して問題を片付け、課題を仕上げるのが楽しい。",
          "不安を抱えたままでは問題を解決するのがむずかしい。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "（２）読む人間がいて完成されるとはどういうことか。",
        options: [
          "文章の価値を決めるのは読み手の存在だ。",
          "文章が成立するには読み手の存在が必要だ。",
          "文章は人に読まれることでよりよいものになる。",
          "文章は読み手の要求にこたえることでできあがる",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "大手ハンバーガー店が今月１６日から３０日まで、新商品がまずかったら全額返金するというキャンペーン（注）を実施する。通信販売などでは、注文した商品が気に入らなければその代金を客に返金するという保証制度は一般的だが、ハンバーガー店のような外食産業では非常に珍（めずら）しい試みだ。味への自信を示すことが目的で、全国で一斉に行われる。返金は当日限りで、期間中１人１回のみ、それから商品を半分以上食べていないことが条件だ。\n\n（注）キャンペーン：ここでは、販売方法",
        question: "大手ハンバーガー店が今月１６日から実施するのは次のどれか。",
        options: [
          "新商品がまずければいつでも全額返金する。",
          "どの商品でもまずければ条件つきで全額返金する。",
          "新商品の味が気に入らなければ条件つきで全額返金する。",
          "どの商品でも味が気に入らなければ１回だけ全額返金する。",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "森はいつも独特な香りに包まれ、さわやかに感じられるが、それはある物質の効果によるものだ。その物質は、木々が動けない体を守るために自ら作り出すもので、木につく虫や細菌（さいきん）（注）の増加を防いだり、落ち葉や枯れ木（かれき）が腐（くさ）ったときなどに生じる嫌なにおいを消したりする働きを持っている。さらにその物質には、人間の神経を安定させる効果もあるという。私たちが森林に入るとリラックスした気分になるのは、このためだ。\n\n（注）細菌（さいきん）：非常に小さくて目に見えない生物",
        question: "ある物質の働きについて、この文章からわかることは何か。",
        options: [
          "人間の持つ嫌なにおいを防ぐ。",
          "人々の気持ちを落ち着かせる。",
          "落ち葉や枯れ木を腐りにくくする。",
          "木々がもともと持っているにおいを消す。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 3,
    questions: [
      {
        passage:
          "以下は、雑誌のコラムである。\n\n日本の家の寿命\n\nもし家を建てるなら、どんな家がいいですか。もちろん長く住める家がいいですよね。日本で町を見渡してみると、頑丈そうな建物が並んでいます。ところが、ある調査によると日本の家の平均寿命は、英国77年、米国55年に比べて短く30 年ほどだそうです。「１」結果になったのでしょうか。\n\n原因の一つに、戦後の日本の特殊な住宅事情があるようです。第二次世界大戦後、日本では、家不足が深刻だったため、質より量を優先させて家が作られました。しかし、経済が成長して生活に余裕が生まれると、人々はより質の高い家を求めるようになります。そこで、それまでの家は次々に「２」そうです。その結果、町には、今のような頑丈そうな質の高い住宅が立ち並ぶことになったのです。\n\nまた、日本人の住宅観も原因として「３」。日本には、家はそこに住む家族に合わせて建てるという考え方があります。たとえば、将来子供が生まれ家族が増えることを考えて建てた家も、子供が成人して独立してしまうと、夫婦二人だけの生活には合わなくなります。そのため、年をとった夫婦ためには住むのに適した家へと建て替えるのです。そんなふうに家族の形が変わったとき、今まで住んでいた家を建て替えることも少なくないそうです。\n\n「４」、日本では家を建て替えることが多いために、家の平均寿命が短いという調査結果になったのだと思います。平均寿命30 年というのは、30 年で壊れてしまうという意味ではないのです。もし皆さんが、自分のために、家族のために、日本で家を建てるなら……どんな「５」。",
        question: "「１」には何を入れますか。",
        options: [
          "なぜこのような",
          "なぜあのような",
          "果してどのような",
          "はたしてそのような",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "「２」には何を入れますか。",
        options: [
          "建て替えていく",
          "建て替えさせていた",
          "建て替えさせられている",
          "建て替えられていった",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "「３」 には何を入れますか。",
        options: ["思われます", "わかります", "考えられます", "調べられます"],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "「４」 には何を入れますか。",
        options: ["ところで", "つまり", "なぜなら", "もちろん"],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "「５」 には何を入れますか。",
        options: [
          "家を建てたのですか",
          "家に住めたのですか",
          "家を建てますか",
          "家に住めますか",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 4,
    questions: [
      {
        passage:
          "イヌの散歩をしていると、最近ではイヌも挨拶の仕方を忘れてしまったのではないかと思ってしまいます。集団行動を経験したことがあるイヌ、もしくは(注1)、飼い主からイヌらしい教育を受けて順位制(注2)を感じることができるようになったイヌは、道でほかのイヌにすれ違い近づいたときには挨拶らしいことをします。ところが、集団行動の経験もなく、家でも甘やかされて育ってイヌは。現代のヒト社会のように挨拶をしないように見えます。挨拶をするイヌが、ほかの挨拶なしのイヌに対して威嚇する(注3)ことが観察されます。ところが、この挨拶犬が子イヌと遭遇したときには、子イヌが挨拶をできなくても威嚇をしないことが多いのです。挨拶犬にとって子イヌであるというシグナルがなんなのかわかりませんが、とにかく子イヌと成犬とを区別したうえで挨拶のあるなしを判断しているようです。\n\nイヌの挨拶行動は、生得的(注4)あるいは習得的(学習的)のどちらでしょうか？順位制にしたがった行動ができるようになったイヌでは、イヌ社会での経験がなくてもある程度の挨拶行動ができることから、生得的であるといえます。また、より儀式的な挨拶行動が円滑に(注5)実行されるためには、ほかのイヌとの集団生活があったほうがよいことから、習得的な部分もあるといえるでしょう。\n\n(注1)もしくは:または\n(注2)順位制:上下関係にもとづいてできた順序の決まり\n(注3)威嚇する:ここでは、ほえて相手を怖がるせる\n(注4)生得的:生まれたときから持っている\n(注5)円滑に:スムーズに、滑らかに",
        question:
          "この文章によると、挨拶をしない、またはできないイヌはどれか。",
        options: [
          "子イヌと成犬を区別できないイヌ",
          "挨拶をしない親イヌに育てられた子イヌ",
          "他のイヌと一緒に生活をしたことがあるイヌ",
          "イヌ社会の経験も飼い主による教育もないイヌ",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question:
          "この文章によると、どんなイヌがどんなイヌにほえて、怖がらせるか。",
        options: [
          "挨拶できるイヌが挨拶しない成犬に",
          "挨拶できるイヌが挨拶しない子イヌに",
          "挨拶できないイヌが挨拶する成犬に",
          "挨拶できないイヌ挨拶する子イヌに",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "筆者は、イヌの挨拶行動についてどのように述べているか。",
        options: [
          "イヌ社会での経験より飼い主の教育があったほうが、スムーズにできる。",
          "イヌ社会での経験は必ずしも必要ではないが、あればスムーズにできる。",
          "イヌ社会での集団生活と飼い主の教育によって初めて習得できるものだ。",
          "イヌ社会での集団生活を経験することによって始めて習得できるものだ。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "A\n関係の複雑さに驚いているのではないでしょうか。こんなはずではなかったと、抱いていた理想が崩（くず）れそうになることがあるかもしれません。特に、自分とは異なる価値観を持った上司や先輩（せんぱい）から無理な仕事を頼まれたときなど、強くそう感じることでしょう。時には先輩の言葉につい反発（はんぱつ）（注１）したくなることもあるでしょう。しかし、そんなときにはまず相手の考え方を受け入れてみてください。信頼関係を築くにはある程度の時間が必要であり、その後で自分の考えを述べればよいのです。それまでは自分を抑（おさ）えることも大切で、それが社会人としての訓練でもあります。\n\nB\n人間にとって心身ともに健康であることが理想的だが、新しく社会に出た若者たちは、時にはうまくいかないことに出会い、自信を失うこともあるだろう。経験から言うと、同僚（どうりょう）や先輩の温かい言葉が耳に入らなくなってしまうのは、そういう、自分に自信がなくなったときであることが多い。その結果、今まで築いてきた人間関係まで壊（こわ）してしまうことさえある。自分の周りの人たちを大切にして、助言（じょげん）（注２）を生かしていく気持ちを持つためには、まず自分のこれまでの努力を肯定的にとらえてみよう。結果が完璧（かんぺき）でなくても、「よくやった」と自分自身に言えると、他の人の言葉も素直（すなお）に聞くことができるようになる。\n\n（注１）反発（はんぱつ）する：言い返す\n（注２）助言（じょげん）：アドバイス",
        question: "A とB に共通して述べられていることは何か。",
        options: [
          "職場での人間関係を大事にするにはどうすればいいか。",
          "職場で自分の努力を認めてもらうにはどうすればいいか。",
          "社会人になって職場で自信をなくした時、どうすればいいか。",
          "社会に出て周囲の人と自分の考えが違った時、どうすればいいか。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "A とB では新社会人にどのようにアドバイスをしているか。",
        options: [
          "A では自分の価値観を重視することが大切だと述べ、B では自分の努力してきた姿を振り返ることが大切だと述べている。",
          "A では周りの人に自分の考えを伝えることが大切だと述べ、B では相手に認めてもらうことが大切だと述べている。",
          "A では相手の考えを尊重することが大切だと述べ、B では自分の努力を認めることが大切だと述べている。",
          "A では相手の意見を認めることが大切だと述べ、B では周りの人の言葉を聞くことが大切だと述べている。",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 5,
    questions: [
      {
        passage:
          "皆さんは寄付をしたことがあるだろうか。異常気象で食べる物が不足して困っている人や、地震で家を失った人のためにわずかながらもお小遣（こづか）いから寄付した経験を持つ人は多いだろう。その寄付に対する考え方に、今、新しい動きが起こっている。\n\nある会社では、社員食堂で低カロリーの定食を食べると代金の一部が寄付金となって途上国（とじょうこく）（注）の子供たちの食生活を支援する、というシステムを取り入れている。社員としては体調管理につながるだけでなく、人を助けることができ、会社としては社員の健康を支えながら社会貢献（こうけん）ができるので、社員にとって会社にとっても一石二鳥というわけだ。\n\nまた、「寄付つき」の商品を販売する企業も増えている。特定の商品を買うと売り上げの一部が寄付されるというもので、他の商品と比べるとやや値段は高いが、商品を買えば、同時に寄付できるという手軽さが消費者に歓迎され、売り上げを伸ばしているという。\n\nこれまでの寄付はわざわざ募金の場所へ足を運んだり、銀行からお金を振り込んだりしなければならないものが多く、社会貢献に関心はあっても寄付をするのは面倒だと実際の行動には移さない人も少なくなかった。そこに目をつけたのが新しい寄付の形で、これまでと比べ手軽に寄付できるようになり、社会貢献がしやすくなった。さらに、企業にとっても自社のイメージの向上や売り上げの増加などメリットの多い取り組みとなっている。\n\nこのように寄付は慈善（じぜん）のためというばかりでなく、寄付をする側にもプラスになる活動としてとらえ直され始めている。\n\n（注）途上国（とじょうこく）：経済成長の途中にある国",
        question:
          "社員食堂で低カロリーの定食を食べることがどんな良い結果につながるのか。",
        options: [
          "社員の健康が守られ、社会の役に立つことにもなる。",
          "社員に定食代の一部が返金され、寄付をする余裕ができる。",
          "会社で寄付が日常のことになり、食生活に対する意識も高まる。",
          "会社は社会の役に立つことができ、食堂の経費の節約にもなる。",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question:
          "この文章では、これまでの寄付にはどのような問題があったと述べているか。",
        options: [
          "寄付をする方法があまり知られていない。",
          "寄付をすることが社会的に評価されにくい。",
          "寄付をするのに手間がかかるシステムである。",
          "寄付をするためには経済的に余裕がなければならない。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "この文章における新しい寄付とはどういうものか。",
        options: [
          "企業が社員や消費者の意思にかかわりなく積極的に行うもの",
          "企業が慈善（じぜん）事業のためではなく利益（りえき）を上げるために行うもの",
          "社員や消費者が手軽に寄付ができて企業側にも利点があるもの",
          "社員や消費者が気がつかないうちに社会貢献に参加できるもの",
        ],
        correctIndex: 2,
      },
      {
        passage:
          "写真家の北井一夫さんから教えてもらったことでもあるのだが、僕は写真は50.50 の表現物だと思っている。カメラを間に置いた向こう側とぼくとの表現性が、フィフティ.フィフティ（注1）の割合で成り立っている。つまり100 パーセント僕の表現だと恐れ多くていえないのだ。向こう側が表現しているものをカメラでサッと横取りして（注2）いるにすぎないでも一方で、その表現だと認めてカメラを向ける僕がいるからこそ、向こう側の表現が生かされて像に結実する（注3）わけだ。\n\n注1：フィフティ.フィフティ：50 対50、半分ずつ\n注2：横取りして：奪う\n注3：～～に結実する：～～として完成する",
        question: "筆者は写真をどのようにとらえているか",
        options: [
          "写真家が写される側に刺激されて表現したもの",
          "写真家が主体的に対象を選んで表現したもの",
          "写真家が対象を偶然にとらえて表現したもの",
          "写真家が写される側と共に表現したもの",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "以下は、ある会社が新商品の発表会で来場者に渡した案内である。\n\nご案内\n\n本日は東西インテリア新作べッド発表会にご来場くださり、まことにありがとうございます。\n\n商品購入（こうにゅう）（注１）をご希望のお客様は、受付でお渡ししたご来場者カードに商品番号をご記入いただき、販売スタッフにお渡しください。販売スタッフがお届け先やご希望日をお伺いし、その後、お会計となります。なお、その際に会員証を提示（ていじ）（注２）されますと５％割引とさせていただきます。\n\n何かご不明な点がございましたら、お気軽に販売スタッフにお声をおかけください。\n\n（注１）購入（こうにゅう）：買うこと\n（注２）提示（ていじ）する：見せる",
        question: "商品を買いたい場合はどうすればいいか。",
        options: [
          "来場者カードに商品番号と届け先および希望日を記入して販売スタッフに渡した後、代金を支払う。",
          "来場者カードに商品番号と配達希望日を記入して販売スタッフに渡し、商品が自宅に届いたときに代金を支払う。",
          "商品番号と希望日などを書いた来場者カードを販売スタッフに渡し、商品を届けてもらった後で代金を支払う。",
          "商品番号を書いた来場者カードを販売スタッフに渡して配達日などを確認した後、代金を支払う。",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 6,
    questions: [
      {
        passage:
          "会議は来週の火曜日に変更になりました。時間は午後三時からです。場所は会議室Aです。",
        question: "会議はいつどこでありますか。",
        options: [
          "今週火曜日、会議室A",
          "来週火曜日午後三時、会議室A",
          "来週水曜日、会議室A",
          "今週火曜日午後三時",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "この資料は会議の前に読んでおいてください。質問がある人は、事前にメールで送ってください。",
        question: "質問があるとき、どうしますか。",
        options: ["会議で聞く", "事前にメールで送る", "読まない", "資料を返す"],
        correctIndex: 1,
      },
      {
        passage:
          "申し込みは今月末までです。必要な書類をそろえて、窓口に提出してください。",
        question: "申し込みはいつまでですか。",
        options: ["今週末", "来月末", "今月末", "来週末"],
        correctIndex: 2,
      },
      {
        passage:
          "新製品の説明会は来週月曜日と火曜日にあります。どちらか都合のいい日に参加してください。",
        question: "説明会はいつありますか。",
        options: ["月曜日だけ", "火曜日だけ", "月曜日と火曜日", "今週"],
        correctIndex: 2,
      },
      {
        passage:
          "参加を希望する人は、今週金曜日までに担当者に連絡してください。",
        question: "参加したいとき、いつ連絡しますか。",
        options: ["来週", "今週金曜日まで", "説明会の日", "明日"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 7,
    questions: [
      {
        passage:
          "この薬は食後に飲んでください。一日三回です。水で飲んでください。",
        question: "薬はいつ飲みますか。",
        options: ["食事の前", "食事の後", "朝だけ", "晩だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "図書館の利用時間は午前九時から午後八時までです。日曜日は午後五時までです。",
        question: "日曜日は何時まで利用できますか。",
        options: ["午後八時", "午後五時", "午前九時", "午後九時"],
        correctIndex: 1,
      },
      {
        passage:
          "駐車場は建物の北側にあります。自転車は東側の駐輪場に止めてください。",
        question: "自転車はどこに止めますか。",
        options: ["北側", "駐車場", "東側の駐輪場", "建物の中"],
        correctIndex: 2,
      },
      {
        passage:
          "会議室の予約は前日までにしてください。当日の予約は受け付けません。",
        question: "当日会議室を予約できますか。",
        options: ["はい、できます", "いいえ、できません", "午前だけ", "午後だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "この書類は必ず黒のボールペンで書いてください。鉛筆では書かないでください。",
        question: "何で書きますか。",
        options: ["鉛筆", "黒のボールペン", "青のペン", "万年筆"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 8,
    questions: [
      {
        passage:
          "提出期限は来週の金曜日です。遅れた場合は受け付けません。",
        question: "来週の土曜日に提出できますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "研修は三日間です。一日目は講義、二日目は実習、三日目は試験です。",
        question: "二日目は何をしますか。",
        options: ["講義", "実習", "試験", "休み"],
        correctIndex: 1,
      },
      {
        passage:
          "欠席する場合は、必ず前日までに連絡してください。当日の連絡は困ります。",
        question: "欠席するとき、いつ連絡しますか。",
        options: ["当日", "前日までに", "一週間後", "連絡しない"],
        correctIndex: 1,
      },
      {
        passage:
          "このイベントは予約制です。参加したい人は、ウェブサイトから申し込んでください。",
        question: "どうしたら参加できますか。",
        options: ["当日行く", "ウェブサイトから申し込む", "電話する", "手紙を送る"],
        correctIndex: 1,
      },
      {
        passage:
          "受付は午前九時から午後五時までです。それ以外の時間は受け付けません。",
        question: "午後六時に申し込めますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 9,
    questions: [
      {
        passage:
          "写真を撮るときは、フラッシュを使わないでください。他のお客様のご迷惑になります。",
        question: "写真を撮るとき、何をしてはいけませんか。",
        options: ["撮ること", "フラッシュを使うこと", "カメラを持つこと", "動くこと"],
        correctIndex: 1,
      },
      {
        passage:
          "この施設は月曜日が休館日です。祝日が月曜日の場合は火曜日が休館日になります。",
        question: "月曜日が祝日のとき、いつ休みですか。",
        options: ["月曜日", "火曜日", "両方", "休みではない"],
        correctIndex: 1,
      },
      {
        passage:
          "入館料は大人千円、子供五百円です。団体の場合は割引があります。",
        question: "大人二人と子供一人ではいくらですか。",
        options: ["千五百円", "二千円", "二千五百円", "千円"],
        correctIndex: 2,
      },
      {
        passage:
          "応募書類は必ず期限内に送ってください。期限を過ぎたものは審査の対象になりません。",
        question: "期限を過ぎて送った場合、どうなりますか。",
        options: ["審査される", "審査の対象にならない", "後で審査される", "連絡が来る"],
        correctIndex: 1,
      },
      {
        passage:
          "面接は三十分程度を予定しています。遅刻しないようにしてください。",
        question: "面接はどのくらいの時間ですか。",
        options: ["十五分", "三十分程度", "一時間", "二時間"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N2",
    section: "reading",
    testNumber: 10,
    questions: [
      {
        passage:
          "この商品は返品できません。ご了承ください。",
        question: "買った後、返品できますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "お支払いは現金またはカードでお願いします。つり銭のない場合がありますので、できるだけおつりの少ないようにお願いします。",
        question: "支払い方法は何がありますか。",
        options: ["現金だけ", "カードだけ", "現金またはカード", "電子マネーだけ"],
        correctIndex: 2,
      },
      {
        passage:
          "この駐車場は三十分まで無料です。それを過ぎると有料になります。",
        question: "四十分止めたら、どうなりますか。",
        options: ["無料", "有料", "追い出される", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "会議は来週の水曜日に変更になりました。時間は午後二時からです。場所は変わりません。",
        question: "会議はいつどこでありますか。",
        options: [
          "今週水曜日、同じ場所",
          "来週水曜日午後二時、同じ場所",
          "来週木曜日午後二時",
          "今週水曜日午後二時",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "明日の会議は午後三時からです。資料は前の日に配布します。読んでから参加してください。",
        question: "資料はいつ読むべきですか。",
        options: ["会議の後", "会議の前の日", "会議の日", "会議の一週間前"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 1,
    questions: [
      {
        passage:
          "人生というものには、いろいろな問題があります。しかし、それらのことも過ぎ去ってみると、あのときに迷わないでやってほんとうによかったな、というような場合が多いのです。そこが大事なところだと思います。ある場合には迷うこともあるでしょう。しかし、しょせん迷ってもお互い自分の知恵裁量というものは、ほんとうは小さいものです。だから、「これはもう仕方がない。ここまでできたのだからこれ以上進んで結果がうまくいかなくても、それは運命だ」と度胸を決めてしまう。そうした場合には、案外、困難だと思っていたことがスムーズにいって、むしろ非常によい結果を生む、ということにもなるのではないかと思うのです。",
        question: "筆者がここで最も言いたいことは何か。",
        options: [
          "うまくいかない場合は一人で迷うより、みんなの知恵を借りたほうがいい。",
          "人生においてしかたないとあきらめることもいい結果をもたらす場合がある。",
          "人生は心の持ちようで以外にうまくいく場合もある。",
          "難しい問題に遭っても迷わず実践することが大事だ",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "日本人に個性がないということはよく言われていることだけれど、今世界的に、1 週間、或いは年間にどれだけ働くか、ということについて、常識的な申し合わせが行われていることには、私はいつも違和感を覚えている。\n\n私は毎年、身体障害者の方たちとイスラエルやイタリアなどに旅をしているが､一昨年はシナイ山に登った。盲人も６人、ボランティアの助力を得て頂上を究めた。普段、数十歩しか歩けない車椅子の人にも、頂上への道を少しでも歩いてもらった。障害者にとっての山頂は、決して現実の山の頂きではない。もし普段100 歩しか歩けない障害者が、頑張ってその日に限り、山道を200 歩歩いて力尽きたら、そここそがその人にとっての光栄ある山頂なのである。\n\n人間が週に何時間働くべきか、ということにも、ひとりひとりの適切な時間があると思う。労働時間を一律に決めなければならない、とするのは専門職ではない、未熟練労働に対する基準としてのみ有効である。未熟練労働者の場合は、時間あたりの労働賃金をできるだけ高くし、それによって労働時間を短縮しようとして当然である。\n\nしかし、専門職と呼ばれる仕事に従事する人は、労働報酬の時間あたりの金額など、ほとんど問題外だ。私は小説家だが、小説家の仕事も専門職に属するから、ひとつの作品のためにどれだけ時間をかけようと勝手である。短編をほんの2、3 時間で書いてしまうこともあるし、10 年、20 年と資料を集め調べ続けてやっと完成するものもある。ひとつの作品に私がどれだけの時間や労力や調査費をかけようが、昼夜何時間ずつ働こうが、それは私がプロである以上、自由である。\n\n日本の社会の中には、職場の同僚がお互いに牽制するので、取ってもいいはずの休みも取れない人が確かにかなりいる。小さな会社の社長に頼みこまれると、したくもない残業をしなければならなくなる社員もいる。そうしないと会社が潰れて失職をすることが目にみえているからである。その結果｢過労死｣などということも稀には起きることになる。\n\nしかし日本人のなかには、仕事が趣味という人も実に多い。ブルーカラーと呼ばれている人たちの中にさえ、どうしたら仕事の能率が上がるか考えている人はざらである。趣味になりかけているものが、たまたま会社の仕事だから、時間が来たら帰らねばならない。それはプロの楽しみを妨げることであって、一種の個人の自由の束縛というものである。\n\nただそれほど働きたくない人は仕事をしない自由を完全に守れるように、社会は体制を作り変えるべきである。しかし同時に、一律に休みを取れ、というような社会主義的発想はいくら世界の流行だとはいえ、自由を手にしている人間に対しては個人への干渉であり、非礼である",
        question: "違和感を覚えているのはなぜか。",
        options: [
          "世界的に労働時間が決められているから。",
          "適切な労働時間は人によって異なるから。",
          "日本人は時間にきびしいから。",
          "日本人は働きすぎるから。",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "筆者は障害者にとっての山頂とはどこだと言っているか。",
        options: [
          "現実の山の頂き",
          "シナイ山の山頂",
          "力尽きたところ",
          "普段どおりに100歩歩いたところ",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "筆者は、プロの楽しみとは何だごと言っているか。",
        options: [
          "仕事と趣味を両立させること",
          "社長に頼みこまれて残業をすること",
          "専門家として小説を書くこと",
          "納得した仕事をするために時間をかけること",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "筆者の考えに合っているものはどれか。",
        options: [
          "仕事が趣味の人も、時間がきたら仕事を止めて帰ったほうがよい。",
          "職場の同僚に遠慮せずに、休みはできるだけ取るべきだ。",
          "長時間働くのも、あまり仕事をしないのも、個人の自由だ。",
          "労働時間の短縮は世界の流行だから、日本人ももっと休むべきだ。",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 2,
    questions: [
      {
        passage:
          "混み合ったコンパの席で友人と話をしているとき、耳に入ってくるのは友人の声だけではない。周囲で交わされる会話や食器のぶつかる音があり、BGM さえ流れている。そんな喧噪（けんそう）の中でも、友人の話に耳を傾け、その内容を理解することが可能である。このような例をあげるまでもなく、私たちの耳には通常たくさんの情報が同時に入力されている。それでも私たちが混乱しないのは、注意を選択的に振り分ける選択的注意ができるからである。注意を向けられた情報は深い処理を受け、そこで初めて理解されることになる。\n\nしかし処理されているのは注意を向けられた情報だけではない。友人の話に耳を傾けていても、BGM がピアノからギターに変われば、その音色の変化に気づくし、他の人から自分の名前を呼ばれたことにも気づく。この場合の情報処理は、意図的な制御を受けない自動的処理である。ここでは情報の物理的な特徴（声の質、口笛などの信号、名前など）が処理され、情報内容の深い理解は伴わない。これに対して、喧噪の中で友人の話が理解できるのは、注意的処理とよばれ、情報処理の意図的な制御を行っている。注意的処理では、記憶構造内の知識が検索され、情報の深い理解を可能にしているのである。",
        question:
          "そんな喧噪の中でも、友人の話に耳を傾け、その内容を理解することが可能であるというのは、なぜか。",
        options: [
          "友人の話に対して「自動的処理」をするから。",
          "周囲の声や音に対して「選択的注意」ができるから。",
          "友人の話以外の声や音は、耳に入ってこないから。",
          "友人の声と他の音は、質が異なっているから。",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "深い処理を文章中の別の言葉で言い換えると何か。",
        options: ["選択的注意", "自動的処理", "物理的処理", "注意的処理"],
        correctIndex: 3,
      },
      {
        passage: "",
        question: "自動的処理の例はどれか。",
        options: [
          "喫茶店で本を読んでいるとき、店員が話しかけてきたことに気づくこと",
          "外国語の新聞を読んでいるとき、わからない言葉を辞書で調べること",
          "コンサートで流れている音楽に合わせて一緒に歌うこと",
          "友人と話しているとき、友人の話をメモすること",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "人間の潜在力をONにするには、プラス発想や積極思考など前向きの精神状態や心の持ち方が大きく作用しているといいます。思いの力がわたしたちの可能性をおおいに広げてくれるということが、遺伝子レベルで解明されはじめているわけです。\n ______、どれくらいのことが人間に可能なのか。人間の頭で、これをしたい、こうあってほしいと考えられるようなことは、遺伝子レベルでみれば、たいてい可能な範囲にあるそうです。つまり、「思ったことはかなえられる」能力が、わたしたちの中には潜在しているのです。",
        question: "文の _______ に入る最も適当なものはどれか。",
        options: ["ちなみに", "もっとも", "たとえば", "すなわち"],
        correctIndex: 0,
      },
      {
        passage:
          "ちかごろ、速読術などという言葉、その訓練の方法の話をきくと、古風な人間である私はカッとなる。そういう習練をする暇があったら一本をよむにこしたことはない。つまらない本に時間をかけるのは愚かなことだし、丹念によまねばならぬ本をすばやくよむのは、さらに愚かなことだ。そういう差別は種々の本を読むことによってしか覚えられぬものであろう。",
        question: "そういう差別とはどんな差別か。",
        options: [
          "本を読むときに速読術を使うべきかどうかという差別",
          "本を読むべきか速読術を習練するべきかという差別",
          "速読術で読む習練をするべきかどうかという差別",
          "すばやく読むべきか丹念に読むべきかという差別",
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 3,
    questions: [
      {
        passage:
          "A\n日本では周囲と協調するように教育され、年長者に対して従順（じゅうじゅん）に、調和状態を壊さないようにする。しかし実際は、人間は独自の感覚や思考を持つのが当然で、他者と考え方が異なるのは自然なことなのである。これを無理に押さえつけようとすると、心理状態が正常に保てない場合がある、。考えの異なる他人と上手に意見交換するということは、重要なことなのだ。この技術は、訓練されずには得られないものである。そこで私は、日本の学校教育でディベートを取り入れることを提案したい。自分の意見をきちんと相手に伝え、反論を聞き、整理し、ポイントを見つけ、さらに説得していく過程で、参加者は意見交換の重要なテクニックを学ぶ。また、感情的にならず冷静な態度を保ち続ける訓練も、ディベートを通してできるはずである。\n\nB\nディベートが基本的に勝ち負けを決めるタイプの討論であることを考えると、日本の学校教育で採用することには疑問を感じている。自分の意見を述べたり相手の意見を聞いたりするという行動は言うまでもなく重要であり、その資質を養う必要があるが、その方法としてのディベートには無理がある。なぜなら、日本社会の根底に、人は他者の気持ちを考えるべきだ、争いは避けるべきだ、という考えがあり、争って勝ち負けを決めるタイプのディベートはそれと矛盾しているからである。議論で勝負するのではなく、互いの意見を認め合いながら弱点を補ったり譲り合ったりしながら、協力して新しい考え方をつくっていくブレーン・ストーミングのような討論のほうが適当であると思う。",
        question: "Ａ、Ｂが共通して言っていることは何か。",
        options: [
          "日本社会でディベートが受け入れられるのは難しいだろう。",
          "ディベートでは意見交換のテクニックを学ぶことはできない。",
          "他者との意見交換は重要で、そのための訓練か必要である。",
          "以前の日本では協調性が重視されていたが、最近は変化している。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "二つの意見を正しく説明しているのはどれか。",
        options: [
          "Ａ：ディベートにより意見交換の重要なテクニックが学べる。 Ｂ：ディベートではなく協力し合うタイプの討論方法がいい。",
          "Ａ：日本人が周囲との調和を大切にしていることはすばらしい。 Ｂ：常に他者の気持ちを考える日本人の資質は、問題がある。",
          "Ａ：ディベートには長所も短所もあるが、日本の学校教育では必要ではない。 Ｂ：ディベートは多くの長所があり、日本の学校教育で必要だ。",
          "Ａ：ディベートでは進め方や勝負の決め方を知っておく必要がある｡ Ｂ：日本でディベートを取り入れるにはさまざまな方法がある。",
        ],
        correctIndex: 0,
      },
      {
        passage:
          "人間には四種類ある。過去の思い出に生きる人、未来に生きる人、現在に生きる人、その他だ。\nわたしは「あのときこう言い返せばよかった」とよく後悔するから過去に生きているのかとも思うが、過去の思い出にひたることはないし、「思い出づくり」にも興味がない。過去の栄光も意識に上らない（過去の栄光がないかもしれない）。第一、過去に目を向けることがない。人に自慢しようとして、自慢できるところが現在の自分に見当たらず、過去の中に無理やり探すときぐらいだ。___１___　、つらい出来事はずっと尾を引く。先日、失意の底に沈んだときは、立て直るのに二日かかった。たぶん過去のことは二日経つと他人事に思えるのだ。\n\n未来はどうか。わたしはよく、流暢に話せないのではないかなどと未来に不安を抱くし、食事でも、好きな物が最後に残るよう計画的に食べるから、未来に生きていそうだが、そうとも思えない。たとえば、未来のために健康診断を受けたほうがいいと思うが、検査は極力避けている。仕事も、今日できることを一日延ばしにして、結局、約束が守れず謝罪する。計画は立てるが、計画性がないのだ。万事、行き当たりばったりだ。\n\n学生時代、進路を哲学に変えたときもそうだった。当時は就職難で、大学院に行くと就職はまず無理だったが、決断には何の迷いもなかった。親から、哲学に進むなら仕送りをやめると脅されても、生活のあてもないまま、まったく動じなかった。わたしが楽天的だからではない。たんに先のことが他人事としか思えないのだ。\n\n自分の未来は一日で十分だ。わたしは人生が何百年もあればいいのにと願っているが、人生のうち、___２___　人生だと思っているのは今日一日と過去二日と未来一日の余計四日日間だけだ。",
        question: "___１___ に入る最も適当な言葉はどれか。",
        options: ["むろん", "しかし", "すると", "そうして"],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "「万事、行き当たりばったりだ」とは、どういう意味か。",
        options: [
          "人生において後悔することはあっても、過去に目を向けることはない。",
          "人生においていろいろなこおは他人事だと考え、楽観的に行動する。",
          "人生において先のことを深く考えずに状況に応じて適当に処理する。",
          "人生において周りに反対されても、自分で決断を信じて信念を曲げない。",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "___２___ に入る最も適切な言葉はどれか。",
        options: ["後悔のない", "充実した", "自分の", "幸せな"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 4,
    questions: [
      {
        passage:
          "ある有名なインタビューアーが、｢いろんな人に会わなくちゃならなくて、たいへんですね。いい人、好きな人だけじゃなくて、いやな人、きらいな人もいるでしょうに」と言われて、｢いいえ、はじめから好きな人、きらいな人、ということはありません。はじめは虚心（注1）でその人に会うようにしています。最低限、その人に好意と関心をもつようにして」と言っていたのが印象的である。\n\n私たちは、人に聞いたことや、会ったときの印象で、ある程度、相手の人がらを決めてしまいがちである。\n\nその人の容貌や服装やからだの特徴や、ことばづかいや動作や姿勢、さらにまた、職業や年齢や出身、経験、社会的地位などといったものからでも、どんな人か、何らかの先入主（注2）を抱く。出会ったときの、自分側の条件や、その場面にもよるわけだが、そういうことを割り引いて、冷静に考える人はまれで、たいていは、自分のこれまでの体験から、あれはこういう人だ、というイメージをつくり上げる。過去の経験で似た人がいれば、その人の印象が重なってくる。意識的に払いのけようとしても、この第一印象は、強い影響をあとに残す。\n\n(中略)\n\n結婚のための見合いのような場合、内心強い劣等感を持っていて、きらわれるのではないかという恐れを抱いていると、相手に対する見方にも、バイアス(かたより)が生ずる。畏怖（注3）して、相手が実物以上によく見えたり、逆に、反動的に、なにかにつけて、わるく、低く見ようとしたりする。\n\n人生、はじめての出会いは、すべて、見合いみたいなものだが、身がまえてコチコチになっていると、相手の姿が正確に見えない｡特に利害がからむと､バイアスがかかりやすく、かたよった先入主を抱きがちである。ずるそう、おっかなそう、きつそう……など。それは、多分、自分側の気持ちを、相手のイメージに投影しているのである。\n\n身がまえることなく、相手を受けいれることが、いかに難しいか。自己防衛的な身がまえは、相手に対して、ドアを閉じようとしている姿勢である。ある有名なインタビューアーが言ったように、自分の心のドアを開け、人に接しようとする心がけが必要である。パッと見た瞬間の印象にとらわれたり、こだわったりすると、人間関係は玄関先でギクシャクする（注4）。\n\n（注1）虚心：先入観なく相手をありのままに受け入れる心\n（注2）先入主：先入観\n（注3）畏怖：おそれ\n（注4）ギクシャク：物の動き、人の言動、人間関係が円滑でないさま",
        question: "印象的であるとあるが、何が印象的だったのか。",
        options: [
          "いろいろな人に会うのは大変だ、と言ったこと",
          "いやな人、きらいな人もいる、と言ったこと",
          "人の好ききらいはない、と言ったこと",
          "だれにでも初めは虚心で会う、と言ったこと",
        ],
        correctIndex: 3,
      },
      {
        passage: "",
        question:
          "「身がまえてコチコチになっている」というのは、どういうことか。",
        options: [
          "作り上げたイメージを払いのけようとしている様子",
          "相手がこわそうなので、びくびくしている様子",
          "相手に対して心を開けず、自分を守ろうとしている様子",
          "相手がもっている先入観をくずそうとしている様子",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question:
          "「自分側の気持ちを、相手のイメージに投影している」例として適当なものはどれか。",
        options: [
          "自分に自信かないと、相手が自分をばかにしているように感じる。",
          "自分がさびしいときに相手が楽しそうにしていると腹が立つ。",
          "自信過剰な人を見ると、心配になり、注意したくなる。",
          "相手が自信がなさそうだと、自分に自信がわいてくる。",
        ],
        correctIndex: 0,
      },
      {
        passage: "",
        question: "この文章で筆者が最も言いたいことは何か。",
        options: [
          "先入観と第一印象は人を判断する時に大きく影響する。",
          "相手に対する先入観なしに自分の心を開くことが大切だ。",
          "第一印象は、その人を判断するのに、全く役にたたないものだ。",
          "人間関係は、まず相手のイメージを作りあげることから始まる。",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "ある医者から聞いた話だが、薬物依存の患者に、本物そっくりの薬を渡すと症状が落ち着くことがあるという。その後、「薬がなくても大丈夫」と説明すると、薬から離れるきっかけになるというのだ。これは治療の一環として行われるそうである。\nこんなことができるのは、患者が、にせの薬を「本物の薬」と思いこむことで効果が現れる「プラセボ効果」が存在するからだ。\n\n昔から、珍しい植物とか、動物の骨とかが難病に効くという話がよくある。成分からすると効くはずのないものが長く薬として使われた背景には、プラセボ効果があるとみられる。",
        question: "次のうち、プラセボ効果に相当するのはどれか。",
        options: [
          "お守りがあると、テストでほんとうにいい点が取れることがある。",
          "乗り物酔いに効くと言われて梅干しをお茶に入れて飲んだら酔わなかった。",
          "マラソンをしているとき、応援されると急に足が軽くなることがある。",
          "薬を飲まなくても食事を改善することで病気が治ることがある。",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 5,
    questions: [
      {
        passage:
          "「猫の立場に立って、そこから見える世界を想像してみると、自分が見ている世界のあやふやさがあぶり出されることがある」\n\nわたしがもし「ライオンを知らない」といったら、多くの人がへんな顔をするだろう。いつ、どのように自分がライオンを認識するようになったのか、残念ながら記憶にない。おそらく最初は絵か写真で姿形を見せられ、実際に動物園で本物を見て認識に到達したのだと思う。つまりわたしは学習して情報を持つがゆえに、「ライオンを知っている」と錯覚してるだけだ。\n\nわたしはライオンを知らない。イラクで毎日人が死んでいることも知らない。\n\n知っているのは、目の前で寝る猫達が愛らしいということだけだ。",
        question:
          "筆者が言っている「自分が見ている世界」とは、どういうことか。",
        options: [
          "学習で得た知識などで、体験しなくても知っていると思う世界。",
          "情報や知識にすぎないことも、知っていると勘違いする世界",
          "動物の知能よりはるかに発達した人間特有の想像の世界",
          "自分の五感で体験した実感としての世界。",
        ],
        correctIndex: 1,
      },
      {
        passage: "",
        question: "_______ に入る最も適当な言葉はどれか。",
        options: ["普通", "奇妙", "斬新", "当然"],
        correctIndex: 1,
      },
      {
        passage: "",
        question:
          "「イラクで毎日人が死んでいることも知らない」とあるが、筆者のどんな気持ちが表れているか。",
        options: [
          "ニュースや映像などの報道は事実と異なるところがあるので、簡単に信じてはいけないという筆者の思い",
          "人間は現実主義で、国際的なニュースよりも自分の身近で起きる日々の暮らしの中のことがもっと大事だという筆者の思い",
          "事実は知っていても実際の体験がないわけで、簡単に知っているとはいえないのだという筆者の思い",
          "人間の目に見える世界は情報で得た知識で成り立つ場合が多く、それを克服するためにはもっと現場での体験を大事にすべきだという思い",
        ],
        correctIndex: 2,
      },
      {
        passage: "",
        question: "本文の内容と合っているものはどれか。",
        options: [
          "猫に見える世界＝猫が知らない世界",
          "人間に見える世界＝人間が知っている世界",
          "猫に見える世界 ≠ 猫が知っている世界",
          "人間に見える世界 ≠ 人間が知っている世界",
        ],
        correctIndex: 3,
      },
      {
        passage:
          "衝突することを恐れていたのでは、他人と親しくなることができない。人間はお互いにからり親しくなっても、お互いを完全に理解できるものではない。理解しているつもりでも誤解していることはあろう。そして、衝突することを恐れていると、その誤解がとけないまま関係が維持されることになる。相手のやることで何か不愉快なことがあった時、もし本気で親しくなろうとすれば、それをはっきりという方がいいだろう。相手は不愉快だといわれてはじめて、なぜ自分はそれをしたか、ということが説明できる。",
        question: "筆者がここで最も言いたいことは何か。",
        options: [
          "お互いの誤解を避けるために、距離をおいてつきあった方がいい。",
          "相手の人と親しくなるにはもっと相手のことを理解しようと努力するべきだ。",
          "お互いの意見が違っていても素直に打ち明けることでよい関係が築ける。",
          "不愉快に感じることで誤解が生じる恐れがあるので、はっきり言わないといけない。",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 6,
    questions: [
      {
        passage:
          "会議は来週の木曜日に変更になりました。時間は午後四時からです。場所は会議室Bです。",
        question: "会議はいつどこでありますか。",
        options: [
          "今週木曜日、会議室B",
          "来週木曜日午後四時、会議室B",
          "来週金曜日、会議室B",
          "今週木曜日午後四時",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "この資料は会議の前に読んでおいてください。質問がある人は、事前にメールで送ってください。",
        question: "質問があるとき、どうしますか。",
        options: ["会議で聞く", "事前にメールで送る", "読まない", "資料を返す"],
        correctIndex: 1,
      },
      {
        passage:
          "申し込みは今月末までです。必要な書類をそろえて、窓口に提出してください。",
        question: "申し込みはいつまでですか。",
        options: ["今週末", "来月末", "今月末", "来週末"],
        correctIndex: 2,
      },
      {
        passage:
          "新製品の説明会は来週水曜日と木曜日にあります。どちらか都合のいい日に参加してください。",
        question: "説明会はいつありますか。",
        options: ["水曜日だけ", "木曜日だけ", "水曜日と木曜日", "今週"],
        correctIndex: 2,
      },
      {
        passage:
          "参加を希望する人は、今週土曜日までに担当者に連絡してください。",
        question: "参加したいとき、いつ連絡しますか。",
        options: ["来週", "今週土曜日まで", "説明会の日", "明日"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 7,
    questions: [
      {
        passage:
          "この薬は食後に飲んでください。一日二回、朝と晩です。水で飲んでください。",
        question: "薬はいつ飲みますか。",
        options: ["食事の前", "食事の後", "朝だけ", "晩だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "図書館の利用時間は午前十時から午後七時までです。土曜日は午後四時までです。",
        question: "土曜日は何時まで利用できますか。",
        options: ["午後七時", "午後四時", "午前十時", "午後八時"],
        correctIndex: 1,
      },
      {
        passage:
          "駐車場は建物の南側にあります。自転車は西側の駐輪場に止めてください。",
        question: "自転車はどこに止めますか。",
        options: ["南側", "駐車場", "西側の駐輪場", "建物の中"],
        correctIndex: 2,
      },
      {
        passage:
          "会議室の予約は二日前までにしてください。当日の予約は受け付けません。",
        question: "当日会議室を予約できますか。",
        options: ["はい、できます", "いいえ、できません", "午前だけ", "午後だけ"],
        correctIndex: 1,
      },
      {
        passage:
          "この書類は必ず黒のボールペンで書いてください。消せるペンでは書かないでください。",
        question: "何で書きますか。",
        options: ["消せるペン", "黒のボールペン", "青のペン", "万年筆"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 8,
    questions: [
      {
        passage:
          "提出期限は来週の月曜日です。遅れた場合は受け付けません。",
        question: "来週の火曜日に提出できますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "研修は四日間です。一日目と二日目は講義、三日目は実習、四日目は試験です。",
        question: "三日目は何をしますか。",
        options: ["講義", "実習", "試験", "休み"],
        correctIndex: 1,
      },
      {
        passage:
          "欠席する場合は、必ず二日前までに連絡してください。当日の連絡は困ります。",
        question: "欠席するとき、いつ連絡しますか。",
        options: ["当日", "二日前までに", "一週間後", "連絡しない"],
        correctIndex: 1,
      },
      {
        passage:
          "このイベントは予約制です。参加したい人は、ウェブサイトから申し込んでください。",
        question: "どうしたら参加できますか。",
        options: ["当日行く", "ウェブサイトから申し込む", "電話する", "手紙を送る"],
        correctIndex: 1,
      },
      {
        passage:
          "受付は午前八時から午後六時までです。それ以外の時間は受け付けません。",
        question: "午後七時に申し込めますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 9,
    questions: [
      {
        passage:
          "写真を撮るときは、フラッシュを使わないでください。展示物に悪影響があります。",
        question: "写真を撮るとき、何をしてはいけませんか。",
        options: ["撮ること", "フラッシュを使うこと", "カメラを持つこと", "動くこと"],
        correctIndex: 1,
      },
      {
        passage:
          "この施設は火曜日が休館日です。祝日が火曜日の場合は水曜日が休館日になります。",
        question: "火曜日が祝日のとき、いつ休みですか。",
        options: ["火曜日", "水曜日", "両方", "休みではない"],
        correctIndex: 1,
      },
      {
        passage:
          "入館料は大人千二百円、子供六百円です。団体十名以上は二割引です。",
        question: "大人五人ではいくらですか。",
        options: ["三千円", "五千円", "六千円", "四千八百円"],
        correctIndex: 2,
      },
      {
        passage:
          "応募書類は必ず期限内に送ってください。期限を過ぎたものは審査の対象になりません。",
        question: "期限を過ぎて送った場合、どうなりますか。",
        options: ["審査される", "審査の対象にならない", "後で審査される", "連絡が来る"],
        correctIndex: 1,
      },
      {
        passage:
          "面接は四十五分程度を予定しています。遅刻しないようにしてください。",
        question: "面接はどのくらいの時間ですか。",
        options: ["三十分", "四十五分程度", "一時間", "二時間"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    testNumber: 10,
    questions: [
      {
        passage:
          "この商品は返品・交換できません。ご了承ください。",
        question: "買った後、返品できますか。",
        options: ["はい、できます", "いいえ、できません", "場合による", "わからない"],
        correctIndex: 1,
      },
      {
        passage:
          "お支払いは現金、カード、電子マネーのいずれかでお願いします。",
        question: "支払い方法は何がありますか。",
        options: ["現金だけ", "カードだけ", "現金、カード、電子マネー", "電子マネーだけ"],
        correctIndex: 2,
      },
      {
        passage:
          "この駐車場は一時間まで無料です。それを過ぎると三十分ごとに二百円かかります。",
        question: "二時間止めたら、いくらかかりますか。",
        options: ["無料", "二百円", "四百円", "八百円"],
        correctIndex: 2,
      },
      {
        passage:
          "会議は来週の金曜日に変更になりました。時間は午前十時からです。場所は変わりません。",
        question: "会議はいつどこでありますか。",
        options: [
          "今週金曜日、同じ場所",
          "来週金曜日午前十時、同じ場所",
          "来週土曜日午前十時",
          "今週金曜日午前十時",
        ],
        correctIndex: 1,
      },
      {
        passage:
          "明日の会議は午後一時からです。資料は前の日にメールで送ります。読んでから参加してください。",
        question: "資料はいつ読むべきですか。",
        options: ["会議の後", "会議の前の日", "会議の日", "会議の一週間前"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "listening",
    testNumber: 1,
    questions: [
      {
        question: "",
        options: [
          "水の量を増やす",
          "水の量を減らす",
          "ひりょうを増やす",
          "ひりょうを減らす",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t1-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t1-q1.jpg",
      },
      {
        question: "",
        options: [
          "ゴミ袋を買う",
          "清掃用具を買う",
          "お知らせの内容を書き足す",
          "役所にゴミ回収を依頼する",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t1-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t1-q2.jpg",
      },
      {
        question: "",
        options: [
          "パッケージのデザイン",
          "クリームの種類",
          "一箱に入れるクッキーの量",
          "販売価格",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t1-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t1-q3.jpg",
      },
      {
        question: "",
        options: [
          "一年間の契約をする",
          "二年間の契約をする",
          "携帯電話を買い換える",
          "手数料を払う",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t1-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t1-q4.jpg",
      },
      {
        question: "",
        options: [
          "野菜を収穫する",
          "牛の世話をする",
          "食事の準備をする",
          "若手グループの話を聞く",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t1-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t1-q5.jpg",
      },
    ],
  },
  {
    level: "N1",
    section: "listening",
    testNumber: 2,
    questions: [
      {
        question: "",
        options: ["商品の開発", "新人研修", "主任研修", "商品の製造"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t2-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t2-q1.jpg",
      },
      {
        question: "",
        options: [
          "外出するときにマスクをすること",
          "うがいと手洗いをすること",
          "体を休めるために十分に寝ること",
          "えいようがある食事をとること",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t2-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t2-q2.jpg",
      },
      {
        question: "",
        options: [
          "薬品の量を間違えたこと",
          "実験の順番を間違えたこと",
          "温度設定をしなかったこと",
          "温度設定をしたこと",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t2-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t2-q3.jpg",
      },
      {
        question: "",
        options: [
          "すでに他社から類似の製品が出ているため",
          "商品化に莫大な費用がかかるため",
          "商品化に長時間かかると予想されるから",
          "買う人が限定されると考えられるため",
        ],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t2-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t2-q4.jpg",
      },
      {
        question: "",
        options: [
          "形が個性的なところ",
          "色の使い方がざんしんなところ",
          "ブランド品で高級に見えるところ",
          "値段が手ごろなところ",
        ],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t2-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t2-q5.jpg",
      },
    ],
  },
  {
    level: "N1",
    section: "listening",
    testNumber: 3,
    questions: [
      {
        question: "",
        options: [
          "テレビコマーシャルで商品の説明をする",
          "商品をテレビドラマに登場させる",
          "テレビコマーシャルに人気俳優を起用する",
          "バッケージを目立つデザインにする",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t3-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t3-q1.jpg",
      },
      {
        question: "",
        options: [
          "ユニークなアイデアが出せること",
          "皆の前で自分をアピールできること",
          "議論の流れをふまえた意見が言えること",
          "専門的知識に基づく意見が言えること",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t3-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t3-q2.jpg",
      },
      {
        question: "",
        options: [
          "げんそうできな世界を楽しみたいから",
          "電気代を節約したいから",
          "省エネへの意識を持ち続けたいから",
          "家族のきずなが深まるから",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t3-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t3-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t3-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t3-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t3-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t3-q5.jpg",
      },
    ],
  },
  {
    level: "N1",
    section: "listening",
    testNumber: 4,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n1-t4-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t4-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t4-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t4-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t4-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t4-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t4-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t4-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t4-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t4-q5.jpg",
      },
    ],
  },
  {
    level: "N1",
    section: "listening",
    testNumber: 5,
    questions: [
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n1-t5-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t5-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t5-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t5-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n1-t5-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t5-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t5-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t5-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n1-t5-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n1-t5-q5.jpg",
      },
    ],
  },

  // ==========================================
  // N2 LISTENING
  // ==========================================
  {
    level: "N2",
    section: "listening",
    testNumber: 1,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t1-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t1-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n2-t1-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t1-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t1-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t1-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t1-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t1-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t1-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t1-q5.jpg",
      },
    ],
  },
  {
    level: "N2",
    section: "listening",
    testNumber: 2,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t2-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t2-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n2-t2-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t2-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n2-t2-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t2-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t2-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t2-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n2-t2-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t2-q5.jpg",
      },
    ],
  },
  {
    level: "N2",
    section: "listening",
    testNumber: 3,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n2-t3-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t3-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t3-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t3-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t3-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t3-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t3-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t3-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t3-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t3-q5.jpg",
      },
    ],
  },
  {
    level: "N2",
    section: "listening",
    testNumber: 4,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n2-t4-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t4-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t4-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t4-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t4-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t4-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n2-t4-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t4-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t4-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t4-q5.jpg",
      },
    ],
  },
  {
    level: "N2",
    section: "listening",
    testNumber: 5,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t5-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t5-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n2-t5-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t5-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n2-t5-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t5-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n2-t5-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t5-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n2-t5-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n2-t5-q5.jpg",
      },
    ],
  },

  // ==========================================
  // N3 LISTENING
  // ==========================================
  {
    level: "N3",
    section: "listening",
    testNumber: 1,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n3-t1-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t1-q1.jpg",
      },
      {
        question: "",
        options: ["400円", "500円", "600円", "700円"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n3-t1-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t1-q2.jpg",
      },
      {
        question: "",
        options: [
          "帽子を送ります",
          "ファックスをします",
          "メールします",
          "写真を送ります",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n3-t1-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t1-q3.jpg",
      },
      {
        question: "",
        options: [
          "ラジオを聞きます",
          "歌を歌います",
          "ラジオ局に電話します",
          "インターネットします",
        ],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n3-t1-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t1-q4.jpg",
      },
      {
        question: "",
        options: [
          "休みます",
          "会議に出ます",
          "田中さんに電話します",
          "書類の準備をします",
        ],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n3-t1-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t1-q5.jpg",
      },
    ],
  },
  {
    level: "N3",
    section: "listening",
    testNumber: 2,
    questions: [
      {
        question: "",
        options: ["四時", "四時半", "五時", "五時半"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n3-t2-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t2-q1.jpg",
      },
      {
        question: "",
        options: ["サッカー", "バスケット", "テニス", "卓球"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n3-t2-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t2-q2.jpg",
      },
      {
        question: "",
        options: [
          "おいしい料理を食べること",
          "子供と遊ぶこと",
          "写真をもらうこと",
          "日本の習慣を習うこと",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t2-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t2-q3.jpg",
      },
      {
        question: "",
        options: [
          "このグループの歌が好きだから。",
          "子供と遊ぶこと",
          "写真をもらうこと",
          "日本の習慣を習うこと",
        ],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t2-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t2-q4.jpg",
      },
      {
        question: "",
        options: [
          "虫に食べられた傷があるから。",
          "薬を使ってしまうから。",
          "味は普通のりんごほどよくないから",
          "台風で落ちてしまって、表面に傷があるから",
        ],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n3-t2-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t2-q5.jpg",
      },
    ],
  },
  {
    level: "N3",
    section: "listening",
    testNumber: 3,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n3-t3-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t3-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t3-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t3-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n3-t3-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t3-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t3-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t3-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n3-t3-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t3-q5.jpg",
      },
    ],
  },
  {
    level: "N3",
    section: "listening",
    testNumber: 4,
    questions: [
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n3-t4-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t4-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n3-t4-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t4-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n3-t4-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t4-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n3-t4-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t4-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n3-t4-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t4-q5.jpg",
      },
    ],
  },
  {
    level: "N3",
    section: "listening",
    testNumber: 5,
    questions: [
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t5-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t5-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t5-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t5-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n3-t5-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t5-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t5-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t5-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n3-t5-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n3-t5-q5.jpg",
      },
    ],
  },

  // ==========================================
  // N4 LISTENING
  // ==========================================
  {
    level: "N4",
    section: "listening",
    testNumber: 1,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n4-t1-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t1-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n4-t1-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t1-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t1-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t1-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n4-t1-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t1-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t1-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t1-q5.jpg",
      },
    ],
  },
  {
    level: "N4",
    section: "listening",
    testNumber: 2,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t2-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t2-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n4-t2-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t2-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t2-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t2-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t2-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t2-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t2-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t2-q5.jpg",
      },
    ],
  },
  {
    level: "N4",
    section: "listening",
    testNumber: 3,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t3-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t3-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t3-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t3-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n4-t3-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t3-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n4-t3-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t3-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t3-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t3-q5.jpg",
      },
    ],
  },
  {
    level: "N4",
    section: "listening",
    testNumber: 4,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n4-t4-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t4-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t4-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t4-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t4-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t4-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t4-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t4-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t4-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t4-q5.jpg",
      },
    ],
  },
  {
    level: "N4",
    section: "listening",
    testNumber: 5,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n4-t5-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t5-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n4-t5-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t5-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t5-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t5-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n4-t5-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t5-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n4-t5-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n4-t5-q5.jpg",
      },
    ],
  },

  // ==========================================
  // N5 LISTENING
  // ==========================================
  {
    level: "N5",
    section: "listening",
    testNumber: 1,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n5-t1-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t1-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t1-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t1-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n5-t1-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t1-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n5-t1-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t1-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t1-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t1-q5.jpg",
      },
    ],
  },
  {
    level: "N5",
    section: "listening",
    testNumber: 2,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n5-t2-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t2-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t2-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t2-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n5-t2-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t2-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n5-t2-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t2-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n5-t2-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t2-q5.jpg",
      },
    ],
  },
  {
    level: "N5",
    section: "listening",
    testNumber: 3,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n5-t3-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t3-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t3-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t3-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n5-t3-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t3-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n5-t3-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t3-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n5-t3-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t3-q5.jpg",
      },
    ],
  },
  {
    level: "N5",
    section: "listening",
    testNumber: 4,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n5-t4-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t4-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        audioUrl: "/listeningfilesn5-n1/n5-t4-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t4-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        audioUrl: "/listeningfilesn5-n1/n5-t4-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t4-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t4-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t4-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t4-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t4-q5.jpg",
      },
    ],
  },
  {
    level: "N5",
    section: "listening",
    testNumber: 5,
    questions: [
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n5-t5-q1.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t5-q1.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t5-q2.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t5-q2.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t5-q3.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t5-q3.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        audioUrl: "/listeningfilesn5-n1/n5-t5-q4.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t5-q4.jpg",
      },
      {
        question: "",
        options: ["1", "2", "3", "4"],
        correctIndex: 0,
        audioUrl: "/listeningfilesn5-n1/n5-t5-q5.mp3",
        imageUrl: "/listeningfilesn5-n1/n5-t5-q5.jpg",
      },
    ],
  },
];
