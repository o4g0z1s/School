const cities = [
    {
        historicalNames: ["ローマ"],
        lat: 41.9028,
        lng: 12.4964
    },
    {
        historicalNames: ["マッサリア", "マルセイユ"],
        lat: 43.2965,
        lng: 5.3698
    },
    {
        historicalNames: ["ネアポリス", "ナポリ"],
        lat: 40.8518,
        lng: 14.2681
    },
    {
        historicalNames: ["カルタゴ"],
        lat: 36.8526,
        lng: 10.3229
    },
    {
        historicalNames: ["カイロネイア"],
        lat: 38.4947,
        lng: 22.8425
    },
    {
        historicalNames: ["シラクサ"],
        lat: 37.0691,
        lng: 15.2875
    },
    {
        historicalNames: ["スパルタ"],
        lat: 37.0747,
        lng: 22.4299
    },
    {
        historicalNames: ["アテネ"],
        lat: 37.9838,
        lng: 23.7275
    },
    {
        historicalNames:["ミレトス"],
        lat: 37.5303,
        lng: 27.2783
    },
    {
        historicalNames:["ビザンティオン", "コンスタンティノープル", "イスタンブール"],
        lat: 41.0082,
        lng: 28.9784
    },
    {
        historicalNames: ["アレクサンドリア"],
        lat: 31.2001,
        lng: 29.9187
    },
    {
        historicalNames: ["メンフィス"],
        lat: 29.8500,
        lng: 31.2550
    },
    {
        historicalNames: ["テーベ"],
        lat: 25.6872,
        lng: 32.6396
    },
    {
        historicalNames: ["テル＝エル＝アマルナ"],
        lat: 27.6472,
        lng: 30.8958
    },
    {
        historicalNames:["メロエ"],
        lat: 16.9248,
        lng: 33.7226
    },
    {
        historicalNames: ["シドン"],
        lat: 33.5607,
        lng: 35.3725
    },
    {
        historicalNames: ["ティルス"],
        lat: 33.2706,
        lng: 35.2036
    },
    {
        historicalNames: ["ダマスクス"],
        lat: 33.5138,
        lng: 36.2765
    },
    {
        historicalNames: ["バビロン"],
        lat: 32.5423,
        lng: 44.4209
    },
    {
        historicalNames: ["イッソス"],
        lat: 36.8594,
        lng: 36.2239
    },
    {
        historicalNames: ["アルベラ"],
        lat: 36.1911,
        lng: 44.0094
    },
    {
        historicalNames:["スサ"],
        lat: 32.1894,
        lng: 48.2436
    },
    {
        historicalNames: ["ペルセポリス"],
        lat: 29.9345,
        lng: 52.8913
    },
    {
        historicalNames: ["パータリプトラ"],
        lat: 25.5941,
        lng: 85.1376
    },
    {
        historicalNames: ["サーンチー"],
        lat: 23.4879,
        lng: 77.7394
    },
    {
        historicalNames:["アジャンター"],
        lat: 20.5519,
        lng: 75.7033
    },
    {
        historicalNames: ["クテシフォン"],
        lat: 33.0936,
        lng: 44.5806
    },
    {
        historicalNames: ["プルシャプラ"],
        lat: 34.0151,
        lng: 71.5249
    },
    {
        historicalNames: ["カナウジ"],
        lat: 27.0526,
        lng: 79.9168
    },
    {
        historicalNames:["長安", "大興城", "長安", "西安"],
        lat: 34.2667,
        lng: 108.9500
    },
    {
        historicalNames:["洛邑", "洛陽"],
        lat: 34.6200,
        lng: 112.4500
    },
    {
        historicalNames: ["楽浪", "平壌"],
        lat: 39.0392,
        lng: 125.7625
    },
    {
        historicalNames: ["敦煌"],
        lat: 40.1386,
        lng: 94.6611
    },
    {
        historicalNames: ["鎬京"],
        lat: 34.2250,
        lng: 108.7350
    },
    {
        historicalNames: ["景徳鎮"],
        lat: 29.2925,
        lng: 117.2023
    },
    {
        historicalNames: ["武昌"],
        lat: 30.5538,
        lng: 114.3158
    },
    {
        historicalNames: ["ロンディニウム", "ロンドン"],
        lat: 51.5074,
        lng: -0.1278
    },
    {
        historicalNames: ["ルテティア", "パリ"],
        lat: 48.8566,
        lng: 2.3522
    },
    {
        historicalNames:["ウィンドボナ", "ウィーン"],
        lat: 48.2082,
        lng: 16.3738
    },
    {
        historicalNames: ["メッカ"],
        lat: 21.3891,
        lng: 39.8579
    },
    {
        historicalNames: ["メディナ"],
        lat: 24.5247,
        lng: 39.5692
    },
    {
        historicalNames: ["オケオ"],
        lat: 10.2450,
        lng: 105.1510
    },
    {
        historicalNames: ["成都"],
        lat: 30.5728,
        lng: 104.0668
    },
    {
        historicalNames:["建業", "建康", "南京"],
        lat: 32.0603,
        lng: 118.7969
    },
    {
        historicalNames: ["雲崗"],
        lat: 40.1119,
        lng: 113.1311
    },
    {
        historicalNames: ["平城"],
        lat: 40.0769,
        lng: 113.2911
    },
    {
        historicalNames: ["パレンバン"],
        lat: -2.9909,
        lng: 104.7566
    },
    {
        historicalNames:["コルドバ"],
        lat: 37.8882,
        lng: -4.7794
    },
    {
        historicalNames: ["ラヴェンナ"],
        lat: 44.4183,
        lng: 12.2035
    },
    {
        historicalNames: ["トンブクトゥ"],
        lat: 16.7713,
        lng: -3.0074
    },
    {
        historicalNames: ["バグダード"],
        lat: 33.3152,
        lng: 44.3661
    },
    {
        historicalNames:["金城", "慶州"],
        lat: 35.8562,
        lng: 129.2247
    },
    {
        historicalNames: ["ガズナ"],
        lat: 33.5484,
        lng: 68.4194
    },
    {
        historicalNames: ["アンコール"],
        lat: 13.4125,
        lng: 103.8667
    },
    {
        historicalNames: ["デリー"],
        lat: 28.7041,
        lng: 77.1025
    },
    {
        historicalNames: ["カイロ"],
        lat: 30.0444,
        lng: 31.2357
    },
    {
        historicalNames: ["イェルサレム"],
        lat: 31.7683,
        lng: 35.2137
    },
    {
        historicalNames: ["ヴェネツィア"],
        lat: 45.4408,
        lng: 12.3155
    },
    {
        historicalNames: ["ジェノヴァ"],
        lat: 44.4056,
        lng: 8.9463
    },
    {
        historicalNames: ["ミラノ"],
        lat: 45.4642,
        lng: 9.1900
    },
    {
        historicalNames: ["グラナダ"],
        lat: 37.1773,
        lng: -3.5986
    },
    {
        historicalNames: ["リューベック"],
        lat: 53.8655,
        lng: 10.6866
    },
    {
        historicalNames: ["ハンブルク"],
        lat: 53.5511,
        lng: 9.9937
    },
    {
        historicalNames: ["ウル"],
        lat: 30.9622,
        lng: 46.1044
    },
    {
        historicalNames: ["ニネヴェ"],
        lat: 36.3596,
        lng: 43.1536
    },
    {
        historicalNames:["アンティオキア"],
        lat: 36.2028,
        lng: 36.1606
    },
    {
        historicalNames: ["ニハーヴァンド"],
        lat: 34.1889,
        lng: 48.3772
    },
    {
        historicalNames: ["タブリーズ"],
        lat: 38.0800,
        lng: 46.2919
    },
    {
        historicalNames:["イスファハーン"],
        lat: 32.6539,
        lng: 51.6660
    },
    {
        historicalNames: ["テヘラン"],
        lat: 35.6892,
        lng: 51.3890
    },
    {
        historicalNames: ["アンカラ"],
        lat: 39.9334,
        lng: 32.8597
    },
    {
        historicalNames:["クノッソス"],
        lat: 35.2979,
        lng: 25.1632
    },
    {
        historicalNames: ["トロヤ"],
        lat: 39.9575,
        lng: 26.2389
    },
    {
        historicalNames: ["ミケーネ"],
        lat: 37.7308,
        lng: 22.7561
    },
    {
        historicalNames: ["サラミス"],
        lat: 37.9626,
        lng: 23.4984
    },
    {
        historicalNames: ["テーベ"],
        lat: 38.3167,
        lng: 23.3167
    },
    {
        historicalNames: ["ザマ"],
        lat: 36.1200,
        lng: 9.2800
    },
    {
        historicalNames: ["アクティウム"],
        lat: 38.9511,
        lng: 20.7678
    },
    {
        historicalNames: ["アウグスブルク"],
        lat: 48.3705,
        lng: 10.8985
    },
    {
        historicalNames:["ニケーア"],
        lat: 40.4286,
        lng: 29.7214
    },
    {
        historicalNames: ["エフェソス"],
        lat: 37.9411,
        lng: 27.3419
    },
    {
        historicalNames: ["フィレンツェ"],
        lat: 43.7696,
        lng: 11.2558
    },
    {
        historicalNames: ["ダンツィヒ"],
        lat: 54.3520,
        lng: 18.6466
    },
    {
        historicalNames:["ブリュージュ"],
        lat: 51.2093,
        lng: 3.2247
    },
    {
        historicalNames:["モンテ＝カシノ"],
        lat: 41.4906,
        lng: 13.8136
    },
    {
        historicalNames: ["クレルモン"],
        lat: 45.7772,
        lng: 3.0870
    },
    {
        historicalNames: ["ヴォルムス"],
        lat: 49.6322,
        lng: 8.3597
    },
    {
        historicalNames: ["アヴィニョン"],
        lat: 43.9493,
        lng: 4.8055
    },
    {
        historicalNames: ["コンスタンツ"],
        lat: 47.6592,
        lng: 9.1750
    },
    {
        historicalNames: ["ジュネーヴ"],
        lat: 46.2044,
        lng: 6.1432
    },
    {
        historicalNames:["トリエント"],
        lat: 46.0697,
        lng: 11.1211
    },
    {
        historicalNames: ["咸陽"],
        lat: 34.3333,
        lng: 108.7167
    },
    {
        historicalNames: ["大都", "北京"],
        lat: 39.9042,
        lng: 116.4074
    },
    {
        historicalNames: ["開封"],
        lat: 34.7915,
        lng: 114.3484
    },
    {
        historicalNames: ["臨安"],
        lat: 30.2741,
        lng: 120.1551
    },
    {
        historicalNames: ["広州"],
        lat: 23.1291,
        lng: 113.2644
    },
    {
        historicalNames: ["泉州"],
        lat: 24.8739,
        lng: 118.6758
    },
    {
        historicalNames:["寧波"],
        lat: 29.8683,
        lng: 121.5439
    },
    {
        historicalNames: ["福州"],
        lat: 26.0745,
        lng: 119.2965
    },
    {
        historicalNames: ["厦門"],
        lat: 24.4798,
        lng: 118.0894
    },
    {
        historicalNames: ["マカオ"],
        lat: 22.1987,
        lng: 113.5439
    },
    {
        historicalNames: ["上海"],
        lat: 31.2304,
        lng: 121.4737
    },
    {
        historicalNames: ["香港"],
        lat: 22.3193,
        lng: 114.1694
    },
    {
        historicalNames: ["天津"],
        lat: 39.0842,
        lng: 117.2009
    },
    {
        historicalNames: ["旅順"],
        lat: 38.8143,
        lng: 121.2396
    },
    {
        historicalNames: ["威海衛"],
        lat: 37.5131,
        lng: 122.1204
    },
    {
        historicalNames: ["カラコルム"],
        lat: 47.1984,
        lng: 102.8436
    },
    {
        historicalNames: ["クチャ"],
        lat: 41.7250,
        lng: 82.9364
    },
    {
        historicalNames: ["サマルカンド"],
        lat: 39.6270,
        lng: 66.9750
    },
    {
        historicalNames: ["ブハラ"],
        lat: 39.7747,
        lng: 64.4286
    },
    {
        historicalNames: ["アグラ"],
        lat: 27.1767,
        lng: 78.0081
    },
    {
        historicalNames: ["カリカット"],
        lat: 11.2588,
        lng: 75.7804
    },
    {
        historicalNames: ["ゴア"],
        lat: 15.4909,
        lng: 73.8278
    },
    {
        historicalNames: ["ボンベイ"],
        lat: 18.9690,
        lng: 72.8205
    },
    {
        historicalNames: ["マドラス"],
        lat: 13.0827,
        lng: 80.2707
    },
    {
        historicalNames: ["カルカッタ"],
        lat: 22.5726,
        lng: 88.3639
    },
    {
        historicalNames: ["シャンデルナゴル"],
        lat: 22.8671,
        lng: 88.3674
    },
    {
        historicalNames:["ポンディシェリ"],
        lat: 11.9416,
        lng: 79.8083
    },
    {
        historicalNames:["ボロブドゥール"],
        lat: -7.6079,
        lng: 110.2038
    },
    {
        historicalNames: ["マラッカ"],
        lat: 2.1896,
        lng: 102.2501
    },
    {
        historicalNames: ["アンボイナ"],
        lat: -3.6958,
        lng: 128.1833
    },
    {
        historicalNames:["バタヴィア"],
        lat: -6.2088,
        lng: 106.8456
    },
    {
        historicalNames: ["ハノイ"],
        lat: 21.0285,
        lng: 105.8542
    },
    {
        historicalNames: ["フエ"],
        lat: 16.4637,
        lng: 107.5909
    },
    {
        historicalNames: ["サイゴン"],
        lat: 10.8231,
        lng: 106.6297
    },
    {
        historicalNames:["マニラ"],
        lat: 14.5995,
        lng: 120.9842
    },
    {
        historicalNames: ["ハルツーム"],
        lat: 15.5007,
        lng: 32.5599
    },
    {
        historicalNames: ["モガディシュ"],
        lat: 2.0469,
        lng: 45.3182
    },
    {
        historicalNames: ["マリンディ"],
        lat: -3.2192,
        lng: 40.1169
    },
    {
        historicalNames: ["モンバサ"],
        lat: -4.0435,
        lng: 39.6682
    },
    {
        historicalNames: ["ザンジバル"],
        lat: -6.1659,
        lng: 39.1990
    },
    {
        historicalNames: ["キルワ"],
        lat: -8.9583,
        lng: 39.5136
    },
    {
        historicalNames: ["テノチティトラン"],
        lat: 19.4326,
        lng: -99.1332
    },
    {
        historicalNames: ["クスコ"],
        lat: -13.5320,
        lng: -71.9675
    },
    {
        historicalNames: ["アカプルコ"],
        lat: 16.8531,
        lng: -99.8237
    },
    {
        historicalNames:["フィラデルフィア"],
        lat: 39.9526,
        lng: -75.1652
    },
    {
        historicalNames: ["リッチモンド"],
        lat: 37.5407,
        lng: -77.4360
    },
    {
        historicalNames: ["ニューアムステルダム", "ニューヨーク"],
        lat: 40.7128,
        lng: -74.0060
    }
];