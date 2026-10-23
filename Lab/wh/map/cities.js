const cities = [
    {
        historicalNames: ["ローマ"],
        description: "共和政・帝政ローマ帝国の首都。",
        lat: 41.9028,
        lng: 12.4964
    },
    {
        historicalNames: ["マッサリア", "マルセイユ"],
        description: "フォカイア人が建設した西地中海の植民市。",
        lat: 43.2965,
        lng: 5.3698
    },
    {
        historicalNames: ["ネアポリス", "ナポリ"],
        description: "南イタリアに建設されたギリシア植民市。",
        lat: 40.8518,
        lng: 14.2681
    },
    {
        historicalNames: ["カルタゴ"],
        description: "ポエニ戦争でローマと戦ったフェニキア植民市。",
        lat: 36.8526,
        lng: 10.3229
    },
    {
        historicalNames: ["カイロネイア"],
        description: "フィリッポス2世がギリシアを制圧した戦いの地。",
        lat: 38.4947,
        lng: 22.8425
    },
    {
        historicalNames: ["シラクサ"],
        description: "シチリア島東部のコリントス系植民市。",
        lat: 37.0691,
        lng: 15.2875
    },
    {
        historicalNames: ["スパルタ"],
        description: "軍国主義体制をとったドーリア人のポリス。",
        lat: 37.0747,
        lng: 22.4299
    },
    {
        historicalNames: ["アテネ"],
        description: "直接民主政を完成させたイオニア人のポリス。",
        lat: 37.9838,
        lng: 23.7275
    },
    {
        historicalNames: ["ミレトス"],
        description: "イオニア自然哲学発祥の地。イオニア反乱の中心。",
        lat: 37.5303,
        lng: 27.2783
    },
    {
        historicalNames: ["ビザンティオン", "コンスタンティノープル", "イスタンブール"],
        description: "ビザンツ・オスマン両帝国の首都となった要衝。",
        lat: 41.0082,
        lng: 28.9784
    },
    {
        historicalNames: ["アレクサンドリア"],
        description: "ムセイオンが置かれたヘレニズム文化の中心。",
        lat: 31.2001,
        lng: 29.9187
    },
    {
        historicalNames: ["メンフィス"],
        description: "ピラミッドが造営されたエジプト古王国の首都。",
        lat: 29.8500,
        lng: 31.2550
    },
    {
        historicalNames: ["テーベ"],
        description: "エジプト中王国・新王国の首都。",
        lat: 25.6872,
        lng: 32.6396
    },
    {
        historicalNames: ["テル＝エル＝アマルナ"],
        description: "アメンホテプ4世がアテン信仰のために開いた新都。",
        lat: 27.6472,
        lng: 30.8958
    },
    {
        historicalNames: ["メロエ"],
        description: "製鉄と綿布生産で繁栄したクシュ王国後期の都。",
        lat: 16.9248,
        lng: 33.7226
    },
    {
        historicalNames: ["シドン"],
        description: "中継貿易で繁栄した代表的なフェニキア都市国家。",
        lat: 33.5607,
        lng: 35.3725
    },
    {
        historicalNames: ["ティルス"],
        description: "カルタゴを建設した有力なフェニキア都市国家。",
        lat: 33.2706,
        lng: 35.2036
    },
    {
        historicalNames: ["ダマスクス"],
        description: "アラム人の通商拠点。後にウマイヤ朝の首都。",
        lat: 33.5138,
        lng: 36.2765
    },
    {
        historicalNames: ["バビロン"],
        description: "ハンムラビ法典発布の地。古・新バビロニアの首都。",
        lat: 32.5423,
        lng: 44.4209
    },
    {
        historicalNames: ["イッソス"],
        description: "アレクサンドロスが大王軍がペルシア軍を破った地。",
        lat: 36.8594,
        lng: 36.2239
    },
    {
        historicalNames: ["アルベラ"],
        description: "アレクサンドロス大王がペルシア軍を破った決戦地。",
        lat: 36.1911,
        lng: 44.0094
    },
    {
        historicalNames: ["スサ"],
        description: "アケメネス朝ペルシアの行政首都。「王の道」の起点。",
        lat: 32.1894,
        lng: 48.2436
    },
    {
        historicalNames: ["ペルセポリス"],
        description: "ダレイオス1世が造営したアケメネス朝の祭儀用首都。",
        lat: 29.9345,
        lng: 52.8913
    },
    {
        historicalNames: ["パータリプトラ"],
        description: "マウリヤ朝・グプタ朝の首都。",
        lat: 25.5941,
        lng: 85.1376
    },
    {
        historicalNames: ["サーンチー"],
        description: "アショーカ王建立の仏塔（ストゥーパ）が残る地。",
        lat: 23.4879,
        lng: 77.7394
    },
    {
        historicalNames: ["アジャンター"],
        description: "純インド風グプタ様式の壁画が残る仏教石窟寺院。",
        lat: 20.5519,
        lng: 75.7033
    },
    {
        historicalNames: ["クテシフォン"],
        description: "パルティアおよびササン朝ペルシアの首都。",
        lat: 33.0936,
        lng: 44.5806
    },
    {
        historicalNames: ["プルシャプラ"],
        description: "クシャーナ朝カニシカ王の首都。",
        lat: 34.0151,
        lng: 71.5249
    },
    {
        historicalNames: ["カナウジ"],
        description: "ハルシャ＝ヴァルダナが定めたヴァルダナ朝の首都。",
        lat: 27.0526,
        lng: 79.9168
    },
    {
        historicalNames: ["長安", "大興城", "長安", "西安"],
        description: "前漢・隋・唐の首都。シルクロードの起点。",
        lat: 34.2667,
        lng: 108.9500
    },
    {
        historicalNames: ["洛邑", "洛陽"],
        description: "東周・後漢・魏・北魏（孝文帝期）の首都。",
        lat: 34.6200,
        lng: 112.4500
    },
    {
        historicalNames: ["楽浪", "平壌"],
        description: "漢の朝鮮四郡の中心地。のち高句麗の首都。",
        lat: 39.0392,
        lng: 125.7625
    },
    {
        historicalNames: ["敦煌"],
        description: "莫高窟（千仏洞）で有名なシルクロードの要衝。",
        lat: 40.1386,
        lng: 94.6611
    },
    {
        historicalNames: ["鎬京"],
        description: "西周の首都。犬戎の侵入により洛邑へ遷都。",
        lat: 34.2250,
        lng: 108.7350
    },
    {
        historicalNames: ["景徳鎮"],
        description: "宋代以降、官窯が置かれた陶磁器の一大産地。",
        lat: 29.2925,
        lng: 117.2023
    },
    {
        historicalNames: ["武昌"],
        description: "1911年に辛亥革命の火の手が上がった地（現武漢）。",
        lat: 30.5538,
        lng: 114.3158
    },
    {
        historicalNames: ["ロンディニウム", "ロンドン"],
        description: "ローマ植民市から発展したイギリス帝国の首都。",
        lat: 51.5074,
        lng: -0.1278
    },
    {
        historicalNames: ["ルテティア", "パリ"],
        description: "カペー朝以降のフランス王国の首都。",
        lat: 48.8566,
        lng: 2.3522
    },
    {
        historicalNames: ["ウィンドボナ", "ウィーン"],
        description: "ハプスブルク家の帝都。オスマン帝国の包囲を撃退。",
        lat: 48.2082,
        lng: 16.3738
    },
    {
        historicalNames: ["メッカ"],
        description: "預言者ムハンマドの生地。イスラーム最大の聖地。",
        lat: 21.3891,
        lng: 39.8579
    },
    {
        historicalNames: ["メディナ"],
        description: "ヒジュラ（聖遷）先となったイスラーム第2の聖地。",
        lat: 24.5247,
        lng: 39.5692
    },
    {
        historicalNames: ["オケオ"],
        description: "ローマ金貨が出土した古代東南アジア国家・扶南の外港。",
        lat: 10.2450,
        lng: 105.1510
    },
    {
        historicalNames: ["成都"],
        description: "三国時代、劉備が建国した蜀の首都。",
        lat: 30.5728,
        lng: 104.0668
    },
    {
        historicalNames: ["建業", "建康", "南京"],
        description: "東晋・南朝や明初、中華民国の首都。",
        lat: 32.0603,
        lng: 118.7969
    },
    {
        historicalNames: ["雲崗"],
        description: "北魏の平城期に開削された初期仏教石窟寺院。",
        lat: 40.1119,
        lng: 113.1311
    },
    {
        historicalNames: ["平城"],
        description: "鮮卑系拓跋氏が建てた北魏の初期首都（現大同）。",
        lat: 40.0769,
        lng: 113.2911
    },
    {
        historicalNames: ["パレンバン"],
        description: "海上交易と大乗仏教で栄えたシュリーヴィジャヤの都。",
        lat: -2.9909,
        lng: 104.7566
    },
    {
        historicalNames: ["コルドバ"],
        description: "大モスク（メスキータ）が建造された後ウマイヤ朝の首都。",
        lat: 37.8882,
        lng: -4.7794
    },
    {
        historicalNames: ["ラヴェンナ"],
        description: "西ローマ末期や東ゴート王国の首都。モザイク画が有名。",
        lat: 44.4183,
        lng: 12.2035
    },
    {
        historicalNames: ["トンブクトゥ"],
        description: "マリ・ソンガイ両王国で栄えたサハラ縦断交易の拠点。",
        lat: 16.7713,
        lng: -3.0074
    },
    {
        historicalNames: ["バグダード"],
        description: "アッバース朝のマンスールが建設した円形都市。",
        lat: 33.3152,
        lng: 44.3661
    },
    {
        historicalNames: ["金城", "慶州"],
        description: "朝鮮半島を統一した新羅の千年の古都。",
        lat: 35.8562,
        lng: 129.2247
    },
    {
        historicalNames: ["ガズナ"],
        description: "北インドへ頻繁に侵入したガズナ朝の首都。",
        lat: 33.5484,
        lng: 68.4194
    },
    {
        historicalNames: ["アンコール"],
        description: "アンコール＝ワットを造営したクメール人の首都。",
        lat: 13.4125,
        lng: 103.8667
    },
    {
        historicalNames: ["デリー"],
        description: "デリー＝スルタン朝およびムガル帝国の首都。",
        lat: 28.7041,
        lng: 77.1025
    },
    {
        historicalNames: ["カイロ"],
        description: "10世紀にファーティマ朝が建設したエジプトの首都。",
        lat: 30.0444,
        lng: 31.2357
    },
    {
        historicalNames: ["イェルサレム"],
        description: "ユダヤ・キリスト・イスラーム3宗教の聖地。",
        lat: 31.7683,
        lng: 35.2137
    },
    {
        historicalNames: ["ヴェネツィア"],
        description: "東方（レヴァント）貿易で栄えた「アドリア海の女王」。",
        lat: 45.4408,
        lng: 12.3155
    },
    {
        historicalNames: ["ジェノヴァ"],
        description: "ヴェネツィアと覇権を争った北イタリアの港湾都市。",
        lat: 44.4056,
        lng: 8.9463
    },
    {
        historicalNames: ["ミラノ"],
        description: "ロンバルディア同盟の中心となった北イタリア都市。",
        lat: 45.4642,
        lng: 9.1900
    },
    {
        historicalNames: ["グラナダ"],
        description: "1492年に陥落したイベリア最後のイスラーム王朝の都。",
        lat: 37.1773,
        lng: -3.5986
    },
    {
        historicalNames: ["リューベック"],
        description: "北海・バルト海を支配したハンザ同盟の盟主都市。",
        lat: 53.8655,
        lng: 10.6866
    },
    {
        historicalNames: ["ハンブルク"],
        description: "エルベ川河口に位置する代表的なハンザ同盟都市。",
        lat: 53.5511,
        lng: 9.9937
    },
    {
        historicalNames: ["ウル"],
        description: "シュメール初期王朝時代の代表的な都市国家。",
        lat: 30.9622,
        lng: 46.1044
    },
    {
        historicalNames: ["ニネヴェ"],
        description: "アッシュルバニパルの王立図書館跡が残るアッシリアの首都。",
        lat: 36.3596,
        lng: 43.1536
    },
    {
        historicalNames: ["アンティオキア"],
        description: "ヘレニズム時代のセレウコス朝シリアの首都。",
        lat: 36.2028,
        lng: 36.1606
    },
    {
        historicalNames: ["ニハーヴァンド"],
        description: "ササン朝ペルシアがイスラーム軍に大敗した戦いの地。",
        lat: 34.1889,
        lng: 48.3772
    },
    {
        historicalNames: ["タブリーズ"],
        description: "モンゴル系イスラーム国家・イル＝ハン国の首都。",
        lat: 38.0800,
        lng: 46.2919
    },
    {
        historicalNames: ["イスファハーン"],
        description: "「世界の半分」と称えられたサファヴィー朝の首都。",
        lat: 32.6539,
        lng: 51.6660
    },
    {
        historicalNames: ["テヘラン"],
        description: "ガージャール朝以降、現代まで続くイランの首都。",
        lat: 35.6892,
        lng: 51.3890
    },
    {
        historicalNames: ["アンカラ"],
        description: "トルコ革命時にケマル＝アタテュルクが定めた新首都。",
        lat: 39.9334,
        lng: 32.8597
    },
    {
        historicalNames: ["クノッソス"],
        description: "青銅器時代のクレタ文明を代表する巨大迷宮宮殿遺跡。",
        lat: 35.2979,
        lng: 25.1632
    },
    {
        historicalNames: ["トロヤ"],
        description: "シュリーマンが発掘した小アジア北西部の遺跡。",
        lat: 39.9575,
        lng: 26.2389
    },
    {
        historicalNames: ["ミケーネ"],
        description: "「獅子の門」で有名なペロポネソス半島のエーゲ文明遺跡。",
        lat: 37.7308,
        lng: 22.7561
    },
    {
        historicalNames: ["サラミス"],
        description: "アテネ海軍がペルシア水軍を撃破した海戦の地。",
        lat: 37.9626,
        lng: 23.4984
    },
    {
        historicalNames: ["テーベ"],
        description: "レウクトラの戦いでスパルタを破り覇権を握ったポリス。",
        lat: 38.3167,
        lng: 23.3167
    },
    {
        historicalNames: ["ザマ"],
        description: "スキピオがハンニバルを破った第2回ポエニ戦争の決戦地。",
        lat: 36.1200,
        lng: 9.2800
    },
    {
        historicalNames: ["アクティウム"],
        description: "オクタウィアヌスがアントニウス派を破った海戦の地。",
        lat: 38.9511,
        lng: 20.7678
    },
    {
        historicalNames: ["アウグスブルク"],
        description: "フッガー家の本拠地。1555年にルター派を公認。",
        lat: 48.3705,
        lng: 10.8985
    },
    {
        historicalNames: ["ニケーア"],
        description: "アタナシウス派を正統と定めた公会議（325年）の地。",
        lat: 40.4286,
        lng: 29.7214
    },
    {
        historicalNames: ["エフェソス"],
        description: "ネストリウス派を異端と宣告した公会議（431年）の地。",
        lat: 37.9411,
        lng: 27.3419
    },
    {
        historicalNames: ["フィレンツェ"],
        description: "メディチ家のもとでイタリア＝ルネサンスが開花した都。",
        lat: 43.7696,
        lng: 11.2558
    },
    {
        historicalNames: ["ダンツィヒ"],
        description: "バルト海貿易の要衝。第1次世界大戦後は自由都市に。",
        lat: 54.3520,
        lng: 18.6466
    },
    {
        historicalNames: ["ブリュージュ"],
        description: "北海貿易と毛織物産業で栄えたフランドル地方の商業都市。",
        lat: 51.2093,
        lng: 3.2247
    },
    {
        historicalNames: ["モンテ＝カシノ"],
        description: "ベネディクトゥスが修道院を創設したカトリック修道運動の地。",
        lat: 41.4906,
        lng: 13.8136
    },
    {
        historicalNames: ["クレルモン"],
        description: "教皇ウルバヌス2世が第1回十字軍の派遣を提唱した地。",
        lat: 45.7772,
        lng: 3.0870
    },
    {
        historicalNames: ["ヴォルムス"],
        description: "叙任権闘争に終止符を打った協約（1122年）の地。",
        lat: 49.6322,
        lng: 8.3597
    },
    {
        historicalNames: ["アヴィニョン"],
        description: "教皇庁がローマから強制移転された「バビロン捕囚」の地。",
        lat: 43.9493,
        lng: 4.8055
    },
    {
        historicalNames: ["コンスタンツ"],
        description: "大シスマを解消しフスを火刑に処した公会議の地。",
        lat: 47.6592,
        lng: 9.1750
    },
    {
        historicalNames: ["ジュネーヴ"],
        description: "カルヴァンが厳格な神政政治（宗教改革）を実施した都市。",
        lat: 46.2044,
        lng: 6.1432
    },
    {
        historicalNames: ["トリエント"],
        description: "カトリック側の自己改革を推進した対抗宗教改革公会議の地。",
        lat: 46.0697,
        lng: 11.1211
    },
    {
        historicalNames: ["咸陽"],
        description: "始皇帝が中国統一を成し遂げた秦の首都。",
        lat: 34.3333,
        lng: 108.7167
    },
    {
        historicalNames: ["大都", "北京"],
        description: "元の首都（大都）。明・清・中華人民共和国の首都。",
        lat: 39.9042,
        lng: 116.4074
    },
    {
        historicalNames: ["開封"],
        description: "大運河結節点に位置した北宋の首都（東京）。",
        lat: 34.7915,
        lng: 114.3484
    },
    {
        historicalNames: ["臨安"],
        description: "金に追われた南宋が臨時首都とした江南の都市（現杭州）。",
        lat: 30.2741,
        lng: 120.1551
    },
    {
        historicalNames: ["広州"],
        description: "唐代に市舶司が初設置され、清代に公行が置かれた貿易港。",
        lat: 23.1291,
        lng: 113.2644
    },
    {
        historicalNames: ["泉州"],
        description: "宋・元代に世界最大の貿易港として栄えた都市（ザイトン）。",
        lat: 24.8739,
        lng: 118.6758
    },
    {
        historicalNames: ["寧波"],
        description: "明代に対日貿易を扱い勘合貿易の拠点となった港。",
        lat: 29.8683,
        lng: 121.5439
    },
    {
        historicalNames: ["福州"],
        description: "アヘン戦争後の南京条約で開港された5港の一つ。",
        lat: 26.0745,
        lng: 119.2965
    },
    {
        historicalNames: ["厦門"],
        description: "南京条約で開港された福建省の貿易港。",
        lat: 24.4798,
        lng: 118.0894
    },
    {
        historicalNames: ["マカオ"],
        description: "16世紀半ばにポルトガル人が居住権を得た対中貿易拠点。",
        lat: 22.1987,
        lng: 113.5439
    },
    {
        historicalNames: ["上海"],
        description: "南京条約で開港され、租界が置かれ中国最大の経済都市へ発展。",
        lat: 31.2304,
        lng: 121.4737
    },
    {
        historicalNames: ["香港"],
        description: "アヘン戦争の南京条約でイギリスに割譲された地。",
        lat: 22.3193,
        lng: 114.1694
    },
    {
        historicalNames: ["天津"],
        description: "北京の外港。アロー戦争後の天津条約・北京条約で開港。",
        lat: 39.0842,
        lng: 117.2009
    },
    {
        historicalNames: ["旅順"],
        description: "日清・日露両戦争で激戦地となった遼東半島の軍港。",
        lat: 38.8143,
        lng: 121.2396
    },
    {
        historicalNames: ["威海衛"],
        description: "日清戦争後にイギリスが租借した山東半島の軍港。",
        lat: 37.5131,
        lng: 122.1204
    },
    {
        historicalNames: ["カラコルム"],
        description: "第2代オゴデイが建設したモンゴル帝国の首都。",
        lat: 47.1984,
        lng: 102.8436
    },
    {
        historicalNames: ["クチャ"],
        description: "仏典翻訳で名高い鳩摩羅什の出身地。",
        lat: 41.7250,
        lng: 82.9364
    },
    {
        historicalNames: ["サマルカンド"],
        description: "「青の都」と称されたティムール帝国の首都。",
        lat: 39.6270,
        lng: 66.9750
    },
    {
        historicalNames: ["ブハラ"],
        description: "サーマーン朝やブハラ＝ハン国の首都となったオアシス都市。",
        lat: 39.7747,
        lng: 64.4286
    },
    {
        historicalNames: ["アグラ"],
        description: "タージ＝マハルが建造されたムガル帝国の首都。",
        lat: 27.1767,
        lng: 78.0081
    },
    {
        historicalNames: ["カリカット"],
        description: "1498年にヴァスコ＝ダ＝ガマが到達したインド西岸の港。",
        lat: 11.2588,
        lng: 75.7804
    },
    {
        historicalNames: ["ゴア"],
        description: "アルブケルケが占領したポルトガルのアジア貿易拠点。",
        lat: 15.4909,
        lng: 73.8278
    },
    {
        historicalNames: ["ボンベイ"],
        description: "イギリスがポルトガル王女の持参金として得た拠点（現ムンバイ）。",
        lat: 18.9690,
        lng: 72.8205
    },
    {
        historicalNames: ["マドラス"],
        description: "イギリス東インド会社がセント＝ジョージ要塞を建設した拠点。",
        lat: 13.0827,
        lng: 80.2707
    },
    {
        historicalNames: ["カルカッタ"],
        description: "プラッシーの戦い後にイギリスのインド支配拠点となった都市。",
        lat: 22.5726,
        lng: 88.3639
    },
    {
        historicalNames: ["シャンデルナゴル"],
        description: "ベンガル地方に置かれたフランス東インド会社の商館。",
        lat: 22.8671,
        lng: 88.3674
    },
    {
        historicalNames: ["ポンディシェリ"],
        description: "デュプレクスらが拠点としたフランスのインド経営中心地。",
        lat: 11.9416,
        lng: 79.8083
    },
    {
        historicalNames: ["ボロブドゥール"],
        description: "シャイレーンドラ朝がジャワ島に造営した大乗仏教遺跡。",
        lat: -7.6079,
        lng: 110.2038
    },
    {
        historicalNames: ["マラッカ"],
        description: "東西交易の要衝。ポルトガル・オランダ・イギリスが争奪。",
        lat: 2.1896,
        lng: 102.2501
    },
    {
        historicalNames: ["アンボイナ"],
        description: "1623年にオランダが英勢力を駆逐したモルッカ諸島の島。",
        lat: -3.6958,
        lng: 128.1833
    },
    {
        historicalNames: ["バタヴィア"],
        description: "オランダ東インド会社が総督府を置いたアジア拠点（現ジャカルタ）。",
        lat: -6.2088,
        lng: 106.8456
    },
    {
        historicalNames: ["ハノイ"],
        description: "李朝以来のベトナム歴代王朝の古都。",
        lat: 21.0285,
        lng: 105.8542
    },
    {
        historicalNames: ["フエ"],
        description: "ベトナム最後の統一王朝・阮朝の首都。",
        lat: 16.4637,
        lng: 107.5909
    },
    {
        historicalNames: ["サイゴン"],
        description: "フランスに占領され仏領インドシナの拠点となった港市（現ホーチミン）。",
        lat: 10.8231,
        lng: 106.6297
    },
    {
        historicalNames: ["マニラ"],
        description: "レガスピが建設したスペインのアカプルコ貿易（銀貿易）拠点。",
        lat: 14.5995,
        lng: 120.9842
    },
    {
        historicalNames: ["ハルツーム"],
        description: "マフディーの乱でゴードン将軍が戦死したスーダンの首都。",
        lat: 15.5007,
        lng: 32.5599
    },
    {
        historicalNames: ["マラケシュ"],
        description: "ムラービト朝・ムワッヒド朝の首都となったモロッコの古都。",
        lat: 31.6295,
        lng: -7.9811
    },
    {
        historicalNames: ["モガディシュ"],
        description: "インド洋交易で繁栄したソマリアのスワヒリ都市。",
        lat: 2.0469,
        lng: 45.3182
    },
    {
        historicalNames: ["マリンディ"],
        description: "鄭和が寄港し、ガマにインド航路の案内人を提供した港。",
        lat: -3.2192,
        lng: 40.1169
    },
    {
        historicalNames: ["モンバサ"],
        description: "ポルトガルが要塞を築いて支配した東アフリカの港湾都市。",
        lat: -4.0435,
        lng: 39.6682
    },
    {
        historicalNames: ["ザンジバル"],
        description: "オマーン領となり奴隷・クローブ貿易で栄えた東アフリカの島。",
        lat: -6.1659,
        lng: 39.1990
    },
    {
        historicalNames: ["キルワ"],
        description: "ジンバブエの金を輸出し最盛期を迎えたスワヒリ交易都市。",
        lat: -8.9583,
        lng: 39.5136
    },
    {
        historicalNames: ["テノチティトラン"],
        description: "コルテスに滅ぼされたアステカ王国の湖上首都。",
        lat: 19.4326,
        lng: -99.1332
    },
    {
        historicalNames: ["クスコ"],
        description: "ピサロに征服されたアンデス高地のインカ帝国の首都。",
        lat: -13.5320,
        lng: -71.9675
    },
    {
        historicalNames: ["アカプルコ"],
        description: "マニラとガレオン船を行き来させたメキシコ太平洋岸の港。",
        lat: 16.8531,
        lng: -99.8237
    },
    {
        historicalNames: ["フィラデルフィア"],
        description: "第1回大陸会議が開かれアメリカ独立宣言が採択された都市。",
        lat: 39.9526,
        lng: -75.1652
    },
    {
        historicalNames: ["リッチモンド"],
        description: "南北戦争でアメリカ連合国（南部側）が首都を置いた地。",
        lat: 37.5407,
        lng: -77.4360
    },
    {
        historicalNames: ["ニューアムステルダム", "ニューヨーク"],
        description: "オランダが建設し、第2次英蘭戦争でイギリスが奪った世界都市。",
        lat: 40.7128,
        lng: -74.0060
    },
    {
        historicalNames: ["モエンジョ＝ダーロ"],
        description: "インダス川下流に栄えたインダス文明の代表的都市遺跡。",
        lat: 27.3240,
        lng: 68.1360
    },
    {
        historicalNames: ["ハラッパー"],
        description: "パンジャーブ地方（インダス川上流）にあるインダス文明の城塞遺跡。",
        lat: 30.6300,
        lng: 72.8647
    },
    {
        historicalNames: ["ナーランダー"],
        description: "玄奘や義浄が学んだグプタ朝建立の仏教最高学府（僧院）。",
        lat: 25.1357,
        lng: 85.4450
    },
    {
        historicalNames: ["殷墟"],
        description: "甲骨文字が出土した商（殷）王朝後期の首都遺跡（安陽）。",
        lat: 36.1264,
        lng: 114.3169
    },
    {
        historicalNames: ["カシュガル"],
        description: "天山南路と西域南道が合流するシルクロード最西端の要衝都市。",
        lat: 39.4677,
        lng: 75.9898
    },
    {
        historicalNames: ["タラス"],
        description: "751年に唐がアッバース朝に敗れ、製紙法が西方へ伝播した戦いの地。",
        lat: 42.9000,
        lng: 71.3667
    },
    {
        historicalNames: ["トレド"],
        description: "西ゴート王国の首都。12世紀にイスラーム学術の翻訳中心地となった都市。",
        lat: 39.8628,
        lng: -4.0273
    },
    {
        historicalNames: ["カノッサ"],
        description: "神聖ローマ皇帝ハインリヒ4世が教皇に破門解除を乞うた屈辱の地。",
        lat: 44.5772,
        lng: 10.4578
    },
    {
        historicalNames: ["アントウェルペン", "アントワープ"],
        description: "16世紀前半にリスボンと並び全ヨーロッパの金融・香辛料貿易の中心となった港。",
        lat: 51.2194,
        lng: 4.4025
    },
    {
        historicalNames: ["ユトレヒト"],
        description: "オランダ独立の母体となった同盟（1579年）が結ばれた都市。",
        lat: 52.0907,
        lng: 5.1214
    },
    {
        historicalNames: ["ペテルブルク", "ペトログラード", "レニングラード", "サンクト＝ペテルブルク"],
        description: "ピョートル1世が建設したロシア帝国の新首都。ロシア革命の舞台。",
        lat: 59.9343,
        lng: 30.3351
    },
    {
        historicalNames: ["セヴァストーポリ"],
        description: "クリミア戦争で英仏軍と激しい包囲戦が展開されたロシアの軍港。",
        lat: 44.6166,
        lng: 33.5254
    },
    {
        historicalNames: ["サライェヴォ"],
        description: "オーストリア皇太子夫妻が暗殺され第1次世界大戦の発火点となった都市。",
        lat: 43.8563,
        lng: 18.4131
    },
    {
        historicalNames: ["アクスム"],
        description: "4世紀にキリスト教を受容し最盛期を迎えたエチオピア古代王国の首都。",
        lat: 14.1286,
        lng: 38.7183
    },
    {
        historicalNames: ["タンジール"],
        description: "ジブラルタル海峡に面する港市。旅行家イブン＝バットゥータの出発地。",
        lat: 35.7595,
        lng: -5.8340
    },
    {
        historicalNames: ["ポトシ"],
        description: "大量の銀を産出してヨーロッパの価格革命を引き起こしたアンデスの鉱山都市。",
        lat: -19.5836,
        lng: -65.7531
    }
];