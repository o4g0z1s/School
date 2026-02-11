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
        historicalNames: ["ミレトス"],
        lat: 37.5303,
        lng: 27.2783
    },
    {
        historicalNames: ["ビザンティオン", "コンスタンティノープル", "イスタンブール"],
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
        historicalNames: ["メロエ"],
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
        historicalNames: ["スサ"],
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
        historicalNames: ["アジャンター"],
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
        historicalNames: ["長安", "大興城", "西安"],
        lat: 34.2667,
        lng: 108.9500
    },
    {
        historicalNames: ["洛陽"],
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
        historicalNames: ["ウィンドボナ", "ウィーン"],
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
        historicalNames: ["建業", "建康", "南京"],
        lat: 32.0603,
        lng: 118.7969
    },
    {
        historicalNames: ["雲崗"],
        lat: 40.1119,
        lng: 113.1311
    },
    {
        historicalNames: ["平城", "大同"],
        lat: 40.0769,
        lng: 113.2911
    },
    {
        historicalNames: ["パレンバン"],
        lat: -2.9909,
        lng: 104.7566
    },
    {
        historicalNames: ["コルドバ"],
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
        historicalNames: ["金城", "慶州"],
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
    }
];