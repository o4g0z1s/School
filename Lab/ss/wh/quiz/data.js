/*
// 元のデータを新しい配列にコピーして加工します（index.htmlのコンソールで実行）
const cleanedData = word_data.map(item => {
  const newItem = {
    answer: item.answer,
    category: item.category,
    chapter: item.chapter,
    number: item.number,
    question: item.question
  };
  return newItem;
});
copy( 'const word_data = ' + JSON.stringify(cleanedData, null, 2) + ';' );
console.log('軽量化されたデータがクリップボードにコピーされました！ data.js に貼り付けてください。');
*/

const word_data = [
  {
    "answer": "猿人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "化石人類のうち、直立二足歩行をしていたと推定される、最古の人類を何と呼ぶか。"
  },
  {
    "answer": "サヘラントロプス",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "中央アフリカのチャドで発見された現在最古と考えられる700万～600万年前の化石人類を何と呼ぶか。"
  },
  {
    "answer": "アウストラロピテクス",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "南・東アフリカで発見された、約420万年前に出現した「南のサル」を意味する化石人類を何と呼ぶか。"
  },
  {
    "answer": "礫石器",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "猿人が用いたもっとも原始的な打製石器を何と呼ぶか。"
  },
  {
    "answer": "原人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "約240万年前に出現した、初歩的な打製石器やハンドアックスを用いたとされる化石人類を何と呼ぶか。"
  },
  {
    "answer": "ジャワ原人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "19世紀末、ジャワ島のトリニールで発見された原人の化石を何と呼ぶか。"
  },
  {
    "answer": "北京原人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "1920〜30年代に中国の周口店で発見され、火の使用が確認されている原人の化石を何と呼ぶか。"
  },
  {
    "answer": "旧人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "約60万年前に出現したと推定され、剥片石器を使い、旧大陸各地から出土している化石人類を何と呼ぶか。"
  },
  {
    "answer": "ネアンデルタール人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "19世紀半ばにドイツのある渓谷で発見された、代表的な旧人の名称は何か。"
  },
  {
    "answer": "埋葬の習慣",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "旧人の発掘によって確認された、彼らの宗教的習慣は何か。"
  },
  {
    "answer": "新人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "約20万年前にアフリカに出現し、５万年前頃から世界各地に広がった化石人類を何と総称するか。"
  },
  {
    "answer": "クロマニョン人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "新人のうち、４万2000年ほど前に現れ、南西フランスで発見された現生人類の化石の名称は何か。"
  },
  {
    "answer": "アルタミラ",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "旧石器時代後期の洞穴絵画で知られる、1879年にスペイン北部で発見された遺跡の名称は何か。"
  },
  {
    "answer": "ラスコー",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "旧石器時代後期の洞穴絵画で知られる、1940年に南西フランスで発見された遺跡の名称は何か。"
  },
  {
    "answer": "周口店上洞人",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "中国の北京郊外で発見された、新人の名称は何か。"
  },
  {
    "answer": "骨角器",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "新人が出現した旧石器時代後期から、銛・槍・針などに使われはじめた道具は何か。"
  },
  {
    "answer": "細石器",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "新人が矢・ナイフ・鎌などの刃として使用した、小型の剥片石器を何と呼ぶか。"
  },
  {
    "answer": "更新世",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "新生代後期のうち、約260万年前から約１万1700年ほど前までの氷河時代を、地質学上では何と呼ぶか。"
  },
  {
    "answer": "完新世",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "新生代末期（約１万1700年ほど前）から現在までの、温暖化した後氷期を、地質学上では何と呼ぶか。"
  },
  {
    "answer": "語族",
    "category": "自然環境と人類の進化",
    "chapter": "1",
    "number": "0",
    "question": "文法的類似性に基づいて分類される、共通の祖語をもつ言語の集まりを何というか。"
  },
  {
    "answer": "農耕・牧畜",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "前１万年頃から前4000年頃にかけて、世界各地で始まった食料生産方法は何と何か。"
  },
  {
    "answer": "新石器時代",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "約１万年前から人類は磨製石器を使用する時代に移行したが、この時代を何時代と呼ぶか。"
  },
  {
    "answer": "灌漑農業",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "村落から都市の成立に向かうころ、水を人工的に供給する農業が開始された。この農業を何と呼ぶか。"
  },
  {
    "answer": "都市国家",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "金属器時代、支配階級の居住する都市が周辺地域を支配する、最初の国家形態がうまれた。これを何と呼ぶか。"
  },
  {
    "answer": "文字",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "国家の成立とほぼ同じころ、人類は言語を記録するために、あるものを発明した。それは何か。"
  },
  {
    "answer": "生産経済",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "旧石器時代の獲得経済から、新石器時代になると何経済に移行したか。"
  },
  {
    "answer": "肥沃な三日月地帯",
    "category": "文明の誕生",
    "chapter": "1",
    "number": "1",
    "question": "農耕文明が早くから成立したメソポタミアの地帯を何と呼ぶか。"
  },
  {
    "answer": "オリエント",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "ラテン語で「日の昇るところ」を意味し、古代文明が栄えた地域を指す言葉は何か。"
  },
  {
    "answer": "ティグリス川",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "メソポタミア文明を支えた二つの大河のうち、東側にある河川の名称は何か。"
  },
  {
    "answer": "シュメール人",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "言語系統は不詳だが、メソポタミア南部に最古の文明を築いた人びとの名称は何か。"
  },
  {
    "answer": "ウル、ウルク、ラガシュ、ウガリットなど",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "シュメール人が建設した都市国家を２つ答えよ。"
  },
  {
    "answer": "ジッグラト",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "古代メソポタミアの都市国家で建設された、煉瓦で造られ、基壇の上に神殿が建っていた聖塔を何と呼ぶか。"
  },
  {
    "answer": "楔形文字",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "シュメール人が粘土板に刻んだ文字は何か。"
  },
  {
    "answer": "アッカド人",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "シュメール人の都市国家を征服し、初の領域国家を建てたセム語系の人びとの名称は何か。"
  },
  {
    "answer": "サルゴン１世",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "前24世紀頃、メソポタミア最初の統一国家であるアッカド王国を建てた王は誰か。"
  },
  {
    "answer": "アムル人",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "メソポタミアに進出し、前19世紀初めにバビロン第１王朝を建てたセム語系遊牧民は何か。"
  },
  {
    "answer": "ハンムラビ法典",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "バビロン第１王朝６代王が作成させた、全282条からなる法典の名称は何か。"
  },
  {
    "answer": "目には目を、歯には歯を",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "ハンムラビ法典の復讐法的性格を端的に表す、有名な成句は何か。"
  },
  {
    "answer": "ヒッタイト人",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "小アジアに王国を建て、鉄製武器を使用して、バビロン第１王朝を滅ぼした印＝欧語系の民族は何か。"
  },
  {
    "answer": "ミタンニ王国",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "メソポタミア北部からシリアを制圧して栄えた、住民の多くをフルリ人が占めていた王国の名称は何か。"
  },
  {
    "answer": "太陰暦",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "シュメールに始まり、古代メソポタミアで広く用いられた、月の満ち欠けの周期を基準とする暦は何か。"
  },
  {
    "answer": "六十進法",
    "category": "オリエント",
    "chapter": "1",
    "number": "2",
    "question": "シュメール人が発明した、天文学・角度・時間の単位となった記数法は何進法か。"
  },
  {
    "answer": "エジプトはナイルのたまもの",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "古代ギリシアの歴史家ヘロドトスが著書『歴史』に書いた、古代エジプトの繁栄を表現したことばは何か。"
  },
  {
    "answer": "ファラオ",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "「大きな家」を意味する、古代エジプトの王の称号を何と呼ぶか。"
  },
  {
    "answer": "メンフィス",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "古王国時代のエジプトの首都はどこか。"
  },
  {
    "answer": "クフ王",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "ギザに最大のピラミッドを建設させた、古王国第４王朝の王は誰か。"
  },
  {
    "answer": "ヒクソス",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "中王国末期にシリア方面から流入し、その滅亡後に下エジプトを支配したアジア系民族を何と呼ぶか。"
  },
  {
    "answer": "テーベ",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "中王国・新王国時代のエジプトの首都はどこか。"
  },
  {
    "answer": "アメン",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "中王国・新王国時代のエジプトの首都の都市神として信仰されていた神は何か。"
  },
  {
    "answer": "アメンヘテプ４世",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "唯一神アテンの信仰を強制する宗教改革を行った、第18王朝の王は誰か（改名前）。"
  },
  {
    "answer": "テル＝エル＝アマルナ",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "アメンヘテプ４世は、首都をテーベからどこに移したか。"
  },
  {
    "answer": "アクエンアテン",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "アメンヘテプ４世は、自らの名前をどう改名したか。"
  },
  {
    "answer": "写実的",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "アマルナ美術の特徴は何か。〇〇的という形で答えなさい。"
  },
  {
    "answer": "『死者の書』",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "死後の世界の案内書として、オシリスの審判を受けるために必要な呪文を記した副葬品は何か。"
  },
  {
    "answer": "十進法",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "古代エジプトで使用されていた記数法は何進法か。"
  },
  {
    "answer": "神聖文字",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "ヒエログリフと称される、神殿・墓などに刻まれたエジプトの象形文字を何と呼ぶか。"
  },
  {
    "answer": "シャンポリオン",
    "category": "エジプトの統一国家",
    "chapter": "1",
    "number": "3",
    "question": "ロゼッタ＝ストーンのギリシア文字により、神聖文字を解読した19世紀のフランス人学者は誰か。"
  },
  {
    "answer": "海の民",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ヒッタイト滅亡やエジプト弱体化の要因となった、民族系統不明の諸民族集団の総称は何か。"
  },
  {
    "answer": "アラム人",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "前13世紀頃から、シリア地方を中心に内陸交易で活躍したセム語系遊牧民は何か。"
  },
  {
    "answer": "ダマスクス",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "シリアの中心都市で、アラム人の交易活動の拠点として栄えた都市はどこか。"
  },
  {
    "answer": "フェニキア人",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "地中海東岸に多くの都市国家を建て、前12世紀頃から地中海交易を独占しはじめたセム語系民族は何か。"
  },
  {
    "answer": "シドン、ティルス、ベリトスなど",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "フェニキア人が建設した都市国家を２つ答えなさい。"
  },
  {
    "answer": "カルタゴ",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ティルスが建設した、北アフリカのフェニキア人植民都市はどこか。"
  },
  {
    "answer": "フェニキア文字",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "アルファベットの起源となり、西方系文字の源流となった、セム語系の表音文字は何か。"
  },
  {
    "answer": "ヘブライ人",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "パレスチナに移住・定着し、またその一部がエジプトへ移住したセム語系民族の名称のうち、他称は何か。"
  },
  {
    "answer": "モーセ",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "前13世紀頃に「出エジプト」を指導した、ヘブライ人の伝説的預言者は誰か。"
  },
  {
    "answer": "十戒",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "神が預言者モーセに与えたとされる律法のこと何というか。"
  },
  {
    "answer": "イェルサレム",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ダヴィデ王によって定められた、イスラエル王国の都はどこか。"
  },
  {
    "answer": "ソロモン",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "王国の首都に神殿を建設した、イスラエル王国の第３代国王は誰か。"
  },
  {
    "answer": "バビロン捕囚",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ユダ王国の滅亡の際、新バビロニアが住民の多くを強制移住させた出来事は何と呼ばれるか。"
  },
  {
    "answer": "ヤハウェ",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ユダヤ教の唯一神の名称は何か。"
  },
  {
    "answer": "選民思想",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ユダヤ教の特色の１つである、自民族だけが救われるとする排他的な思想のことを何というか。"
  },
  {
    "answer": "救世主（メシア）",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "民族が苦境に陥ったとき、民族を破滅から救う者が現れるとする思想があるが、その救う者を何と呼ぶか。"
  },
  {
    "answer": "『旧約聖書』",
    "category": "東地中海の諸民族",
    "chapter": "1",
    "number": "4",
    "question": "ユダヤ教の教典は何か。"
  },
  {
    "answer": "エーゲ文明",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "前3000-前1200年頃にかけてエーゲ海を中心に成立した青銅器文明の総称を何というか。"
  },
  {
    "answer": "クノッソス",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "クレタ文明の中心地で、壮大な宮殿が発掘された場所はどこか。"
  },
  {
    "answer": "エヴァンズ",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "クレタ文明の宮殿跡を発掘したイギリスの考古学者は誰か。"
  },
  {
    "answer": "クレタ文明",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "明るく開放的で写実的な特徴を持つ文明は、クレタ文明、ミケーネ文明のどちらか。"
  },
  {
    "answer": "アカイア人",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "バルカン半島から南下してクレタ文明を滅亡させたのは何人か。"
  },
  {
    "answer": "シュリーマン",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "ミケーネ文明・トロイア文明を発掘したドイツの考古学者は誰か。"
  },
  {
    "answer": "貢納王政",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "支配者が農民や商人から強制的に徴税・徴発した、ミケーネ文明の支配体制は何と呼ばれるか。"
  },
  {
    "answer": "ヴェントリス",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "線文字Bを解読したイギリス人は誰か。"
  },
  {
    "answer": "暗黒(初期鉄器)時代",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "「海の民」の侵入なども背景に、史料が多く残存していない前12-前8世紀頃の時代をなんと呼ぶか。"
  },
  {
    "answer": "アッシュルバニパル",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "アッシリア王国の最大版図を達成し、首都に大図書館を作った国王は誰か。"
  },
  {
    "answer": "ニネヴェ",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "アッシリア王国の首都はどこか。"
  },
  {
    "answer": "リディア",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "アッシリアの分裂後に、小アジア南西部で栄え、世界最古の金属貨幣を使用した国は何か。"
  },
  {
    "answer": "クシュ王国",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "エジプト新王国の滅亡後、前10世紀後半-後４世紀頃にかけて、ナイル川上流に続いた黒人王国は何か。"
  },
  {
    "answer": "アクスム王国",
    "category": "エーゲ文明・オリエントの統一と分裂",
    "chapter": "1",
    "number": "5",
    "question": "紀元前後頃エチオピア高原に成立し、キリスト教（単性論）を国教とした国は何か。"
  },
  {
    "answer": "インダス川",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "インド北西部を流れる大河は何か。"
  },
  {
    "answer": "パンジャーブ地方",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "遺跡ハラッパーがある、アーリヤ人が最初に定住したインダス川中流域は何地方か。"
  },
  {
    "answer": "ドラヴィダ人",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "インダス文明の建設者と推測され、現在は南インドを中心に分布している先住民は何人か。"
  },
  {
    "answer": "カイバル峠",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "インドと西アジアを結ぶ交通の要衝で、アフガニスタンとパキスタンを結ぶ峠の名称は何か。"
  },
  {
    "answer": "『リグ＝ヴェーダ』",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "ヴェーダのうち、神々への賛歌を集めた、最古の聖典の名称は何か。"
  },
  {
    "answer": "ヴァルナ制",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "古代インドで、4つの身分に分類され、それぞれに職業等が厳格に定められていた身分制度を何というか。"
  },
  {
    "answer": "バラモン",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "古代インドにおいて、宗教儀式を司る、最上位の司祭階層を何と呼ぶか。"
  },
  {
    "answer": "クシャトリヤ",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "古代インドにおいて、貴族・武人階層を何と呼ぶか。"
  },
  {
    "answer": "ヴァイシャ",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "古代インドにおいて、農民・商人などの庶民階層を何と呼ぶか。"
  },
  {
    "answer": "シュードラ",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "古代インドにおいて、被征服民を中心とする隷属民階層を何と呼ぶか。"
  },
  {
    "answer": "ジャーティ集団",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "古代インドにおいて、職業や出身によって細かく分かれた世襲的な社会集団を何というか。"
  },
  {
    "answer": "印章",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "動物の図柄とインダス文字が刻まれている印鑑・ハンコを何と呼ぶか。"
  },
  {
    "answer": "未解読",
    "category": "南アジアの古代文明",
    "chapter": "1",
    "number": "6",
    "question": "インダス文字は解読済みであるか、未解読であるか。"
  },
  {
    "answer": "長江",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "中国において、稲作により適しているのは黄河か長江か。"
  },
  {
    "answer": "仰韶文化",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "前5000年頃から黄河中流域におこった文明のうち、最古の新石器文化は何と呼ばれるか。"
  },
  {
    "answer": "仰韶文化",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "黄河文明のうち、彩文土器が作られていた文化は何か。"
  },
  {
    "answer": "竜山文化",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "前2500年頃から黄河下流域を中心におこった新石器時代後期の文化は、何と呼ばれるか。"
  },
  {
    "answer": "邑",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "古代中国で前3000年以降しだいに形成された、集落や都市を意味する用語は何か。"
  },
  {
    "answer": "河姆渡文化",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "前6000年頃までに始まっていた稲作文明のうち、長江下流域で栄えた文明は何か。"
  },
  {
    "answer": "夏",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "禹に始まるとされ、国際的には実在が確認されていない最古の王朝は何か。"
  },
  {
    "answer": "殷（商）",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "前16世紀頃から存在した、現在中国最古の王朝とされている王朝は何か。"
  },
  {
    "answer": "殷墟",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "河南省安陽市を中心に発見された、殷の都の遺跡は何と呼ばれるか。"
  },
  {
    "answer": "甲骨文字",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "亀甲や獣骨に刻まれた、漢字の原型とされる文字は何か。"
  },
  {
    "answer": "鎬京",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "西周の首都はどこか。"
  },
  {
    "answer": "渭水盆地",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "西周の都などがあった、中国北西部の盆地はどこか。"
  },
  {
    "answer": "易姓革命",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "中国で、天命が失われた王朝は滅び、徳のある一族が新たに王朝を興すとする政治理念を何というか。"
  },
  {
    "answer": "封建制",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "西周も実施した、土地を媒介とした主従関係に基づく支配制度のことを何というか。"
  },
  {
    "answer": "卿・大夫・士",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "西周において、王や諸侯の世襲の家臣は何と呼ばれたか、三種答えなさい。"
  },
  {
    "answer": "宗法",
    "category": "中国の古代文明",
    "chapter": "1",
    "number": "7",
    "question": "同性の親族集団において守るべき規範は、何と呼ばれたか。"
  },
  {
    "answer": "犬戎",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "前8世紀ごろ、周の東遷の原因となった、西方から侵入してきた遊牧民は何か。"
  },
  {
    "answer": "洛邑",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "東周の首都はどこか。"
  },
  {
    "answer": "覇者",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "春秋時代、周王に代わって会盟を開催した有力諸侯のことを何と呼ぶか。"
  },
  {
    "answer": "孝公",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "商鞅を登用して法家の改革を進め、戦国時代の秦の強国化の基礎を築いた君主は誰か。"
  },
  {
    "answer": "咸陽",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "秦の首都はどこか。"
  },
  {
    "answer": "商鞅",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "戦国時代、秦の孝公に支えて法家の人物は誰か。"
  },
  {
    "answer": "秦/楚/斉/燕/趙/魏/韓",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "戦国の七雄を全て答えなさい。"
  },
  {
    "answer": "華夷思想",
    "category": "春秋・戦国時代",
    "chapter": "1",
    "number": "8",
    "question": "文明化された自国に対し、周辺の民族を野蛮な民族・国とみなした思想を何と呼ぶか。"
  },
  {
    "answer": "牛耕",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "春秋・戦国時代に導入された、鉄製の犁を牛にひかせた耕作法は何か。"
  },
  {
    "answer": "布銭",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "農具の形をした青銅貨幣の名称は何か。"
  },
  {
    "answer": "蟻鼻銭",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "南方の楚で使用された小型の青銅貨幣の名称は何か。"
  },
  {
    "answer": "諸子百家",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "春秋時代末期から現れた、様々な思想家や諸学派を何と総称するか。"
  },
  {
    "answer": "『論語』",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "四書の一つで、孔子の死後、弟子によって編纂された、彼とその弟子の言行録は何か。"
  },
  {
    "answer": "荀子",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "性悪説をとなえ、礼による教化を説いた儒家の思想家は誰か。"
  },
  {
    "answer": "孟子",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "性善説を唱えた儒家の思想家は誰か。"
  },
  {
    "answer": "李斯",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "始皇帝のもと丞相として支えた法家の人物は誰か。"
  },
  {
    "answer": "兼愛・非攻",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "墨子が唱えた、無差別の愛を指す語、戦争を否定する語をそれぞれ答えなさい。"
  },
  {
    "answer": "無為自然",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "道家の根本思想を指す、人為を否定し天の道に従うという考え方を何というか。"
  },
  {
    "answer": "蘇秦",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "６国が同盟して秦に対抗する合従策をとなえたのは誰か。"
  },
  {
    "answer": "張儀",
    "category": "春秋・戦国時代の社会と文化",
    "chapter": "1",
    "number": "9",
    "question": "秦王の信任を得て、連衡策をとなえた人物は誰か。"
  },
  {
    "answer": "ジャガイモ",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "アンデス地方原産の食物で、天候や戦争の被害を受けにくく、ヨーロッパで広く普及したイモ類は何か。"
  },
  {
    "answer": "トウモロコシ",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "南北アメリカ大陸の古代文明の基礎となった穀物は何か。"
  },
  {
    "answer": "リャマ/アルパカ",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "アメリカ大陸で飼育されている家畜の例を１つ挙げなさい。"
  },
  {
    "answer": "オルメカ文明",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "前1200年頃までにメキシコ湾岸に成立した、巨石人頭像や絵文字をもつ中央アメリカ最初の都市文明は何か。"
  },
  {
    "answer": "マヤ文明",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "前４世紀頃ユカタン半島の各地に都市が成立して栄え、その後16世紀にスペイン人に征服された文明は何か。"
  },
  {
    "answer": "二十進法",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "マヤ文明で採用された記数法は何進法か。"
  },
  {
    "answer": "テオティワカン文明",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "前１〜後６世紀頃に、メキシコ高原で発達した、「神々の家」という意味を持つ古代都市文明は何か。"
  },
  {
    "answer": "アステカ文明",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "15世紀にメキシコ高原に栄え、テノチティトランを都とし、神への生贄を伴う宗教儀式で知られた文明は何か。"
  },
  {
    "answer": "チャビン文化",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "前1000年頃北部ペルーに形成された、初期のアンデス文明は何か。"
  },
  {
    "answer": "インカ帝国",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "とくに15〜16世紀前半までクスコを都にアンデス地帯で栄えた、ケチュア人の建てた帝国は何か。"
  },
  {
    "answer": "キープ",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "文字のなかったインカ帝国で、縄の結び方で意味や数量を示した方法を何と呼ぶか。"
  },
  {
    "answer": "マチュピチュ",
    "category": "南北アメリカ文明",
    "chapter": "1",
    "number": "10",
    "question": "インカ帝国首都北方の標高2400mの山岳地帯に建てられ、高い文化レベルをうかがわせた都市はどこか。"
  },
  {
    "answer": "ストーンヘンジ",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "新石器時代のイギリスのものとされる巨石建造物の名前は何か。"
  },
  {
    "answer": "ジャルモ",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "前7000年頃に麦の栽培が始まった北イラクに残る代表的遺跡の名前は何か。"
  },
  {
    "answer": "イェリコ",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "前7000年頃に麦の栽培が始まったパレスチナに残る代表的遺跡の名前は何か。"
  },
  {
    "answer": "ナラム＝シン",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "アッカド王国の最盛期を築き、「四方世界の王」と自称した第４代国王の名前は何か。"
  },
  {
    "answer": "ノモス",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "古王国による統一前のエジプトに存在した部族的独立集落の名前は何か。"
  },
  {
    "answer": "メネス",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "全エジプトを統一した上エジプトの王の名前は何か。"
  },
  {
    "answer": "クフ王、カフラー王、メンカウラー王",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "古王国時代のエジプトで建設されたギザの三大ピラミッドを、大きい順に、それぞれのピラミッドを建造したファラオの名前を答えなさい。"
  },
  {
    "answer": "カデシュの戦い",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "前1286年頃、新王国時代のエジプトの王ラメス2世がヒッタイトと戦い、最古の講和条約を結んだとされる戦いの名前は何か。"
  },
  {
    "answer": "アブシンベル神殿",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "ラメス2世が建設させ、現在はアスワン＝ハイダム建設のために移設された神殿の名前は何か。"
  },
  {
    "answer": "ハットゥシャ",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "ヒッタイトの都はどこか。"
  },
  {
    "answer": "サルゴン2世",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "前721年、イスラエル王国を滅ぼしたアッシリアの君主は誰か。"
  },
  {
    "answer": "ネブカドネザル2世",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "前586年にバビロン捕囚を行った新バビロニア（カルデア）の君主は誰か。"
  },
  {
    "answer": "ベヒストゥーン碑文",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "ローリンソンが解読し、楔形文字解読を進める要因となった史料はなにか。"
  },
  {
    "answer": "シンド地方",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "モエンジョ＝ダーロのあったインダス川下流域の地方名は何か。"
  },
  {
    "answer": "ドーラヴィーラ",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "約10文字のインダス文字の刻まれた看板が発見されたインド西部の遺跡名は何か。"
  },
  {
    "answer": "『リグ＝ヴェーダ』『サーマ＝ヴェーダ』『ヤジュル＝ヴェーダ』『アタルヴァ＝ヴェーダ』",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "４ヴェーダ全て答えなさい。"
  },
  {
    "answer": "チチェン・イツァ",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "ユカタン半島に位置し、マヤ文明最大の都市遺跡の一つで、ククルカンのピラミッドなどが世界遺産に登録されているものはどこか。"
  },
  {
    "answer": "トルテカ文明",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "10世紀から12世紀にメキシコ高原のトゥーラを中心に発達した文明は何か。"
  },
  {
    "answer": "チャビン文化",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "前1000年頃に北部ペルーでトウモロコシの灌漑農業などが発達し、「アンデス文明の源」と呼ばれる文化は何か。"
  },
  {
    "answer": "ナスカ文明",
    "category": "難関私大対策",
    "chapter": "1",
    "number": "Z",
    "question": "ペルー南部で発達し、地上絵などを特徴とする文明は何か。"
  },
  {
    "answer": "隊商交易",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "とくに「オアシスの道」で、ラクダや馬を利用した商人がグループをつくって行った長距離交易は何か。"
  },
  {
    "answer": "草原の道",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "様々な遊牧民が活動した、南ロシアの草原地帯からモンゴル高原にかけての東西交通路を何と呼ぶか。"
  },
  {
    "answer": "スキタイ",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "独自の騎馬文化を生み、前７世紀頃から南ロシアの草原地帯を支配したイラン系遊牧民の名称は何か。"
  },
  {
    "answer": "匈奴",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "騎馬文化を取り入れ、前３世紀末からモンゴル高原で活躍した、民族系統不明の遊牧民の名称は何か。"
  },
  {
    "answer": "冒頓単于",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "前３世紀末に匈奴を統率し、前漢の高祖を白頭山の戦いで撃破した君主は誰か。"
  },
  {
    "answer": "月氏",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "前２世紀前半に匈奴の圧迫を受けてイリ地方に逃れた、イラン系といわれる騎馬遊牧民は何か。"
  },
  {
    "answer": "烏孫",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "前漢が匈奴に対抗するために同盟を結んだ、イリ地方を拠点とした遊牧民は何か。"
  },
  {
    "answer": "鮮卑",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "２世紀半ばに諸部族を統合してモンゴル高原を支配し、その後華北に進出して北魏を建国した遊牧民は何か。"
  },
  {
    "answer": "フン人",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "４世紀末～５世紀に内陸アジアからヨーロッパへ西進し、ゲルマン人大移動の要因となった騎馬遊牧民は何か。"
  },
  {
    "answer": "タリム盆地",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "パミール高原東部に広がり、古くからオアシス都市が点在していた中国西部の盆地はどこか。"
  },
  {
    "answer": "ソグディアナ",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "東西交易の要地として争奪が繰り返された、アム川とシル川にはさまれたパミール高原西部の地域名称は何か。"
  },
  {
    "answer": "オアシスの道",
    "category": "中央ユーラシア：草原とオアシスの世界",
    "chapter": "2",
    "number": "11",
    "question": "草原の道と並び、タリム盆地周辺のオアシス都市を経由して中国と西方を結んだルートを何というか。"
  },
  {
    "answer": "政",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "戦国時代を勝ち抜き、秦として中国を統一し、始皇帝と名乗った秦の王は誰か。"
  },
  {
    "answer": "(紀元)前221年",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "秦が中国を統一したのは西暦何年か。"
  },
  {
    "answer": "李斯",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "始皇帝のもと、丞相として仕えた法家の人物は誰か。"
  },
  {
    "answer": "郡県制",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "中央集権化のため、秦が施行した地方統治制度は何か。"
  },
  {
    "answer": "半両銭",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "秦が定めた統一貨幣の名称は何か。"
  },
  {
    "answer": "焚書・坑儒",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "秦で実施された思想・言論統制策は何と呼ばれたか。"
  },
  {
    "answer": "南越国",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "秦末に成立し武帝の時代に滅ぼされた、現在の広東省からベトナム北部にあった国の名称は何か。"
  },
  {
    "answer": "陳勝・呉広の乱",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "秦末に発生した、中国史上最初の農民反乱の名称は何か。"
  },
  {
    "answer": "劉邦",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "農民出身で、漢を建てて中国を再統一した人物は誰か。"
  },
  {
    "answer": "項羽",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "農民反乱を機に挙兵し、秦を滅ぼした後、垓下の戦いで敗れた、楚の名門出身の武将は誰か。"
  },
  {
    "answer": "長安",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "前漢の首都はどこか。"
  },
  {
    "answer": "「王侯将相いずくんぞ種あらんや」",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "陳勝・呉広の乱の際、陳勝が発したとされる、身分制度への反発を表す言葉は何か。"
  },
  {
    "answer": "郡国制",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "前漢の高祖が施行した、郡県制と封建制を併用した地方統治制度の名称は何か。"
  },
  {
    "answer": "呉楚七国の乱",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "前154年、江南を中心とする七諸侯がおこした反乱で、鎮圧後、中央集権化が進められる契機となったものは何か。"
  },
  {
    "answer": "董仲舒",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "前漢時代、儒教の官学化を武帝に献策した儒学者は誰か。"
  },
  {
    "answer": "郷挙里選",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "前漢の武帝のとき制定された官吏任用制度の名称は何か。"
  },
  {
    "answer": "張騫",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "匈奴をはさみ打ちする目的で、武帝によって大月氏に派遣された人物は誰か。"
  },
  {
    "answer": "敦煌郡",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "武帝が西域に設置した河西４郡のうち、もっとも西におかれた郡の名称は何か。"
  },
  {
    "answer": "衛氏朝鮮",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "武帝の時代に滅ぼされた、朝鮮の国名は何か。"
  },
  {
    "answer": "均輸",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "武帝が施行した、特産物を強制的に貢納させ、これを不足地に転売した物価調整策は何か。"
  },
  {
    "answer": "平準",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "武帝が施行した、物価の低いときに余剰産品を政府が購入し、高くなったときに売り出す物価安定策は何か。"
  },
  {
    "answer": "塩・鉄",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "前漢の武帝が財政再建のために専売化した、２つの物品名は何か。"
  },
  {
    "answer": "五銖銭",
    "category": "秦の統一と前漢",
    "chapter": "2",
    "number": "12",
    "question": "武帝が鋳造させた銅銭の名称は何か。"
  },
  {
    "answer": "王莽",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "前漢の外戚出身で、皇帝の位を奪って新を建てたが、各地の反乱により滅ぼされた人物は誰か。"
  },
  {
    "answer": "赤眉の乱",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "新の復古的政治に不満な人びとがおこした反乱のうち、山東地方から始まった農民反乱は何か。"
  },
  {
    "answer": "劉秀（光武帝）",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "後25年に漢王朝（後漢）を再建した、漢王室一族の人物（初代皇帝）は誰か。"
  },
  {
    "answer": "洛陽",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "後漢の都はどこか。"
  },
  {
    "answer": "班超",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "１世紀末、後漢の和帝によって西域都護に任命された人物は誰か。"
  },
  {
    "answer": "甘英",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "班超によって、ローマ帝国への派遣を命じられた部下は誰か。"
  },
  {
    "answer": "大秦王安敦",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "２世紀後半、後漢に使者を派遣したローマ皇帝マルクス＝アウレリウス＝アントニヌスの中国表記は何か。"
  },
  {
    "answer": "党錮の禁",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "２世紀後半におこった、宦官の専横に反対する儒学者官僚を、宦官が弾圧した事件を何と呼ぶか。"
  },
  {
    "answer": "黄巾の乱",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "後漢末の184年におこった農民反乱は何か。"
  },
  {
    "answer": "曹丕",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "曹操の子で、後漢の皇帝から禅譲され、魏の初代皇帝となった人物は誰か。"
  },
  {
    "answer": "訓詁学",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "儒教古典の字句解釈を目的とした学問を何と呼ぶか。"
  },
  {
    "answer": "『史記』",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "司馬遷が黄帝から前漢の武帝までの事績を記した正史の名称は何か。"
  },
  {
    "answer": "紀伝体",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "『史記』に始まる、中国正史の記述形式は何か。"
  },
  {
    "answer": "蔡倫",
    "category": "後漢と漢代の社会・文化",
    "chapter": "2",
    "number": "13",
    "question": "製紙法を改良したとされる、後漢の宦官は誰か。"
  },
  {
    "answer": "屯田制",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "国家財政を確立するため、魏の曹操が、荒廃地を国有化して流民や一般農民に耕作させた制度は何か。"
  },
  {
    "answer": "建業",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "現在の南京の前身となった、呉の都はどこか。"
  },
  {
    "answer": "孫権",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "222年に江南で独立し、呉を建てた人物は誰か。"
  },
  {
    "answer": "劉備",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "漢の後裔を称し、四川地方に蜀を建てた人物は誰か。"
  },
  {
    "answer": "成都",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "蜀の都はどこか。"
  },
  {
    "answer": "司馬炎",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "魏の武将で、禅譲されて265年に皇帝となり、呉を滅ぼして中国をいったん統一した人物は誰か。"
  },
  {
    "answer": "280年",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "西晋が中国を統一したのは西暦何年か。"
  },
  {
    "answer": "八王の乱",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "司馬炎の死後、290年から始まった一族諸王による内乱は何か。"
  },
  {
    "answer": "永嘉の乱",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "八王の乱ののち、４世紀に入り匈奴が中心となっておこし、西晋を滅ぼした兵乱は何と呼ばれるか。"
  },
  {
    "answer": "建康",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "東晋は建業を改称して都とした。その名称は何か。"
  },
  {
    "answer": "司馬睿",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "西晋滅亡後、江南に逃れて東晋を建てた人物は誰か。"
  },
  {
    "answer": "劉裕",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "東晋末の混乱を収めて皇帝となり、南朝宋を建てた軍人出身の人物は誰か。"
  },
  {
    "answer": "拓跋氏",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "北魏を建国した鮮卑の氏族名は何か。"
  },
  {
    "answer": "太武帝",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "北魏が439年に華北を統一した時の皇帝は誰か。"
  },
  {
    "answer": "孝文帝",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "５世紀後半に漢化政策を実施した第６代皇帝は誰か。"
  },
  {
    "answer": "六鎮の乱",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "北魏の後期、拓跋氏による漢化政策に不満を持った辺境の軍事拠点で発生した反乱は何か。"
  },
  {
    "answer": "宋・斉・梁・陳",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "東晋の滅亡後、江南を支配した4つの王朝を建国順に答えなさい。"
  },
  {
    "answer": "九品中正",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "三国の魏の文帝（曹丕）が始めた、地方に役人を派遣し、中央に人材を推薦させた官吏登用制度は何か。"
  },
  {
    "answer": "均田制",
    "category": "魏晋南北朝時代",
    "chapter": "2",
    "number": "14",
    "question": "北魏に始まり、隋以降の中国王朝に継承された土地制度は何か。"
  },
  {
    "answer": "清談",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "魏・晋時代に流行した、老荘思想に基づき、世俗を超越した表現で行われた哲学的論議を何と呼ぶか。"
  },
  {
    "answer": "仏図澄",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "４世紀初め洛陽に来て仏教を広めた、西域のクチャ（亀茲）出身の僧は誰か。"
  },
  {
    "answer": "鳩摩羅什",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "５世紀初め長安に来て仏典の漢訳と教理の中国定着に大きく貢献した、父がインド人のクチャ出身の僧は誰か。"
  },
  {
    "answer": "法顕",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "４世紀末に長安から陸路でインドへ向かい、海路で帰国し『仏国記』を著した東晋時代の僧は誰か。"
  },
  {
    "answer": "雲崗",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "北魏前半の都である平城の西に位置し、石窟寺院が造営されたのはどこか。"
  },
  {
    "answer": "竜門",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "北魏の遷都後から石窟寺院の造営が開始された、洛陽南方の地はどこか。"
  },
  {
    "answer": "寇謙之",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "北魏の太武帝に重用され、新天師道を確立し、道教を大成させた人物は誰か。"
  },
  {
    "answer": "陶淵明",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "「帰去来辞」で知られる、東晋の田園詩人は誰か。"
  },
  {
    "answer": "昭明太子",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "南朝梁の武帝の長子で、詩文にすぐれ、『文選』を編纂したのは誰か。"
  },
  {
    "answer": "王羲之",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "「書聖」と称され、「蘭亭序」で名高い東晋の書家は誰か。"
  },
  {
    "answer": "『女史箴図』",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "女官へのいましめを書いた作品を題材として、顧愷之が描いたとされる作品は何か。"
  },
  {
    "answer": "広開土王",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "４世紀末〜５世紀初め、朝鮮半島南部に進出し、倭とも戦い破ったとされる、高句麗の最盛期の王は誰か。"
  },
  {
    "answer": "百済",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "４世紀半ば、半島南西部に分立していた三韓の国々を統一して成立した国はどこか。"
  },
  {
    "answer": "新羅",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "４世紀半ば、半島南東部に分立していた三韓の国々を統一して成立した国はどこか。"
  },
  {
    "answer": "卑弥呼",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "『魏志』倭人伝に記述されている、邪馬台国の女王の名前は何か。"
  },
  {
    "answer": "朝貢",
    "category": "魏晋南北朝時代の文化・朝鮮・日本の国家形成",
    "chapter": "2",
    "number": "15",
    "question": "周辺諸国の君主が、中国皇帝の権威を認めて使者を送り、貢物を献上する形式的な外交儀礼を何というか。"
  },
  {
    "answer": "楊堅",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "北周の外戚だが、禅譲により隋の初代皇帝（文帝）として即位したのは誰か。"
  },
  {
    "answer": "大興城",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "隋の都はどこか。"
  },
  {
    "answer": "589年",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "隋が中国を統一したのは西暦何年か。"
  },
  {
    "answer": "科挙",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "貴族の高級官僚独占を防ぎ中央集権化をめざす目的で隋で開始された、科目試験による官吏登用制度は何か。"
  },
  {
    "answer": "煬帝",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "隋の二代目皇帝は誰か。"
  },
  {
    "answer": "高句麗",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "隋の二代目皇帝により、三度遠征軍を送り三度失敗した遠征先はどこか。"
  },
  {
    "answer": "618年",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "唐の建国年は西暦何年か。"
  },
  {
    "answer": "長安",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "唐の都はどこか。"
  },
  {
    "answer": "李淵（高祖）",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "唐の建国者は誰か。"
  },
  {
    "answer": "貞観の治",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "盛時を現出した太宗の治世を、後世になって元号でたたえたことばは何か。"
  },
  {
    "answer": "高宗",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "周辺国家を服属させ、唐の最大版図を実現した第３代皇帝は誰か。"
  },
  {
    "answer": "都護府",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "唐が周辺諸民族の統治のため６つ設置した機関は何か。"
  },
  {
    "answer": "羈縻政策",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "中央から役人を派遣し、そのもとで在地の族長を任命して、周辺民族を間接統治した中国歴代王朝の政策を何と呼ぶか。"
  },
  {
    "answer": "律・令・格・式",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "唐代に整備された法体系で、刑法・行政法・補足法・施行細則にそれぞれあたるものをそれぞれ何というか。"
  },
  {
    "answer": "中書省",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "三省のうち、詔勅の立案起草を担当した機関は何か。"
  },
  {
    "answer": "門下省",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "三省のうち、立案された詔勅や奏文の審議を担当した機関は何か。"
  },
  {
    "answer": "尚書省",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "三省のうち、成立した詔勅を執行する行政機関は何か。"
  },
  {
    "answer": "礼部",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "六部のうち、教育・祭祀・科挙を担当したのはどこか。"
  },
  {
    "answer": "御史台",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "秦代から用いられてきた呼称で、中国での官吏監察機関の名称は何か。"
  },
  {
    "answer": "州県制",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "隋で始まり、唐で確立された地方行政区画制度は何か。"
  },
  {
    "answer": "府兵制",
    "category": "隋と唐初",
    "chapter": "2",
    "number": "16",
    "question": "楊堅が整備し、唐でも採用された、西魏に始まる兵制は何か。"
  },
  {
    "answer": "揚州",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "広州とならんで、ムスリム商人が来航し彼らの居留地がおかれた、大運河沿いの江蘇省の港市はどこか。"
  },
  {
    "answer": "市舶司",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "玄宗時代、広州に初めて設置された、海上貿易管理機関の名称は何か。"
  },
  {
    "answer": "孔穎達",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "太宗の勅命で『隋書』や五経の注釈書を編纂した儒学者は誰か。"
  },
  {
    "answer": "『五経正義』",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "孔穎達らが編纂した、五経の統一的な注釈書は何か。"
  },
  {
    "answer": "祆教",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "北魏のころ伝わった、ゾロアスター教（拝火教）の中国名は何か。"
  },
  {
    "answer": "マニ教",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "ササン朝にて、ゾロアスター教・仏教・キリスト教が融合して成立し、唐に伝わった宗教は何か。"
  },
  {
    "answer": "景教",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "唐の太宗時代、布教を許されたネストリウス派キリスト教の中国名は何か。"
  },
  {
    "answer": "玄奘",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "唐代の初め、往復とも陸路でインドに赴き、『大唐西域記』を著した中国僧は誰か。"
  },
  {
    "answer": "義浄",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "７世紀後半、往復とも海路でインドに赴き、『南海寄帰内法伝』を著した中国僧は誰か。"
  },
  {
    "answer": "李白",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "安史の乱のとき粛宗の弟の反乱に加担し、一時流罪となったこともある、「詩仙」と称された唐中期の詩人は誰か。"
  },
  {
    "answer": "杜甫",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "「春望」など社会の現実をうたった作品が多く、のちに「詩聖」と称された唐中期の詩人は誰か。"
  },
  {
    "answer": "白居易",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "玄宗と楊貴妃の悲恋をうたった「長恨歌」や『白氏文集』などが有名な、唐後期の詩人は誰か。"
  },
  {
    "answer": "柳宗元・韓愈",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "唐代中期に古文復興運動を唱え、儒教的思想の復権を目指した人物を2人挙げなさい。"
  },
  {
    "answer": "顔真卿",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "楷書・草書に力強い書風を開くいっぽう、安史の乱の際に義勇軍を率いて抗戦した、唐中期の書家は誰か。"
  },
  {
    "answer": "呉道玄",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "玄宗に仕え、線の太さで量感や立体感を表す新技術を生み出した、唐中期の画家は誰か。"
  },
  {
    "answer": "唐三彩",
    "category": "唐の文化",
    "chapter": "2",
    "number": "17",
    "question": "副葬品に多く使用された、緑・黄・白などの彩色をほどこした唐代の陶器の名称は何か。"
  },
  {
    "answer": "吐蕃",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "７世紀にラサを都に成立したチベットの王国に対する、中国側の呼称は何か。"
  },
  {
    "answer": "ソンツェン＝ガンポ",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "吐蕃の建国者は誰か。"
  },
  {
    "answer": "ラマ教",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "チベット固有の大乗仏教であるチベット仏教の別名を答えなさい。"
  },
  {
    "answer": "天平文化",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "唐や大陸各地の文化の影響を受けた、国際色豊かな奈良時代日本の文化の名称は何か。"
  },
  {
    "answer": "慶州",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "新羅の首都はどこか。"
  },
  {
    "answer": "仏国寺",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "新羅の首都の東南に残る、代表的な仏教寺院の名称は何か。"
  },
  {
    "answer": "骨品制",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "新羅の王族と一般貴族だけを対象とした、特権的な氏族的身分制を何と呼ぶか。"
  },
  {
    "answer": "渤海",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "７世紀末、中国東北地方の東部を中心に靺鞨人と高句麗の遺民によって建てられた国は何か。"
  },
  {
    "answer": "大祚栄",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "渤海の建国者は誰か。"
  },
  {
    "answer": "則天武后(武則天)",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "７世紀末、病身の高宗に代わって政権を握った、中国史上で唯一の女帝は誰か。"
  },
  {
    "answer": "周",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "則天武后の即位で成立した国号は何か。"
  },
  {
    "answer": "開元の治",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "玄宗の治世の前半の盛時を、後世にほめ称えたことばは何か。"
  },
  {
    "answer": "募兵制",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "均田制の崩壊にともない、749年に全面的に廃止された府兵制に代わった兵制の名称は何か。"
  },
  {
    "answer": "節度使",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "玄宗のとき、周辺異民族にそなえて辺境10地区に設置された募兵軍団の指揮官を何と呼ぶか。"
  },
  {
    "answer": "楊貴妃",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "玄宗の晩年の愛妃は誰か。"
  },
  {
    "answer": "安史の乱",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "755〜763年、安禄山を中心に、唐を動揺させた反乱は何と呼ばれているか。"
  },
  {
    "answer": "両税法",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "徳宗時代の780年、租調庸制に代わって実施された、夏秋２回、現住地で銭納させる新税制は何か。"
  },
  {
    "answer": "藩鎮",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "安史の乱後、国内各地におかれた節度使が中央政府から自立するようになると、何と呼ばれるようになったか。"
  },
  {
    "answer": "黄巣の乱",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "唐滅亡の契機となった、875年からの農民反乱は何と呼ばれているか。"
  },
  {
    "answer": "朱全忠",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "黄巣の反乱軍に加わったのち、唐に降って反乱鎮圧に活躍し、907年に唐を滅ぼした部将は誰か。"
  },
  {
    "answer": "汴州(開封)",
    "category": "唐と近隣諸国・唐の変容と五代",
    "chapter": "2",
    "number": "18",
    "question": "後唐を除いた五代諸国の首都はどこか。"
  },
  {
    "answer": "突厥",
    "category": "突厥とウイグル・ソグド人",
    "chapter": "2",
    "number": "19",
    "question": "６世紀半ばに台頭し、柔然を滅ぼしてモンゴル高原に大帝国を建てたトルコ系騎馬遊牧民は何か。"
  },
  {
    "answer": "絹馬貿易",
    "category": "突厥とウイグル・ソグド人",
    "chapter": "2",
    "number": "19",
    "question": "中国王朝と突厥やウイグルなどの間で、互いの必要物資を補うために行われた物々交換形式の交易を何というか。"
  },
  {
    "answer": "マニ教",
    "category": "突厥とウイグル・ソグド人",
    "chapter": "2",
    "number": "19",
    "question": "ウイグルが国教とした宗教は何か。"
  },
  {
    "answer": "キルギス",
    "category": "突厥とウイグル・ソグド人",
    "chapter": "2",
    "number": "19",
    "question": "840年、ウイグルの内紛に乗じてこれを滅ぼしたトルコ系遊牧民の名称は何か。"
  },
  {
    "answer": "ソグド人",
    "category": "突厥とウイグル・ソグド人",
    "chapter": "2",
    "number": "19",
    "question": "オアシスの道を中心に、中央ユーラシア一帯におよぶ通称ネットワークを構築したイラン系住民は何か。"
  },
  {
    "answer": "南海郡・桂林郡・象郡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "秦の始皇帝が設置した３郡を全て答えなさい。"
  },
  {
    "answer": "関中",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "函谷関の西側地域で、現在の陝西省渭水盆地の西安を中心とした地域名は何か。"
  },
  {
    "answer": "江南",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "長江下流域の江蘇省南部から浙江省北部のデルタ地帯が広がる地域名は何か。"
  },
  {
    "answer": "アンダーソン",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "仰韶文化の遺跡を発見したスウェーデン人学者は誰か。"
  },
  {
    "answer": "半坡遺跡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "仰韶文化を代表する陝西省西安市にある竪穴式住居の有名な遺跡は何か。"
  },
  {
    "answer": "三足土器（特に鼎や鬲）",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "竜山文化の灰陶に多く見られる土器の形は何か。"
  },
  {
    "answer": "河姆渡遺跡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "長江文明の代表的遺跡の１つで、稲作技術の跡が発見された遺跡（前5000-前3000）は何か。"
  },
  {
    "answer": "良渚文化",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "長江文明の代表的遺跡の１つで、祭祀用の玉器が出土した文化（前3300-前2200）は何か。"
  },
  {
    "answer": "三星堆文化",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "長江文明の代表的遺跡の１つで、「縦目仮面」が有名な新石器時代後期の文化は何か。"
  },
  {
    "answer": "湯王",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "夏の暴君桀王を討ち、殷を立てた人物は誰か。"
  },
  {
    "answer": "紂王",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "「酒池肉林」の故事で有名な横暴をふるい、殷の滅亡を招いた最後の国王は誰か。"
  },
  {
    "answer": "牧野の戦い",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "殷最後の国王が敗れた最後の戦いの名前は何か。"
  },
  {
    "answer": "武王",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "西周を建てた人物は誰か。"
  },
  {
    "answer": "井田法",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "『孟子』に記録されている、西周で実施されたと考えられる、田を９等分しちゅ王は共同耕作した土地制度は何か。"
  },
  {
    "answer": "魯",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "孔子の『春秋』は、山東半島の何という国の年代記か。"
  },
  {
    "answer": "斉の桓公、晋の文公",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "「春秋の五覇」である楚の荘王、呉王の夫差、越王の勾践（後者2人は、秦の穆公・宋の襄公とする説も）の他二名は誰か。"
  },
  {
    "answer": "陰陽家",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "天体の運行と社会現象との関係を解く、鄒衍が大成した諸子百家の学派の名前は何か。"
  },
  {
    "answer": "公孫竜",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "名と実の関係を明らかにする論理学を解く名家を大成した人物は誰か。"
  },
  {
    "answer": "許行",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "農民の立場から農耕の重要性を説く農家を大成した人物は誰か。"
  },
  {
    "answer": "小篆",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "秦の始皇帝が統一した文字は篆書のうち、何という種類か。"
  },
  {
    "answer": "阿房宮",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "秦の始皇帝が建設させた大宮殿の名称は何か。"
  },
  {
    "answer": "兵馬俑",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "秦の始皇帝が造営させた陝西省の陵墓の周辺に埋められていた人馬像のことを何というか。"
  },
  {
    "answer": "蒙恬",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "秦の始皇帝が匈奴の侵入防止を図って派遣した将軍は誰か。"
  },
  {
    "answer": "垓下の戦い",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前206年、劉邦が項羽に勝利した決戦は何か。"
  },
  {
    "answer": "『易経』、『書経』、『詩経』、『礼記』、『春秋』",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "五経を全て答えなさい。"
  },
  {
    "answer": "衛青、霍去病",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前129年、前漢の武帝が匈奴遠征に派遣した人物とその甥の名前を答えなさい。"
  },
  {
    "answer": "李広利",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前104年から前漢の武帝が汗血馬の獲得を図って大宛（フェルガナ）に派遣した人物は誰か。"
  },
  {
    "answer": "楽浪郡、玄菟郡、真番郡、臨屯郡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前漢の武帝が設置した朝鮮四郡を全て答えなさい。"
  },
  {
    "answer": "交趾郡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前漢の武帝が設置した南海九郡のうち、ハノイ付近に設置されたものは何か。"
  },
  {
    "answer": "桑弘羊",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前漢の武帝に仕え、主な経済政策を立案した財務官僚は誰か。"
  },
  {
    "answer": "推恩の令",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前漢の武帝が諸侯の弱体化を図り、諸侯の子弟全てに領地を分け与えることを定めた命令は何か。"
  },
  {
    "answer": "限田策",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "前漢の哀帝が定め、豪族の大土地所有を制限し、小農民の保護を図った政策は何か。"
  },
  {
    "answer": "周",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "新を建国した王莽が理想の政治が行われていた時代と考えた王朝は何か。"
  },
  {
    "answer": "徴姉妹の反乱",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後漢代の40-43年、交阯郡を中心におこり、ベトナム全域に拡大したが後漢の将軍馬援により鎮圧された反乱は何か。"
  },
  {
    "answer": "明帝",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後漢２代目の皇帝で、対外積極策と文化的充実が実現した時代の皇帝は誰か。"
  },
  {
    "answer": "日南郡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "166年、大秦王安敦の使者が訪れた郡はどこか。"
  },
  {
    "answer": "張角",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "黄巾の乱をおこした太平道の首領は誰か。"
  },
  {
    "answer": "『説文解字』",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後漢の許慎による最古の漢字字典で、隷書の普及を示す書物は何か。"
  },
  {
    "answer": "本紀、列伝",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "紀伝体を構成する皇帝年代記と臣下の伝記のことをそれぞれ何というか。"
  },
  {
    "answer": "和帝",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後漢の宦官の蔡倫が改良した製紙法による紙を献上した皇帝は誰か。"
  },
  {
    "answer": "張衡",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後漢代に天球儀や地震感知器を発明した人物は誰か。"
  },
  {
    "answer": "五斗米道",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後漢末に張陵が創始した天師道の別名は何か。"
  },
  {
    "answer": "赤壁の戦い",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "208年、魏が呉と蜀の連合軍に敗れた戦いの名称は何か。"
  },
  {
    "answer": "羌、氐",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "五胡のうち、チベット系とされるものをすべて答えなさい。"
  },
  {
    "answer": "淝水の戦い",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "383年、東晋が五胡十六国の前秦を破り、南北朝の分立が確定した戦いは何か。"
  },
  {
    "answer": "戸調式",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "西晋で実施された一戸ごとに生産物（絹・綿）を徴収する制度は何か。"
  },
  {
    "answer": "土断法",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "東晋で実施された、流民を豪族の勢力下に入れず、公民として編成させることを定めた法律は何か。"
  },
  {
    "answer": "三長制",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "北魏で実施された戸籍調査・財政安定を図る制度は何か。"
  },
  {
    "answer": "慧遠",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "東晋の僧で、道安に師事し、白蓮社を結成した浄土宗の始祖は誰か。"
  },
  {
    "answer": "太武帝",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "道教を体系化した寇謙之を保護し、仏教を弾圧した北魏の皇帝は誰か。"
  },
  {
    "answer": "三武一宗の法難",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "北魏の太武帝、北周の武帝、唐の武宗、後周の世宗による仏教弾圧を総称して何と呼ぶか。"
  },
  {
    "answer": "武帝（蕭衍）",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "南朝文化が全盛期となった梁の建国者で仏教を保護した皇帝は誰か。"
  },
  {
    "answer": "范曄",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "紀伝体で後漢１代を扱った『後漢書』を著した歴史家は誰か。"
  },
  {
    "answer": "謝霊運",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "南朝宋の詩人で山水詩の第一人者は誰か。"
  },
  {
    "answer": "『水経注』",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "魏晋南北朝時代の実学書で、北魏の酈道元が残した地理書は何か。"
  },
  {
    "answer": "『斉民要術』",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "魏晋南北朝時代の実学書で、北魏の賈思勰が残した現存する中国最古の農業書は何か。"
  },
  {
    "answer": "『傷寒論』",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "魏晋南北朝時代の実学書で、後漢の張仲景が著し、王叔和が整理した医学書は何か。"
  },
  {
    "answer": "奴婢",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "隋代の均田制で、耕牛とともに煬帝の時代に給田の対象から外されたのはどのような人々か。"
  },
  {
    "answer": "永済渠",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "煬帝の高句麗遠征に使用された北方に伸びる運河は何か。"
  },
  {
    "answer": "通済渠",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "黄河から淮河にわたる運河で、江南の物資を華北に運送するのに役立った運河は何か。"
  },
  {
    "answer": "天可汗",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "突厥を撃破した李世民が西北アジアの諸騎馬遊牧民族の首長から送られた称号は何か。"
  },
  {
    "answer": "高仙芝",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "タラス河畔の戦いでアッバース朝と戦た唐軍を率いた武将は誰か。"
  },
  {
    "answer": "徳宗",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "780年、宰相の楊炎から両税法を採用した皇帝は誰か。"
  },
  {
    "answer": "王仙芝",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "黄巣の乱を黄巣とともに指導した人物は誰か。"
  },
  {
    "answer": "草市",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "唐代末期、都市の城郭外に開設された簡易の市場のことを何というか。"
  },
  {
    "answer": "飛銭",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "唐代後半の送金手形制度で、銅銭の大量輸送の不便を解消した制度は何か。"
  },
  {
    "answer": "会昌の廃仏",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "唐末期の845年、三武一宗の法難で、道教を信仰した武宗による寺院破壊など仏教弾圧のことを何というか。"
  },
  {
    "answer": "阿羅本",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "635年頃、唐にネストリウス派キリスト教を布教したペルシア人は誰か。"
  },
  {
    "answer": "顔真卿",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "安史の乱に義勇軍を率い唐軍に加わり鎮圧に貢献した唐の書家は誰か。"
  },
  {
    "answer": "『長恨歌』",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "玄宗と楊貴妃の慈悲を描いた中唐の詩人の白居易の作品名は何か。"
  },
  {
    "answer": "王維",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "呉道玄や李思訓と並ぶ唐代の山水画の代表的人物で、「南宋画の祖」とされる人物は誰か。"
  },
  {
    "answer": "石敬瑭",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "後晋の建国者で、契丹に燕雲十六州を割譲した人物は誰か。"
  },
  {
    "answer": "箕子朝鮮",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "朝鮮古代の伝説上の王朝名は何か。"
  },
  {
    "answer": "衛満",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "燕から亡命し、平壌を中心に衛氏朝鮮を建国した人物は誰か。"
  },
  {
    "answer": "丸都",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "3世紀に魏の占領を受けた鴨緑江北岸の高句麗中期の都はどこか。"
  },
  {
    "answer": "靺鞨族",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "渤海を建国した高句麗遺民の民族名は何か。"
  },
  {
    "answer": "白登山の戦い",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "匈奴の全盛期の君主である冒頓単于が、前200年に前漢の高祖に勝利した戦いは何か。"
  },
  {
    "answer": "ノイン・ウラ",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "ウランバートルとキャフタの中間に位置する、匈奴の代表的な王族の遺跡名は何か。"
  },
  {
    "answer": "柔然",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "モンゴル系遊牧民で、4世紀に鮮卑から独立し、烏孫を滅ぼしたが、555年に突厥により滅ぼされた民族は何か。"
  },
  {
    "answer": "可汗",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "柔然が初めて用いた君主の称号は何か。"
  },
  {
    "answer": "オルホン碑文",
    "category": "難関私大対策",
    "chapter": "2",
    "number": "Z",
    "question": "東突厥が残した遊牧民最古の文字を残す碑文の名称は何か。"
  },
  {
    "answer": "マガダ国",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "前６世紀にガンジス川中流域に興り、前５世紀にコーサラ国を併合し、この地域を支配した国の名称は何か。"
  },
  {
    "answer": "ウパニシャッド哲学",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "前6世紀頃のインドで、バラモン教の祭式主義を批判し、内面的思索を重視する思想として成立した哲学を何というか。"
  },
  {
    "answer": "ガウタマ＝シッダールタ",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "シャカ族の王子で、前６〜前５世紀頃に仏教を開いた人物は誰か（尊称：ブッダ）。"
  },
  {
    "answer": "ジャイナ教",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "ヴァルダマーナが開祖である、不殺生主義を標榜する宗教は何か。"
  },
  {
    "answer": "マウリヤ朝",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "前４世紀後半に成立した、インド史上最初の統一国家の王朝は何か。"
  },
  {
    "answer": "チャンドラグプタ王",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "マウリヤ朝の建国者は誰か。"
  },
  {
    "answer": "パータリプトラ",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "マウリヤ朝の首都はどこか。"
  },
  {
    "answer": "アショーカ王",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "マウリヤ朝の全盛期を現出した、第三代の王は誰か。"
  },
  {
    "answer": "ダルマ（法）",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "アショーカ王が政治倫理とし、磨崖碑や石柱碑に詔勅として刻ませたインド思想の概念を何と呼ぶか。"
  },
  {
    "answer": "セイロン島",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "アショーカ王が王子を派遣して、仏教を布教させたとされる地域はどこか。"
  },
  {
    "answer": "クシャーナ朝",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "１〜３世紀にかけて、大月氏の支配から自立したイラン系民族が西北インドに建てた王朝は何か。"
  },
  {
    "answer": "プルシャプラ",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "クシャーナ朝の首都はどこか。"
  },
  {
    "answer": "カニシカ王",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "2世紀にクシャーナ朝の全盛期を現出した王は誰か。"
  },
  {
    "answer": "ガンダーラ美術",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "カニシカ王の治世下に発達した、ギリシア彫刻の影響の強い仏像などがつくられた仏教美術は何と呼ばれるか。"
  },
  {
    "answer": "菩薩信仰",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "大乗仏教で重視された、自らの悟りだけでなく、他者を救うことを理想とする存在への信仰を何というか。"
  },
  {
    "answer": "竜樹(ナーガールジュナ)",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "大乗仏教の理論を体系化し、「空」の思想を説いたことで知られるインドの仏教哲学者は誰か。"
  },
  {
    "answer": "サータヴァーハナ朝",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "前１〜後３世紀にデカン高原を支配し、季節風を利用した交易で繁栄した、ドラヴィダ系アーンドラ族の王朝は何か。"
  },
  {
    "answer": "『エリュトゥラー海案内記』",
    "category": "仏教の成立と南アジアの統一国家",
    "chapter": "3",
    "number": "20",
    "question": "１世紀にギリシア人が書いたとされる、紅海からインド洋にかけての地理・物産の書の名称は何か。"
  },
  {
    "answer": "グプタ朝",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "4世紀前半にチャンドラグプタ1世が北インドを統一して建て、サンスクリット文学や数学などが栄えた王朝は何か。"
  },
  {
    "answer": "パータリプトラ",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝の首都はどこか。"
  },
  {
    "answer": "チャンドラグプタ２世",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝の最盛期を現出した、第三代王は誰か。"
  },
  {
    "answer": "法顕",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝の全盛期、仏教教義の研究のため陸路でインドを訪れ、海路で帰国した東晋時代の中国僧は誰か。"
  },
  {
    "answer": "サンスクリット語",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "梵語とも呼ばれる、古代インドの宗教・文学・学術などで用いられ、グプタ朝時代に古典語として完成した言語は何か。"
  },
  {
    "answer": "カーリダーサ",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝の全盛期を現出したチャンドラグプタ２世の宮廷で活躍した、代表作『シャクンタラー』の詩人・戯曲家は誰か。"
  },
  {
    "answer": "グプタ様式",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝のもとで完成された、純インド的な仏教美術様式を何と呼ぶか。"
  },
  {
    "answer": "アジャンター石窟寺院",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝時代を中心に造営され、壁画などに大乗仏教の影響が見られる、デカン高原西部に位置する仏教遺跡は何か。"
  },
  {
    "answer": "ナーランダー僧院",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝のもとで５世紀に建立された、仏教教学研究の機関の名称は何か。"
  },
  {
    "answer": "エフタル",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "グプタ朝衰退の一因をつくった、中央アジアから進出してきた騎馬遊牧民の名称は何か。"
  },
  {
    "answer": "マヌ法典",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "聖典のないヒンドゥー教において、人びとの生活規範に関する法典とされたものは何か。"
  },
  {
    "answer": "バクティ運動",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "７世紀頃南インドで興った、ヒンドゥー教の最高神に対する絶対帰依をとなえた宗教運動を何と呼ぶか。"
  },
  {
    "answer": "ヴァルダナ朝",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "７世紀前半にハルシャ王によって成立した、北インド最後の統一王朝は何か。"
  },
  {
    "answer": "カナウジ",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "ヴァルダナ朝の首都はどこか。"
  },
  {
    "answer": "『大唐西域記』",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "ヴァルダナ朝時代のインドに赴いた玄奘による旅行記のタイトルは何か。"
  },
  {
    "answer": "『南海寄帰内法伝』",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "義浄がインドから唐に海路で帰国中、シュリーヴィジャヤ王国で記述した旅行記は何か。"
  },
  {
    "answer": "ラージプート",
    "category": "インド古典文化とヒンドゥー教の定着",
    "chapter": "3",
    "number": "21",
    "question": "８〜13世紀初めにかけて、北インド各地に諸王国を建てた人びとは、「王の子」を意味する語で、何と自称したか。"
  },
  {
    "answer": "ドンソン文化",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "青銅製の銅鼓が代表的な、前４世紀頃から東南アジア各地に広がった青銅器・鉄器文化を何と呼ぶか。"
  },
  {
    "answer": "扶南",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "クメール人あるいはマレー人が、１世紀にメコン川下流域に建てた東南アジア最初の国家は、中国名で何と呼ばれたか。"
  },
  {
    "answer": "チャンパー",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "２世紀末、ベトナム中部にチャム人が建てた王国は何か。"
  },
  {
    "answer": "クメール人",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "カンボジア人とも呼ばれる、カンボジア王国を建てたオーストロアジア語系の人びとの別称は何か。"
  },
  {
    "answer": "アンコール＝ワット",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "スールヤヴァルマン２世によってヒンドゥー教寺院として建立され、のちに仏教寺院に改修された建造物の名称は何か。"
  },
  {
    "answer": "ドヴァーラヴァティー王国",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "７〜11世紀頃、チャオプラヤ川下流域にモン人が建てた国の名称は何か。"
  },
  {
    "answer": "スコータイ朝",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "13～15世紀、タイ北部に建てられたタイ人初の統一王朝は何か。"
  },
  {
    "answer": "アユタヤ朝",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "14世紀半ばに成立し、17世紀にタイ国史上最大の領土を支配した王朝は何か。"
  },
  {
    "answer": "上座部仏教",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "チャオプラヤ川、エーヤワディー川流域で信仰されている仏教の宗派は何か。"
  },
  {
    "answer": "ピュー人",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "４世紀頃国家を建国し、ビルマのエアーヤワディー川流域に栄えた民族の名称は何か。"
  },
  {
    "answer": "パガン朝",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "11世紀半ばに成立したが、元軍の侵入を受けて13世紀末に滅亡した、ビルマ最初の統一王朝は何か。"
  },
  {
    "answer": "李朝",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "中国王朝の支配下から自立し、11世紀初めベトナム北部に成立した最初の長期王朝は何か。"
  },
  {
    "answer": "大越国",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "李朝以降のベトナムの国名（国号）は、中国史料で何と表記されたか。"
  },
  {
    "answer": "陳朝",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "13世紀前半～1400年に存続し、元軍の侵攻を撃退した北部ベトナムの王朝は何か。"
  },
  {
    "answer": "字喃",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "陳朝のもとで、漢字の部首を基に考案されて使われたベトナム文字は何か。"
  },
  {
    "answer": "シュリーヴィジャヤ王国",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "７〜14世紀に、マレー人によってスマトラ島を中心に建てられて存在した王国の名称は何か。"
  },
  {
    "answer": "パレンバン",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "シュリーヴィジャヤ王国の都で、スマトラ島東南部の港市はどこか。"
  },
  {
    "answer": "シャイレンドラ朝",
    "category": "東南アジア世界の形成と展開",
    "chapter": "3",
    "number": "22",
    "question": "ボロブドゥールの建造など、８世紀後半に有力となった、ジャワ島中部に建てた王朝は何か。"
  },
  {
    "answer": "ブラフマン",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "ウパニシャッド哲学で説かれた宇宙の根本原理で、「我」（アートマン）と一体とされた「梵」のことをカタカナで何というか。"
  },
  {
    "answer": "八正道",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "仏教において、正しい思想や行いのことを何と呼んでいるか。"
  },
  {
    "answer": "マヒンダ",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "カリンガ王国征服後に仏教に帰依したアショーカ王が、上座部仏教の布教のためセイロン島に派遣した王子の名は何か。"
  },
  {
    "answer": "ストゥーパ",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "アショーカ王の仏教保護の一環で建てられた、特にサーンチーのものが有名なブッダの遺骨を納めた仏塔をカタカナで何というか。"
  },
  {
    "answer": "パーリ語",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "アショーカ王による第３回仏典結集の際使用された言語は何か。"
  },
  {
    "answer": "戒日王",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "ハルシャ王の中国名は何か。"
  },
  {
    "answer": "王玄策",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "吐蕃への対抗のためヴァルダナ朝と協力関係を結ぼうとした唐が派遣した使者の名前は何か。"
  },
  {
    "answer": "ラージプート時代",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "ヴァルダナ朝滅亡からデリー＝スルタン朝成立までの8〜13世紀の間に続いた混乱時代を何というか。"
  },
  {
    "answer": "オケオ遺跡",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "1〜7世紀、扶南のものとされる現在のメコン川下流にあった港市国家の遺跡名が何か。"
  },
  {
    "answer": "林邑・環王・占城",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "チャンパーの中国名を時代ごとに（2-7世紀、8世紀半ば、9世紀後半-17世紀）３つ答えなさい。"
  },
  {
    "answer": "スーリヤヴァルマン2世",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "アンコール朝全盛期の12世紀にヒンドゥー寺院としてアンコール＝ワットを建設した君主は誰か。"
  },
  {
    "answer": "ジャヤヴァルマン７世",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "13世紀のアンコール朝の王で、大乗仏教に帰依し、アンコール＝ワットを仏教寺院に変更した君主は誰か。"
  },
  {
    "answer": "ドヴァーラヴァティー王国",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "6-11世紀、チャオプラヤ川下流域にモン人が建国し、唐に朝貢し、上座部仏教を信仰した国家はどこか。"
  },
  {
    "answer": "室利仏逝",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "シュリーヴィジャヤ王国の中国名（7-9世紀）は何か。"
  },
  {
    "answer": "プランバナン",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "ロロジョングランと呼ばれる寺院遺跡で有名な、ジャワ島中部に残るヒンドゥー教寺院群は何か。"
  },
  {
    "answer": "クディリ朝",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "ジャワ島東部に成立し、ジャワ語翻訳版『マハーバーラタ』の影絵芝居が発展した王朝(928-1222)は何か。"
  },
  {
    "answer": "シンガサリ王国",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "13世紀に元のクビライの使者を追い返し、ジャワ島遠征を招き滅亡した王朝(1222-1292)は何か。"
  },
  {
    "answer": "マジャパヒト王国",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "ジャワ島最後のヒンドゥー教国(1293-1520)は何か。"
  },
  {
    "answer": "ガジャ＝マダ",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "マジャパヒト王国で、14世紀にハヤム＝ウルク王に仕え、全盛期を現出した宰相は誰か。"
  },
  {
    "answer": "アルブケルケ",
    "category": "難関私大対策",
    "chapter": "3",
    "number": "Z",
    "question": "マラッカ王国を1511年に滅ぼしたポルトガルの2代目インド総督は誰か。"
  },
  {
    "answer": "スサ",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "アケメネス朝ペルシアの行政上の都はどこか。"
  },
  {
    "answer": "キュロス２世",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "メディアから自立を達成した、アケメネス朝ペルシアの建国者は誰か。"
  },
  {
    "answer": "カンビュセス２世",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "全オリエントを統一した、アケメネス朝ペルシアの王は誰か。"
  },
  {
    "answer": "ダレイオス１世",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "東はインダス川から西はエーゲ海東部にいたる大帝国を建設した、アケメネス朝全盛期の王は誰か。"
  },
  {
    "answer": "サトラップ",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ダレイオス１世が任命した、アケメネス朝の州の軍民両権を握る知事は何と呼ばれたか。"
  },
  {
    "answer": "「王の目・王の耳」",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "州を巡察してサトラップを監察する、王直属の行政官を何と呼ぶか。"
  },
  {
    "answer": "ペルセポリス",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ダレイオス１世が建設を開始した、祭祀用の王都の名称は何か。"
  },
  {
    "answer": "「王の道」",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ダレイオス１世が建設した、駅伝制が整備されたスサからサルデスにわたる国道を何と呼ぶか。"
  },
  {
    "answer": "アレクサンドロス大王",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "アケメネス朝はギリシア世界の誰との戦いに敗れたことによって滅亡したか。"
  },
  {
    "answer": "ペルシア戦争",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "帝国の混乱・衰退の原因ともなった、ギリシア諸ポリスとの戦争を何というか。"
  },
  {
    "answer": "アフラ＝マズダ",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ゾロアスター教の最高神で、光明・善の神とされるものの名称は何か。"
  },
  {
    "answer": "アンラ＝マンユ(アーリマン)",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ゾロアスター教の最高神と対立する、暗黒・悪の神の名称は何か。"
  },
  {
    "answer": "ミトラ教",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ローマ帝政期に軍人を中心に流行した、光明神を崇拝するインド・イラン起源の密儀宗教の名称は何か。"
  },
  {
    "answer": "ローリンソン",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ベヒストゥーン碑文をもとに、楔形文字の解読に成功したイギリス人学者は誰か。"
  },
  {
    "answer": "セレウコス朝",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "アレクサンドロス大王の死後、イラン高原を含む西アジアの大半を支配した後継の王朝は何か。"
  },
  {
    "answer": "バクトリア",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "前３世紀半ば、セレウコス朝の支配から自立して、アム川上流でギリシア系住民が建てた国は何か。"
  },
  {
    "answer": "安息",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "パルティアの中国史書での呼び方は何か。"
  },
  {
    "answer": "ヘカトンピュロス",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "パルティア建国時の首都はどこか。"
  },
  {
    "answer": "クテシフォン",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "パルティア全盛期の王ミトラダテス１世により、パルティアの都はどこに遷都されたか。"
  },
  {
    "answer": "アルダシール１世",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ササン朝ペルシア初代王は誰か。"
  },
  {
    "answer": "ウァレリアヌス",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "3世紀にササン朝のシャープール1世との戦いに敗れ、ローマ皇帝として初めて敵国の捕虜となった人物は誰か。"
  },
  {
    "answer": "シャープール１世",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "西方でローマ皇帝を捕虜とした、パルティア第２代国王は誰か。"
  },
  {
    "answer": "ニハーヴァンドの戦い",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "642年イスラーム軍に大敗し、ササン朝の事実上の滅亡につながった戦いは何か。"
  },
  {
    "answer": "『アヴェスター』",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "ホスロー１世時代に集大成された、ゾロアスター教の教典の名称は何か。"
  },
  {
    "answer": "マニ教",
    "category": "イラン諸国家の興亡とイラン文明",
    "chapter": "4",
    "number": "23",
    "question": "シャープール１世に重用された人物が創始した、ゾロアスター教にキリスト教・仏教を融合した宗教は何か。"
  },
  {
    "answer": "シノイキスモス",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "前８世紀頃のギリシアで、有力者（貴族）が中心となって軍事的・経済的要地へ移住したことをカタカナで何と称するか。"
  },
  {
    "answer": "アクロポリス",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "「城山」の意味で、ポリスの中心部にあり、市の守護神がまつられていた丘をカタカナで何と呼ぶか。"
  },
  {
    "answer": "ビザンティオン",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "ボスフォラス海峡に面してギリシア人が建設した、現在のイスタンブルの前身となった植民市はどこか。"
  },
  {
    "answer": "マッサリア",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "南フランスのローヌ河口近くにギリシア人が建設した、現在のマルセイユの前身となった植民市の名前は何か。"
  },
  {
    "answer": "ネアポリス",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "南イタリアにギリシア人が建設した、現在のナポリの前身となった植民市の名前は何か。"
  },
  {
    "answer": "ヘレネス",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "古代ギリシア人は何と自称したか。"
  },
  {
    "answer": "バルバロイ",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "古代ギリシア人は異民族を蔑視して何と呼んだか。"
  },
  {
    "answer": "デルフォイ",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "中部ギリシアに位置し、そのアポロン神殿の神託が権威をもっていた聖地はどこか。"
  },
  {
    "answer": "クレーロス",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "元来は「くじ」という意味で、ギリシア人が定住後、くじで分配された私有地（持ち分地）を何と呼ぶか。"
  },
  {
    "answer": "アゴラ",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "アクロポリスのふもとにあり、ポリスの政治・経済活動の中心であった公共広場を何と呼ぶか。"
  },
  {
    "answer": "武器を自弁して戦うこと/アテネ市民の成年男子であること",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "貴族政中心の古代アテネにて、政治に参加できる市民とされるために必要とされた条件を一つ答えなさい。"
  },
  {
    "answer": "ペリオイコイ",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "「周辺民」の意味で、農業・商工業に従事した、参政権のないスパルタの半自由民は何と呼ばれたか。"
  },
  {
    "answer": "ヘイロータイ",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "スパルタにおいて完全市民に共有された、隷属農民は何と呼ばれたか。"
  },
  {
    "answer": "リュクルゴス",
    "category": "ポリスの形成とギリシア社会の特色",
    "chapter": "4",
    "number": "24",
    "question": "スパルタの独特な軍国主義体制を確立したとされる、伝説的立法者は誰か。"
  },
  {
    "answer": "アルコン",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "アテネ貴族政で行政をになった９人の執政官のことをカタカナで何と呼ぶか。"
  },
  {
    "answer": "ファランクス",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "古代ギリシアで、青銅の鎧や盾を自弁して戦った重装歩兵の、密集隊形のことを何というか。"
  },
  {
    "answer": "ドラコン",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "前７世紀後半のアテネで、従来の慣習法を成文化した立法者は誰か。"
  },
  {
    "answer": "財産政治",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "ソロンが行った、財産によって市民を４等級に分け、参政権と兵役義務を定めた政治は、何と呼ばれるか。"
  },
  {
    "answer": "債務奴隷",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "市民の人口減少を防ぐために、ソロンが禁止したこととは何か。"
  },
  {
    "answer": "僭主",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "貴族政から民主政への過渡期に出現した、非合法な手段で政権を握った独裁者を何と呼ぶか。"
  },
  {
    "answer": "ペイシストラトス",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "前561年より３度にわたって僭主となり、中小農民の保護・育成や文化事業にも力を注いだ人物は誰か。"
  },
  {
    "answer": "クレイステネス",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "前６世紀末、血縁的部族制の廃止などの改革を行い、アテネ民主政の基礎を確立した政治家は誰か。"
  },
  {
    "answer": "オストラキスモス",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "クレイステネスが創設した、僭主の出現を防止するための、市民による投票制度をカタカナで何というか。"
  },
  {
    "answer": "イオニア植民市",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "ペルシア戦争のきっかけとなった反乱は、小アジアのどこの植民市でおこったか。"
  },
  {
    "answer": "マラトンの戦い",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "前490年、アテネ北東岸に上陸したペルシア軍を、アテネ重装歩兵軍が破った戦いを何と呼ぶか。"
  },
  {
    "answer": "テルモピレーの戦い",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "前480年、第３回のペルシア戦争で、ギリシア半島中部でスパルタ軍がペルシア軍に大敗した戦いを何と呼ぶか。"
  },
  {
    "answer": "三段櫂船",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "古代ギリシアで用いられ、ペルシア戦争のサラミス海戦などで活躍した軍船を何というか。"
  },
  {
    "answer": "プラタイアの戦い",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "前479年、アテネ・スパルタ連合軍がペルシア陸軍を破り、ギリシア側の勝利を確定した戦いを何と呼ぶか。"
  },
  {
    "answer": "デロス同盟",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "ペルシアの再侵攻にそなえ、前478年頃アテネを盟主に結成された軍事同盟は何か。"
  },
  {
    "answer": "無産市民",
    "category": "アテネの民主政とペルシア戦争",
    "chapter": "4",
    "number": "25",
    "question": "サラミスの海戦の際、三段櫂船の漕ぎ手として貢献し、戦後に発言権を増大させたのはどのような人びとか。"
  },
  {
    "answer": "ペリクレス",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "前５世紀後半、アテネの全盛期を現出し、古代民主政を完成させた政治家は誰か。"
  },
  {
    "answer": "ラウレイオン銀山",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "古代アテネが強力な艦隊を建設する資金源とした、アッティカ地方南部にある銀山はどこか。"
  },
  {
    "answer": "ペロポネソス同盟",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "アテネの強勢化に対抗して、スパルタを盟主に強化された軍事同盟を何と呼ぶか。"
  },
  {
    "answer": "衆愚政治",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "ペロポネソス戦争のあいだにペリクレスが死亡し、混乱・腐敗したアテネの民主政治を何と呼ぶか。"
  },
  {
    "answer": "テーベ",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "ポリス間抗争のなか、エパメイノンダスの指導でスパルタを破り、前４世紀前半に覇権を握ったポリスは何か。"
  },
  {
    "answer": "傭兵",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "長期にわたるポリス間抗争で市民の没落が進むと、市民皆兵の原則が崩れ、何が軍の中心となったか。"
  },
  {
    "answer": "パルテノン神殿",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "ペリクレスによって再建された、アテネのアクロポリスのアテナ女神神殿は一般に何と呼ばれるか。"
  },
  {
    "answer": "フィリッポス２世",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "前４世紀にマケドニアの勢力を拡大した王で、アレクサンドロス大王の父は誰か。"
  },
  {
    "answer": "カイロネイアの戦い",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "フィリッポス２世がアテネ・テーベ連合軍を撃破し、ギリシア諸ポリスをほぼ制圧した戦いを何と呼ぶか。"
  },
  {
    "answer": "コリントス同盟",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "マケドニアが盟主となり、スパルタを除く全ポリスと結んだ同盟は何か。"
  },
  {
    "answer": "前334年",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "アレクサンドロス大王が東方遠征を始めたのは西暦何年か。"
  },
  {
    "answer": "アルベラ(ガウガメラ)の戦い",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "前331年、アレクサンドロス大王の軍がアケメネス朝軍との決戦に勝利した戦いの名称は何か。"
  },
  {
    "answer": "コスモポリタニズム(世界市民主義)",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "ポリス社会の枠を越えた、より普遍的かつ個人主義的な傾向をもつヘレニズム時代の考え方を何と呼ぶか。"
  },
  {
    "answer": "ディアドコイ",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "アレクサンドロスの死後、「後継者」をめざして分立・抗争した部下の有力者たちは何と呼ばれたか。"
  },
  {
    "answer": "アンティゴノス朝マケドニア",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "大帝国の分裂後、アレクサンドロスの部下の孫が建てたマケドニア王国の王朝名は何か。"
  },
  {
    "answer": "セレウコス朝シリア",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "大帝国の分裂後、アレクサンドロスの部下の一人が建てたシリア王国の王朝名は何か。"
  },
  {
    "answer": "プトレマイオス朝エジプト",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "大帝国の分裂後、アレクサンドロスの部下の一人が建てたエジプト王国の王朝名は何か。"
  },
  {
    "answer": "ムセイオン",
    "category": "ポリス社会の変容とヘレニズム時代",
    "chapter": "4",
    "number": "26",
    "question": "エジプトのアレクサンドリアに開設され、自然科学研究の中心となった王立研究所は何と呼ばれるか。"
  },
  {
    "answer": "ホメロス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "『イリアス』『オデユッセイア』の作者または編者とされる詩人は誰か。"
  },
  {
    "answer": "ヘシオドス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "『神統記』『労働と日々』などを著し、神々の系譜や農民の勤労の尊さをうたった、古代ギリシアの叙事詩人は誰か。"
  },
  {
    "answer": "アイスキュロス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "代表作『アガメムノン』を著した、アテネ三大悲劇詩人の一人は誰か。"
  },
  {
    "answer": "ソフォクレス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "代表作『オイディプス王』を著した、アテネ三大悲劇詩人の一人は誰か。"
  },
  {
    "answer": "エウリピデス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "代表作『メデイア』を著した、アテネ三大悲劇詩人の一人は誰か。"
  },
  {
    "answer": "ヘロドトス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "小アジア出身で、ペルシア戦争を物語的に叙述し、『歴史』を著して「歴史の父」と呼ばれる人物は誰か。"
  },
  {
    "answer": "トゥキディデス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "ペロポネソス戦争を史料批判に基づいた『歴史』に著した、アテネ出身の歴史家は誰か。"
  },
  {
    "answer": "タレス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "「哲学の父」と称される、万物の根源を「水」と考え、また日食を予言した哲学者は誰か。"
  },
  {
    "answer": "ヘラクレイトス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "「万物は流転する」のことばを残し、「火」を変化の象徴とした哲学者は誰か。"
  },
  {
    "answer": "デモクリトス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "万物の根源を等質不変の「原子（アトム）」と主張した哲学者は誰か。"
  },
  {
    "answer": "ピタゴラス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "「万物の根源は数である」と考え、数学と哲学を結びつけた古代ギリシアの哲学者は誰か。"
  },
  {
    "answer": "プロタゴラス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "「万物の尺度は人間」といったことばを残したソフィストの代表的な人物は誰か。"
  },
  {
    "answer": "「万物の尺度は人間」",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "絶対的な真理ではなく相対的な真理を主張したプロタゴラスの言葉として有名な命題は何か。"
  },
  {
    "answer": "ソクラテス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "問答法を通じて「無知の知」を自覚させる方法を実践し、普遍的真理の存在を説いた哲学者は誰か。"
  },
  {
    "answer": "プラトン",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "ソクラテスの弟子で、真に存在するのは善や美というイデアであると説いた哲学者は誰か。"
  },
  {
    "answer": "アリストテレス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "プラトンの弟子で、諸学の集大成者として「万学の祖」と呼ばれ、後世に大きな影響を及ぼした哲学者は誰か。"
  },
  {
    "answer": "アカデメイア",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "古代ギリシアの哲学者プラトンがアテネ郊外に創設した学園で、のちの哲学教育の礎となった機関は何か。"
  },
  {
    "answer": "リュケイオン",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "アリストテレスがアテネに設立し、逍遥学派の拠点となった教育機関は何か。"
  },
  {
    "answer": "フェイディアス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "古代アテネで活躍し、パルテノン神殿のアテナ像やゼウス像の制作で知られる彫刻家は誰か。"
  },
  {
    "answer": "ヒッポクラテス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "「医学の父」と称され、病気を神の呪いではなく自然現象と捉えた古代ギリシアの医者は誰か。"
  },
  {
    "answer": "ムセイオン",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "エジプトのアレクサンドリアに開設され、自然科学研究の中心となった王立研究所は何と呼ばれるか。"
  },
  {
    "answer": "エウクレイデス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "ムセイオンで学び、平面幾何学を大成したギリシアの数学者は誰か。"
  },
  {
    "answer": "アリスタルコス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "地球の公転と自転、太陽中心説を主張した、ギリシア出身の天文学者は誰か。"
  },
  {
    "answer": "アルキメデス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "ムセイオンで学び、浮力の原理を発見した、シチリア島のシラクサ出身の数学・物理学者は誰か。"
  },
  {
    "answer": "エラトステネス",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "ムセイオンの館長を務め、地球の周囲の長さを計測した、北アフリカ出身のギリシア人天文学者は誰か。"
  },
  {
    "answer": "ストア派",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "禁欲による幸福の追求と、理性によって生きることの大切さを説いた、ヘレニズム時代の哲学の一派を何と呼ぶか。"
  },
  {
    "answer": "エピクロス派",
    "category": "ギリシアの生活と文化",
    "chapter": "4",
    "number": "27",
    "question": "精神的な快楽を得ることを重視した哲学者の名前に由来する、ヘレニズム時代の哲学の一派を何と呼ぶか。"
  },
  {
    "answer": "エトルリア人",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "北イタリアのトスカナ地方に定住し、前７世紀末にローマを支配した、系統不明の半島の先住民は何と呼ばれるか。"
  },
  {
    "answer": "ラテン人",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "前８世紀に都市国家ローマを建設したとされる人びとを何と呼ぶか。"
  },
  {
    "answer": "ティベル川",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "都市国家ローマの象徴で、市内を流れる川は何か。"
  },
  {
    "answer": "パトリキ",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "共和政の要職を独占した、完全な市民権をもつ大土地所有者であるローマの貴族を何というか。"
  },
  {
    "answer": "元老院",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "任期終身の300人の貴族で構成された、ローマ共和政最高の諮問機関を何と呼ぶか。"
  },
  {
    "answer": "コンスル",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "２名で構成され、任期１年で無給の、行政・軍事を担当した最高公職者は何と呼ばれたか。"
  },
  {
    "answer": "ディクタトル",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "非常時にローマ共和政で任命され、半年間の強大な権限を与えられた官職は何か。"
  },
  {
    "answer": "プレブス",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "中小土地所有農民と商工業者からなり、貴族に対して身分闘争を展開したローマの平民を何というか。"
  },
  {
    "answer": "護民官",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "伝承では前494年の設置とされる、平民会で選出された、平民保護のための官職を何と呼ぶか。"
  },
  {
    "answer": "平民会",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "民会の一つで、前５世紀前半に開設され、平民のみで構成された議決機関を何と呼ぶか。"
  },
  {
    "answer": "十二表法",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "貴族に対する平民の闘争のなか、前５世紀半ばに旧来の慣習法を明文化し、公開したローマ最古の成文法は何か。"
  },
  {
    "answer": "リキニウス・セクスティウス法",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "前367年、コンスルの１名を平民から選出することを制定した法は何か。"
  },
  {
    "answer": "ホルテンシウス法",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "平民会の決議は元老院の承認がなくとも国法とされることを定めた法は何か。"
  },
  {
    "answer": "前287年",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "ローマにおいて、民主共和政が成立したのは西暦何年か。"
  },
  {
    "answer": "タレントゥム",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "ローマは、イタリア半島南部のどこを征服したことにより半島の統一を達成したか。"
  },
  {
    "answer": "アッピア街道",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "ローマでは道路網が整備されたが、ローマから南東部に伸びる、最古の軍用道路の名称は何か。"
  },
  {
    "answer": "分割統治",
    "category": "ローマ共和政",
    "chapter": "4",
    "number": "28",
    "question": "征服したイタリア半島の諸都市を支配するために、ローマが用いた統治方法を何というか。"
  },
  {
    "answer": "シチリア島",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "共和政ローマにおいて、初の属州はどこか。"
  },
  {
    "answer": "ハンニバル",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "第２回ポエニ戦争の際、現在のスペインから出発し、カンネーでローマ軍に大勝したカルタゴの将軍は誰か。"
  },
  {
    "answer": "スキピオ",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "前202年、カルタゴの本拠地を襲い、カルタゴ軍に圧勝して第２回ポエニ戦争をローマの勝利に導いた将軍は誰か。"
  },
  {
    "answer": "ザマの戦い",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "第２回ポエニ戦争で、スキピオがカルタゴ軍を破った戦いは何と呼ばれるか。"
  },
  {
    "answer": "ラティフンディア",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "第２回ポエニ戦争以降急速に発達した、奴隷を使用してブドウなどの栽培をする大土地所有の経営を何と呼ぶか。"
  },
  {
    "answer": "パンと見世物",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "無産市民となって都市へ流入した農民に、ローマの為政者が与えた施策を示すことばは何か。"
  },
  {
    "answer": "自作農",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "グラックス兄弟の改革は何を増やすための改革を実行したのか。"
  },
  {
    "answer": "マリウス",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "ユグルタ戦争を鎮圧して台頭し、平民派を形成して一時政権を握り軍政改革を行なった政治家は誰か。"
  },
  {
    "answer": "スラ",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "同盟市戦争を鎮圧し、さらに小アジアから帰国したのち平民派を弾圧した、閥族派の政治家は誰か。"
  },
  {
    "answer": "スパルタクス",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "前73〜前71年におこった大奴隷反乱を指導した、トラキア出身の剣闘士は誰か。"
  },
  {
    "answer": "ポンペイウス、カエサル、クラッスス",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "第１回三頭政治を担った人物を三名答えなさい。"
  },
  {
    "answer": "ガリア",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "カエサルの名声を高めることとなった、彼の遠征先はどこか。"
  },
  {
    "answer": "ブルートゥス",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "前45年に元老院からインペラトルの称号を贈られたカエサルの独裁に反対し、彼を暗殺した共和主義者は誰か。"
  },
  {
    "answer": "レピドゥス",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "第２回三頭政治から早々に離脱を余儀なくされた人物は誰か。"
  },
  {
    "answer": "クレオパトラ",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "プトレマイオス朝最後の女王は誰か。"
  },
  {
    "answer": "アクティウムの海戦",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "オクタウィアヌスがアントニウスとエジプトの連合軍を撃破した戦いは何か。"
  },
  {
    "answer": "前31年",
    "category": "ポエニ戦争と内乱の１世紀",
    "chapter": "4",
    "number": "29",
    "question": "オクタウィアヌスがアントニウスとエジプトの連合軍を撃破した戦いは西暦何年の出来事か。"
  },
  {
    "answer": "アウグストゥス",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "元老院がオクタウィアヌスに贈った尊称で、以後、歴代皇帝の称号とされたものは何か。"
  },
  {
    "answer": "前27年",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ローマの帝政が始まったとされるのは西暦何年からか。"
  },
  {
    "answer": "プリンケプス",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "オクタウィアヌスは「第一の市民」を自称した。「元首」と訳されるこの称号は何か。"
  },
  {
    "answer": "トラヤヌス",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ダキアを属州とし、ローマ帝国の最大版図を実現した五賢帝の２番目の皇帝は誰か。"
  },
  {
    "answer": "マルクス＝アウレリウス＝アントニヌス",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ストア哲学を学び「哲人皇帝」と呼ばれ、中国史書では「大秦王安敦」と記された五賢帝最後の皇帝は誰か。"
  },
  {
    "answer": "ウィンドボナ",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "現在のウィーンにあたる、ローマ帝国がドナウ川流域に築いた軍事拠点都市はどこか。"
  },
  {
    "answer": "ルテティア",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "現在のパリにあたる、ローマ時代にガリア人の一部族が住んでいた都市はどこか。"
  },
  {
    "answer": "ロンディニウム",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "現在のロンドンにあたる、ローマ帝国時代にブリタニアに築かれた都市はどこか。"
  },
  {
    "answer": "帝国内の全自由民",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "カラカラ帝によるアントニヌス勅令によって、市民権が付与される対象は誰になったか。"
  },
  {
    "answer": "コロナトゥス",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ラティフンディアに代わり、隷属的小作人を使用する土地経営が拡大した。この経営形態を何と呼ぶか。"
  },
  {
    "answer": "軍人皇帝時代",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "3世紀にローマ帝国で各地の軍司令官が次々と皇帝となり、内乱と混乱が続いた時代を何というか。"
  },
  {
    "answer": "ディオクレティアヌス",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "最後の軍人皇帝で、キリスト教を迫害した人物は誰か。"
  },
  {
    "answer": "四帝分治制（テトラルキア）",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ディオクレティアヌスは、広大なローマ帝国をどのような方法で統治しようとしたか。"
  },
  {
    "answer": "コンスタンティヌス帝",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "313年にキリスト教の公認を行い、その後324年に帝国を再統一した皇帝は誰か。"
  },
  {
    "answer": "ミラノ勅令",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "313年、ローマ帝国がキリスト教を公認した際に発布したものは何か。"
  },
  {
    "answer": "コンスタンティノープル",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "330年、ローマ帝国の首都は旧ビザンティウムに遷都された。遷都後、この都市は何と改称されたか。"
  },
  {
    "answer": "ゲルマン人",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ローマ帝国の衰退をもたらすことになった、375年以降本格的に帝国に侵入した民族は何か。"
  },
  {
    "answer": "テオドシウス帝",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "キリスト教を国教化し、また死に際して帝国を東西に分けた皇帝は誰か。"
  },
  {
    "answer": "392年",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "ローマ帝国がキリスト教を国教化したのは西暦何年か。"
  },
  {
    "answer": "オドアケル",
    "category": "帝政ローマ",
    "chapter": "4",
    "number": "30",
    "question": "476年に西ローマ帝国を滅ぼした、帝国に仕えていたゲルマン人傭兵隊長は誰か。"
  },
  {
    "answer": "セネカ",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "ネロ帝の師で、のちに死を強制された、代表作『幸福論』のストア派哲学者は誰か。"
  },
  {
    "answer": "『自省録』",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "哲人皇帝マルクス＝アウレリウス＝アントニヌスが、ギリシア語で書いた著作の名称は何か。"
  },
  {
    "answer": "ウェルギリウス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "ローマ建国にまつわる叙事詩『アエネイス』を著した、古代ローマ最大の詩人は誰か。"
  },
  {
    "answer": "リウィウス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "アウグストゥスに委嘱されて『ローマ建国史』を著した、ローマの歴史家は誰か。"
  },
  {
    "answer": "『ガリア戦記』",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "古ケルト・古ゲルマン研究の重要史料でもある、カエサルが著した遠征記録を何というか。"
  },
  {
    "answer": "タキトゥス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "古ゲルマン研究の最重要史料である著書や、ローマ政治史の『年代記』の著者は誰か。"
  },
  {
    "answer": "プルタルコス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "ギリシアとローマの英雄的人物を比較評論した伝記の『対比列伝』を著した、ギリシア人作家は誰か。"
  },
  {
    "answer": "ストラボン",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "前１〜後１世紀の、史料的な地誌の『地理誌』を著したギリシア人地理学者は誰か。"
  },
  {
    "answer": "万民法",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "ローマ領の拡大にともない、市民法から発達し、すべての人に適用されるようになった法を何と呼ぶか。"
  },
  {
    "answer": "トリボニアヌス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "『ローマ法大全』の編纂事業の中心となった東ローマ（ビザンツ）の法学者は誰か。"
  },
  {
    "answer": "ユスティニアヌス大帝",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "『ローマ法大全』の編纂を命じた東ローマ（ビザンツ）の皇帝は誰か。"
  },
  {
    "answer": "コロッセウム",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "剣闘士の試合などが行われた、ローマの円形闘技場を何と呼ぶか。"
  },
  {
    "answer": "アッピア街道",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "ローマでは道路網が整備されたが、ローマから南東部に伸びる、最古の軍用道路の名称は何か。"
  },
  {
    "answer": "ガール水道橋",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "南フランスに建築された、３層アーチからなり、上が水道、中・下が人馬道の水道橋の名称は何か。"
  },
  {
    "answer": "プリニウス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "１世紀に、膨大な百科全書の『博物誌』を著し、ウェスウィウス火山噴火の際に殉職した人物は誰か。"
  },
  {
    "answer": "『天文学大全』",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "2世紀にプトレマイオスが著した、天動説を体系化した天文学書の名称は何か。"
  },
  {
    "answer": "アウグスティヌス",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "北アフリカの司教で、カトリックの教義確立に大きく貢献した、ローマ帝政末期最大の教父は誰か。"
  },
  {
    "answer": "『告白録』",
    "category": "ローマの生活と文化",
    "chapter": "4",
    "number": "31",
    "question": "アウグスティヌスが、青年期に帰依したマニ教から回心してキリスト教に辿りつくまでを描いた自伝の名称は何か。"
  },
  {
    "answer": "イエス",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "神の絶対愛と隣人愛を説き、形式主義のユダヤ教を批判したのは誰か。"
  },
  {
    "answer": "パリサイ派",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "ユダヤ教徒のなかで、モーセの律法の遵守を主張し、宗教儀礼を極端に重視した一派は何と呼ばれたか。"
  },
  {
    "answer": "ピラト",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "イエスを帝国への反逆者として処刑した、ローマ属州ユダヤの総督は誰か。"
  },
  {
    "answer": "ペテロ",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "「第１使徒」と呼ばれ、ローマ伝道に力をつくしたがネロ帝の迫害で殉教した人物は誰か。"
  },
  {
    "answer": "パウロ",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "パリサイ派に属していたが回心してキリスト教徒となり、「異邦人伝道の使徒」と呼ばれた人物は誰か。"
  },
  {
    "answer": "コイネー",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "『新約聖書』は何という言語で書かれたか。"
  },
  {
    "answer": "ネロ帝",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "１世紀後半、ローマの大火の責任をキリスト教徒に課し、彼らを迫害した皇帝は誰か。"
  },
  {
    "answer": "カタコンベ",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "迫害を受けていた初期キリスト教時代の、避難所・礼拝堂としても利用された地下墓所を何というか。"
  },
  {
    "answer": "ニケーア公会議",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "325年、教義統一のためコンスタンティヌス帝が招集した、キリスト教会最初の公会議の名称は何か。"
  },
  {
    "answer": "アタナシウス派",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "コンスタンティヌス帝によって開かれた325年の公会議で、正統教義と認められたのは何派か。"
  },
  {
    "answer": "三位一体説",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "アタナシウス派はイエスの神性を強く認め、のちにある説へと発展する。この説は何と呼ばれるか。"
  },
  {
    "answer": "アリウス派",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "コンスタンティヌス帝によって開かれた325年の公会議で、異端とされたのは何派か。"
  },
  {
    "answer": "ユリアヌス",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "ギリシア古典とミトラ教に心酔し、異教復興を企て、教会から「背教者」と呼ばれた４世紀の皇帝は誰か。"
  },
  {
    "answer": "エフェソス公会議",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "431年、ネストリウス派が異端とされた、小アジア西岸の町で開かれた公会議の名称は何か。"
  },
  {
    "answer": "カルケドン公会議",
    "category": "キリスト教の成立と発展",
    "chapter": "4",
    "number": "32",
    "question": "451年、単性論が異端とされた、コンスタンティノープルの対岸の町で開かれた公会議の名称は何か。"
  },
  {
    "answer": "アラブ人",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "セム語系のアラビア語を母語とした、アラビア半島の先住民は何か。"
  },
  {
    "answer": "メッカ",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "アラビア半島西部のヒジャーズ地方に位置し、古来から宗教都市・商業都市として栄えていたのはどこか。"
  },
  {
    "answer": "カーバ神殿",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "アラビア半島の多神教信仰の中心として、古来からの聖石や聖像を納めていた、メッカの聖殿は何か。"
  },
  {
    "answer": "クライシュ族",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "５世紀末にメッカを征服し定住した、ムハンマドが属する名門一族の名称は何か。"
  },
  {
    "answer": "アッラー",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "イスラームにおける唯一神をアラビア語で何と呼ぶか。"
  },
  {
    "answer": "622年",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "ヒジュラは西暦何年の出来事か。"
  },
  {
    "answer": "メディナ",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "ムハンマドは大商人の迫害を受けてメッカの北方の都市ヤスリブに移住した。この都市はその後、何と呼ばれたか。"
  },
  {
    "answer": "ウンマ",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "ムハンマドの移住後に成立したイスラーム教徒の共同体（教団国家）を何と呼ぶか。"
  },
  {
    "answer": "預言者",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "ムハンマドのように神の言葉（啓示）を受けた人を何と呼ぶか。"
  },
  {
    "answer": "ムスリム",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "イスラーム教徒のことを指し、「神に帰依する者」を意味するアラビア語は何か。"
  },
  {
    "answer": "『コーラン』",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "ムハンマドの死後、650年頃に編纂されたイスラーム教の聖典は何か。"
  },
  {
    "answer": "ウラマー",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "神学・法学などのイスラーム諸学につうじていた、イスラームの学者（知識人）を何と呼ぶか。"
  },
  {
    "answer": "六信五行",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "ムスリムが信者として信仰し、行うべきことの基本を何と総称するか。"
  },
  {
    "answer": "聖戦（ジハード）",
    "category": "イスラーム教の成立",
    "chapter": "5",
    "number": "33",
    "question": "異教徒に対する、イスラーム教徒の戦いを何と呼ぶか。"
  },
  {
    "answer": "正統カリフ",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ムハンマドの死後、信徒の選挙で選出された４代にわたる後継者は、とくに何と呼ばれるか。"
  },
  {
    "answer": "アブー＝バクル",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ムハンマドの義父で、初代後継者として選出されたのは誰か。"
  },
  {
    "answer": "ミスル",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "アラブ人イスラーム教徒が家族をともなって移住し建設した軍営都市は、何と呼ばれるか。"
  },
  {
    "answer": "マワーリー",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ウマイヤ朝時代、とくにイラン人に多かった、非アラブ人のイスラーム教改宗者は何と呼ばれたか。"
  },
  {
    "answer": "ズィンミー",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "庇護民を意味し、ムスリムの支配下で一定の保護を認められた非ムスリムを何と呼んだか。"
  },
  {
    "answer": "ハラージュ",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "初めは征服地の住民に対して、のちアラブ人にも課したイスラーム世界の地租を何と呼ぶか。"
  },
  {
    "answer": "ジズヤ",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "初めは聖典をもつ民に対して、正統カリフ時代以後はすべての異教徒に対して課した、人頭税の呼称は何か。"
  },
  {
    "answer": "アリー",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ムハンマドの娘婿で、暗殺された第４代正統カリフは誰か。"
  },
  {
    "answer": "ムアーウィヤ",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "アリーが暗殺されたのち、新王朝を開いたシリア総督は誰か。"
  },
  {
    "answer": "661年",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ウマイヤ朝が成立したのは西暦何年か。"
  },
  {
    "answer": "ダマスクス",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ウマイヤ朝の首都はどこか。"
  },
  {
    "answer": "スンナ派",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ムハンマドの言行に従う者という意味で、代々のカリフを正統と認めるイスラーム教の多数派は何か。"
  },
  {
    "answer": "シーア派",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "アリーとその子孫のみをムハンマドの正統な後継者と認める、イスラーム教少数派の分派名は何か。"
  },
  {
    "answer": "西ゴート王国",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "711年にウマイヤ朝が滅ぼした、イベリア半島を支配したゲルマン人国家は何か。"
  },
  {
    "answer": "トゥール・ポワティエ間の戦い",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "732年、カール＝マルテル率いるフランク王国と対決し、ウマイヤ朝軍が敗走した戦いは何か。"
  },
  {
    "answer": "アラブ帝国",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "正統カリフ時代とウマイヤ朝の時代は、アラブ人が特権的支配層を形成していたため、何帝国と呼ばれるか。"
  },
  {
    "answer": "アブー＝アルアッバース",
    "category": "正統カリフ時代〜ウマイヤ朝",
    "chapter": "5",
    "number": "34",
    "question": "ウマイヤ朝を倒し、新王朝を建てた人物は誰か。"
  },
  {
    "answer": "マンスール",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "新都を造営し、行政機構を整備して中央集権体制を確立した、アッバース朝二代カリフは誰か。"
  },
  {
    "answer": "バグダード",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "アッバース朝二代カリフが造営した新都はどこか。"
  },
  {
    "answer": "イスラーム帝国",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "アラブ人の特権が廃止されてムスリムの平等が実現した支配体制から、アッバース朝をとくに何帝国と呼ぶか。"
  },
  {
    "answer": "シャリーア",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "イスラーム法のことを何と呼ぶか。"
  },
  {
    "answer": "製紙法",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "タラス河畔の戦いで、中国から西伝したものは何か。"
  },
  {
    "answer": "ハールーン＝アッラシード",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "800年頃にアッバース朝の最盛期を現出した、アッバース朝の第５代カリフは誰か。"
  },
  {
    "answer": "知恵の館（バイト＝アルヒクマ）",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "９世紀にバグダードに建設され、ギリシア語文献のアラビア語への翻訳が行われた研究機関は何か。"
  },
  {
    "answer": "アブド＝アッラフマーン3世",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "後ウマイヤ朝の最盛期を現出した人物は誰か。"
  },
  {
    "answer": "コルドバ",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "後ウマイヤ朝の都はどこか。"
  },
  {
    "answer": "ファーティマ朝",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "10世紀初め、シーア派の一派がチュニジアで建国し、当初からカリフを称した王朝は何か。"
  },
  {
    "answer": "カイロ",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "ファーティマ朝が10世紀後半エジプトに建設し、遷都した都市はどこか。"
  },
  {
    "answer": "ブワイフ朝",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "10世紀前半、イラン系の人びとがバグダードに入城して建てたシーア派軍事政権は何か。"
  },
  {
    "answer": "大アミール",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "ブワイフ朝の君主はアッバース朝カリフから何の称号を授与されたか。"
  },
  {
    "answer": "イクター制",
    "category": "アッバース朝と政権の多極化",
    "chapter": "5",
    "number": "35",
    "question": "軍人や官僚に対し、俸給額にみあう金額を徴収できる土地の管理・徴税権を与えたブワイフ朝創始の制度は何か。"
  },
  {
    "answer": "モスク",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "イスラーム教の礼拝堂を何と呼ぶか。"
  },
  {
    "answer": "マドラサ",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "ウラマーを育成するための高等教育機関を何と呼ぶか。"
  },
  {
    "answer": "スーク",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "都市のなかでモスクに隣接する市場を、アラビア語で何と呼ぶか。"
  },
  {
    "answer": "細密画（ミニアチュール）",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "イスラーム文化において、書物の装飾や挿絵に描かれた、精密な絵画は何か。"
  },
  {
    "answer": "イブン＝シーナー",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "ギリシア・アラビア医学の集大成者で、ラテン名アヴィケンナで知られるイラン系医学者・哲学者は誰か。"
  },
  {
    "answer": "イブン＝ルシュド",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "コルドバ生まれでアリストテレスの著作の注釈で知られる、ラテン名でアヴェロエスと呼ばれる哲学者は誰か。"
  },
  {
    "answer": "『医学典範』",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "中世ヨーロッパの医学校でも重用された、アヴィケンナの著作は何か。"
  },
  {
    "answer": "タバリー",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "アッバース朝期にバグダードで活躍した、代表作『預言者たちと諸王の歴史』である知識人は誰か。"
  },
  {
    "answer": "イブン＝ハルドゥーン",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "14世紀のチュニス出身の、『世界史序説』を著したイスラーム世界を代表する歴史家は誰か。"
  },
  {
    "answer": "イブン＝バットゥータ",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "14世紀のモロッコ出身の大旅行家で、『旅行記』を著したのは誰か。"
  },
  {
    "answer": "『千夜一夜物語（アラビアン＝ナイト）』",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "中世ペルシア語の説話集がアラビア語に翻訳されたのち、各地の説話が融合されたアラビア語の大説話集は何か。"
  },
  {
    "answer": "ウマル＝ハイヤーム",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "ジャラリー暦の制定にも加わった、『ルバイヤート』作のセルジューク朝期のイラン系詩人・科学者は誰か。"
  },
  {
    "answer": "フワーリズミー",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "アラビア数学を確立し、代数学を発展させた、アッバース朝期のイラン系数学者・天文学者は誰か。"
  },
  {
    "answer": "ミナレット",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "モスクに付属する尖塔のことを何と呼ぶか。"
  },
  {
    "answer": "アラベスク",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "ムスリムが製作した、植物の茎や葉を幾何学的に図案化した装飾文様は何か。"
  },
  {
    "answer": "アルハンブラ宮殿",
    "category": "イスラーム文化の成立",
    "chapter": "5",
    "number": "36",
    "question": "13世紀よりグラナダに建設されたナスル朝の宮殿で、西方イスラーム世界の代表的建築は何か。"
  },
  {
    "answer": "西岸海洋性気候",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "年間の降水量が比較的均等で、夏は涼しく冬は温暖であるヨーロッパ西部などに見られる気候区を何というか。"
  },
  {
    "answer": "地中海性気候",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "夏は乾燥し高温、冬は湿潤で比較的温暖な、オリーブやブドウの栽培が見られる気候を何というか。"
  },
  {
    "answer": "『ゲルマニア』",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "古ゲルマン社会の風俗や素朴な慣習を記録した、タキトゥスの作品名は何か。"
  },
  {
    "answer": "民会",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "ゲルマン部族国家で首長が主宰し、武装した自由民成年男性で構成された最高決定機関は何か。"
  },
  {
    "answer": "フン人",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "ゲルマン人大移動の直接原因となった、ヨーロッパに侵入した騎馬遊牧民は何か。"
  },
  {
    "answer": "ケルト人",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "前６世紀頃から、アルプス以北のヨーロッパに広く居住していたインド＝ヨーロッパ語系民族は何か。"
  },
  {
    "answer": "西ゴート",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "フン人の西進を恐れ、375年南下を開始し、翌年ドナウ川を渡りローマ領内に移動したゲルマン部族は何か。"
  },
  {
    "answer": "東ゴート",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "375年にフン人によって征服され、その大帝国の崩壊後、５世紀末にはイタリアに王国を建てたゲルマン部族は何か。"
  },
  {
    "answer": "ヴァンダル",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "パンノニアから北イタリア・スペインを経て、５世紀前半にアフリカ北岸に建国したゲルマン部族は何か。"
  },
  {
    "answer": "ブルグンド",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "５世紀初め、ローマ帝国の同盟者としてガリア東南部に移住・建国したゲルマン部族は何か。"
  },
  {
    "answer": "ランゴバルド",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "６世紀半ば、パンノニアからイタリア北部に移住し、建国したゲルマン部族は何か。"
  },
  {
    "answer": "フランク",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "ライン川東岸の原住地を保持しつつ、ガリア北部に移住・拡大したゲルマン部族は何か。"
  },
  {
    "answer": "ヘプターキー",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "アングロ＝サクソン人がブリタニア南部に建てた小王国群を何と呼ぶか。"
  },
  {
    "answer": "アッティラ",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "５世紀前半、パンノニアに大帝国を形成した、フン人の大王は誰か。"
  },
  {
    "answer": "カタラウヌムの戦い",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "451年、フン人の軍が、パリ東方の地で西ローマとゲルマン人の連合軍に敗れた戦いは何か。"
  },
  {
    "answer": "オドアケル",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "476年、最後の皇帝を廃位して西ローマ帝国を滅亡させた、ゲルマン出身の西ローマの傭兵隊長は誰か。"
  },
  {
    "answer": "テオドリック大王",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "５世紀末、西ローマを滅ぼした人物による王国を滅ぼし、イタリアに東ゴート王国を建てた指導者（王）は誰か。"
  },
  {
    "answer": "スラヴ人",
    "category": "ヨーロッパ概要/ゲルマン人の大移動",
    "chapter": "5",
    "number": "37",
    "question": "東ヨーロッパを中心に居住する、ゲルマン人の移動ののちバルカン半島にも進出した印＝欧語系民族は何か。"
  },
  {
    "answer": "皇帝教皇主義",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ビザンツ帝国で見られた、皇帝が教会の最高権威者として宗教と政治を統合的に支配する体制を何というか。"
  },
  {
    "answer": "『ローマ法大全』",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ユスティニアヌス帝が法学者トリボニアヌスに命じて編纂させた、古代ローマ法規の集大成は何と呼ばれるか。"
  },
  {
    "answer": "ハギア＝ソフィア聖堂",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ユスティニアヌス帝が首都に建立させた、ビザンツ様式を代表する大聖堂は何か。"
  },
  {
    "answer": "絹織物産業",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ユスティニアヌス帝が中国または内陸アジアから養蚕技術を導入して盛んにした産業は何か。"
  },
  {
    "answer": "メロヴィング朝",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "クローヴィスによって５世紀後半に成立した、フランク王国最初の王朝は何か。"
  },
  {
    "answer": "アタナシウス派",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "フランク人を統一したクローヴィスは496年、アリウス派から何に改宗したか。"
  },
  {
    "answer": "カール＝マルテル",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "トゥール・ポワティエ間の戦いでフランク軍を勝利に導いた宮宰は誰か。"
  },
  {
    "answer": "ピピン",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ローマ教皇の承認のもと、751年に新王朝を開き、教皇に寄進をした人物は誰か。"
  },
  {
    "answer": "ラヴェンナ地方",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ランゴバルド王国を攻撃して、獲得した地域の一部をピピンが教皇に寄進した。その地域名は何か。"
  },
  {
    "answer": "ザクセン人",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "カール大帝が従属させた、北ドイツのゲルマン人一派は何か。"
  },
  {
    "answer": "アヴァール人",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "８世紀末にカール大帝が撃退した、６世紀以後ヨーロッパに侵入してきたアルタイ語系遊牧民は何か。"
  },
  {
    "answer": "伯",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "中央集権のためカール大帝が任命し、巡察使を派遣して監督させた、フランク王国の地方行政官の名称は何か。"
  },
  {
    "answer": "800年",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "カールの戴冠が行われたのは、西暦何年か。"
  },
  {
    "answer": "カロリング＝ルネサンス",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "カール大帝の保護・奨励によった古典文化復興運動は何と呼ばれたか。"
  },
  {
    "answer": "アルクイン",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "カール大帝にまねかれたイギリスの神学者は誰か。"
  },
  {
    "answer": "コンスタンティノープル教会",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ビザンツ帝国の保護を受けて発展した、東方教会の本山に相当した教会は何か。"
  },
  {
    "answer": "ローマ＝カトリック教会",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "ローマ教会が首座を占めた西ヨーロッパのキリスト教会組織を、一般に何と呼ぶか。"
  },
  {
    "answer": "ペテロ",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "使徒と呼ばれたイエスの弟子のうちの筆頭であり、初代教皇とされたのは誰か。"
  },
  {
    "answer": "グレゴリウス１世",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "アングロ＝サクソンなどゲルマン人への布教に大きく貢献した、６世紀末〜７世紀初めの教皇は誰か。"
  },
  {
    "answer": "レオン３世",
    "category": "ビザンツ帝国・フランク王国/ローマ＝カトリック",
    "chapter": "5",
    "number": "38",
    "question": "聖像禁止令を発布したビザンツ皇帝は誰か。"
  },
  {
    "answer": "ヴェルダン条約",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "フランク王国を３分した、843年の条約は何か。"
  },
  {
    "answer": "メルセン条約",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "ロタール1世の死後、弟２人が中部フランクの北部を分割して、王国を最終的に３分した870年の条約は何か。"
  },
  {
    "answer": "ヨハネス12世",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "オットー1世にローマ皇帝の帝冠を授けた教皇は誰か。"
  },
  {
    "answer": "マジャール人",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "東フランク王国により、955年のレヒフェルトの戦いで西進を阻まれた、ウラル語系民族は何か。"
  },
  {
    "answer": "962年",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "オットー1世がローマ皇帝の帝冠を授かったのは西暦何年か。"
  },
  {
    "answer": "神聖ローマ帝国",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "オットー1世の戴冠は、のちにある帝国の成立とみなされた。成立した帝国は何か。"
  },
  {
    "answer": "ユーグ＝カペー",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "987年、西フランクでカロリング朝が断絶したのち、パリ伯が新国王に選ばれた。このパリ伯は誰か。"
  },
  {
    "answer": "ヴァイキング",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "「入江の人」を意味すると考えられる、ノルマン人の別称は何か。"
  },
  {
    "answer": "スカンディナヴィア半島・ユトランド半島・バルト海沿岸",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "ノルマン人の原住地を一つ答えなさい。"
  },
  {
    "answer": "ロロ",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "10世紀初め、西フランク王から北フランスの公爵に封じられたノルマン人の首長は誰か。"
  },
  {
    "answer": "ルッジェーロ2世",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "両シチリア王国を建てた人物は誰か。"
  },
  {
    "answer": "パレルモ",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "両シチリア王国の首都はどこか。"
  },
  {
    "answer": "エグバート",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "９世紀前半、ヘプターキーを統一し、最初のイングランド王国を建てた王は誰か。"
  },
  {
    "answer": "アルフレッド大王",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "来襲したノルマン（デーン）人を撃退して、９世紀後半にアングロ＝サクソン王国を再統一したイングランド王は誰か。"
  },
  {
    "answer": "クヌート",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "1016年、イングランドを征服して、デーン朝を開いた人物は誰か。"
  },
  {
    "answer": "1066年",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "ノルマンディー公ウィリアムによるノルマン＝コンクェストは西暦何年におきた出来事か。"
  },
  {
    "answer": "ウィリアム1世",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "ノルマン朝を創始したノルマンディー公ウィリアムの、イングランド王としての名は何か。"
  },
  {
    "answer": "ノヴゴロド国",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "862年、ノルマン系ルーシによって商業都市国家が建設された。ロシアの起源とされるこの国は何か。"
  },
  {
    "answer": "リューリク",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "９世紀後半、スウェーデン地方のノルマン人ルーシを率いてスラヴ人地域に入った首長は誰か。"
  },
  {
    "answer": "キエフ公国",
    "category": "神聖ローマとフランスの誕生/ノルマン人の侵入",
    "chapter": "5",
    "number": "39",
    "question": "オレグ率いる一派が元の国家から南下し、９世紀後半に建てた国は何か。"
  },
  {
    "answer": "双務的契約",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "中世ヨーロッパの封建制下で、主君と家臣の双方を拘束した取り決めを何と呼ぶか。"
  },
  {
    "answer": "恩貸地制",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "封建的主従関係の構成要素の一つとなった、ローマ帝国末期に開始された、土地をめぐる制度は何か。"
  },
  {
    "answer": "従士制",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "封建的主従関係の構成要素の一つとなった、有力者と自由民とのあいだの保護・忠誠に関する古ゲルマンの風習は何か。"
  },
  {
    "answer": "軍役",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "中世ヨーロッパの封建制度において、臣下が領主に対して封土の代償として提供した、戦争への参加義務を何というか。"
  },
  {
    "answer": "騎士",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "多くが小領主で、騎乗して戦う戦士階級の人びとを何と呼ぶか。"
  },
  {
    "answer": "賦役・貢納",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "領主に対する農民の労働地代・生産物地代をそれぞれ何というか。"
  },
  {
    "answer": "移転・職業選択",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "農奴にはどのような身体的自由がないか、二つ答えなさい。"
  },
  {
    "answer": "領主直営地",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "荘園制において、農奴が領主のために直接耕作し、その収穫物が領主の収入となる土地を何というか。"
  },
  {
    "answer": "農民保有地",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "荘園制において、農民が領主から貸与され、一部を貢納し、自らの生計のために耕作する土地を何というか。"
  },
  {
    "answer": "共同利用地",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "中世ヨーロッパの荘園において、村の住民が放牧や薪の採取などに共同で利用できた土地を何というか。"
  },
  {
    "answer": "十分の一税",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "農民が教会に納めた税を何と呼ぶか。"
  },
  {
    "answer": "領主裁判権",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "領主が領民に行使した裁判権を何と呼ぶか。"
  },
  {
    "answer": "不輸不入権",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "自分の支配地に関して、領主が国王やその官吏の立ち入りと職務執行を免除された権利を何と呼ぶか。"
  },
  {
    "answer": "三圃制",
    "category": "封建社会の成立",
    "chapter": "5",
    "number": "40",
    "question": "10～11世紀頃から始まった、秋耕地・春耕地・休耕地に３分して、３年で一巡させる農法は何か。"
  },
  {
    "answer": "アッラー、天使、啓典、預言者、来世、定命",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "イスラームの教えである六信を答えなさい。"
  },
  {
    "answer": "信仰告白、礼拝、喜捨、断食、巡礼",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "イスラームの教えである五行を答えなさい。"
  },
  {
    "answer": "サラート",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "イスラーム教の集団礼拝のことをカタカナで何というか。"
  },
  {
    "answer": "バスラ、クーファ/フスタート/カイラワーン",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ミスルの名前を答えなさい（イラク２つ、エジプト１つ、チュニジア１つ）"
  },
  {
    "answer": "ハワーリジュ派",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "アリーを暗殺した、イスラーム最初の分派とされる戒律に厳格な過激派は何か。"
  },
  {
    "answer": "岩のドーム",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ムハンマドが昇天したとされる、イェルサレムに建設された、アブドゥルマリク時代の建築物は何か。"
  },
  {
    "answer": "アブドゥルマリク",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "アラビア語が公用語化された、ウマイヤ朝第５代カリフは誰か。"
  },
  {
    "answer": "ウマイヤ・モスク",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "8世紀初め、ダマスクスに建てられた現存する世界最古のモスクは何か。"
  },
  {
    "answer": "ワリード1世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ウマイヤ・モスクを建て、711年には西ゴート王国を滅ぼしたウマイヤ朝カリフは誰か。"
  },
  {
    "answer": "ホラーサーン",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "アッバース家が拠点としていた地域はどこか。"
  },
  {
    "answer": "ワズィール",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "アッバース朝２代目カリフのマンスールが設置した宰相職は何か。"
  },
  {
    "answer": "イマーム",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "シーア派の聖俗両権を握った最高指導者の称号は何か。"
  },
  {
    "answer": "イスマーイール派",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ファーティマ朝は、シーア派の中の何派を信仰したか。"
  },
  {
    "answer": "十二イマーム派",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ブワイフ朝は、シーア派の中の何派を信仰したか。"
  },
  {
    "answer": "ザンジュの乱",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "869年に現在のイラクで黒人の農業奴隷が起こした反乱は何か。"
  },
  {
    "answer": "アグラブ朝",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ファーティマ朝に滅ぼされたチュニジアのイスラーム王朝は何か。"
  },
  {
    "answer": "『アルジャブラ』",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "アッバース朝に仕え、代数学を確立したフワーリズミーが残した書物は何か。"
  },
  {
    "answer": "ファルガーニー",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "アッバース朝時代に活躍し、『天文学集成』を著してイスラーム天文学の発展に貢献した学者は誰か。"
  },
  {
    "answer": "民会",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "大移動前のゲルマン社会で、部族の重要問題を議論した会議名は何か。"
  },
  {
    "answer": "ウァレンス",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "西ゴート人がアドリアノープルの戦いで敗死させたローマ皇帝は誰か。"
  },
  {
    "answer": "レオ1世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "452年、ローマに入ったアッティラを説得し、侵入を断念させた教皇は誰か。"
  },
  {
    "answer": "アウグストゥルス",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "西ローマ帝国滅亡時の、最後の皇帝は誰か。"
  },
  {
    "answer": "テオドリック",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "フン人監視下からの脱出を率い、493年に東ゴート王国を建国した人物は誰か。"
  },
  {
    "answer": "ガイセリック",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ヴァンダル王国の国王で、455年にローマを略奪した人物は誰か。"
  },
  {
    "answer": "アラリック",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "西ゴート王国の国王で、410年にローマを占領・略奪した人物は誰か。"
  },
  {
    "answer": "トレド",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "西ゴート王国の都はどこか。"
  },
  {
    "answer": "アーヘン",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "カール大帝がイギリスから学僧アルクインを招き、宮廷学校を設立した都市はどこか。"
  },
  {
    "answer": "ルートヴィヒ1世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "カール大帝の息子で、その後を継いだ人物は誰か。"
  },
  {
    "answer": "東フランク王国：ルートヴィヒ2世、中部フランク王国：ロタール1世、西フランク王国：シャルル2世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ヴェルダン条約で東フランク王国・中部フランク王国・西フランク王国の国王となった人物をそれぞれ答えなさい。"
  },
  {
    "answer": "ハインリヒ1世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "東フランク王国で、919年にザクセン朝を創始した人物は誰か。"
  },
  {
    "answer": "ヨハネス12世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "962年にオットー1世にローマ皇帝冠を授けた教皇は誰か。"
  },
  {
    "answer": "グレゴリウス1世",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ローマ教会の首位権を確立し、アングロ＝サクソン人への布教を行った6世紀末前後の教皇は誰か。"
  },
  {
    "answer": "1054年",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ローマとコンスタンティノープルの東西教会が相互破門により完全分離したのは西暦何年か。"
  },
  {
    "answer": "アントニオス",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "3、4世紀にエジプトの砂漠で禁欲と苦行を実践し、修道院の起源とされる人物は誰か。"
  },
  {
    "answer": "ベルナルドゥス",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "シトー修道院の改革者で、ブルゴーニュ出身の人物は誰か。"
  },
  {
    "answer": "アッシジ",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "フランチェスコ修道会が置かれたイタリアの地名は何か。"
  },
  {
    "answer": "クリュニー修道院",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "グレゴリウス7世の出身修道院はどこか。"
  },
  {
    "answer": "建国者：ルッジェーロ2世、都：パレルモ",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "両シチリア王国の建国者と都をそれぞれ答えなさい。"
  },
  {
    "answer": "ヘースティングズの戦い",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "1066年、ノルマン征服の際にノルマンディー公ウィリアムがイングランド軍を撃破した戦いは何か。"
  },
  {
    "answer": "ルーン文字",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "ノルマン人が石碑に刻んだ、「神秘」を意味する独特の文字は何か。"
  },
  {
    "answer": "オレグ",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "リューリクの部下で、882年にキエフ公国を立てた人物は誰か。"
  },
  {
    "answer": "ローマ帝国：恩貸地制度、ゲルマン人社会：従士制",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "中世ヨーロッパの封建制度の基礎となったローマ帝国とゲルマン人社会の制度名をそれぞれ答えなさい。"
  },
  {
    "answer": "開放耕地制",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "農民保有地を垣や堀などで仕切らずに重量有輪棃で耕作しやすいようにした制度名は何か。"
  },
  {
    "answer": "ヨーマン",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "14世紀以降のイギリスに登場した、ジェントリと農奴の中間の中規模農民層のことを何と呼ぶか。"
  },
  {
    "answer": "ボスフォラス海峡",
    "category": "難関私大対策",
    "chapter": "5",
    "number": "Z",
    "question": "コンスタンティノープルが面する海峡は何か。"
  },
  {
    "answer": "サーマーン朝",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "９世紀後半に成立し、中央アジアからイラン東部を支配したイラン系イスラーム王朝は何か。"
  },
  {
    "answer": "マムルーク",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "９世紀以後、イスラーム諸王朝の軍事力の中心となったトルコ人などの白人系奴隷を何と呼ぶか。"
  },
  {
    "answer": "カラハン朝",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "10世紀末にサーマーン朝を倒し、中央アジアを支配下においた、トルコ系最初のイスラーム王朝は何か。"
  },
  {
    "answer": "トルキスタン",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "中央アジアに位置し、トルコ系民族が多く居住する地域であり、歴史的に東西交易の要衝であった地を何というか。"
  },
  {
    "answer": "ガズナ朝",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "10世紀後半、サーマーン朝のマムルークがアフガニスタンを中心に建てたイスラーム王朝は何か。"
  },
  {
    "answer": "ゴール朝",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "12世紀半ばにアフガニスタンで自立し、その後、ガズナ朝を滅ぼしたイスラーム王朝は何か。"
  },
  {
    "answer": "デリー＝スルタン朝",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "1206〜1526年まで、デリーを都に興亡した５つのイスラーム王朝を何と総称するか。"
  },
  {
    "answer": "アイバク",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "奴隷王朝を建てた、ゴール朝のマムルーク出身の武将は誰か。"
  },
  {
    "answer": "ヨーガ",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "インドに伝わる、心を静め、精神を統一してきたえる修行方法は、何と呼ばれるか。"
  },
  {
    "answer": "ダウ船",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "ムスリム商人がインド洋交易で使用した、三角帆をもつ木造船を何と呼ぶか。"
  },
  {
    "answer": "ジャンク船",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "10世紀頃中国で建造された遠洋航海用の大型木造帆船は何と呼ばれるか。"
  },
  {
    "answer": "マラッカ王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "14世紀末頃からマレー半島西岸の港市を中心に成立し、15世紀半ばに支配階級がイスラーム教に改宗した国家は何か。"
  },
  {
    "answer": "アチェ王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "15世紀末から20世紀初めまで、スマトラ島北部に存在した港市国家は何か。"
  },
  {
    "answer": "マタラム王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "16世紀末、マジャパヒト王国に代わってジャワ島東部に成立したイスラーム国家は何か。"
  },
  {
    "answer": "アクスム王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "紀元前後頃エチオピア高原に成立し、後４世紀にクシュ王国を滅ぼした国は何か。"
  },
  {
    "answer": "ニジェール川",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "ギニア高原より発し、ギニア湾に注ぐ西アフリカ一の大河は何か。"
  },
  {
    "answer": "ガーナ王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "７世紀頃、西アフリカのニジェール川上流に成立した非イスラームの黒人王国は何か。"
  },
  {
    "answer": "マリ王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "13世紀前半〜15世紀後半、ニジェール川上流と西アフリカを支配した黒人王国は何か。"
  },
  {
    "answer": "トンブクトゥ",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "11世紀以降サハラ交易の終点として栄え、西アフリカにおけるイスラーム文化の中心地となったマリ王国の都はどこか。"
  },
  {
    "answer": "マンサ＝ムーサ",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "14世紀にマリ王国の最盛期を現出し、またメッカ巡礼を行った王は誰か。"
  },
  {
    "answer": "ソンガイ王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "15世紀後半に、マリ王国を滅ぼしてニジェール川流域に建てられた黒人王国は何か。"
  },
  {
    "answer": "輸出：金　輸入：塩",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "サハラ交易において、西アフリカの国々が輸出し、北アフリカから輸入していた代表的な交易品をそれぞれ答えなさい。"
  },
  {
    "answer": "マリンディ",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "アフリカ東岸の港市の一つで、インド洋貿易で繁栄し、鄭和の艦隊やヴァスコ＝ダ＝ガマが来航したのはどこか。"
  },
  {
    "answer": "スワヒリ語",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "「海岸に住む人」を意味し、東アフリカ海岸部の住民の言語とアラビア語が混じり合って生まれた言語を何と呼ぶか。"
  },
  {
    "answer": "モノモタパ王国",
    "category": "イスラーム教の諸地域への伝播",
    "chapter": "6",
    "number": "41",
    "question": "11〜19世紀に、アフリカ南部のザンベジ川流域を支配し、インド洋交易で栄えた黒人王国は何か。"
  },
  {
    "answer": "トゥグリル＝ベク",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "セルジューク朝の建国者は誰か。"
  },
  {
    "answer": "スルタン",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "セルジューク朝がバグダード入城後、アッバース朝カリフから授かった、世俗君主を意味する称号は何か。"
  },
  {
    "answer": "マンジケルト(マラズギルト)の戦い",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "十字軍派遣のきっかけともなった、セルジューク朝がアナトリアに進出した1071年の戦いは何か。"
  },
  {
    "answer": "ニザーム＝アルムルク",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "セルジューク朝で諸制度を整備するとともに、学芸を奨励したイラン系の宰相は誰か。"
  },
  {
    "answer": "ニザーミーヤ学院",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "セルジューク朝が各地に開いた、学芸奨励のためのマドラサの名称は何か。"
  },
  {
    "answer": "イクター制",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "セルジューク朝が整備した徴税制度は何か。"
  },
  {
    "answer": "スーフィズム",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "イスラームの形式主義化に対し、「神との一体」を求める禁欲的な修行を重視した考え方は何と呼ばれるか。"
  },
  {
    "answer": "ガザーリー",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "セルジューク朝期のイラン系神学者で、のちにスーフィズムの理論化も行った人物は誰か。"
  },
  {
    "answer": "フレグ",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "1258年にアッバース朝を滅ぼしたモンゴル人は誰か。"
  },
  {
    "answer": "イル＝ハン国（フレグ＝ウルス）",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "アッバース朝の滅亡後、タブリーズを都にイランに成立したモンゴル政権は何か。"
  },
  {
    "answer": "ガザン＝ハン",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "イスラーム教を国教とした、イル＝ハン国の第７代の君主は誰か。"
  },
  {
    "answer": "ラシード＝アッディーン",
    "category": "西アジアの動向①",
    "chapter": "6",
    "number": "42",
    "question": "イル＝ハン国の宰相で、歴史書『集史』を編纂したイラン人政治家・歴史家は誰か。"
  },
  {
    "answer": "サラーフ＝アッディーン(サラディン）",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "ザンギー朝に仕えていたが、12世紀後半エジプトの実権を握って自立し、アイユーブ朝を建てた人物は誰か。"
  },
  {
    "answer": "マムルーク朝",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "アイユーブ朝の軍人奴隷出身の軍司令官が、1250年にカイロを都に建てたスンナ派王朝は何か。"
  },
  {
    "answer": "バイバルス",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "マムルーク朝の第５代スルタンで、モンゴル軍の侵入を撃退し、またシリアから十字軍を最終的に撃退した人物は誰か。"
  },
  {
    "answer": "カーリミー商人",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "アイユーブ朝とマムルーク朝の保護下で、アレクサンドリアを中心に香辛料貿易を独占した商人団を何と呼ぶか。"
  },
  {
    "answer": "カイロ",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "ファーティマ朝、アイユーブ朝、マムルーク朝に共通する首都はどこか。"
  },
  {
    "answer": "ペスト",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "マムルーク朝衰退の一因である、13世紀にヨーロッパを中心に大流行した病気は何か。"
  },
  {
    "answer": "マグリブ",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "アラビア語で「日の没する地」を意味する、エジプト以西の北アフリカ一帯を指したことばは何か。"
  },
  {
    "answer": "ベルベル人",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "とくにモロッコ・アルジェリアの先住民を何と呼ぶか。"
  },
  {
    "answer": "ムラービト朝",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "11世紀後半、モロッコに建て、サハラ地域やイベリア半島に進出したイスラーム王朝は何か。"
  },
  {
    "answer": "ムワッヒド朝",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "12世紀前半にモロッコで成立し、ムラービト朝を滅ぼし、イベリア半島にも進出したイスラーム王朝は何か。"
  },
  {
    "answer": "ガーナ王国",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "ムラービト朝が滅ぼした、西アフリカの黒人国家はどこか。"
  },
  {
    "answer": "マラケシュ",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "ムラービト朝、ムワッヒド朝の都はどこか。"
  },
  {
    "answer": "レコンキスタ",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "８世紀前半からキリスト教勢力によってイベリア半島で展開された、イスラーム勢力からの半島奪回運動を何と呼ぶか。"
  },
  {
    "answer": "ナスル朝",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "イベリア半島最後のイスラーム王朝は何か。"
  },
  {
    "answer": "グラナダ",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "1492年、キリスト教徒に陥落させられた、ナスル朝の首都はどこか。"
  },
  {
    "answer": "アルハンブラ宮殿",
    "category": "西アジアの動向②",
    "chapter": "6",
    "number": "43",
    "question": "13世紀より建設されたナスル朝の宮殿で、西方イスラーム世界の代表的建築は何か。"
  },
  {
    "answer": "サッファール朝",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "903年にサーマーン朝に滅ぼされたイスラーム王朝は何か。"
  },
  {
    "answer": "ブハラ",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "中央アジア初のイラン系イスラーム王朝であるサーマーン朝の都はどこか。"
  },
  {
    "answer": "イドリース朝",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "８世紀末、アリーの子孫がベルベル人の支持でモロッコに建てたイスラーム王朝はどこか。"
  },
  {
    "answer": "トゥールーン朝",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "9世紀半ば、アッバース朝からエジプト総督が自立して建て、シリアにまで拡大したイスラーム王朝はどこか。"
  },
  {
    "answer": "マリク＝シャー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "セルジューク朝の全盛期を現出した君主は誰か。"
  },
  {
    "answer": "アルプ＝アルスラーン",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "1071年のマンジケルトの戦いでビザンツ帝国を破ったセルジューク朝の君主は誰か。"
  },
  {
    "answer": "ヒッティーンの戦い",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "1187年サラーフ＝アッディーンが十字軍を撃退し、イェルサレム王国を滅ぼした戦いは何か。"
  },
  {
    "answer": "バイバルス",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "マムルーク朝の全盛期を現出した君主は誰か。"
  },
  {
    "answer": "アインジャールートの戦い",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "1260年、バイバルスがフラグ率いるモンゴル軍を撃退した戦いは何か。"
  },
  {
    "answer": "ホラズム＝シャー朝",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "セルジューク朝のトルコ系奴隷がアム川下流域の太守に任じられ建て、チンギス＝カンにより滅亡したイスラーム王朝はどこか。"
  },
  {
    "answer": "アルプテギン",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "サーマーン朝から独立したガズナ朝の建国者は誰か。"
  },
  {
    "answer": "マフムード",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "ガズナ朝の全盛期を築き、インド遠征でヒンドゥー寺院を破壊した君主は誰か。"
  },
  {
    "answer": "クトゥブ＝ミナール",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "奴隷王朝の建国者アイバクが建設を命令した建築物は何か。"
  },
  {
    "answer": "ジャラールッディーン＝ハルジー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "ハルジー朝の建国者は誰か。"
  },
  {
    "answer": "バフマニー朝",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "1347年、トゥグルク朝から自立し、デカン高原を支配した王朝はどこか。"
  },
  {
    "answer": "ヒズル＝ハーン",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "トゥグルク朝の地方長官から自立してサイイド朝を建てた人物は誰か。"
  },
  {
    "answer": "アフガン系",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "デリー＝スルタン朝のうち、他のトルコ系４王朝に対し、ロディー朝は何系か。"
  },
  {
    "answer": "ニジェール川",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "西アフリカのギニア高原からギニア湾に至る大河は何か。"
  },
  {
    "answer": "アスキア＝ムハンマド",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "ソンガイ王国の全盛期を現出し、西アフリカの隊商都市の大部分を支配した君主は誰か。"
  },
  {
    "answer": "カネム＝ボルヌー王国",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "サハラ南縁チャド湖周辺を支配し、11世紀頃にイスラーム教を受容し、16世紀後半に全盛期を迎えた国家はどこか。"
  },
  {
    "answer": "ザンベジ川",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "東アフリカのモノモタパ王国の北川を流れる河川は何か。"
  },
  {
    "answer": "サアディー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "セルジューク朝のニザーミーヤ学院で学び、『薔薇園』を残した詩人は誰か。"
  },
  {
    "answer": "マームーン",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "父ハールーン＝アッラシードがバグダードに立てた「知恵の宝庫」を改めて、830年頃に「知恵の館」を建設したカリフは誰か。"
  },
  {
    "answer": "イブン＝ファドラーン",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "ロシア方面の旅行記『ヴォルガ＝ブルガール紀行』の著者は誰か。"
  },
  {
    "answer": "イドリーシー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "モロッコ生まれの地理学者で、世界地図を残した学者は誰か。"
  },
  {
    "answer": "ジャラーリー暦",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "『ルバイヤート』を残したウマル＝ハイヤームが定めた暦は何か。"
  },
  {
    "answer": "フィルドゥシー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "ガズナ朝に仕え、イランの民族叙事詩『シャー＝ナーメ』を残した詩人は誰か。"
  },
  {
    "answer": "ビールーニー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "ガズナ朝のマフムードに同行し、『インドの書』を残した人物は誰か。"
  },
  {
    "answer": "イブン＝アル＝ハイサム",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "『光学』を著し、視覚や光の屈折に関する実験を通じてイスラーム自然科学の発展に寄与した物理学者は誰か。"
  },
  {
    "answer": "アル＝ラーズィー",
    "category": "難関私大対策",
    "chapter": "6",
    "number": "Z",
    "question": "イスラーム世界で活躍し、『医学集成』を著して天然痘と麻疹の症状を区別するなど臨床医学の発展に貢献した医師は誰か。"
  },
  {
    "answer": "聖職売買/聖職者の妻帯",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "修道院運動の背景となる、ローマ＝カトリック教会の腐敗に関して、具体的な事例を１つ答えなさい。"
  },
  {
    "answer": "ベネディクトゥス",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "６世紀前半、西方での修道院運動を開始した、イタリア人の修道者は誰か。"
  },
  {
    "answer": "モンテ＝カシノ",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "ベネディクト修道会は、中部イタリアの何と呼ばれる山にあるか。"
  },
  {
    "answer": "「祈り、かつ働け」",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "ベネディクト修道会は「清貧・純潔・服従」の戒律とともに、信仰と労働を重視するモットーを掲げた。それは何か。"
  },
  {
    "answer": "クリュニー修道院",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "10世紀初めフランス中東部に設立され、11世紀以降、教会刷新運動の中心となった修道院は何か。"
  },
  {
    "answer": "シトー修道会",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "11世紀末にフランス中部に創設され、12世紀以降、開墾運動の中心として発展した修道会は何か。"
  },
  {
    "answer": "フランチェスコ修道会",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "「アッシジの聖者」と呼ばれた修道士が創始した修道会は何か。"
  },
  {
    "answer": "ドミニコ修道会",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "南フランスでの異端カタリ派に対抗する活動ののち創始した托鉢修道会は何か。"
  },
  {
    "answer": "托鉢修道会",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "13世紀に、修道院の封建領主化と富裕化を批判して誕生した、新しいタイプの修道会を何と総称するか。"
  },
  {
    "answer": "グレゴリウス7世",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "11世紀後半の叙任権闘争で、神聖ローマ皇帝を破門して屈服させた教皇は誰か。"
  },
  {
    "answer": "カノッサの屈辱",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "1077年、神聖ローマ皇帝が北イタリアで教皇に謝罪し、破門を許された事件を何と呼ぶか。"
  },
  {
    "answer": "ハインリヒ4世",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "叙任権闘争の末、破門された神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "聖職叙任権",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "高位聖職者を任命する権限のことを何と呼ぶか。"
  },
  {
    "answer": "ヴォルムス協約",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "1122年、ときの教皇と皇帝とのあいだで結ばれ、ドイツ領内における叙任権闘争をいちおう終結させた協約は何か。"
  },
  {
    "answer": "ウルバヌス2世",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "ビザンツ皇帝から救援を求められ、十字軍を提唱した教皇は誰か。"
  },
  {
    "answer": "インノケンティウス3世",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "第４回十字軍を提唱したローマ教皇は誰か。"
  },
  {
    "answer": "「教皇は太陽、皇帝は月」",
    "category": "教会の権威",
    "chapter": "7",
    "number": "44",
    "question": "教皇権の絶頂期に残されたとされる言葉で、中世ヨーロッパにおいて、教皇権の優位を示すために用いられた比喩は何か。"
  },
  {
    "answer": "東方植民",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "12〜14世紀に行われた、ドイツ諸侯・騎士・修道院などによる、エルベ川以東への植民活動を何と呼ぶか。"
  },
  {
    "answer": "重量有輪棃",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "アルプス以北の肥沃で重い土壌を耕す目的で開発された、牛馬につけて用い深耕を可能にした鉄製農具は何か。"
  },
  {
    "answer": "クレルモン宗教会議",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "1095年、十字軍の派遣が提唱された、フランス中南部で開かれた宗教会議（公会議）は何か。"
  },
  {
    "answer": "ウルバヌス2世",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "ビザンツ皇帝から救援を求められ、十字軍を提唱した教皇は誰か。"
  },
  {
    "answer": "1096年",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "十字軍が初めて派遣されたのは、西暦何年か。"
  },
  {
    "answer": "イェルサレム王国",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "第１回十字軍が聖地回復に成功したのち、残留した戦士に封土を与えて成立した封建国家を何と呼ぶか。"
  },
  {
    "answer": "フリードリヒ1世",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "「バルバロッサ」のあだ名をもち、第３回十字軍に参加した神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "フィリップ2世",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "第３回十字軍に参加するも、イギリスの王との対立などが原因で途中で撤退をしたフランス国王は誰か。"
  },
  {
    "answer": "リチャード1世",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "サラーフ＝アッディーンと戦った、「獅子心王」の名で呼ばれたイギリス国王は誰か。"
  },
  {
    "answer": "インノケンティウス3世",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "第４回十字軍を提唱したローマ教皇は誰か。"
  },
  {
    "answer": "ヴェネツィア",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "第４回十字軍がコンスタンティノープルを占領した背景にはある都市の商人の要求があった。どこの商人か。"
  },
  {
    "answer": "ラテン帝国",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "第４回十字軍がコンスタンティノープルを占領して建てた国は何か。"
  },
  {
    "answer": "ルイ9世",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "第6回・第7回十字軍を主導し、「聖王」とも称された中世フランス・カペー朝の国王は誰か。"
  },
  {
    "answer": "アッコン",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "1291年、イェルサレム王国の最後の拠点であった都市が陥落し、十字軍時代が終了した。その都市はどこか。"
  },
  {
    "answer": "宗教騎士団",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "十字軍遠征の際に、巡礼者の保護や異教徒との戦闘を目的に組織されたものを総称して何というか。"
  },
  {
    "answer": "東方貿易",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "十字軍遠征の結果活発になった、北イタリア諸都市が地中海東岸（レヴァント）地域と行った貿易を何と呼ぶか。"
  },
  {
    "answer": "国王",
    "category": "十字軍とその影響",
    "chapter": "7",
    "number": "45",
    "question": "十字軍遠征の結果、権力が向上したのは、教皇、国王、諸侯・騎士のうちどれか。"
  },
  {
    "answer": "商業ルネサンス",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "ベルギーの歴史家ピレンヌがとなえた、中世ヨーロッパでの11～12世紀の「商業の復活」の別称は何か。"
  },
  {
    "answer": "遠隔地貿易",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "ヨーロッパでは地中海圏と北海・バルト海圏とを結ぶ商業活動が活発化した。この商業活動を何と呼ぶか。"
  },
  {
    "answer": "ロンドン",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "中世ヨーロッパにおいて、羊毛の産地で、大陸に輸出していたブリテン島の都市はどこか。"
  },
  {
    "answer": "フランドル地方",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "現在のベルギーにあたり、毛織物業が盛んであったネーデルラント南西部の地域名は何か。"
  },
  {
    "answer": "リューベック",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "バルト海沿岸に位置し、ハンザ同盟の盟主だった都市はどこか。"
  },
  {
    "answer": "ハンザ同盟",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "リューベックを盟主に、最盛期には100以上の都市が加盟し、商業で繁栄した北海・バルト海一帯の都市同盟は何か。"
  },
  {
    "answer": "シャンパーニュ地方",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "フランス東北部の地方で、地中海・北海の両商業圏の中間に位置し、大定期市が開かれた地方の名称は何か。"
  },
  {
    "answer": "アウクスブルク",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "15〜16世紀に銀山経営でフッガー家が台頭した、南ドイツの都市はどこか。"
  },
  {
    "answer": "ミラノ",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "イタリアにおける都市同盟の盟主ともなった、ロンバルディア地方の都市はどこか。"
  },
  {
    "answer": "フィレンツェ",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "トスカナ平野にあって毛織物業と金融業で繁栄し、一時メディチ家が市政を独裁した都市はどこか。"
  },
  {
    "answer": "ヴェネツィア",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "第４回十字軍の際に艦船を提供した、「アドリア海の女王」と呼ばれた港市はどこか。"
  },
  {
    "answer": "ロンバルディア同盟",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "ミラノを盟主に、神聖ローマ皇帝の南下に対抗した、北イタリア諸都市が結成した都市同盟は何か。"
  },
  {
    "answer": "東方貿易（レヴァント貿易）",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "北イタリア諸都市が地中海東岸地域と行った貿易を何と呼ぶか。"
  },
  {
    "answer": "香辛料・絹織物",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "東方貿易で北イタリアの商人がムスリム商人から買い取った商品を２種答えなさい。"
  },
  {
    "answer": "コムーネ",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "北・中部イタリアで成立した、市民自身が市政を運営する自治都市は、何と呼ばれたか。"
  },
  {
    "answer": "帝国都市",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "13世紀以降ドイツで成立した、自治権を獲得して皇帝に直属する都市をとくに何と呼ぶか。"
  },
  {
    "answer": "特許状",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "都市は、国王・封建領主たちから権力の委譲・放棄を認める文書の獲得をめざした。この文書を何と呼ぶか。"
  },
  {
    "answer": "「都市の空気は自由にする」",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "中世末期、ドイツでは農奴が都市に逃れ、住みつづけると農奴身分から自由になれることを指す諺が生まれた。この諺は何か。"
  },
  {
    "answer": "商業ギルド",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "13世紀以降、自治都市で市政運営の中心となった大商人による同業組合は何か。"
  },
  {
    "answer": "同職ギルド（ツンフト）",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "徒弟制度などの厳格な規約をもつ、手工業者の代表たちによる組合を何と呼ぶか。"
  },
  {
    "answer": "フッガー家",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "アウクスブルク近郊の銀山経営を独占した、15〜16世紀のヨーロッパ最大の金融業者は何家か。"
  },
  {
    "answer": "メディチ家",
    "category": "中世ヨーロッパの商業と人々のくらし",
    "chapter": "7",
    "number": "46",
    "question": "ルネサンスのとき文芸を保護したことでも知られる、フィレンツェの大富豪は何家か。"
  },
  {
    "answer": "ラテン帝国",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "第４回十字軍がコンスタンティノープルを占領して建てた国は何か。"
  },
  {
    "answer": "メフメト２世",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "ビザンツ帝国を滅ぼした時の、オスマン帝国のスルタンは誰か。"
  },
  {
    "answer": "1453年",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "ビザンツ帝国が滅亡したのは西暦何年か。"
  },
  {
    "answer": "軍管区制(テマ制)",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "ビザンツ帝国で７世紀から開始された、いくつかの区に分け、司令官に軍事・行政の権限を与える地方統治制度を何と呼ぶか。"
  },
  {
    "answer": "ヘラクレイオス１世",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "その治世下で公用語が替わった、テマ制を始めたとされる７世紀前半のビザンツ皇帝は誰か。"
  },
  {
    "answer": "屯田兵制",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "テマ制のもとで、兵士や農民に土地を与え、代わりに兵役義務を課した。これは何と呼ばれるか。"
  },
  {
    "answer": "プロノイア制",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "ビザンツで実施された、有力者に一代限りで国有地・住民の管理を認め、代償に軍役奉仕を課した土地制度を何と呼ぶか。"
  },
  {
    "answer": "ギリシア語",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "７世紀以後、ビザンツ帝国で公用語化した言語は何か。"
  },
  {
    "answer": "イコン美術",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "東方教会で多く用いられた、キリスト・聖者・宗教的情景が描かれた聖像画を何と呼ぶか。"
  },
  {
    "answer": "ドーム・モザイク壁画",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "ビザンツ様式の特徴を２点答えなさい。"
  },
  {
    "answer": "サン＝ヴィターレ聖堂",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "北イタリアのラヴェンナに建設された、ビザンツ様式を代表する聖堂は何か。"
  },
  {
    "answer": "ウラディミル１世",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "10世紀後半、ビザンツ皇帝の妹との結婚を機に、ギリシア正教に改宗したモスクワ大公国の大公は誰か。"
  },
  {
    "answer": "「タタールのくびき」",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "キプチャク＝ハン国によるロシア諸侯の支配を例えたことばは何か。"
  },
  {
    "answer": "モスクワ大公国",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "1480年、キプチャク＝ハン国から自立した国は何か。"
  },
  {
    "answer": "イヴァン３世",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "1480年、キプチャク＝ハン国から自立した国の当時の指導者は誰か。"
  },
  {
    "answer": "イヴァン４世",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "16世紀に皇帝として即位し、専制政治を強化してロシアの中央集権化を進めた「雷帝」と称される君主は誰か。"
  },
  {
    "answer": "ツァーリ",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "ロシアにおける皇帝を意味する称号は何か。"
  },
  {
    "answer": "セルビア人",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "７世紀頃バルカン半島南西部に入り、ギリシア正教を受け入れ、12世紀に王国を建てた南スラヴ系の民族は何か。"
  },
  {
    "answer": "クロアティア人",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "フランク王国に服属してカトリックに改宗し、独立後も、12世紀初めからハンガリーに支配された南スラヴ系の民族は何か。"
  },
  {
    "answer": "ベーメン（ボヘミア）王国",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "現在のチェコにあたり、中世以降ハプスブルク家の支配下に置かれ、神聖ローマ帝国の構成国の一つとされた王国は何か。"
  },
  {
    "answer": "カジミェシュ大王",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "14世紀半ばに全盛期を現出させた、ポーランドの歴史上ただ一人、大王の称号を付与された王は誰か。"
  },
  {
    "answer": "リトアニア＝ポーランド王国",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "14世紀後半、ドイツ騎士団の進出に対抗するため、東ヨーロッパで成立した同君連合国家は何か。"
  },
  {
    "answer": "ヤゲウォ朝",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "クラクフを首都とした、リトアニア＝ポーランド王国の王朝名は何か。"
  },
  {
    "answer": "第１次ブルガリア帝国",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "7世紀末に建国され、ビザンツ帝国と抗争を繰り広げた、スラヴ系を中心とする最初のブルガール人の国家を何というか。"
  },
  {
    "answer": "マジャール人",
    "category": "ビザンツ帝国・スラヴ人",
    "chapter": "7",
    "number": "47",
    "question": "９世紀末パンノニア（現在のハンガリー盆地一帯）に定住したウラル語系民族は何か。"
  },
  {
    "answer": "黒死病（ペスト）",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "14世紀半ば、西欧で大流行し、人口の約３分の１を減少させた病気は何か。"
  },
  {
    "answer": "独立自営農民（ヨーマン）",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "14世紀以降誕生した、農奴身分から解放された農民をイギリスでは何と呼ぶか。"
  },
  {
    "answer": "ジェントリ",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "中世末期から近世初頭のイギリスで、騎士や富裕な平民が地主化した階層を、何と呼ぶか。"
  },
  {
    "answer": "ジャックリーの乱",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "封建反動に対し、1358年に北フランスの農民がおこした反乱は何か。"
  },
  {
    "answer": "ギヨーム＝カイエ",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "ジャックリーの乱の指導者は誰か。"
  },
  {
    "answer": "ワット＝タイラーの乱",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "1381年にイギリス東南部でおこった農民の反乱は何か。"
  },
  {
    "answer": "ジョン＝ボール",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "ワット＝タイラーの乱の指導者は、ワット＝タイラーと誰か。"
  },
  {
    "answer": "「アダムが耕しイヴが紡いだ時、誰が貴族だったか」",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "ジョン＝ボールの発言とされる、身分や血統による優劣を否定し、人間の平等を主張する言葉は何か。"
  },
  {
    "answer": "火砲",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "戦術を変化させ、騎士階級の没落を早めた兵器は何か。"
  },
  {
    "answer": "廷臣",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "荘園経営のゆきづまりや戦術の変化で没落した中小貴族や騎士がなった、宮廷で働く官僚を何と呼んだか。"
  },
  {
    "answer": "ボニファティウス8世",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "聖職者課税問題で、フランス国王と争った教皇は誰か。"
  },
  {
    "answer": "フィリップ4世",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "聖職者課税問題で全国三部会を招集し、さらに教皇と争ったフランス国王は誰か。"
  },
  {
    "answer": "アナーニ事件",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "1303年、教皇がローマ近郊で捕囚された出来事は何と呼ばれるか。"
  },
  {
    "answer": "「教皇のバビロン捕囚」",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "1309〜77年まで教皇と教皇庁が移転させられたことを、古代ユダヤ教徒の故事になぞらえて何と呼ぶか。"
  },
  {
    "answer": "教会大分裂（大シスマ）",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "1378〜1417年まで、教皇が南フランスの都市とローマに並立し、ローマ教会の中心が分裂した状態を何と呼ぶか。"
  },
  {
    "answer": "ウィクリフ",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "教会大分裂をみて教皇や教会制度を批判し、聖書の尊重をとなえたオクスフォード大学神学教授は誰か。"
  },
  {
    "answer": "フス",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "聖書主義に共鳴したが、コンスタンツ公会議で異端として焚刑にされたプラハ大学総長は誰か。"
  },
  {
    "answer": "コンスタンツ公会議",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "1414〜18年に神聖ローマ皇帝の提唱で開かれ、教会大分裂を終わらせた公会議は何か。"
  },
  {
    "answer": "ジギスムント",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "コンスタンツ公会議を提唱した、神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "フス戦争",
    "category": "封建社会と教皇権の衰退",
    "chapter": "7",
    "number": "48",
    "question": "1419年から、処刑された人物の説を支持するベーメンの住民が抗議しておこした戦争は何か。"
  },
  {
    "answer": "プランタジネット朝",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "1154年に、アンジュー伯が開いたイギリスの王朝は何か。"
  },
  {
    "answer": "ヘンリ2世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "プランタジネット朝の創始者（初代国王）は誰か。"
  },
  {
    "answer": "ジョン",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "「欠地王」と呼ばれたイギリス国王は誰か。"
  },
  {
    "answer": "フィリップ2世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "12世紀末に即位し、「欠地王」と戦ってフランス国内のイギリス王領の大半を奪った、カペー朝の国王は誰か。"
  },
  {
    "answer": "インノケンティウス3世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "カンタベリ司教任命権争いの末、「欠地王」を破門にした教皇は誰か。"
  },
  {
    "answer": "大憲章（マグナ＝カルタ）",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "1215年、失政を続ける「欠地王」に対して貴族が団結して認めさせた、イギリス立憲政治の基礎となった規定は何か。"
  },
  {
    "answer": "課税/議会の承認",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "大憲章の規定は、「国王による新たな＿＿は、貴族や聖職者による＿＿が必要」空欄に当てはまる語をそれそれ答えなさい。"
  },
  {
    "answer": "ヘンリ3世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "大憲章を無視したため、1258年に貴族の反乱をまねいたイギリス国王は誰か。"
  },
  {
    "answer": "シモン＝ド＝モンフォール",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "1265年にイギリス議会の起源とされる議会をヘンリ３世に認めさせた貴族は誰か。"
  },
  {
    "answer": "模範議会",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "1295年に招集された、高位聖職者・大貴族のほか、各州２名の騎士、各都市２名の市民から構成された議会は何か。"
  },
  {
    "answer": "アルビジョワ派",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "南フランスで広まり、国王による十字軍によって征服された、カタリ派の系列の異端の名称は何か。"
  },
  {
    "answer": "ヴァロワ朝",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "カペー朝の断絶で、1328年に成立したフランスの新王朝は何か。"
  },
  {
    "answer": "フィリップ6世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "カペー朝断絶後に即位して王朝を開いたが、イギリスとの間で百年戦争を引き起こす原因の一つとなったフランス王は誰か。"
  },
  {
    "answer": "エドワード3世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "カペー朝の断絶に際し、フランス王位継承権を主張したイギリス国王は誰か。"
  },
  {
    "answer": "フランドル地方",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "中世ヨーロッパにおいて毛織物業が盛んであった、現在のベルギーを中心とした地方名は何か。"
  },
  {
    "answer": "国王の母がカペー家出身だったため",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "イギリスの王が、カペー朝断絶後のフランス王位継承権を主張した理由は何か。"
  },
  {
    "answer": "クレシーの戦い",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "百年戦争のなか、1346年にイギリス王の率いた軍がフランス軍に大勝した戦いは何か。"
  },
  {
    "answer": "長弓隊",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "百年戦争でイギリス軍が主力とした兵種で、フランス騎士軍に大打撃を与えたのは何か。"
  },
  {
    "answer": "エドワード黒太子",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "ポワティエの戦いで、フランス軍に大勝したイギリス王の長子は誰か。"
  },
  {
    "answer": "シャルル7世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "ジャンヌ＝ダルクの助けをもらい、滞在地からランスに行き、正式に戴冠したフランス王は誰か。"
  },
  {
    "answer": "ジャンヌ＝ダルク",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "神のお告げを受けたとして、フランス軍を率い、百年戦争の勝利に導いた少女は誰か。"
  },
  {
    "answer": "オルレアン",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "百年戦争中、1429年にイギリス軍に包囲された、フランス中部の小都市はどこか。"
  },
  {
    "answer": "常備軍",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "シャルル７世も設置した、平時から直接維持・管理する軍隊を何というか。"
  },
  {
    "answer": "1453年",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "百年戦争が終結したのは西暦何年か。"
  },
  {
    "answer": "ランカスター家/ヨーク家",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "バラ戦争で争った二つの家系を答えなさい。"
  },
  {
    "answer": "ヘンリ７世",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "バラ戦争をおさめて、新国王となったのは誰か。"
  },
  {
    "answer": "テューダー朝",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "1485年に成立したイングランドの新王朝は何か。"
  },
  {
    "answer": "星室庁裁判所",
    "category": "英仏の中央集権化と百年戦争",
    "chapter": "7",
    "number": "49",
    "question": "ヘンリ８世によって宮殿の「星の間」に設置された、身分の高い者を裁く国王直属の裁判所は何と呼ばれるか。"
  },
  {
    "answer": "レコンキスタ(国土回復運動)",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "イベリア半島で８世紀から始まった、イスラーム教徒を駆逐しようとしたキリスト教徒の運動を何と呼ぶか。"
  },
  {
    "answer": "カスティリャ王国・アラゴン王国",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "スペイン(イスパニア)王国は、何という国家が統合された結果誕生したか。二つ国家を答えなさい。"
  },
  {
    "answer": "イサベル",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "成立したスペイン王国の共同統治者となった女王は誰か。"
  },
  {
    "answer": "グラナダ",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "1492年、スペイン王国が陥落させた、ナスル朝の最後の都はどこか。"
  },
  {
    "answer": "ジョアン2世",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "15世紀後半にポルトガル王国の統一を達成し、またインド航路の開拓を進めた国王は誰か。"
  },
  {
    "answer": "シュタウフェン朝",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "フリードリヒ１世・フリードリヒ２世時代が最盛期で、13世紀半ばに断絶した神聖ローマ皇帝家の王朝名は何か。"
  },
  {
    "answer": "大空位時代",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "1256〜73年まで続いた実質的な神聖ローマ皇帝不在の時代を何と呼ぶか。"
  },
  {
    "answer": "領邦",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "13〜14世紀に、ドイツ地域に約300もあった地方主権国家は何と呼ばれるか。"
  },
  {
    "answer": "ハプスブルク家",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "1438年から神聖ローマ皇帝位をほぼ独占することになる、オーストリア地域を支配した名家は何か。"
  },
  {
    "answer": "カール4世",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "金印勅書を発布した、神聖ローマ皇帝兼ベーメン王は誰か。"
  },
  {
    "answer": "金印勅書",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "1356年、皇帝選出権を７人の選帝侯がもつことを認める帝国法が出された。これを何と呼ぶか。"
  },
  {
    "answer": "東方植民",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "12～14世紀に行われた、ドイツ人のエルベ川以東への入植運動を何と呼ぶか。"
  },
  {
    "answer": "ウェストファリア条約",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "スイスの独立は1648年の何という条約で正式に認められたか。"
  },
  {
    "answer": "シチリア王国・ナポリ王国",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "両シチリア王国は何と何という国家に分裂したか。"
  },
  {
    "answer": "教皇党(ゲルフ)",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "都市の大商人が多かった、イタリアでの教皇支持派を何と呼ぶか。"
  },
  {
    "answer": "皇帝党(ギベリン)",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "貴族や領主が多かった、イタリアでの皇帝支持派を何と呼ぶか。"
  },
  {
    "answer": "カルマル同盟",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "1397年、デンマーク王家の支配下で北欧３国が結成した同君連合を何と呼ぶか。"
  },
  {
    "answer": "マルグレーテ",
    "category": "イベリア半島・北欧とドイツ・イタリアの消長",
    "chapter": "7",
    "number": "50",
    "question": "摂政としてデンマーク連合王国の実権を握り、カルマル同盟を指揮したデンマーク王女は誰か。"
  },
  {
    "answer": "12世紀ルネサンス",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "大学の誕生、新建築様式の創出などがみられた、12世紀の文化発展を何と総称するか。"
  },
  {
    "answer": "ラテン語",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "12世紀以降、イスラーム世界で醸成された文化が流入したことで、何語による古典文化が復活したか。"
  },
  {
    "answer": "パリ大学",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "12世紀半ば、パリ大司教を長として、私塾の教師や学生によって結成され、神学の最高権威となった大学はどこか。"
  },
  {
    "answer": "オクスフォード大学",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "12世紀後半、パリ大学を範に設立され、イギリスでの神学の中心となった大学はどこか。"
  },
  {
    "answer": "ボローニャ大学",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "11世紀末、北イタリアに設立された世界最古の大学で、法学の研究で有名であったのはどこか。"
  },
  {
    "answer": "サレルノ大学",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "中世の大学の一つで、医学で有名であった南イタリアの大学はどこか。"
  },
  {
    "answer": "スコラ学",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "キリスト教教理とアリストテレス哲学が結びついて体系化された、中世の神学・哲学を何と呼ぶか。"
  },
  {
    "answer": "「哲学は神学の婢」",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "中世ヨーロッパにおいて、信仰を理性によって補強しようとするスコラ哲学の立場を象徴する言葉は何か。"
  },
  {
    "answer": "アンセルムス",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "実在論をとなえ、「スコラ学の父」と呼ばれたカンタベリ大司教は誰か。"
  },
  {
    "answer": "アベラール",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "唯名論を主張したフランスの学者は誰か。"
  },
  {
    "answer": "ウィリアム＝オブ＝オッカム",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "唯名論に立ち、信仰と理性、神学と哲学を区別した、14世紀前半のイギリスのスコラ学者は誰か。"
  },
  {
    "answer": "トマス＝アクィナス",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "普遍論争をいちおう解決したとされ、スコラ学の大成者と呼ばれるパリ大学教授は誰か。"
  },
  {
    "answer": "『神学大全』",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "トマス＝アクィナスが執筆した、スコラ学を体系的に解説した書物は何か。"
  },
  {
    "answer": "ロジャー＝ベーコン",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "イスラーム諸学の影響を受け、経験を重視し、近代自然科学への道を開いたイギリスのスコラ学者は誰か。"
  },
  {
    "answer": "騎士道物語",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "中世騎士の理想像や冒険を主題とした、口語の宮廷文学を何と呼ぶか。"
  },
  {
    "answer": "『ローランの歌』",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "フランスで成立した、カール大帝の対イスラーム戦を舞台に、騎士の武勲や恋をうたった作品は何か。"
  },
  {
    "answer": "『アーサー王物語』",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "ウェールズ地方で生まれた、ケルト人（ブリトン人）の伝説的英雄を題材とした作品は何か。"
  },
  {
    "answer": "『ニーベルンゲンの歌』",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "民族移動期の史実や伝説を素材とした、ブルグンドの大英雄叙事詩は何か。"
  },
  {
    "answer": "ロマネスク様式",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "11〜12世紀に西欧で発達した、「ローマ風」を意味する、重厚・荘重さをもつ建築様式は何か。"
  },
  {
    "answer": "ゴシック様式",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "12世紀に北フランスからおこった、尖頭アーチと広い窓をもち、大規模な教会建築の主流となった様式は何か。"
  },
  {
    "answer": "ピサ大聖堂",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "イタリアにおける、ロマネスク様式の代表的聖堂は何か。"
  },
  {
    "answer": "ノートルダム大聖堂",
    "category": "西ヨーロッパの中世文化",
    "chapter": "7",
    "number": "51",
    "question": "12世紀に着工され、13世紀にほぼ完成した、パリにあるゴシック様式の代表的聖堂は何か。"
  },
  {
    "answer": "帝国教会政策",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "聖職叙任権の掌握を通じ、教会組織を支配下に置き、有力諸侯の勢力削減を図る神聖ローマ皇帝の政策名は何か。"
  },
  {
    "answer": "教皇：カリクストゥス2世、皇帝：ハインリヒ5世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1122年、ヴォルムス協約を結んだ教皇と皇帝をそれぞれ答えなさい。"
  },
  {
    "answer": "ニカの乱",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "532年、ビザンツ帝国のユスティニアヌスに対し重税への反発から起こった反乱は何か。"
  },
  {
    "answer": "ベリサリウス",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ユスティニアヌスにより派遣され、ヴァンダル王国を滅ぼし、カルタゴに総督府を置いた将軍は誰か。"
  },
  {
    "answer": "ナルセス",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ユスティニアヌスによって派遣され、東ゴート王国を滅ぼし、ラヴェンナに総督府を置いた将軍は誰か。"
  },
  {
    "answer": "サン＝ヴィターレ聖堂",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ユスティニアヌスと家臣たちを描いたモザイク壁画の残るラヴェンナの聖堂の名前は何か。"
  },
  {
    "answer": "ヘラクレイオス1世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "7世紀前半に軍管区制を施行したとされるビザンツ皇帝は誰か。"
  },
  {
    "answer": "マケドニア朝",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ビザンツ帝国中期、バシレイオス1世が創始し、バシレイオス2世ら軍人出身皇帝が活躍した王朝名は何か。"
  },
  {
    "answer": "ニカイア（ニケーア）帝国",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "第４回十字軍により一時的に滅亡させられたビザンツ帝国が亡命政権として建てた帝国名は何か。"
  },
  {
    "answer": "ソリドゥス金貨（ノミスマ）",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ビザンツ帝国で発行され、ヨーロッパで流通し、現在の$の語源となった金貨の名前は何か。"
  },
  {
    "answer": "アレクシオス1世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "セルジューク朝撃退のために教皇に十字軍派遣を要請したビザンツ皇帝は誰か。"
  },
  {
    "answer": "ステファン＝ドゥシャン",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "14世紀前半にバルカン半島北部を支配しギリシア正教を受容したセルビア国王は誰か。"
  },
  {
    "answer": "コソヴォの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1389年、セルビア王国がオスマン帝国に敗れその支配下に入ることになった戦いは何か。"
  },
  {
    "answer": "モラヴィア王国",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "9世紀に西スラヴ人の一派のチェック人がスロヴァク人とともに建てたが、ハンガリー王国により滅ぼされたスラヴ人最初の王国は何か。"
  },
  {
    "answer": "カジミェシュ3世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "14世紀半ば、ポーランド王国の全盛期を現出し、ドイツ騎士団の入植を奨励し、経済発展を実現し、クラクフ大学を創設した国王は誰か。"
  },
  {
    "answer": "タンネンベルクの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1410年、ポーランド王国がドイツ騎士団を撃破し、リトアニア大公国のカトリック化が進行するきっかけとなった戦いは何か。"
  },
  {
    "answer": "シメオン1世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "10世紀前半、アドリア海まで領土を拡大し、ブルガリア帝国の全盛期を現出した君主は誰か。"
  },
  {
    "answer": "ワラキア公国",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ルーマニア人が14世紀にルーマニア南部に建てた国は何か。"
  },
  {
    "answer": "モルダヴィア公国",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ルーマニア人が14世紀にルーマニア北東部に建てた国は何か。"
  },
  {
    "answer": "グラゴール文字",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "クロアティア人、スロヴェニア人が用いた文字は何か。"
  },
  {
    "answer": "プレスター＝ジョン伝説",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "十字軍の背景となった、ヨーロッパの東方にキリスト教司祭が君主の国家があり、イスラーム勢力討伐に協力するという伝説のことを何と呼ぶか。"
  },
  {
    "answer": "(ロレーヌ公)ゴドフロワ",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "第１回十字軍の中心となったフランスの諸侯は誰か。"
  },
  {
    "answer": "神聖ローマ皇帝：コンラート3世、フランス王：ルイ7世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "第２回十字軍の中心となった神聖ローマ皇帝とフランス王は誰か。"
  },
  {
    "answer": "フリードリヒ2世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "第５回十字軍の中心となった神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "アッコン",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ルイ9世の率いた第７回十字軍の拠点で、マムルーク朝により陥落した東地中海の都市はどこか。"
  },
  {
    "answer": "テンプル騎士団",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "十字軍の運動の一環で設立されたが、フィリップ4世により解散させられた宗教騎士団は何か。"
  },
  {
    "answer": "ヨハネ騎士団",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "のちにはマルタ騎士団と呼ばれ、16世紀にはロドス島をめぐりオスマン帝国のスレイマン1世と争った宗教騎士団は何か。"
  },
  {
    "answer": "キオッジャの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ヴェネツィアが東方貿易で争ったジェノヴァと戦い、勝利した1379-80年の戦いは何か。"
  },
  {
    "answer": "レニャーノの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1176年、ミラノを盟主とするロンバルディア同盟が皇帝軍を破った戦いは何か。"
  },
  {
    "answer": "ラテラノ公会議",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1215年、インノケンティウス3世により主催され、ユダヤ人の土地所有を禁じ、商業や金貸業につく者が多くなるきっかけとなった公会議は何か。"
  },
  {
    "answer": "ギヨーム＝カイエ（ギヨーム＝カール）",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1358年にフランスで起こったジャックリーの乱の指導者は誰か。"
  },
  {
    "answer": "ジャック＝ケイドの乱",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1450年、イギリスで起こり農民の自由化がほぼ達成されるきっかけとなった農民反乱は何か。"
  },
  {
    "answer": "クレメンス5世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1309年「教皇のバビロン捕囚」で教皇庁がアヴィニョンに移った時の教皇は誰か。"
  },
  {
    "answer": "ドゥームズデイ＝ブック",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "ノルマン朝のウィリアム1世が作成した土地調査簿の名称は何か。"
  },
  {
    "answer": "ヘンリ2世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "プランタジネット朝の創始者は誰か。"
  },
  {
    "answer": "ブーヴィーヌの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1214年、フランス王フィリップ2世がイギリス王ジョンを破り領土を奪った戦いは何か。"
  },
  {
    "answer": "ギュイエンヌ地方（アキテーヌ地方）",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "フランス南西部のボルドーを中心都市として、フランドル地方とともに英仏が獲得を目指した葡萄酒の特産地はどこか。"
  },
  {
    "answer": "クレシーの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1346年、イギリスのエドワード3世率いる長弓隊が活躍し、翌年にはカラーを占領することとなった戦いは何か。"
  },
  {
    "answer": "ポワティエの戦い",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1356年、エドワード黒太子率いるイギリス軍がフランス軍に勝利した戦いは何か。"
  },
  {
    "answer": "シャルル7世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1453年、百年戦争に勝利した時代のフランス王は誰か。"
  },
  {
    "answer": "ジャック＝クール",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "シャルル7世に仕え、財政改革を行なった商人は誰か。"
  },
  {
    "answer": "星室庁裁判所",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "バラ戦争を収め、テューダー朝を創始したヘンリ7世が反対派貴族を弾圧するために設置した裁判所は何か。"
  },
  {
    "answer": "ザクセン朝",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "919-1024年の神聖ローマ帝国の王朝名は何か。"
  },
  {
    "answer": "ザリエル朝",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1024-1125年の神聖ローマ帝国の王朝名は何か。"
  },
  {
    "answer": "ホーエンシュタウフェン朝",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "フリードリヒ1世、フリードリヒ2世が活躍した神聖ローマ帝国の王朝名は何か(1138-1208,1215-1254)。"
  },
  {
    "answer": "ルドルフ1世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "神聖ローマ皇帝に即位し、大空位時代を終わらせたハプスブルク家の人物は誰か。"
  },
  {
    "answer": "ルクセンブルク家",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "神聖ローマ皇帝カール4世の出身家系はどこか。"
  },
  {
    "answer": "カレル1世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "金印勅書の発布以外にもプラハ大学を創設したカール4世のベーメン国王としての名前は何か。"
  },
  {
    "answer": "シチリアの晩鐘",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1282年、フランスのアンジュー家支配に現地人が反発して起こし、現地人を支援したアラゴン家によるシチリア王国とアンジュー家のナポリ王国に両シチリア王国が分裂した事件は何か。"
  },
  {
    "answer": "グスタフ1世",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "1523年、カルマル同盟から離脱した時代のスウェーデン国王は誰か。"
  },
  {
    "answer": "トレド、パレルモ",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "12世紀ルネサンスの中心となったイベリア半島とシチリア島の都市をそれぞれ答えなさい。"
  },
  {
    "answer": "アインハルト",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "フランク王国のカール大帝に仕え、『カール大帝伝』を残した歴史家は誰か。"
  },
  {
    "answer": "トゥルバドゥール、ミンネジンガー",
    "category": "難関私大対策",
    "chapter": "7",
    "number": "Z",
    "question": "中世ヨーロッパの宮廷で活躍した吟遊詩人のことをフランス語・ドイツ語でそれぞれ何というか。"
  },
  {
    "answer": "上京臨潢府",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "遼の都はどこか。"
  },
  {
    "answer": "契丹",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "遼河支流のシラ＝ムレン川流域で遊牧生活を営み、キタイと呼ばれていた遊牧狩猟民の中国名は何か。"
  },
  {
    "answer": "耶律阿保機",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "遼の建国者（太祖）で、その後、926年には渤海を滅ぼした人物は誰か。"
  },
  {
    "answer": "燕雲十六州",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "936年、五代の後晋の建国を援助した代償として遼が獲得した、現在の北京・大同を中心とした地域名は何か。"
  },
  {
    "answer": "澶淵の盟",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "1004年に結ばれた、宋を兄、遼を弟とし、毎年銀と絹を受け取ることを内容とした、宋との講和条約は何か。"
  },
  {
    "answer": "部族制/州県制",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "遼の二重統治体制について、北方の遊牧民・南方の定住民それぞれをどのような制度で統治したか。"
  },
  {
    "answer": "耶律大石",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "金に敗れて遼が滅亡したのち、中央アジアに西遼（カラ・キタイ）を建てた人物は誰か。"
  },
  {
    "answer": "興慶",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "西夏の都はどこか。"
  },
  {
    "answer": "李元昊",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "西夏の建国者は誰か。"
  },
  {
    "answer": "慶暦の和約",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "11世紀、北宋と西夏との戦争の後に結ばれ、宋が歳賜を送ることで一時的に和平が成立した条約を何というか。"
  },
  {
    "answer": "燕京",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "12世紀半ばから金の首都となった、中都（現北京）の遼時代の呼び名は何か。"
  },
  {
    "answer": "完顔阿骨打",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "完顔部の首長で、金の初代皇帝（太祖）となったのは誰か。"
  },
  {
    "answer": "猛安・謀克",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "自民族の部族組織を基に、300戸から100人を徴兵することを基礎とした金の軍事・行政組織は何か。"
  },
  {
    "answer": "靖康の変",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "遼を滅ぼした金が、宋の違約を理由に開封を占領し、1127年に宋（北宋）を滅ぼした事件を何と呼ぶか。"
  },
  {
    "answer": "女真文字",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "契丹文字と漢字を母体につくられた金の民族文字は何か。"
  },
  {
    "answer": "全真教",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "金の時代、華北で成立した、儒教・仏教・道教を調和させた道教の一派の名称は何か。"
  },
  {
    "answer": "王重陽",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "全真教を創始した道士は誰か。"
  },
  {
    "answer": "交鈔",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "金や元で発行された紙幣で、銀と交換可能とされたが、元代、乱発により信用が低下したものは何か。"
  },
  {
    "answer": "交子",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "手形から発展した、北宋で発行された世界最古の紙幣は何か。"
  },
  {
    "answer": "開城",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "高麗の都はどこか。"
  },
  {
    "answer": "両班",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "高麗のとき形成され、朝鮮時代には党争を繰り返した政治・社会の特権階層を何と呼ぶか。"
  },
  {
    "answer": "金属活字",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "高麗で、世界で最初に使用されたとされる、印刷活字は何か。"
  },
  {
    "answer": "大理",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "宋代に、雲南地方に存在した国は何か。"
  },
  {
    "answer": "国風文化",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "藤原氏の摂関政治時代を中心として発達した、日本風の貴族文化を何と呼ぶか。"
  },
  {
    "answer": "日宋貿易",
    "category": "東アジアの勢力交替",
    "chapter": "8",
    "number": "52",
    "question": "平氏政権のときから鎌倉中期にかけて行われた、日本と中国との貿易を何と呼ぶか。"
  },
  {
    "answer": "開封",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "後唐を除く、汴州とも呼ばれる五代と北宋の首都はどこか。"
  },
  {
    "answer": "「清明上河図」",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "北宋の首都のにぎわう様子を描いた、張択端の作となる絵巻物は何か。"
  },
  {
    "answer": "趙匡胤",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "北宋の建国者は誰か。"
  },
  {
    "answer": "960年",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "北宋が建国されたのは西暦何年か。"
  },
  {
    "answer": "太宗",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "979年に中国統一を完成した、北宋の第２代皇帝は誰か。"
  },
  {
    "answer": "文治主義",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "君主独裁制を確立するため、北宋が採用した、文人官僚優位の統治政策を何と呼ぶか。"
  },
  {
    "answer": "殿試",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "北宋の初代皇帝のとき、科挙が完成された。このとき科挙の最終試験として設けられたものは何か。"
  },
  {
    "answer": "士大夫",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "宋代以降、儒教的教養をもつ社会的支配層を指した名称は何か。"
  },
  {
    "answer": "禁軍",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "中国の王朝で皇帝直属の軍隊として宮廷の警備や皇帝の護衛を担当した、常設の精鋭軍を何というか。"
  },
  {
    "answer": "神宗",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "北宋で新法が実施されたときの皇帝は誰か。"
  },
  {
    "answer": "王安石",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "宰相として新法を実施した、政治家にして唐宋八大家の一人でもある人物は誰か。"
  },
  {
    "answer": "青苗法",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "新法の一つで、小農民救済のため、植え付け時に穀物や資金を低利で貸し付けた法は何か。"
  },
  {
    "answer": "市易法",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "新法の一つで、中小商人の保護を目的とした低利融資法は何か。"
  },
  {
    "answer": "保甲法",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "新法の一つで、農閑期に軍事訓練を行い、民兵の養成をはかった法は何か。"
  },
  {
    "answer": "司馬光",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "旧法党の中心的人物は誰か。"
  },
  {
    "answer": "徽宗/欽宗",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "靖康の変で北方に連れ去られた上皇/皇帝は誰か、それぞれ答えなさい。"
  },
  {
    "answer": "臨安",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "南宋の首都はどこか。"
  },
  {
    "answer": "高宗",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "宋を再建させた(南宋を建国した)皇帝は誰か。"
  },
  {
    "answer": "秦檜",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "金との和平をとなえた、南宋の中心的政治家は誰か。"
  },
  {
    "answer": "岳飛",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "金への抗戦をとなえた、南宋の主戦派の武将は誰か。"
  },
  {
    "answer": "紹興の和約",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "12世紀、南宋と金の間で結ばれ、南宋が金に臣下の礼をとり歳賜を送ることを約束して講和が成立した条約を何というか。"
  },
  {
    "answer": "淮河",
    "category": "五代・北宋・南宋の情勢",
    "chapter": "8",
    "number": "53",
    "question": "金と南宋の国境線となった河川は何か。"
  },
  {
    "answer": "草市",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代に数多くあらわれた、城壁の外などで自然発生的に生まれた定期市の交易場は何と呼ばれたか。"
  },
  {
    "answer": "鎮",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "草市から発展したものが多い、地方の小都市は何と呼ばれたか。"
  },
  {
    "answer": "行",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "営業の独占や相互扶助を目的につくられた、宋代の同業商人の組合は何か。"
  },
  {
    "answer": "作",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代の手工業者の同業組合は何か。"
  },
  {
    "answer": "銅銭",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "大量に鋳造され、隣接諸地域でも流通した宋銭とも呼ばれた貨幣は何か。"
  },
  {
    "answer": "交子",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "手形から発展した、北宋で発行された世界最古の紙幣は何か。"
  },
  {
    "answer": "会子",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "南宋で発行された紙幣は何か。"
  },
  {
    "answer": "景徳鎮",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "江西省にある、陶磁器業で有名な都市はどこか。"
  },
  {
    "answer": "茶",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "唐代中期には一般民衆にも広まり、宋代になると国内のみならず、周辺民族にも普及した飲み物は何か。"
  },
  {
    "answer": "青磁・白磁",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "唐や宋の時代に中国で発達し、日本や朝鮮にも影響を与えた、青緑色や白色の釉薬をかけた陶磁器をそれぞれ何というか。"
  },
  {
    "answer": "「蘇湖熟すれば天下足る」",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代中期から、江南地方が中国の穀倉地帯の中心となったことを示すことばは何か。"
  },
  {
    "answer": "占城稲",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "北宋のときベトナムから種子が取りよせられた、日照りに強い早稲種は何か。"
  },
  {
    "answer": "士大夫",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代以降、儒教的教養をもつ社会的支配層を指した名称は何か。"
  },
  {
    "answer": "宋学（朱子学）",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代に成立した、新しい宇宙観や実践倫理を探究する、新しい儒学を何と呼んだか。"
  },
  {
    "answer": "周敦頤",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "道家思想や仏教哲学を導入しながら『太極図説』を著し、宋学の先駆者となった北宋の儒学者は誰か。"
  },
  {
    "answer": "朱熹",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "朱子学を大成し、格物致知、理気二元論、性即理説などを説いた、南宋の儒学者は誰か。"
  },
  {
    "answer": "『大学』『中庸』『論語』『孟子』",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "四書を全て答えなさい。"
  },
  {
    "answer": "『資治通鑑』",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "旧法党の中心人物でもある司馬光が、戦国時代から五代末までを編年体で著した史書は何か。"
  },
  {
    "answer": "院体画",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代、画院に属する画家が描いた、写実的で装飾的な宮廷様式の画風を何と呼ぶか。"
  },
  {
    "answer": "文人画",
    "category": "宋代の経済と文化",
    "chapter": "8",
    "number": "54",
    "question": "宋代、絵画の専門家でない文人が、山水・人物などを水墨や細い線で余技に描いた画風を何と呼ぶか。"
  },
  {
    "answer": "テムジン",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "チンギス＝カンの本名は何か。"
  },
  {
    "answer": "クリルタイ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "モンゴル語で「集会」を意味する、最高議決機関は何か。"
  },
  {
    "answer": "1206年",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "チンギス＝カンが「カン」の称号を得たのは西暦何年か。"
  },
  {
    "answer": "千戸制",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "チンギス＝カンが組織したモンゴル帝国の政治・軍事制度の名称は何か。"
  },
  {
    "answer": "ナイマン",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "一時西遼を乗っ取ったが、チンギス＝カンの派遣軍に滅ぼされた遊牧トルコ系部族の名称は何か。"
  },
  {
    "answer": "オゴデイ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "チンギス＝カンの後を継ぎ、大モンゴル国を支配したカアンは誰か。"
  },
  {
    "answer": "金",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "1234年に滅ぼされた、中国東北地方を本拠地とした国はどこか。"
  },
  {
    "answer": "カラコルム",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "２代指導者の時に設定された、大モンゴル国の首都はどこか。"
  },
  {
    "answer": "バトゥ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "２代指導者の命でヨーロッパ遠征軍の総司令官となったのは誰か。"
  },
  {
    "answer": "ワールシュタットの戦い",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "モンゴルの遠征軍が、ポーランドのリーグニッツ近郊でドイツ・ポーランド連合軍を破ったとされる戦いは何か。"
  },
  {
    "answer": "グユク",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "大モンゴル国の第3代カアンに即位したが、在位わずか2年で急死した人物は誰か。"
  },
  {
    "answer": "モンケ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "大モンゴル国の第４代カアンとなったのは誰か。"
  },
  {
    "answer": "フレグ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "４代カアンの命で西アジアに遠征し、アッバース朝を滅ぼしたのは誰か。"
  },
  {
    "answer": "クビライ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "大モンゴル国の第５代カアンとなったのは誰か。"
  },
  {
    "answer": "大都",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "大モンゴル国が1264年に遷都した都市はどこか。"
  },
  {
    "answer": "元(大元ウルス)",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "大モンゴル国による遷都ののち、1271年に定めた中国風の国号は何か。"
  },
  {
    "answer": "カイドゥの乱",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "クビライの即位に反発し、中央アジアで独自の勢力を築き、元朝と対立を続けた反乱を何というか。"
  },
  {
    "answer": "サライ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "大モンゴル国の分裂後、キプチャク＝ハン国の都としてヴォルガ川下流域に建設された都市を何というか。"
  },
  {
    "answer": "タブリーズ",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "イル＝ハン国の都として栄え、東西交易の拠点となった、現在のイラン北西部に位置する都市はどこか。"
  },
  {
    "answer": "アルマリク",
    "category": "モンゴル帝国の形成",
    "chapter": "8",
    "number": "55",
    "question": "チャガタイ＝ハン国の都として栄え、東西交易の拠点になった、現在の新疆ウイグル自治区付近にあった都市はどこか。"
  },
  {
    "answer": "枢密院",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "元において、軍事を統括した機関は何か。"
  },
  {
    "answer": "色目人",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "元でモンゴル人のつぎに重用され、財政・文化面で活躍した中央アジア・西アジア出身の人びとを何と呼んだか。"
  },
  {
    "answer": "漢人",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "元の時代、旧金朝支配下の住民を何と総称したか。"
  },
  {
    "answer": "南人",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "元の時代、旧南宋支配下の住民は最下位におかれた。彼らのことを何と総称したか。"
  },
  {
    "answer": "ジャムチ",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "モンゴル帝国で創設され、元代、主要道路10里ごとに駅をおく交通制度が完備された。これをモンゴル語で何と呼ぶか。"
  },
  {
    "answer": "泉州",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "マルコ＝ポーロが、ザイトンと呼び、世界第一の港市として紹介した福建省の都市はどこか。"
  },
  {
    "answer": "交鈔",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "金朝についで、元朝でも発行された紙幣は何か。"
  },
  {
    "answer": "紅巾の乱",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "元末、韓山童・韓林児親子を指導者に、白蓮教を中心に江南で始まった農民反乱は何か。"
  },
  {
    "answer": "朱元璋",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "紅巾の乱を契機に頭角を現し、元を北へ追いやって明を建国した初代皇帝は誰か。"
  },
  {
    "answer": "北元",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "明に大都を奪われモンゴル高原に退いたのち、２代続いた元は、何と呼ばれたか。"
  },
  {
    "answer": "ティムール",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "14世紀に中央アジアで勢力を築き、サマルカンドを都として王朝を建てたトルコ系イスラーム王朝の創始者は誰か。"
  },
  {
    "answer": "スコータイ朝",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "タイ人がインドシナ半島で最初に樹立した王朝は何か。"
  },
  {
    "answer": "アユタヤ朝",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "14世紀半ばに建てられ、中国・日本やヨーロッパとの貿易で繁栄したタイの王朝は何か。"
  },
  {
    "answer": "陳朝",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "13世紀前半～1400年に存続し、元軍の侵攻を撃退した北部ベトナム・大越国の王朝は何か。"
  },
  {
    "answer": "マジャパヒト王国",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "13世紀末、元軍を撃退して東部ジャワに成立したヒンドゥー王国は何か。"
  },
  {
    "answer": "銅銭",
    "category": "元の支配・滅亡/元代の周辺諸国",
    "chapter": "8",
    "number": "56",
    "question": "日元貿易によって日本にもたらされた貨幣は何か。"
  },
  {
    "answer": "プラノ＝カルピニ",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "13世紀半ば、ローマ教皇の命で派遣され、カラコルムでグユク＝ハンに謁見したフランチェスコ会の修道士は誰か。"
  },
  {
    "answer": "ルブルック",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "13世紀、ルイ9世の命で派遣され、カラコルムに滞在してその様子をヨーロッパに伝えたフランチェスコ会修道士は誰か。"
  },
  {
    "answer": "マルコ＝ポーロ",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "ヴェネツィア出身でクビライに仕えた経験をもち、『世界の記述』を著してヨーロッパにアジアの情報を伝えた人物は誰か。"
  },
  {
    "answer": "『世界の記述』",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "マルコ＝ポーロがアジアでの見聞を口述し記録された、ヨーロッパに東方世界の情報を伝えた書物は何か。"
  },
  {
    "answer": "モンテ＝コルヴィノ",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "13世紀末にローマ教皇の命で元の都大都に派遣され、大都の司教に任じられたフランチェスコ会の修道士は誰か。"
  },
  {
    "answer": "パクパ文字",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "クビライがチベット仏教僧に命じて制定させた、モンゴル帝国の公用文字として使用された表音文字を何というか。"
  },
  {
    "answer": "郭守敬",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "元の時代に活躍し、授時暦を作成し、中国の暦法に大きな影響を与えた天文学者は誰か。"
  },
  {
    "answer": "授時暦",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "元の郭守敬によって作成され、季節の変化をより正確に反映するために用いられた暦法は何か。"
  },
  {
    "answer": "貞享暦",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "江戸時代中期に渋川春海が作成した、日本で最初の国産暦を何というか。"
  },
  {
    "answer": "『西廂記』",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "元の王実甫によって書かれた、若い男女の恋愛を描いた戯曲で、中国古典恋愛文学の傑作とされる作品は何か。"
  },
  {
    "answer": "『琵琶記』",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "元の高明の作で、蔡伯喈と趙五娘の夫婦の離別と再会を描いた南戯の代表的な作品は何か。"
  },
  {
    "answer": "『漢宮秋』",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "元代の馬致遠の代表作で、前漢の元帝と王昭君の悲劇的な別れを描いた雑劇の作品名は何か。"
  },
  {
    "answer": "サマルカンド",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "ティムール朝の都はどこか。"
  },
  {
    "answer": "アンカラの戦い",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "1402年、ティムールがオスマン帝国軍を破り、オスマン帝国が一時的に停滞した戦いは何か。"
  },
  {
    "answer": "シャー＝ルフ",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "ティムール朝第３代君主で、父の死後、内乱を収拾し、ヘラートに都を定めて文化を保護した人物は何か。"
  },
  {
    "answer": "ウルグ＝ベク",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "ティムール朝の第4代君主で、サマルカンドに天文台を建設し、天文学研究を行った学者としても知られる人物は何か。"
  },
  {
    "answer": "遊牧ウズベク",
    "category": "モンゴル帝国時代の文化/ティムール朝",
    "chapter": "8",
    "number": "57",
    "question": "ティムール朝を滅亡させたトルコ系遊牧民は何か。"
  },
  {
    "answer": "清明上河図",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "北宋の都である開封の繁栄を描いた張択端による作品は何か。"
  },
  {
    "answer": "中書門下省",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "北宋代に、審議機関をなくし皇帝独裁を強化するために、中書省が門下省を吸収した機関は何か。"
  },
  {
    "answer": "太宗（趙光義）",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "北漢を滅ぼし、中国を再統一した北宋２代目の皇帝は誰か。"
  },
  {
    "answer": "神宗",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "宰相の王安石に新法を推進させた北宋の皇帝は誰か。"
  },
  {
    "answer": "均輸法",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "新法のうち、検地と土地の良否により税額に差をつける法を何というか。"
  },
  {
    "answer": "徽宗、欽宗",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "靖康の変で金に連行された上皇と皇帝は誰か。"
  },
  {
    "answer": "高宗（趙構）",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "靖康の変から逃れた皇帝一族の一人で、南宋を建国した人物は誰か。"
  },
  {
    "answer": "瓦子",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "城内の一等地に建てられ、中には茶館・酒楼（飲食店）や勾欄（演芸場）が設けられた繁華街を何というか。"
  },
  {
    "answer": "泉州、広州、明州",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "宋代の南海貿易で栄えた海港都市のうち、浙江省・広東省・福建省の都市名をそれぞれ答えなさい。"
  },
  {
    "answer": "囲田・圩田・湖田",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "宋代での農業の変化の中で、湿地・河岸・池・湖を堤防で囲み干拓した田のことを何と呼ぶか。"
  },
  {
    "answer": "『大学』『中庸』『論語』『孟子』",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "朱子学が重視した「四書」を全て答えなさい。"
  },
  {
    "answer": "周敦頤",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "北宋の儒学者のうち、道家思想と仏教哲学を導入し、中庸に基づく道徳論を基礎づけ、『太極図説』を残した人物は誰か。"
  },
  {
    "answer": "理気二元論",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "周敦頤に学んだ程頤、程顥が唱えた宇宙万物の根本原理と物質形成原理に関する理論を何と呼ぶか。"
  },
  {
    "answer": "陸九淵（陸象山）",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "南宋代に倫理学的立場から性即理を否定し、朱子学を否定した人物は誰か。"
  },
  {
    "answer": "編年体",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "北宋代に司馬光が著した『資治通鑑』の記述形式は何か。"
  },
  {
    "answer": "欧陽脩",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "『新唐書』『新五代史』を残した北宋代の歴史家は誰か。"
  },
  {
    "answer": "蘇軾",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "旧法党に属し、『赤壁の賦』で有名な唐宋八大家の人物は誰か。"
  },
  {
    "answer": "方臘の乱",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "新法が廃止され、中小農民の没落が進み、12世紀初めに江南で起こった反乱は何か。"
  },
  {
    "answer": "雑劇",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "歌・台詞・仕草を伴う歌劇で、元代の元曲のもととなった芸術形式を何と呼ぶか。"
  },
  {
    "answer": "徽宗",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "宋代に翰林図画院出身の画家を中心に、宮廷で発達した院体画（北宋画）の一派として南宋の夏珪・馬遠と並び評され、「桃鳩図」の代表作をもつ北宋の人物は誰か。"
  },
  {
    "answer": "文人画",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "李公麟、牧谿など職業画家ではない文人・士大夫を中心に発達した絵画の一派は何か。"
  },
  {
    "answer": "李公蘊",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ベトナムの李朝の建国者は誰か。"
  },
  {
    "answer": "上京臨潢府",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "遼の都はどこか。"
  },
  {
    "answer": "太宗（耶律堯骨）",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "936年に燕雲十六州を獲得した時代の遼の２代目君主は誰か。"
  },
  {
    "answer": "北面官",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "遼の二重統治体制の中で、遊牧民に部族制を施行した機関名は何か。"
  },
  {
    "answer": "ナイマン",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "1211年に西遼を滅ぼした、モンゴル高原西部のトルコ系遊牧民は何か。"
  },
  {
    "answer": "興慶府",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "西夏の都はどこか。"
  },
  {
    "answer": "チンギス＝カン",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "1227年に西夏を滅ぼした元の君主は誰か。"
  },
  {
    "answer": "会寧府",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "金の建国当初の都はどこか。"
  },
  {
    "answer": "中都",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "金の４代目の海陵王の時に遷した先の都で、現在の北京の当時の都市名は何か。"
  },
  {
    "answer": "トゥルイ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "チンギス第３子のオゴデイ即位に協力した末弟の名前は何か。"
  },
  {
    "answer": "ジュチ（ジョチ）",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "チンギスの第１子で、バトゥの父親は誰か。"
  },
  {
    "answer": "リーグニッツ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ワールシュタットの戦いが行われたとされる、現在のポーランドの地名は何か。"
  },
  {
    "answer": "アリクブケ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "クビライ即位に反発し、カラコルムで即位したクビライの弟は誰か。"
  },
  {
    "answer": "カイドゥ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "1266-1303年、反乱を起こしたオゴデイの孫は誰か。"
  },
  {
    "answer": "キプチャク＝ハン国：サライ、チャガタイ＝ハン国：アルマリク、イル＝ハン国：タブリーズ、大元ウルス（元）：大都",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "４ハン国の都をそれぞれ答えなさい。"
  },
  {
    "answer": "ウズベク＝ハン",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "キプチャク＝ハン国の全盛期を現出し、イスラーム教を受容した君主は誰か。"
  },
  {
    "answer": "行中書省",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元の地方の行政・軍事・財政を司どった機関は何か。"
  },
  {
    "answer": "仁宗",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "1313年、それまで中止されていた科挙を復活させた元の君主は誰か。"
  },
  {
    "answer": "キンザイ：杭州、ザイトン：泉州、カンフー：広州",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元代に反映した都市のうち、マルコ＝ポーロが「キンザイ」「ザイトン」「カンフー」と紹介した都市をそれぞれ答えなさい。"
  },
  {
    "answer": "韓山童、韓林児",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元末の紅巾の乱を指導した親子は誰か。"
  },
  {
    "answer": "マリーニョーリ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "フランチェスコ派修道士で、モンテ＝コルヴィノの後継者として1342年に大都に到着した人物は誰か。"
  },
  {
    "answer": "ラッバン＝ソウマ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "イル＝ハン国を経て西欧にわたり、教皇ニコラウス4世に謁見したウイグル人のネストリウス派司祭は誰か。"
  },
  {
    "answer": "貞享暦",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "郭守敬の授時暦をもとに江戸時代の日本で渋川春海が作成した暦は何か。"
  },
  {
    "answer": "『十八史略』",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元代に曾先之がまとめた初心者向けの歴史書は何か。"
  },
  {
    "answer": "『文献通考』",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元の馬端臨が著した制度史書は何か。"
  },
  {
    "answer": "染付",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元を代表する陶磁器で、白磁にコバルトブルーで絵付けした焼き物は何か。"
  },
  {
    "answer": "『西廂記』『漢宮秋』『琵琶記』",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "元曲の代表作を３つ答えなさい。"
  },
  {
    "answer": "黄公望、王蒙、倪瓚、呉鎮",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "絵画に秀でた元末四大家の名前を答えなさい。"
  },
  {
    "answer": "ラームカムヘーン",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "13世紀後半に上座部仏教を国教化し、タイ文字をつくり、タイのスコータイ朝の全盛期を現出した国王は誰か。"
  },
  {
    "answer": "三別抄の乱",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "1270-1273年、モンゴルに解散を命じられた高麗の軍団が済州島を中心に起こした反乱は何か。"
  },
  {
    "answer": "サマルカンド",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ティムール朝の建国時の都はどこか。"
  },
  {
    "answer": "チャガタイ＝ハン国",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ティムール朝を当初服属させたが、のちにそこからティムール朝が独立した国家はどこか。"
  },
  {
    "answer": "オトラル",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ティムールが明への遠征途上に亡くなった場所はどこか。"
  },
  {
    "answer": "シャー＝ルフ",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "明やオスマン帝国と和解し、ティムール朝の安定期を現出した第３代君主は誰か。"
  },
  {
    "answer": "ヘラート",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ティムール朝第３代君主が都とした都市はどこか。"
  },
  {
    "answer": "ウルグ＝ベク",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "都に天文台を建設したが内乱のために息子に暗殺され、死後の分裂を招いたティムール朝第４代君主は誰か。"
  },
  {
    "answer": "シャイバーニー＝ハーン",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "ティムール朝を滅ぼした遊牧ウズベクの首長は誰か。"
  },
  {
    "answer": "ブハラ＝ハン国",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "シャイバーニーが中央アジアに建てた国家は、のちに何という国家名で呼ばれるようになるか。"
  },
  {
    "answer": "オルトク",
    "category": "難関私大対策",
    "chapter": "8",
    "number": "Z",
    "question": "モンゴル帝国から元朝にかけて、皇帝や王族から資金を得て遠隔地商業や金融で活躍した、ムスリムやウイグル人の特権商人の組織を何と呼ぶか。"
  },
  {
    "answer": "洪武帝",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の建国者朱元璋の皇帝としての名は何か。"
  },
  {
    "answer": "明律・明令",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "唐のものを基本とし、宋・元代の内容を参考にして1368年に発布された刑法典・行政法典を何と呼ぶか。"
  },
  {
    "answer": "中書省",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "洪武帝が廃止をした、六部を統括していた省は何か。"
  },
  {
    "answer": "里甲制",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明が農民統制と租税徴収のために採用した、110戸を単位として編成した村落行政制度を何というか。"
  },
  {
    "answer": "魚鱗図冊",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の洪武帝が土地台帳として作成させ、耕地の位置・面積・所有者を記録した帳簿を何というか。"
  },
  {
    "answer": "賦役黄冊",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の洪武帝が賦税や労役の徴発の基準とするため、戸ごとの人口や財産を記録させた台帳を何というか。"
  },
  {
    "answer": "六諭",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の洪武帝が民衆の道徳教育のために作成し、礼儀や忠孝、勤勉などを説いた教訓を何というか。"
  },
  {
    "answer": "里老人",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "村落の自治や教化、紛争解決などに協力し、精神的指導者のような役割を果たした、地域の長老的な人物を何と呼ぶか。"
  },
  {
    "answer": "衛所制",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明代の軍事制度で、各地に軍人の居住地兼駐屯地を設けて、食料と兵力を自給自足させた制度は何か。"
  },
  {
    "answer": "海禁",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明が採った、民間の海外渡航や貿易を禁止する政策は何か。"
  },
  {
    "answer": "建文帝",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の第2代皇帝で、叔父の永楽帝によって帝位を奪われた人物は何か。"
  },
  {
    "answer": "燕王",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "永楽帝が即位する前の称号で、建文帝から帝位を奪った際の拠点となった地を治めていた王の名称は何か。"
  },
  {
    "answer": "靖難の役",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の永楽帝が建文帝から帝位を奪った内乱のことを何というか。"
  },
  {
    "answer": "南京→北京",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の都はどこからどこに遷都されたか。"
  },
  {
    "answer": "内閣大学士",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明代に皇帝の補佐として設けられた官職で、のちに事実上の宰相となった職名は何か。"
  },
  {
    "answer": "鄭和",
    "category": "明の成立",
    "chapter": "9",
    "number": "58",
    "question": "明の永楽帝の命を受けて南海遠征を行ったイスラム教徒の宦官は誰か。"
  },
  {
    "answer": "琉球王国",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀初頭に尚巴志が統一した、沖縄諸島を中心に栄えた王国は何か。"
  },
  {
    "answer": "中山王",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀初頭に琉球を統一した尚巴志が、統一以前に支配していた地域の王号は何か。"
  },
  {
    "answer": "黎朝",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀前半にベトナムを統一し、明と朝貢関係を結んだ王朝は何か。"
  },
  {
    "answer": "マラッカ王国",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀初頭にマレー半島南部に成立し、中継貿易で栄えたイスラーム教の港市国家は何か。"
  },
  {
    "answer": "オイラト",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀前半にモンゴル高原西部で台頭し、モンゴル系の部族連合は何か。"
  },
  {
    "answer": "土木の変",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "1449年、オイラトの指導者が明の皇帝を捕らえた事件を何か。"
  },
  {
    "answer": "エセン＝ハーン",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀半ば、明の皇帝を捕らえた「土木の変」を起こしたオイラトの指導者は何か。"
  },
  {
    "answer": "正統帝",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "土木の変でオイラトの指導者に捕らえられた、明の第6代皇帝は何か。"
  },
  {
    "answer": "長城の修築",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "北方の遊牧民族の侵入を防ぐために明が行なったことは何か。"
  },
  {
    "answer": "タタール",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "15世紀後半〜16世紀にモンゴル高原東部で台頭し、明の長城を越えて侵入を繰り返した遊牧集団は何か。"
  },
  {
    "answer": "アルタン＝ハーン",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "16世紀半ば、明に朝貢貿易を認めさせ、チベット仏教の指導者にダライ＝ラマの称号を授けたタタールの指導者は誰か。"
  },
  {
    "answer": "庚戌の変",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "1550年、タタールのアルタン＝ハーンが万里の長城を越えて北京を包囲した事件は何か。"
  },
  {
    "answer": "北虜南倭",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明朝中期に頻発した、北方からのモンゴル侵入と南方からの倭寇の活動を指す言葉は何か。"
  },
  {
    "answer": "メキシコ",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明代の東アジア世界は、銀の流入が盛んであったが、主に日本とどこの銀がもたらされたか。"
  },
  {
    "answer": "生糸",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明代の主力輸出品は、陶磁器と何か。"
  },
  {
    "answer": "景徳鎮",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "宋代以降、中国で陶磁器の生産地として栄え、特に明清代に発展した江西省の都市は何か。"
  },
  {
    "answer": "「湖広熟すれば天下足る」",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明清時代、長江中流域の穀倉地帯が発展したことを表す言葉は何か。"
  },
  {
    "answer": "特許商人",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明代において、政府から特定の商業活動や貿易を独占的に行う権利を与えられた商人集団を何と呼ぶか。"
  },
  {
    "answer": "山西商人",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明清時代に金融業や運輸業で活躍した、山西省出身の商人集団は何か。"
  },
  {
    "answer": "新安(徽州)商人",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明清時代に塩の販売や出版などで財をなし、儒教文化のパトロンにもなった安徽省出身の商人集団は何か。"
  },
  {
    "answer": "会館・公所",
    "category": "明代の対外関係/明代後期の社会",
    "chapter": "9",
    "number": "59",
    "question": "明清時代に、同郷・同業者が集まって親睦や互助を行った組織で、都市に多く設けられたものは何か。"
  },
  {
    "answer": "陽明学",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明の王陽明が大成した儒学の一派で、「知行合一」や「致良知」を説いた思想は何か。"
  },
  {
    "answer": "王陽明（王守仁）",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明代に陽明学を大成し、「知行合一」や「致良知」を説いた儒学者は何か。"
  },
  {
    "answer": "『本草綱目』/李時珍",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明代に編纂された、薬学の集大成として知られる医薬書と、その著者はそれぞれ何か。"
  },
  {
    "answer": "『天工開物』/宋応星",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明末に刊行された、産業技術全般をまとめた総合的な技術書と、その著者はそれぞれ何か。"
  },
  {
    "answer": "『農政全書』/徐光啓",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明末に編纂された、農業技術全般を扱った総合的な農書と、その著者はそれぞれ何か。"
  },
  {
    "answer": "『崇禎暦書』/徐光啓",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明末にイエズス会士アダム＝シャールらとともに作成された暦法書と、その事業を主導した明の学者はそれぞれ何か。"
  },
  {
    "answer": "アダム＝シャール",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "湯若望の中国名をもち、徐光啓とともに暦法書を作成した、ドイツ出身の宣教師は誰か。"
  },
  {
    "answer": "マテオ＝リッチ/「坤輿万国全図」",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明代に来朝し、イエズス会士として布教を行い世界地図を作成したイタリア人と、その世界地図はそれぞれ何か。"
  },
  {
    "answer": "『幾何原本』",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "徐光啓とマテオ＝リッチがエウクレイデスの著作を共訳して完成させた書物は何か。"
  },
  {
    "answer": "『水滸伝』/施耐庵・羅貫中",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "元代に原型が成立した、北宋末の義侠108人の活躍を題材とした長編小説のタイトルと、作者・編者を答えなさい。"
  },
  {
    "answer": "『三国志演義』/羅貫中",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明代に成立した、三国時代の物語を題材とする歴史小説と、その作者はそれぞれ何か。"
  },
  {
    "answer": "『西遊記』/呉承恩",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "唐僧玄奘のインドへの旅を題材にした明代の長編小説と、その作者とされる人物はそれぞれ何か。"
  },
  {
    "answer": "マニラ",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "スペインのアジア貿易の拠点となったフィリピンの港市はどこか。"
  },
  {
    "answer": "アチェ王国",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "17世紀にスマトラ島北端に成立し、香辛料貿易で栄えたイスラーム教国は何か。"
  },
  {
    "answer": "マタラム王国",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "17世紀にジャワ島中部から東部を支配し、オランダ東インド会社と抗争したイスラーム教国は何か。"
  },
  {
    "answer": "アユタヤ朝",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "14世紀中頃にチャオプラヤ川下流に成立し、タイ族の国家として繁栄した王朝は何か。"
  },
  {
    "answer": "タウングー朝",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "16世紀半ば、ビルマ（現ミャンマー）を統一し、アユタヤ朝と抗争した王朝は何か。"
  },
  {
    "answer": "織田信長",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "日本の戦国時代の武将で、天下統一の手前、1582年の本能寺の変により自害した人物は誰か。"
  },
  {
    "answer": "豊臣秀吉",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "織田信長の後を継ぎ天下統一を成し遂げ、太閤検地や刀狩などの政策を行った人物は誰か。"
  },
  {
    "answer": "徳川家康",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "江戸幕府を開き、およそ260年続く徳川の世の基礎を築いた初代征夷大将軍は誰か。"
  },
  {
    "answer": "朱印船貿易",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "江戸時代初期にかけて、日本の商人が幕府の発行する許可状を持って行った海外貿易は何か。"
  },
  {
    "answer": "「鎖国」",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "江戸幕府がキリスト教の禁圧と貿易の統制のため、一部の国や港を除いて外国との交通・貿易を制限した政策は何か。"
  },
  {
    "answer": "万暦帝",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "16世紀後半〜17世紀前半にかけての明の第14代皇帝で、豊臣秀吉の朝鮮出兵の際に援軍を送った人物は誰か。"
  },
  {
    "answer": "張居正",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明の万暦帝の時代に登用され、一条鞭法を全国的に実施するなど財政改革を行った内閣大学士は何か。"
  },
  {
    "answer": "一条鞭法",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明末に張居正によって全国的に実施された、丁税と地税を一括して銀で納めさせる税制改革は何か。"
  },
  {
    "answer": "女真（満洲）",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "17世紀初頭、ヌルハチが統一し、清を建国したツングース系の民族は何か。"
  },
  {
    "answer": "ヌルハチ",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "女真族を統一し、後金を建国し、清朝の基礎を築いた人物は何か。"
  },
  {
    "answer": "金（後金）",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "17世紀初頭、ヌルハチが女真族を統一して建国し、後に「清」と改称された国家は何か。"
  },
  {
    "answer": "八旗",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "ヌルハチが組織した、清朝の軍事・行政・社会制度の基本となる制度は何か。"
  },
  {
    "answer": "ホンタイジ",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "後金の第2代皇帝で、国号を「清」と改め、モンゴルや朝鮮を服属させた人物は何か。"
  },
  {
    "answer": "チャハル",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "ホンタイジによって征服され、清の支配下に入ったモンゴルの一部族は何か。"
  },
  {
    "answer": "呉三桂",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明末清初の武将で、山海関の守将として清軍を招き入れ、李自成の乱を鎮圧させた人物は何か。"
  },
  {
    "answer": "李自成の乱",
    "category": "明代の文化/明の滅亡",
    "chapter": "9",
    "number": "60",
    "question": "明末期に発生した、北京を陥落させて明を滅亡させた農民反乱は何か。"
  },
  {
    "answer": "羅針盤",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "中国で発明され、方位を知るために用いられ、大航海時代に航海術の発展に大きく貢献した道具は何か。"
  },
  {
    "answer": "『世界の記述』",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "マルコ＝ポーロが口述し、ルスティケロ＝ダ＝ピサがまとめた、『東方見聞録』とも呼ばれる書物は何か。"
  },
  {
    "answer": "香辛料",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "大航海時代のヨーロッパ人が、アジアをめざして探求した、料理の風味付けや保存に用いられる商品は何か。"
  },
  {
    "answer": "エンリケ",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "15世紀にポルトガルで海外探検を奨励し、アフリカ西岸の探検を進めさせたポルトガル王子は誰か。"
  },
  {
    "answer": "バルトロメウ＝ディアス",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "15世紀末にポルトガルから出発し、アフリカ大陸最南端の喜望峰に到達した探検家は誰か。"
  },
  {
    "answer": "喜望峰",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "バルトロメウ＝ディアスが到達した、アフリカ大陸最南端の岬はどこか。"
  },
  {
    "answer": "ヴァスコ＝ダ＝ガマ",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "15世紀末、アフリカ大陸の喜望峰を回ってインドのカリカットに到達した探検家は誰か。"
  },
  {
    "answer": "カリカット",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "ヴァスコ＝ダ＝ガマが到達した、インド南西部の重要な貿易港はどこか。"
  },
  {
    "answer": "リスボン",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "大航海時代に、インドや新世界からの富が集まり、一大商業都市として栄えたポルトガルの首都はどこか。"
  },
  {
    "answer": "モルッカ諸島",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "香辛料の産地で、大航海時代に西葡が争奪戦を繰り広げた、現インドネシア東部にある島々は何か。"
  },
  {
    "answer": "コロンブス",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "1492年にスペインの援助を受けて大西洋を横断し、アメリカ大陸に到達したイタリア出身の探検家は誰か。"
  },
  {
    "answer": "トスカネリ",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "地球球体説を唱え、コロンブスに西回り航路によるインド到達の可能性を示唆した伊の地理学者・天文学者は誰か。"
  },
  {
    "answer": "イサベル",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "コロンブスの航海を援助した、スペインの女王は誰か。"
  },
  {
    "answer": "サンサルバドル島",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "コロンブスが1492年に最初に到達したとされる、西インド諸島にある島はどこか。"
  },
  {
    "answer": "インディオ",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "コロンブスがアメリカ大陸に到達した際に、先住民を指して呼んだ名称は何か。"
  },
  {
    "answer": "カボット",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "15世紀末に北米大陸を探検し、ニューファンドランド島に到達したイタリア出身の探検家は誰か。"
  },
  {
    "answer": "ヘンリ７世",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "カボットの北米探検を命じた、当時のイギリス国王は誰か。"
  },
  {
    "answer": "カブラル",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "1500年にポルトガルからインドへ向かう航海の途中で、偶然ブラジルに到達したとされる探検家は誰か。"
  },
  {
    "answer": "アメリゴ＝ヴェスプッチ",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀初頭に南米大陸を探検し、それが「新大陸」であることを提唱したイタリアの探検家は誰か。"
  },
  {
    "answer": "バルボア",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀初頭にパナマ地峡を横断し、太平洋を「発見」したスペインの探検家は誰か。"
  },
  {
    "answer": "マゼラン",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀初頭に彼の一団が世界一周航海を成し遂げた、ポルトガル出身の探検家は誰か。"
  },
  {
    "answer": "カルロス１世",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "マゼランに周航を命じたハプスブルク家出身のスペイン王は誰か。"
  },
  {
    "answer": "教皇子午線",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "1493年にローマ教皇アレクサンデル6世が定めた、スペインとポルトガルの勢力圏を分ける境界線は何か。"
  },
  {
    "answer": "トルデシリャス条約",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "1494年にスペインとポルトガルの間で締結された、大西洋を二分して勢力範囲を定めた条約は何か。"
  },
  {
    "answer": "コンキスタドール",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀にアメリカ大陸を征服し、インディオの文明を破壊したスペインの征服者たちは何と呼ばれたか。"
  },
  {
    "answer": "コルテス",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀前半にメキシコのアステカ王国を征服したスペインのコンキスタドールは誰か。"
  },
  {
    "answer": "ピサロ",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀前半に南米のインカ帝国を征服したスペインのコンキスタドールは誰か。"
  },
  {
    "answer": "ポトシ銀山",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "16世紀半ばに現在のボリビアで発見され、スペインに大量の銀をもたらした銀山は何か。"
  },
  {
    "answer": "エンコミエンダ制",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "先住民を保護・教化するかわりに、彼らから貢納や労働を徴収する権利を入植者に与えたスペインの制度は何か。"
  },
  {
    "answer": "ラス＝カサス",
    "category": "大航海時代",
    "chapter": "9",
    "number": "61",
    "question": "スペイン人による先住民への残虐行為を告発し、その保護を訴えたドミニコ修道士は誰か。"
  },
  {
    "answer": "世界の一体化",
    "category": "「世界の一体化」と大西洋世界の形成",
    "chapter": "9",
    "number": "62",
    "question": "大航海時代以降、地球規模での交流が活発になり、人・物・情報・文化などが結びついた現象は何と呼ばれるか。"
  },
  {
    "answer": "商業革命",
    "category": "「世界の一体化」と大西洋世界の形成",
    "chapter": "9",
    "number": "62",
    "question": "大航海時代以降にヨーロッパで起きた、貿易の拡大や金融システムなどの発展などによる経済的変革を何と呼ぶか。"
  },
  {
    "answer": "フッガー家",
    "category": "「世界の一体化」と大西洋世界の形成",
    "chapter": "9",
    "number": "62",
    "question": "大航海時代を経て貿易の中心が大西洋岸に移行したことで衰退した、アウクスブルクを拠点とした豪商は何家か。"
  },
  {
    "answer": "価格革命",
    "category": "「世界の一体化」と大西洋世界の形成",
    "chapter": "9",
    "number": "62",
    "question": "16世紀のヨーロッパで、新大陸から流入した大量の銀によって発生した、物価の著しい高騰現象を何と呼ぶか。"
  },
  {
    "answer": "応天府",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "洪武帝が1368年に都とした、現在の南京の当時の都市名は何か。"
  },
  {
    "answer": "交鈔",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "洪武帝が銅銭不足対応のために発行したが、銀兌換不対応で価値が低下した紙幣は何か。"
  },
  {
    "answer": "五軍都督府",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "衛所制を管轄した明の軍事機関は何か。"
  },
  {
    "answer": "宝船",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "永楽帝が派遣した鄭和の南海諸国遠征で用いられたジャンク船の巨大帆船の名前は何か。"
  },
  {
    "answer": "王直",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "16世紀に後期倭寇の首領として活動した明の密貿易商人は誰か。"
  },
  {
    "answer": "寧夏の役、播州の役",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "万暦の三大征のうち、秀吉の朝鮮出兵の他に、モンゴル人将軍による反乱と、貴州省の反乱をそれぞれ答えなさい。"
  },
  {
    "answer": "顧憲成",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "17世紀初頭の明内部の党派争いの中で、東林派を指導した人物は誰か。"
  },
  {
    "answer": "魏忠賢",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "17世紀初頭の明内部の党派争いの中で、非東林派を指導した宦官は誰か。"
  },
  {
    "answer": "建州女真",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "全女真を統一したヌルハチが首長を務めた女真の部族名は何か。"
  },
  {
    "answer": "愛新覚羅",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "ヌルハチ以降の後金・清の君主一族の姓は何か。"
  },
  {
    "answer": "ウイグル文字",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "ヌルハチが満洲文字を作成するときに参考にした文字は何か。"
  },
  {
    "answer": "瀋陽",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1619年、サルホの戦いで明に勝利した後金が都とした都市名（のちに盛京と改称）は何か。"
  },
  {
    "answer": "蒙古衙門",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1635年、チャハルを制圧したホンタイジが設置した内モンゴルの統治機関で、後の理藩院の起源となった機関は何か。"
  },
  {
    "answer": "抗租運動",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "明代の15世紀以降、佃戸の窮乏を背景に発生した、税搾取に反発する運動の総称を何というか。"
  },
  {
    "answer": "鄧茂七の乱",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "抗租運動の先駆で、1448-49年に福建省で起きた反乱名は何か。"
  },
  {
    "answer": "李贄",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "陽明学左派で、儒学の礼教主義を偽善として批判し、反逆者として投獄された人物は誰か。"
  },
  {
    "answer": "顧炎武",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "明末の考証学者で『日知録』を残した人物は誰か。"
  },
  {
    "answer": "黄宗羲",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "明末の考証学者で『明夷待訪録』を残した人物は誰か。"
  },
  {
    "answer": "『読通鑑論』",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "明の滅亡を嘆き、王夫之が著した歴史書は何か。"
  },
  {
    "answer": "『牡丹亭』",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "明の湯顕祖が著し、幽霊を題材とした戯曲の代表作は何か。"
  },
  {
    "answer": "プレスター＝ジョン伝説",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "大航海時代や十字軍の背景となった、ヨーロッパの東方にキリスト教司祭が君主の国家があり、イスラーム勢力討伐に協力するという伝説のことを何というか。"
  },
  {
    "answer": "セウタ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1415年「航海王子」エンリケの派遣した船団が攻略して航海の拠点とし、現在はスペイン領である地域で、ジブラルタル海峡に面するアフリカ北部の地名は何か。"
  },
  {
    "answer": "ヴェルデ岬",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1445年「航海王子」エンリケの派遣した船団が発見した、アフリカ最西端の岬は何か。"
  },
  {
    "answer": "ジョアン2世",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "バルトロメウ＝ディアスを派遣したポルトガル国王は誰か。"
  },
  {
    "answer": "イブン＝マージド",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1498年にカリカットに到達したヴァスコ＝ダ＝ガマの水先案内人であるムスリムは誰か。"
  },
  {
    "answer": "1500年",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "ポルトガルに派遣されたカブラルがブラジルに漂着したのは西暦何年か。"
  },
  {
    "answer": "セイロン島",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1505年、ポルトガルがモルッカ諸島への中継地として獲得した南アジアの島はどこか。"
  },
  {
    "answer": "ディウ沖海戦",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1509年、ポルトガルがマムルーク朝艦隊を撃破し、紅海・アラビア海の制海権を得た海戦は何か。"
  },
  {
    "answer": "アルメイダ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "ディウ沖海戦で勝利を収めたポルトガルの初代インド副王は誰か。"
  },
  {
    "answer": "ゴア",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1510年、ポルトガルが総督府を設置したインドの都市はどこか。"
  },
  {
    "answer": "アルブケルケ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "ポルトガルの初代インド総督になり、1511年にはマラッカ王国を滅ぼした人物は誰か。"
  },
  {
    "answer": "ジェノヴァ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "コロンブスの出身である、北イタリアの都市はどこか。"
  },
  {
    "answer": "パロス",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1492年、コロンブスが出港した、スペイン南西部の港町はどこか。"
  },
  {
    "answer": "サンタ・マリア号",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1492年、コロンブスが出港した時に乗っていた船の名前は何か。"
  },
  {
    "answer": "サンサルバドル島",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1492年、コロンブスが到達したバハマ諸島の島はどこか。"
  },
  {
    "answer": "カボット",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1497-98年、ヘンリ7世の命で北米大陸を探検した航海者は誰か。"
  },
  {
    "answer": "セビリャ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1519年、マゼランが出港した、スペイン南部の港町はどこか。"
  },
  {
    "answer": "ラプラプ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1521年、マゼランが戦死した戦いの相手で、フィリピンのマクタン島の首長はだれか。"
  },
  {
    "answer": "ドレーク",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1580年、エリザベス1世に仕え、史上２番目の世界周航を果たしたイギリスの海賊は誰か。"
  },
  {
    "answer": "アレクサンデル6世",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1493年、コロンブスの「アジア」到達を受け、植民地分界線を定めた教皇は誰か。"
  },
  {
    "answer": "サラゴサ条約",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1529年、アジアでのスペイン・ポルトガルの境界を定めた条約は何か。"
  },
  {
    "answer": "エンコミエンダ制",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "スペイン国王がインディオをキリスト教化する条件で実質的な奴隷化を許可した制度は何か。"
  },
  {
    "answer": "ラス＝カサス",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "植民地における先住民の過酷な強制労働の実施を『インディアスの破壊についての簡潔な報告』で暴露したドミニコ会宣教師は誰か。"
  },
  {
    "answer": "アシエント",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "スペイン国王がアフリカの黒人をアメリカ大陸のスペイン領に送ることを認めた奴隷供給契約のことを何というか。"
  },
  {
    "answer": "レガスピ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "1571年、マニラを建てたスペインの初代フィリピン総督は誰か。"
  },
  {
    "answer": "ガレオン船",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "大航海時代にスペインなどの西欧諸国が用いた大型船の種類は何か。"
  },
  {
    "answer": "石見銀山",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "16世紀、東アジアでの銀流通に大きく作用した、日本の現在の島根県にある銀山は何か。"
  },
  {
    "answer": "再版農奴制",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "経済発展した西欧に対し、16世紀頃の東欧で拡大した農民支配強化のことを何というか。"
  },
  {
    "answer": "グーツヘルシャフト",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "再版農奴制に基づき、エルベ川以東で発達した領主による直営地経営のことを何というか。"
  },
  {
    "answer": "ウォーラーステイン",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "20世紀後半にその著書の中で、大航海時代以降に近代に移行し、世界は「中核」と「周辺」に分けられ、世界的分業システムのもと資本主義的経済体制が形成されたという「近代世界システム」を唱えたアメリカの社会学者は誰か。"
  },
  {
    "answer": "メルカトル",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "16世紀に地球儀を円筒に投影し、等角航路が直線で示され航海に用いられる地図法を考案したネーデルラントの地理学者は誰か。"
  },
  {
    "answer": "アルマグロ",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "大航海時代、チリを発見した人物は誰か。"
  },
  {
    "answer": "スンダ海峡",
    "category": "難関私大対策",
    "chapter": "9",
    "number": "Z",
    "question": "ポルトガルが1511年にマラッカを占領したが、これに対抗しムスリム商人が交易ルートとして開拓した、スマトラ島とジャワ島の間の海峡は何か。"
  },
  {
    "answer": "ブルサ",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国建国当初の都はどこか。"
  },
  {
    "answer": "オスマン1世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "13世紀末にアナトリアにオスマン帝国を建国した人物は誰か。"
  },
  {
    "answer": "シパーヒー",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国初期に活躍した、トルコ系騎士のことを何と呼ぶか。"
  },
  {
    "answer": "バヤジット1世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "15世紀初頭にオスマン帝国のスルタンとなり、アンカラの戦いでティムールに敗れた人物は誰か。"
  },
  {
    "answer": "アンカラの戦い",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "1402年にオスマン帝国のとティムール朝の間で行われ、オスマン帝国が大敗した戦いは何か。"
  },
  {
    "answer": "メフメト２世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "コンスタンティノープルを陥落させ、ビザンツ帝国を滅ぼしたオスマン帝国のスルタンは誰か。"
  },
  {
    "answer": "1453年",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "コンスタンティノープルが陥落したのは西暦何年か。"
  },
  {
    "answer": "イスタンブル",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "コンスタンティノープル陥落後、オスマン帝国は何という都市名に改称し遷都したか。"
  },
  {
    "answer": "セリム1世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "マムルーク朝を滅ぼしてエジプトを支配下におさめ、カリフの称号を手に入れたオスマン帝国のスルタンは誰か。"
  },
  {
    "answer": "チャルディラーンの戦い",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "1514年にオスマン帝国とサファヴィー朝の間で行われ、オスマン帝国が勝利した戦いは何か。"
  },
  {
    "answer": "マムルーク朝",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "セリム1世が滅亡させた、エジプトを中心にシリアなどを支配したイスラーム王朝は何か。"
  },
  {
    "answer": "1517年",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "マムルーク朝が滅亡したのは西暦何年か。"
  },
  {
    "answer": "スレイマン1世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "16世紀前半にオスマン帝国のスルタンとなり、最盛期を築き、「立法帝」とも称された人物は誰か。"
  },
  {
    "answer": "スレイマン＝モスク",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "イスタンブルに建設された、スレイマン1世の命により、ミマール＝スィナンが設計したとされるモスクは何か。"
  },
  {
    "answer": "第１次ウィーン包囲",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "1529年にオスマン帝国のスレイマン1世が、神聖ローマ帝国の首都を攻撃したが撤退した包囲戦は何か。"
  },
  {
    "answer": "プレヴェザの海戦",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "1538年にオスマン帝国と神聖ローマ帝国・ヴェネツィアなどの間で行われ、オスマン帝国が勝利した海戦は何か。"
  },
  {
    "answer": "ミッレト制",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国において、異教徒に信仰の自由などを認める代わりに、ジズヤを課して支配した制度は何か。"
  },
  {
    "answer": "ティマール制",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国において、軍事奉仕の代償として国家が徴税権を与えた土地制度は何か。"
  },
  {
    "answer": "イェニチェリ",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国において、スルタン直属の常備歩兵軍として活躍し、後に政治にも介入するようになった軍隊は何か。"
  },
  {
    "answer": "デヴシルメ",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国において、キリスト教徒の少年を徴用し、改宗させたのち、行政官や軍人として育成した制度は何か。"
  },
  {
    "answer": "カピチュレーション",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国がヨーロッパ諸国に対し、通商や居住の自由、治外法権などを認めた特権は何か。"
  },
  {
    "answer": "徴税請負制",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国の拡大後、ティマール制にかわって実施された徴税制度は何か。"
  },
  {
    "answer": "アーヤーン",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "オスマン帝国において、徴税請負制などを通じて事実上の領主のような存在となった地方の有力者層を何と呼ぶか。"
  },
  {
    "answer": "タブリーズ",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "サファヴィー朝建国当初の都はどこか。"
  },
  {
    "answer": "イスマーイール1世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "16世紀初頭にサファヴィー朝を建国した人物は誰か。"
  },
  {
    "answer": "十二イマーム派",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "サファヴィー朝の国教で、ムハンマドの血統を受け継ぐ12人のイマームを正統な指導者とみなす宗派は何か。"
  },
  {
    "answer": "シャー",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "サファヴィー朝が採用した、君主の称号は何か。"
  },
  {
    "answer": "アッバース1世",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "17世紀初頭にサファヴィー朝の最盛期を築き、首都をイスファハーンに遷した人物は誰か。"
  },
  {
    "answer": "イスファハーン",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "サファヴィー朝の最盛期にアッバース1世によって建設され、壮麗な都として栄えた都市はどこか。"
  },
  {
    "answer": "「世界の半分」",
    "category": "オスマン帝国とサファヴィー朝",
    "chapter": "10",
    "number": "63",
    "question": "都市の壮大さを讃える言葉として、イスファハーンはどのように評価がされているか。"
  },
  {
    "answer": "ムガル帝国",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "16世紀初頭にインドに建国され、19世紀半ばまで存続したイスラーム王朝は何か。"
  },
  {
    "answer": "バーブル",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "16世紀初頭に中央アジアからインドに侵攻し、ムガル帝国を建国した人物は誰か。"
  },
  {
    "answer": "パーニーパットの戦い",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "1526年にバーブルがロディー朝を破り、ムガル帝国建国の足がかりを築いた戦いは何か。"
  },
  {
    "answer": "アクバル",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "16世紀後半にムガル帝国の最盛期を築き、異教徒寛容策をとってヒンドゥー教徒とも融和を図った皇帝は誰か。"
  },
  {
    "answer": "アグラ",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "アクバル帝の時代に都となった都市はどこか。"
  },
  {
    "answer": "ジズヤ",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "宗教寛容政策のためにアクバルが廃止したが、後に復活した税は何か。"
  },
  {
    "answer": "シャー＝ジャハーン",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "17世紀前半にムガル帝国の皇帝となり、タージ＝マハルを建設した人物は誰か。"
  },
  {
    "answer": "タージ＝マハル",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "ムガル帝国のシャー＝ジャハーンが、亡くなった妃のために建設した、インドの代表的なイスラーム建築は何か。"
  },
  {
    "answer": "アウラングゼーブ",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "17世紀後半にムガル帝国の皇帝となり、異教徒への不寛容政策をとって帝国弱体化のきっかけを作った人物は誰か。"
  },
  {
    "answer": "シク教",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "15世紀に成立しパンジャーブ地方で信者を集めた、ヒンドゥー教とイスラーム教の要素を融合した一神教は何か。"
  },
  {
    "answer": "ナーナク",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "15世紀から16世紀にかけて活動した、シク教の開祖は誰か。"
  },
  {
    "answer": "マラーター王国",
    "category": "ムガル帝国の興隆",
    "chapter": "10",
    "number": "64",
    "question": "17世紀半ばにシヴァージーがデカン高原に建国し、ムガル帝国の衰退期に勢力拡大したヒンドゥー系王国は何か。"
  },
  {
    "answer": "女真（満洲）",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "17世紀初頭、ヌルハチが統一し、清を建国したツングース系の民族は何か。"
  },
  {
    "answer": "八旗",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "ヌルハチが組織した、清朝の軍事・行政・社会制度の基本となる制度は何か。"
  },
  {
    "answer": "理藩院",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "清朝が設置した、主にモンゴル、チベット、青海、新疆などの「藩部」と呼ばれる地域を統括した機関は何か。"
  },
  {
    "answer": "呉三桂",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "明末清初の武将で、山海関の守将として清軍を招き入れ、李自成の乱を鎮圧させた人物は何か。"
  },
  {
    "answer": "順治帝",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "明の滅亡を機に中国本土に入り、都を北京に遷した、清の第３代皇帝は誰か。"
  },
  {
    "answer": "紫禁城",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "明の永楽帝によって北京に建設され、清朝の時代も宮殿として使用された、皇帝が居住し政務を行った宮城は何か。"
  },
  {
    "answer": "康熙帝",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "三藩の乱の鎮圧、鄭氏台湾の平定により中国統一を果たした、清の全盛期を築いた皇帝は誰か。"
  },
  {
    "answer": "三藩の乱",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "17世紀後半に清朝で発生した、清に降った漢人の藩王が起こした大規模な反乱で、康熙帝が鎮圧したものは何か。"
  },
  {
    "answer": "鄭成功",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "明の遺臣で、清朝に抵抗し、17世紀に台湾を拠点に活動した人物は誰か。"
  },
  {
    "answer": "ネルチンスク条約",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "1689年に清の康熙帝とロシアの間で締結された、両国の国境を画定した条約は何か。"
  },
  {
    "answer": "雍正帝",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "康熙帝の時代に確立された清朝の支配を磐石にし、軍機処を設置した皇帝は誰か。"
  },
  {
    "answer": "キャフタ条約",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "1727年に清の雍正帝とロシアの間で締結された、ネルチンスク条約を補完し、通商関係を定めた条約は何か。"
  },
  {
    "answer": "乾隆帝",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "18世紀後半に清朝の皇帝となり、清朝の最盛期を築き、ジュンガルを平定して版図を最大に拡大した人物は誰か。"
  },
  {
    "answer": "ジュンガル",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "乾隆帝によって平定された、モンゴル系オイラトの部族は何か。"
  },
  {
    "answer": "新疆",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "清朝の乾隆帝がジュンガルを滅ぼしたのち、中国西部の広大な地域を何と呼ぶようになったか。"
  },
  {
    "answer": "藩部",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "清朝において、モンゴル、チベット、青海、新疆など、理藩院を通じて間接的に統治された地域を何と呼ぶか。"
  },
  {
    "answer": "ダライ＝ラマ",
    "category": "多民族国家・清朝",
    "chapter": "10",
    "number": "65",
    "question": "チベット仏教黄帽派の最高指導者で、チベットにおける精神的・政治的権威を象徴する称号は何か。"
  },
  {
    "answer": "両班",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "高麗時代から朝鮮における支配階級で、文班と武班からなる特権的な身分集団を指す言葉は何か。"
  },
  {
    "answer": "小中華主義",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "朝鮮において、中国の儒教文化を正統なものとみなし、自国を周辺諸国よりも優位にあると考える思想は何か。"
  },
  {
    "answer": "阮朝",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "19世紀初頭に成立し、ベトナムを統一して成立した、最後のベトナム王朝は何か。"
  },
  {
    "answer": "ラタナコーシン朝",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "18世紀末にラーマ1世によって建国され、現在のタイ王国の前身となった王朝は何か。"
  },
  {
    "answer": "コンバウン朝",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "18世紀中頃に建国され、ビルマを統一し、イギリスとのビルマ戦争によって滅亡した王朝は何か。"
  },
  {
    "answer": "オランダ",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "アチェ王国やマタラム王国、バンテン王国などスマトラ島やジャワ島に進出したヨーロッパの国家はどこか。"
  },
  {
    "answer": "華僑",
    "category": "清と東アジア・東南アジア",
    "chapter": "10",
    "number": "66",
    "question": "清代以降、中国から東南アジアや世界各地へ移住した中国系の人々を指す言葉は何か。"
  },
  {
    "answer": "文字の獄",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "反清的な言動や批判的な内容を含む書物や文章を弾圧した思想統制は何か。"
  },
  {
    "answer": "辮髪",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清朝が漢民族に強制した、頭頂部以外の髪を剃り上げ、残りを一本の三つ編みにした独特の髪型は何か。"
  },
  {
    "answer": "理藩院",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清朝が設置した、主にモンゴル、チベット、青海、新疆などの「藩部」と呼ばれる地域を統括した機関は何か。"
  },
  {
    "answer": "軍機処",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清の雍正帝が設置した、皇帝直属の最高意思決定機関で、軍事や国家の重要事項を処理した機関は何か。"
  },
  {
    "answer": "八旗",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "ヌルハチが組織した、清朝の軍事・行政・社会制度の基本となる制度は何か。"
  },
  {
    "answer": "緑営",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清朝が漢民族の兵士で構成した、漢人系の軍事組織は何か。"
  },
  {
    "answer": "広州",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "1757年、唯一の外国との貿易港として清が設定した都市はどこか。"
  },
  {
    "answer": "行商",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清において、外国貿易を独占した特許商人は何と呼ばれたか。"
  },
  {
    "answer": "地丁銀制",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清の康熙帝の時代に始まった税制で、人頭税の徴税分を土地税に組み入れる形で一括して銀納させる制度は何か。"
  },
  {
    "answer": "『紅楼夢』",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清代に曹雪芹によって書かれた、貴族の家庭の盛衰・恋模様などを描いた長編小説は何か。"
  },
  {
    "answer": "『康熙字典』",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清の康熙帝の勅命により、1716年に完成した、中国最大級の漢字字典は何か。"
  },
  {
    "answer": "『古今図書集成』",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清の康熙帝の勅命により編纂が始まり、雍正帝の時代に完成した、中国最大の類書（百科事典）は何か。"
  },
  {
    "answer": "『四庫全書』",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清の乾隆帝の勅命により編纂された、中国の古今の主要な文献を網羅的に収集・分類した一大叢書は何か。"
  },
  {
    "answer": "考証学",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清代に盛んになった、古典を厳密に検証し、字句の解釈や史実の究明を通じて、経典の真意を探究した学問は何か。"
  },
  {
    "answer": "アダムシャール",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "明末清初で活躍し、暦法や火砲製造の技術を伝え、徐光啓と『崇禎暦書』を編纂したイエズス会宣教師は誰か。"
  },
  {
    "answer": "カスティリオーネ",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清の康熙帝・雍正帝・乾隆帝の時代に仕え、特に円明園の設計や装飾に携わったイエズス会宣教師・画家は誰か。"
  },
  {
    "answer": "円明園",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "清朝の離宮で、西洋様式の建築物も取り入れられたが、アロー戦争で英仏連合軍によって破壊された庭園は何か。"
  },
  {
    "answer": "典礼問題",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "キリスト教布教における中国固有の儀礼の扱いを巡り、イエズス会と他の修道会、教皇庁の間で対立した問題は何か。"
  },
  {
    "answer": "キリスト教の布教",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "1724年、雍正帝が全面的に禁止したことは何か。"
  },
  {
    "answer": "シノワズリ",
    "category": "清代中国の社会と文化",
    "chapter": "10",
    "number": "67",
    "question": "17世紀から18世紀にかけてヨーロッパで流行した、中国風のデザインやモチーフを取り入れた美術様式は何か。"
  },
  {
    "answer": "ドルゴン",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "幼少時の順治帝に仕えた摂政は誰か。"
  },
  {
    "answer": "尚可喜",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "雲南の呉三桂、福建の耿継茂とともに広東に平南王として藩王に命じられ、のちに三藩の乱を起こした人物は誰か。"
  },
  {
    "answer": "鄭芝龍",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "鄭成功の父で、キリスト教徒で海賊であった人物は誰か。"
  },
  {
    "answer": "遷界令",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "鄭氏台湾の抵抗を弾圧するため、康熙帝が1661年に発した沿岸住民への内陸移住令を何というか。"
  },
  {
    "answer": "近松門左衛門",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "鄭成功による清への対抗を描いた日本の人形浄瑠璃作品『国性爺合戦』の作者は誰か。"
  },
  {
    "answer": "ダワチ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1758年に乾隆帝が滅ぼした時のジュンガルの首長は誰か。"
  },
  {
    "answer": "十全老人",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "現在の中国にほぼ重なる領土を獲得し、清の最大版図を実現した乾隆帝が称した自称名は何か。"
  },
  {
    "answer": "海関",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "康熙帝の1684年の展海令により海禁が解かれ、設置された税関の名前は何か。"
  },
  {
    "answer": "盛世滋生人丁",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1711年に康熙帝即位50年記念に施行された、それ以降の人頭税を課さない制度は何か。"
  },
  {
    "answer": "馬蹄銀",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "清代に流通した銀は、その形状から何と呼ばれるか。"
  },
  {
    "answer": "曹雪芹、呉敬梓、蒲松齢",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "『紅楼夢』『儒林外史』『聊斎志異』の作者名をそれぞれ答えなさい。"
  },
  {
    "answer": "銭大昕",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "清代の考証学者で、史学研究法を樹立した人物は誰か。"
  },
  {
    "answer": "段玉裁",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "清代の考証学者で、文学・音韻の研究をまとめた『説文解字注』を著した人物は誰か。"
  },
  {
    "answer": "『天主実義』",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "マテオ＝リッチが著したキリスト教の教義書は何か。"
  },
  {
    "answer": "ルイ14世",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "17世紀初頭にブーヴェを清に派遣し、『康熙帝伝』を献上されたフランス国王は誰か。"
  },
  {
    "answer": "ボン教",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "大乗仏教とともにチベット仏教のもととなったチベットの民俗信仰は何か。"
  },
  {
    "answer": "活仏",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ダライ＝ラマの遺言した地方で1年以内に誕生した幼児から選ばれる転生者のことを漢字で何というか。"
  },
  {
    "answer": "サキャ派（紅帽派）",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "16世紀にチベット仏教を改革し、黄帽派を開いたツォンカパが腐敗を批判した宗派名は何か。"
  },
  {
    "answer": "ソナム＝ギャツォ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ツォンカパの弟子で、アルタン＝ハンからダライ＝ラマの称号を与えられたチベット僧は誰か。"
  },
  {
    "answer": "山田長政",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "朱印船貿易の一環で、タイのアユタヤに日本町を建てた人物は誰か。"
  },
  {
    "answer": "中山王",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "15世紀の琉球を統一した尚巴志は、三山のうちどこの王であったか。"
  },
  {
    "answer": "島津氏",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "中国に朝貢した琉球が両属体制として朝貢した薩摩藩主は何氏か。"
  },
  {
    "answer": "ダヤン＝ハン",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "アルタン＝ハンの祖父で15世紀後半から16世紀前半にタタールを勢力拡大した人物は誰か。"
  },
  {
    "answer": "黎利",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ベトナムの陳朝の武将だったが、独立し黎朝を建てた人物は誰か。"
  },
  {
    "answer": "西山党の乱",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1771-1802年に黎朝衰退に乗じて怒った反乱は何か。"
  },
  {
    "answer": "ラーンサーン王国",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "14世紀半ばから18世紀のラオスで、メコン川中流域にタイ語系ラオ人が建てた王国は何か。"
  },
  {
    "answer": "アンコール朝",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1432年にアユタヤ朝が滅ぼしたカンボジアの王朝は何か。"
  },
  {
    "answer": "タウングー朝、コンバウン朝",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "18世紀後半、アユタヤ朝を攻撃し、衰退させた王朝と、滅亡させた王朝の２つのビルマの王朝はそれぞれ何か。"
  },
  {
    "answer": "ラーマ1世",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ラタナコーシン朝の創始者は誰か。"
  },
  {
    "answer": "十二イマーム派",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "サファヴィー朝が国教として採用した宗派は何か。"
  },
  {
    "answer": "タブリーズ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "サファヴィー朝の建国当初の都はどこか。"
  },
  {
    "answer": "ガズヴィーン",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1597年にイスファハーンに遷都されるまでの、サファヴィー朝２つ目の都はどこか。"
  },
  {
    "answer": "キジルバシュ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "サファヴィー朝建国貢献したが、特権階層化したためアッバース1世により弾圧されたトルコ系騎兵集団を何と呼ぶか。"
  },
  {
    "answer": "ゴラーム",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "キジルバシュを弾圧したアッバース1世が組織した奴隷兵からなる常備軍は何か。"
  },
  {
    "answer": "イマーム＝モスク",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "アッバース１世が都イスファハーンに建設させたモスクは何か。"
  },
  {
    "answer": "ホルムズ島",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1622年、アッバース1世がポルトガルから奪回した、港湾都市バンダレ＝アッバースのあるペルシア湾口の島は何か。"
  },
  {
    "answer": "アフシャール朝、ザンド朝",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "サファヴィー朝衰退後のイランでガージャール朝成立までの間にあった王朝名を２つ答えなさい（うち前者の創始者はナーディル＝シャー）。"
  },
  {
    "answer": "オスマン1世",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "オスマン帝国の建国者は誰か。"
  },
  {
    "answer": "ブルサ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "オスマン帝国建国当初の都で、小アジア西北部の都市はどこか。"
  },
  {
    "answer": "エディルネ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "第３代スルタンのムラト1世が奪ったアドリアノープルは1366年に都とされ何と呼ばれるか。"
  },
  {
    "answer": "コソヴォの戦い",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1389年、ムラト1世がセルビア西武でスラヴ勢力を破り、ドナウ川以南のバルカン半島を制圧した戦いは何か。"
  },
  {
    "answer": "コンスタンティノス11世パレオロゴス",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1453年、メフメト2世により滅亡したビザンツ帝国最後の皇帝は誰か。"
  },
  {
    "answer": "トプカプ宮殿",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "メフメト2世が政治の中枢として都イスタンブルに建設させた宮殿は何か。"
  },
  {
    "answer": "クリミア＝ハン国",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1475年以降、オスマン帝国の宗主権下にあったクリミア半島のムスリム政権は何か。"
  },
  {
    "answer": "セルビア、アルバニア",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "メフメト2世が1459,1478年に征服したバルカン国家はそれぞれ何か（ワラキア公ヴラド＝ツェペシュには敗北）。"
  },
  {
    "answer": "チャルディラーンの戦い",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1514年、セリム1世が小アジア東部でイェニチェリ軍団の活躍によりサファヴィー朝を破り、シリアに進出した戦いは何か。"
  },
  {
    "answer": "セリム1世",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1517年マムルーク朝を滅ぼしメッカ・メディナを支配したオスマン帝国のスルタンは誰か。"
  },
  {
    "answer": "ミマーリ＝スィナン",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "スレイマン1世時代のスレイマン＝モスクを切開したイェニチェリ出身の建築家は誰か。"
  },
  {
    "answer": "ロードス島",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1520年、スレイマン1世がヨハネ騎士団を破り奪ったエーゲ海の島はどこか。"
  },
  {
    "answer": "ラヨシュ2世",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "1526年、スレイマン1世がモハーチの戦いで敗死させたハンガリー王は誰か。"
  },
  {
    "answer": "セリム２世",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "フランスにカピチュレーションを認めたとされる、スレイマン1世ともう一人のスルタンは誰か。"
  },
  {
    "answer": "デヴシルメ",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "キリスト教徒子弟を改宗させ、軍人・官僚などの要員を強制的に徴用するオスマン帝国の制度は何か。"
  },
  {
    "answer": "チューリップ時代",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "18世紀前半、アフメト3世統治下でオスマン帝国の文化が爛熟期を迎え、西欧趣味が流行した時代を何というか。"
  },
  {
    "answer": "アーヤーン",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ムスリム社会での地方有力者で、18世紀以降にオスマン帝国で徴税権を握り、地方の実質的支配者となった人々をカタカナで何というか。"
  },
  {
    "answer": "ヴィジャヤナガル王国",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "インド北部にイスラーム勢力が侵入する中、ヒンドゥー文化を維持し、港町カリカットをも有した南インドの王国は何か。"
  },
  {
    "answer": "カーブル",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ムガル帝国の建国者バーブルが拠点を置いた、現在のアフガニスタンの首都はどこか。"
  },
  {
    "answer": "フマーユーン",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "治世中は後継者争いで混乱したムガル帝国２代目君主は誰か。"
  },
  {
    "answer": "ペルシア語",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "ムガル帝国の公用語は何か。"
  },
  {
    "answer": "ラージプート",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "アクバルがジズヤを廃止したことにより和解したイスラーム勢力は何か。"
  },
  {
    "answer": "ディーネ＝イラーヒー",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "アクバルが宗教寛容策の一環で作ったイスラーム教・ヒンドゥー教の融合宗教は何か。"
  },
  {
    "answer": "ジャーギール",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "マンサブダール制度の中で、一般に現金給与の代わりに与えられた分与地のことをカタカナで何というか。"
  },
  {
    "answer": "ジャハーンギール",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "17世紀前半、父アクバルの宗教寛容策を踏襲し、統治を安定させたスルタンは誰か。"
  },
  {
    "answer": "ムムターズ＝マハル",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "シャー＝ジャハーンが建設したタージ＝マハルに葬られている王妃は誰か。"
  },
  {
    "answer": "シヴァージー",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "アウラングゼーブの宗教抑圧策に対抗したマラーター王国の創始者は誰か。"
  },
  {
    "answer": "カビール",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "イスラーム教とヒンドゥー教を融合させナーナクに影響を与えたシク教の先駆者は誰か。"
  },
  {
    "answer": "『アクバル＝ナーマ』",
    "category": "難関私大対策",
    "chapter": "10",
    "number": "Z",
    "question": "トルコ散文史上最高峰とされる『バーブル＝ナーマ』に並び称される、アクバルの側近が著したムガル王家の歴史とその統治の記録の名前は何か。"
  },
  {
    "answer": "再生",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "「ルネサンス」とは日本語でどのような意味か。"
  },
  {
    "answer": "ヒューマニズム（人文主義）",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンス期に発展した、人間の尊厳や理性、能力を重視し、人間中心的な世界観を追求する思想は何か。"
  },
  {
    "answer": "古代ギリシア・ローマ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンスにおいて模範とされたのは、どこの古典文化か。"
  },
  {
    "answer": "フィレンツェ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "14世紀から16世紀にかけて、ルネサンス文化の中心地として栄え、メディチ家が支配したイタリアの都市はどこか。"
  },
  {
    "answer": "ダンテ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "中世末期のイタリアの詩人で、トスカナ語で『神曲』を著し、イタリア語文学の基礎を築いた人物は誰か。"
  },
  {
    "answer": "『神曲』",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "イタリアの詩人ダンテが著した、地獄、煉獄、天国を巡る旅を描いた長編叙事詩は何か。"
  },
  {
    "answer": "ボッカチオ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "イタリアの詩人・作家で、『デカメロン』を著し、ルネサンス文学に大きな影響を与えた人物は誰か。"
  },
  {
    "answer": "『デカメロン』",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ペストが流行するフィレンツェを舞台に、男女10人が語り合う100の物語からなる短編集は何か。"
  },
  {
    "answer": "ボッティチェリ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンス期のイタリアの画家で、『ヴィーナスの誕生』や『春』などの作品で知られる人物は誰か。"
  },
  {
    "answer": "レオナルド＝ダ＝ヴィンチ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンス期のイタリアの万能人で、絵画、科学技術、解剖学など多岐にわたる分野で功績を残した人物は誰か。"
  },
  {
    "answer": "ミケランジェロ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンス期のイタリアの彫刻家、画家、建築家で、『ダヴィデ像』『最後の審判』などで知られる芸術家は誰か。"
  },
  {
    "answer": "ラファエロ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンス期のイタリアの画家で、「アテネの学堂」など、優美で調和の取れた画風が特徴の人物は誰か。"
  },
  {
    "answer": "マキァヴェリ",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "ルネサンス期のイタリアの思想家で、『君主論』を著し、近代的な政治思想の基礎を築いた人物は誰か。"
  },
  {
    "answer": "『君主論』",
    "category": "イタリア＝ルネサンス",
    "chapter": "11",
    "number": "68",
    "question": "マキァヴェリが著した、君主が国家を維持し、権力を獲得・保持するための現実的な方法を論じた政治書は何か。"
  },
  {
    "answer": "エラスムス",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "ネーデルラント出身の人文主義者で、『愚神礼賛』を著し、聖書研究と教会改革を訴えた人物は誰か。"
  },
  {
    "answer": "『愚神礼賛』",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "エラスムスが著した、当時の聖職者や社会の偽善を風刺した作品は何か。"
  },
  {
    "answer": "ファン＝アイク兄弟",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "15世紀のフランドル地方で活躍した画家で、油絵技法を確立し、初期フランドル派の発展に貢献した兄弟は誰か。"
  },
  {
    "answer": "ブリューゲル",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "16世紀のフランドル地方で活躍した画家で、「農民の踊り」など農民の生活や風俗を多く描いた人物は誰か。"
  },
  {
    "answer": "「農民の踊り」",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "16世紀のフランドル地方の画家ブリューゲルの代表作の一つで、農民たちの陽気な踊りを描いた作品は何か。"
  },
  {
    "answer": "トマス＝モア",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "16世紀前半に活躍したイギリスの人文主義者で、『ユートピア』を著し、理想社会を描いた人物は誰か。"
  },
  {
    "answer": "『ユートピア』",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "トマス＝モアが著した、架空の理想的な社会を描いた作品は何か。"
  },
  {
    "answer": "シェイクスピア",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "イギリスの劇作家で、『ハムレット』『ロミオとジュリエット』などの数々の傑作を生み出した人物は誰か。"
  },
  {
    "answer": "セルバンテス",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "『ドン＝キホーテ』を著したスペインの作家で、近代小説の先駆けとなった人物は誰か。"
  },
  {
    "answer": "『ドン＝キホーテ』",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "セルバンテスが著した、騎士道物語に熱中し、現実と妄想の世界をさまよう人物の冒険を描いた作品は何か。"
  },
  {
    "answer": "『ガルガンチュアとパンタグリュエルの物語』",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "16世紀のフランスのラブレーが著した、巨人の父子の冒険を通して、当時の社会や思想を風刺した物語は何か。"
  },
  {
    "answer": "『随想録（エセー）』",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "16世紀のフランスの思想家モンテーニュが著した、人間観察や自己省察に基づいた随筆集は何か。"
  },
  {
    "answer": "デューラー",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "画家、美術理論家で、「四人の使徒」などの作品で知られ、「ドイツ＝ルネサンスの巨匠」と称される人物は誰か。"
  },
  {
    "answer": "火薬（火砲）・羅針盤・活版印刷術",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "ルネサンス期の三大発明と呼ばれるものを全て答えなさい。"
  },
  {
    "answer": "グーテンベルク",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "15世紀中頃にドイツで活躍し、活版印刷技術を発明した人物は誰か。"
  },
  {
    "answer": "コペルニクス",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "16世紀前半に活躍したポーランドの天文学者で、地球が太陽の周りを公転する地動説を提唱した人物は誰か。"
  },
  {
    "answer": "ガリレオ＝ガリレイ",
    "category": "西欧諸国のルネサンス",
    "chapter": "11",
    "number": "69",
    "question": "イタリアの物理学者、天文学者で、地動説を実証し、近代科学の基礎を築いた人物は誰か。"
  },
  {
    "answer": "領邦国家",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "神聖ローマ帝国で、諸侯が独立性を持ち、独自の主権を行使した国家形態を何と呼ぶか。"
  },
  {
    "answer": "「ローマの牝牛」",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "神聖ローマ帝国が、ローマ＝カトリック教会に搾取されている状態を批判的に表す言葉は何か。"
  },
  {
    "answer": "マルティン＝ルター",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "16世紀、宗教改革を始めたドイツの神学者は誰か。"
  },
  {
    "answer": "ヴィッテンベルク大学",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "マルティン＝ルターが『九十五ヶ条の論題』を提示したとされる大学はどこか。"
  },
  {
    "answer": "レオ10世",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターの『九十五ヶ条の論題』の発表に対し、彼を破門したローマ教皇は誰か。"
  },
  {
    "answer": "免罪符（贖宥状）",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "中世カトリック教会が発行した、罪の償いを軽減するとされる証書を何というか。"
  },
  {
    "answer": "サン＝ピエトロ大聖堂",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "レオ10世が免罪符を発行した目的は、何を改築する資金を確保するためか。"
  },
  {
    "answer": "『九十五ヶ条の論題』",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターがヴィッテンベルクで発表し、宗教改革の契機となった文書は何か。"
  },
  {
    "answer": "福音信仰",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターが提唱した、聖書の福音に基づき信仰のみで救われるとする考えを何と呼ぶか。"
  },
  {
    "answer": "万人司祭主義",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターが主張した、すべての信徒が直接神に祈り、聖職者なしで信仰できるという教義は何か。"
  },
  {
    "answer": "『キリスト者の自由』",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターが福音信仰に基づき、信者は信仰によって自由であり、世俗の義務も果たすべきだと説いた論文は何か。"
  },
  {
    "answer": "カール5世",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターによる宗教改革と、フランス王フランソワ1世やオスマン帝国との対立に直面した神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "ヴォルムス帝国議会",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "神聖ローマ皇帝によって召集され、ルターが自説の撤回を拒否したことで知られる議会は何か。"
  },
  {
    "answer": "ザクセン選帝侯フリードリヒ",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターが帝国を追放された後、彼を自身のヴァルトブルク城にかくまい保護した人物は誰か。"
  },
  {
    "answer": "『新約聖書』のドイツ語訳",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルターがヴァルトブルク城に隠遁中に行った、後のドイツ語形成にも大きな影響を与えた行動は何か。"
  },
  {
    "answer": "ドイツ農民戦争",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ドイツ南部を中心に発生した、ルターの宗教改革思想の影響も受けた農民たちの反乱を何と呼ぶか。"
  },
  {
    "answer": "ミュンツァー",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ドイツ農民戦争の指導者の一人で、徹底的な社会改革を目指し、神の国の地上実現を説いた急進的な改革者は誰か。"
  },
  {
    "answer": "領邦教会制",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ドイツの領邦の諸侯が最高の司教として自領内教会の保護支配権を掌握する制度を何と呼ぶか。"
  },
  {
    "answer": "1555年",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "神聖ローマ帝国皇帝と、ルター派諸侯の間で政治的決着がついたのは西暦何年か。"
  },
  {
    "answer": "アウクスブルクの和議",
    "category": "宗教改革とルター",
    "chapter": "11",
    "number": "70",
    "question": "ルター派の信仰が公認され、「諸侯の宗教がその地の宗教となる」原則が定められた和議は何か。"
  },
  {
    "answer": "ツヴィングリ",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "スイスのチューリヒで宗教改革を開始し、急進的な教義を主張し、カトリック諸侯との戦いで戦死した人物は誰か。"
  },
  {
    "answer": "チューリヒ",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "ツヴィングリが宗教改革を開始し、その中心地となったスイスの都市はどこか。"
  },
  {
    "answer": "カルヴァン",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "スイスで宗教改革を推進し、予定説を唱え、後のプロテスタントに大きな影響を与えた人物は誰か。"
  },
  {
    "answer": "ジュネーヴ",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "カルヴァンが宗教改革の中心地とし、神権政治を行ったことで知られるスイスの都市はどこか。"
  },
  {
    "answer": "『キリスト教綱要』",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "カルヴァンが宗教改革を推進する上で、予定説などの彼の神学思想を体系的にまとめた主著は何か。"
  },
  {
    "answer": "予定説",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "救済は神によって予め定められているとし、勤労・禁欲精神を生み出したとされるカルヴァンの学説は何か。"
  },
  {
    "answer": "長老主義",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "カルヴァン派の教会組織で採用され、信徒の中から選ばれた長老が牧師とともに教会を運営する制度を何と呼ぶか。"
  },
  {
    "answer": "ユグノー",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "フランスにおけるカルヴァン派プロテスタントの呼称は何か。"
  },
  {
    "answer": "ゴイセン",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "ネーデルラントにおけるカルヴァン派プロテスタントの呼称は何か。"
  },
  {
    "answer": "ピューリタン",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "イングランドにおけるカルヴァン派プロテスタントの呼称は何か。"
  },
  {
    "answer": "プレスビテリアン",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "スコットランドにおけるカルヴァン派プロテスタントの呼称は何か。"
  },
  {
    "answer": "ヘンリ８世",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "イングランド王で、イギリス国教会を創始、また六度の結婚で知られる人物は誰か。"
  },
  {
    "answer": "首長法（国王至上法）",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "ヘンリ8世が制定し、国王をイギリス国教会の唯一最高の首長と定め、ローマ教皇からの独立を宣言した法は何か。"
  },
  {
    "answer": "修道院",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "ヘンリ8世がジェントリに分与した土地は、主にどこから没収をした土地か。"
  },
  {
    "answer": "エドワード６世",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "一般祈禱書で、イギリス国教会の礼拝儀式と教義・制度をととのえた国王は誰か。"
  },
  {
    "answer": "メアリ１世",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "カトリックの復活を目指し、プロテスタントを弾圧したため「ブラッディ」と呼ばれたイングランド女王は誰か。"
  },
  {
    "answer": "エリザベス１世",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "統一法を制定してイギリス国教会を確立、イングランドを強国へと導いた女王は誰か。"
  },
  {
    "answer": "統一法",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "エリザベス1世がイギリス国教会の確立のために制定し、プロテスタント的典礼を義務づけた法律は何か。"
  },
  {
    "answer": "宗教裁判所",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "カトリック教会が異端者を審問・処罰するために設置した、その過酷な尋問で知られる機関を何と呼ぶか。"
  },
  {
    "answer": "禁書目録",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "カトリック教会が信仰に有害とみなした書物を列挙し、信者に読まないよう禁じた目録を何と呼ぶか。"
  },
  {
    "answer": "イグナティウス＝ロヨラ",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "イエズス会を創設し、対抗宗教改革の中心となって、カトリック信仰の再興と海外への布教に尽力した人物は誰か。"
  },
  {
    "answer": "フランシスコ＝ザビエル",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "イエズス会を創設し、インドや日本などアジア各地でカトリックの布教に尽力した宣教師は誰か。"
  },
  {
    "answer": "トリエント公会議",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "対抗宗教改革の一環として開催された、カトリック教義の再確認や教会改革が決定された公会議を何と呼ぶか。"
  },
  {
    "answer": "パウルス３世",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "宗教改革の動きに対抗するため、イエズス会を公認し、トリエント公会議を召集したローマ教皇は誰か。"
  },
  {
    "answer": "魔女狩り",
    "category": "波及する宗教改革とカトリック改革",
    "chapter": "11",
    "number": "71",
    "question": "近世ヨーロッパで広まった、魔女とみなされた人々を拷問・処刑した現象を何と呼ぶか。"
  },
  {
    "answer": "問屋制",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "商人が、生産者に原料・道具を前貸しして注文生産を行い、製品を独占的に買い上げた制度を何と呼ぶか。"
  },
  {
    "answer": "マニュファクチュア（工場制手工業）",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "工場に多くの職人や労働者を集め、分業体制の下で手作業により製品を生産した形態を何と呼ぶか。"
  },
  {
    "answer": "絶対王政",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "国王が強力な権力を持ち、官僚制と常備軍を背景に国家を統治した、近世ヨーロッパに見られた政治体制は何か。"
  },
  {
    "answer": "官僚制",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "専門知識を持つ公務員が国王の命令に基づき国家行政を組織的かつ効率的に運営する制度を何と呼ぶか。"
  },
  {
    "answer": "常備軍",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "平時から継続的に維持・訓練された軍隊で、国家の秩序維持や対外戦争に用いられたものを何と呼ぶか。"
  },
  {
    "answer": "重商主義",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "絶対王政期に、国家が積極的に経済活動に介入し国富の増大を目指した経済政策を何と呼ぶか。"
  },
  {
    "answer": "王権神授説",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "国王の権力は神から授けられたもので、神聖不可侵であるとする、絶対王政を正当化した思想を何と呼ぶか。"
  },
  {
    "answer": "軍事革命",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "火器の発展と大規模な常備軍の出現により、戦術等が大きく変革された現象を何と呼ぶか。"
  },
  {
    "answer": "イタリア戦争",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "フランスと神聖ローマ帝国・スペインなどが、イタリア半島の覇権をめぐって繰り広げた一連の戦争を何と呼ぶか。"
  },
  {
    "answer": "シャルル８世",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "フランス国王で、イタリア戦争を開始し、ナポリ王国の王位を主張してイタリア半島に侵攻した人物は誰か。"
  },
  {
    "answer": "フランソワ１世",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "イタリア戦争においてカール5世と激しく対立し、文化面ではルネサンスを保護したフランス国王は誰か。"
  },
  {
    "answer": "カトー＝カンブレジ条約",
    "category": "主権国家体制の確立",
    "chapter": "11",
    "number": "72",
    "question": "イタリア戦争を終結させ、仏のイタリア進出を断念させ、スペインのイタリア支配を確定させた条約は何か。"
  },
  {
    "answer": "カルロス1世",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "スペイン国王として広大な植民地を支配し、大帝国を築き上げた、神聖ローマ皇帝を兼ねる人物は誰か。"
  },
  {
    "answer": "フェリペ2世",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "スペイン最盛期を築き、レパントの海戦、ネーデルラントの反乱やエリザベス1世との対立に直面した国王は誰か。"
  },
  {
    "answer": "「太陽の沈まぬ国」",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "フェリペ2世の時代に広大な植民地帝国が築き上げられたことで、当時のスペインはどのように形容されたか。"
  },
  {
    "answer": "メアリ1世",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "フェリペ２世と結婚した、イングランドの女王は誰か。"
  },
  {
    "answer": "オランダ独立戦争",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "フェリペ2世のカトリック強制などに反発したネーデルラント諸州が、スペインに対して起こした戦争は何か。"
  },
  {
    "answer": "レパントの海戦",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "1571年、フェリペ2世が主導するキリスト教連合艦隊が、オスマン帝国海軍を破った海戦を何と呼ぶか。"
  },
  {
    "answer": "アルマダ戦争",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "1588年、フェリペ2世がイングランドへの侵攻を試み、無敵艦隊が壊滅的な敗北を喫した海戦を何と呼ぶか。"
  },
  {
    "answer": "オラニエ公ウィレム",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "ネーデルラント独立戦争の指導者で、スペインからの独立を目指し、オランダ共和国の成立に貢献した人物は誰か。"
  },
  {
    "answer": "ユトレヒト同盟",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "1579年、ネーデルラント独立戦争において、スペインに対抗するため、北部7州が結成した同盟を何と呼ぶか。"
  },
  {
    "answer": "ネーデルラント連邦共和国",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "1581年にユトレヒト同盟を結成した北部7州が、スペインからの独立を宣言して樹立した国家を何と呼ぶか。"
  },
  {
    "answer": "ウェストファリア条約",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "ネーデルラント連邦共和国の独立が認められた国際条約は何か。"
  },
  {
    "answer": "フランドル地方",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "毛織物産業で栄え、ハプスブルク家などの支配下に入り、後にネーデルラントを構成した地域はどこか。"
  },
  {
    "answer": "アムステルダム",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "ネーデルラント連邦共和国の首都となり、17世紀には世界商業と金融の中心地として繁栄した都市はどこか。"
  },
  {
    "answer": "アントウェルペン",
    "category": "スペインの絶対王政とオランダ独立",
    "chapter": "11",
    "number": "73",
    "question": "商業・金融の中心地として栄えたが、オランダ独立戦争により衰退したネーデルラント南部の都市はどこか。"
  },
  {
    "answer": "テューダー朝",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "15世紀末から17世紀初頭にかけて、ヘンリ8世やエリザベス1世などが輩出された王朝を何と呼ぶか。"
  },
  {
    "answer": "エリザベス1世",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "テューダー朝最後の君主で、宗教対立の解消と国教会の確立に尽力し、アルマダ戦争で勝利を飾った女王は誰か。"
  },
  {
    "answer": "私拿捕船",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "16世紀後半、エリザベス1世が公認し、スペイン船の拿捕を主な目的として活動した私掠船を何と呼ぶか。"
  },
  {
    "answer": "イギリス東インド会社",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "1600年にエリザベス1世の特許状を得て設立され、アジア貿易の独占権を与えられた会社は何か。"
  },
  {
    "answer": "毛織物工業",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "中世後期から近世にかけてイングランドで発展し、フランドル地方と並んでヨーロッパ経済を牽引した産業は何か。"
  },
  {
    "answer": "第１次囲い込み運動（エンクロージャー）",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "15〜16Cにかけてイングランドで行われた、農地を牧羊に使用するため、農民が土地を追われた動きを何と呼ぶか。"
  },
  {
    "answer": "ジェントリ",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "近世イングランドにおいて、平民であるが地主階級として、議会や地方行政で役割を果たした社会階層を何と呼ぶか。"
  },
  {
    "answer": "ヴァロワ朝",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "987年に成立したカペー朝の断絶後、1328年から1589年までフランスを統治した王朝を何と呼ぶか。"
  },
  {
    "answer": "ユグノー戦争",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "16世紀後半のフランスで、カトリックとプロテスタントの間で起こり、ヴァロワ朝の衰退を招いた内乱は何か。"
  },
  {
    "answer": "サンバルテルミの虐殺",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "1572年フランスのユグノー戦争中に起こった、カトリック派が多数のユグノーを虐殺した事件を何と呼ぶか。"
  },
  {
    "answer": "ボーダン",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "主権の概念を提唱し、絶対王政を理論的に擁護した、フランスの政治思想家は誰か。"
  },
  {
    "answer": "アンリ4世",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "ユグノー戦争を終結させ、ナントの王令を発布して宗教融和を図り、フランスの再建に尽力した人物は誰か。"
  },
  {
    "answer": "ブルボン朝",
    "category": "英仏の動向",
    "chapter": "11",
    "number": "74",
    "question": "アンリ4世によって開かれ、フランス革命までフランスを支配した王朝を何と呼ぶか。"
  },
  {
    "answer": "三十年戦争",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "ハプスブルク家とその反対勢力が、新旧両教徒間の対立を背景に繰り広げた欧州最大規模の国際戦争を何と呼ぶか。"
  },
  {
    "answer": "ベーメン",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "三十年戦争のきっかけとなった、プロテスタント貴族の反乱が起こった神聖ローマ帝国内の地域はどこか。"
  },
  {
    "answer": "デンマーク戦争",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "デンマークがプロテスタントを支援するために介入したが、神聖ローマ帝国軍に敗北した戦いを何と呼ぶか。"
  },
  {
    "answer": "ヴァレンシュタイン",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "三十年戦争において、神聖ローマ皇帝の傭兵隊長として活躍し、プロテスタント軍を圧倒した人物は誰か。"
  },
  {
    "answer": "グスタフ＝アドルフ",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "スウェーデン国王で、三十年戦争で新教徒側として介入したが、リュッツェンの戦いで戦死した人物は誰か。"
  },
  {
    "answer": "フランス",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "三十年戦争で、新教側で参戦した旧教国はどこか。"
  },
  {
    "answer": "ウェストファリア条約",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "三十年戦争を終結させ、主権国家体制を確立し、オランダとスイスの独立を正式に承認した国際条約を何と呼ぶか。"
  },
  {
    "answer": "アルザス、ロレーヌ(の一部)",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "ウェストファリア条約によって、神聖ローマ帝国からフランスに割譲された地域はどこか。"
  },
  {
    "answer": "「バルト帝国」",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "三十年戦争後、西ポンメルンを獲得し、大国としての地位を確立したスウェーデンは何と呼ばれたか。"
  },
  {
    "answer": "カルヴァン派",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "ウェストファリア条約で新たに信仰が認められたキリスト教の宗派は何か。"
  },
  {
    "answer": "神聖ローマ帝国",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "ウェストファリア条約の結果、有名無実化した国家はどこか。"
  },
  {
    "answer": "ピレネー条約",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "三十年戦争後のフランスとスペインの戦争を終結させ、ルイ14世とスペイン王女の結婚を定めた条約を何と呼ぶか。"
  },
  {
    "answer": "17世紀の危機",
    "category": "三十年戦争",
    "chapter": "11",
    "number": "75",
    "question": "17世紀にヨーロッパで発生した、気候変動・経済停滞・社会不安・大規模紛争が複合した危機的状況を何と呼ぶか。"
  },
  {
    "answer": "ステュアート朝",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1603年にイングランド王位を継承し、イングランド・スコットランド・アイルランドを支配した王朝を何と呼ぶか。"
  },
  {
    "answer": "ジェームズ1世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ステュアート朝初代のイングランド国王で、スコットランド王でもあった人物は誰か。"
  },
  {
    "answer": "王権神授説",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "国王の権力は神から授けられたもので、神聖不可侵であるとする、絶対王政を正当化した思想を何と呼ぶか。"
  },
  {
    "answer": "チャールズ1世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ステュアート朝第2代国王で、議会との対立を深め、ピューリタン革命中に処刑された人物は誰か。"
  },
  {
    "answer": "権利の請願",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "イングランド議会がチャールズ1世に対して提出した、議会の同意なしの課税などを禁じた請願を何と呼ぶか。"
  },
  {
    "answer": "スコットランド",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "チャールズ1世が、国教会制度を強制しようとしたためどこで反乱がおこったか。"
  },
  {
    "answer": "王党派",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ピューリタン革命において、チャールズ1世を支持し、国王の絶対的権力と国教会を擁護した勢力を何と呼ぶか。"
  },
  {
    "answer": "議会派",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ピューリタン革命において、議会の権限拡大を主張し、チャールズ1世と対立した勢力を何と呼ぶか。"
  },
  {
    "answer": "ピューリタン革命（清教徒革命）",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1642-49年にかけてイングランドで起こった、王政が一時的に廃止され、共和政が樹立された革命を何と呼ぶか。"
  },
  {
    "answer": "クロムウェル",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "議会派の指導者で、共和政を樹立し、護国卿として独裁的な政治を行った人物は誰か。"
  },
  {
    "answer": "鉄騎隊",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ピューリタン革命において、クロムウェルが組織し、その規律と強さで国王軍を圧倒した騎兵隊を何と呼ぶか。"
  },
  {
    "answer": "独立派",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "長老派よりもさらに徹底した共和主義と各教会の自治を主張し、クロムウェルが支持した勢力を何と呼ぶか。"
  },
  {
    "answer": "長老派",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "イングランド国教会の長老制への改革を主張し、国王との妥協を模索したが、独立派と対立した勢力を何と呼ぶか。"
  },
  {
    "answer": "水平派",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ピューリタン革命期に登場した急進的な思想集団で、社会の平等を強く主張した勢力を何と呼ぶか。"
  },
  {
    "answer": "航海法",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1651年にクロムウェルが制定した、オランダの中継貿易に打撃を与え、英蘭戦争の原因となった法を何と呼ぶか。"
  },
  {
    "answer": "護国卿",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "クロムウェルが就任し、1653年から1658年まで、事実上の軍事独裁体制を敷いた役職名を何と呼ぶか。"
  },
  {
    "answer": "チャールズ２世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ステュアート朝国王で、王政復古によって1660年に即位した人物は誰か。"
  },
  {
    "answer": "審査法",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1673年にイングランド議会が制定した、議員や官吏を国教徒に限定する法は何か。"
  },
  {
    "answer": "人身保護法",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1679年にイングランド議会が制定した、不法な逮捕や拘禁から市民の自由を守るための法は何か。"
  },
  {
    "answer": "ジェームズ２世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ステュアート朝最後の国王で、議会や国教会と対立し、名誉革命によって国外へ追放された人物は誰か。"
  },
  {
    "answer": "トーリ党",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ジェームズ2世即位を認めた、王権を重視し、国教会を支持する保守的な政治勢力を何と呼ぶか。"
  },
  {
    "answer": "ホイッグ党",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ジェームズ2世即位に反対した、議会の権限を重視し、プロテスタントの信仰を擁護する政治勢力を何と呼ぶか。"
  },
  {
    "answer": "名誉革命",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1688年、ジェームズ2世が追放され、新国王が即位した、流血を伴わずに政権が交代した革命を何と呼ぶか。"
  },
  {
    "answer": "ウィリアム3世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "名誉革命によってメアリ2世とともにイングランド国王に即位し、権利の章典を承認した人物は誰か。"
  },
  {
    "answer": "メアリ2世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ジェームズ2世の娘で、名誉革命によって夫のウィリアム3世とともにイングランド女王に即位した人物は誰か。"
  },
  {
    "answer": "権利の章典",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1689年、カトリック教徒の国王即位を禁じ、王権に対する議会の優越を成文化した法は、何と呼ばれるか。"
  },
  {
    "answer": "権利の宣言",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "イングランド議会が国王に対し提出した文書で、後の権利の章典の基礎となったものを何と呼ぶか。"
  },
  {
    "answer": "アン女王",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ステュアート朝最後の女王で、1707年にイングランドとスコットランドを統合した人物は誰か。"
  },
  {
    "answer": "グレートブリテン王国",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1707年にイングランドとスコットランドが合同して成立した国家を何と呼ぶか。"
  },
  {
    "answer": "ハノーヴァー朝",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "1714年、ステュアート朝の断絶後、ドイツの選帝侯から迎えられ創始した王朝を何と呼ぶか。"
  },
  {
    "answer": "ウィンザー朝",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "現在のイギリス王室の王朝名を何と呼ぶか。"
  },
  {
    "answer": "ジョージ1世",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "ハノーヴァー朝初代のイギリス国王で、ドイツのハノーファー選帝侯であった人物は誰か。"
  },
  {
    "answer": "「王は君臨すれども統治せず」",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "立憲君主制において、君主は象徴的元首であり、実質的な政治は議会や内閣が担うという原則を表す言葉は何か。"
  },
  {
    "answer": "ウォルポール",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "18世紀前半のイギリスで、ホイッグ党を率いて実質的な初代首相となり、責任内閣制の基礎を築いた政治家は誰か。"
  },
  {
    "answer": "責任内閣制",
    "category": "イギリスの２つの革命",
    "chapter": "11",
    "number": "76",
    "question": "議会の多数派が内閣を組織して議会に責任を負う制度を何と呼ぶか。"
  },
  {
    "answer": "ルイ13世",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ブルボン朝の国王で、リシュリューの補佐を受けながら、王権の強化と絶対王政の確立を進めた人物は誰か。"
  },
  {
    "answer": "リシュリュー",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ルイ13世の宰相としてブルボン朝の絶対王政を確立した人物は誰か。"
  },
  {
    "answer": "ルイ14世",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "フランス国王で、ブルボン朝絶対王政の最盛期を築き、「太陽王」と呼ばれた人物は誰か。"
  },
  {
    "answer": "マザラン",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ルイ14世の幼少期に宰相を務め、フロンドの乱を鎮圧し、絶対王政の基礎を固めたイタリア出身の枢機卿は誰か。"
  },
  {
    "answer": "フロンドの乱",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "17世紀中頃、マザラン宰相の統治下、貴族や高等法院が王権の強化に反対して起こした反乱を何と呼ぶか。"
  },
  {
    "answer": "「朕は国家なり」",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "フランス国王ルイ14世が放ったとされる、絶対王政における国王の権力を象徴する言葉を何と呼ぶか。"
  },
  {
    "answer": "ボシュエ",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ルイ14世の家庭教師を務め、王権神授説を理論的に擁護し、絶対王政を正当化した人物は誰か。"
  },
  {
    "answer": "コルベール",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ルイ14世に仕えたフランスの財務総監で、重商主義政策を推進した人物は誰か。"
  },
  {
    "answer": "ナントの王令",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ルイ14世が廃止した、ユグノーに信仰の自由と公職就任の権利を認めた王令は何か。"
  },
  {
    "answer": "ヴェルサイユ宮殿",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "フランス国王ルイ14世がパリ郊外に建設した、バロック様式を代表する巨大な宮殿は何か。"
  },
  {
    "answer": "自然国境説",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "フランスの領土は、アルプス山脈、ライン川といった自然の障壁によって定められるべきだとする思想を何と呼ぶか。"
  },
  {
    "answer": "南ネーデルラント継承戦争",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "1667年から1668年、ルイ14世がスペイン領ネーデルラントの継承権を主張し、侵攻した戦争を何と呼ぶか。"
  },
  {
    "answer": "オランダ戦争",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "1672-78年にかけて、ルイ14世が、ネーデルラント連邦共和国の商業的優位に挑戦して起こした戦争を何と呼ぶか。"
  },
  {
    "answer": "ファルツ戦争",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "1688-97年にかけて、ルイ14世がファルツ選帝侯領の継承権を主張し、ヨーロッパ諸国と戦った戦争を何と呼ぶか。"
  },
  {
    "answer": "スペイン継承戦争",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "1701年から1714年、スペイン王位継承をめぐり、ブルボン家とハプスブルク家が争った戦争を何と呼ぶか。"
  },
  {
    "answer": "フェリペ5世",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "スペイン＝ブルボン朝の初代国王で、ルイ14世の孫であり、スペイン継承戦争の結果として即位した人物は誰か。"
  },
  {
    "answer": "ユトレヒト条約",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "1713年、スペイン継承戦争を終結させ、フェリペ5世のスペイン王位継承を認めた条約を何と呼ぶか。"
  },
  {
    "answer": "スペイン＝ブルボン朝",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "スペイン継承戦争後、フェリペ5世から始まったスペインの王朝を何と呼ぶか。"
  },
  {
    "answer": "ジブラルタル、ミノルカ島",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ユトレヒト条約でイギリスが獲得した、地中海の戦略的要衝である二つの地域を何と呼ぶか。"
  },
  {
    "answer": "アカディア、ニューファンドランド、ハドソン湾地方",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ユトレヒト条約でイギリスがフランスから獲得した、北アメリカの植民地のうち、三つの主な地域を何と呼ぶか。"
  },
  {
    "answer": "ラシュタット条約",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "1714年、スペイン継承戦争を終結させるため、フランスと神聖ローマ帝国の間で結ばれた条約を何と呼ぶか。"
  },
  {
    "answer": "スペイン領ネーデルラント",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "スペイン継承戦争の結果オーストリアが獲得した、現在のベルギーやルクセンブルクにあたる地域は何か。"
  },
  {
    "answer": "ルイ15世",
    "category": "フランスの絶対王政",
    "chapter": "11",
    "number": "77",
    "question": "ブルボン朝の国王で、ルイ14世の曾孫にあたり、啓蒙思想が広まる中で絶対王政の衰退を招いた人物は誰か。"
  },
  {
    "answer": "バタヴィア",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "オランダ東インド会社がジャワ島に建設した貿易拠点で、後にジャカルタとなる都市を何と呼ぶか。"
  },
  {
    "answer": "アンボイナ事件",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "1623年、オランダ東インド会社がイギリス東インド会社の商館員を虐殺した事件を何と呼ぶか。"
  },
  {
    "answer": "ゼーランディア城",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "17世紀、オランダ東インド会社が台湾南部に築いた要塞で、台湾統治の拠点とした城を何と呼ぶか。"
  },
  {
    "answer": "ケープ植民地",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "オランダ東インド会社が南アフリカに建設した、東インド航路の補給基地として機能した植民地を何と呼ぶか。"
  },
  {
    "answer": "マドラス",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "インド南東部に位置し、イギリス東インド会社が拠点を置いた、現在のチェンナイにあたる港湾都市はどこか。"
  },
  {
    "answer": "ボンベイ",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "インド西部に位置し、イギリス東インド会社が拠点を置いた、現在のムンバイにあたる港湾都市はどこか。"
  },
  {
    "answer": "カルカッタ",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "インド東部に位置し、イギリス東インド会社が拠点を置いた、ガンジス川デルタ地帯の主要な貿易拠点はどこか。"
  },
  {
    "answer": "シャンデルナゴル",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "インド東部に位置し、フランス東インド会社が建設した、フランスの主要な貿易拠点となった都市を何と呼ぶか。"
  },
  {
    "answer": "ポンディシェリ",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "インド南東部に位置し、フランス東インド会社が建設した、フランス領インドの主要拠点となった都市を何と呼ぶか。"
  },
  {
    "answer": "デュプレクス",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "カーナティック戦争でイギリスと争い、フランスの優位を築いたが、本国政府との対立で召喚された人物は誰か。"
  },
  {
    "answer": "プラッシーの戦い",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "1757年、イギリス東インド会社とベンガル太守の連合軍が衝突し、イギリスが決定的勝利を収めた戦いは何か。"
  },
  {
    "answer": "クライヴ",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "イギリス東インド会社の軍人・政治家で、プラッシーの戦いで勝利を収めた人物は誰か。"
  },
  {
    "answer": "ニューネーデルラント",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "17世紀、北米のハドソン川流域にオランダが建設した植民地で、後のニューヨークとなった地域を何と呼ぶか。"
  },
  {
    "answer": "西インド会社",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "オランダが南北アメリカ大陸や西アフリカにおける貿易・植民地活動を行うために設立した特許会社を何と呼ぶか。"
  },
  {
    "answer": "ニューアムステルダム",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "17世紀、オランダがニューネーデルラント植民地に建設した、後のニューヨークの中心となった都市を何と呼ぶか。"
  },
  {
    "answer": "ニューヨーク",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "1664年、イギリスがオランダから奪取した、かつてのニューアムステルダムを改称した都市を何と呼ぶか。"
  },
  {
    "answer": "ヴァージニア",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "北米大陸にイギリスが初めて建設した恒久的な植民地で、タバコの栽培で栄えた植民地を何と呼ぶか。"
  },
  {
    "answer": "ピルグリム＝ファーザーズ",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "1620年、信仰の自由を求めてメイフラワー号で北米に渡った清教徒たちを何と呼ぶか。"
  },
  {
    "answer": "ニューイングランド植民地",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "イギリスの清教徒が北米大陸の北東部に建設した、マサチューセッツなどを中心とする植民地群を何と呼ぶか。"
  },
  {
    "answer": "ケベック",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "北米におけるフランス植民地の中心地として栄え、七年戦争でイギリスに奪われた都市はどこか。"
  },
  {
    "answer": "ルイジアナ",
    "category": "蘭・英・仏によるアジア・アメリカの進出",
    "chapter": "11",
    "number": "78",
    "question": "北米大陸中央部に位置し、フランスの広大な植民地だったが、1803年にアメリカに売却された地域を何と呼ぶか。"
  },
  {
    "answer": "アン女王戦争",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "1702-13年、スペイン継承戦争と連動して北米で起こった、イギリスとフランスの植民地戦争を何と呼ぶか。"
  },
  {
    "answer": "ジョージ王戦争",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "1744-48年、オーストリア継承戦争と連動して北米で起こった、イギリスとフランスの植民地戦争を何と呼ぶか。"
  },
  {
    "answer": "フレンチ＝インディアン戦争",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "1754-63年、北米で起こった、イギリスとフランスが、先住民を巻き込んで戦った植民地戦争を何と呼ぶか。"
  },
  {
    "answer": "七年戦争",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "1756-63年にかけて、英仏普墺などが戦った大規模な国際戦争を何と呼ぶか。"
  },
  {
    "answer": "パリ条約",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "1763年に英仏西で締結された、七年戦争と北米およびインドでの植民地戦争の講和条約の名称は何か。"
  },
  {
    "answer": "ミシシッピ川以東のルイジアナ",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "七年戦争後のパリ条約により、フランスがイギリスに割譲した、北米大陸中央部の地域を何と呼ぶか。"
  },
  {
    "answer": "黒人奴隷",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "大西洋三角貿易において、アフリカ大陸からアメリカ大陸にもたらされたものは何か。"
  },
  {
    "answer": "砂糖・綿花・タバコ・コーヒー",
    "category": "第二次英仏百年戦争",
    "chapter": "11",
    "number": "79",
    "question": "大西洋三角貿易において、アメリカ大陸からヨーロッパにもたらされたものは何か。"
  },
  {
    "answer": "イヴァン4世",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "16世紀に皇帝として即位し、専制政治を強化してロシアの中央集権化を進めた「雷帝」と称される君主は誰か。"
  },
  {
    "answer": "イェルマーク",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "16世紀のロシアで、シベリアの探検と征服を主導し、コサックの首領として知られる人物は誰か。"
  },
  {
    "answer": "ロマノフ朝",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "17世紀初頭、ロシアの動乱時代を経て成立し、1917年のロシア革命まで続いた王朝を何と呼ぶか。"
  },
  {
    "answer": "ミハイル＝ロマノフ",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "17世紀初頭、ロシアの動乱時代を収束させ、ロマノフ朝初代のツァーリとなった人物は誰か。"
  },
  {
    "answer": "ステンカ＝ラージンの乱",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "17世紀後半、ロシアのドン川流域でコサックの首領が率いた、農民やコサックによる大規模な反乱を何と呼ぶか。"
  },
  {
    "answer": "ピョートル1世",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "17世紀後半から18世紀初頭のロシア皇帝で、西欧化政策を推進しロシアの近代化と強国化に貢献した人物は誰か。"
  },
  {
    "answer": "北方戦争",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "18世紀初頭、ロシアとスウェーデンがバルト海の覇権をめぐり戦い、ロシアが勝利をおさめた戦争は何か。"
  },
  {
    "answer": "カール12世",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "スウェーデンの国王で、北方戦争でピョートル1世のロシアと戦った、「熊殺し」と称された人物は誰か。"
  },
  {
    "answer": "ペテルブルク",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "ピョートル1世がバルト海に面して建設し、ロシア帝国の新たな首都とし、西欧への窓とされた都市を何と呼ぶか。"
  },
  {
    "answer": "アゾフ海",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "ピョートル1世が南下政策を推進する中、オスマン帝国と支配権を争った黒海の北東に位置する海域を何と呼ぶか。"
  },
  {
    "answer": "エカチェリーナ2世",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "18世紀後半のロシア女帝で、啓蒙専制君主として領土を拡大し、ロシアの黄金時代を築いた人物は誰か。"
  },
  {
    "answer": "プガチョフの乱",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "18世紀後半エカチェリーナ2世の治世下で発生した、農奴制に苦しむ農民を中心とした大規模な反乱を何と呼ぶか。"
  },
  {
    "answer": "クリミア半島",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "エカチェリーナ2世が南下政策を推進する過程で、オスマン帝国から獲得し、黒海進出の拠点とした半島は何か。"
  },
  {
    "answer": "ヤゲウォ朝",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "クラクフを首都とした、リトアニア＝ポーランド王国の王朝名は何か。"
  },
  {
    "answer": "選挙王政",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "ポーランド王国などで見られた、国王が世襲ではなく、貴族たちの選挙によって選ばれる政治体制を何と呼ぶか。"
  },
  {
    "answer": "コシューシコ",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "ポーランド分割が進む中で、独立と改革を求めて蜂起を指導したポーランドの国民的英雄は誰か。"
  },
  {
    "answer": "第２回",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "オーストリアが参加しなかったのは第何回ポーランド分割であるか。"
  },
  {
    "answer": "ラクスマン",
    "category": "ロシアの絶対王政",
    "chapter": "11",
    "number": "80",
    "question": "18世紀末のロシアで、日本に漂着した大黒屋光太夫らを送還し、通商を要求するため根室に来航した人物は誰か。"
  },
  {
    "answer": "ホーエンツォレルン家",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "15C-20C初頭にかけて、プロイセン王国やドイツ帝国を統治し、プロイセンを大国に押し上げた家系は何か。"
  },
  {
    "answer": "ユンカー",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "15世紀以降、プロイセンで主要な勢力となり、土地を所有し、農民を支配する貴族階級を何と呼ぶか。"
  },
  {
    "answer": "フリードリヒ＝ヴィルヘルム1世",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "「兵隊王」 とも呼ばれ、軍隊の強化と財政の健全化に尽力し、プロイセンの基礎を固めた国王は誰か。"
  },
  {
    "answer": "フリードリヒ2世",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "「大王」 とも称され、啓蒙専制君主としてプロイセンをヨーロッパの大国に押し上げたプロイセン国王は誰か。"
  },
  {
    "answer": "オーストリア継承戦争",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "1740-48年にかけて、ハプスブルク家の家督継承権をめぐり、ヨーロッパ全体を巻き込んだ戦争を何と呼ぶか。"
  },
  {
    "answer": "1740年",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "オーストリア継承戦争が開戦したのは西暦何年か。"
  },
  {
    "answer": "マリア＝テレジア",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "オーストリアの女帝で、オーストリア継承戦争を戦い、普のフリードリヒ2世の好敵手となった人物は誰か。"
  },
  {
    "answer": "シュレジエン地方",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "オーストリア継承戦争において普のフリードリヒ2世が墺から奪取した、石炭や鉄鉱石が豊富な地域を何と呼ぶか。"
  },
  {
    "answer": "アーヘンの和約",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "1748年、オーストリア継承戦争を終結させた条約を何と呼ぶか。"
  },
  {
    "answer": "七年戦争",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "1756-63年にかけて、英仏普墺などが戦った大規模な国際戦争を何と呼ぶか。"
  },
  {
    "answer": "外交革命",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "七年戦争に際して起こった、オーストリアが長年の宿敵であったフランスと結んだ国際関係の変化を何と呼ぶか。"
  },
  {
    "answer": "フベルトゥスブルク条約",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "1763年、七年戦争を終結させ、プロイセンのシュレジエン領有を最終的に確定させた条約を何と呼ぶか。"
  },
  {
    "answer": "啓蒙専制君主",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "18世紀後半のヨーロッパに現れた、啓蒙思想の影響を受け、上からの近代化政策を推進した絶対君主を何と呼ぶか。"
  },
  {
    "answer": "「君主は国家第一の僕」",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "フリードリヒ2世が自らの統治哲学として述べた、「国家の利益のために奉仕する君主の役割」を示す言葉は何か。"
  },
  {
    "answer": "ヴォルテール",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "主著が『哲学書簡』であるフランスの啓蒙思想家で、フリードリヒ2世と親交を結んだ人物は誰か。"
  },
  {
    "answer": "ヨーゼフ2世",
    "category": "プロイセンとオーストリアの動向",
    "chapter": "11",
    "number": "81",
    "question": "18世紀後半の墺の皇帝で、啓蒙専制君主として急進的改革を断行したが、貴族など反発を招いた人物は誰か。"
  },
  {
    "answer": "科学革命",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "16世紀から18世紀にかけて、ヨーロッパで起こった、自然科学の分野における画期的な変化の総称を何と呼ぶか。"
  },
  {
    "answer": "ハーヴェー",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "17世紀のイギリスの医師で、血液が体内を循環していることを初めて解明し、「血液循環説」を提唱した人物は誰か。"
  },
  {
    "answer": "ニュートン",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "17世紀から18世紀のイギリスの自然科学者で、万有引力の法則を発見し、古典物理学の基礎を築いた人物は誰か。"
  },
  {
    "answer": "『プリンキピア』",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "ニュートンが著した、万有引力の法則をはじめとする物理学の集大成であり、古典物理学の基礎を築いた著作は何か。"
  },
  {
    "answer": "リンネ",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "18世紀のスウェーデンの博物学者で、生物の分類体系を確立し、二名法を導入して学名の基礎を築いた人物は誰か。"
  },
  {
    "answer": "ラヴォワジェ",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "18世紀のフランスの化学者で、酸素の発見や質量保存の法則の提唱など、近代化学の基礎を築いた人物は誰か。"
  },
  {
    "answer": "ジェンナー",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "18世紀末のイギリスの医師で、天然痘に対する牛痘接種法を発見し、近代予防接種の基礎を築いた人物は誰か。"
  },
  {
    "answer": "イギリス経験論",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "17世紀から18世紀のイギリスを中心に発展した、知識の起源を感覚的経験に求める哲学的立場を何と呼ぶか。"
  },
  {
    "answer": "フランシス＝ベーコン",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "17世紀のイギリスの思想家で、経験論哲学の祖とされ、帰納法を用いて科学的研究の重要性を説いた人物は誰か。"
  },
  {
    "answer": "『新オルガヌム』",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "フランシス＝ベーコンが著した、経験論哲学の立場から帰納法を提唱し、科学的知識の獲得方法について論じた主著は何か。"
  },
  {
    "answer": "大陸合理論",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "17世紀から18世紀のヨーロッパ大陸を中心に発展した、知識の起源を理性や思弁に求める哲学的立場を何と呼ぶか。"
  },
  {
    "answer": "デカルト",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "17世紀のフランスの哲学者で、大陸合理論の祖とされ、「我思う、ゆえに我あり」という言葉で知られる人物は誰か。"
  },
  {
    "answer": "『方法序説』",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "デカルトの合理論哲学の基本的主張が示され、「我思う、ゆえに我あり」という言葉が有名な主著の題名は何か。"
  },
  {
    "answer": "ドイツ観念論",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "18世紀後半から19世紀前半のドイツで発展した、カントに始まりヘーゲルに至る哲学的潮流の総称を何と呼ぶか。"
  },
  {
    "answer": "カント",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "18C後-19C初の独の哲学者で、ドイツ観念論の祖とされ、認識論や倫理学において後世に大きな影響を与えた人物は誰か。"
  },
  {
    "answer": "『純粋理性批判』",
    "category": "17-18世紀の自然科学・哲学",
    "chapter": "11",
    "number": "82",
    "question": "カントが著した、人間の認識能力の限界と可能性を探求し、ドイツ観念論の出発点となった主著の題名は何か。"
  },
  {
    "answer": "王権神授説",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "国王の権力は神から授けられたもので、神聖不可侵であるとする、絶対王政を正当化した思想を何と呼ぶか。"
  },
  {
    "answer": "ボーダン",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "主権の概念を提唱し、絶対王政を理論的に擁護した、フランスの政治思想家は誰か。"
  },
  {
    "answer": "ボシュエ",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "ルイ14世の家庭教師を務め、王権神授説を理論的に擁護し、絶対王政を正当化した人物は誰か。"
  },
  {
    "answer": "グロティウス",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "17世紀のオランダの法学者で、『戦争と平和の法』 を著し、自然法に基づいた国際法の基礎を築いた人物は誰か。"
  },
  {
    "answer": "ホッブス",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "17世紀のイギリスの思想家で、人間は闘争状態に陥るため、絶対君主制による強力な国家の必要性を説いた人物は誰か。"
  },
  {
    "answer": "『リヴァイアサン』",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "ホッブスが17世紀半ばに著した、国家の起源と目的について論じた主著の題名は何か。"
  },
  {
    "answer": "「万人の万人に対する闘争」",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "ホッブスが述べた、自然状態において、自己保存のために人々が互いに争う無秩序な状態を表現した言葉は何か。"
  },
  {
    "answer": "ロック",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "イギリスの思想家で、名誉革命を正当化するとともに、自然権や抵抗権を主張して近代自由主義の基礎を築いた人物は誰か。"
  },
  {
    "answer": "『統治二論』",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "名誉革命を正当化するとともに、人民が政府に対して抵抗権を持つことを主張した、ロックの主著は何か。"
  },
  {
    "answer": "モンテスキュー",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀のフランスの啓蒙思想家で、権力分立の必要性を説いて、近代立憲政治の理論的基礎を築いた人物は誰か。"
  },
  {
    "answer": "『法の精神』",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "政治体制や法が多様な要素によって影響を受けることを考察し、権力分立の重要性を説いたモンテスキューの主著は何か。"
  },
  {
    "answer": "ヴォルテール",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀の仏の啓蒙思想家で、イギリスの立憲君主制や宗教的寛容を評価し、旧体制の不合理を批判した人物は誰か。"
  },
  {
    "answer": "『哲学書簡』",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "仏の旧体制をイギリスと比較して批判することで、啓蒙思想の普及に影響を与えたとされるヴォルテールの著作は何か。"
  },
  {
    "answer": "ルソー",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀のフランスの啓蒙思想家で、人民主権や一般意志を主張してフランス革命に大きな影響を与えた人物は誰か。"
  },
  {
    "answer": "『社会契約論』",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "国家の起源が個人の自由な意思に基づく社会契約にあるとし、人民主権や一般意志の概念を提唱したルソーの主著は何か。"
  },
  {
    "answer": "『百科全書』",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀の仏で、当時の最新の知識や技術を体系的に集め、啓蒙思想を広める上で役割を果たした大規模な出版物は何か。"
  },
  {
    "answer": "ディドロ、ダランベール",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀のフランスで、『百科全書』の編纂を主導した、中心的な人物である2名の啓蒙思想家は誰か。"
  },
  {
    "answer": "コルベール",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "17世紀のフランスで、ルイ14世の財務総監として重商主義政策を推進し、フランスの経済的発展に貢献した人物は誰か。"
  },
  {
    "answer": "重農主義",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀後半の仏で唱えられた、国家の富の源泉は農業生産にのみあるとし、商工業は不生産的だとした経済思想は何か。"
  },
  {
    "answer": "ケネー",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀のフランスの経済学者で、重農主義経済学の創始者とされ、国家の富は農業から生まれると考え、自由放任主義を主張した人物は誰か。"
  },
  {
    "answer": "アダム＝スミス",
    "category": "17-18世紀の政治/社会思想・経済学",
    "chapter": "11",
    "number": "83",
    "question": "18世紀のイギリスの経済学者で、『国富論』 を著し、古典派経済学の祖とされ、自由放任主義 を主張した人物は誰か。"
  },
  {
    "answer": "バロック美術",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17-18C前半のヨーロッパで、絶対王政や対抗宗教改革を背景に、劇的な表現と壮大な規模を特徴とする美術様式は何か。"
  },
  {
    "answer": "ヴェルサイユ宮殿",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17世紀後半、ルイ14世が絶対王政の象徴としてフランスに造営した、壮麗なバロック様式の宮殿を何と呼ぶか。"
  },
  {
    "answer": "レンブラント",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17世紀オランダの画家で、「光と影の魔術師」 と称され、「夜警」 などの傑作を残した人物は誰か。"
  },
  {
    "answer": "ロココ美術",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "18世紀前半の仏を中心に、バロック美術に対抗して生まれた、優雅で繊細、軽快な曲線を特徴とする美術様式は何か。"
  },
  {
    "answer": "ミルトン",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17世紀イギリスの詩人で、『失楽園』 を著し、ピューリタン革命を支持したことで知られる人物は誰か。"
  },
  {
    "answer": "デフォー",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "18世紀イギリスの作家で、『ロビンソン＝クルーソー』 を著し、近代小説の基礎を築いた人物は誰か。"
  },
  {
    "answer": "スウィフト",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "18世紀イギリスの作家で、『ガリヴァー旅行記』 を著し、当時の社会や政治を風刺した人物は誰か。"
  },
  {
    "answer": "生活革命",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "18世紀の英で起きた、農業生産の向上などにより、食生活や住環境、衛生状態などが劇的に改善された現象を何と呼ぶか。"
  },
  {
    "answer": "カフェ",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17C後-18Cにかけてフランスで普及し、新聞を読んだり政治などについて議論したりする社交場となった施設は何か。"
  },
  {
    "answer": "コーヒーハウス",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17C後-18Cのイギリスで、コーヒーを提供し、新聞や書籍の閲覧、情報交換の場となった施設を何と呼ぶか。"
  },
  {
    "answer": "サロン",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17-18Cのフランスで、貴婦人の邸宅に設けられ、文化人が集い、知的な交流や議論が行われた社交の場を何と呼ぶか。"
  },
  {
    "answer": "シノワズリ",
    "category": "17-18世紀の美術・音楽・文学",
    "chapter": "11",
    "number": "84",
    "question": "17世紀から18世紀にかけてヨーロッパで流行した、中国風のデザインやモチーフを取り入れた美術様式は何か。"
  },
  {
    "answer": "ユリウス2世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イタリア＝ルネサンスを保護し、1506年からサン＝ピエトロ大聖堂の改修を進め、ラファエロにはヴァチカン宮殿の「アテネの学堂」を描かせた教皇は誰か。"
  },
  {
    "answer": "レオ10世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "サン＝ピエトロ大聖堂の改修を引き継ぎ、人文学者ピコ＝デラ＝ミランドラを家庭教師としていた、メディチ家出身で贖宥状販売によりルターの宗教改革を招いた教皇は誰か。"
  },
  {
    "answer": "コジモ＝デ＝メディチ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "15世紀のメディチ家当主でルネサンスを保護し、プラトン＝アカデミーを開き、共和国元首となった人物は誰か。"
  },
  {
    "answer": "ロレンツォ＝デ＝メディチ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "コジモ＝デ＝メディチの孫で、宗教改革を招いた教皇を次男にもつメディチ家の人物は誰か。"
  },
  {
    "answer": "カンパネラ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『太陽の都』の中で理想社会を描いたイタリアの人物は誰か。"
  },
  {
    "answer": "ティツィアーノ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "「聖愛と俗愛」を描いたヴェネツィア派の代表的画家は誰か。"
  },
  {
    "answer": "ジョルジョーネ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "「眠れるヴィーナス」を描いたヴェネツィア派の代表的画家は誰か。"
  },
  {
    "answer": "サヴォナローラ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "熱狂的なドミニコ会の聖職者で、ピコ＝デラ＝ミランドラの紹介でフィレンツェに招かれたが、次第にロレンツォ＝デ＝メディチの独裁政治を批判し、一時的に追放した人物は誰か。"
  },
  {
    "answer": "ウェルギリウス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ダンテの『神曲』に死後世界の案内役として登場する古代ローマ文学の黄金期の文学者は誰か。"
  },
  {
    "answer": "人曲",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ダンテの『神曲』に対して、ボッカチオの『デカメロン』は何と呼ばれるか。"
  },
  {
    "answer": "ジョット",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "「聖フランチェスコの生涯」を残したルネサンス絵画の先駆者は誰か。"
  },
  {
    "answer": "マザッチオ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "初期ルネサンスの画家で「貢ぎの銭」「楽園追放」を残した人物は誰か。"
  },
  {
    "answer": "ブルネレスキ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フィレンツェのサンタ＝マリア大聖堂の大円蓋を設計し、聖堂を完成させた人物は誰か。"
  },
  {
    "answer": "ギベルティ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フィレンツェの彫刻家で、サンタ＝マリア大聖堂のサン＝ジョバンニ洗礼堂の扉コンクールで23歳の若さで優勝した人物は誰か。"
  },
  {
    "answer": "ブラマンテ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "教皇の命でサン＝ピエトロ大聖堂を最初に設計したルネサンス最大の建築家は誰か。"
  },
  {
    "answer": "ルドヴィーコ＝スフォルツァ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "レオナルド＝ダ＝ヴィンチの初期のパトロンで「最後の審判」の作成依頼をしたミラノ公は誰か。"
  },
  {
    "answer": "システィーナ礼拝堂",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ミケランジェロの「最後の審判」が描かれているヴァチカン宮殿ないの礼拝堂の名前は何か。"
  },
  {
    "answer": "チェーザレ＝ボルジア",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "マキァヴェリが『君主論』の中で、権謀術数を実践する君主の模範的な人物として挙げ、フランス王ルイ12世の信任を得た人物は誰か。"
  },
  {
    "answer": "フランソワ1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ルネサンスを保護し、レオナルド＝ダ＝ヴィンチを宮廷に招いたフランス国王は誰か。"
  },
  {
    "answer": "カルティエ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フランソワ１世により新大陸に派遣された探検家（セントローレンス川を探検）は誰か。"
  },
  {
    "answer": "『自由意志論』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ロッテルダム出身のエラスムスがルターとの論争を展開した著作は何か。"
  },
  {
    "answer": "ファン＝アイク",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フランドル派のもととなった「アルノルフィーニ夫婦の肖像」を残した人物は誰か。"
  },
  {
    "answer": "スペンサー",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "エリザベス１世時代を代表する詩人で、「神仙女王」を残した抒情詩人は誰か。"
  },
  {
    "answer": "『ハムレット』『オセロ』『リア王』『マクベス』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "シェークスピアの４大悲劇を全て答えなさい。"
  },
  {
    "answer": "「メランコリア」",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ドイツ＝ルネサンスの先駆的画家デューラーの代表作である版画は何か。"
  },
  {
    "answer": "ホルバイン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "「エラスムス像」「ヘンリ８世像」を残したドイツの画家は誰か。"
  },
  {
    "answer": "ロイヒリン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "古典研究をヘブライ語まで広げ『ヘブライ語入門』を残した人文学者は誰か。"
  },
  {
    "answer": "メランヒトン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『神学概論』を著したヴィッテンベルク大学教授でルターに協力した神学者は誰か。"
  },
  {
    "answer": "『天球の回転について』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1543年、死の直前にコペルニクスがその中で地動説を論証した著作は何か。"
  },
  {
    "answer": "ジョルダーノ＝ブルーノ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "地動説を主張したが、1600年、教会により異端とされ火刑とされたイタリアの天文学者は誰か。"
  },
  {
    "answer": "ケプラー",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1609年に惑星の運行法則を発表したドイツの天文学者は誰か。"
  },
  {
    "answer": "「ローマの牝牛」",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "分裂状態にありローマ教会から搾取された神聖ローマ帝国の蔑称は何か。"
  },
  {
    "answer": "ヴォルムス帝国議会",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1521年にルター弾圧に乗り出した神聖ローマ皇帝カール５世が招集し、ルターを帝国追放・法律保護停止の処分を下した帝国議会の名称は何か。"
  },
  {
    "answer": "ヴァルトブルク城",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ザクセン選帝侯フリードリヒに保護されたルターが『新約聖書』をドイツ語訳した居城の名前は何か。"
  },
  {
    "answer": "騎士戦争",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1522年、宗教改革に乗じたフッテンやジッキンゲンらの小領主・騎士がライン川流域教会領の撃破を図ったが失敗し、中世騎士の最終的な没落を決定づけた反乱は何か。"
  },
  {
    "answer": "（シュヴァーベンの）十二カ条",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ドイツ農民戦争で、農奴制廃止・封建地代軽減などを求めた文書を何と呼ぶか。"
  },
  {
    "answer": "領邦教会制",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "修道院廃止・万人祭司主義の他に、ルター派諸侯の教会改革の中で実施された、ドイツの諸侯が最高の司教として自領内の教会の保護支配権を掌握する制度を何と呼ぶか。"
  },
  {
    "answer": "シュパイエル帝国議会",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "モハーチの戦いでのオスマン帝国の勝利を受け、カール５世がルター派を認めた帝国議会の名称は何か。"
  },
  {
    "answer": "シュマルカルデン同盟",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1530年に皇帝に抗議したルター派が結成した同盟の名称は何か。"
  },
  {
    "answer": "フランソワ1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フランスを逃れ、スイスに亡命したカルヴァンを弾圧していたフランス王は誰か。"
  },
  {
    "answer": "バーゼル",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1536年にカルヴァンが『キリスト教綱要』を出版したスイスの都市はどこか。"
  },
  {
    "answer": "ノックス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "スコットランドの聖職者で、抵抗権神授説を提唱し、宗教改革を成功させた人物は誰か。"
  },
  {
    "answer": "キャサリン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヘンリ８世の最初の妻で、メアリ１世の母は誰か。"
  },
  {
    "answer": "アン・ブーリン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヘンリ８世の２番目の妻で、エリザベス１世の母は誰か。"
  },
  {
    "answer": "トマス・モア",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヘンリ８世の離婚に反対し、処刑されたイギリスの大法官は誰か。"
  },
  {
    "answer": "エドワード6世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヘンリ８世の唯一の息子で、1549年に一般祈祷書を残した人物は誰か。"
  },
  {
    "answer": "パウルス3世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "対抗宗教改革で、イエズス会を認可し、トリエント公会議を招集した教皇は誰か。"
  },
  {
    "answer": "グレゴリウス13世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1582年にグレゴリウス暦を定めた教皇は誰か。"
  },
  {
    "answer": "チオンピの反乱",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1378年にイタリアのフィレンツェで発生した、羊毛工などの下層労働者が市政への参画を求めて起こした反乱は何か。"
  },
  {
    "answer": "シャルル8世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "15世紀末、ナポリ王国の継承権を主張しイタリアに侵入したことがイタリア戦争の発端になったが、侵入を実行したフランスの国王は誰か。"
  },
  {
    "answer": "神聖同盟（ヴェネツィア同盟）",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1495年、侵入するフランスに対抗し、教皇アレクサンドル６世を中心にスペイン、シチリア、神聖ローマ帝国、ヴェネツィア、フィレンツェなどが結成した同盟は何か。"
  },
  {
    "answer": "フェルナンド2世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イタリア戦争の神聖同盟に参加した、スペイン王兼シチリア王は誰か。"
  },
  {
    "answer": "マクシミリアン1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イタリア戦争の神聖同盟に参加した、神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "ルイ12世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1499年、ミラノ公国継承権を主張し、北イタリアに進出したフランス国王は誰か。"
  },
  {
    "answer": "チェーザレ＝ボルジア",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1501年、教皇アレクサンデル6世が教皇領拡大のために軍事行動を任せた息子は誰か。"
  },
  {
    "answer": "ラヴェンナの戦い",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1512年、フランス王ルイ12世が神聖同盟に敗北し北イタリアを喪失した近代最初の大会戦の名称は何か。"
  },
  {
    "answer": "マリニャーノの戦い",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1515年、フランス王フランソワ1世が神聖同盟に勝利した戦いの名称は何か。"
  },
  {
    "answer": "パヴィアの戦い",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1525年、皇帝カール5世がフランソワ1世を捕虜とした戦いの名称は何か。"
  },
  {
    "answer": "ローマの劫略",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1527年、皇帝カール5世がフランス側についた教皇クレメンス7世を討つためにローマに侵入し略奪を行ったことを何と呼ぶか。"
  },
  {
    "answer": "フェルナンド2世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1479年のスペイン王国成立時のイサベルの夫でアラゴン王、初代スペイン国王は誰か。"
  },
  {
    "answer": "フアナ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "スペイン＝ハプスブルク朝成立のきっかけとなった、スペイン国王家からハプスブルク家に嫁いだ女性は誰か。"
  },
  {
    "answer": "フェルディナント1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1556年、兄カール5世からオーストリア＝ハプスブルク家を継承し、皇帝となった人物は誰か。"
  },
  {
    "answer": "アルバ公（フェルナンド）",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フェリペ2世がネーデルラントの新教徒を「血の弾圧」するために派遣した軍人は誰か。"
  },
  {
    "answer": "アラス同盟",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "オランダ独立戦争中の1579年にスペイン側についた南部10州が結成した同盟は何か。"
  },
  {
    "answer": "ホーキンス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "エリザベス1世がドレークとともに従属させた海賊で、海軍提督となった人物は誰か。"
  },
  {
    "answer": "救貧法",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "エリザベス1世が教区ごとの貧民救済を定め、社会保障制度の始まりとされる法律は何か。"
  },
  {
    "answer": "グレシャム",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "「悪貨は良貨を駆逐する」の言葉を残したエリザベス1世の財政顧問は誰か。"
  },
  {
    "answer": "メアリ＝スチュアート",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イギリス王位継承を主張してエリザベス1世暗殺を計画し処刑されたスコットランド女王は誰か。"
  },
  {
    "answer": "ジェームズ6世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ステュアート朝初代国王のジェームズ1世のスコットランド王としての名前は何か。"
  },
  {
    "answer": "ネイズビーの戦い",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ピューリタン革命中の1645年、クロムウェル率いる鉄騎隊が活躍し議会派が勝利した戦いの名称は何か。"
  },
  {
    "answer": "水平派（レヴェラーズ）",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "17世紀半ば、急進共和政を主張したリルバーンらが貧農などの支持を得たが、クロムウェルに弾圧された派閥名は何か。"
  },
  {
    "answer": "真正水平派（ディガーズ）",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ピューリタン革命期、ウィンスタンリーが指導し、土地の共有を主張した派閥名は何か。"
  },
  {
    "answer": "リチャード＝クロムウェル",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "父オリヴァー＝クロムウェルの跡を継いだがまもなく政治混乱を招いた息子は誰か。"
  },
  {
    "answer": "ブレダ宣言",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1660年、亡命先のフランスから帰国したチャールズ2世が信仰の自由など革命の成果尊重を約束した宣言名は何か。"
  },
  {
    "answer": "ドーヴァーの密約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1670年、多額の補助金の見返りにイギリスでの旧教復活を約束したチャールズ2世とルイ14世の密約の名称は何か。"
  },
  {
    "answer": "寛容法",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "名誉革命後の1689年、カトリック以外の非国教徒に対し信仰の自由を与えた法律の名称は何か。"
  },
  {
    "answer": "イングランド銀行",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "名誉革命後の1694年に設立され、国債制度による財政革命を実現したイギリスの中央銀行の名称は何か。"
  },
  {
    "answer": "フランソワ２世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イタリア戦争終結次のフランス王で、ユグノーを弾圧した人物は誰か。"
  },
  {
    "answer": "シャルル9世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "治世中カトリーヌ＝ド＝メディシスが摂政となった、侍医にはノストラダムスがついたフランス王は誰か。"
  },
  {
    "answer": "アンリ3世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヴァロワ朝最後のフランス王は誰か。"
  },
  {
    "answer": "ギーズ公アンリ、ナバラ王アンリ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ユグノー戦争末期の三アンリの戦いでフランス王と争った2人は誰か。"
  },
  {
    "answer": "アカデミー＝フランセイエーズ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ルイ13世の宰相リシュリューが創設し、フランス語純化を担った研究機関は何か。"
  },
  {
    "answer": "ガリカニスム",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フランスが採った、教皇権から独立した王権が教会に優先されるべきとする国家教会主義のことを何というか。"
  },
  {
    "answer": "ボシュエ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "「朕は国家なり」の言葉を残したルイ14世の王権神授説に影響を与えた学者は誰か。"
  },
  {
    "answer": "高等法院",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ルイ14世に反発したフロンドの乱の拠点となった機関は何か。"
  },
  {
    "answer": "フォンテーヌブロー王令",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1685年、ルイ14世がナントの王令の廃止のために出した勅令の名称は何か。"
  },
  {
    "answer": "ルーヴォワ侯(フランソワ＝ミシェル・ル・テリエ)",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ルイ14世時代の陸軍相で、当時のヨーロッパ最強の常備軍を率いた人物は誰か。"
  },
  {
    "answer": "アーヘンの和約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1668年、フランスを若干の領土拡大に抑えた、南ネーデルラント継承戦争の講和条約は何か。"
  },
  {
    "answer": "ナイメーヘンの和約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1678年、オランダの独立を認め、仏の南ネーデルラント獲得を定めたオランダ戦争の講和条約は何か。"
  },
  {
    "answer": "アウクスブルク同盟",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ファルツ戦争に際し、ルイ14世に対抗した皇帝・英・西・蘭が結成した同盟の名称は何か。"
  },
  {
    "answer": "レイスウェイク(ライスワイク)条約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1697年、仏をハイチ獲得に抑えたファルツ戦争の講和条約は何か。"
  },
  {
    "answer": "カルロス2世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "その死によりスペイン＝ハプスブルク朝が断絶し、スペイン継承戦争が起こった人物は誰か。"
  },
  {
    "answer": "ラシュタット条約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1714年、フランスと神聖ローマ帝国が結び、南ネーデルラント、ミラノ、ナポリ王国、サルデーニャが仏から墺領とされたスペイン継承戦争の講和条約は何か。"
  },
  {
    "answer": "フェルディナント2世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1618年、ベーメンにカトリックを強制し反乱を招いた神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "クリスチャン4世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "三十年戦争の初期、新教側として皇帝に対抗したデンマーク王は誰か。"
  },
  {
    "answer": "リュッツェンの戦い",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "三十年戦争の中期、新教側として皇帝に対抗したグスタフ＝アドルフが戦死した戦いは何か。"
  },
  {
    "answer": "ミュンスター、オスナブリュック",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1648年、ウェストファリア条約が結ばれたドイツの都市を２つとも答えなさい。"
  },
  {
    "answer": "西ポンメルン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1648年、ウェストファリア条約でスウェーデンが獲得した北ドイツの地名は何か。"
  },
  {
    "answer": "ピレネー条約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1659年、スペインとフランスの間で結ばれた後置修飾の講和条約は何か。"
  },
  {
    "answer": "ブランデンブルク辺境伯",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1134年、アスカニア家のアルブレヒト熊公が辺境伯に封じられ、ヴィッテルスバッハ家、ルクセンブルク家が継承し、1356年には選帝侯となり、1415年にはホーエンツォレルン家が継承した諸侯の名称は何か。"
  },
  {
    "answer": "プロイセン公国",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ドイツ騎士団領を起源として1525年に公国に昇格し、1618年にはホーエンツォレルン家と統合し、スペイン継承戦争を契機に王国に昇格した国家は何か。"
  },
  {
    "answer": "フリードリヒ1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1701年プロイセンが王国に昇格した時の初代国王は誰か。"
  },
  {
    "answer": "フリードリヒ＝ヴィルヘルム1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "プロイセンの２代目国王で、徴兵制で軍隊増強を図った「兵隊王」とも称される人物は誰か。"
  },
  {
    "answer": "『反マキァヴェリ論』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フリードリヒ2世が権謀術数を否定し「君主は国家第一の僕」の言葉を残した著作の名称は何か。"
  },
  {
    "answer": "アーヘンの和約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1748年に結ばれたオーストリア継承戦争の講和条約は何か。"
  },
  {
    "answer": "ポンパドゥール夫人",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1756年、仏と墺の「外交革命」実現を手引いた宮廷の実力者で、ルイ15世の愛妾は誰か。"
  },
  {
    "answer": "フベルトゥスブルク条約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "七年戦争の講和条約は何か。"
  },
  {
    "answer": "カール6世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "国事詔書で、娘マリア＝テレジアのハプスブルク家継承を定めた皇帝は誰か。"
  },
  {
    "answer": "フランツ1世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "マリア＝テレジアの夫である神聖ローマ皇帝は誰か。"
  },
  {
    "answer": "宗教寛容令",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヨーゼフ２世が農奴解放令とともに発し、カトリック以外にも信仰の自由を保障した命令の名称は何か。"
  },
  {
    "answer": "コンスタンティノス11世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イヴァン3世が結婚した女性のおじにあたる、最後のビザンツ皇帝は誰か。"
  },
  {
    "answer": "雷帝",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "厳しい貴族抑圧策をとったことから、イヴァン４世は何と呼ばれるか。"
  },
  {
    "answer": "ユリウス暦",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "西欧化を進めたピョートル1世が導入した暦は何か。"
  },
  {
    "answer": "アゾフ海",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1696年、ピョートル1世が進出した黒海北東部の内海は何か。"
  },
  {
    "answer": "ベーリング",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ピョートル1世時代の1728年にカムチャツカ海峡を確認し、1741年にはアラスカに到達した探検家は誰か。"
  },
  {
    "answer": "カール12世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ピョートル1世と北方戦争を戦った「北方の流星王」と呼ばれるスウェーデン王は誰か。"
  },
  {
    "answer": "ニスタット条約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1721年、ロシアのバルト海覇権を定めた北方戦争の講和条約は何か。"
  },
  {
    "answer": "ピョートル3世",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "エカチェリーナ2世の夫で、暗殺された人物は誰か。"
  },
  {
    "answer": "キュチュク＝カイナルジャ条約",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "エカチェリーナ2世時代の1774年、黒海の自由航行権やオスマン帝国からのクリム＝ハン国獲得を定めた露土戦争の講和条約は何か。"
  },
  {
    "answer": "シュラフタ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ヤゲウォ朝断絶後、選挙王政をとったポーランドで勢力を争った貴族のことを何と呼ぶか。"
  },
  {
    "answer": "レガスピ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1565年、スペインによるフィリピン領有宣言を発した総督は誰か。"
  },
  {
    "answer": "ガレオン貿易",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "アカプルコ貿易は用いられた大型船の名前から何と呼ばれるか。"
  },
  {
    "answer": "オランダ(侵略)戦争",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "第3次英蘭戦争中に起こったため、英が仏側につきオランダと戦ったルイ14世による侵略戦争は何か。"
  },
  {
    "answer": "ウィリアム王戦争",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ファルツ戦争と並行して行われ、第2次英仏百年戦争の開戦を招いた植民地争奪戦の名称は何か。"
  },
  {
    "answer": "デュプレクス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "18世紀半ば、カーナティック戦争でイギリスを圧倒するなど活躍したが、独断で開戦したことから解任された仏インド総督は誰か。"
  },
  {
    "answer": "ローリー",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "16世紀後半、エリザベス1世の寵愛を受け、ヴァージニア建設の先鞭をつけた探検家は誰か。"
  },
  {
    "answer": "プリマス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1620年、メイフラワー号のピルグリム＝ファーザーズが入港した都市はどこか。"
  },
  {
    "answer": "ジャマイカ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1655年、イギリスが獲得し、黒人奴隷の最大市場となり、サトウキビプランテーションで栄えた西インド諸島の国名は何か。"
  },
  {
    "answer": "シャンプラン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1608年、カナダにケベックを建設したフランス人探検家は誰か。"
  },
  {
    "answer": "ラ＝サール",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1682年、ミシシッピ川流域にルイジアナを建設したフランス人探検家は誰か。"
  },
  {
    "answer": "ドミニカ共和国",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "カリブ海のエスパニョーラ島の東半で、1819年に独立を宣言した国名は何か。"
  },
  {
    "answer": "ベニン王国",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "13-18世紀、現在のナイジェリア西部で繁栄した、特に15世紀末以降、奴隷・胡椒・象牙を輸出して栄えた国家はどこか。"
  },
  {
    "answer": "ブガンダ王国",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "17世紀、現在のウガンダ南部で奴隷・象牙の輸出で栄えたバントゥー系の王国はどこか。"
  },
  {
    "answer": "ダホメ王国",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "17世紀初頭-1894年、アフリカ大陸西岸で奴隷輸出・武器輸入で栄えた王国はどこか。"
  },
  {
    "answer": "『プリンキピア』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1687年、ニュートンが微積分を紹介した著作名は何か。"
  },
  {
    "answer": "ホイヘンス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "振り子運動研究・土星の輪の発見・光の波動説などで有名なオランダの物理学者は誰か。"
  },
  {
    "answer": "ラヴォワジエ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "徴税請負人をしていたためフランス革命中の1794年ギロチンで処刑された、燃焼理論・質量保存の法則で有名なフランスの科学者は誰か。"
  },
  {
    "answer": "ビュフォン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『博物誌』の研究で進化論の先駆者とされるフランスの科学者は誰か。"
  },
  {
    "answer": "（ベンジャミン＝）フランクリン",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "処世訓『貧しいリチャードの暦』を残し、避雷針を発明した、独立戦争時にフランス大使を務めてアメリカ協力を訴えたアメリカ合衆国の政治家は誰か。"
  },
  {
    "answer": "『ペルシア人の手紙』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "渡欧した2人のペルシア人の書簡の形式をとり、キリスト・イスラームの両世界の相対化を図り、フランス社会を批判したモンテスキューの著作は何か。"
  },
  {
    "answer": "『哲学書簡』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "フランスの旧体制やカトリック教会を批判したヴォルテールの著作は何か。"
  },
  {
    "answer": "『ニュー・アトランティス』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "イギリス経験論の祖フランシス＝ベーコンが理想郷ベンセレムを描いた著作は何か。"
  },
  {
    "answer": "『海洋自由論』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "航海の自由を説き、オランダの海上活動を理論的に擁護したグロティウスの著作は何か。"
  },
  {
    "answer": "『人間不平等起源論』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "1755年、ルソーが人間社会の不平等の原因を私有財産に帰した著作は何か。"
  },
  {
    "answer": "ラプラス",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "星雲説・宇宙進化論を唱えたフランスの天文学者は誰か。"
  },
  {
    "answer": "ヒューム",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『人性論』の中で懐疑論を展開したイギリスの哲学者は誰か。"
  },
  {
    "answer": "スピノザ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "汎神論を唱えたオランダの哲学者は誰か。"
  },
  {
    "answer": "『永遠平和のために』",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "カントが常備軍の廃止や世界共和国の形成などを訴えた1795年の著作は何か。"
  },
  {
    "answer": "ファン＝ダイク",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "チャールズ1世の肖像画などを残した、バロック美術のイギリス宮廷画家が誰か。"
  },
  {
    "answer": "ムリリョ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "スペイン＝バロックの画家で、宗教画と市井の子供たちを描いた風俗画の両方で有名な人物は誰か。"
  },
  {
    "answer": "シェーンブルン宮殿",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ウィーン郊外に築かれた外観はバロック式、内部はロココ式のハプスブルク家の宮殿の名称は何か。"
  },
  {
    "answer": "ブーシェ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "ポンパドゥール夫人の庇護を受けたロココ美術に属するフランス宮廷画家は誰か。"
  },
  {
    "answer": "モリエール",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『人間ぎらい』『タルチュフ』を残したフランス古典主義の喜劇作家は誰か。"
  },
  {
    "answer": "コルネイユ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『ル＝シッド』を残したフランス古典主義の悲劇作家は誰か。"
  },
  {
    "answer": "ラシーヌ",
    "category": "難関私大対策",
    "chapter": "11",
    "number": "Z",
    "question": "『アンドロマク』『フェードル』を残したフランス古典主義の悲劇作家は誰か。"
  },
  {
    "answer": "大西洋三角貿易",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "17-18世紀を中心に、ヨーロッパ・西アフリカ・アメリカ大陸のあいだで行われた貿易を何と呼ぶか。"
  },
  {
    "answer": "綿花",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "大西洋三角貿易において、新大陸からヨーロッパへ主に輸出された主要な商品作物は何であったか。"
  },
  {
    "answer": "ギルド制",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "産業革命の背景として、自由な経済活動の妨げとなることから撤廃された、閉鎖的な同業者組合制度を何というか。"
  },
  {
    "answer": "農業革命",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、新農法や品種改良により、農業生産力が飛躍的に向上した現象を何と呼ぶか。"
  },
  {
    "answer": "第２次囲い込み",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、農業生産性向上のため、議会制定法により共有地を私有地化した動きを何と呼ぶか。"
  },
  {
    "answer": "ジョン＝ケイ",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、飛び杼を発明し、綿糸の生産効率向上に貢献した人物は誰か。"
  },
  {
    "answer": "飛び杼",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "ジョン＝ケイによって発明された、織機の緯糸を通す作業を効率化し、織物生産を高速化した道具を何と呼ぶか。"
  },
  {
    "answer": "ハーグリーヴズ",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、複数の糸を同時に紡ぐジェニー紡績機を発明し、織物生産の効率化に貢献した人物は誰か。"
  },
  {
    "answer": "ジェニー紡績機",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "ハーグリーヴズによって発明された、複数の糸を同時に紡ぐことで、綿糸生産量を飛躍的に増加させた機械は何か。"
  },
  {
    "answer": "アークライト",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、水力紡績機を発明し、工場制機械工業の基礎を築いた人物は誰か。"
  },
  {
    "answer": "水力紡績機",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "アークライトによって発明された、水力を用いて紡績を行うことで、大規模な工場生産を可能にした機械は何か。"
  },
  {
    "answer": "クロンプトン",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、ジェニー紡績機と水力紡績機の長所を組み合わせたミュール紡績機を発明した人物は誰か。"
  },
  {
    "answer": "ミュール紡績機",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "クロンプトンによって発明された、良質で丈夫な綿糸を大量生産可能にした機械は何か。"
  },
  {
    "answer": "カートライト",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、蒸気機関を動力とする力織機を発明し、織物生産の自動化と大量生産を可能にした人物は誰か。"
  },
  {
    "answer": "力織機",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "カートライトによって発明された、蒸気機関を活用することで、織物生産の自動化と大量生産を実現した機械は何か。"
  },
  {
    "answer": "ホイットニー",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀末のアメリカで、綿花から種を取り除く綿繰り機を発明し、綿花生産の効率化に貢献した人物は誰か。"
  },
  {
    "answer": "綿繰り機",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "ホイットニーが18世紀末に発明した、綿花から効率的に種を取り除く機械を何と呼ぶか。"
  },
  {
    "answer": "蒸気機関",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "ワットが改良を加え、産業革命の主要な動力源となり、工場や交通機関に革新をもたらした機関を何と呼ぶか。"
  },
  {
    "answer": "ニューコメン",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀初頭のイギリスで、鉱山からの排水のために、実用的な蒸気機関（大気圧機関）を開発した人物は誰か。"
  },
  {
    "answer": "ワット",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀後半のイギリスで、蒸気機関を改良し、産業革命の主要な動力源として広く普及させた人物は誰か。"
  },
  {
    "answer": "ダービー",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、コークス製鉄法を実用化し、鉄生産の大量化と質の向上に貢献した人物は誰か。"
  },
  {
    "answer": "コークス燃料",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "18世紀のイギリスで、ダービーによって製鉄に用いられ、良質な鉄の大量生産を可能にした燃料は何と呼ぶか。"
  },
  {
    "answer": "蒸気船",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "19世紀初頭に実用化され、蒸気機関を動力として水上輸送に革新をもたらした船舶を何と呼ぶか。"
  },
  {
    "answer": "フルトン",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "19世紀初頭のアメリカで、蒸気船クラーモント号を建造・運行し、蒸気船の実用化に成功した人物は誰か。"
  },
  {
    "answer": "蒸気機関車",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "スティーブンソンによって実用化され、蒸気機関を動力として陸上輸送に革新をもたらした交通機関を何と呼ぶか。"
  },
  {
    "answer": "トレヴィシック",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "19世紀初頭のイギリスで、世界初の蒸気機関車を製作し、レール上での運行を試みた人物は誰か。"
  },
  {
    "answer": "スティーブンソン",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "19世紀のイギリスで、ロコモーション号やロケット号を製作し、鉄道輸送の実用化に大きく貢献した人物は誰か。"
  },
  {
    "answer": "マンチェスター、リヴァプール間",
    "category": "産業革命",
    "chapter": "12",
    "number": "85",
    "question": "1830年に営業運転を開始した、世界初の本格的な旅客鉄道が敷設された区間はどこか。"
  },
  {
    "answer": "工場制機械工業",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "産業革命において、機械動力を用い、大規模な工場で分業による大量生産を行う生産方式を何と呼ぶか。"
  },
  {
    "answer": "産業資本家",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "産業革命によって勃興した、工場や機械を所有し、労働者を雇用して生産活動を行う社会階級を何と呼ぶか。"
  },
  {
    "answer": "ブルジョワジー",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "近代の市民革命において、封建的特権を批判し、自由な経済活動や財産権確立を求めた有産市民階級を何と呼ぶか。"
  },
  {
    "answer": "ラダイト運動",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "19世紀初頭の英で、産業革命による機械化が職を奪うと考えた労働者が、工場や機械を破壊した運動を何と呼ぶか。"
  },
  {
    "answer": "「世界の工場」",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "19世紀半ば、産業革命により圧倒的な工業生産力を誇り、世界経済の中心となったイギリスは何と呼ばれたか。"
  },
  {
    "answer": "マンチェスター",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "19世紀のイギリスで、産業革命により綿工業の中心地として発展し、「綿業の都」 とも呼ばれた都市はどこか。"
  },
  {
    "answer": "リヴァプール",
    "category": "産業革命と社会の変化",
    "chapter": "12",
    "number": "86",
    "question": "19世紀のイギリスで、産業革命により綿花の輸入港として発展し、世界初の営業鉄道が開通した都市はどこか。"
  },
  {
    "answer": "13植民地",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "17-18Cにかけて、英が北アメリカ東海岸に建設した植民地群で、後のアメリカ合衆国の基礎となったものは何か。"
  },
  {
    "answer": "ミシシッピ川以東のルイジアナ、カナダ、フロリダ",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "七年戦争後のパリ条約により、イギリスがフランスやスペインから獲得した北米の領土は何か。"
  },
  {
    "answer": "北部",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "13植民地のうち、商工業や漁業が盛んで、ピューリタンが多く移住した地域は北部か南部か。"
  },
  {
    "answer": "南部",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "13植民地のうち、タバコや綿花などのプランテーション農業が盛んで、黒人奴隷が導入された地域は北部か南部か。"
  },
  {
    "answer": "砂糖法",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "フレンチ＝インディアン戦争後の英が、財政難解消のため、植民地への砂糖輸入に課税を強化した法律は何か。"
  },
  {
    "answer": "印紙法",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "フレンチ＝インディアン戦争後の英が、植民地の出版物や公文書などに印紙を貼ることを義務付けた法律は何か。"
  },
  {
    "answer": "「代表なくして課税なし」",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立革命の際、植民地の人々がイギリス本国の課税に反発して掲げたスローガンは何か。"
  },
  {
    "answer": "茶法",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1773年、イギリスが東インド会社の茶販売を独占させるために制定した法律を何と呼ぶか。"
  },
  {
    "answer": "ボストン茶会事件",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1773年、茶法に抗議する植民地の人々が東インド会社の船を襲撃し、積荷の茶を海に投棄した事件を何と呼ぶか。"
  },
  {
    "answer": "大陸会議",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立革命の際に、13植民地の代表者が集まり、イギリス本国への対応を協議した会議を何と呼ぶか。"
  },
  {
    "answer": "フィラデルフィア",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立革命において、大陸会議が開催され、独立宣言が採択された都市はどこか。"
  },
  {
    "answer": "レキシントン、コンコード",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1775年4月、アメリカ独立戦争の最初の武力衝突が起こった、マサチューセッツ植民地の二つの村はどこか。"
  },
  {
    "answer": "ワシントン",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立戦争において大陸軍の総司令官を務め、独立後には初代アメリカ合衆国大統領に就任した人物は誰か。"
  },
  {
    "answer": "パトリック＝ヘンリ",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "「我に自由を、然らずんば死を」 の演説で13植民地の人々を鼓舞した急進的な政治家は誰か。"
  },
  {
    "answer": "「我に自由を、然らずんば死を」",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "パトリック＝ヘンリがイギリスからの独立への強い決意を示した言葉として知られるものは何か。"
  },
  {
    "answer": "トマス＝ペイン",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立革命において、『コモン＝センス』 を著し、イギリスからの独立の必要性を訴えた思想家は誰か。"
  },
  {
    "answer": "『コモン＝センス』",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "トマス＝ペインが1776年に発表した、植民地の人々の世論形成に大きな影響を与えた小冊子の題名は何と呼ぶか。"
  },
  {
    "answer": "1776年",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立宣言が大陸会議で採択され、アメリカ合衆国が独立を宣言した年は西暦何年か。"
  },
  {
    "answer": "トマス＝ジェファソン",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立宣言の主要な起草者であり、後に第3代アメリカ合衆国大統領に就任した人物は誰か。"
  },
  {
    "answer": "サラトガの戦い",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1777年にアメリカ大陸軍がイギリス軍に大勝し、フランスの参戦を促す決定打となった戦いを何と呼ぶか。"
  },
  {
    "answer": "ラ＝ファイエット",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立戦争において、義勇兵としてアメリカ大陸軍に参加し、独立に貢献したフランスの貴族は誰か。"
  },
  {
    "answer": "コシューシコ",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立戦争において、ワシントンを助け、陸軍の工兵として活躍したポーランドの義勇兵は誰か。"
  },
  {
    "answer": "フランクリン",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立革命において、独立宣言の起草委員を務め、フランスからの支援獲得に尽力した外交官・科学者は誰か。"
  },
  {
    "answer": "武装中立同盟",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立戦争において、エカチェリーナ2世が提唱し、中立国の通商権を保護するために結成された同盟は何か。"
  },
  {
    "answer": "ヨークタウンの戦い",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1781年に米仏連合軍が英軍を降伏させ、独立戦争の事実上の終結を決定づけた最後の主要な戦いを何と呼ぶか。"
  },
  {
    "answer": "パリ条約",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1783年、アメリカ独立戦争を終結させ、イギリスがアメリカ合衆国の独立を正式に承認した条約を何と呼ぶか。"
  },
  {
    "answer": "ミシシッピ川以東のルイジアナ",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立戦争後のパリ条約により、イギリスがアメリカ合衆国に譲渡した、広大な領土はどこか。"
  },
  {
    "answer": "フロリダ、ミノルカ島",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ独立戦争後のパリ条約により、イギリスからスペインに譲渡された領土はどこか。"
  },
  {
    "answer": "憲法制定会議",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1787年にフィラデルフィアで開催され、アメリカ合衆国憲法を制定するために開かれた会議を何と呼ぶか。"
  },
  {
    "answer": "アメリカ合衆国憲法",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "1787年にフィラデルフィアの憲法制定会議で採択された、アメリカ合衆国の統治の基本原則を定めた法典は何か。"
  },
  {
    "answer": "人民主義",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ合衆国憲法において、国家の統治権の根源が国民にあるとする政治思想を何と呼ぶか。"
  },
  {
    "answer": "連邦主義",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "中央政府と州政府が権限を分担し、それぞれが独立した政府を持つアメリカの統治形態は何か。"
  },
  {
    "answer": "三権分立",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "政府の権力を立法・行政・司法の三つに分け、権力の集中を防ぎ、相互に抑制し均衡を保つ仕組みを何と呼ぶか。"
  },
  {
    "answer": "連邦派",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ合衆国憲法の制定を推進し、強力な中央政府の樹立を主張した政治的勢力を何と呼ぶか。"
  },
  {
    "answer": "ハミルトン",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "初代財務長官として強力な中央銀行の設立や国債の整備を進め、アメリカの経済基盤を確立した連邦派の人物は誰か。"
  },
  {
    "answer": "州権派",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ合衆国憲法の制定に反対し、各州の自治権を重視し、中央の権力拡大に警戒した政治的勢力を何と呼ぶか。"
  },
  {
    "answer": "トマス＝ジェファソン",
    "category": "アメリカ独立革命",
    "chapter": "12",
    "number": "87",
    "question": "アメリカ合衆国において、独立宣言の主要起草者でもある州権派の代表的人物は誰か。"
  },
  {
    "answer": "旧体制(アンシャン＝レジーム)",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "フランス革命以前、絶対王政のもと、特権身分が封建的な支配を維持していた社会・政治体制を何と呼ぶか。"
  },
  {
    "answer": "聖職者・貴族・平民",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "フランス前近代における、第一身分、第二身分、第三身分それぞれに該当する立場を答えなさい。"
  },
  {
    "answer": "シェイエス",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "フランス革命前夜、『第三身分とは何か』 を著し、第三身分の重要性と特権身分への批判を説いた聖職者は誰か。"
  },
  {
    "answer": "『第三身分とは何か』",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "シェイエスが著し、特権身分への批判と第三身分の重要性を説き、革命思想に影響を与えた小冊子の題名は何か。"
  },
  {
    "answer": "ルイ１６世",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "フランス革命時の国王で、王妃マリ＝アントワネットとともに革命に翻弄され、最終的に処刑された人物は誰か。"
  },
  {
    "answer": "テュルゴ",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "ルイ16世時代のフランスで、財政改革を試みた重農主義者の財務総監は誰か。"
  },
  {
    "answer": "ネッケル",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "ルイ16世時代の仏で財政再建のため改革を試みたが、特権身分の反対に遭い罷免されたスイス出身の銀行家は誰か。"
  },
  {
    "answer": "マリ＝アントワネット",
    "category": "フランス革命：革命前夜",
    "chapter": "12",
    "number": "88",
    "question": "オーストリア出身である、フランス革命時の王妃は誰か。"
  },
  {
    "answer": "全国三部会",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命前夜、財政難に陥ったルイ16世が、課税問題の解決のためにヴェルサイユに召集した議会は何か。"
  },
  {
    "answer": "国民議会",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "1789年6月、第三身分が特権身分との対立の末に独自に結成し、憲法制定を目指すと宣言した議会を何と呼ぶか。"
  },
  {
    "answer": "球戯場(テニスコート)の誓い",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "国民議会の議員たちが、ヴェルサイユ宮殿の球戯場に集まり、憲法制定までは解散しないことを誓った出来事は何か。"
  },
  {
    "answer": "ラ＝ファイエット",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命時、人権宣言の起草にかかわった、アメリカ独立戦争にも参加した自由主義貴族は誰か。"
  },
  {
    "answer": "1789年7月14日",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "パリの民衆がバスティーユ監獄を襲撃し、革命の勃発を決定づけた日は西暦何年の何月何日か。"
  },
  {
    "answer": "バスティーユ牢獄",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "1789年7月14日、パリの民衆が襲撃し、フランス革命の勃発の象徴となった、かつての政治犯収容所は何と呼ぶか。"
  },
  {
    "answer": "封建地代(封建的特権)",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "国民議会が、農奴制を廃止する際に有償廃止とされたものは何か。"
  },
  {
    "answer": "人権宣言",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "1789年8月26日国民議会が採択した、自由、平等、私有財産の不可侵などの近代市民社会の原則を定めた宣言は何か。"
  },
  {
    "answer": "ヴェルサイユ行進(十月事件)",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "パリの女性たちが食料不足への不満からヴェルサイユ宮殿へ行進し、国王一家をパリへ連行した出来事を何と呼ぶか。"
  },
  {
    "answer": "テュイルリー宮殿",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "ルイ16世とマリ＝アントワネットが、ヴェルサイユからパリに連行された後に住居とされた宮殿はどこか。"
  },
  {
    "answer": "メートル法",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期に導入され、長さや重さなどの単位を統一し、世界的に普及した度量衡制度を何と呼ぶか。"
  },
  {
    "answer": "ヴァレンヌ逃亡事件",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "1791年、ルイ16世一家が、パリからの国外逃亡を試みるも、国境近くで捕らえられた事件は何か。"
  },
  {
    "answer": "ピルニッツ宣言",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "1791年8月、オーストリアとプロイセンが共同で発出し、フランス革命への干渉を示唆した宣言は何か。"
  },
  {
    "answer": "1791年憲法",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期に制定された、フランス史上最初の成文憲法で、立憲君主制と制限選挙を定めたものを何と呼ぶか。"
  },
  {
    "answer": "立法議会",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期、1791年憲法に基づいて成立し、制限選挙で選出された議員で構成された議会を何と呼ぶか。"
  },
  {
    "answer": "フイヤン派",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期、立憲君主制の維持を主張し、ジャコバン＝クラブから分離して穏健な政治路線をとった派閥は何か。"
  },
  {
    "answer": "ジロンド派",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "立法議会や国民公会において主導権を握った、穏健共和主義を主張し、対外戦争を推進した派閥は何か。"
  },
  {
    "answer": "山岳派(ジャコバン派)",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "国民公会において急進的な共和主義を主張し、ジロンド派と対立しながら、恐怖政治を主導した派閥を何と呼ぶか。"
  },
  {
    "answer": "サンキュロット",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期、労働者や職人などからなる、革命を支持した急進的な民衆を何と呼ぶか。"
  },
  {
    "answer": "ジロンド派内閣",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期、1792年に成立し、対オーストリア開戦に踏み切った、穏健共和派が主導した内閣を何と呼ぶか。"
  },
  {
    "answer": "オーストリア",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命政府が最初に宣戦布告をした国家はどこか。"
  },
  {
    "answer": "「ラ＝マルセイエーズ」",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "フランス革命期に作られ、後にフランス共和国の国歌となった行進曲は何と呼ぶか。"
  },
  {
    "answer": "8月10日事件",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "パリの民衆と義勇兵がテュイルリー宮殿を襲撃し、国王ルイ16世を捕らえ、王権を停止させた出来事を何と呼ぶか。"
  },
  {
    "answer": "ヴァルミーの戦い",
    "category": "フランス革命：国民議会・立法議会",
    "chapter": "12",
    "number": "89",
    "question": "1792年9月20日にフランス革命軍がプロイセン軍を撃退し、革命の防衛に成功した戦いを何と呼ぶか。"
  },
  {
    "answer": "国民公会",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "1792年9月に成立し、王政の廃止と共和政の樹立を宣言した議会を何と呼ぶか。"
  },
  {
    "answer": "第一共和政",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "国民公会が王政の廃止と共和政の樹立を宣言してから、ナポレオンが帝政を樹立するまでの政体を何と呼ぶか。"
  },
  {
    "answer": "マラー",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "ジャコバン派の急進的なジャーナリストで、民衆の支持を得てるもジロンド派の女性に暗殺された人物は誰か。"
  },
  {
    "answer": "ダントン",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "ジャコバン派の指導者の一人で、恐怖政治を推進したが、後にロベスピエールと対立し処刑された人物は誰か。"
  },
  {
    "answer": "ロベスピエール",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "フランス革命期、ジャコバン派の指導者として恐怖政治を主導し、革命を推進した中心人物は誰か。"
  },
  {
    "answer": "第１回対仏大同盟",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "フランス軍のベルギー占領とルイ16世の処刑を機に、1793年に結成された対フランス軍事同盟は何か。"
  },
  {
    "answer": "ピット",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "イギリスの首相として対仏大同盟を組織し、ナポレオン戦争終結までフランスに対抗した政治家は誰か。"
  },
  {
    "answer": "徴兵制",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "国民公会が対仏大同盟に対抗するために導入した、すべての男性国民に兵役の義務を課す制度を何と呼ぶか。"
  },
  {
    "answer": "ヴァンデーの農民反乱",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "1793年にフランス西部で発生した、徴兵制への反発やカトリック信仰の弾圧に対する農民たちの反乱を何と呼ぶか。"
  },
  {
    "answer": "恐怖政治",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "ロベスピエールが主導した、反革命容疑者を大量に逮捕・処刑し、独裁的な権力を行使した政治を何と呼ぶか。"
  },
  {
    "answer": "保安委員会",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "恐怖政治を主導したジャコバン派が設置し、反革命容疑者の逮捕・裁判・処刑を担った強力な機関を何と呼ぶか。"
  },
  {
    "answer": "革命裁判所",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "フランス革命期、恐怖政治において反革命容疑者を裁くために設置された特別法廷を何と呼ぶか。"
  },
  {
    "answer": "公安委員会",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "ロベスピエールが指導した、恐怖政治の中枢として治安維持、軍事、外交などを統括した機関は何か。"
  },
  {
    "answer": "1793年(ジャコバン)憲法",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "ジャコバン派が制定した、男子普通選挙の導入や国民の生存権、抵抗権などを明記した、民主主義的な憲法は何か。"
  },
  {
    "answer": "封建地代の無償廃止",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "農民がフランス革命に対して保守的な姿勢をとるきっかけとなった、国民公会による1793年の改革は何か。"
  },
  {
    "answer": "最高価格令",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "1793年にジャコバン派が、インフレーションの抑制と生活必需品の確保を目的として発令した法令を何と呼ぶか。"
  },
  {
    "answer": "革命暦",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "国民公会が制定し、キリスト教的な要素を排除し、理性を基盤とした新しい暦を何と呼ぶか。"
  },
  {
    "answer": "1794年",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "ジャコバン派による恐怖政治が終わったのは西暦何年か。"
  },
  {
    "answer": "テルミドール9日のクーデタ",
    "category": "フランス革命：国民公会・ジャコバン独裁",
    "chapter": "12",
    "number": "90",
    "question": "反ロベスピエール派がロベスピエールらを逮捕・処刑し、恐怖政治を終焉させた事件を何と呼ぶか。"
  },
  {
    "answer": "1795年憲法",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "男子制限選挙を復活させ、二院制議会と総裁政府を導入して、ジャコバン派の独裁を防ごうとした穏健な憲法は何か。"
  },
  {
    "answer": "総裁政府",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "1795年憲法に基づいて成立した、5人の総裁が行政権を担った共和政の政府を何と呼ぶか。"
  },
  {
    "answer": "バブーフ",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "総裁政府の時代に、私有財産の廃止と平等な社会の実現を主張した、共産主義思想の先駆者とされる人物は誰か。"
  },
  {
    "answer": "ナポレオン＝ボナパルト",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "総裁政府のもとで、名声を高め、フランス皇帝となった、コルシカ島出身の軍人は誰か。"
  },
  {
    "answer": "イタリア遠征",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "第１回対仏大同盟を解体させるに至ったナポレオンによる軍事行動は何か。"
  },
  {
    "answer": "エジプト遠征",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "イギリスとインドの連絡路を断つことを目的に行ったナポレオンによる軍事作戦を何と呼ぶか。"
  },
  {
    "answer": "ロゼッタ＝ストーン",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "ナポレオンのエジプト遠征中に発見され、神聖文字の解読に活用された石碑を何と呼ぶか。"
  },
  {
    "answer": "第２回対仏大同盟",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "エジプト遠征を機に、イギリスがロシア・オーストリアなどと結んだ軍事同盟は何か。"
  },
  {
    "answer": "1799年",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "総裁政府が打倒され、フランス革命の終結が宣言されたのは西暦何年か。"
  },
  {
    "answer": "ブリュメール18日のクーデタ",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "ナポレオンが総裁政府を打倒し、統領政府を樹立して権力を掌握したクーデタを何と呼ぶか。"
  },
  {
    "answer": "統領政府",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "ナポレオンが樹立した、3人の統領によって構成された政府を何と呼ぶか。"
  },
  {
    "answer": "フランス銀行",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "ナポレオン＝ボナパルトが第一統領時代の1800年に設立した中央銀行は何と呼ぶか。"
  },
  {
    "answer": "宗教協約(コンコルダート)",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "ナポレオンがローマ教皇ピウス7世との間で締結した、カトリック教会のフランスにおける地位を定めた協約は何か。"
  },
  {
    "answer": "アミアンの和約",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "1802年、英仏間で締結された、フランス革命戦争の一時的な休戦協定を何と呼ぶか。"
  },
  {
    "answer": "ナポレオン民法典",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "1804年に制定された、革命の成果である個人の自由、法の下の平等、私有財産の不可侵などを明文化した法典は何か。"
  },
  {
    "answer": "第３回対仏大同盟",
    "category": "フランス革命：ナポレオンの登場",
    "chapter": "12",
    "number": "91",
    "question": "第一帝政の樹立をきっかけに、イギリスの首相ピットの提唱で結成された同盟は何か。"
  },
  {
    "answer": "ナポレオン１世",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオン＝ボナパルトの皇帝としての名は何か。"
  },
  {
    "answer": "ナショナリズム",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオン戦争を機にヨーロッパで高揚した、国民としての意識や国家への忠誠心を高める思想や運動を何と呼ぶか。"
  },
  {
    "answer": "トラファルガーの海戦",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンのイギリス本土上陸の野望が潰えた、1805年の戦いの名称は何か。"
  },
  {
    "answer": "ネルソン",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "イギリス海軍の提督としてトラファルガーの海戦で勝利し、イギリスの制海権確立に貢献した英雄は誰か。"
  },
  {
    "answer": "アウステルリッツの三帝会戦",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "1805年、ナポレオン軍が、オーストリアとロシアの連合軍を破った、史上有名な会戦を何と呼ぶか。"
  },
  {
    "answer": "ライン同盟",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンが南ドイツと西ドイツの諸邦を統合して成立させた、フランスの衛星国連合体を何と呼ぶか。"
  },
  {
    "answer": "大陸封鎖令(ベルリン勅令)",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "1806年、ナポレオンが発令した、イギリスとヨーロッパ大陸諸国との通商を禁止する勅令を何と呼ぶか。"
  },
  {
    "answer": "ティルジット条約",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "1807年、仏普露の間で結び、プロイセンの大幅な領土割譲と、ロシアの大陸封鎖令参加の約束を実現した条約は何か。"
  },
  {
    "answer": "ワルシャワ大公国",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ティルジット条約によって、プロイセンが割譲したポーランド領にナポレオンが建国したフランスの衛星国は何か。"
  },
  {
    "answer": "マリ＝ルイーズ",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンの2番目の皇后で、オーストリア皇帝フランツ1世の娘である女性は誰か。"
  },
  {
    "answer": "フィヒテ",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "「ドイツ国民に告ぐ」を著し、ドイツにおけるナショナリズムの高揚に大きな影響を与えた人物は誰か。"
  },
  {
    "answer": "「ドイツ国民に告ぐ」",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "哲学者フィヒテが、ドイツ民族の精神的覚醒と統一を訴えた講演集を何と呼ぶか。"
  },
  {
    "answer": "シュタイン、ハルデンベルク",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオン戦争期において、プロイセンの改革を主導した政治家で、プロイセンの復興に貢献した2人の人物は誰か。"
  },
  {
    "answer": "「1808年5月3日」",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "スペインのマドリードで、フランス軍に対する民衆の抵抗とその鎮圧の様子を描いた、ゴヤの絵画の題名は何か。"
  },
  {
    "answer": "ゴヤ",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオン戦争期にフランス軍のスペイン侵攻に対する民衆の抵抗を題材にした作品を描いたスペインの画家は誰か。"
  },
  {
    "answer": "ロシア",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンの没落のきっかけとなった遠征の遠征先はどこか。"
  },
  {
    "answer": "第４回対仏大同盟",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンのロシア遠征失敗をきっかけに結成された、ナポレオンを打倒するための同盟は何か。"
  },
  {
    "answer": "ライプツィヒの戦い(諸国民戦争)",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "1813年、ナポレオン軍と、露普墺などからなる連合軍が激突し、ナポレオン軍の決定的に敗北した戦いを何と呼ぶか。"
  },
  {
    "answer": "エルバ島",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ライプツィヒの戦いの敗北後にナポレオン＝ボナパルトが最初に追放された、地中海に浮かぶ島を何と呼ぶか。"
  },
  {
    "answer": "ルイ18世",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンの失脚後、フランスに王政復古がなされた際、ブルボン朝の王として即位した人物は誰か。"
  },
  {
    "answer": "ウィーン会議",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "フランス革命とナポレオン戦争によって混乱したヨーロッパの秩序を再建するための国際会議を何と呼ぶか。"
  },
  {
    "answer": "百日天下",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオンが、パリに帰還して再び帝位に就いたが、ワーテルローの戦いで敗北するまでの期間を何と呼ぶか。"
  },
  {
    "answer": "ワーテルローの戦い",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ナポレオン軍と、イギリスのウェリントン率いる連合軍が激突した、ナポレオン戦争最後の戦いを何と呼ぶか。"
  },
  {
    "answer": "ウェリントン",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "イギリスの将軍としてワーテルローの戦いでナポレオンを破り、イギリスを勝利に導いた英雄は誰か。"
  },
  {
    "answer": "セントヘレナ島",
    "category": "ナポレオンの盛衰",
    "chapter": "12",
    "number": "92",
    "question": "ワーテルローの戦いでの敗北後にナポレオン＝ボナパルトが最後に流された、大西洋上の孤島を何と呼ぶか。"
  },
  {
    "answer": "ハイチ",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "1804年に仏からの独立を達成した、史上初の黒人共和国である島国を何と呼ぶか。"
  },
  {
    "answer": "サン＝ドマング",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "後にハイチとして独立する、西インド諸島で最大の砂糖生産地でもあるフランスの植民地の名称は何か。"
  },
  {
    "answer": "トゥサン＝ルヴェルチュール",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "黒人奴隷の反乱を指導し、ハイチの独立に貢献した「黒いジャコバン」とも呼ばれた革命家は誰か。"
  },
  {
    "answer": "クリオーリョ",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "ラテンアメリカの植民地社会において、本国出身の白人に対して、植民地生まれの白人を指す言葉は何と呼ぶか。"
  },
  {
    "answer": "メスティーソ",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "ラテンアメリカの植民地社会において、ヨーロッパ系の白人と先住民との混血を指す言葉は何と呼ぶか。"
  },
  {
    "answer": "ムラート",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "ラテンアメリカの植民地社会において、ヨーロッパ系の白人とアフリカ系の黒人との混血を指す言葉は何と呼ぶか。"
  },
  {
    "answer": "インディオ",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "ラテンアメリカの植民地社会において、ヨーロッパ人の入植以前からの先住民族を指す言葉は何と呼ぶか。"
  },
  {
    "answer": "シモン＝ボリバル",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "大コロンビア、ペルー、ボリビアの独立を達成し、リベルタドール（解放者） と呼ばれた英雄は誰か。"
  },
  {
    "answer": "サン＝マルティン",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "アルゼンチン、チリ、ペルーの独立に貢献し、リベルタドール（解放者） と呼ばれた英雄は誰か。"
  },
  {
    "answer": "イダルゴ",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "1810年にメキシコでスペインからの独立を求める蜂起を起こし、「メキシコ独立の父」 と呼ばれる司祭は誰か。"
  },
  {
    "answer": "ブラジル",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "1822年、ポルトガル王子が皇帝に即位して独立した国はどこか。"
  },
  {
    "answer": "モンロー主義",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "1823年に発表された、ヨーロッパ諸国とアメリカ大陸の相互不干渉を唱えた外交政策の原則を何と呼ぶか。"
  },
  {
    "answer": "環大西洋革命",
    "category": "中南米諸国の独立",
    "chapter": "12",
    "number": "93",
    "question": "18C後半-19C前半、米大陸とヨーロッパで同時期に起こった一連の政治的・社会的変革を総称して何と呼ぶか。"
  },
  {
    "answer": "クラーモント号",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1807年、蒸気船を発明したフルトンがハドソン川を航行した世界最初の蒸気船の名称は何か。"
  },
  {
    "answer": "サヴァンナ号",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1819年、蒸気船として初めて大西洋横断に成功（アメリカ東海岸からリヴァプール）した船の名称は何か。"
  },
  {
    "answer": "トレヴィシック",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1804年、スティーブンソンに先立ち蒸気機関車とレールを結合したが、実用化に至らなかったイギリスの発明家は誰か。"
  },
  {
    "answer": "ストックトン〜ダーリントン間",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1825年、スティーブンソンがロコモーション号で蒸気機関車試験走行に成功した区間はどこか。"
  },
  {
    "answer": "ロケット号",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1830年、スティーブンソンが初の営業運転をマンチェスター・リヴァプール間で行った際の蒸気機関車の名称は何か。"
  },
  {
    "answer": "機械輸出禁止法",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1774年、技術の国外流出防止のためにイギリスが定めた法律は何か（1825に一部解除）。"
  },
  {
    "answer": "マサチューセッツ（湾植民地）",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ニューイングランドを中心に、1629年頃に建設された植民地の名称は何か。"
  },
  {
    "answer": "タウンミーティング",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ニューイングランドで行われた直接民主政のことを何と呼ぶか。"
  },
  {
    "answer": "メリーランド",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1632年、カトリック教徒が中心に建てた植民地の名称は何か。"
  },
  {
    "answer": "クエーカー派",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1681年、ペンシルヴェニアを建てたウィリアム＝ペンが信仰したキリスト教の宗派は何か。"
  },
  {
    "answer": "ジョージア植民地",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1732年、13植民地の最後にして最南部に建てられた植民地の名称は何か。"
  },
  {
    "answer": "ジョージ3世",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "七年戦争後、重商主義を強化したイギリスの国王は誰か。"
  },
  {
    "answer": "砂糖法",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1764年、イギリス重商主義の一環で定められた税法は何か。"
  },
  {
    "answer": "タウンゼンド諸法",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "印紙法撤回の翌1767年、課税強化を目的に定められた輸入関税法の名称は何か。"
  },
  {
    "answer": "パトリック＝ヘンリ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1775年、武装蜂起を呼びかけ「自由か死か」の演説を行った人物は誰か。"
  },
  {
    "answer": "フランス：ラ＝ファイエット、ポーランド：コシューシコ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "アメリカ独立戦争に義勇軍として参加したフランス、ポーランドの人物をそれぞれ答えなさい。"
  },
  {
    "answer": "アメリカ連合規約",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1781年に発行し、アメリカ合衆国の国名を定めた規約の名称は何か。"
  },
  {
    "answer": "ヴェルサイユ条約",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1783年、イギリスがフランス、スペインと結んだ講和条約の名称は何か。"
  },
  {
    "answer": "ジョン＝アダムズ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "アメリカ合衆国２代目大統領は誰か。"
  },
  {
    "answer": "名士会",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1783年、財務総監となったカロンヌが特権身分への課税を図り招集した諮問機関は何か。"
  },
  {
    "answer": "英仏通商条約（イーデン条約）",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1786年、関税の引き下げを図るも、英の安価な工業製品の流入を招いた英仏間の条約は何か。"
  },
  {
    "answer": "エミグレ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "フランス革命を避け、フランスから他国に逃れた亡命貴族のことをカタカナで何というか。"
  },
  {
    "answer": "聖職者民事基本法",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1790年7月、国民議会が教会の国家管理を定めた法律は何か。"
  },
  {
    "answer": "アッシニア",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "国民議会が発行し、財政難を打開しようとした紙幣の名称は何か。"
  },
  {
    "answer": "ル＝シャプリエ法",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ギルドの廃止で商工業振興を図った一方、国民議会が労働者団結そしのため定めた法律の名称は何か。"
  },
  {
    "answer": "ミラボー",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ヴァレンヌ逃亡事件は、国王と内通し革命の急進化を阻止していた国民議会の指導者の死がきっかけだが、その人物は誰か。"
  },
  {
    "answer": "コルドリエ＝クラブ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ヴァレンヌ逃亡事件を受けて結成された、王政廃止・共和政実現を掲げる組織は何か。"
  },
  {
    "answer": "バイイ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "コルドリエ＝クラブが共和政実施の請願署名のためパリのシャン＝ド＝マルス広場に集まったのを国民衛兵司令官ラ＝ファイエットやバルナーヴとともに弾圧した（シャン＝ド＝マルスの虐殺）パリ市長は誰か。"
  },
  {
    "answer": "ジャン＝マリー・ロラン",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1792年3-6月に政権を握ったジロンド派内閣の指導者で、国王退位を求めたが、1793年に処刑された人物は誰か。"
  },
  {
    "answer": "タンプル塔",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1792年、8月10日事件の結果、国王一家が幽閉された塔の名称は何か。"
  },
  {
    "answer": "ゲーテ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ヴァルミーの戦いでの義勇軍の勝利を受け、「世界史の新しい時代が始まる」という言葉を残したプロイセンに従軍した文学者は誰か。"
  },
  {
    "answer": "マラー",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "国民公会で山岳派の指導者だったが、ジロンド派信奉者の女性シャルロット＝コルデにより入浴中に暗殺された人物は誰か。"
  },
  {
    "answer": "エベール",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "国民公会のジャコバン独裁下の最左派で、非キリスト教化を進めようとしてロベスピエールと対立し、ギロチンで処刑された人物は誰か。"
  },
  {
    "answer": "理性崇拝",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "エベールがキリスト教信仰に変えて推進した信仰は何か。"
  },
  {
    "answer": "ヴァンデーの（農民）反乱",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1793年3月以降、フランス西部で徴兵制への反発から起きた反革命運動の名称は何か。"
  },
  {
    "answer": "保安委員会",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ジャコバン独裁下の治安・警察を担当しのちロベスピエール打倒の中心となった機関は何か。"
  },
  {
    "answer": "革命裁判所",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ジャコバン独裁下の政治犯を審理するためにパリに設置された裁判所の名称は何か。"
  },
  {
    "answer": "サン＝ジュスト",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ロベスピエールとともに山岳派の実権を握った側近は誰か。"
  },
  {
    "answer": "フリュクティドール18日のクーデタ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1797年9月、王党派から権力奪取を図り、総裁政府が起こしたクーデタは何か。"
  },
  {
    "answer": "カンポ＝フォルミオの和約",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ナポレオンがイタリア遠征の結果、1797年にオーストラリアと結び第1回対仏大同盟を解体させた講和条約は何か。"
  },
  {
    "answer": "アブキール湾の海戦",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "エジプト遠征の中で、ナポレオンがイギリスのネルソン提督に敗北した海戦は何か。"
  },
  {
    "answer": "ピウス7世",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1801年、コンコルダートをナポレオンと結んだ教皇は誰か。"
  },
  {
    "answer": "ロシア：アレクサンドル1世、オーストリア：フランツ2世",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "アウステルリッツの三帝会戦でナポレオンに敗北したロシア、オーストリアの皇帝をそれぞれ答えなさい。"
  },
  {
    "answer": "フランツ2世",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ライン同盟結成で消滅した神聖ローマ帝国最後の皇帝は誰か。"
  },
  {
    "answer": "イエナ（＝アウエルシュタット）の戦い",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1806年10月ドイツ中部でナポレオンがロシア・プロイセンの連合軍を破った戦いは何か。"
  },
  {
    "answer": "ジョゼフ＝ボナパルト",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ナポリ王、スペイン王に任じられたナポレオンの兄は誰か。"
  },
  {
    "answer": "ルイ＝ボナパルト",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "オランダ王に任じられたナポレオンの弟は誰か。"
  },
  {
    "answer": "マリー＝ルイーズ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1810年にナポレオンと結婚した、ハプスブルク家の墺皇帝フランツ1世の皇女は誰か。"
  },
  {
    "answer": "フンボルト",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1810年にフィヒテを初代総長にして建てられた、ベルリン大学の創設者は誰か。"
  },
  {
    "answer": "シャルンホルスト、グナイゼナウ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "プロイセン改革の一環で、傭兵制から国民皆兵制への軍政改革を行なった軍人2人は誰か。"
  },
  {
    "answer": "クラウゼヴィッツ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "ワーテルローの戦いでは参謀長を務めた、『戦争論』を著したプロイセンの軍人は誰か。"
  },
  {
    "answer": "クトゥーゾフ",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1812年からのロシア遠征に際して、焦土作戦をとったロシアの将軍は誰か。"
  },
  {
    "answer": "ボロジノの戦い",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1812年9月、ナポレオンがロシア軍を破りモスクワ入城を果たした戦いは何か。"
  },
  {
    "answer": "ウェリントン",
    "category": "難関私大対策",
    "chapter": "12",
    "number": "Z",
    "question": "1815年、ワーテルローの戦いでナポレオンを破ったイギリスの軍人は誰か。"
  },
  {
    "answer": "メッテルニヒ",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "19世紀前半のオーストリアの宰相で、ウィーン会議を主宰した人物は誰か。"
  },
  {
    "answer": "タレーラン",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議でフランス代表として巧みな外交手腕を発揮して、フランスの地位を回復させた人物は誰か。"
  },
  {
    "answer": "アレクサンドル１世",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ナポレオンのロシア遠征を退け、ウィーン体制下で神聖同盟を提唱したロシア皇帝は誰か。"
  },
  {
    "answer": "正統主義",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議で、革命前の旧体制と君主の復帰を原則とした考え方を何と呼ぶか。"
  },
  {
    "answer": "「会議は踊る、されど進まず」",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議において、各国の思惑が複雑に絡み合い、結論が出ない状況を風刺して生まれた言葉は何と呼ぶか。"
  },
  {
    "answer": "ポーランド(立憲王国)",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議によって、ロシア皇帝を国王として成立し、ロシアの実質的な支配下に置かれた国はどこか。"
  },
  {
    "answer": "ケープ植民地・セイロン島",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議において、オランダからイギリスへの割譲が承認された、２つの植民地はどこか。"
  },
  {
    "answer": "オーストリア領ネーデルラント",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議において、オーストリアから切り離され、オランダに併合されてた地域はどこか。"
  },
  {
    "answer": "オランダ立憲王国",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議によって、旧ネーデルラント連邦共和国に現在のベルギーが統合されて成立した王国を何と呼ぶか。"
  },
  {
    "answer": "ロンバルディア、ヴェネツィア",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議によって、オーストリアに領有が認められた、イタリア北部に位置する主要な2つの地域を何と呼ぶか。"
  },
  {
    "answer": "永世中立国",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議によって中立が国際的に承認され、紛争に関与しないことを国是としているヨーロッパの国はどこか。"
  },
  {
    "answer": "ドイツ連邦",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "ウィーン会議によって、旧神聖ローマ帝国領の35君主国と4自由市から構成された緩やかな国家連合体を何と呼ぶか。"
  },
  {
    "answer": "神聖同盟",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "アレクサンドル1世が提唱し、キリスト教の友愛と平和の精神に基づいて結成された同盟は何か。"
  },
  {
    "answer": "四国同盟",
    "category": "ウィーン体制の成立",
    "chapter": "13",
    "number": "94",
    "question": "1815年に英露墺普が、ウィーン体制を維持することを目的として結成した軍事同盟を何と呼ぶか。"
  },
  {
    "answer": "自由主義",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "19世紀の欧州で広まった、個人の自由や権利を尊重し、国家の介入を最小限に抑えることを重視する思想は何か。"
  },
  {
    "answer": "ナショナリズム",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "19世紀の欧州で高まった、共通の文化や言語などで一体感を持ち、民族の独立や統一を目指す思想や運動は何か。"
  },
  {
    "answer": "ブルシェンシャフト",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1815年にドイツで結成された、自由主義とナショナリズムを掲げた学生組合を何と呼ぶか。"
  },
  {
    "answer": "スペイン立憲革命",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1820年にスペインで起こった、自由主義的な立憲制の復活と絶対王政の打倒を目指した革命を何と呼ぶか。"
  },
  {
    "answer": "リエゴ",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1820年にスペイン立憲革命を開始した、自由主義的な軍人は誰か。"
  },
  {
    "answer": "カルボナリ",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "19世紀前半、自由主義とナショナリズムを掲げ、墺の支配からの解放やイタリア統一を目指した秘密結社は何か。"
  },
  {
    "answer": "デカブリストの乱(十二月党員の乱)",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1825年、ニコライ1世の即位に際して、自由主義的な貴族や青年将校らが立憲制や農奴解放を求めた反乱は何か。"
  },
  {
    "answer": "ギリシア独立戦争",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1821年に始まり、オスマン帝国からの独立を目指した民族による戦争を何と呼ぶか。"
  },
  {
    "answer": "バイロン",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "19世紀のイギリスのロマン主義詩人で、ギリシア独立戦争に義勇兵として参加し、その地で病死した人物は誰か。"
  },
  {
    "answer": "ドラクロワ",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "19世紀仏のロマン主義画家で、ギリシア独立戦争を題材とする『キオス島の虐殺』などの作品で知られる人物は誰か。"
  },
  {
    "answer": "シャルル１０世",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "ブルボン朝最後の国王で、ルイ18世の弟にあたり、極端な反動政治を行ったために七月革命で追放された人物は誰か。"
  },
  {
    "answer": "アルジェリア",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1830年にシャルル10世率いるフランスが遠征を行い、植民地化を開始した北アフリカの国はどこか。"
  },
  {
    "answer": "七月革命",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1830年、ブルボン朝が倒され、新たな王政が成立した革命を何と呼ぶか。"
  },
  {
    "answer": "オルレアン家",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "ブルボン朝の分家で、七月王政を樹立した王家を何と呼ぶか。"
  },
  {
    "answer": "ルイ＝フィリップ",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "七月革命によって即位したが、制限選挙を維持したため国民の不満が高まり、二月革命で退位した人物は誰か。"
  },
  {
    "answer": "ベルギー",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1830年にオランダからの独立を宣言し、国際的な承認を得て立憲君主国として成立したヨーロッパの国はどこか。"
  },
  {
    "answer": "ドイツ関税同盟",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1834年にプロイセンを中心に結成され、ドイツ内の関税障壁を撤廃し、経済的な統一を進めた同盟を何と呼ぶか。"
  },
  {
    "answer": "リスト",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "19世紀ドイツの経済学者で、ドイツ関税同盟の結成を提唱し、保護貿易主義を主張した人物は誰か。"
  },
  {
    "answer": "ポーランド",
    "category": "1830年：ウィーン体制の動揺と七月革命",
    "chapter": "13",
    "number": "95",
    "question": "1830年にシュラフタがロシアからの独立を目指して蜂起したが鎮圧された東欧の国はどこか。"
  },
  {
    "answer": "腐敗選挙区",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "19世紀の英において、人口が激減ものの議席が維持され、少数の有権者によって議員が選出された選挙区を何と呼ぶか。"
  },
  {
    "answer": "ブルジョワ(産業資本家)",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "第１回選挙法改正によって新たに参政権を得た社会階層は何か。"
  },
  {
    "answer": "チャーティスト運動",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "19世紀のイギリスにおいて、労働者階級が普通選挙権をはじめとする政治改革を求めて展開した社会運動は何か。"
  },
  {
    "answer": "奴隷貿易",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "19世紀初頭のイギリスで、クウェーカー教徒や福音主義者らの運動によって、その廃止が達成されたものは何か。"
  },
  {
    "answer": "奴隷制",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "1833年にイギリスで、植民地地主の猛反対にもかかわらず、グレイ内閣によって決定された制度を何と呼ぶか。"
  },
  {
    "answer": "穀物法",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "ナポレオン戦争終結後のイギリスで、外国産穀物の輸入を制限することで地主の利益を保護した法律を何と呼ぶか。"
  },
  {
    "answer": "コブデン、ブライト",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "19世紀のイギリスにおいて、反穀物法同盟を設立し、自由貿易の推進を主張して成功を収めた2人の指導者は誰か。"
  },
  {
    "answer": "航海法",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "イギリス船による貿易を保護するために制定されたが、1849年に自由貿易主義の台頭により廃止された法律は何か。"
  },
  {
    "answer": "アイルランド",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "1801年に大ブリテン王国と併合されたが、多数を占めるカトリック教徒に対する差別が残された島国はどこか。"
  },
  {
    "answer": "審査法",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "1828年に英で廃止されたことにより、カトリック教徒を除く非国教徒の公職就任を可能にした法律は何か。"
  },
  {
    "answer": "カトリック教徒解放法",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "1829年に英で、カトリック教徒の公職就任や議会への参加を認め、彼らに対する差別を大幅に撤廃した法律は何か。"
  },
  {
    "answer": "オコネル",
    "category": "イギリスの自由主義的改革",
    "chapter": "13",
    "number": "96",
    "question": "カトリック教徒解放運動を主導し、アイルランドのカトリック教徒の権利回復に貢献した19世紀の人物は誰か。"
  },
  {
    "answer": "空想的社会主義",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀初期のヨーロッパで、のちにマルクスらに批判された、理想的な社会の実現を目指した社会主義思想は何か。"
  },
  {
    "answer": "オーウェン",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀の英において、理想的な協同組合村の建設や労働者の福祉向上に尽力し、工場法の制定に貢献した人物は誰か。"
  },
  {
    "answer": "工場法",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "1833年にイギリスで制定された、児童の工場労働の禁止や工場監察官の設置などを規定した法律を何と呼ぶか。"
  },
  {
    "answer": "サン＝シモン",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "産業の発展が社会を豊かにし、科学者や技術者が社会の指導的役割を果たすべきとした19世紀仏の思想家は誰か。"
  },
  {
    "answer": "フーリエ",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀フランスの思想家で、ファランジュと呼ばれる理想的な協同社会の建設を提唱した人物は誰か。"
  },
  {
    "answer": "ファランジュ",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀フランスの空想的社会主義者フーリエが提唱した、理想的な共同社会の名称を何と呼ぶか。"
  },
  {
    "answer": "プルードン",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "無政府主義の父と呼ばれ、「財産とは窃盗である」 という言葉で知られる19世紀のフランスの人物は誰か。"
  },
  {
    "answer": "無政府主義(アナーキズム)",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "国家やあらゆる権威を否定し、個人の自由と自治に基づいた社会の実現を目指す思想、またはその運動を何と呼ぶか。"
  },
  {
    "answer": "ルイ＝ブラン",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀フランスの社会主義者で、労働者の権利擁護と失業対策のために国立作業場の設立を提唱した人物は誰か。"
  },
  {
    "answer": "国立作業場",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "ルイ＝ブランの提唱によって、失業者の救済と雇用創出を目的として臨時政府が設置した施設を何と呼ぶか。"
  },
  {
    "answer": "マルクス",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀ドイツの哲学者、経済学者、革命家で、エンゲルスと共に科学的社会主義を確立した人物は誰か。"
  },
  {
    "answer": "『共産党宣言』",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "1848年にマルクスとエンゲルスによって発表された、共産主義者の綱領的文書を何と呼ぶか。"
  },
  {
    "answer": "『資本論』",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "マルクスによって著された、資本主義社会の経済構造と運動法則を分析した主著を何と呼ぶか。"
  },
  {
    "answer": "エンゲルス",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "19世紀ドイツの思想家で、『共産党宣言』を共同執筆し、『資本論』の出版に尽力したマルクスの協力者は誰か。"
  },
  {
    "answer": "第１インターナショナル",
    "category": "社会主義思想の成立",
    "chapter": "13",
    "number": "97",
    "question": "1864年にロンドンで結成された、各国の労働者組織や社会主義者らが参加した国際的な労働者組織を何と呼ぶか。"
  },
  {
    "answer": "二月革命",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "1848年フランスで、パリ市民が蜂起し、ルイ＝フィリップが退位して第二共和政が成立した革命を何と呼ぶか。"
  },
  {
    "answer": "第二共和政",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "1848年の二月革命によって成立したフランスの政治体制を何と呼ぶか。"
  },
  {
    "answer": "国立作業場",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "ルイ＝ブランの提唱によって、失業者の救済と雇用創出を目的として臨時政府が設置した施設を何と呼ぶか。"
  },
  {
    "answer": "ルイ＝ナポレオン",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "フランス第二共和政の最初で最後の大統領となり、後にクーデターを起こして第二帝政を樹立した人物は誰か。"
  },
  {
    "answer": "諸国民の春(1848年革命)",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "二月革命に触発され、ヨーロッパ各地で起こった自由主義とナショナリズムの嵐のような革命運動を何と呼ぶか。"
  },
  {
    "answer": "三月革命",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "1848年、ドイツのベルリンやウィーンなどで起こった、自由主義と国民国家の形成を求める革命運動を何と呼ぶか。"
  },
  {
    "answer": "コシュート",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "諸国民の春において、墺の支配下のハンガリーで独立運動を指導し、ハンガリー共和国の樹立を宣言した人物は誰か。"
  },
  {
    "answer": "パラツキー",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "諸国民の春において、墺の支配下のベーメンで、スラヴ民族の自治と平等を求めたチェコの歴史家・政治家は誰か。"
  },
  {
    "answer": "フランクフルト国民議会",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "1848年に、ドイツ統一と憲法制定を目的として開催された、ドイツ全域からの代表者が集まった議会を何と呼ぶか。"
  },
  {
    "answer": "大ドイツ主義",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "フランクフルト国民議会において、墺の一部を含む、ドイツ語を話す全ての地域の統合を目指した主張を何と呼ぶか。"
  },
  {
    "answer": "小ドイツ主義",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "フランクフルト国民議会において、墺を除外し、普を中心としてドイツを統一しようとした主張を何と呼ぶか。"
  },
  {
    "answer": "フリードリヒ＝ヴィルヘルム４世",
    "category": "1848年：ウィーン体制の崩壊・二月革命",
    "chapter": "13",
    "number": "98",
    "question": "フランクフルト国民議会からドイツ皇帝位を提示されたが、「民衆からの冠」としてこれを拒否した人物は誰か。"
  },
  {
    "answer": "クリミア戦争",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1853-56年、聖地管理問題をめぐり、露と、オスマン帝国・英・仏・サルデーニャ連合軍間で戦われた戦争は何か。"
  },
  {
    "answer": "セヴァストーポリ要塞",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "クリミア戦争の主要な戦場となった、クリミア半島南部の要塞を何と呼ぶか。"
  },
  {
    "answer": "パリ条約",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1856年に締結され、オスマン帝国の領土保全と独立が国際的に保障された、クリミア戦争の講和条約を何と呼ぶか。"
  },
  {
    "answer": "黒海",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "クリミア戦争において、ロシアがその制海権を巡ってオスマン帝国や英仏連合軍と争った内海は何か。"
  },
  {
    "answer": "南下政策",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "18世紀以降のロシアが、不凍港の獲得を目指して、南方へ勢力を拡大しようとした外交政策を何と呼ぶか。"
  },
  {
    "answer": "アレクサンドル２世",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "クリミア戦争敗北後のロシア皇帝で、後進性打破のため「大改革」に着手し、農奴解放令を発布した人物は誰か。"
  },
  {
    "answer": "農奴解放令",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1861年にアレクサンドル2世によって発布された、農奴制を廃止し、農奴を人格的に自由にした法令を何と呼ぶか。"
  },
  {
    "answer": "ミール",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "ロシアで、農民生活を支える一方で近代化の足枷にもなった、農奴解放令後の農村共同体を何と呼ぶか。"
  },
  {
    "answer": "ポーランド",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "アレクサンドル２世が反動化するきっかけとなる反乱が発生した地域はどこか。"
  },
  {
    "answer": "インテリゲンツィア",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "19世紀のロシアにおいて、啓蒙や革命を通じて社会変革を目指した、知識人階層を何と呼ぶか。"
  },
  {
    "answer": "ナロードニキ",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "19世紀後半の露において、社会主義の実現を目指し、農村に入って啓蒙活動を行った知識人たちを何と呼ぶか。"
  },
  {
    "answer": "「ヴ＝ナロード(人民のなかへ)」",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "19世紀後半のロシアにおいて、ナロードニキが掲げたスローガンを何と呼ぶか。"
  },
  {
    "answer": "ロシア＝トルコ戦争",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1877-78年、バルカン半島におけるスラヴ民族の保護を口実に、ロシアとオスマン帝国の間で勃発した戦争は何か。"
  },
  {
    "answer": "サン＝ステファノ条約",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1878年、露土戦争の講和条約として、ロシアとオスマン帝国の間で締結された条約を何と呼ぶか。"
  },
  {
    "answer": "ベルリン会議",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "サン＝ステファノ条約の内容を修正するために、ビスマルクの主導で開催された国際会議を何と呼ぶか。"
  },
  {
    "answer": "ルーマニア、セルビア、モンテネグロ",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1878年のベルリン会議において、オスマン帝国からの独立が国際的に承認されたバルカン半島の三国はどこか。"
  },
  {
    "answer": "ブルガリア",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1878年のベルリン会議で、大幅な領土縮小を受けつつも、オスマン帝国の宗主権下で自治が認められた国家はどこか。"
  },
  {
    "answer": "キプロス",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1878年のベルリン会議において、オスマン帝国が行政権をイギリスに割譲した、東地中海の島を何と呼ぶか。"
  },
  {
    "answer": "ボスニア・ヘルツェゴヴィナ",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "1878年のベルリン会議において、オスマン帝国の主権下にだが、オーストリアが管理権を獲得した地域はどこか。"
  },
  {
    "answer": "チュニジア",
    "category": "列強の新体制：ロシア",
    "chapter": "13",
    "number": "99",
    "question": "ビスマルクもその支配を支持した、フランスが1881年に保護国化した地域はどこか。"
  },
  {
    "answer": "ヴィクトリア女王",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1837年から1901年までイギリスを統治し、繁栄の時代を築いた女王は誰か。"
  },
  {
    "answer": "「パクス＝ブリタニカ」",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "19世紀のイギリスが、経済や政治において圧倒的な優位性を確立し、国際秩序を主導した時代を何と呼ぶか。"
  },
  {
    "answer": "万国博覧会",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1851年のロンドンでの開催がその嚆矢とされる、各国が産業技術や文化の成果を展示する大規模なイベントは何か。"
  },
  {
    "answer": "保守党",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "貴族やジェントリ、国教会の支持を基盤とし、自由主義改革に対しては漸進的な姿勢をとったイギリスの政党は何か。"
  },
  {
    "answer": "ディズレーリ",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "19世紀後半の保守党の指導者で、ヴィクトリア女王の信任厚く、首相を二度務めた人物は誰か。"
  },
  {
    "answer": "自由党",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "産業資本家や中産階級、非国教徒の支持を基盤とし、自由主義的改革を主張したイギリスの政党は何か。"
  },
  {
    "answer": "グラッドストン",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "19世紀後半の自由党の指導者で、首相を四度務め、アイルランド問題の解決や自由貿易に尽力した人物は誰か。"
  },
  {
    "answer": "都市労働者",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "第２回選挙法改正によって新たに参政権を得た社会階層は何か。"
  },
  {
    "answer": "農業・鉱業労働者",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "第３回選挙法改正によって新たに参政権を得た社会階層は何か。"
  },
  {
    "answer": "ジャガイモ飢饉",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1840年代半ばにアイルランドを襲った、大規模な飢餓と多数の死者、大量の海外移住者を出した事件を何と呼ぶか。"
  },
  {
    "answer": "アイルランド自治法案",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "グラッドストン率いる自由党が、アイルランドに限定的な自治権を付与しようとしたが否決された法案は何か。"
  },
  {
    "answer": "第二帝政",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1852-70年にかけてのフランスの政治体制は何か。"
  },
  {
    "answer": "ナポレオン３世",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1852年にクーデタで帝政を復活させた人物の皇帝としての名は何か。"
  },
  {
    "answer": "クリミア戦争",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "ナポレオン３世が介入し、オスマン帝国側についた、ロシアとの戦争は何か。"
  },
  {
    "answer": "第２次アヘン戦争（アロー戦争）",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "フランス人宣教師殺害事件を口実として起こり、フランスがイギリスとともに清に介入した戦争は何か。"
  },
  {
    "answer": "インドシナ出兵",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1858-62年にかけて、フランスがスペインと共同で、宣教師殺害事件を口実に阮朝に対して行った軍事行動は何か。"
  },
  {
    "answer": "スエズ運河",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1869年に開通した、エジプトの地峡部に建設された、地中海と紅海を結ぶ運河を何と呼ぶか。"
  },
  {
    "answer": "レセップス",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "フランスの外交官で、1869年にスエズ運河の開通を主導した人物は誰か。"
  },
  {
    "answer": "イタリア統一戦争",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "ナポレオン3世が介入し、サルデーニャ王国を支援した戦争を何と呼ぶか。"
  },
  {
    "answer": "メキシコ",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "19世紀半ば、ナポレオン3世が、債務問題を口実に軍事介入し、皇帝を擁立しようとした国家はどこか。"
  },
  {
    "answer": "ドイツ＝フランス戦争(普仏戦争)",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "フランス第二帝政が崩壊し、ドイツ帝国の成立が実現した戦争は何か。"
  },
  {
    "answer": "ティエール",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "普仏戦争後のフランスにおいて、臨時政府の首班となり、パリ＝コミューンを鎮圧した人物は誰か。"
  },
  {
    "answer": "パリ＝コミューン",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1871年3月18日から5月28日まで、普仏戦争後のパリで成立した、労働者による自治政府を何と呼ぶか。"
  },
  {
    "answer": "アルザス、ロレーヌ",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "普仏戦争の結果、フランスがドイツ帝国に割譲した、国境地帯の二つの地方を何と呼ぶか。"
  },
  {
    "answer": "マクマオン",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1875年に共和国憲法を制定し、第三共和政を成立させた大統領は誰か。"
  },
  {
    "answer": "第三共和政",
    "category": "列強の新体制：イギリス・フランス",
    "chapter": "13",
    "number": "100",
    "question": "1870年の普仏戦争敗北から1940年の対独降伏まで存続した、フランスの共和政体を何と呼ぶか。"
  },
  {
    "answer": "青年イタリア",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "1831年にマッツィーニが結成した、共和主義によるイタリア統一を目指した政治結社を何と呼ぶか。"
  },
  {
    "answer": "マッツィーニ",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "「青年イタリア」を結成し、武力によるイタリア統一と共和政国家の樹立を目指した人物は誰か。"
  },
  {
    "answer": "サルデーニャ王国",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "19世紀のイタリア統一運動（リソルジメント）において、その中心的な役割を担った北イタリアの王国を何と呼ぶか。"
  },
  {
    "answer": "ヴィットーリオ＝エマヌエーレ２世",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "サルデーニャ王国の国王で、最終的にイタリアを統一して初代イタリア国王となった人物は誰か。"
  },
  {
    "answer": "カブール",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "サルデーニャ王国の首相として外交手腕を発揮し、イタリア統一の道を切り開いた人物は誰か。"
  },
  {
    "answer": "イタリア統一戦争",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "1859年、フランスの援助でサルデーニャ王国がオーストリアと開始した戦争を何と呼ぶか。"
  },
  {
    "answer": "ロンバルディア",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "イタリア統一戦争で、サルデーニャ王国がオーストリアから獲得した北イタリアの肥沃な地域を何と呼ぶか。"
  },
  {
    "answer": "サヴォイア、ニース",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "イタリア統一戦争協力の見返りとして、1860年にサルデーニャ王国からフランスに割譲された地域を何と呼ぶか。"
  },
  {
    "answer": "ガリバルディ",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "「赤シャツ隊」を率いてシチリアとナポリを征服し、南部イタリアをサルデーニャ王国に献上した人物は誰か。"
  },
  {
    "answer": "イタリア王国",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "1861年にサルデーニャ王国がイタリア半島を統一して成立した国家を何と呼ぶか。"
  },
  {
    "answer": "ヴェネツィア",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "普墺戦争においてイタリアが普と同盟を結び、墺に勝利した結果、イタリアに編入された都市はどこか。"
  },
  {
    "answer": "ローマ教皇領",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "1870年のイタリア軍による占領により、イタリア王国に併合された地域はどこか。"
  },
  {
    "answer": "「未回収のイタリア」",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "19世紀のイタリア統一後も、オーストリア領内に残された、イタリア人が多く住む地域を何と呼ぶか。"
  },
  {
    "answer": "南チロル、トリエステ",
    "category": "新国民国家の成立：イタリア",
    "chapter": "13",
    "number": "101",
    "question": "「未回収のイタリア」のうち、主にアルプス山脈南部の地域と、アドリア海に面した港湾都市をそれぞれ何と呼ぶか。"
  },
  {
    "answer": "ドイツ関税同盟",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "1834年にプロイセンを中心として諸邦間で結成され、関税障壁を撤廃して経済的な統一を促進した組織を何と呼ぶか。"
  },
  {
    "answer": "小ドイツ主義",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "19世紀のドイツ統一運動において、オーストリアを除くプロイセン中心のドイツ統一を目指す立場を何と呼ぶか。"
  },
  {
    "answer": "ユンカー",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "プロイセンにおいて、軍や官僚機構の中核を占めた、保守的な地主貴族階級を何と呼ぶか。"
  },
  {
    "answer": "ビスマルク",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "強力な軍事力と巧みな外交によってドイツ統一を達成し、「鉄血宰相」と呼ばれた人物は誰か。"
  },
  {
    "answer": "鉄血政策",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "1860年代にプロイセンのビスマルクが提唱し、軍事力と戦争によってドイツ統一を達成しようとした政策を何と呼ぶか。"
  },
  {
    "answer": "デンマーク戦争",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "1864年にプロイセンとオーストリアがデンマークに対して起こした戦争を何と呼ぶか。"
  },
  {
    "answer": "シュレスヴィヒ、ホルシュタイン",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "デンマーク戦争で普領、墺領になったドイツ系住民が多く居住していた地域はそれぞれ何か。"
  },
  {
    "answer": "プロイセン＝オーストリア戦争",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "プロイセンがドイツ統一の主導権を握るきっかけとなった、1866年の戦争を何と呼ぶか。"
  },
  {
    "answer": "北ドイツ連邦",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "普墺戦争後、プロイセンの主導で結成された、旧ドイツ連邦のうちマイン川以北の22邦からなる国家連合体を何と呼ぶか。"
  },
  {
    "answer": "オーストリア＝ハンガリー（二重）帝国",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "普墺戦争後の1867年にアウスグライヒ（妥協）によって成立した国家を何と呼ぶか。"
  },
  {
    "answer": "ドイツ＝フランス戦争(普仏戦争)",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "フランス第二帝政が崩壊し、ドイツ帝国の成立が実現した戦争は何か。"
  },
  {
    "answer": "ドイツ帝国",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "普仏戦争での勝利後、ヴェルサイユ宮殿でヴィルヘルム1世が皇帝に即位したことにより成立した国家を何と呼ぶか。"
  },
  {
    "answer": "ヴィルヘルム１世",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ドイツ帝国の初代皇帝となった人物は誰か。"
  },
  {
    "answer": "「アメとムチ」",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ビスマルクによって実施された、社会主義の弾圧と、社会保険制度の整備という二面性を持つ政策を何と呼ぶか。"
  },
  {
    "answer": "文化闘争",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ドイツ帝国において、ビスマルクがカトリック教会とその中央党に対して行った一連の抑圧政策を何と呼ぶか。"
  },
  {
    "answer": "中央党",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ビスマルクの文化闘争の際に激しく抵抗した、カトリック教徒を主な支持基盤とする政党は何か。"
  },
  {
    "answer": "社会主義者鎮圧法",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ビスマルクが制定した法律で、社会主義者の活動や社会主義結社を禁止し、社会主義運動を厳しく弾圧したものは何か。"
  },
  {
    "answer": "社会民主党",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "社会主義者鎮圧法で弾圧された、ドイツ社会主義労働者党の後身となる政党は何か。"
  },
  {
    "answer": "フランス",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ビスマルク外交は、どこの国を孤立させるために行われた外交政策か。"
  },
  {
    "answer": "三国同盟",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "1882年にドイツ、オーストリア＝ハンガリー帝国、イタリアの間で結成された軍事同盟を何と呼ぶか。"
  },
  {
    "answer": "再保障条約",
    "category": "新国民国家の成立：ドイツ",
    "chapter": "13",
    "number": "102",
    "question": "ドイツが二正面作戦を回避するために、1887年に独露間で結ばれた秘密条約を何と呼ぶか。"
  },
  {
    "answer": "第１インターナショナル",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "1864年にロンドンで結成された、各国の労働者組織や社会主義者らが参加した国際的な労働者組織を何と呼ぶか。"
  },
  {
    "answer": "プルードン",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "第１インターナショナルで、漸進的な協同組合の発展による国家廃止を主張した派閥の代表は誰か。"
  },
  {
    "answer": "バクーニン",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "第１インターナショナルでマルクス主義と対立した、暴力的手段による国家の即時解体を主張した派閥の代表は誰か。"
  },
  {
    "answer": "パリ＝コミューン",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "1871年3月18日から5月28日まで、普仏戦争後のパリで成立した、労働者による自治政府を何と呼ぶか。"
  },
  {
    "answer": "第２インターナショナル",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "1889年にパリで結成された、国際的な社会主義政党の連絡組織を何と呼ぶか。"
  },
  {
    "answer": "ドイツ社会民主党",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "第２インターナショナルを主導した政党は何か。"
  },
  {
    "answer": "国際赤十字組織",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "スイスの実業家デュナンが設立を提唱し、戦傷病者の救護を目的として活動する国際的な人道支援組織を何と呼ぶか。"
  },
  {
    "answer": "デュナン",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "ソルフェリーノの戦いを目の当たりにし、戦時下の負傷者救護のための国際組織の必要性を訴えたスイスの人物は誰か。"
  },
  {
    "answer": "ナイティンゲール",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "クリミア戦争で負傷兵を救護し、近代看護学を確立した「クリミアの天使」と呼ばれる人物は誰か。"
  },
  {
    "answer": "クーベルタン",
    "category": "北欧の動向/国際的諸運動と世界の一体化",
    "chapter": "13",
    "number": "103",
    "question": "1896年にアテネで第1回近代オリンピック競技大会を開催した、「近代オリンピックの父」と呼ばれる人物は誰か。"
  },
  {
    "answer": "トマス＝ジェファソン",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "ルイジアナ購入によって領土を拡大した第３代アメリカ合衆国大統領は誰か。"
  },
  {
    "answer": "ルイジアナ",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1803年にアメリカ合衆国がフランスから購入した広大な地域を何と呼ぶか。"
  },
  {
    "answer": "アメリカ＝イギリス戦争",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1812-14年にかけて行われた戦争で、第２次アメリカ独立戦争とも呼ばれるものは何か。"
  },
  {
    "answer": "モンロー主義",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1823年に発表された、ヨーロッパ諸国とアメリカ大陸の相互不干渉を唱えた外交政策の原則を何と呼ぶか。"
  },
  {
    "answer": "フロリダ",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1819年にアメリカ合衆国がスペインから購入した、南東部に位置する広大な半島を何と呼ぶか。"
  },
  {
    "answer": "ジャクソン",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "第7代アメリカ合衆国大統領で、西部開拓者や一般大衆からの支持を得て、先住民強制移住法を推進した人物は誰か。"
  },
  {
    "answer": "ジャクソニアン＝デモクラシー",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "ジャクソン大統領期に発展した、普通選挙拡大や大衆政治を特徴とする政治潮流を何と呼ぶか。"
  },
  {
    "answer": "西漸運動",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "19世紀のアメリカ合衆国で、入植者がアパラチア山脈を越えて西方へ移動した歴史的な動きを何と呼ぶか。"
  },
  {
    "answer": "「明白なる運命（マニフェスト＝デスティニー）」",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "19世紀のアメリカ合衆国で、西漸運動や領土拡大を正当化する考え方や信念を何と呼ぶか。"
  },
  {
    "answer": "テキサス",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1836年にメキシコからの独立を宣言し、その後1845年にアメリカ合衆国に併合された地域を何と呼ぶか。"
  },
  {
    "answer": "オレゴン",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "米英で領有権を争い、1846年に分割された太平洋岸北西部の地域を何と呼ぶか。"
  },
  {
    "answer": "カリフォルニア",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "米墨戦争の結果、1848年にアメリカが獲得した太平洋岸の広大な地域を何と呼ぶか。"
  },
  {
    "answer": "アメリカ＝メキシコ戦争",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1846年から1848年にかけて、アメリカ合衆国とメキシコの間で戦われた戦争を何と呼ぶか。"
  },
  {
    "answer": "ゴールドラッシュ",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "特に1848年にカリフォルニアで金が発見されたことを契機に、世界中から多くの人々が金を求めて殺到した現象は何か。"
  },
  {
    "answer": "先住民強制移住法",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1830年に制定された、アメリカ先住民をミシシッピ川以西の保留地へ強制移住させた法律を何と呼ぶか。"
  },
  {
    "answer": "保留地",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "アメリカ政府が、先住民の土地を接収する代わりに、彼らの居住を許可し管轄下に置いた特定の地域を何と呼ぶか。"
  },
  {
    "answer": "ペリー",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1853年に日本の浦賀に来航し、開国を要求したアメリカ海軍東インド艦隊司令長官を何と呼ぶか。"
  },
  {
    "answer": "アラスカ",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1867年にアメリカ合衆国がロシアから購入した、北米大陸北西部に位置する広大な領土を何と呼ぶか。"
  },
  {
    "answer": "北部",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "アメリカで奴隷制に反対したのは北部・南部のどちらか。"
  },
  {
    "answer": "北部",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "アメリカで連邦主義を主張したのは北部・南部のどちらか。"
  },
  {
    "answer": "北部",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "19世紀半ばのアメリカで、共和党の主な支持基盤となったのは北部・南部のどちらか。"
  },
  {
    "answer": "南部",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "アメリカで奴隷制に賛成したのは北部・南部のどちらか。"
  },
  {
    "answer": "南部",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "アメリカで州権主義を主張したのは北部・南部のどちらか。"
  },
  {
    "answer": "南部",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "19世紀半ばのアメリカで、民主党の主な支持基盤となったのは北部・南部のどちらか。"
  },
  {
    "answer": "リパブリカン",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "トマス＝ジェファソンを大統領として輩出した、のちの民主党となる政治団体（政党）は何か。"
  },
  {
    "answer": "ミズーリ協定",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1820年にアメリカ合衆国で制定された、奴隷州と自由州の数の均衡を保つための妥協案を何と呼ぶか。"
  },
  {
    "answer": "ストウ",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "奴隷制度の悲惨さを訴えた『アンクル=トムの小屋』を著し、南北戦争開戦のきっかけの一つを作った人物は誰か。"
  },
  {
    "answer": "『アンクル＝トムの小屋』",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1852年にストウによって発表された、奴隷制度の悲惨さと不当性を描いた小説を何と呼ぶか。"
  },
  {
    "answer": "カンザス・ネブラスカ法",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1854年に新たに誕生する準州において、住民投票により奴隷制の有無を決めた法律を何と呼ぶか。"
  },
  {
    "answer": "リンカン",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "第16代アメリカ合衆国大統領で、南北戦争時に北軍を率いて奴隷制の廃止と合衆国の分裂阻止に尽力した人物は誰か。"
  },
  {
    "answer": "アメリカ連合国",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1861年にアメリカ合衆国を脱退した南部11州が結成した国家を何と呼ぶか。"
  },
  {
    "answer": "リッチモンド",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "アメリカ連合国の首都はどこか。"
  },
  {
    "answer": "ジェファソン＝デヴィス",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "南北戦争中のアメリカ連合国（南軍）の初代にして唯一の大統領は誰か。"
  },
  {
    "answer": "ホームステッド法",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "西部農民の北部支持のために出された、公有地に5年定住し開墾した者に160エーカーの土地を無償で与えた法は何か。"
  },
  {
    "answer": "奴隷解放宣言",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1863年1月1日にアメリカ合衆国大統領リンカンによって発せられた宣言を何と呼ぶか。"
  },
  {
    "answer": "ゲティスバーグの戦い",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "1863年ペンシルベニア州で戦われた、北軍の勝利により南軍の北方侵攻の野望が潰えた、南北戦争最大の激戦を何か。"
  },
  {
    "answer": "リッチモンドの戦い",
    "category": "アメリカ合衆国の発展：領土拡大と南北戦争",
    "chapter": "13",
    "number": "104",
    "question": "南北戦争において、北軍の最終的な勝利を決定づけた戦いは何か。"
  },
  {
    "answer": "KKK(クー・クラックス・クラン）",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "南北戦争直後の1865年にアメリカ南部で結成された、白人至上主義を掲げる秘密結社を何と呼ぶか。"
  },
  {
    "answer": "シェアクロッパー",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "南北戦争後、アメリカ南部で解放された元奴隷や貧しい白人農民が多くなった小作人の形態を何と呼ぶか。"
  },
  {
    "answer": "大陸横断鉄道",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "1869年にアメリカ合衆国で完成した、東海岸と西海岸を結ぶ鉄道を何と呼ぶか。"
  },
  {
    "answer": "1890年",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "アメリカの西漸運動にて、フロンティアが消滅したのは西暦何年か。"
  },
  {
    "answer": "旧移民",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "アメリカの旧移民・新移民のうち、北欧や西欧からの移民が多いのは旧移民か新移民か。"
  },
  {
    "answer": "新移民",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "アメリカの旧移民・新移民のうち、東欧や南欧からの移民が多いのは旧移民か新移民か。"
  },
  {
    "answer": "苦力（クーリー）",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "19世紀半ば、特に中国からアメリカ合衆国に低賃金労働者として契約移民した人々を、蔑視を込めて何と呼ぶか。"
  },
  {
    "answer": "アメリカ労働総同盟（AFL）",
    "category": "アメリカ合衆国の大国化",
    "chapter": "13",
    "number": "105",
    "question": "1886年にサミュエル＝ゴンパースが設立を主導した、熟練労働者中心のアメリカの労働組合連合組織を何と呼ぶか。"
  },
  {
    "answer": "「疾風怒濤（シュトゥルム＝ウント＝ドランク）」",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "1770年代にドイツで起こった文学運動で、形式や理性より感情や個性の自由な表現を重視したものは何か。"
  },
  {
    "answer": "ゲーテ",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『若きウェルテルの悩み』や『ファウスト』などの文学作品で知られる、ドイツ文学の古典主義を代表する巨匠は誰か。"
  },
  {
    "answer": "シラー",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『群盗』や『歓喜の歌』作詞で知られる、ドイツ古典主義文学の巨匠は誰か"
  },
  {
    "answer": "ロマン主義",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "理性よりも感情や個性を重視し、自由や自然、民族の独自性を重んじた芸術・思想運動を何と呼ぶか。"
  },
  {
    "answer": "ノヴァーリス",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『夜の賛歌』『青い花』で知られる、ドイツ初期ロマン主義の詩人は誰か。"
  },
  {
    "answer": "ハイネ",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "詩集『歌の本』や長詩『ドイツ冬物語』などで知られ、「愛と革命の詩人」と称されるドイツの詩人、批評家は誰か。"
  },
  {
    "answer": "グリム兄弟",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『ブレーメンの音楽隊』や『ヘンゼルとグレーテル』など、ドイツ各地の民話を収集・編纂した兄弟は誰か。"
  },
  {
    "answer": "ヴィクトル＝ユゴー",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "フランス・ロマン主義を代表する詩人、小説家、劇作家で、『レ・ミゼラブル』などの傑作を残した人物は誰か。"
  },
  {
    "answer": "バイロン",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "イギリス・ロマン主義を代表する詩人で、ギリシア独立戦争に参加し、その地で病没した人物は誰か。"
  },
  {
    "answer": "プーシキン",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "詩劇『ボリス・ゴドゥノフ』や『大尉の娘』などで知られる、ロシア・ロマン主義を代表する国民的詩人は誰か。"
  },
  {
    "answer": "写実主義",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "理想化や感傷を排し、現実をありのままに描写しようとした芸術・文学の運動を何と呼ぶか。"
  },
  {
    "answer": "スタンダール",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『赤と黒』などの作品で知られるフランス・写実主義の小説家で、「心理描写の巨匠」と評される人物は誰か。"
  },
  {
    "answer": "バルザック",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "フランス・写実主義を代表する小説家で、『人間喜劇』を著し、19世紀フランス社会の縮図を描いた人物は誰か。"
  },
  {
    "answer": "ディケンズ",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "人間の運命と愛、犠牲を描いた歴史小説『二都物語』などで知られる、19世紀イギリスの写実主義の小説家は誰か。"
  },
  {
    "answer": "トゥルゲーネフ",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "農奴制下のロシア社会や知識人の苦悩を描いた『父と子』などで知られる、ロシアの写実主義を代表する小説家は誰か。"
  },
  {
    "answer": "ドストエフスキー",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『罪と罰』や『カラマーゾフの兄弟』などの長編小説で、人間の内面の葛藤や精神の深淵を描いた、ロシア文学の巨匠は誰か。"
  },
  {
    "answer": "トルストイ",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『戦争と平和』などの長編小説で、19世紀ロシアの社会や人間の生き様を深く探求した、ロシア文学の巨匠は誰か。"
  },
  {
    "answer": "自然主義",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "ゾラが提唱した文学運動で、科学的観察に基づき、人間の行動や社会現象を客観的に描写しようとしたものを何と呼ぶか。"
  },
  {
    "answer": "ゾラ",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "パリを舞台に、労働者階級の悲惨な生活を描いた自然主義文学の代表作『居酒屋』を著したフランスの小説家は誰か。"
  },
  {
    "answer": "モーパッサン",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "短編小説『脂肪の塊』や『女の一生』などの作品で知られる、19世紀フランスを代表する写実主義・自然主義の作家は誰か。"
  },
  {
    "answer": "イプセン",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "近代演劇の父と称され、『人形の家』などの作品で、社会問題や人間の内面を深く掘り下げたノルウェーの劇作家は誰か。"
  },
  {
    "answer": "耽美主義",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "自然主義の反発から、道徳や実用性から独立した芸術そのものの美しさや形式の完成度を追求したものを何と呼ぶか。"
  },
  {
    "answer": "ボードレール",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "詩集『悪の華』で知られる、19世紀フランスの詩人で、美を至上とする耽美主義の傾向を持った人物は誰か。"
  },
  {
    "answer": "ワイルド",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "「芸術のための芸術」を主張する耽美主義を代表する作家で、戯曲『サロメ』などで知られる人物は誰か。"
  },
  {
    "answer": "象徴主義",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "仏を中心に起こった芸術・文学運動で、言葉やイメージの暗示的な力によって、精神世界などを表現しようとしたものは何か。"
  },
  {
    "answer": "ランボー",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "詩集『地獄の季節』『イリュミナシオン』で知られ、若くして詩作を終えた象徴主義の詩人は誰か。"
  },
  {
    "answer": "メーテルリンク",
    "category": "国民文化/19世紀の欧米文学",
    "chapter": "13",
    "number": "106",
    "question": "『青い鳥』の作者として知られる、ベルギー象徴主義を代表する劇作家、詩人は誰か。"
  },
  {
    "answer": "古典主義",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "古代ギリシア・ローマ美術を理想とし、均整の取れた形式美や調和、理性的な表現を重視した美術様式を何と呼ぶか。"
  },
  {
    "answer": "ダヴィド",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "古典主義を代表し、「ナポレオンの戴冠式」などの歴史画で知られる人物は誰か。"
  },
  {
    "answer": "アングル",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「グランド・オダリスク」など、なめらかな曲線による優美な裸婦像で知られる、古典主義を代表するフランスの画家は誰か。"
  },
  {
    "answer": "ロマン主義",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "19C初以降の美術様式で、古典主義の理性や均衡に対し、感情、想像力、個性、劇的な表現を重視したものを何と呼ぶか。"
  },
  {
    "answer": "ジェリコー",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "フランス・ロマン主義絵画の先駆者で、大画面に劇的な瞬間を描いた「メデュース号の筏」などの作品で知られる画家は誰か。"
  },
  {
    "answer": "ドラクロワ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "フランス・ロマン主義絵画の巨匠で、「民衆を導く自由の女神」や「キオス島の虐殺」などで知られる画家は誰か。"
  },
  {
    "answer": "コロー",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「風景画の父」とも称される仏の画家で、「モルトフォンテーヌの思い出」などで知られるバルビゾン派の画家は誰か。"
  },
  {
    "answer": "ミレー",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「晩鐘」や「落穂拾い」などの作品で、農民の日常や労働の尊厳を描いた、フランスのバルビゾン派を代表する画家は誰か。"
  },
  {
    "answer": "ドーミエ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "庶民の生活や社会の不公平を批判的に描いたフランスの写実主義の芸術家で、社会風刺画や政治漫画で有名な人物は誰か。"
  },
  {
    "answer": "クールベ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「天使を見たことがないので、天使を描かない」と述べた、「石割り」で知られる仏の写実主義の画家は誰か。"
  },
  {
    "answer": "印象派",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "フランスを中心に興った絵画の革新的な運動で、光の印象や色彩の変化を重視し、瞬間の光景を描いたものを何と呼ぶか。"
  },
  {
    "answer": "マネ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「草上の昼食」などの作品で、伝統的な絵画の常識を打ち破り、印象派に大きな影響を与えたフランスの画家は誰か。"
  },
  {
    "answer": "モネ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "印象派を代表するフランスの画家で、光の移ろいを追求し、「印象、日の出」や「睡蓮」の連作などで知られる人物は誰か。"
  },
  {
    "answer": "ドガ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "印象派の画家として知られ、バレエの踊り子や競馬の馬といった動きのあるモチーフを好んだフランスの画家は誰か。"
  },
  {
    "answer": "ルノワール",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "印象派を代表するフランスの画家で、「ムーラン・ド・ラ・ギャレット」などで知られる人物は誰か。"
  },
  {
    "answer": "後期印象派",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "フランスを中心に印象派の技法を受け継ぎつつ、さらに感情や内面、象徴的な表現を追求した芸術運動を何と呼ぶか。"
  },
  {
    "answer": "セザンヌ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "後期印象派の画家として、後のキュビスムなどの近代絵画に大きな影響を与えたフランスの画家は誰か。"
  },
  {
    "answer": "ゴーガン",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "後期印象派の画家で、タヒチなどへの移住を通して、原色を多用した色彩と単純化された形体が特徴のフランスの画家は誰か。"
  },
  {
    "answer": "ゴッホ",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「ひまわり」などで知られる後期印象派の画家で、激しい感情を表現する強烈な色彩と筆致が特徴的な人物は誰か。"
  },
  {
    "answer": "ロダン",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "フランスの彫刻家で、「地獄門」などの作品で、内面的感情や肉体の躍動感を表現し、近代彫刻に影響を与えた人物は誰か。"
  },
  {
    "answer": "ベートーヴェン",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "古典派音楽を大成した、「運命」や「第九」などの交響曲で知られる、ドイツの作曲家は誰か。"
  },
  {
    "answer": "シューベルト",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「未完成交響曲」や「歌曲集冬の旅」などで知られる、オーストリアのロマン派音楽の先駆者は誰か。"
  },
  {
    "answer": "ヴァーグナー",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "楽劇「ニーベルングの指環」や「トリスタンとイゾルデ」などで知られる、ドイツのロマン主義の作曲家は誰か。"
  },
  {
    "answer": "ショパン",
    "category": "19世紀の欧米美術/音楽",
    "chapter": "13",
    "number": "107",
    "question": "「革命」で知られる、「ピアノの詩人」と称されるポーランド出身の作曲家は誰か。"
  },
  {
    "answer": "ドイツ観念論哲学",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "カントからヘーゲルへ展開したドイツの哲学で、理性や精神の役割を重視し、認識や存在の根源を探求したものを何と呼ぶか。"
  },
  {
    "answer": "カント",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "「純粋理性批判」などで知られる、ドイツ観念論の祖であり、認識と道徳の根源を探求した後世に影響を与えた哲学者は誰か。"
  },
  {
    "answer": "フィヒテ",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "ナポレオン支配下で、「ドイツ国民に告ぐ」という講演を行い、民族主義的な覚醒を促したドイツ観念論の哲学者は誰か。"
  },
  {
    "answer": "ヘーゲル",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "ドイツ観念論を完成させた哲学者で、弁証法を提唱し、精神が矛盾を克服しながら発展していく過程を論じた人物は誰か。"
  },
  {
    "answer": "フォイエルバッハ",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "ヘーゲル哲学を批判し、神は人間の本質が投影されたものと主張したドイツの哲学者は誰か。"
  },
  {
    "answer": "功利主義",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "「最大多数の最大幸福」を追求し、行為の善悪を結果によって判断する倫理思想を何と呼ぶか。"
  },
  {
    "answer": "ベンサム",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "彼は功利主義を確立し、刑務所のパノプティコンでも知られる、「最大多数の最大幸福」を提唱したイギリスの哲学者は誰か。"
  },
  {
    "answer": "ジョン＝ステュアート＝ミル",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "功利主義を継承しつつ、快楽の「質」を重視する質的功利主義を提唱したイギリスの哲学者は誰か。"
  },
  {
    "answer": "ハーバート＝スペンサー",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "社会進化論を提唱し、「適者生存」という言葉で知られるイギリスの哲学者は誰か。"
  },
  {
    "answer": "実証主義哲学",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "客観的に観察可能な事実に基づいて知識を構築しようとする哲学の立場を何と呼ぶか。"
  },
  {
    "answer": "コント",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "実証主義哲学の創始者で、社会学を体系化したフランスの思想家は誰か。"
  },
  {
    "answer": "実存主義哲学",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "人間の実存、自由、責任などを重視し、不条理な現実に直面する人間のあり方を問う哲学を何と呼ぶか。"
  },
  {
    "answer": "サルトル",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "「実存は本質に先立つ」と述べた、20世紀のフランスの実存主義哲学者は誰か。"
  },
  {
    "answer": "キェルケゴール",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "キリスト教信仰における個人の主体的決断を重視した、デンマークの実存主義哲学者は誰か。"
  },
  {
    "answer": "ニーチェ",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "「神は死んだ」と述べ、キリスト教的価値観を批判した実存主義のドイツの哲学者は誰か。"
  },
  {
    "answer": "マルサス",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "人口は幾何級数的に増加するが、食糧は算術級数的にしか増加しないと論じたイギリスの経済学者は誰か。"
  },
  {
    "answer": "リカード",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "比較優位の法則を提唱し、自由貿易の重要性を説いたイギリスの経済学者は誰か。"
  },
  {
    "answer": "リスト",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "自由貿易を主張するイギリスの古典派経済学に対し、保護貿易を訴えたドイツ歴史学派経済学の創始者は誰か。"
  },
  {
    "answer": "史的唯物論",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "人類の歴史を生産様式と階級闘争の発展として捉える、マルクスとエンゲルスによって提唱された論説を何と呼ぶか。"
  },
  {
    "answer": "ランケ",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "史料批判に基づき「客観的な歴史記述」を追求し、近代歴史学の祖とされるドイツの歴史学者は誰か。"
  },
  {
    "answer": "サヴィニー",
    "category": "19世紀の欧米哲学/経済学",
    "chapter": "13",
    "number": "108",
    "question": "ドイツ歴史法学の創始者で、法は国民精神の表現として自然発生的に形成されると主張したドイツの法学者は誰か。"
  },
  {
    "answer": "マイヤー",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "エネルギー保存の法則を確立した一人で、熱と仕事の等価性を発見したドイツの物理学者、医師は誰か。"
  },
  {
    "answer": "ヘルムホルツ",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "エネルギー保存の法則を定式化し、神経の伝導速度の測定や眼科医としての業績でも知られるドイツの科学者は誰か。"
  },
  {
    "answer": "レントゲン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "X線の発見により、第1回ノーベル物理学賞を受賞したドイツの物理学者は誰か。"
  },
  {
    "answer": "ファラデー",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "電磁誘導の法則を発見し、電磁気学の基礎を築いたイギリスの物理学者・化学者は誰か。"
  },
  {
    "answer": "マクスウェル",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "電磁気学の基礎方程式である方程式を確立した、スコットランドの物理学者は誰か。"
  },
  {
    "answer": "キュリー夫妻",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "ラジウムとポロニウムを発見し、放射能の研究でノーベル物理学賞とノーベル化学賞を受賞したフランスの科学者夫妻は誰か。"
  },
  {
    "answer": "リービヒ",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "有機化学と農業化学の基礎を築き、植物栄養における窒素の重要性を解明したドイツの化学者は誰か。"
  },
  {
    "answer": "ベクレル",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "ウラン塩の放射能を発見し、放射線に関する研究の先駆けとなったフランスの物理学者は誰か。"
  },
  {
    "answer": "ダーウィン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "『種の起源』を著し、自然選択による進化論を提唱したイギリスの博物学者は誰か。"
  },
  {
    "answer": "メンデル",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "エンドウマメの研究から遺伝の法則を発見し、「遺伝学の父」と呼ばれるオーストリアの修道士、科学者は誰か。"
  },
  {
    "answer": "パストゥール",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "狂犬病ワクチンや低温殺菌法を開発し、「細菌学の父」と呼ばれるフランスの化学者、細菌学者は誰か。"
  },
  {
    "answer": "コッホ",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "結核菌やコレラ菌を発見し、細菌学の発展に貢献したドイツの細菌学者は誰か。"
  },
  {
    "answer": "北里柴三郎",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "破傷風菌の純粋培養に成功し、ペスト菌を発見した日本の細菌学者は誰か。"
  },
  {
    "answer": "志賀潔",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "赤痢菌を発見し、伝染病研究に大きく貢献した日本の細菌学者は誰か。"
  },
  {
    "answer": "ノーベル",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "ダイナマイトを発明し、その遺産でノーベル賞を創設したスウェーデンの化学者、発明家は誰か。"
  },
  {
    "answer": "ベル",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "電話を発明し、聴覚障害者の教育にも貢献したスコットランド生まれの発明家は誰か。"
  },
  {
    "answer": "エディソン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "白熱電球や蓄音機などを発明し、「発明王」と呼ばれたアメリカの発明家は誰か。"
  },
  {
    "answer": "モース",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "モールス信号を発明し、電信の普及に貢献したアメリカの発明家、画家は誰か。"
  },
  {
    "answer": "マルコーニ",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "無線電信を発明し、「無線通信の父」と呼ばれるイタリアの発明家は誰か。"
  },
  {
    "answer": "リヴィングストン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "アフリカを探検し、ヴィクトリアの滝を発見したスコットランドの探検家、宣教師は誰か。"
  },
  {
    "answer": "スタンリー",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "アフリカを探検し、行方不明のリヴィングストンを発見したジャーナリスト、探検家は誰か。"
  },
  {
    "answer": "ピアリ",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "エチオピアを探検し、ナイル川の源流を探したイタリアの探検家は誰か。"
  },
  {
    "answer": "アムンゼン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "人類で初めて南極点に到達した、ノルウェーの探検家は誰か。"
  },
  {
    "answer": "スコット",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "アムンゼンと南極点到達を争い、帰路で遭難死したイギリスの探検家は誰か。"
  },
  {
    "answer": "ヘディン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "中央アジアを探検し、楼蘭遺跡などを発見したスウェーデンの探検家は誰か。"
  },
  {
    "answer": "スタイン",
    "category": "19世紀欧米の自然科学/発明/探検家",
    "chapter": "13",
    "number": "109",
    "question": "新疆ウイグル自治区の敦煌文書などを調査し、シルクロードの探検で知られるイギリスの考古学者は誰か。"
  },
  {
    "answer": "ホルムズ島",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "サファヴィー朝がオスマン帝国の協力でポルトガル勢力を駆逐し、奪還したペルシア湾の要衝の島はどこか。"
  },
  {
    "answer": "第２次ウィーン包囲",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "オスマン帝国衰退のきっかけの一つである、1683年にオーストリアとポーランド連合軍に撃退された戦いは何か。"
  },
  {
    "answer": "カルロヴィッツ条約",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "1699年にオスマン帝国がオーストリアなどに敗れ、中欧・東欧の広大な領土を割譲した条約は何か。"
  },
  {
    "answer": "ハンガリー",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "カルロヴィッツ条約により、オスマン帝国からオーストリアの支配下に入った東欧の国はどこか。"
  },
  {
    "answer": "クリミア半島",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "ロシアがオスマン帝国から独立を認めさせ、後に併合した黒海北岸の半島はどこか。"
  },
  {
    "answer": "ワッハーブ派",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "18世紀にアラビア半島でムハンマド・イブン・アブドゥルワッハーブが創始したイスラームの厳格な改革運動、宗派は何か。"
  },
  {
    "answer": "サウード家",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "ワッハーブ派と結びつき、現在のサウジアラビア王国の基礎を築いたアラビア半島の有力な部族の家系は何か。"
  },
  {
    "answer": "ムハンマド＝アリー",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "オスマン帝国からのエジプトの事実上の独立を確立し、「近代エジプトの父」と呼ばれる人物は誰か。"
  },
  {
    "answer": "マムルーク",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "ムハンマド＝アリーがエジプトの近代化を進める上で排除した、トルコ（またはコーカサス）系の軍人奴隷集団を何と呼ぶか。"
  },
  {
    "answer": "東方問題",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "18C後から20C初にかけて、オスマン帝国の衰退に伴い、その領土を巡ってヨーロッパ列強が対立した国際問題は何か。"
  },
  {
    "answer": "ダーダネルス海峡",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "エーゲ海とマルマラ海を結び、オスマン帝国（現トルコ）の領土を分断する、軍事上・通商上の要衝である海峡は何か。"
  },
  {
    "answer": "ボスフォラス海峡",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "黒海とマルマラ海を結び、イスタンブルを挟んでアジアとヨーロッパを分ける、世界で最も狭い自然の海峡は何か。"
  },
  {
    "answer": "エジプト＝トルコ戦争",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "ムハンマド＝アリー朝がオスマン帝国との宗主権を巡って戦い、シリアなどを一時占領した19世紀前半の戦争は何か。"
  },
  {
    "answer": "シリア",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "ムハンマド＝アリー朝がオスマン帝国に対し支配権を求め、エジプト＝トルコ戦争のきっかけとなった地域はどこか。"
  },
  {
    "answer": "ロンドン会議",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "1840年に英露普墺、オスマン帝国が参加し、エジプト＝トルコ戦争の調停とエジプトの地位を決定した国際会議は何か。"
  },
  {
    "answer": "スエズ運河",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "地中海と紅海を結び、ヨーロッパとアジアを結ぶ海上交通の要衝として、19世紀半ばに開通した運河は何か。"
  },
  {
    "answer": "レセップス",
    "category": "オスマン帝国に進出する列強",
    "chapter": "14",
    "number": "110",
    "question": "スエズ運河の建設を指揮し、その開通に大きく貢献したフランスの外交官、実業家は誰か。"
  },
  {
    "answer": "アブデュルメジト１世",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "オスマン帝国の近代化改革であるタンジマートを推進し、ギュルハネ勅令を発布したスルタンは誰か。"
  },
  {
    "answer": "タンジマート",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "1839年からオスマン帝国で実施された、欧米に範をとった近代化改革の総称は何か。"
  },
  {
    "answer": "ギュルハネ勅令",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "1839年にアブデュルメジト1世が発布した、タンジマートの基本方針を示した勅令は何か。"
  },
  {
    "answer": "オスマン主義",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "オスマン帝国内のあらゆる民族・宗派を平等な「オスマン人」として統合し、帝国の統一と存続を図ろうとした思想は何か。"
  },
  {
    "answer": "クリミア戦争",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "1853-56年、聖地管理問題をめぐり、露と、オスマン帝国・英・仏・サルデーニャ連合軍間で戦われた戦争は何か。"
  },
  {
    "answer": "ミドハト＝パシャ",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "オスマン帝国憲法の起草に中心的な役割を果たしたオスマン帝国の政治家は誰か。"
  },
  {
    "answer": "オスマン帝国憲法（ミドハト憲法）",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "1876年にオスマン帝国で制定され、帝政を維持しつつ議会制を導入した、アジアで最初の近代的な成文憲法は何か。"
  },
  {
    "answer": "ロシア＝トルコ戦争（露土戦争）",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "オスマン帝国が大幅な領土を失い、バルカン半島の独立国が相次いで誕生することになった1877-78年の戦争は何か。"
  },
  {
    "answer": "サン＝ステファノ条約",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "1878年、露土戦争の講和条約として、ロシアとオスマン帝国の間で締結された条約を何と呼ぶか。"
  },
  {
    "answer": "ベルリン会議",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "サン＝ステファノ条約の内容を修正するために、ビスマルクの主導で開催された国際会議を何と呼ぶか。"
  },
  {
    "answer": "ガージャール朝",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "18世紀末から20世紀初頭にかけて、イランを支配したシーア派のイスラーム王朝は何か。"
  },
  {
    "answer": "テヘラン",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "ガージャール朝の都はどこか。"
  },
  {
    "answer": "トルコマンチャーイ条約",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "1828年にガージャール朝がロシアに敗れて締結した、治外法権などを認めた不平等条約は何か。"
  },
  {
    "answer": "バーブ教",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "19世紀半ばにイランで現れた、イスラームの教義を改革し、万人平等などを説いた宗教を何と呼ぶか。"
  },
  {
    "answer": "タバコ＝ボイコット運動",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "ガージャール朝がイギリスにタバコの専売権を与えたことに反発して、ウラマーが主導し、国民的に展開された運動は何か。"
  },
  {
    "answer": "イギリス、ロシア",
    "category": "オスマン帝国の近代化と西アジアの動向",
    "chapter": "14",
    "number": "111",
    "question": "19世紀にアフガニスタンに進出した２つの列強国はどこか。"
  },
  {
    "answer": "マドラス",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "インド南東部に位置し、イギリス東インド会社が拠点を置いた、現在のチェンナイにあたる港湾都市はどこか。"
  },
  {
    "answer": "ボンベイ",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "インド西部に位置し、イギリス東インド会社が拠点を置いた、現在のムンバイにあたる港湾都市はどこか。"
  },
  {
    "answer": "カルカッタ",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "インド東部に位置し、イギリス東インド会社が拠点を置いた、ガンジス川デルタ地帯の主要な貿易拠点はどこか。"
  },
  {
    "answer": "ポンディシェリ",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "インド東部に位置し、フランス東インド会社が建設した、フランスの主要な貿易拠点となった都市を何と呼ぶか。"
  },
  {
    "answer": "シャンデルナゴル",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "インド南東部に位置し、フランス東インド会社が建設した、フランス領インドの主要拠点となった都市を何と呼ぶか。"
  },
  {
    "answer": "バタヴィア",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "オランダ東インド会社がジャワ島に建設した貿易拠点で、後にジャカルタとなる都市を何と呼ぶか。"
  },
  {
    "answer": "ムガル帝国",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "16世紀初頭にインドに建国され、19世紀半ばまで存続したイスラーム王朝は何か。"
  },
  {
    "answer": "カーナティック戦争",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "18世紀半ばに、南インドにおいて、英仏が植民地覇権を争い、最終的にイギリスが優位を確立した一連の戦争は何か。"
  },
  {
    "answer": "デュプレクス",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "カーナティック戦争でイギリスと争い、フランスの優位を築いたが、本国政府との対立で召喚された人物は誰か。"
  },
  {
    "answer": "プラッシーの戦い",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "1757年、イギリス東インド会社とベンガル太守の連合軍が衝突し、イギリスが決定的勝利を収めた戦いは何か。"
  },
  {
    "answer": "クライヴ",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "イギリス東インド会社の軍人・政治家で、プラッシーの戦いで勝利を収めた人物は誰か。"
  },
  {
    "answer": "パリ条約",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "七年戦争やカーナティック戦争を終結させ、イギリス、フランス、スペインの間で1763年に結ばれた講和条約は何か。"
  },
  {
    "answer": "ディーワーニー",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "ムガル帝国において徴税権を指し、1765年にイギリス東インド会社が三州で獲得したものは何か。"
  },
  {
    "answer": "マイソール戦争",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "18世紀後半に南インドの王国とイギリス東インド会社の間で、4度にわたって繰り広げられた戦争は何か。"
  },
  {
    "answer": "マラーター戦争",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "18世紀後半から19世紀初頭にかけ3度にわたり戦われ、イギリスのデカン高原中西部の支配を確立した戦争は何か。"
  },
  {
    "answer": "シク戦争",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "19世紀半ばに2度にわたって戦われ、イギリスがパンジャーブ地方の支配を確立する決定打となった戦争は何か。"
  },
  {
    "answer": "藩王国",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "イギリス植民地時代のインドにおいて、イギリスに従属しつつも一定の自治権を認められた半独立の領国を何と呼ぶか。"
  },
  {
    "answer": "ザミンダーリー制",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "イギリスがベンガルなどで実施した、地主の土地所有権を認めて彼らを納税責任者とした地租徴収制度は何か。"
  },
  {
    "answer": "ライヤットワーリー制",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "19世紀前半にイギリスが南インドなどで導入した、東インド会社が農民から直接地税を徴収した土地制度は何か。"
  },
  {
    "answer": "アヘン",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "19世紀、清との貿易で巨額の赤字に悩んだイギリスが、これを解消するため、インド産のものを清に密輸した麻薬は何か。"
  },
  {
    "answer": "シパーヒー",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "19世紀のインドにおいて、イギリス東インド会社が雇い入れたインド人傭兵を何と呼ぶか。"
  },
  {
    "answer": "東インド会社",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "1857年のインド大反乱の責任を問われ、翌1858年にイギリス政府によって解散させられた貿易会社は何か。"
  },
  {
    "answer": "インド帝国",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "1877年に成立した、事実上イギリスの植民地であるインドの国家の名称は何か。"
  },
  {
    "answer": "ヴィクトリア女王",
    "category": "南アジアの植民地化",
    "chapter": "14",
    "number": "112",
    "question": "1837-1901年まで女王として在位し、1877年にはインド皇帝を兼ねて大英帝国の最盛期を象徴した人物は誰か。"
  },
  {
    "answer": "アンボイナ事件",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1623年に、イギリス商館員がオランダ東インド会社に虐殺された事件は何か。"
  },
  {
    "answer": "マタラム王国",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "ジャワ島中部で栄え、オランダ東インド会社と対立しながらも、最終的にその影響下に入ったイスラーム系王国は何か。"
  },
  {
    "answer": "ジャワ戦争",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1825-30年にかけて、オランダの植民地支配に反発したディポネゴロがジャワ島で起こした大規模な反乱を何と呼ぶか。"
  },
  {
    "answer": "強制栽培制度（政府栽培制度）",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "19世紀前半にオランダがジャワ島で導入した、住民に換金作物を栽培させ、その生産物を強制的に納めさせた制度は何か。"
  },
  {
    "answer": "ファン＝デン＝ボス",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "強制栽培制度を導入し、ジャワ島におけるオランダの植民地支配の強化を推進したオランダ東インド総督は誰か。"
  },
  {
    "answer": "シンガポール",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "19世紀初頭にイギリスのスタンフォード・ラッフルズが開発し、マラッカ海峡の要衝として栄えた都市国家は何か。"
  },
  {
    "answer": "マラッカ",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "古くから海上交通の要衝として栄え、16世紀に葡、17世紀に蘭、19世紀には英の支配下に入った港市は何か。"
  },
  {
    "answer": "ペナン、マラッカ、シンガポール",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1826年にイギリスが海峡植民地として統合した三つの植民地はどこか。"
  },
  {
    "answer": "マレー連合州",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1895年にイギリスがマレー半島領有後に成立させた、保護領の名称は何か。"
  },
  {
    "answer": "ゴム",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "20世紀初頭に自動車産業の発展とともに需要が急増し、東南アジアの英領マレーなどで栽培が拡大した天然資源は何か。"
  },
  {
    "answer": "コンバウン朝",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "18世紀半ばに成立し、ビルマを統一して、アユタヤ朝を滅ぼすなど周辺地域にも勢力を広げたビルマ最後の王朝は何か。"
  },
  {
    "answer": "インド帝国",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "イギリスの植民地となったビルマ全土は、何という国家に併合されたか。"
  },
  {
    "answer": "カトリック",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "スペインの植民地下のフィリピンの人々は何の信仰を強制されたか。"
  },
  {
    "answer": "マニラ",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "16世紀後半にスペインによって建設され、フィリピン支配の拠点として、アカプルコ貿易の出発点として栄えた都市は何か。"
  },
  {
    "answer": "マニラ麻、サトウキビ、タバコ",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "スペインやアメリカの植民地時代において、フィリピンの主要な輸出品となり、大規模に栽培された換金作物の代表例は何か。"
  },
  {
    "answer": "メキシコ",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "16世紀以降、ガレオン貿易を通じてアジアにも流入し、世界の交易に大きな影響を与えた銀貨の主要供給源はどこか。"
  },
  {
    "answer": "華僑",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "19世紀以降、特に中国南部から東南アジアや世界各地へ移住し、商業活動などで活躍した中国系住民を何と呼ぶか。"
  },
  {
    "answer": "西山の乱(西山党の乱)",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "18世紀後半にベトナムの中部で、阮岳・阮侶・阮恵の三兄弟が起こし、一時ベトナムを統一して王朝を樹立した反乱は何か。"
  },
  {
    "answer": "阮福暎",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "フランス人宣教師ピニョーらの支援を得て、1802年にベトナム全土を統一して阮朝を創始した人物は誰か。"
  },
  {
    "answer": "フエ（ユエ）",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "阮朝ベトナムの都が置かれ、王宮や多数の歴史的建造物が残る、ベトナム中部にある古都は何か。"
  },
  {
    "answer": "ピニョー",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "18世紀後半にベトナムで活動し、阮福暎を支援して、フランスの援助を取り付けることに貢献したフランス人宣教師は誰か。"
  },
  {
    "answer": "カンボジア",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "かつてアンコール朝が栄え、近代にはフランスの植民地支配を受け、現在は立憲君主制の国である東南アジアの国は何か。"
  },
  {
    "answer": "フエ（ユエ）条約",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "フランスが阮朝と締結した、ベトナムを保護国とし、フランス領インドシナ連邦成立の基礎となった一連の条約は何か。"
  },
  {
    "answer": "黒旗軍",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "清仏戦争において、劉永福が率い、ベトナム北部でフランス軍と戦い、一時はフランス軍を苦しめた義勇兵集団は何か。"
  },
  {
    "answer": "劉永福",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "19世紀後半にベトナム北部で黒旗軍を率いてフランス軍と戦い、清仏戦争でも活躍した中国系の軍人・義勇兵指導者は誰か。"
  },
  {
    "answer": "清仏戦争",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1884-85年にかけて、ベトナムの宗主権をめぐって清とフランスの間で戦われ、清が敗北した戦争は何か。"
  },
  {
    "answer": "天津条約",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "清がベトナムに対する宗主権を放棄し、フランスによるベトナム保護国化を認めた、清仏戦争の講和条約は何か。"
  },
  {
    "answer": "フランス領インドシナ連邦",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1887年にフランスがインドシナ半島に設立した、ベトナム、カンボジア、ラオスを統合した植民地行政組織は何か。"
  },
  {
    "answer": "ラオス",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "インドシナ半島に位置し、かつてはラーンサーン王国が栄え、後にフランス領インドシナ連邦の一部となった内陸国はどこか。"
  },
  {
    "answer": "ラタナコーシン朝",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "1782年にラーマ1世が建国し、バンコクを都として現在まで続くタイの王朝は何か。"
  },
  {
    "answer": "ラーマ５世（チュラロンコン）",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "近代的な行政・教育制度の導入などのチャクリ改革を推進し、巧みな外交で列強の植民地化を避けた人物は誰か。"
  },
  {
    "answer": "チャクリ改革",
    "category": "東南アジアの植民地化",
    "chapter": "14",
    "number": "113",
    "question": "ラーマ5世によって推進された、奴隷解放、中央集権化、軍事・教育・交通機関の近代化などの改革を何と呼ぶか。"
  },
  {
    "answer": "白蓮教徒の乱",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "清朝中期に発生した大規模な民衆反乱で、清朝の財政窮乏と八旗・緑営の弱体化を露呈させたものは何か。"
  },
  {
    "answer": "広州",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "清代には特許商人を介したヨーロッパとの唯一の貿易港として「広東貿易体制」の中心地となった都市はどこか。"
  },
  {
    "answer": "マカートニー",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "18世紀末にイギリス国王ジョージ3世の使節として清を訪れ、自由貿易などを求めたが、乾隆帝に拒絶された人物は誰か。"
  },
  {
    "answer": "茶",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "18世紀のイギリスで広く普及し、清との貿易で大量の輸入が行われ、アヘン貿易が拡大する一因となった嗜好品は何か。"
  },
  {
    "answer": "アヘン戦争",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1840-42年にかけて、清がアヘンの禁輸を行ったことをきっかけとして英清間で戦われた戦争は何か。"
  },
  {
    "answer": "林則徐",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "アヘン貿易を厳しく取り締まり、虎門でのアヘン廃棄を断行したが、アヘン戦争の原因を作ったとされ失脚した人物は誰か。"
  },
  {
    "answer": "南京条約",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1842年に清とイギリスの間で締結された、アヘン戦争の講和条約は何か。"
  },
  {
    "answer": "上海、寧波、福州、廈門、広州",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1842年の南京条約で、イギリスとの貿易のために開港された清の5つの港を北から順番に答えなさい。"
  },
  {
    "answer": "香港島",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1842年の南京条約によって清からイギリスに割譲され、その後イギリスの植民地支配下に置かれた島はどこか。"
  },
  {
    "answer": "虎門寨追加条約",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1843年に清とイギリスの間で締結され、イギリスの領事裁判権や片務的最恵国待遇などを認めた不平等条約は何か。"
  },
  {
    "answer": "望厦条約",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1844年、清米間で締結された修好通商条約で、英との南京条約に加えて領事裁判権の明確化などを盛り込んだ条約は何か。"
  },
  {
    "answer": "黄埔条約",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1844年、清とフランスの間で締結された修好通商条約で、領事裁判権や片務的最恵国待遇などを盛り込んだ条約は何か。"
  },
  {
    "answer": "租界",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "清末から中華民国期にかけて設けられた、外国人が行政権や警察権を持ち、治外法権を享受した地域を何と呼ぶか。"
  },
  {
    "answer": "第２次アヘン戦争（アロー戦争）",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1856-60年にかけて、英仏が共同で清に対して行った戦争で、清のさらなる開国と不平等条約締結を招いた戦争は何か。"
  },
  {
    "answer": "天津条約",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1858年に清と英仏米露の間で締結され、外国公使の北京駐在、キリスト教布教の自由などを定めた条約は何か。"
  },
  {
    "answer": "北京条約",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1860年に清と英仏露の間で締結された、アロー戦争の最終的な講和条約は何か。"
  },
  {
    "answer": "九龍半島南部",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1860年の北京条約により清から英に割譲され、香港島と対岸に位置し、香港のさらなる発展の基礎となった地域はどこか。"
  },
  {
    "answer": "総理各国事務衙門（総理衙門）",
    "category": "清の動揺とアヘン戦争・アロー戦争",
    "chapter": "14",
    "number": "114",
    "question": "1861年に清朝が設置した、外交事務を統括し、洋務運動を主導するなど、近代化政策を進めた中央官庁は何か。"
  },
  {
    "answer": "アイグン条約",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "1858年に清とロシアの間で締結され、黒竜江以北をロシア領とし、ウスリー江以東の地域を両国共有地とした条約は何か。"
  },
  {
    "answer": "黒龍江（アムール川）以北",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "アイグン条約によって新たにロシア領になった地域はどこか。"
  },
  {
    "answer": "沿海州",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "1860年の北京条約により、清からロシアに割譲された、ウスリー江以東の日本海沿岸地域は何と呼ばれるか。"
  },
  {
    "answer": "ウラジヴォストーク",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "1860年の北京条約によりロシア領となった沿海州に建設され、極東におけるロシアの主要な港湾都市となったのはどこか。"
  },
  {
    "answer": "イリ条約",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清がロシアに奪われたイリ地方を1881年に返還させるも経済的特権を与えた条約は何か。"
  },
  {
    "answer": "太平天国の乱",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "1851年に洪秀全が起こし、清朝の支配を揺るがした大規模な農民反乱を何というか。"
  },
  {
    "answer": "洪秀全",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "自らをキリストの弟と称し、拝上帝会を創始して太平天国の乱を指導した人物は誰か。"
  },
  {
    "answer": "拝上帝会(上帝会)",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "洪秀全がキリスト教と儒教・道教を融合し、太平天国の乱を起こした母体となる結社は何か。"
  },
  {
    "answer": "「滅満興漢」",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "太平天国の乱で掲げられた、清朝を倒し漢民族の国家を再興しようとするスローガンを何というか。"
  },
  {
    "answer": "天京",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "太平天国が清朝から奪取した南京を改称して都とした都市は何か。"
  },
  {
    "answer": "天朝田畝制度",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "太平天国が土地の均分や財産の共有、男女平等をうたった独自の制度を何というか。"
  },
  {
    "answer": "郷勇",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清朝末期に正規軍ではないが、太平天国の乱の鎮圧に貢献した地方の義勇軍を何というか。"
  },
  {
    "answer": "湘軍",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清朝正規軍ではないが、曽国藩が湖南省で組織し太平天国の乱鎮圧に貢献した郷勇を何というか。"
  },
  {
    "answer": "曽国藩",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清朝の漢人官僚で、郷勇である湘軍を組織し太平天国を完全に鎮圧した人物は誰か。"
  },
  {
    "answer": "淮軍",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清朝正規軍ではないが、李鴻章が安徽省で組織し太平天国や捻軍鎮圧に貢献した郷勇を何というか。"
  },
  {
    "answer": "李鴻章",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清朝の漢人官僚で、郷勇である淮軍を組織し太平天国や捻軍鎮圧に貢献した人物は誰か。"
  },
  {
    "answer": "常勝軍",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "太平天国の乱の鎮圧に貢献した、欧米人指揮のもと清朝に協力した近代西洋式部隊を何というか。"
  },
  {
    "answer": "ゴードン",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "ウォードの死後、太平天国の乱鎮圧に貢献した常勝軍を率いたイギリス人将軍は誰か。"
  },
  {
    "answer": "同治中興",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "清朝末期に洋務運動などで一時的に国力が回復した時期のことを何と呼ぶか。"
  },
  {
    "answer": "洋務運動",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "「中体西用」を理念に曽国藩・李鴻章らが洋式軍制・近代教育を導入した清の改革運動は何か。"
  },
  {
    "answer": "「中体西用」",
    "category": "ロシアの東方進出と中国内乱",
    "chapter": "14",
    "number": "115",
    "question": "伝統的道徳を核とし西洋の技術を採用すべきとする洋務運動の基本理念は何か。"
  },
  {
    "answer": "日米和親条約",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1854年、ペリーの再来航を受け幕府が下田・函館の開港などを約した対米条約は何か。"
  },
  {
    "answer": "日米修好通商条約",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1858年、幕府がアメリカと結び開港地・領事裁判権・関税自主権喪失を定めた条約は何か。"
  },
  {
    "answer": "明治維新",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "19世紀後半、江戸幕府を倒し天皇を中心とする近代統一国家を樹立した改革の総称を何というか。"
  },
  {
    "answer": "戊辰戦争",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1868年、新政府と旧幕府軍が日本の政治権力掌握を巡り戦った内戦は何か。"
  },
  {
    "answer": "琉球処分",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1879年、琉球王国を廃止し沖縄県を設置した日本の中央集権政策は何か。"
  },
  {
    "answer": "台湾出兵",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1874年、琉球漂流民殺害事件を口実に日本が清に対して行った軍事行動は何か。"
  },
  {
    "answer": "樺太・千島交換条約",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1875年、日本とロシアがそれぞれ樺太放棄と千島列島の領有を決めた条約は何か。"
  },
  {
    "answer": "西南戦争",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1877年、西郷隆盛が率いた旧士族反乱で明治政府と激しく戦われた内乱は何か。"
  },
  {
    "answer": "大日本帝国憲法",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1889年、明治政府が天皇の統治権を中心に定めた近代国家の基本法は何か。"
  },
  {
    "answer": "高宗",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "朝鮮王朝末期に即位し、1897年に大韓帝国樹立の宣言をした最後の国王は誰か。"
  },
  {
    "answer": "大院君",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "19世紀半ば、朝鮮王朝の実権を握り改革や鎖国政策を推進した摂政は誰か。"
  },
  {
    "answer": "閔氏",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "朝鮮末期に政治の実権を握り親清派として勢力を持った王妃の一族は何氏か。"
  },
  {
    "answer": "江華島事件",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1875年、日本軍艦が朝鮮江華島を砲撃し不平等条約締結の口実を作った事件は何か。"
  },
  {
    "answer": "日朝修好条規",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1876年、日本が朝鮮に開国を迫り釜山・元山の開港などを定めた不平等条約は何か。"
  },
  {
    "answer": "壬午軍乱",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1882年、朝鮮で親清派と親日派の対立が激化し武力衝突となった軍事反乱は何か。"
  },
  {
    "answer": "開花派",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "朝鮮で日本の力を借りて近代化を進め、甲申政変を起こした親日的な政治勢力を何というか。"
  },
  {
    "answer": "金玉均",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "清からの独立を目指し、日本に接近して甲申政変を起こした朝鮮の開化派の指導者は誰か。"
  },
  {
    "answer": "甲申政変",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1884年、開化派がクーデタを起こし清軍介入で失敗した朝鮮の政治変動は何か。"
  },
  {
    "answer": "清仏戦争",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "甲申政変は、何という出来事による清の混乱を見越して行われたクーデタか。"
  },
  {
    "answer": "東学",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "19世紀後半、朝鮮で西洋列強や政府に抵抗し農民反乱の原因となった宗教運動は何か。"
  },
  {
    "answer": "崔済愚",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "19世紀半ばに朝鮮で東学を創始したが、政府によって処刑された人物は誰か。"
  },
  {
    "answer": "甲午農民戦争（東学の乱）",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1894年、朝鮮半島の全羅道で、東学の信徒である全琫準らが指導して起こった大規模な農民反乱は何か。"
  },
  {
    "answer": "全琫準",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "19世紀後半、朝鮮半島で甲午農民戦争（東学の乱）を指導し、「緑豆将軍」と呼ばれた人物は誰か。"
  },
  {
    "answer": "下関条約",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "日清戦争の講和条約は何か。"
  },
  {
    "answer": "伊藤博文（・陸奥宗光）、李鴻章",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "日清戦争の講和条約の締結に際し、日本側・清側の全権として交渉にあたった人物はそれぞれ誰か。"
  },
  {
    "answer": "遼東半島、台湾、澎湖諸島",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "下関条約によって、清から日本に割譲された領土を三カ所答えなさい。"
  },
  {
    "answer": "三国干渉",
    "category": "明治維新と朝鮮開国",
    "chapter": "14",
    "number": "116",
    "question": "1895年、露独仏が日本に遼東半島の清への返還を勧告した外交的介入は何か。"
  },
  {
    "answer": "帝国主義",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "19世紀末から20世紀初頭にかけて、欧米列強が軍事力を背景に植民地や勢力圏の拡大を競った政策を何と呼ぶか。"
  },
  {
    "answer": "第２次産業革命",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "19世紀後半から20世紀初頭にかけて、電力・石油・化学工業を中心として展開された技術革新を何と呼ぶか。"
  },
  {
    "answer": "電力、石油",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "19世紀後半の第２次産業革命において、蒸気力に代わって産業の新たな動力源となった２つのエネルギーは何か。"
  },
  {
    "answer": "カルテル",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "資本主義経済の発展に伴い、同業者が価格や生産量を協定して市場を統制する企業結合形態を何と呼ぶか。"
  },
  {
    "answer": "トラスト",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "同業の複数企業が合併・統合して独占的地位を築く、19世紀後半に発達した企業結合形態を何と呼ぶか。"
  },
  {
    "answer": "コンツェルン",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "ドイツで発達した、親会社が子会社の株式を保有して支配する垂直的・水平的な企業結合形態を何と呼ぶか。"
  },
  {
    "answer": "独占資本",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "19世紀後半から20世紀初頭にかけて、自由競争の結果として市場を独占するに至った大資本を何と呼ぶか。"
  },
  {
    "answer": "「ベル＝エポック」",
    "category": "帝国主義の成立",
    "chapter": "15",
    "number": "117",
    "question": "19世紀末から第１次世界大戦までの、科学技術や芸術が発達した西欧の繁栄期を表すフランス語は何か。"
  },
  {
    "answer": "自治領",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "イギリス帝国内で、本国議会の立法権の下で内政自治権を認められた植民地の地位を何と呼ぶか。"
  },
  {
    "answer": "カナダ",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1867年に英領北アメリカ法によって連邦を結成し、イギリス帝国初の自治領となった国はどこか。"
  },
  {
    "answer": "オーストラリア",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "元々流刑植民地だったが、1901年に６つの植民地が統合されて成立した自治領はどこか。"
  },
  {
    "answer": "ニュージーランド",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1907年に自治領の地位を獲得し、先住民マオリ族との間で土地問題を抱えた太平洋の国はどこか。"
  },
  {
    "answer": "南アフリカ連邦",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1910年に成立し、アフリカ系住民を政治から排除する人種差別政策を採用した自治領はどこか。"
  },
  {
    "answer": "ディズレーリ",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "19世紀後半の保守党首相で、帝国主義政策を推進し、スエズ運河会社株式を買収した人物は誰か。"
  },
  {
    "answer": "インドの支配や連絡路の確保のため",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1875年にイギリスがスエズ運河会社の株を買収した目的は何か。"
  },
  {
    "answer": "グラッドストン",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "19世紀後半の自由党首相で、自由主義政策を推進し、アイルランド自治を主張した人物は誰か。"
  },
  {
    "answer": "「世界の銀行」",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "19世紀後半のイギリスが国際金融において果たした役割を表現した、当時の呼び名は何か。"
  },
  {
    "answer": "ジョゼフ＝チェンバレン",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "19世紀末の植民地相で、帝国特恵制度を提唱し、積極的な帝国主義政策を推進した人物は誰か。"
  },
  {
    "answer": "南アフリカ戦争（南ア戦争、ブール戦争）",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1899年から1902年にかけて、イギリスと南アフリカのブール人国家との間で戦われた戦争は何か。"
  },
  {
    "answer": "ローズ",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "南アフリカでダイヤモンド・金鉱業を支配し、南アフリカ戦争の原因を作ったケープ植民地相は誰か。"
  },
  {
    "answer": "フェビアン協会",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1884年にイギリスで結成された、漸進的社会主義を主張する知識人の団体を何と呼ぶか。"
  },
  {
    "answer": "ウェッブ夫妻",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "フェビアン協会の中心人物で、社会主義理論の研究と労働運動の組織化に貢献した夫妻は誰か。"
  },
  {
    "answer": "バーナード＝ショー",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "フェビアン協会のメンバーで、『聖女ジョーン』などの作品で知られるアイルランド出身の劇作家は誰か。"
  },
  {
    "answer": "労働代表委員会",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1900年にイギリスで結成された、労働組合と社会主義団体の連合組織を何と呼ぶか。"
  },
  {
    "answer": "労働党",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1906年に労働代表委員会が改称して成立した、イギリスの労働者政党を何と呼ぶか。"
  },
  {
    "answer": "自由党",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "20世紀初頭で内閣を組閣したアスキスの所属政党は何か。"
  },
  {
    "answer": "議会法",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1911年にイギリスで制定された、貴族院の権限を制限して下院の優位を確立した法律は何か。"
  },
  {
    "answer": "下院",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1911年の議会法により、予算案などの議決において貴族院に対する優位が確立された議会は何か。"
  },
  {
    "answer": "アイルランド自治法",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1914年にイギリス議会で可決されたが、第１次世界大戦により実施が延期された法律は何か。"
  },
  {
    "answer": "シン＝フェイン党",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "1905年に結成された、アイルランド完全独立を目指すアイルランド民族主義政党は何か。"
  },
  {
    "answer": "アルスター地方",
    "category": "帝国主義と列強：英",
    "chapter": "15",
    "number": "118",
    "question": "プロテスタント住民が多数を占める北アイルランドの地域はどこか。"
  },
  {
    "answer": "ブーランジェ事件",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1889年にフランスで起きた、陸軍大臣による軍事クーデタ未遂事件を何と呼ぶか。"
  },
  {
    "answer": "露仏同盟",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1891年から1894年にかけて締結された、ドイツの三国同盟に対抗するロシアとフランスの軍事同盟は何か。"
  },
  {
    "answer": "ドレフュス事件",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1894年にフランスで発生した、ユダヤ系将校に対する冤罪事件を何と呼ぶか。"
  },
  {
    "answer": "ゾラ",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "ドレフュス事件でドレフュス大尉の無実を訴え、「我れ弾劾す」を発表した作家は誰か。"
  },
  {
    "answer": "政教分離法",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1905年にフランスで制定された、国家と宗教団体の分離を定めた法律を何と呼ぶか。"
  },
  {
    "answer": "サンディカリズム",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "20世紀初頭にフランスで発達した、労働組合による直接行動を重視する社会主義運動は何か。"
  },
  {
    "answer": "フランス社会党",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1905年にフランスで結成された、ジョレスらが指導した統一社会主義政党を何と呼ぶか。"
  },
  {
    "answer": "ヴィルヘルム2世",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1888年に即位し、ビスマルクを罷免して積極的な「世界政策」を推進したドイツ皇帝は誰か。"
  },
  {
    "answer": "ビスマルク",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "ヴィルヘルム２世により1890年に首相を罷免された、ドイツ統一の立役者は誰か。"
  },
  {
    "answer": "世界政策",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "ヴィルヘルム２世時代のドイツが推進した、植民地獲得と海軍力増強を柱とする対外政策は何か。"
  },
  {
    "answer": "パン＝ゲルマン主義",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "19世紀後半にドイツで高まった、ゲルマン系民族の統一と拡張を目指す民族主義運動は何か。"
  },
  {
    "answer": "再保障条約",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "1887年にドイツとロシアが秘密裏に締結したが、1890年に更新されなかった条約は何か。"
  },
  {
    "answer": "ドイツ社会民主党",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "社会主義者鎮圧法の廃止を機に、ドイツ社会主義労働者党が改称した政党名は何か。"
  },
  {
    "answer": "修正主義",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "20世紀初頭にドイツ社会民主党内で現れた、革命ではなく議会闘争と社会政策に重点を置く立場をなんと呼ぶか。"
  },
  {
    "answer": "ベルンシュタイン",
    "category": "帝国主義と列強：仏・独",
    "chapter": "15",
    "number": "119",
    "question": "ドイツ社会民主党の理論家で、マルクス主義に対する修正主義を提唱した人物は誰か。"
  },
  {
    "answer": "シベリア鉄道",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1891年に着工され1904年に完成した、ヨーロッパロシアと極東を結ぶ大陸横断鉄道は何か。"
  },
  {
    "answer": "社会革命党（エスエル）",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1901年に結成された、農民を基盤とするロシアの革命政党を何と呼ぶか。"
  },
  {
    "answer": "ロシア社会民主労働党",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1898年に結成された、マルクス主義を掲げるロシアの革命政党を何と呼ぶか。"
  },
  {
    "answer": "ボリシェヴィキ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ロシア社会民主労働党の多数派で、レーニンが指導した急進的な革命派を何と呼ぶか。"
  },
  {
    "answer": "レーニン",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ボリシェヴィキを率い、ロシア革命を指導した革命家・政治家は誰か。"
  },
  {
    "answer": "メンシェヴィキ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ロシア社会民主労働党の少数派で、穏健的な社会主義路線を主張した派閥を何と呼ぶか。"
  },
  {
    "answer": "プレハーノフ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ロシア・マルクス主義の父と呼ばれ、メンシェヴィキの指導者となった人物は誰か。"
  },
  {
    "answer": "ニコライ2世",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1894年に即位し、日露戦争や第１次世界大戦でロシアを敗北に導いた最後の皇帝は誰か。"
  },
  {
    "answer": "血の日曜日事件",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1905年1月、ペテルブルクで労働者のデモ隊が軍隊に発砲された事件を何と呼ぶか。"
  },
  {
    "answer": "1905年革命",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "血の日曜日事件をきっかけに始まった、ロシアにおける革命を何と呼ぶか。"
  },
  {
    "answer": "ソヴィエト",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1905年革命で労働者・兵士・農民によって結成された評議会を何と呼ぶか。"
  },
  {
    "answer": "十月宣言",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1905年にニコライ２世が発布した、立憲君主制への移行を約束した宣言は何か。"
  },
  {
    "answer": "ドゥーマ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "十月宣言により設置された、ロシア帝国の議会を何と呼ぶか。"
  },
  {
    "answer": "ウィッテ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ロシアの財務大臣として産業振興と鉄道建設を推進し、十月宣言を起草した政治家は誰か。"
  },
  {
    "answer": "ストルイピン",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "農地改革を断行してミールの解体を図った、ロシアの首相は誰か。"
  },
  {
    "answer": "ミール",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "帝政ロシアで農民が属していた、土地を共有する農村共同体を何と呼ぶか。"
  },
  {
    "answer": "マッキンリー",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1901年に暗殺された、米西戦争時のアメリカ大統領は誰か。"
  },
  {
    "answer": "アメリカ＝スペイン戦争（米西戦争）",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1898年にアメリカがスペインと戦い、海外領土を獲得した戦争を何と呼ぶか。"
  },
  {
    "answer": "プラット条項",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "米西戦争後にアメリカがキューバに押し付け、保護国化を実現した、軍事介入権を認める条項は何か。"
  },
  {
    "answer": "キューバ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "米西戦争でアメリカの保護国となった、カリブ海最大の島国はどこか。"
  },
  {
    "answer": "フィリピン、グアム、プエルトリコ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "米西戦争でアメリカがスペインから獲得した３つの領土は何か。"
  },
  {
    "answer": "門戸開放宣言",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1899年にアメリカが発表した、中国市場開放を求める外交方針を何と呼ぶか。"
  },
  {
    "answer": "ジョン＝ヘイ",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "門戸開放宣言を発表した、アメリカの国務長官は誰か。"
  },
  {
    "answer": "門戸開放・機会均等・領土保全",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "門戸開放宣言で掲げられた、中国に関する３つの原則は何か。"
  },
  {
    "answer": "セオドア＝ローズヴェルト",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1901年に大統領となり、「棍棒外交」を展開したアメリカ大統領は誰か。"
  },
  {
    "answer": "革新主義",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "20世紀初頭のアメリカで展開された、社会問題の解決を目指す改革運動を何と呼ぶか。"
  },
  {
    "answer": "棍棒外交",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "セオドア＝ローズヴェルトが掲げた、軍事力を背景とする強硬外交政策は何か。"
  },
  {
    "answer": "パナマ運河",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1914年に開通した、太平洋と大西洋を結ぶ中央アメリカの運河は何か。"
  },
  {
    "answer": "カリブ海政策",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "20世紀初頭にアメリカが展開した、カリブ海諸国に対する干渉政策を何と呼ぶか。"
  },
  {
    "answer": "ドル外交",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "タフト政権が推進した、経済力を外交手段とする政策を何と呼ぶか。"
  },
  {
    "answer": "ウィルソン",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "1913年に大統領となり、「新しい自由」を掲げた民主党の政治家は誰か。"
  },
  {
    "answer": "新しい自由",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ウィルソンが掲げた、独占を排除し自由競争を重視する政策は何か。"
  },
  {
    "answer": "宣教師外交",
    "category": "帝国主義と列強：露・米",
    "chapter": "15",
    "number": "120",
    "question": "ウィルソンが推進した、道徳的理想主義に基づく外交政策を何と呼ぶか。"
  },
  {
    "answer": "リヴィングストン",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "アフリカ内陸部を探検し、「アフリカの使徒」と呼ばれたイギリスの宣教師は誰か。"
  },
  {
    "answer": "スタンリー",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "行方不明となったリヴィングストンを発見したことで知られる、イギリスのジャーナリスト、探検家は誰か。"
  },
  {
    "answer": "ベルリン＝コンゴ会議",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1884年から85年にかけて開催された、アフリカ分割を規定した国際会議は何か。"
  },
  {
    "answer": "ビスマルク",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "ベルリン＝コンゴ会議を主催した、ドイツ帝国の宰相は誰か。"
  },
  {
    "answer": "実効支配",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "ベルリン＝コンゴ会議で確立された、植民地獲得の条件となる原則は何か。"
  },
  {
    "answer": "先占権",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "ベルリン＝コンゴ会議で定められた、最初に占領を宣言した国が領有権を得る原則を何と呼ぶか。"
  },
  {
    "answer": "コンゴ自由国",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "ベルギー国王レオポルド２世の私領として成立した、中央アフリカの植民地は何か。"
  },
  {
    "answer": "ウラービー運動",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1881年にエジプトで起きた、イギリス支配に対する民族的反乱を何と呼ぶか。"
  },
  {
    "answer": "マフディー運動",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1881年にスーダンで起きた、イスラム復興を掲げる反英闘争を何と呼ぶか。"
  },
  {
    "answer": "ムハンマド＝アフマド",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "マフディー運動を指導した、スーダンの宗教指導者は誰か。"
  },
  {
    "answer": "ゴードン",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1885年にハルツームでマフディー軍に敗れて戦死した、イギリスの軍人は誰か。"
  },
  {
    "answer": "ケープタウン、カイロ、カルカッタ",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "イギリスが構想した「３C政策」の３つの拠点となった都市はどこか。"
  },
  {
    "answer": "ローズ",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "南アフリカで活動し、ケープタウンからカイロまでの縦断政策を構想した実業家は誰か。"
  },
  {
    "answer": "ブール人",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "南アフリカのオランダ系移民の子孫で、独立を求めて戦った人々を何と呼ぶか。"
  },
  {
    "answer": "トランスヴァール共和国",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "19世紀、ヴァール川以北にブール人が建設した、南アフリカ内陸部の共和国はどこか。"
  },
  {
    "answer": "オレンジ自由国",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "19世紀、ヴァール川とオレンジ川の間にブール人が建設した、南アフリカ内陸部の国家はどこか。"
  },
  {
    "answer": "南アフリカ戦争（南ア戦争、ブール戦争）",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1899年から1902年にかけて、イギリスとブール人共和国の間で戦われた戦争は何か。"
  },
  {
    "answer": "アパルトヘイト",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "南アフリカで実施された、白人と有色人種を分離する人種隔離政策を何と呼ぶか。"
  },
  {
    "answer": "アルジェリア",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1830年にフランスが征服を開始した、北アフリカの地域はどこか。"
  },
  {
    "answer": "チュニジア",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1881年にフランスの保護国となった、北アフリカの国はどこか。"
  },
  {
    "answer": "マダガスカル",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1896年にフランスが併合した、インド洋の大きな島はどこか。"
  },
  {
    "answer": "ジブチ",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "フランス領ソマリランドの中心地で、紅海に面する港湾都市はどこか。"
  },
  {
    "answer": "ファショダ事件",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "1898年にイギリスとフランスが衝突した、スーダン南部での事件を何と呼ぶか。"
  },
  {
    "answer": "英仏協商",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "ファショダ事件の解決により1904年に締結された、英仏間の協商は何か。"
  },
  {
    "answer": "モロッコ",
    "category": "世界分割と列強対立：英・仏・白",
    "chapter": "15",
    "number": "121",
    "question": "20世紀初頭に特にドイツ・フランスが権益を争った北アフリカの地域はどこか。"
  },
  {
    "answer": "モロッコ事件",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "1905年と1911年にモロッコをめぐってドイツとフランスが対立した事件を何と呼ぶか。"
  },
  {
    "answer": "ソマリランド",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "北から仏領・英領・伊領に分割された、「アフリカの角」と呼ばれる地域はどこか。"
  },
  {
    "answer": "エリトリア",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "イタリアが植民地とした、紅海沿岸の地域はどこか。"
  },
  {
    "answer": "エチオピア帝国",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "アフリカで独立を維持し、イタリアの侵攻を撃退した古代からの帝国はどこか。"
  },
  {
    "answer": "アドワの戦い",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "1896年にエチオピア軍がイタリア軍を破った戦いを何と呼ぶか。"
  },
  {
    "answer": "トリポリ、キレナイカ",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "イタリアがオスマン帝国から獲得した、北アフリカの２つの地域は何か。"
  },
  {
    "answer": "リビア",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "トリポリとキレナイカを併合してイタリアが成立させた植民地はどこか。"
  },
  {
    "answer": "リベリア共和国",
    "category": "世界分割と列強対立：独・伊",
    "chapter": "15",
    "number": "122",
    "question": "アフリカ分割の中独立を維持した、西アフリカの共和国はどこか。"
  },
  {
    "answer": "タスマン",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "17世紀にオーストラリア南部を発見し、タスマニア島にその名を残すオランダの航海者は誰か。"
  },
  {
    "answer": "クック",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "18世紀に太平洋を３度探検し、オーストラリア東岸を領有宣言したイギリスの航海者は誰か。"
  },
  {
    "answer": "アボリジニー",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "オーストラリアの先住民で、約６万年前から大陸に住み続けている民族を何と呼ぶか。"
  },
  {
    "answer": "マオリ人",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "ニュージーランドの先住民で、ポリネシア系の文化を持つ民族を何と呼ぶか。"
  },
  {
    "answer": "メラネシア",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "パプアニューギニアやフィジーなどを含む、太平洋南西部の島嶼群を何と呼ぶか。"
  },
  {
    "answer": "ミクロネシア",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "マーシャル諸島やグアムなどを含む、太平洋西部の小さな島々の総称は何か。"
  },
  {
    "answer": "ポリネシア",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "ハワイやイースター島などを含む、太平洋の広範囲に散らばる島嶼群を何と呼ぶか。"
  },
  {
    "answer": "ハワイ",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "太平洋中部のポリネシアに位置し、1898年にアメリカに併合された諸島はどこか。"
  },
  {
    "answer": "リリウオカラニ",
    "category": "太平洋地域の分割",
    "chapter": "15",
    "number": "123",
    "question": "ハワイ王国最後の女王で、アメリカによる併合に抵抗した人物は誰か。"
  },
  {
    "answer": "パン＝アメリカ会議",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "1889年にワシントンで開催された、南北アメリカ諸国による初の国際会議は何か。"
  },
  {
    "answer": "パナマ会議",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "1826年にボリバルが提唱した、ラテンアメリカ諸国の連帯を目指す会議は何か。"
  },
  {
    "answer": "ボリバル",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "「解放者」と呼ばれ、パナマ会議を提唱した、南アメリカ北部の独立を指導した革命家は誰か。"
  },
  {
    "answer": "アメリカ＝メキシコ戦争",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "1846年から48年にかけてアメリカがテキサス併合をめぐりメキシコと戦った戦争は何か。"
  },
  {
    "answer": "フアレス",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "メキシコの大統領として自由主義改革を推進し、フランス干渉軍と戦った人物は誰か。"
  },
  {
    "answer": "ナポレオン3世",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "1862年にメキシコに干渉し、マクシミリアンを皇帝に据えたフランス皇帝は誰か。"
  },
  {
    "answer": "ディアス",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "長期独裁政権を築き「メキシコの近代化」を推進したが、革命で倒された大統領は誰か。"
  },
  {
    "answer": "メキシコ革命",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "1910年に始まった、ディアス独裁政権を倒すメキシコの民主化革命を何と呼ぶか。"
  },
  {
    "answer": "マデロ",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "メキシコ革命の指導者で、1911年に大統領となったが暗殺された人物は誰か。"
  },
  {
    "answer": "サパタ、ビリャ",
    "category": "ラテンアメリカ諸国の従属と発展",
    "chapter": "15",
    "number": "124",
    "question": "メキシコ革命で農民の土地改革を主張した２人の革命指導者は誰か。"
  },
  {
    "answer": "三国同盟",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "1882年にドイツ・オーストリア・イタリアが結成した軍事同盟を何と呼ぶか。"
  },
  {
    "answer": "「未回収のイタリア」問題",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "同盟関係であるイタリアとオーストリアが抱える領土問題は何か。"
  },
  {
    "answer": "ベルリン、ビザンティウム、バグダード",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "ドイツが構想した「３B政策」の３つの拠点となった都市はどこか。"
  },
  {
    "answer": "バグダード鉄道",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "ドイツがオスマン帝国と建設を進めた、ボスフォラス海峡と中東を結ぶ鉄道は何か。"
  },
  {
    "answer": "光栄ある孤立",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "19世紀のイギリスが維持した、他国と同盟を結ばない外交政策を何と呼ぶか。"
  },
  {
    "answer": "英仏協商",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "1904年にイギリスとフランスが締結した、植民地問題を解決した協商は何か。"
  },
  {
    "answer": "英露協商",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "1907年にイギリスとロシアが締結した、中央アジアの勢力圏問題を解決した協商は何か。"
  },
  {
    "answer": "露仏同盟",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "1894年にロシアとフランスが締結した、ドイツ包囲を目的とする軍事同盟は何か。"
  },
  {
    "answer": "三国協商",
    "category": "列強対立の激化",
    "chapter": "15",
    "number": "125",
    "question": "英仏協商と英露協商により形成された、ドイツに対抗する協商体制を何と呼ぶか。"
  },
  {
    "answer": "東清鉄道",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "ロシアが満洲に建設した、ウラジヴォストーくからハルビンを経て旅順に至る鉄道は何か。"
  },
  {
    "answer": "租借",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "欧米列強や日本が中国の領土の一部を、行政権や一部の主権を保持しつつ、一定期間借り受けることを何というか。"
  },
  {
    "answer": "膠州湾",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "ドイツが1898年に中国から租借した、山東半島の湾はどこか。"
  },
  {
    "answer": "旅順、大連",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "ロシアが1898年に中国から租借した、遼東半島の２つの港湾都市はどこか。"
  },
  {
    "answer": "威海衛、九龍半島（新界）",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "イギリスが中国から租借した、山東半島と香港の２つの地域はどこか。"
  },
  {
    "answer": "広州湾",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "フランスが1899年に中国から租借した、海南島に近い湾はどこか。"
  },
  {
    "answer": "門戸開放・機会均等・領土保全",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "1899-1900年にアメリカが中国について提唱した門戸開放宣言の３つの原則は何か。"
  },
  {
    "answer": "康有為",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "戊戌の変法を指導した、中国の改革派知識人は誰か。"
  },
  {
    "answer": "梁啓超",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "康有為とともに戊戌の変法を推進した、中国の思想家・政治家は誰か。"
  },
  {
    "answer": "戊戌の変法",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "1898年に光緒帝が実施した、中国の政治・教育・軍事制度の改革を何と呼ぶか。"
  },
  {
    "answer": "光緒帝",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "戊戌の変法を実施したが、西太后によって幽閉された清朝皇帝は誰か。"
  },
  {
    "answer": "戊戌の政変",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "1898年に西太后が戊戌の変法を停止し、光緒帝を幽閉したクーデタを何と呼ぶか。"
  },
  {
    "answer": "西太后",
    "category": "中国分割と変法",
    "chapter": "15",
    "number": "126",
    "question": "戊戌の政変を起こし、清朝末期に実権を握った光緒帝の叔母は誰か。"
  },
  {
    "answer": "仇教運動",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "19世紀後半に中国各地で頻発した、キリスト教宣教師や信者への攻撃を何と呼ぶか。"
  },
  {
    "answer": "教案",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "仇教運動の中で起きた、宣教師殺害などの対キリスト教攻撃運動を何と呼ぶか。"
  },
  {
    "answer": "義和団戦争",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1900年、外国人排斥運動に乗じ、清朝が列強に宣戦布告し、列強8ヶ国が鎮圧した国際紛争は何か。"
  },
  {
    "answer": "扶清滅洋",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "義和団が掲げた、清朝を支持し外国を排斥するスローガンは何か。"
  },
  {
    "answer": "北京議定書",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "義和団戦争後の1901年に清朝と列強が締結した講和条約は何か。"
  },
  {
    "answer": "満洲",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "中国東北部の地域で、19世紀末から日露をはじめとする列強の勢力争いの舞台となった地域はどこか。"
  },
  {
    "answer": "日英同盟",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1902年に日本とイギリスが締結した、ロシアの南下政策に対抗する同盟は何か。"
  },
  {
    "answer": "日露戦争",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1904年から05年にかけて、満洲と朝鮮の権益をめぐり日本とロシアが戦った戦争は何か。"
  },
  {
    "answer": "奉天会戦",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "日露戦争最大の陸戦で、1905年に満洲で行われた日本軍の勝利した戦いは何か。"
  },
  {
    "answer": "日本海海戦",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "日露戦争で日本の連合艦隊がロシアのバルチック艦隊を破った海戦は何か。"
  },
  {
    "answer": "ポーツマス条約",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1905年に日露戦争を終結させた、アメリカの仲介による講和条約は何か。"
  },
  {
    "answer": "セオドア＝ローズヴェルト",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "ポーツマス条約の調停を行った、アメリカ大統領は誰か。"
  },
  {
    "answer": "韓国の指導監督権",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "ポーツマス条約で日本が獲得した、朝鮮半島に対する権利は何か。"
  },
  {
    "answer": "遼東半島南部",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "ポーツマス条約で日本がロシアから獲得した、中国東北部の地域はどこか。"
  },
  {
    "answer": "東清鉄道南部",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "ポーツマス条約で日本がロシアから譲渡された鉄道は何か。"
  },
  {
    "answer": "南満洲鉄道株式会社",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "東清鉄道南部を経営するため日本が設立した国策会社は何か。"
  },
  {
    "answer": "南樺太",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "ポーツマス条約でロシアから日本に割譲された地域はどこか。"
  },
  {
    "answer": "日比谷焼き打ち事件",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1905年にポーツマス条約の内容に不満を持つ民衆が起こした暴動を何と呼ぶか。"
  },
  {
    "answer": "日露協約",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1907年に日本とロシアが締結した、満洲での勢力圏を確認した協約は何か。"
  },
  {
    "answer": "大韓帝国",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1897年に成立した、朝鮮の国号を改めた帝国は何か。"
  },
  {
    "answer": "高宗",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "大韓帝国の皇帝で、日本の保護国化に抵抗した人物は誰か。"
  },
  {
    "answer": "第２次日韓協約",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1905年に締結された、韓国を日本の保護国とした協約は何か。"
  },
  {
    "answer": "統監府",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "第２次日韓協約により韓国に設置された、日本の統治機関は何か。"
  },
  {
    "answer": "伊藤博文",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "初代韓国統監に就任した、日本の政治家は誰か。"
  },
  {
    "answer": "義兵闘争",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "韓国の民族運動家が展開した、日本支配に対する武装抵抗運動を何と呼ぶか。"
  },
  {
    "answer": "ハーグ密使事件",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1907年に高宗が万国平和会議に派遣した密使が発覚した事件を何と呼ぶか。"
  },
  {
    "answer": "安重根",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1909年にハルビンで伊藤博文を暗殺した、朝鮮の独立運動家は誰か。"
  },
  {
    "answer": "ハルビン",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "安重根が伊藤博文を暗殺した、満洲の都市はどこか。"
  },
  {
    "answer": "朝鮮総督府",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "1910年の韓国併合後に設置された、朝鮮統治の最高機関は何か。"
  },
  {
    "answer": "寺内正毅",
    "category": "義和団戦争と日露戦争・韓国併合",
    "chapter": "15",
    "number": "127",
    "question": "初代朝鮮総督に就任した、日本の軍人は誰か。"
  },
  {
    "answer": "光緒新政",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1901年から始まった、清朝による政治・軍事・教育制度の改革を何と呼ぶか。"
  },
  {
    "answer": "科挙",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "光緒新政で1905年に廃止された、中国の伝統的な官吏登用試験は何か。"
  },
  {
    "answer": "憲法大綱",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1908年に清朝が発布した、立憲君主制への移行を定めた基本法は何か。"
  },
  {
    "answer": "北洋軍",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "袁世凱が育成した、清朝末期の近代的軍隊を何と呼ぶか。"
  },
  {
    "answer": "興中会",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1894年に孫文がハワイで結成した、中国初の革命組織は何か。"
  },
  {
    "answer": "華興会",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "黄興が湖南省で組織した、反清革命団体は何か。"
  },
  {
    "answer": "光復会",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "章炳麟らが1904年に結成した、江浙地方の革命団体は何か。"
  },
  {
    "answer": "中国同盟会",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1905年に日本で結成された、孫文を総理とする革命組織は何か。"
  },
  {
    "answer": "民族の独立、民権の伸長、民生の安定",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "中国同盟会が掲げた三民主義とは具体的にどのような内容であるか。"
  },
  {
    "answer": "四川",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "幹線鉄道国有化に反対して1911年に暴動が発生したが、その場所はどこか。"
  },
  {
    "answer": "武昌蜂起",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1911年10月10日に勃発した、辛亥革命の発端となる武装蜂起は何か。"
  },
  {
    "answer": "中華民国",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1912年1月1日に南京で成立した、アジア初の共和国は何か。"
  },
  {
    "answer": "南京",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "中華民国の臨時首都となった、長江下流域の都市はどこか。"
  },
  {
    "answer": "袁世凱",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "清朝最後の実力者で、中華民国初代大総統となった軍人・政治家は誰か。"
  },
  {
    "answer": "宣統帝",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1912年に退位した清朝最後の皇帝を何と呼ぶか。"
  },
  {
    "answer": "国民党",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1912年に孫文が組織したが、袁世凱によって弾圧された中華民国の政党は何か。"
  },
  {
    "answer": "軍閥",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "中華民国成立後に各地で割拠した、私兵を持つ地方実力者を何と呼ぶか。"
  },
  {
    "answer": "ダライ＝ラマ13世",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1913年に独立を宣言したチベットの最高指導者は誰か。"
  },
  {
    "answer": "外モンゴル",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1911年に独立を宣言した、モンゴル北部の地域を何と呼ぶか。"
  },
  {
    "answer": "チョイバルサン",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "外モンゴルで活動し、後にモンゴル人民共和国を建設した革命家は誰か。"
  },
  {
    "answer": "モンゴル人民共和国",
    "category": "光緒新政・辛亥革命",
    "chapter": "15",
    "number": "128",
    "question": "1924年に成立した、世界初の社会主義国の衛星国となった国家は何か。"
  },
  {
    "answer": "インド国民会議",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1885年に結成された、イギリス統治下インドの民族運動組織を何と呼ぶか。"
  },
  {
    "answer": "国民会議派",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "インド国民会議の通称で、インド独立運動の中心となった政治組織を何と呼ぶか。"
  },
  {
    "answer": "ティラク",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "「スワラージは我が生得の権利である」と述べた、国民会議派の急進的指導者は誰か。"
  },
  {
    "answer": "ベンガル分割令",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1905年にイギリスがインドの民族運動を分裂させるために実施した政策は何か。"
  },
  {
    "answer": "カルカッタ",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1906年にインド国民会議派の大会が開催され、民族運動の四大綱領が採択された都市はどこか。"
  },
  {
    "answer": "英貨排斥・スワデーシ・スワラージ・民族教育",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "国民会議派カルカッタ大会で提唱された４綱領は何か。"
  },
  {
    "answer": "全インド＝ムスリム連盟",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1906年にインドで結成した政治組織で、イギリスへの協力と、将来的なイスラム国家の樹立を目指した団体は何か。"
  },
  {
    "answer": "デリー",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1911年にイギリス領インドの首都となった、北部の都市はどこか。"
  },
  {
    "answer": "イスラーム同盟（サレカット＝イスラーム）",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1912年にインドネシアで結成された、最初のイスラーム系民族組織は何か。"
  },
  {
    "answer": "ドンズー(東遊)運動",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "20世紀初頭にベトナムで始まった、日本留学を通じた近代化運動を何と呼ぶか。"
  },
  {
    "answer": "ファン＝ボイ＝チャウ",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "ドンズー運動を指導した、ベトナムの民族主義者は誰か。"
  },
  {
    "answer": "維新会",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "ファン＝ボイ＝チャウが1904年に結成した、ベトナムの民族運動組織は何か。"
  },
  {
    "answer": "ベトナム光復会",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1912年にファン＝ボイ＝チャウが改組した、ベトナムの革命組織は何か。"
  },
  {
    "answer": "ホセ＝リサール",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "『ノリ・メ・タンヘレ』を著し、フィリピン民族意識の覚醒に貢献した作家は誰か。"
  },
  {
    "answer": "フィリピン革命",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1896年に始まった、スペイン支配に対するフィリピンの独立戦争を何と呼ぶか。"
  },
  {
    "answer": "アギナルド",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "フィリピン革命を指導し、1898年に独立を宣言した革命家は誰か。"
  },
  {
    "answer": "フィリピン＝アメリカ戦争",
    "category": "インド・東南アジアの民族運動①",
    "chapter": "15",
    "number": "129",
    "question": "1899年から1902年にかけて、アメリカとフィリピン独立勢力の間で戦われた戦争は何か。"
  },
  {
    "answer": "オスマン主義",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "19世紀にオスマン帝国で提唱された、帝国内全民族の統合を目指す思想は何か。"
  },
  {
    "answer": "パン＝イスラーム主義",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "アフガーニーが提唱した、イスラーム世界の団結を目指す思想は何か。"
  },
  {
    "answer": "アフガーニー",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "パン＝イスラーム主義を唱えた、イランのイスラーム思想家は誰か。"
  },
  {
    "answer": "青年トルコ革命",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "1908年にオスマン帝国で起きた立憲革命を何と呼ぶか。"
  },
  {
    "answer": "青年トルコ人",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "青年トルコ革命を起こした、西欧的近代化を目指す改革派グループを何と呼ぶか。"
  },
  {
    "answer": "アブデュルハミト2世",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "青年トルコ革命によって革命の翌年に退位させられた、オスマン帝国の専制君主は誰か。"
  },
  {
    "answer": "トルコ民族主義",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "20世紀初頭にオスマン帝国で高まった、トルコ民族の優位を主張する思想は何か。"
  },
  {
    "answer": "ガージャール朝",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "18世紀末から20世紀初頭にかけて、イランを支配したシーア派のイスラーム王朝は何か。"
  },
  {
    "answer": "タバコ＝ボイコット運動",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "ガージャール朝がイギリスにタバコの専売権を与えたことに反発して、ウラマーが主導し、国民的に展開された運動は何か。"
  },
  {
    "answer": "イラン立憲革命",
    "category": "西アジアの民族運動・立憲運動",
    "chapter": "15",
    "number": "130",
    "question": "1905-11年にかけてガージャール朝で発生した、専制政治の打破と立憲政治の樹立を目指した革命は何か。"
  },
  {
    "answer": "ヨーロッパの火薬庫",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "民族対立が激しく、第１次世界大戦の発火点となったバルカン半島の異名は何か。"
  },
  {
    "answer": "パン＝ゲルマン主義",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "19世紀後半にドイツで高まった、ゲルマン系民族の統一と拡張を目指す民族主義運動は何か。"
  },
  {
    "answer": "パン＝スラヴ主義",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "ロシアを盟主とする、スラヴ系民族の団結と解放を目指す民族主義運動は何か。"
  },
  {
    "answer": "セルビア",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "バルカン半島でパン＝スラヴ主義運動の中心となった、南スラヴ系の国はどこか。"
  },
  {
    "answer": "青年トルコ革命",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "1908年にオスマン帝国で起きた立憲革命を何と呼ぶか。"
  },
  {
    "answer": "ブルガリア",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "青年トルコ革命の混乱の中オスマン帝国から独立したバルカンの国はどこか。"
  },
  {
    "answer": "ボスニア・ヘルツェゴヴィナ",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "青年トルコ革命の混乱の中オーストリアが併合した、バルカン半島西部の地域はどこか。"
  },
  {
    "answer": "バルカン同盟",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "1912年に結成された、ブルガリア・セルビア・ギリシア・モンテネグロの軍事同盟は何か。"
  },
  {
    "answer": "第１次バルカン戦争",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "1912年から13年にかけて、バルカン同盟とオスマン帝国の間で戦われた戦争は何か。"
  },
  {
    "answer": "第２次バルカン戦争",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "1913年にバルカン諸国間で戦われた、領土分割をめぐる戦争は何か。"
  },
  {
    "answer": "ローザ＝ルクセンブルク",
    "category": "バルカン半島の危機",
    "chapter": "16",
    "number": "131",
    "question": "ドイツの革命家で、第１次世界大戦中に反戦を訴えて投獄された女性は誰か。"
  },
  {
    "answer": "サライェヴォ事件",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1914年6月28日にオーストリア皇太子が暗殺された、第１次世界大戦の発端となる事件は何か。"
  },
  {
    "answer": "ベルギー",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦でドイツ軍に侵攻された永世中立国はどこか。"
  },
  {
    "answer": "ウィンザー朝",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦中にイギリス王室が改称した、現在まで続く王朝名は何か。"
  },
  {
    "answer": "タンネンベルクの戦い",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1914年にドイツ軍がロシア軍を破った、東プロイセンでの戦いは何か。"
  },
  {
    "answer": "マルヌの戦い",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1914年にフランス軍がドイツ軍の進撃を阻止した、パリ近郊での戦いは何か。"
  },
  {
    "answer": "挙国一致体制",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦中に各国で形成された、戦争遂行のための政治体制を何と呼ぶか。"
  },
  {
    "answer": "塹壕戦",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦の西部戦線で展開され、特に西部戦線の長期化をもたらした戦術は何か。"
  },
  {
    "answer": "戦車",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦のソンムの戦いでイギリスによって初めて実戦投入された兵器は何か。"
  },
  {
    "answer": "毒ガス",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦でドイツがイープルの戦いで初めて使用した、国際法違反の化学兵器は何か。"
  },
  {
    "answer": "無制限潜水艦作戦",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦でドイツが展開した、商船も攻撃対象とする潜水艦戦術は何か。"
  },
  {
    "answer": "「未回収のイタリア」問題",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "第１次世界大戦でイタリアが連合国側で参戦する原因となった、オーストリアとの領土問題は何か。"
  },
  {
    "answer": "サイクス・ピコ協定",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1916年にイギリスとフランスが結んだ、オスマン帝国領土分割の秘密協定は何か。"
  },
  {
    "answer": "フセイン・マクマホン協定",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1915年から16年にかけてイギリスがアラブ人と結んだ、反オスマン蜂起を促す協定は何か。"
  },
  {
    "answer": "バルフォア宣言",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1917年にイギリスが発表した、ユダヤ人国家建設支持を表明した宣言は何か。"
  },
  {
    "answer": "ブレスト＝リトフスク条約",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1918年3月にドイツとソヴィエト・ロシアが締結した単独講和条約は何か。"
  },
  {
    "answer": "キール軍港の水平反乱",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "1918年11月にドイツで起きた、ドイツ革命のきっかけとなった反戦蜂起を何と呼ぶか。"
  },
  {
    "answer": "十四カ条",
    "category": "第一次世界大戦",
    "chapter": "16",
    "number": "132",
    "question": "ウィルソンが1918年に発表した、戦後処理原則を示した平和原則は何か。"
  },
  {
    "answer": "二月革命（三月革命）",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1917年3月にペトログラードで起きた、ニコライ２世を退位させた革命は何か。"
  },
  {
    "answer": "ペトログラード",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "二月革命の舞台となった、ロシアの首都の当時の名称は何か。"
  },
  {
    "answer": "ニコライ2世",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "二月革命で退位した、ロシア帝国最後の皇帝は誰か。"
  },
  {
    "answer": "二重権力状態",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "二月革命後に成立した、臨時政府とソヴィエトが並立する政治状況を何と呼ぶか。"
  },
  {
    "answer": "ケレンスキー",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "臨時政府の首相として第１次世界大戦継続を主張した、ロシアの政治家は誰か。"
  },
  {
    "answer": "メンシェヴィキ、社会革命党",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "二月革命後の臨時政府を支持した２つの政治勢力は何か。"
  },
  {
    "answer": "レーニン",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1917年4月にロシアに帰国し、社会主義革命を呼びかけた革命家は誰か。"
  },
  {
    "answer": "四月テーゼ",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "レーニンが1917年4月に発表した、革命方針を示した文書は何か。"
  },
  {
    "answer": "十月革命（十一月革命）",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1917年11月7日にボリシェヴィキが起こした、社会主義革命を何と呼ぶか。"
  },
  {
    "answer": "平和に関する布告",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "十月革命直後にレーニンが発表した、第１次世界大戦からの離脱を表明した宣言は何か。"
  },
  {
    "answer": "無併合・無賠償・民族自決",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "「平和に関する布告」で示された、講和の３原則は何か。"
  },
  {
    "answer": "土地に関する布告",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "十月革命直後にレーニンが発表した、農地改革を宣言した布告は何か。"
  },
  {
    "answer": "共産党",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1918年にボリシェヴィキが改称した、ソヴィエト＝ロシアの党名は何か。"
  },
  {
    "answer": "ブレスト＝リトフスク条約",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1918年3月にソヴィエト＝ロシアとドイツが締結した単独講和条約は何か。"
  },
  {
    "answer": "モスクワ",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1918年3月にソヴィエト政府がペトログラードから移転した首都はどこか。"
  },
  {
    "answer": "赤軍",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1918年に創設された、ソヴィエト＝ロシアの軍隊を何と呼ぶか。"
  },
  {
    "answer": "対ソ干渉戦争",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1918年から21年にかけて展開された、反ボリシェヴィキ勢力による軍事介入を何と呼ぶか。"
  },
  {
    "answer": "戦時共産主義",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1918年から21年にかけてソヴィエト＝ロシアが実施した、統制経済政策を何と呼ぶか。"
  },
  {
    "answer": "チェカ（非常委員会）",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1917年に設置された、ソヴィエト＝ロシアの秘密警察を何と呼ぶか。"
  },
  {
    "answer": "コミンテルン",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1919年にレーニンが創設した、世界革命を目指す国際組織は何か。"
  },
  {
    "answer": "ネップ（新経済政策）",
    "category": "ロシア革命",
    "chapter": "16",
    "number": "133",
    "question": "1921年からソヴィエト＝ロシアが実施した、市場経済を部分的に導入した政策は何か。"
  },
  {
    "answer": "ヴェルサイユ体制",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "第一次世界大戦後の講和会議で形成されたヨーロッパの秩序を何と呼ぶか。"
  },
  {
    "answer": "パリ講和会議",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "1919年1月から6月にかけて開催された第一次世界大戦の戦後処理を決定する国際会議は何か。"
  },
  {
    "answer": "ウィルソン",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "アメリカ大統領として十四カ条の平和原則を提唱し、パリ講和会議で民族自決を主張した人物は誰か。"
  },
  {
    "answer": "ロイド＝ジョージ",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "パリ講和会議でイギリス首相として参加し、ドイツに対して比較的穏健な姿勢を示した人物は誰か。"
  },
  {
    "answer": "クレマンソー",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "パリ講和会議でフランス首相として参加し、ドイツに対して最も厳しい制裁を求めた人物は誰か。"
  },
  {
    "answer": "ザール",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ヴェルサイユ条約により15年間国際連盟の管理下に置かれたドイツ西部の工業地帯は何か。"
  },
  {
    "answer": "ダンツィヒ",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ヴェルサイユ条約により国際連盟管理下の自由市とされたバルト海沿岸の都市は何か。"
  },
  {
    "answer": "アルザス、ロレーヌ",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "普仏戦争でドイツに割譲されたが、ヴェルサイユ条約によりフランスに返還された地域は何か。"
  },
  {
    "answer": "ポーランド回廊",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ヴェルサイユ条約により新生ポーランドがバルト海に出るために設けられた地帯は何か。"
  },
  {
    "answer": "ラインラント",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ヴェルサイユ条約により非武装地帯とされたドイツ西部のフランス国境地帯は何か。"
  },
  {
    "answer": "1320億金マルク",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ヴェルサイユ条約でドイツに課された賠償金の総額は何か。"
  },
  {
    "answer": "サン＝ジェルマン条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "オーストリア＝ハンガリー帝国の解体を定めた1919年の条約は何か。"
  },
  {
    "answer": "トリアノン条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ハンガリーの領土を大幅に削減し、トランシルヴァニアをルーマニアに割譲させた条約は何か。"
  },
  {
    "answer": "ヌイイ条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ブルガリアの領土縮小とトラキア地方の割譲を定めた1919年の条約は何か。"
  },
  {
    "answer": "セーヴル条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "オスマン帝国の解体を定めたが、後にローザンヌ条約に置き換えられた条約は何か。"
  },
  {
    "answer": "民族自決",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ウィルソンの十四カ条に含まれ、各民族が自らの意思で国家を形成する権利を何と呼ぶか。"
  },
  {
    "answer": "チェコスロヴァキア",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "オーストリア＝ハンガリー帝国の解体により誕生したボヘミア・モラヴィア地方を中心とする国家は何か。"
  },
  {
    "answer": "セルブ＝クロアート＝スロヴェーン王国",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "南スラヴ人の統合により成立し、後にユーゴスラヴィア王国と改称された国家は何か。"
  },
  {
    "answer": "フィンランド",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ロシア革命後の混乱の中で1917年に独立を宣言し、1920年に正式に承認された北欧の国は何か。"
  },
  {
    "answer": "ポーランド",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "第一次世界大戦後に、プロイセン、オーストリア、ロシアによる分割以来の復活を達成した東欧の国は何か。"
  },
  {
    "answer": "エストニア、ラトビア、リトアニア",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "ロシア革命後にロシア帝国から独立したバルト三国は何か。"
  },
  {
    "answer": "イブン＝サウード",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "アラビア半島でオスマン帝国の支配を打倒し、のちにサウジアラビア王国を建国した人物は誰か。"
  },
  {
    "answer": "三・一独立運動",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "1919年に朝鮮で起こった日本の植民地支配に対する大規模な独立運動は何か。"
  },
  {
    "answer": "五・四運動",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "1919年に中国で起こった反日・反帝国主義の愛国運動は何か。"
  },
  {
    "answer": "委任統治",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "国際連盟が旧ドイツ植民地や旧オスマン帝国領を先進国に統治させた制度は何か。"
  },
  {
    "answer": "イラク、パレスチナ、トランスヨルダン",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "イギリスが委任統治を受けた中東の三地域は何か。"
  },
  {
    "answer": "シリア",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "フランスが委任統治を受けた中東の地域は何か。"
  },
  {
    "answer": "レバノン",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "シリアから分離したが、フランスの委任統治が続いた地域は何か。"
  },
  {
    "answer": "ジュネーヴ",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "国際連盟の本部が置かれたスイスの都市は何か。"
  },
  {
    "answer": "全会一致制",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "国際連盟の意思決定方式で、全加盟国の同意を必要とした制度は何か。"
  },
  {
    "answer": "経済制裁",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "国際連盟が平和を破った国に対して行う非軍事的制裁措置は何か。"
  },
  {
    "answer": "ワシントン体制",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "第一次世界大戦後に成立した太平洋・東アジア地域の国際秩序を何と呼ぶか。"
  },
  {
    "answer": "四カ国条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "太平洋の現状維持を約束し、事実上日英同盟を廃止させた1921年の条約は何か。"
  },
  {
    "answer": "日英同盟",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "1902年に締結され、四カ国条約の成立により1923年に失効したイギリスとの軍事同盟は何か。"
  },
  {
    "answer": "ワシントン海軍軍備制限条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "1922年に調印された海軍軍備制限に関する条約で、主力艦の保有比率を定めたものは何か。"
  },
  {
    "answer": "九カ国条約",
    "category": "ヴェルサイユ体制とワシントン体制",
    "chapter": "16",
    "number": "134",
    "question": "中国の主権尊重と門戸開放を定めた1922年の条約は何か。"
  },
  {
    "answer": "アイルランド自由国",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1921年にアイルランド島の南部26州に成立したイギリスの自治領は何か。"
  },
  {
    "answer": "アルスター",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "アイルランド分割により北部6州が属したイギリスの地域は何か。"
  },
  {
    "answer": "エール",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "完全独立を達成したアイルランド自由国が改称した国名は何か。"
  },
  {
    "answer": "成年男性と30歳以上の女性",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1918年の選挙法改正により参政権を得たイギリスの有権者層は何か。"
  },
  {
    "answer": "21歳以上の男女",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1928年の選挙法改正により実現したイギリスの普通選挙権の対象は何か。"
  },
  {
    "answer": "マクドナルド",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1924年にイギリス初の労働党政権を樹立した首相は誰か。"
  },
  {
    "answer": "イギリス連邦（コモンウェルス）",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1931年のウェストミンスター憲章により法的に確立された連合体は何か。"
  },
  {
    "answer": "ルール占領",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "フランスとベルギーがドイツの賠償金滞納を理由に1923年に行った軍事占領は何か。"
  },
  {
    "answer": "ベルギー",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "ルール占領をフランスと共同で行ったヨーロッパの国は何か。"
  },
  {
    "answer": "ブリアン",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "フランス外相としてドイツとの協調政策を推進し、ロカルノ条約を締結した人物は誰か。"
  },
  {
    "answer": "ヴァイマル共和国",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "第一次世界大戦後にドイツで成立した共和制国家の通称は何か。"
  },
  {
    "answer": "エーベルト",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "ヴァイマル共和国の初代大統領となった社会民主党の政治家は誰か。"
  },
  {
    "answer": "スパルタクス団",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1919年1月にベルリンで蜂起した急進的な共産主義組織は何か。"
  },
  {
    "answer": "ローザ＝ルクセンブルク",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "スパルタクス団の指導者として活動し、1919年1月に殺害された女性革命家は誰か。"
  },
  {
    "answer": "カール＝リープクネヒト",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "ローザ＝ルクセンブルクと共にスパルタクス団を指導し、1919年1月に殺害された人物は誰か。"
  },
  {
    "answer": "ドイツ共産党",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1919年1月にスパルタクス団の蜂起後に結成されたドイツの政党は何か。"
  },
  {
    "answer": "ヴァイマル憲法",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1919年に制定されたドイツ共和国の憲法で、社会権を明記したことで知られるものは何か。"
  },
  {
    "answer": "ミュンヘン一揆",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1923年11月にミュンヘンで発生したナチスによる政権奪取の失敗したクーデタ未遂事件は何か。"
  },
  {
    "answer": "シュトレーゼマン",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "ドイツ外相としてヴァイマル共和国の安定化に努め、ノーベル平和賞を受賞した人物は誰か。"
  },
  {
    "answer": "レンテンマルク",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1923年のハイパーインフレーション収束のためにドイツで発行された新通貨は何か。"
  },
  {
    "answer": "ドーズ案",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1924年にドイツの戦争賠償問題解決のために策定されたアメリカ主導の計画は何か。"
  },
  {
    "answer": "ヤング案",
    "category": "西欧諸国の停滞",
    "chapter": "16",
    "number": "135",
    "question": "1929年にドーズ案を修正し、ドイツの賠償金支払いを軽減したアメリカ主導の計画は何か。"
  },
  {
    "answer": "フィウメ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "イタリアがパリ講和会議で獲得を要求したが認められなかったアドリア海沿岸の都市は何か。"
  },
  {
    "answer": "ローザンヌ条約",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1923年にトルコと連合国との間で結ばれ、セーヴル条約に代わった平和条約は何か。"
  },
  {
    "answer": "ポーランド＝ソヴィエト戦争",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1919年から1921年にかけて新生ポーランドとソヴィエト=ロシア間で戦われた戦争は何か。"
  },
  {
    "answer": "ロカルノ条約",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1925年にドイツの西部国境の現状維持を保証し、国際協調の象徴となった条約は何か。"
  },
  {
    "answer": "ドイツ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ロカルノ条約の締結により1926年に国際連盟への加盟が認められた敗戦国は何か。"
  },
  {
    "answer": "不戦条約（ブリアン・ケロッグ条約）",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1928年に調印され、戦争を国際法上違法とした条約の正式名称は何か。"
  },
  {
    "answer": "ロンドン会議",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1930年にロンドンで開催された海軍軍縮に関する国際会議は何か。"
  },
  {
    "answer": "ファシズム",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "イタリアで台頭した全体主義的な政治思想・運動を総称して何と呼ぶか。"
  },
  {
    "answer": "ムッソリーニ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1922年にイタリアで政権を獲得し、ファシズム体制を確立した指導者は誰か。"
  },
  {
    "answer": "ファシスト党",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ムッソリーニが1919年に結成したイタリアの政治組織は何か。"
  },
  {
    "answer": "ローマ進軍",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1922年10月にムッソリーニが権力掌握のために行った政治的示威行動は何か。"
  },
  {
    "answer": "フィウメ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ムッソリーニ政権が併合を断行した、アドリア海の最も奥、イストリア半島の東側にある港町はどこか。"
  },
  {
    "answer": "アルバニア",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1926年にイタリアが保護国化したバルカン半島の国は何か。"
  },
  {
    "answer": "ラテラノ条約",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1929年にムッソリーニとローマ教皇との間で結ばれた政教協定は何か。"
  },
  {
    "answer": "ヴァチカン市国",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ラテラノ条約により成立したローマ教皇の世俗的支配権を認めた世界最小の国家は何か。"
  },
  {
    "answer": "権威主義体制",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "民主主義的な外見を保ちながら実質的に独裁制を敷く政治体制を何と呼ぶか。"
  },
  {
    "answer": "ピウスツキ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ポーランドで1926年にクーデタにより権力を掌握し、権威主義体制を築いた軍人は誰か。"
  },
  {
    "answer": "ホルティ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ハンガリーで1920年から1944年まで摂政として権威主義体制を維持した人物は誰か。"
  },
  {
    "answer": "マサリク",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "チェコスロヴァキアの初代大統領となり、民主主義の維持に努めた政治家は誰か。"
  },
  {
    "answer": "ベネシュ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "マサリクの後継者としてチェコスロヴァキア大統領となった政治家は誰か。"
  },
  {
    "answer": "ラパロ条約",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1922年にドイツとソヴィエト＝ロシアが締結し、初めてソヴィエト＝ロシアが対外的に認められた条約は何か。"
  },
  {
    "answer": "ソヴィエト社会主義共和国連邦",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1922年12月にロシア=ソヴィエト連邦社会主義共和国など4共和国により成立した国家は何か。"
  },
  {
    "answer": "世界革命論",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "共産主義革命を世界各国に拡大させることを目指したマルクス主義の理論は何か。"
  },
  {
    "answer": "トロツキー",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "世界革命論を主張し、レーニンの死後スターリンとの権力闘争に敗れた革命家は誰か。"
  },
  {
    "answer": "一国社会主義論",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "トロツキーの世界革命論に対抗してソ連一国での社会主義建設を主張した理論は何か。"
  },
  {
    "answer": "スターリン",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "一国社会主義論を主張し、1924年以降ソ連の最高指導者となった人物は誰か。"
  },
  {
    "answer": "第１次五カ年計画",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "1928年に開始されたソ連の経済建設計画で、重工業の発展と農業の集団化を重視したものは何か。"
  },
  {
    "answer": "コルホーズ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ソ連の農業集団化政策により設立された農業協同組合は何か。"
  },
  {
    "answer": "ソフホーズ",
    "category": "国際協調主義/南欧・東欧・ソ連の動向",
    "chapter": "16",
    "number": "136",
    "question": "ソ連で設立された国営農場で、農民が国家公務員として働く大規模農場は何か。"
  },
  {
    "answer": "孤立主義",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "第一次世界大戦後にアメリカが国際政治から距離を置き、国内問題に専念した外交政策を何と呼ぶか。"
  },
  {
    "answer": "共和党",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1920年代のアメリカで政権を担当し、孤立主義と企業優遇政策を推進した政党は何か。"
  },
  {
    "answer": "高関税政策",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1920年代のアメリカ共和党政権が国内産業保護のために実施した経済政策は何か。"
  },
  {
    "answer": "ハーディング",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1921年から1923年まで大統領を務め、「正常への復帰」を掲げたアメリカの政治家は誰か。"
  },
  {
    "answer": "クーリッジ",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "ハーディングの急死により大統領となり、1920年代の繁栄を象徴する政治家は誰か。"
  },
  {
    "answer": "移民法",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1924年にアメリカで制定され、特にアジア系移民を大幅に制限した法律は何か。"
  },
  {
    "answer": "フーヴァー",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1929年から1933年まで大統領を務め、世界恐慌に直面したアメリカの政治家は誰か。"
  },
  {
    "answer": "フォード",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "大量生産システムを確立し、自動車の普及に貢献したアメリカの実業家は誰か。"
  },
  {
    "answer": "禁酒法",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1920年から1933年まで施行され、アルコール飲料の製造・販売を禁止した法律は何か。"
  },
  {
    "answer": "女性参政権",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1920年の憲法修正第19条により実現したアメリカの政治的権利拡大は何か。"
  },
  {
    "answer": "KKK（クー・クラックス・クラン）",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "1920年代のアメリカで復活し、黒人・ユダヤ人・カトリック教徒を迫害した秘密結社は何か。"
  },
  {
    "answer": "WASP",
    "category": "1920年代アメリカの繁栄",
    "chapter": "16",
    "number": "137",
    "question": "アメリカ社会の支配層を構成する白人・アングロサクソン・プロテスタントを指す略語は何か。"
  },
  {
    "answer": "文学革命",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1917年頃から中国で展開された伝統的な文語文から口語文への文学改革運動は何か。"
  },
  {
    "answer": "白話文学",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "中国の文学革命で推進された、日常話し言葉に基づく新しい文学形式は何か。"
  },
  {
    "answer": "陳独秀",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "中国共産党の創設者の一人で、『新青年』の編集者として文学革命を推進した人物は誰か。"
  },
  {
    "answer": "『新青年』",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "陳独秀が1915年に創刊し、新文化運動の拠点となった中国の雑誌は何か。"
  },
  {
    "answer": "民主と科学",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "『新青年』が掲げた新文化運動のスローガンで、伝統的権威の打破を目指したものは何か。"
  },
  {
    "answer": "胡適",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "中国の文学革命で白話文学を提唱し、アメリカ留学経験を持つ学者は誰か。"
  },
  {
    "answer": "魯迅",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "本名を周樹人といい、『狂人日記』『阿Q正伝』で知られる中国の作家は誰か。"
  },
  {
    "answer": "李大釗",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "北京大学図書館員から中国共産党創設者となり、マルクス主義を中国に紹介した人物は誰か。"
  },
  {
    "answer": "二十一ヵ条の要求",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1915年に日本が中華民国の袁世凱政府に突きつけた要求は何か。"
  },
  {
    "answer": "米騒動",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1918年に米価高騰を背景として日本各地で発生した民衆蜂起は何か。"
  },
  {
    "answer": "原敬",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1918年に平民宰相として日本初の本格的政党内閣を組織した政治家は誰か。"
  },
  {
    "answer": "シベリア出兵",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1918年から1922年にかけて日本が革命後のロシアに派遣した軍事干渉は何か。"
  },
  {
    "answer": "関東大震災",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1923年9月1日に発生し、日本の政治・社会に大きな影響を与えた自然災害は何か。"
  },
  {
    "answer": "普通選挙法",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1925年に制定され、日本で成年男子による普通選挙を実現した法律は何か。"
  },
  {
    "answer": "治安維持法",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "普通選挙法と同時に制定され、社会主義運動を取り締まる目的で作られた法律は何か。"
  },
  {
    "answer": "朝鮮総督府",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1910年の日韓併合後に朝鮮統治を担当した日本の行政機関は何か。"
  },
  {
    "answer": "武断政治",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "日韓併合直後から1919年まで朝鮮総督府が実施した厳格な統治政策は何か。"
  },
  {
    "answer": "三・一独立運動",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1919年3月1日に始まった朝鮮民族による日本統治への大規模な抗議運動は何か。"
  },
  {
    "answer": "文化政治",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "三・一独立運動後に朝鮮総督府が採用した比較的穏健な統治政策は何か。"
  },
  {
    "answer": "五・四運動",
    "category": "第一次世界大戦と東アジア",
    "chapter": "16",
    "number": "138",
    "question": "1919年5月4日に北京で始まった中国の反日・反帝国主義愛国運動は何か。"
  },
  {
    "answer": "カラハン宣言",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1919年にソヴィエト政府が発表した中国に対する特権放棄を約束した宣言は何か。"
  },
  {
    "answer": "中国国民党",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1919年に改組され、孫文の指導下で革命運動を展開した中国の政治組織は何か。"
  },
  {
    "answer": "孫文",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "第一次世界大戦後に改組された中国国民党の指導者は誰か。"
  },
  {
    "answer": "中国共産党",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1921年7月に上海で結成され、マルクス・レーニン主義を奉じる中国の政党は何か。"
  },
  {
    "answer": "陳独秀",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "中国共産党の初代総書記となり、第1回全国代表大会を指導した人物は誰か。"
  },
  {
    "answer": "連ソ・容共・扶助工農",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1924年に孫文が採用した中国国民党の三大政策は何か。"
  },
  {
    "answer": "第１次国共合作",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1924年から1927年まで続いた中国国民党と中国共産党の協力関係は何か。"
  },
  {
    "answer": "国民革命軍",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "第1次国共合作により編成された中国国民党の軍隊は何か。"
  },
  {
    "answer": "広州国民政府",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1925年に孫文の死後に樹立された、中国国民党の政権は何か。"
  },
  {
    "answer": "蔣介石",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "黄埔軍官学校校長から国民革命軍総司令となり、中国国民党の指導者となった人物は誰か。"
  },
  {
    "answer": "軍閥",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1920年代の中国で各地方を支配し、中央政府に対抗した軍事勢力を総称して何と呼ぶか。"
  },
  {
    "answer": "浙江財閥",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "江蘇省・浙江省を基盤とし、蔣介石を支援した中国の資本家グループは何か。"
  },
  {
    "answer": "上海クーデタ",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1927年4月に蔣介石が上海で共産党員を大量虐殺した事件は何か。"
  },
  {
    "answer": "南京国民政府",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1927年4月に蔣介石により樹立され、中華民国の正統政府となった政権は何か。"
  },
  {
    "answer": "関東軍",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1919年に設置された日本の中国駐留軍で、後に満洲事変を引き起こした組織は何か。"
  },
  {
    "answer": "山東出兵",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1927年から1928年にかけて日本が中国に派遣した軍事行動は何か。"
  },
  {
    "answer": "済南事件",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1928年5月に山東省で発生した日本軍と中国国民革命軍の武力衝突事件は何か。"
  },
  {
    "answer": "張作霖",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "奉天を根拠地とする満洲の軍閥で、日本の影響下にあった人物は誰か。"
  },
  {
    "answer": "張作霖爆殺事件",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1928年6月に関東軍により殺害された奉天軍閥の指導者に起きた事件は何か。"
  },
  {
    "answer": "張学良",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "張作霖の長男で、父の死後に満洲の実権を握った軍閥指導者は誰か。"
  },
  {
    "answer": "紅軍",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "中国共産党が組織した軍隊で、後に人民解放軍の前身となった武装組織は何か。"
  },
  {
    "answer": "瑞金",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1931年に中国共産党の根拠地が置かれた江西省南部の都市は何か。"
  },
  {
    "answer": "中華ソヴィエト共和国臨時政府",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "1931年11月に瑞金で樹立された中国共産党による政権は何か。"
  },
  {
    "answer": "毛沢東",
    "category": "南京国民政府の成立と共産党",
    "chapter": "16",
    "number": "139",
    "question": "中華ソヴィエト共和国臨時政府の主席となり、中国共産党の指導者となった人物は誰か。"
  },
  {
    "answer": "1919年インド統治法",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "第一次世界大戦後、イギリスが制定したインド統治制度改革法で、州政府に限定的自治を認めたものは何か。"
  },
  {
    "answer": "ローラット法",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1919年にインドで制定され、令状なしの逮捕・拘禁を可能にした弾圧法は何か。"
  },
  {
    "answer": "アムリットサール事件",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1919年4月13日にパンジャーブ州で発生したイギリス軍による民衆虐殺事件は何か。"
  },
  {
    "answer": "国民会議派",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1885年に設立され、インド独立運動の中心的役割を果たした政治組織は何か。"
  },
  {
    "answer": "ガンディー",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "「インド独立の父」と呼ばれ、非暴力・不服従の独立運動を指導した人物は誰か。"
  },
  {
    "answer": "非協力運動",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1920年にガンディーが開始した、イギリス支配への平和的抵抗運動は何か。"
  },
  {
    "answer": "全インド＝ムスリム連盟",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1906年に設立された、インドのイスラーム教徒による政治組織は何か。"
  },
  {
    "answer": "ジンナー",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "全インド＝ムスリム連盟の指導者で、後にパキスタンの建国者となった人物は誰か。"
  },
  {
    "answer": "パキスタン",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "ジンナーが提唱した、インドのイスラム教徒による分離独立国家は何か。"
  },
  {
    "answer": "ネルー",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "国民会議派の指導者で、初代インド首相となった政治家は誰か。"
  },
  {
    "answer": "プールナ＝スワラージ",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1929年にネルーが国民会議派で決議した、インドの完全独立を意味する概念は何か。"
  },
  {
    "answer": "英印円卓会議",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1930年代にインドの憲政改革を話し合うためロンドンで開催された会議は何か。"
  },
  {
    "answer": "1935年インド統治法",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "非暴力・不服従運動激化に対応し、イギリスがインドの自治を段階的に進めるため制定した法律の名称は何か。"
  },
  {
    "answer": "インドネシア共産党",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1920年に東南アジアで最初に設立された共産主義政党は何か。"
  },
  {
    "answer": "インドネシア国民党",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1927年にスカルノらによって結成されたインドネシアの民族主義政党は何か。"
  },
  {
    "answer": "スカルノ",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "インドネシア独立の父と呼ばれ、初代大統領となった民族主義運動の指導者は誰か。"
  },
  {
    "answer": "ホー＝チ＝ミン",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "本名をグエン＝シン＝クンといい、ベトナム独立運動の指導者となった人物は誰か。"
  },
  {
    "answer": "インドシナ共産党",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1930年にホー＝チ＝ミンにより結成されたベトナムの政党は何か。"
  },
  {
    "answer": "タキン党",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1930年代にビルマで結成された、反英独立運動を展開した政治組織は何か。"
  },
  {
    "answer": "アウン＝サン",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "タキン党の指導者で、ビルマ独立運動の中心人物となった政治家は誰か。"
  },
  {
    "answer": "独立準備政府",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1935年、アメリカの独立法に基づき、10年後のフィリピン完全独立を目標に発足した自治政府の名称は何か。"
  },
  {
    "answer": "タイ立憲革命",
    "category": "インド・東南アジアの民族運動②",
    "chapter": "16",
    "number": "140",
    "question": "1932年に絶対王政を打倒し、立憲君主制を樹立したタイの政治変革は何か。"
  },
  {
    "answer": "トルコ革命",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "第一次世界大戦後のオスマン帝国で発生した、ムスタファ＝ケマル指導下の民族革命は何か。"
  },
  {
    "answer": "ムスタファ＝ケマル",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "「現代トルコの父」と呼ばれ、トルコ共和国を建国した軍人・政治家は誰か。"
  },
  {
    "answer": "アタテュルク",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "ムスタファ＝ケマルに1934年に与えられた、「トルコ人の父」を意味する称号は何か。"
  },
  {
    "answer": "トルコ大国民議会",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1920年にアンカラで開設され、トルコ革命の拠点となった議会は何か。"
  },
  {
    "answer": "アンカラ",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "トルコ大国民議会が首都と定めた、アナトリア高原中央部の都市は何か。"
  },
  {
    "answer": "セーヴル条約",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1920年に連合国がオスマン帝国に課した過酷な講和条約は何か。"
  },
  {
    "answer": "スルタン制",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "トルコ革命により1922年に廃止されたオスマン帝国の君主制度は何か。"
  },
  {
    "answer": "ローザンヌ条約",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1923年にトルコと連合国間で締結され、セーヴル条約に代わった平和条約は何か。"
  },
  {
    "answer": "トルコ共和国",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1923年10月29日にムスタファ＝ケマルにより樹立された国家は何か。"
  },
  {
    "answer": "カリフ制",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1924年にトルコ共和国で廃止されたイスラム教の宗教的権威制度は何か。"
  },
  {
    "answer": "ローマ字",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1928年にトルコで導入され、アラビア文字に代わって採用された表記法は何か。"
  },
  {
    "answer": "トルコ民族主義",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "アタテュルクが推進した、トルコ民族の優位性を強調する思想は何か。"
  },
  {
    "answer": "ワフド党",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1918年にエジプトで結成され、イギリスからの独立を求めた民族主義政党は何か。"
  },
  {
    "answer": "1919年革命",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1919年にエジプトで発生した、イギリス支配に対する大規模な民族蜂起は何か。"
  },
  {
    "answer": "エジプト王国",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1922年に成立し、名目上の独立を獲得したエジプトの君主制国家は何か。"
  },
  {
    "answer": "第３次アフガン戦争",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1919年にアフガニスタンがイギリスに対して起こした独立戦争は何か。"
  },
  {
    "answer": "レザー＝ハーン",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1925年にイランでクーデターを起こし、パフレヴィー朝を創始した軍人は誰か。"
  },
  {
    "answer": "パフレヴィー朝",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1925年にレザー＝ハーンが創始した、イランの近代化を推進した王朝は何か。"
  },
  {
    "answer": "イラン",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1935年にペルシアから改称された、西アジアの立憲君主制国家は何か。"
  },
  {
    "answer": "ヒジャーズ王国",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "第一次世界大戦中にハーシム家のフセインが樹立したアラビア半島西部の王国は何か。"
  },
  {
    "answer": "フセイン（フサイン）",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "ヒジャーズ王国の初代国王で、アラブ大反乱を指導したハーシム家の人物は誰か。"
  },
  {
    "answer": "イブン＝サウード",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1924年にヒジャーズ王国を滅ぼし、アラビア半島の大部分を統一した部族長は誰か。"
  },
  {
    "answer": "サウジアラビア王国",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1932年にイブン＝サウードが、ワッハーブ派イスラム教を国教とする形で成立した、現在まで続く中東の王国は何か。"
  },
  {
    "answer": "シオニズム運動",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "19世紀末にヨーロッパで始まった、パレスチナへのユダヤ人国家建設を目指す運動は何か。"
  },
  {
    "answer": "パン＝アフリカニズム",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "アフリカ系住民の連帯と権利向上を目指す20世紀初頭の国際的思想運動は何か。"
  },
  {
    "answer": "パン＝アフリカ会議",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1919年にパリで第1回が開催された、アフリカ系住民の国際会議は何か。"
  },
  {
    "answer": "アフリカ民族会議（ANC）",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "1912年に南アフリカで設立され、アパルトヘイト撤廃を目指した黒人政治組織は何か。"
  },
  {
    "answer": "デュボイス",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "アメリカの黒人知識人で、パン＝アフリカ会議の提唱者となった社会学者は誰か。"
  },
  {
    "answer": "ンクルマ（エンクルマ）",
    "category": "西アジア・アフリカの民族運動",
    "chapter": "16",
    "number": "141",
    "question": "ガーナ独立の父と呼ばれ、パン＝アフリカ主義を実践した政治家は誰か。"
  },
  {
    "answer": "暗黒の木曜日",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1929年10月24日にニューヨーク株式市場で株価が大暴落した日を何と呼ぶか。"
  },
  {
    "answer": "ウォール街",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1929年の株価大暴落が起きた、ニューヨークの金融街を何と呼ぶか。"
  },
  {
    "answer": "フーヴァー＝モラトリアム",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1931年にアメリカ大統領が提案した、戦債・賠償の１年間支払い停止を何と呼ぶか。"
  },
  {
    "answer": "マクドナルド",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1929年から35年にかけてイギリス労働党内閣・挙国一致内閣を率いた首相は誰か。"
  },
  {
    "answer": "失業保険の削減",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "第２次マクドナルド内閣が労働党から除名されるきっかけとなった政策は何か。"
  },
  {
    "answer": "金本位制",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "世界恐慌により各国が相次いで離脱した、金と通貨の交換を保証する制度は何か。"
  },
  {
    "answer": "オタワ連邦会議",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1932年にイギリス連邦諸国が開催した、特恵関税制度を決定した会議は何か。"
  },
  {
    "answer": "スターリング＝ブロック（ポンド＝ブロック）",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "イギリスが世界恐慌対策として構築したブロック経済圏を何と呼ぶか。"
  },
  {
    "answer": "フラン＝ブロック",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "フランスが世界恐慌対策として構築したブロック経済圏を何と呼ぶか。"
  },
  {
    "answer": "ニューディール（新規まき直し）",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1933年にアメリカで開始された、大恐慌克服のための一連の政策を何と呼ぶか。"
  },
  {
    "answer": "フランクリン＝ローズヴェルト",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "ニューディールを推進した、アメリカ第32代大統領は誰か。"
  },
  {
    "answer": "農業調整法（AAA)",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "ニューディールで制定された、農業生産調整と農民保護を目的とする法律は何か。"
  },
  {
    "answer": "全国産業復興法（NIRA）",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "ニューディールで制定された、労働者の権利保護と経済復興を目的とする法律は何か。"
  },
  {
    "answer": "テネシー川流域開発公社（TVA)",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "ニューディールで設立された、総合開発を行う公社の代表例は何か。"
  },
  {
    "answer": "ワグナー法",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1935年に制定された、労働者の団結権と団体交渉権を保障したアメリカの法律は何か。"
  },
  {
    "answer": "産業別組織会議（CIO)",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "ワグナー法制定後に結成された、非熟練労働者による全国組織は何か。"
  },
  {
    "answer": "善隣外交",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "1930年代にアメリカが推進した、ラテンアメリカ諸国との協調外交政策は何か。"
  },
  {
    "answer": "プラット条項",
    "category": "世界恐慌",
    "chapter": "17",
    "number": "142",
    "question": "善隣外交の一環として1934年にアメリカが廃止した、キューバ干渉権を定めた条項は何か。"
  },
  {
    "answer": "全体主義",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "個人の自由を抑圧し、国家や特定のイデオロギーのもとで国民生活の全てを統制しようとする政治体制や思想を何と呼ぶか。"
  },
  {
    "answer": "ヒトラー",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "1933年にドイツの首相となり、ナチ独裁体制を築いた政治家は誰か。"
  },
  {
    "answer": "国民社会主義ドイツ労働者党（国家社会主義ドイツ労働者党）",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ヒトラーが率いた、ドイツの極右政党の正式名称は何か。"
  },
  {
    "answer": "親衛隊（SS）",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "黒い制服を着用した、ナチ党の準軍事組織は何か。"
  },
  {
    "answer": "ミュンヘン一揆",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "1923年にヒトラーが起こした、バイエルン政府転覆未遂事件は何か。"
  },
  {
    "answer": "ヒンデンブルク",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ヒトラーを首相に任命した、ドイツ共和国第２代大統領は誰か。"
  },
  {
    "answer": "国会議事堂放火事件",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "1933年2月にベルリンで発生した、ナチ党が政敵弾圧に利用した事件は何か。"
  },
  {
    "answer": "全権委任法",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "国会議事堂放火事件後に制定された、内閣に立法権を与えたドイツの法律は何か。"
  },
  {
    "answer": "ゲシュタポ",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ナチ体制下でユダヤ人迫害や政治弾圧を行った、秘密国家警察を何と呼ぶか。"
  },
  {
    "answer": "総統（フューラー）",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "1934年にヒトラーが獲得した、国家元首と政府首班を兼ねる地位を何と呼ぶか。"
  },
  {
    "answer": "アウトバーン",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ナチス＝ドイツが建設した、失業対策も兼ねた高速道路網を何と呼ぶか。"
  },
  {
    "answer": "ユダヤ人",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ナチス＝ドイツの迫害対象となった、セム系の民族は何か。"
  },
  {
    "answer": "アインシュタイン",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ナチスの迫害を逃れてアメリカに亡命した、ドイツ系ユダヤ人の物理学者は誰か。"
  },
  {
    "answer": "トーマス＝マン",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "ナチスの迫害を逃れてアメリカに亡命した、ドイツの代表的作家は誰か。"
  },
  {
    "answer": "スターリン憲法",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "1936年にソ連で制定された、社会主義の勝利を宣言した憲法を何と呼ぶか。"
  },
  {
    "answer": "コミンテルン第７回大会",
    "category": "ナチス＝ドイツ/スターリン体制",
    "chapter": "17",
    "number": "143",
    "question": "1935年に開催された、反ファシズム人民戦線を決議した国際会議は何か。"
  },
  {
    "answer": "幣原喜重郎",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1920年代に協調外交を推進した、日本の外務大臣は誰か。"
  },
  {
    "answer": "満洲事変",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1931～1933年に発生した、日中間の武力衝突のことを何と呼ぶか。"
  },
  {
    "answer": "柳条湖事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "満洲事変の発端となった、南満洲鉄道の爆破事件を何と呼ぶか。"
  },
  {
    "answer": "リットン調査団",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "満洲事変を調査するため国際連盟が派遣した調査団を何と呼ぶか。"
  },
  {
    "answer": "満洲国",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1932年に関東軍が樹立した、中国東北部の傀儡国家は何か。"
  },
  {
    "answer": "溥儀",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "満洲国執政、のちに皇帝に即位した人物は誰か。"
  },
  {
    "answer": "五・一五事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1932年に起きた、犬養毅首相暗殺事件を何と呼ぶか。"
  },
  {
    "answer": "二・二六事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1936年に起きた、青年将校による反乱事件を何と呼ぶか。"
  },
  {
    "answer": "長征",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1934年から36年にかけて中国共産党が行った、大移動を何と呼ぶか。"
  },
  {
    "answer": "延安",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "長征の終着点となった、中国共産党の根拠地はどこか。"
  },
  {
    "answer": "八・一宣言",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1935年に中国共産党が発表した、抗日統一戦線結成を呼びかけた宣言は何か。"
  },
  {
    "answer": "西安事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1936年12月に張学良が蔣介石を監禁し、抗日を迫った事件を何と呼ぶか。"
  },
  {
    "answer": "盧溝橋事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1937年7月7日に起きた、日中全面戦争の発端となる衝突事件は何か。"
  },
  {
    "answer": "第２次国共合作",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "西安事件をきっかけに1937年に成立した、国民党・共産党の抗日協力体制を何と呼ぶか。"
  },
  {
    "answer": "南京事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1937年12月に日本軍が起こした、中国の首都での虐殺事件を何と呼ぶか。"
  },
  {
    "answer": "東亜新秩序",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1938年に近衛文麿首相が発表した、日本のアジア支配構想を何と呼ぶか。"
  },
  {
    "answer": "ノモンハン事件",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "1939年に日ソ間で起きた、満洲とモンゴルの国境紛争を何と呼ぶか。"
  },
  {
    "answer": "重慶",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "日中戦争中に中華民国政府が首都とした、長江上流の都市はどこか。"
  },
  {
    "answer": "南京→武漢→重慶",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "日中戦争中の中華民国の首都は、どこからどこを経由してどこに移転したか。"
  },
  {
    "answer": "汪兆銘",
    "category": "満洲事変と日中戦争",
    "chapter": "17",
    "number": "144",
    "question": "日中戦争中に日本と協力した、中華民国政府要人は誰か。"
  },
  {
    "answer": "ザール",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1935年、住民投票によりドイツに復帰した、フランス国境の炭田地帯はどこか。"
  },
  {
    "answer": "再軍備宣言",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1935年にヒトラーが発表した、ヴェルサイユ条約の軍事条項破棄宣言を何と呼ぶか。"
  },
  {
    "answer": "ラインラント",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1936年にドイツ軍が進駐した、フランス国境の非武装地帯はどこか。"
  },
  {
    "answer": "エチオピア",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1935年にイタリアが侵攻し、翌年併合したアフリカの帝国はどこか。"
  },
  {
    "answer": "仏ソ相互援助条約",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1935年にソ連とフランスが締結した、ドイツ牽制を目的とする軍事協定は何か。"
  },
  {
    "answer": "英独海軍協定",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1935年にイギリスとドイツが締結した、海軍力制限に関する協定は何か。"
  },
  {
    "answer": "ブルム",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "フランス人民戦線内閣の首相を務めた、社会党の政治家は誰か。"
  },
  {
    "answer": "フランコ",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1936年にスペインで軍事クーデタを起こし、内戦を引き起こした軍人は誰か。"
  },
  {
    "answer": "アサーニャ",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "スペイン内戦で人民戦線政府の大統領を務めた、共和派の政治家は誰か。"
  },
  {
    "answer": "不干渉政策",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "スペイン内戦に対して英仏などが採用した、軍事介入を避ける外交方針は何か。"
  },
  {
    "answer": "ゲルニカ",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "スペイン内戦でドイツ軍が爆撃し、ピカソが描いた絵画の題材となった町はどこか。"
  },
  {
    "answer": "ヘミングウェー",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "スペイン内戦を体験し、『誰がために鐘は鳴る』を執筆したアメリカの作家は誰か。"
  },
  {
    "answer": "マルロー",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "スペイン内戦を体験し、『希望』を執筆したフランスの作家は誰か。"
  },
  {
    "answer": "オーウェル",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "スペイン内戦を体験し、『カタロニア讃歌』を執筆したイギリスの作家は誰か。"
  },
  {
    "answer": "ベルリン＝ローマ枢軸",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1936年にドイツとイタリアが結成した、ファシズム協力体制を何と呼ぶか。"
  },
  {
    "answer": "三国防共協定",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1936年にドイツ・日本・イタリアが締結した、反共産主義を掲げる協定は何か。"
  },
  {
    "answer": "オーストリア",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1938年にドイツに併合された、ヒトラーの出身国はどこか。"
  },
  {
    "answer": "ミュンヘン会談",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1938年9月に開催された、ズデーテン問題を協議した４か国首脳会議は何か。"
  },
  {
    "answer": "ズデーテン地方",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "ミュンヘン会談でドイツへの割譲が決定された、チェコ西部の地域はどこか。"
  },
  {
    "answer": "宥和政策",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "ミュンヘン会談に象徴される、ヒトラーの要求を受け入れる英仏の外交政策は何か。"
  },
  {
    "answer": "ネヴィル＝チェンバレン",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "宥和政策を推進した、イギリスの保守党首相は誰か。"
  },
  {
    "answer": "ダラディエ",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "ミュンヘン会談でフランス代表を務めた首相は誰か。"
  },
  {
    "answer": "チェコスロヴァキア",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "ミュンヘン会談後、ドイツによって解体された国はどこか。"
  },
  {
    "answer": "ダンツィヒ",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "ドイツがポーランドに対して返還を要求した、バルト海に面する自由都市はどこか。"
  },
  {
    "answer": "ポーランド回廊",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "ドイツがポーランドに対して鉄道敷設権を要求した、バルト海に至る回廊地帯を何と呼ぶか。"
  },
  {
    "answer": "アルバニア",
    "category": "ファシズム諸国の攻勢と枢軸の形成",
    "chapter": "17",
    "number": "145",
    "question": "1939年4月にイタリアが併合した、バルカン半島の国はどこか。"
  },
  {
    "answer": "独ソ不可侵条約",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1939年8月にドイツとソ連が締結した、相互不侵犯を約束した条約は何か。"
  },
  {
    "answer": "ソ連＝フィンランド戦争（冬戦争）",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1939年から40年にかけて戦われた、ソ連とフィンランドの戦争を何と呼ぶか。"
  },
  {
    "answer": "チャーチル",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1940年にイギリス首相となり、対独戦を指導した保守党の政治家は誰か。"
  },
  {
    "answer": "自由フランス政府",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ドイツ占領下のフランスにおいて、ロンドンで結成された、抗戦を続ける亡命政府を何と呼ぶか。"
  },
  {
    "answer": "ド＝ゴール",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "自由フランス政府を率いて抗戦を指導した、フランスの軍人・政治家は誰か。"
  },
  {
    "answer": "レジスタンス運動",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "第二次世界大戦中にヨーロッパ各地で展開された、対独抵抗運動を何と呼ぶか。"
  },
  {
    "answer": "ヴィシー政府",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ドイツ占領下のフランス南部に成立した、対独協力政権を何と呼ぶか。"
  },
  {
    "answer": "ペタン",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ヴィシー政府の元首を務めた、第１次世界大戦の英雄は誰か。"
  },
  {
    "answer": "エストニア・ラトヴィア・リトアニア",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1940年にソ連に併合された、バルト海沿岸の３つの国はどこか。"
  },
  {
    "answer": "武器貸与法",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1941年にアメリカが制定した、連合国への軍事援助を可能にした法律は何か。"
  },
  {
    "answer": "ティトー",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ユーゴスラヴィアで反独パルチザン闘争を指導した、共産党の指導者は誰か。"
  },
  {
    "answer": "パルチザン",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ティトーが指導した、ユーゴスラヴィアの対独武装抵抗勢力を何と呼ぶか。"
  },
  {
    "answer": "日ソ中立条約",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1941年4月に日本とソ連が締結した、相互不侵犯を約束した条約は何か。"
  },
  {
    "answer": "大西洋上会談",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1941年8月にチャーチルとF.ローズヴェルトが行った首脳会談は何か。"
  },
  {
    "answer": "大西洋憲章",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "大西洋上会談で発表された、戦後世界の原則を示した共同宣言は何か。"
  },
  {
    "answer": "コミンテルン第７回大会",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "1935年に開催された、反ファシズム人民戦線を決議した国際会議は何か。"
  },
  {
    "answer": "ホロコースト",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ナチス＝ドイツによるユダヤ人大量虐殺を何と呼ぶか。"
  },
  {
    "answer": "アウシュヴィッツ",
    "category": "第二次世界大戦：欧州戦線・独ソ戦",
    "chapter": "17",
    "number": "146",
    "question": "ホロコーストの象徴的存在となった、ポーランドの強制収容所はどこか。"
  },
  {
    "answer": "アジア・太平洋戦争",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1941年12月8日に始まった、日本とアメリカ・イギリスなどとの戦争を何と呼ぶか。"
  },
  {
    "answer": "日独伊三国同盟",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1940年9月に日本が締結した、ドイツ・イタリアとの軍事同盟は何か。"
  },
  {
    "answer": "北部仏印",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "パリ陥落を経て、援蔣ルート遮断のために1940年9月に日本軍が進駐した、東南アジアの地域はどこか。"
  },
  {
    "answer": "日ソ中立条約",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1941年4月に日本とソ連が締結した、相互不侵犯を約束した条約は何か。"
  },
  {
    "answer": "南部仏印",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "アメリカによる対日石油輸出禁止を決定づけた、1941年7月に日本軍が進駐した地域はどこか。"
  },
  {
    "answer": "ABCDライン",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "南部仏印進駐後に形成された、対日経済封鎖網を何と呼ぶか。"
  },
  {
    "answer": "日米交渉",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1941年に行われた、日米開戦回避を目指す外交交渉を何と呼ぶか。"
  },
  {
    "answer": "ハル＝ノート",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1941年11月にアメリカが提示した、対日強硬要求を記した文書は何か。"
  },
  {
    "answer": "パールハーバー（真珠湾）",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1941年12月7日に日本軍が奇襲攻撃した、ハワイのアメリカ海軍基地はどこか。"
  },
  {
    "answer": "大東亜共栄圏",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "日本が提唱した、東アジア・東南アジアの広域経済圏構想を何と呼ぶか。"
  },
  {
    "answer": "皇民化政策",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "日本が植民地で推進した、日本人化を目指す同化政策を何と呼ぶか。"
  },
  {
    "answer": "創氏改名",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "皇民化政策の一環として朝鮮で実施された、姓名の変更を何と呼ぶか。"
  },
  {
    "answer": "ミッドウェー海戦",
    "category": "第二次世界大戦：アジア・太平洋戦争",
    "chapter": "17",
    "number": "147",
    "question": "1942年6月にアメリカ軍が日本軍を破った、太平洋戦争の転換点となる海戦は何か。"
  },
  {
    "answer": "スターリングラードの戦い",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1942年から43年にかけて行われた、独ソ戦の転換点となったソ連南部での攻防戦は何か。"
  },
  {
    "answer": "バドリオ",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1943年にムッソリーニ政権を倒してイタリアの首相となった元帥は誰か。"
  },
  {
    "answer": "カイロ会談",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1943年11月に開催された、連合国首脳による初の３か国会談は何か。"
  },
  {
    "answer": "フランクリン＝ローズヴェルト、チャーチル、蔣介石",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "カイロ会談に参加した３人の首脳は誰か。"
  },
  {
    "answer": "テヘラン会談",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1943年11月から12月に開催された、連合国の戦後構想を協議した会談は何か。"
  },
  {
    "answer": "フランクリン＝ローズヴェルト、チャーチル、スターリン",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "テヘラン会談に参加した３人の首脳は誰か。"
  },
  {
    "answer": "ノルマンディー上陸作戦",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1944年6月6日に実行された、連合軍によるヨーロッパ第２戦線の開設作戦は何か。"
  },
  {
    "answer": "アイゼンハワー",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "ノルマンディー上陸作戦の最高司令官を務めた、アメリカの将軍は誰か。"
  },
  {
    "answer": "ヤルタ会談",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1945年2月に開催された、戦後処理を協議した３か国首脳会談は何か。"
  },
  {
    "answer": "フランクリン＝ローズヴェルト、チャーチル、スターリン",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "ヤルタ会談に参加した３人の首脳は誰か。"
  },
  {
    "answer": "ポツダム会談",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1945年7月から8月に開催された、敗戦国処理を協議した３か国首脳会談は何か。"
  },
  {
    "answer": "チャーチル(→アトリー)、トルーマン、スターリン",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "ポツダム会談に参加した首脳は誰か。"
  },
  {
    "answer": "ポツダム宣言",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "ポツダム会談で発表された、日本に無条件降伏を求めた宣言は何か。"
  },
  {
    "answer": "広島",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1945年8月6日に史上初の原子爆弾が投下された、日本の都市はどこか。"
  },
  {
    "answer": "長崎",
    "category": "枢軸諸国の敗北",
    "chapter": "17",
    "number": "148",
    "question": "1945年8月9日に２発目の原子爆弾が投下された、日本の都市はどこか。"
  },
  {
    "answer": "大西洋憲章",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "1941年、米英首脳が会談し、戦後の平和構想を示した宣言は何か。"
  },
  {
    "answer": "ダンバートン＝オークス会議",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "1944年に開かれた、国際連合設立の骨子を決定した会議は何か。"
  },
  {
    "answer": "サンフランシスコ会議",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "1945年、国際連合憲章が採択された会議は何か。"
  },
  {
    "answer": "国際連合憲章",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "国際連合の目的、組織、活動の基本を定めた文書は何か。"
  },
  {
    "answer": "総会",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "国際連合の全加盟国によって構成される最高機関は何か。"
  },
  {
    "answer": "安全保障理事会",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "国際平和と安全の維持に主要な責任を負う国連の機関は何か。"
  },
  {
    "answer": "拒否権",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "安保理の常任理事国に認められている、決議を否決する権利は何か。"
  },
  {
    "answer": "アメリカ、イギリス、フランス、中華民国、ソ連",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "国際連合の安全保障理事会の常任理事国５か国（創設時）はどこか。"
  },
  {
    "answer": "ユネスコ(国際連合教育科学文化機関）",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "国際連合で、教育・科学・文化の協力を目的とする専門機関は何か。"
  },
  {
    "answer": "国際労働機関（ILO)",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "労働条件の改善と地位向上を目的として設立された国際連合の専門機関は何か。"
  },
  {
    "answer": "世界保健機関（WHO）",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "世界の人々の健康水準向上を目的として設立された国際連合の専門機関は何か。"
  },
  {
    "answer": "ブレトン＝ウッズ体制",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "1944年の会議で、戦後の国際通貨体制を確立した体制を何と呼ぶか。"
  },
  {
    "answer": "IBRD（国際復興開発銀行）",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "第二次世界大戦後の復興資金援助を目的として設立され、のちに発展途上国の開発援助を行うようになった機関は何か。"
  },
  {
    "answer": "IMF（国際通貨基金）",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "為替の安定と国際金融協力を目的として設立された機関は何か。"
  },
  {
    "answer": "基軸通貨",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "国際間の取引や決済に中心的に利用される通貨を何と呼ぶか。"
  },
  {
    "answer": "GATT(関税と貿易に関する一般協定)",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "自由で多角的な貿易の発展を目指し締結された協定は何か。"
  },
  {
    "answer": "ニュルンベルク",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "第二次世界大戦後、ドイツの戦争犯罪人を裁いた国際軍事裁判はどこで行われたか。"
  },
  {
    "answer": "マッカーサー",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "日本の戦後処理のために、GHQの最高司令官として来日した人物は誰か。"
  },
  {
    "answer": "極東国際軍事裁判",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "第二次世界大戦後、日本の戦争犯罪人を裁いた国際軍事裁判は何か。"
  },
  {
    "answer": "東条英機（東條英機）",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "極東国際軍事裁判でＡ級戦犯として処刑された日本の元首相は誰か。"
  },
  {
    "answer": "日本国憲法",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "1946年11月3日に公布され、翌年施行された日本の憲法は何か。"
  },
  {
    "answer": "パリ講和条約",
    "category": "戦後国際秩序の形成",
    "chapter": "17",
    "number": "150",
    "question": "1947年に枢軸国（日独除く）と連合国の間で締結された条約は何か。"
  },
  {
    "answer": "アトリー",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "戦後のイギリスで、重要産業の国有化や社会福祉の充実を推進した労働党の首相は誰か。"
  },
  {
    "answer": "ゆりかごから墓場まで",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "アトリー内閣のもとで社会福祉制度の充実を目指し、掲げられたスローガンは何か。"
  },
  {
    "answer": "アイルランド",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1949年にイギリス連邦から正式に離脱し、エールから名称を変更した国はどこか。"
  },
  {
    "answer": "第四共和政",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "第二次世界大戦後の1946年10月に発足した、議会の権限が強いことが特徴である、フランスの政体は何か。"
  },
  {
    "answer": "人民民主主義",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "大戦末期以降、ソ連軍の進駐により東欧諸国に構築された、ソ連の影響下の政治体制は何か。"
  },
  {
    "answer": "鉄のカーテン",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1946年にチャーチルが演説で、ソ連による勢力圏の形成を批判して用いた言葉は何か。"
  },
  {
    "answer": "トルーマン＝ドクトリン",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1947年、ギリシアとトルコの共産化阻止のために経済・軍事援助を表明した宣言は何か。"
  },
  {
    "answer": "封じ込め政策",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "トルーマン＝ドクトリンの意義である、ソ連の共産主義を一定の範囲に押し止める政策は何か。"
  },
  {
    "answer": "マーシャル＝プラン",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "ヨーロッパの経済援助を提案し、共産主義化の防止を図った米国務長官による計画は何か。"
  },
  {
    "answer": "コミンフォルム（共産党情報局）",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "マーシャル＝プランに対抗し、ソ連など9カ国の共産党で結成された情報局を何というか。"
  },
  {
    "answer": "パルチザン",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "第二次世界大戦期、ティトーが率いてナチスなどに抵抗した武装組織・運動を何というか。"
  },
  {
    "answer": "ユーゴスラヴィア",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "独自の社会主義路線を敷いたことで、1948年にコミンフォルムから除名された国はどこか。"
  },
  {
    "answer": "チェコスロヴァキア",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1948年、マーシャル＝プラン受け入れを巡る内部対立から共産党政権が成立した国はどこか。"
  },
  {
    "answer": "西ヨーロッパ連合条約",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "チェコスロヴァキアの政変を受け、英仏・ベネルクス三国が結成したNATOの雛形は何か。"
  },
  {
    "answer": "コメコン",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "マーシャル＝プランに対抗してソ連と東欧諸国が結成した、経済相互援助会議の略称は何か。"
  },
  {
    "answer": "北大西洋条約機構(NATO)",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1949年に成立した、アメリカを中心とする西側陣営の軍事同盟・集団安全保障機構は何か。"
  },
  {
    "answer": "ワルシャワ条約機構",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "西ドイツの再軍備に対抗し、1955年に東側陣営が結成した軍事同盟を何というか。"
  },
  {
    "answer": "ベルリン封鎖",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "ソ連が西ベルリンへの交通遮断と電力供給停止を実行した、1948年開始の事件は何か。"
  },
  {
    "answer": "ドイツ連邦共和国",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1949年5月、米英仏の占領地域を統合して成立した国家（西ドイツ）の正式名称は何か。"
  },
  {
    "answer": "ボン",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1949年に成立したドイツ連邦共和国において、暫定的に首都とされた都市はどこか。"
  },
  {
    "answer": "アデナウアー",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "西ドイツの初代首相として「経済の奇跡」と呼ばれる復興を成し遂げた人物は誰か。"
  },
  {
    "answer": "キリスト教民主同盟",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "西ドイツ首相アデナウアーが率いた、経済復興を主導した中道右派政党は何というか。"
  },
  {
    "answer": "パリ協定",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1954年に調印され、西ドイツの主権回復と再軍備を承認した協定は何か。"
  },
  {
    "answer": "ドイツ民主共和国",
    "category": "米ソ冷戦の始まり",
    "chapter": "17",
    "number": "151",
    "question": "1949年10月、ソ連占領地区で社会主義統一党の一党独裁体制のもと成立した国はどこか。"
  },
  {
    "answer": "南京",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1949年、国共内戦で人民解放軍が占領した中華民国の国民政府の首都はどこか。"
  },
  {
    "answer": "毛沢東・周恩来",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1949年に建国された中華人民共和国において、国家主席と首相に就任したのはそれぞれ誰か。"
  },
  {
    "answer": "中ソ友好同盟相互援助条約",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1950年、中華人民共和国とソ連との間で結成された軍事同盟の名称は何か。"
  },
  {
    "answer": "第１次五カ年計画",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1953年から開始された、中国におけるソ連流の重工業優先の経済建設を何というか。"
  },
  {
    "answer": "カイロ会談",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "朝鮮半島の戦後処理方針として、朝鮮の独立が初めて明文化された1943年の会談は何か。"
  },
  {
    "answer": "北緯38度線",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1945年の日本の敗戦後、朝鮮半島を米ソが分割占領するために引かれた境界線はどこか。"
  },
  {
    "answer": "朝鮮民主主義人民共和国",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1948年9月、朝鮮半島北部に平壌を首都として樹立された国家の正式名称は何か。"
  },
  {
    "answer": "金日成",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "建国された北朝鮮の首相となり、最高指導者として国家を率いた人物は誰か。"
  },
  {
    "answer": "大韓民国",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1948年8月、朝鮮半島南部に漢城を首都として樹立された国家の正式名称は何か。"
  },
  {
    "answer": "李承晩",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "韓国の初代大統領に就任した、反共主義を掲げる指導者は誰か。"
  },
  {
    "answer": "釜山",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1950年に勃発した朝鮮戦争において、北朝鮮軍の進撃により韓国側が追い詰められた拠点都市はどこか。"
  },
  {
    "answer": "国連軍",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "朝鮮戦争に際し、ソ連の欠席に乗じて安全保障理事会が派遣を決定した軍隊は何か。"
  },
  {
    "answer": "人民義勇軍",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "国連軍の反撃に対抗するため、中国から朝鮮半島に派遣された軍隊の名称は何か。"
  },
  {
    "answer": "板門店",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1953年、朝鮮戦争の休戦協定が調印された北緯38度線付近の場所はどこか。"
  },
  {
    "answer": "警察予備隊",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "朝鮮戦争の勃発を受け、占領下の日本で国内の治安維持を目的に創設された組織は何か。"
  },
  {
    "answer": "朝鮮戦争特需",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "朝鮮戦争に関連して、日本に発生した米軍への物資供給による膨大な需要を何というか。"
  },
  {
    "answer": "サンフランシスコ平和条約",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1951年に日本と48カ国の間で調印され、翌年日本の主権が回復した講和条約は何か。"
  },
  {
    "answer": "日米安全保障条約",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "サンフランシスコ平和条約と同日に調印された、日本の安全保障と米軍駐留を定めた条約は何か。"
  },
  {
    "answer": "日ソ共同宣言",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1956年に調印され、日本とソ連の国交回復や日本の国連加盟が実現した宣言は何か。"
  },
  {
    "answer": "OAS（米州機構）",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1948年に結成された、アメリカとラテンアメリカ諸国の反共軍事・経済協力機構は何か。"
  },
  {
    "answer": "ANZUS",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1951年にオーストラリア、ニュージーランド、アメリカが結んだ安全保障条約は何か。"
  },
  {
    "answer": "巻き返し政策",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "アイゼンハワー政権下の米国が掲げた、共産圏を解放しようとする積極的な外交方針は何か。"
  },
  {
    "answer": "SEATO（東南アジア条約機構）",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1954年に東南アジアへの共産主義拡大を阻止する目的で結成された反共軍事同盟は何か。"
  },
  {
    "answer": "METO（中東条約機構）",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1955年にイギリス主導で中東に形成された、ソ連への防壁としての軍事同盟を何というか。"
  },
  {
    "answer": "CENTO",
    "category": "東アジアの分断と対ソ包囲網",
    "chapter": "17",
    "number": "152",
    "question": "1959年にイラクが脱退した後、バグダード条約機構が改称して成立した組織は何か。"
  },
  {
    "answer": "雪どけ",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "スターリンの死後にソ連社会や国際関係で見られた、緊張緩和の様子を表現した言葉は何か。"
  },
  {
    "answer": "1953年",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "東西の緊張緩和が進むきっかけとなった、ソ連の最高指導者スターリンが死去したのは何年か。"
  },
  {
    "answer": "ジュネーヴ４巨頭会談",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1955年に米英仏ソの首脳が集まり、国際紛争を話し合いで解決する機運を高めた会談は何か。"
  },
  {
    "answer": "フルシチョフ",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1956年にスターリン批判を行い、西側との平和共存路線を打ち出したソ連の第一書記は誰か。"
  },
  {
    "answer": "平和共存",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "フルシチョフが唱えた、社会主義と資本主義の異なる体制が武力衝突を避け共存する路線は何か。"
  },
  {
    "answer": "コミンフォルム",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1956年、東西の緊張緩和が進む中で解散が決定された組織は何か。"
  },
  {
    "answer": "ポズナニ",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1956年にポーランドの労働者らが生活苦や自由の抑圧に不満を抱いて起こした反政府暴動は何か。"
  },
  {
    "answer": "ゴムウカ",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "ポズナニ暴動後の混乱を収拾し、ソ連の介入を回避して自由化を推進したポーランドの指導者は誰か。"
  },
  {
    "answer": "ナジ＝イムレ",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "ハンガリー事件で首相に就任し、ワルシャワ条約機構の脱退を表明したが処刑された人物は誰か。"
  },
  {
    "answer": "ベルリンの壁",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1961年、東ドイツからの人口流出を防ぐために東ベルリンの周囲に建設された遮断物は何か。"
  },
  {
    "answer": "ICBM（大陸間弾道ミサイル）",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1957年にソ連が開発に成功した、核弾頭を搭載して他大陸を攻撃できる長距離ミサイルは何か。"
  },
  {
    "answer": "スプートニク１号",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1957年にソ連が打ち上げに成功した、世界初の人工衛星の名称は何というか。"
  },
  {
    "answer": "ガガーリン",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1961年に「地球は青かった」との言葉を残したとされる、世界初の有人宇宙飛行に成功した人物は誰か。"
  },
  {
    "answer": "第三世界",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "冷戦下で米ソのいずれの陣営にも属さず、中立や反植民地主義を掲げた新興諸国を何と呼ぶか。"
  },
  {
    "answer": "ネルー・周恩来",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1954年に会談を行い、平和五原則を連名で発表したインドと中国の指導者はそれぞれ誰か。"
  },
  {
    "answer": "平和五原則",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1954年のネルー・周恩来会談で示された、領土の尊重や内政不干渉などからなる5原則は何か。"
  },
  {
    "answer": "アジア＝アフリカ会議（バンドン会議）",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1955年にインドネシアで開催され、29カ国が参加して反植民地主義を打ち出した会議は何か。"
  },
  {
    "answer": "平和十原則",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "アジア＝アフリカ会議で採択された、基本的人権の尊重や自衛権の尊重などを含む宣言は何か。"
  },
  {
    "answer": "非同盟諸国首脳会議",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1961年に非同盟25カ国が参加して開かれた、中立諸国の結束を強めるための首脳会議は何か。"
  },
  {
    "answer": "ベオグラード",
    "category": "雪解け・第三世界の台頭",
    "chapter": "17",
    "number": "153",
    "question": "1961年に第1回非同盟諸国首脳会議が開催された、ユーゴスラヴィアの首都はどこか。"
  },
  {
    "answer": "バティスタ",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "アメリカ資本と結びついて独裁を行った、キューバ革命により打倒された政権の指導者は誰か。"
  },
  {
    "answer": "キューバ革命",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1959年にカストロらが武装闘争によって独裁政権を倒し、新政権を樹立した出来事は何か。"
  },
  {
    "answer": "カストロ",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "キューバ革命を主導し、後に首相や国家評議会議長として社会主義化を推進した人物は誰か。"
  },
  {
    "answer": "ゲバラ",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "アルゼンチン出身の医師で、カストロに協力してキューバ革命を成功させた革命家は誰か。"
  },
  {
    "answer": "キューバ危機",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1962年、ソ連のミサイル基地建設に対し米国の海上封鎖により全面核戦争寸前となった危機は何か。"
  },
  {
    "answer": "ケネディ・フルシチョフ",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1962年のキューバ危機において、対立の末に危機の回避を合意した米ソの首脳はそれぞれ誰か。"
  },
  {
    "answer": "大躍進",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1958年から中国で開始された、生産の飛躍的増大を目指したが失敗に終わった経済建設運動を何というか。"
  },
  {
    "answer": "人民公社",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "大躍進運動期に、農業生産や行政、教育などの機能を統合して全国に組織された地域単位は何か。"
  },
  {
    "answer": "劉少奇",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "毛沢東の後を継いで国家主席となり、経済再建のために調整政策を推進した人物は誰か。"
  },
  {
    "answer": "チベット",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1959年に反乱が勃発し、その後中国の自治区分となったヒマラヤ山脈北麓の地域はどこか。"
  },
  {
    "answer": "ダライ＝ラマ14世",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1959年のチベット反乱の失敗後、インドへ亡命したチベット仏教の最高指導者は誰か。"
  },
  {
    "answer": "新疆ウイグル自治区",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1955年に設置された、中国西北部に位置するウイグル族の自治行政区は何か。"
  },
  {
    "answer": "ダマンスキー島（珍宝島）",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1969年、中ソ両軍による武力衝突事件が発生した、ウスリー川の中州にある島はどこか。"
  },
  {
    "answer": "プロレタリア文化大革命",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "1966年から毛沢東が主導した、資本主義を批判し社会を混乱に陥れた政治闘争を何というか。"
  },
  {
    "answer": "林彪",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "文化大革命期に毛沢東の後継者とされたが、後に失脚し亡命途中に事故死した軍人は誰か。"
  },
  {
    "answer": "劉少奇、鄧小平",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "文化大革命において、資本主義への道を歩む「実権派」として批判され、失脚した指導者は誰か。"
  },
  {
    "answer": "華国鋒",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "毛沢東の死後、首相や党主席として文化大革命を終結させた人物は誰か。"
  },
  {
    "answer": "四人組",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "文化大革命を主導し、毛沢東の死後に逮捕・失脚したグループを何というか。"
  },
  {
    "answer": "江青",
    "category": "キューバ危機・中ソ対立",
    "chapter": "17",
    "number": "154",
    "question": "毛沢東の妻で、四人組の中心人物として文化大革命を急進的に推し進めた人物は誰か。"
  },
  {
    "answer": "インドシナ戦争",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1946年から1954年にかけて展開された、フランスによる再植民地化に抵抗した戦争は何か。"
  },
  {
    "answer": "ベトナム独立同盟（ベトミン）",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "第二次世界大戦中、ホー＝チ＝ミンの指導のもと結成された抗日武装抵抗組織を何というか。"
  },
  {
    "answer": "ホー＝チ＝ミン",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "ベトナム独立同盟を率いて独立運動を主導し、ベトナム民主共和国の初代大統領となったのは誰か。"
  },
  {
    "answer": "ベトナム民主共和国",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1945年9月に独立を宣言した、ハノイを首都とする東南アジア初の社会主義国家はどこか。"
  },
  {
    "answer": "ベトナム国",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "フランスの後援を受け、1949年にベトナム南部に樹立された親仏国家の名称は何か。"
  },
  {
    "answer": "バオダイ",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "フランスによって首班に立てられた、ベトナム民主共和国と対立したベトナム国の主席は誰か。"
  },
  {
    "answer": "ディエンビエンフーの戦い",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1954年にフランス軍がベトミン軍に大敗し、インドシナ戦争休戦の契機となった戦いは何か。"
  },
  {
    "answer": "ジュネーヴ休戦協定",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1954年に締結され、フランス軍の撤退とベトナムの南北一時分断を決定した協定は何か。"
  },
  {
    "answer": "北緯17度線",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1954年のジュネーヴ休戦協定において、ベトナムの南北を分かつ軍事境界線とされたのはどこか。"
  },
  {
    "answer": "SEATO（東南アジア条約機構）",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "アメリカがジュネーヴ休戦協定への調印を拒否し、1954年に結成した反共軍事同盟は何か。"
  },
  {
    "answer": "ベトナム共和国",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1955年にアメリカの支援で南部に樹立された、ベトナム民主共和国と対立した国家はどこか。"
  },
  {
    "answer": "ゴ＝ディン＝ジエム",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "アメリカの支持を受けてベトナム共和国の初代大統領となったが、後に独裁化し倒されたのは誰か。"
  },
  {
    "answer": "ベトナム戦争",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "東西冷戦の代理戦争の様相を呈し、南北に分かれたベトナムで1975年まで続いた戦争は何か。"
  },
  {
    "answer": "南ベトナム解放民族戦線",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1960年、南ベトナムの親米独裁政権を打倒するために結成された反政府勢力の名称は何か。"
  },
  {
    "answer": "北爆",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "トンキン湾事件を理由に、アメリカ空軍が北ベトナムに対して行った大規模な空爆を何というか。"
  },
  {
    "answer": "ジョンソン",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "トンキン湾事件を機に北爆を開始し、ベトナム戦争に本格的な軍事介入を行った米大統領は誰か。"
  },
  {
    "answer": "沖縄",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "ベトナム戦争の米軍基地として利用されたことで批判が高まり、1972年に日本へ返還された地はどこか。"
  },
  {
    "answer": "ベトナム（パリ）和平協定",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1973年に調印され、米軍のベトナムからの完全撤退を定めた和平協定の名称は何か。"
  },
  {
    "answer": "ニクソン",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "ベトナム和平協定を実現させ、米軍のベトナム撤退を完了させた当時のアメリカ大統領は誰か。"
  },
  {
    "answer": "サイゴン",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1975年に解放勢力の猛攻により陥落した、ベトナム共和国（南ベトナム）の首都はどこか。"
  },
  {
    "answer": "ベトナム社会主義共和国",
    "category": "インドシナ戦争とベトナム戦争",
    "chapter": "17",
    "number": "155",
    "question": "1976年に南北ベトナムが統一されて成立した、現在のベトナムの正式名称は何か。"
  },
  {
    "answer": "ブレジネフ",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "フルシチョフ解任後に就任し、アフガン侵攻や軍備拡大を進めてソ連経済を破綻させた人物は誰か。"
  },
  {
    "answer": "ブレジネフ＝ドクトリン（制限主権論）",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "社会主義圏の利益のためには一国の主権制限も容認されるという、ソ連の指導者が唱えた考えは何か。"
  },
  {
    "answer": "デタント",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1970年代に進展した、核軍縮などを通じた米ソ間の緊張緩和をフランス語で何というか。"
  },
  {
    "answer": "ドイツ社会民主党",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "ブラントやシュミットが所属し、東側との和解やECの強化を推進した政党は何か。"
  },
  {
    "answer": "ブラント",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1969年に西ドイツ首相となり、東側諸国との関係改善を図る東方外交を展開した人物は誰か。"
  },
  {
    "answer": "東方外交",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "西ドイツ首相ブラントが推進した、ソ連や東欧諸国との緊張緩和を目指した外交政策は何か。"
  },
  {
    "answer": "オーデル＝ナイセ線",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1945年のポツダム協定で規定された、東ドイツとポーランドの間の境界線を何というか。"
  },
  {
    "answer": "東西ドイツ基本条約",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1972年に調印され、東西ドイツが互いの主権を確認し関係を正常化させた条約は何か。"
  },
  {
    "answer": "全欧安全保障協力会議(CSCE)",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1973年に欧州の緊張緩和を話し合うため、米ソを含む35カ国がヘルシンキに集まった会議は何か。"
  },
  {
    "answer": "ヘルシンキ宣言",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "全欧安全保障協力会議で採択された、主権平等や基本的自由の尊重を象徴する宣言は何か。"
  },
  {
    "answer": "ニクソン",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1972年に米大統領として初めて訪中し、中国を事実上承認して米中関係を改善させたのは誰か。"
  },
  {
    "answer": "アフガニスタン",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1979年にソ連が軍事侵攻を行い、米ソ関係を悪化させ「新冷戦」を招いた国はどこか。"
  },
  {
    "answer": "ゴルバチョフ",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1985年にソ連共産党書記長に就任し、大規模な国内改革や新思考外交を推進した人物は誰か。"
  },
  {
    "answer": "ペレストロイカ",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "ゴルバチョフが推進した、ソ連の政治・経済・社会全般にわたる大規模な改革を何というか。"
  },
  {
    "answer": "グラスノスチ",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "チョルノービリ原発事故を機にゴルバチョフが実施した、情報公開や言論の自由化を何というか。"
  },
  {
    "answer": "チョルノービリ原子力発電所",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1986年に史上最悪の事故を起こし、ソ連の秘密主義廃止のきっかけとなった発電所はどこか。"
  },
  {
    "answer": "新思考外交",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "ブレジネフ＝ドクトリンを否定し、緊張緩和へと外交政策を転換したゴルバチョフの外交は何か。"
  },
  {
    "answer": "レーガン",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "ゴルバチョフとINF全廃条約を締結し、冷戦終結を加速させたアメリカの大統領は誰か。"
  },
  {
    "answer": "マルタ会談",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1989年に地中海で行われ、米ソ首脳が冷戦の終結を正式に宣言した会談は何か。"
  },
  {
    "answer": "ブッシュ（父）",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1989年のマルタ会談において、ゴルバチョフとともに冷戦終結を宣言した米大統領は誰か。"
  },
  {
    "answer": "エリツィン",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "ソ連内のロシア共和国の大統領となり、共産党保守派のクーデタを阻止した人物は誰か。"
  },
  {
    "answer": "ソ連共産党の解散",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1991年の保守派クーデタ失敗後、ゴルバチョフが宣言し実行した政治的措置は何か。"
  },
  {
    "answer": "バルト三国",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "1991年にソ連から独立を回復し、同年に国連加盟を果たしたエストニアなどの3国を何というか。"
  },
  {
    "answer": "独立国家共同体（CIS）",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "ソ連消滅に際し、ロシアやウクライナなど旧ソ連諸国の協力体制として創設された組織は何か。"
  },
  {
    "answer": "1991年",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "共産党保守派のクーデタ失敗からソ連が消滅し、バルト三国が独立した年は西暦何年か。"
  },
  {
    "answer": "ロシア連邦",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "旧ソ連のロシア共和国が改称して成立し、国連安保理常任理事国の地位を継承した国家は何か。"
  },
  {
    "answer": "チェチェン紛争",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "北カフカスにある共和国の、ロシア連邦からの独立をめぐって発生した内戦を何というか。"
  },
  {
    "answer": "プーチン",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "KGB出身でエリツィンに指名され、2000年代以降のロシアで長期政権を築いている人物は誰か。"
  },
  {
    "answer": "メドヴェージェフ",
    "category": "緊張緩和・新冷戦・冷戦終結",
    "chapter": "17",
    "number": "156",
    "question": "プーチンから後継指名を受け、2008年から大統領を務めた人物は誰か。"
  },
  {
    "answer": "鄧小平",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "文化大革命後に復活し、改革・開放政策を推進して中国の最高実力者となった指導者は誰か。"
  },
  {
    "answer": "四つの現代化",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "農業、工業、国防、科学技術の革新を図るため、周恩来が提唱し鄧小平が推進した目標は何か。"
  },
  {
    "answer": "改革・開放路線",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1978年から鄧小平が掲げた、経済の活性化や外国資本の導入を目指した新政策の路線は何か。"
  },
  {
    "answer": "人民公社",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "改革・開放政策の中で解体が進み、農家ごとの生産責任制が導入された農村の組織は何か。"
  },
  {
    "answer": "社会主義市場経済",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "共産党独裁体制を維持しつつ、経済的には資本主義的市場経済の導入を図る体制を何というか。"
  },
  {
    "answer": "日中平和友好条約",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1978年に福田赳夫内閣のもとで調印され、日本と中国の国交が正常化した条約は何か。"
  },
  {
    "answer": "日中共同声明",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1972年に調印され、日中国交正常化を実現させた外交文書を何というか。"
  },
  {
    "answer": "田中角栄",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1972年に北京を訪問し、日中共同声明に調印して国交正常化を実現させた日本の首相は誰か。"
  },
  {
    "answer": "第２次天安門事件",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1989年、自由化を求める学生や市民のデモを軍が武力鎮圧し、世界から批判を浴びた事件は何か。"
  },
  {
    "answer": "趙紫陽",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "第2次天安門事件に際し、デモ隊に同情的であったため責任を問われ失脚した当時の総書記は誰か。"
  },
  {
    "answer": "江沢民",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1989年に総書記に就任し、市場経済化を推進して1993年には国家主席となった人物は誰か。"
  },
  {
    "answer": "香港",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1997年、アヘン戦争以来155年ぶりにイギリスから中国へ返還された都市はどこか。"
  },
  {
    "answer": "一国二制度",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "香港やマカオの返還後、50年間は従来の資本主義体制を保障するとした方式を何というか。"
  },
  {
    "answer": "マカオ",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "1999年にポルトガルから中国へ返還され、香港同様に一国二制度が適用された都市はどこか。"
  },
  {
    "answer": "習近平",
    "category": "戦後の中国",
    "chapter": "17",
    "number": "158",
    "question": "2012年に総書記に就任し、「一帯一路」構想の提唱や任期制限の撤廃を行った指導者は誰か。"
  },
  {
    "answer": "開発独裁",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1960年代半ば以降の韓国などで見られた、経済開発を優先して行われた独裁政治体制を何というか。"
  },
  {
    "answer": "朴正煕",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1961年の軍事クーデタで権力を掌握し、後に大統領として強権政治と経済発展を推進した人物は誰か。"
  },
  {
    "answer": "漢江の奇跡",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "朴正煕政権下で達成された、韓国の短期間での目覚ましい経済成長と工業化を何と呼ぶか。"
  },
  {
    "answer": "日韓基本条約",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1965年に朴正煕政権と佐藤栄作内閣との間で調印され、日韓の国交正常化を実現させた条約は何か。"
  },
  {
    "answer": "光州事件",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1980年、金大中の拘束に反発した学生らの民主化運動を軍が武力弾圧し、多くの死傷者を出した事件は何か。"
  },
  {
    "answer": "全斗煥",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1980年に韓国大統領に就任し、日米との連携を強めて経済発展を図ったが、後に退陣した人物は誰か。"
  },
  {
    "answer": "大韓航空機爆破事件",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1987年、ソウルオリンピックの妨害を狙った北朝鮮工作員により、乗員乗客全員が犠牲となった事件は何か。"
  },
  {
    "answer": "盧泰愚",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1988年に大統領に就任し、民主化宣言を発して韓国初の平和的政権交代を実現させた人物は誰か。"
  },
  {
    "answer": "金泳三",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "1993年に大統領に就任し、韓国で32年ぶりとなる文民政権を成立させた人物は誰か。"
  },
  {
    "answer": "金大中",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "長く民主化運動を指導し、1998年に大統領に就任して北朝鮮への友好政策を推進した人物は誰か。"
  },
  {
    "answer": "太陽政策",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "金大中政権が掲げた、援助を中心に朝鮮問題の平和的解決を図る対北朝鮮友好政策を何というか。"
  },
  {
    "answer": "盧武鉉",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "金大中の太陽政策を継承し、2003年から対北朝鮮融和政策を維持した韓国の大統領は誰か。"
  },
  {
    "answer": "李明博",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "2008年に「経済再生」を掲げて就任し、10年ぶりに保守派政権を復活させた韓国大統領は誰か。"
  },
  {
    "answer": "朴槿恵",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "2013年に韓国初の女性大統領として就任したが、スキャンダルにより罷免された人物は誰か。"
  },
  {
    "answer": "文在寅",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "2017年に就任し、南北対話の推進や融和政策を積極的に進めた韓国大統領は誰か。"
  },
  {
    "answer": "尹錫悦",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "日米韓の連携を強化し対北朝鮮強硬姿勢をとるも、戒厳令布告による混乱で、現職大統領として初めて逮捕された人物は誰か。"
  },
  {
    "answer": "李在明",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "2025年に韓国大統領に就任し、野党時代とは一転して親日的な外交を展開している人物は誰か。"
  },
  {
    "answer": "六カ国協議",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "北朝鮮の核開発問題を解決するため、日・朝・中・韓・米・露の6カ国が参加した話し合いは何か。"
  },
  {
    "answer": "金正恩",
    "category": "戦後の朝鮮半島",
    "chapter": "17",
    "number": "159",
    "question": "2011年に最高指導者の地位を継承し、核・ミサイル開発を加速させている北朝鮮の指導者は誰か。"
  },
  {
    "answer": "55年体制",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1955年から1993年まで続いた、自由民主党の長期単独政権による政治体制を何というか。"
  },
  {
    "answer": "自由民主党",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1955年に結成され、55年体制のもとで長期間にわたり政権を維持し続けた政党は何か。"
  },
  {
    "answer": "高度経済成長",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1960年代の池田勇人内閣期に経済成長率が10%を超えるなど、日本が先進工業国となった現象は何か。"
  },
  {
    "answer": "沖縄",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1945年から米軍の占領下にあったが、1972年に日本へ返還され県が発足した地域はどこか。"
  },
  {
    "answer": "日中平和友好条約",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1978年、福田赳夫内閣のもとで中国との間に結ばれ、日中の国交が正常化した条約は何か。"
  },
  {
    "answer": "中曽根康弘",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "「戦後政治の総決算」を掲げ、国鉄などの公社を民営化した1980年代の首相は誰か。"
  },
  {
    "answer": "北方領土",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "現在もロシアとの間で領有権争いが続く、歯舞・色丹・国後・択捉の4島を総称して何というか。"
  },
  {
    "answer": "二・二八事件",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1947年に台湾で発生した、国民党政府による本省人の大規模な弾圧・抵抗事件を何というか。"
  },
  {
    "answer": "李登輝",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "1988年に就任した台湾初の「本省人」の総統で、民主化を推進した人物は誰か。"
  },
  {
    "answer": "陳水扁",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "2000年に半世紀に及ぶ国民党の政権独占を破り、総統に就任した民進党の人物は誰か。"
  },
  {
    "answer": "馬英九",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "2008年に総統に就任し、中台間の経済交流を促進して中国との関係改善を図った人物は誰か。"
  },
  {
    "answer": "蔡英文",
    "category": "戦後の日本・台湾",
    "chapter": "17",
    "number": "160",
    "question": "2016年に台湾史上初の女性総統として就任し、日本や米国との連携を強化した人物は誰か。"
  },
  {
    "answer": "フィリピン共和国",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "1946年に独立し、1951年には米比相互防衛条約を結んで反共親米路線をとった国家はどこか。"
  },
  {
    "answer": "マルコス",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "1965年から長期政権を維持したが、独裁と腐敗により1986年のクーデタで亡命した大統領は誰か。"
  },
  {
    "answer": "スカルノ",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "インドネシア共和国の初代大統領で、建国五原則を提唱し独立運動を指導した人物は誰か。"
  },
  {
    "answer": "ナサコム（NASAKOM）",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "民族主義、イスラーム教、共産党の統一戦線を目指し、スカルノが提唱したスローガンは何か。"
  },
  {
    "answer": "九・三◯事件",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "1965年にインドネシアで発生し、共産党勢力の壊滅とスカルノの失脚につながった事件は何か。"
  },
  {
    "answer": "スハルト",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "九・三○事件を収拾して実権を握り、1968年から30年にわたり親米独裁政権を維持した軍人は誰か。"
  },
  {
    "answer": "アジア通貨危機",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "スハルト退陣の背景となった、1997年にタイから始まり東南アジア全域に波及した経済混乱は何か。"
  },
  {
    "answer": "東ティモール",
    "category": "戦後の東南アジア①",
    "chapter": "17",
    "number": "161",
    "question": "ポルトガル領からインドネシアの支配下を経て、2002年に正式に独立を遂げた国はどこか。"
  },
  {
    "answer": "ドイモイ（刷新）",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "1986年からベトナムで開始された、市場経済や外国資本を導入する改革開放路線の呼称は何か。"
  },
  {
    "answer": "シハヌーク",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "1953年にカンボジアの独立を達成し元首となったが、後に追放や復位を繰り返した人物は誰か。"
  },
  {
    "answer": "赤色クメール",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "ポル＝ポトが率いた、カンボジアの内戦期に過激な共産主義政策を推し進めた勢力は何というか。"
  },
  {
    "answer": "ポル＝ポト",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "民主カンプチアの指導者として、都市住民の農村強制移住や大量虐殺を行った人物は誰か。"
  },
  {
    "answer": "民主カンプチア",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "1976年から79年にかけて、ポル＝ポト政権下で称されたカンボジアの国家名称は何か。"
  },
  {
    "answer": "ヘン＝サムリン",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "ベトナムの支援を受けてポル＝ポト政権を打倒し、カンボジア人民共和国の首班となったのは誰か。"
  },
  {
    "answer": "中越戦争",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "1979年、ベトナムのカンボジア侵攻に反発した中国がベトナムに侵入して勃発した戦争は何か。"
  },
  {
    "answer": "ラオス愛国戦線（パテト＝ラオ）",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "フランスからの完全独立を目指し、ベトナム戦争中も米軍に抵抗したラオスの勢力を何というか。"
  },
  {
    "answer": "マレーシア",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "1963年、マラヤ連邦を中心にシンガポールやボルネオ島の一部が加わり成立した国はどこか。"
  },
  {
    "answer": "リー＝クアンユー",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "シンガポールの初代首相として強力な経済発展を指導し、NIESの一員へ成長させた人物は誰か。"
  },
  {
    "answer": "アウン＝サン＝スー＝チー",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "ミャンマーの民主化運動を指導し、ノーベル平和賞を受賞したが軍政に拘束された女性は誰か。"
  },
  {
    "answer": "ロヒンギャ",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "ミャンマーで国軍からの迫害を受け、難民となって国外へ脱出しているイスラーム教徒を何というか。"
  },
  {
    "answer": "ASEAN（東南アジア諸国連合）",
    "category": "戦後の東南アジア②",
    "chapter": "17",
    "number": "162",
    "question": "1967年にバンコク宣言に基づき、ベトナム戦争下の社会不安を背景に結成された東南アジアの地域協力組織の名称は何か。"
  },
  {
    "answer": "ガンディー",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "ヒンドゥー・イスラーム両教徒の融和を求め、統一インドを主張した国民会議派の指導者は誰か。"
  },
  {
    "answer": "ジンナー",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "全インド＝ムスリム連盟を率い、パキスタンの分離・独立を主張したパキスタン初代総督は誰か。"
  },
  {
    "answer": "パキスタン",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "1947年にインドと分離して独立した、イスラーム教徒が多数を占めるイギリス連邦内の自治領はどこか。"
  },
  {
    "answer": "インド連邦",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "1947年から1950年までの、ヒンドゥー教徒が多数を占めたイギリス連邦内自治領としての国名は何か。"
  },
  {
    "answer": "インド共和国",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "1950年にカースト差別禁止などを定めた憲法を施行し、ネルーが初代首相となった国家の名称は何か。"
  },
  {
    "answer": "カシミール",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "住民の多くがイスラーム教徒で、帰属を巡り印パ戦争の原因となったインド西北部の地域はどこか。"
  },
  {
    "answer": "バングラデシュ",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "1971年の第3次印パ戦争を経て、東パキスタンが独立して成立した国家の名称は何か。"
  },
  {
    "answer": "スリランカ",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "1948年にセイロンとして独立し、1972年に現在の名称に改められたインド洋の島国はどこか。"
  },
  {
    "answer": "バンダラナイケ",
    "category": "戦後の南アジア",
    "chapter": "17",
    "number": "163",
    "question": "1960年にセイロンで就任した、世界最初の女性首相は誰か。"
  },
  {
    "answer": "カダフィ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "1969年のクーデタでリビアを共和政とし、独特な社会主義国家の建設を推進した人物は誰か。"
  },
  {
    "answer": "モロッコ、チュニジア",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "1956年にフランスからの独立を果たした、北アフリカに位置する2つの国はどこか。"
  },
  {
    "answer": "アルジェリア",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "フランスからの独立を求め、1954年から8年間に及ぶ激しいゲリラ闘争を展開した国はどこか。"
  },
  {
    "answer": "民族解放戦線（FLN）",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "アルジェリア戦争において、フランスに対する民族解放闘争の中心となった組織は何というか。"
  },
  {
    "answer": "ンクルマ（エンクルマ）",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "サハラ以南で初の黒人共和国となったガーナの初代大統領で、後に独裁化し失脚したのは誰か。"
  },
  {
    "answer": "ガーナ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "1957年にイギリス連邦内の自治領として独立した、旧名「黄金海岸」と呼ばれた国はどこか。"
  },
  {
    "answer": "1960年",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "「アフリカの年」と呼ばれ、コンゴなど計17カ国が独立を達成した年は西暦何年か。"
  },
  {
    "answer": "コンゴ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "ベルギーからの独立直後、資源豊富な州の分離や白人の介入を巡り大規模な動乱が起きた国はどこか。"
  },
  {
    "answer": "OAU（アフリカ統一機構）",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "1963年に「アフリカは1つ」を掲げて結成された、アフリカ諸国の協力組織を何というか。"
  },
  {
    "answer": "アディスアベバ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "アフリカ統一機構（OAU）の本部が置かれた、エチオピアの首都はどこか。"
  },
  {
    "answer": "AU（アフリカ連合）",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "2002年にアフリカ統一機構を継承し、55の国と地域が参加して発足した組織を何というか。"
  },
  {
    "answer": "新植民地主義",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "旧宗主国が経済支配を通じて実質的な支配を続ける仕組みを、ンクルマは何と呼んだか。"
  },
  {
    "answer": "ハイレ＝セラシエ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "エチオピア革命で廃位・処刑された、エチオピア最後の皇帝は誰か。"
  },
  {
    "answer": "モザンビーク",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "1975年にポルトガルから人民共和国として独立したが、後に内戦が勃発した国はどこか。"
  },
  {
    "answer": "アンゴラ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "ポルトガルより1975年に独立したが、社会主義政権と反政府勢力の間で内戦となった国はどこか。"
  },
  {
    "answer": "ジンバブエ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "旧南ローデシアで黒人による解放運動が展開され、1980年に独立を達成した国はどこか。"
  },
  {
    "answer": "ムガベ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "ジンバブエの独立に貢献したが、白人の土地収奪や強権支配で経済を混乱させた指導者は誰か。"
  },
  {
    "answer": "アパルトヘイト",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "南アフリカ共和国で戦後さらに強化された、非白人に対する人種差別的な隔離政策を何というか。"
  },
  {
    "answer": "デクラーク",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "アパルトヘイトの法的撤廃を行い、マンデラとともにノーベル平和賞を受賞した大統領は誰か。"
  },
  {
    "answer": "ANC（アフリカ民族会議）",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "1912年に結成され、アパルトヘイト下の南アフリカで黒人の権利擁護のために戦った組織は何か。"
  },
  {
    "answer": "マンデラ",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "長年の投獄を経て釈放され、1994年に南アフリカ初の黒人大統領となった人物は誰か。"
  },
  {
    "answer": "モノカルチャー経済",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "特定の農作物や資源の輸出に依存した、旧宗主国の利益を優先させた脆弱な経済構造は何か。"
  },
  {
    "answer": "UNCTAD（国連貿易開発会議）",
    "category": "戦後のアフリカ",
    "chapter": "17",
    "number": "164",
    "question": "南北の経済格差是正を目指し、1964年に開発途上国77カ国が中心となって結成した組織は何か。"
  },
  {
    "answer": "パレスチナ分割案",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1947年に国連で決議された、パレスチナをユダヤ・アラブ両国家に分割する案を何というか。"
  },
  {
    "answer": "第１次中東戦争",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "イスラエルの建国に対し、アラブ諸国が反対して勃発した1948年からの戦争は何か。"
  },
  {
    "answer": "パレスチナ難民",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "第1次中東戦争などの結果、イスラエルに追放されたアラブ系パレスチナ住民を何というか。"
  },
  {
    "answer": "ナセル",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "自由将校団を率いてエジプト革命を成功させ、後に大統領となった人物は誰か。"
  },
  {
    "answer": "第２次中東戦争（スエズ戦争）",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1956年にスエズ運河の国有化をきっかけとして勃発した戦争を何というか。"
  },
  {
    "answer": "アスワン＝ハイダム",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "ナセルがソ連に接近して建設に着手したが、英米が資金提供を拒否したダムの名称は何か。"
  },
  {
    "answer": "スエズ運河の国有化",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "第2次中東戦争の直接的な原因となった、ナセルが発表したことは何か。"
  },
  {
    "answer": "アラブ民族主義",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "第2次中東戦争を経て、エジプトが指導的地位を確立したアラブの団結を目指す思想は何か。"
  },
  {
    "answer": "第３次中東戦争",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1967年、イスラエルが周辺アラブ諸国を先制攻撃し、6日間で圧勝した戦争は何か。"
  },
  {
    "answer": "シナイ半島、ゴラン高原、ヨルダン川西岸、ガザ地区",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "第3次中東戦争でイスラエルが占領し、現在も紛争の火種となっている4つの地域はどこか。"
  },
  {
    "answer": "アラファト",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1969年にパレスチナ解放機構の議長に就任し、武装闘争や外交を指揮した人物は誰か。"
  },
  {
    "answer": "パレスチナ解放機構（PLO）",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1964年に結成された、パレスチナ難民による自決・解放運動を推進する組織は何か。"
  },
  {
    "answer": "第４次中東戦争",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1973年、エジプトとシリアがイスラエルへ奇襲攻撃を行い、石油危機の契機となった戦争は何か。"
  },
  {
    "answer": "OAPEC（アラブセキユユシュツコクキコウ）",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "第4次中東戦争に際し、石油戦略を発動してイスラエル支持国を圧迫した石油産出国の組織は何か。"
  },
  {
    "answer": "サダト",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "ナセルの後を継いで親米路線へ転換し、イスラエルとの和平を実現させたエジプト大統領は誰か。"
  },
  {
    "answer": "ベギン",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "キャンプ＝デーヴィッド合意に調印した、領土拡張を主張するリクード所属のイスラエル首相は誰か。"
  },
  {
    "answer": "エジプト＝イスラエル平和条約",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1979年にワシントンで調印された、エジプトとイスラエルの国交正常化を定めた条約は何か。"
  },
  {
    "answer": "カーター",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "エジプト＝イスラエル平和条約の調印を仲介した、当時のアメリカ大統領は誰か。"
  },
  {
    "answer": "ムバラク",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1981年に暗殺されたサダトの後を継ぎ、米・イスラエルとの関係を重視したエジプト大統領は誰か。"
  },
  {
    "answer": "シナイ半島",
    "category": "中東戦争",
    "chapter": "17",
    "number": "165",
    "question": "1979年の平和条約で返還が約束され、1982年にイスラエル軍が撤退した地域はどこか。"
  },
  {
    "answer": "アラブ連盟",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1945年に結成された、アラブ諸国の主権擁護と相互協力の促進を目的とする組織は何か。"
  },
  {
    "answer": "モサッデグ",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1951年に英系の石油会社を国有化したが、後にクーデタで崩壊したイランの首相は誰か。"
  },
  {
    "answer": "資源ナショナリズム",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "自国の資源に対する主権を確立しようとする動きで、モサッデグの石油国有化がその先駆とされる思想は何か。"
  },
  {
    "answer": "パフレヴィー2世",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "米資本の援助を受け「白色革命」と呼ばれる近代化を推進したが、イラン革命で亡命した国王は誰か。"
  },
  {
    "answer": "白色革命",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1960年代にイラン国王パフレヴィー2世が独裁的に断行した、近代化・西欧化政策を何というか。"
  },
  {
    "answer": "イラン＝イスラーム革命",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1979年、パフレヴィー2世の親米独裁政治に対し、シーア派最高指導者を中心に起こった革命は何か。"
  },
  {
    "answer": "ホメイニ",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "イラン革命を指導し、イスラーム原理主義に基づく新国家の最高指導者となった人物は誰か。"
  },
  {
    "answer": "イラン＝イスラーム共和国",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1979年に成立し、イスラーム教の教義を国教原理とする国民投票を経て樹立された国はどこか。"
  },
  {
    "answer": "第２次石油危機",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "イラン革命による産油量の激減をきっかけに発生した、世界的な経済混乱を何というか。"
  },
  {
    "answer": "サダム＝フセイン",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "イラクのバース党を率いて独裁政治を行い、対外戦争を繰り返した大統領は誰か。"
  },
  {
    "answer": "イラン＝イラク戦争",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1980年、革命後の混乱に乗じてイラクがイランに侵入したことで始まった消耗戦は何か。"
  },
  {
    "answer": "クウェート",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1990年にイラクのサダム＝フセインが石油資源を狙って侵攻し、併合を宣言した国はどこか。"
  },
  {
    "answer": "湾岸戦争",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "1991年、クウェートを侵攻したイラクに対し、アメリカ中心の多国籍軍が攻撃を行い発生した戦争は何か。"
  },
  {
    "answer": "多国籍軍",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "湾岸戦争に際し、安保理の対イラク武力行使容認決議に基づき28カ国で構成された軍隊は何か。"
  },
  {
    "answer": "イスラーム原理主義",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "欧米流の近代化に反発し、政治や文化をイスラームの根本原理に厳格に回帰させようとする思想は何か。"
  },
  {
    "answer": "ターリバーン",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "アフガニスタンを拠点とし、2021年に米軍撤退に伴い政権を奪還したイスラーム原理主義勢力は何か。"
  },
  {
    "answer": "アル＝カーイダ",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "ビン＝ラーディンが指導した、2001年のアメリカ同時多発テロ事件などを起こした国際テロ組織は何か。"
  },
  {
    "answer": "ビン＝ラーディン",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "アル＝カーイダの指導者として、対米テロを指揮したが2011年に殺害された人物は誰か。"
  },
  {
    "answer": "ISIL",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "イラクやシリアを拠点に、2014年に「カリフ制国家」の樹立を宣言した武装組織の略称は何か。"
  },
  {
    "answer": "ハマース",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "パレスチナのガザ地区を実効支配し、2023年にイスラエルへ大規模な攻撃を開始した組織は何か。"
  },
  {
    "answer": "ヒズボラ",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "レバノンのシーア派武装組織で、イランと密接な関係を持ちイスラエルと交戦を続ける組織は何か。"
  },
  {
    "answer": "アラブの春",
    "category": "戦後の西アジア①",
    "chapter": "17",
    "number": "166",
    "question": "2010年末にチュニジアから始まり、エジプトやリビアなどで独裁政権を崩壊させた民主化運動は何か。"
  },
  {
    "answer": "インティファーダ",
    "category": "戦後の西アジア②",
    "chapter": "17",
    "number": "167",
    "question": "1987年以降、イスラエル占領地のパレスチナ人が投石などで行った抵抗・抗議運動を何というか。"
  },
  {
    "answer": "パレスチナ暫定自治協定（オスロ合意）",
    "category": "戦後の西アジア②",
    "chapter": "17",
    "number": "167",
    "question": "1993年にノルウェーの仲介で成立し、パレスチナ人の暫定自治政府樹立を承認した合意は何か。"
  },
  {
    "answer": "アラファト、ラビン",
    "category": "戦後の西アジア②",
    "chapter": "17",
    "number": "167",
    "question": "1993年のパレスチナ暫定自治協定に調印した、PLO議長とイスラエル首相はそれぞれ誰か。"
  },
  {
    "answer": "CIA（中央情報局）",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "封じ込め政策の実行を目的として、1947年の国家安全保障法に基づき設置された情報機関は何か。"
  },
  {
    "answer": "タフト・ハートレー法",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "1947年に制定され、労働組合の運動を制約し労働者の諸権利を大幅に制限したアメリカの法律は何というか。"
  },
  {
    "answer": "赤狩り",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "1950年代前半にアメリカで展開された、リベラル派を共産主義者と決めつけ追放した扇動的な運動を何というか。"
  },
  {
    "answer": "マッカーシー",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "証拠の虚偽が露見して失脚するまで、苛烈な共産主義者追放運動を主導した共和党の上院議員は誰か。"
  },
  {
    "answer": "軍産複合体",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "アイゼンハワーが退任演説で警告した、軍需産業と政府が結びつき軍備拡張を推進する構造は何か。"
  },
  {
    "answer": "公民権運動",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "1950年代から1960年代にかけて高揚した、黒人差別の撤廃を求める社会運動を何というか。"
  },
  {
    "answer": "ニューフロンティア",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "ケネディが大統領選挙で掲げた、経済成長や公民権、教育改革などを推進する政策スローガンは何か。"
  },
  {
    "answer": "貧困との戦い",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "ジョンソンが一般教書演説で掲げたが、ベトナム戦争の泥沼化による財政危機で挫折した目標は何か。"
  },
  {
    "answer": "公民権法",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "1964年に制定され、投票や教育などにおける人種差別の法的撤廃を目指した法律は何というか。"
  },
  {
    "answer": "偉大な社会",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "ジョンソンが差別と貧困の排除を訴えて提唱したが、ベトナム介入による財政悪化で失敗した計画は何か。"
  },
  {
    "answer": "ベトナム反戦運動",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "1960年代、公民権運動と結合して全米や日本、ヨーロッパにまで拡大した反対運動を何というか。"
  },
  {
    "answer": "キッシンジャー",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "ニクソン政権下で国務長官を務め、極秘訪中による米中関係改善やベトナム和平を主導した人物は誰か。"
  },
  {
    "answer": "ウォーターゲート事件",
    "category": "戦後のアメリカ①",
    "chapter": "17",
    "number": "168",
    "question": "民主党本部への盗聴事件から発覚し、1974年にニクソンが辞任に追い込まれた政治スキャンダルは何か。"
  },
  {
    "answer": "カーター",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "「人権外交」を掲げ、エジプト・イスラエル間の和平仲介や米中国交正常化を実現した大統領は誰か。"
  },
  {
    "answer": "強いアメリカ",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "レーガンが掲げた、軍備拡大を通じてソ連との対決姿勢を強めようとしたスローガンは何か。"
  },
  {
    "answer": "グレナダ",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "1983年、レーガン政権が左翼政権打倒を目的として軍事介入を行ったカリブ海の島国はどこか。"
  },
  {
    "answer": "双子の赤字",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "レーガン政権下で拡大した、連邦政府の財政赤字と米国の貿易赤字をあわせて何と呼ぶか。"
  },
  {
    "answer": "経済摩擦（貿易摩擦）",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "1980年代、日本の黒字拡大と米国の赤字拡大を背景に、日米間で深刻化した対立を何というか。"
  },
  {
    "answer": "プラザ合意",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "1985年、米国の貿易赤字解消を目指してドル安政策の推進を決定した先進5カ国蔵相会議の合意は何か。"
  },
  {
    "answer": "ブッシュ（父）",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "マルタ会談で冷戦終結を宣言し、1991年には湾岸戦争を主導して高い支持を得た大統領は誰か。"
  },
  {
    "answer": "クリントン",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "女性や黒人を多数起用し、1993年のパレスチナ暫定自治協定の調印にも立ち会った大統領は誰か。"
  },
  {
    "answer": "イラク戦争",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "2003年、ブッシュ（子）政権が大量破壊兵器保有を口実として攻撃を開始した戦争は何か。"
  },
  {
    "answer": "オバマ",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "2009年に「核なき世界」を訴えてノーベル平和賞を受賞した、初の黒人大統領は誰か。"
  },
  {
    "answer": "トランプ",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "「アメリカ・ファースト」を掲げてTPPやパリ協定から離脱し、メキシコ国境の壁建設を進めた人物は誰か。"
  },
  {
    "answer": "バイデン",
    "category": "戦後のアメリカ②",
    "chapter": "17",
    "number": "169",
    "question": "トランプ路線の修正を図り、2021年のアフガン撤兵やウクライナ支援での対露制裁を主導した人物は誰か。"
  },
  {
    "answer": "OAS（米州機構）",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "1948年に結成された、南北アメリカ21カ国が参加する反共協力組織を何というか。"
  },
  {
    "answer": "ペロン",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "アルゼンチンで民族主義を掲げ、労働者保護や重要産業の国有化などの政策を推進した人物は誰か。"
  },
  {
    "answer": "グアテマラ",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "1954年、土地改革などの民主的改革を実施していた左翼政権がCIA扇動の軍事クーデタで崩壊した国はどこか。"
  },
  {
    "answer": "アジェンデ",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "1970年のチリで、史上初めて自由選挙による社会主義政権を樹立したが、軍部クーデタで倒された大統領は誰か。"
  },
  {
    "answer": "ピノチェト",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "アメリカの支援でアジェンデ政権を打倒した後、チリで人権侵害を伴う激しい軍事独裁を行った人物は誰か。"
  },
  {
    "answer": "フォークランド戦争",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "1982年、英領諸島の領有権を巡りアルゼンチンがイギリスと交戦し、敗北後に軍事政権崩壊を招いた戦争は何か。"
  },
  {
    "answer": "MERCOSUR（南米南部共同市場）",
    "category": "戦後のラテンアメリカ",
    "chapter": "17",
    "number": "170",
    "question": "1991年、ラテンアメリカ諸国間の経済連携を深めるために結成された、関税同盟の略称は何というか。"
  },
  {
    "answer": "EFTA（欧州自由貿易連合）",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "1960年、イギリスのマクミラン内閣がEECに対抗して結成した経済組織は何か。"
  },
  {
    "answer": "アルスター地方",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "1969年から続く、プロテスタントとカトリックの対立が激化した北アイルランドの地方名はどこか。"
  },
  {
    "answer": "サッチャー",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "「鉄の女」と呼ばれ、国有企業の民営化などの改革を強行したイギリス初の女性首相は誰か。"
  },
  {
    "answer": "新自由主義",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "サッチャー政権が推進した、市場競争や自己責任を重視し「小さな政府」を目指す経済思想は何か。"
  },
  {
    "answer": "ブレグジット",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "2016年の国民投票の結果を受けて進められた、イギリスのEU離脱を指す言葉は何か。"
  },
  {
    "answer": "第五共和政",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "アルジェリア戦争による危機を受け、1958年に大統領権限を強化して発足したフランスの政体は何か。"
  },
  {
    "answer": "ド＝ゴール",
    "category": "戦後のヨーロッパ①",
    "chapter": "17",
    "number": "171",
    "question": "第五共和政の初代大統領として、核保有やNATO軍事機構脱退など独自の外交を展開したのは誰か。"
  },
  {
    "answer": "経済の奇跡",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "1950年代、西ドイツのアデナウアー首相のもとで実現した驚異的な経済復興を何と呼ぶか。"
  },
  {
    "answer": "パリ協定",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "1954年に調印され、西ドイツの主権回復と再軍備を認め、NATO加盟への道を開いた協定は何か。"
  },
  {
    "answer": "コール",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "1990年のドイツ統一を成し遂げ、16年にわたる長期政権を築いた西ドイツの首相は誰か。"
  },
  {
    "answer": "1990年",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "東ドイツが西ドイツに併合される形で、分断されていたドイツが統一を達成したのは西暦何年か。"
  },
  {
    "answer": "ホネカー",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "1976年から東ドイツの国家元首として独裁体制を敷いたが、1989年の民主化運動の中で退陣したのは誰か。"
  },
  {
    "answer": "1989年",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "東ドイツ政府が東西間の交通制限を解除し、ベルリンの壁が開放されたのは西暦何年か。"
  },
  {
    "answer": "フランコ",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "1939年のスペイン内戦勝利以来、1975年に死去するまで独裁体制を維持した人物は誰か。"
  },
  {
    "answer": "フアン＝カルロス1世",
    "category": "戦後のヨーロッパ②",
    "chapter": "17",
    "number": "172",
    "question": "フランコの死後に即位し、スペインの民主化と立憲君主制への移行を支えた国王は誰か。"
  },
  {
    "answer": "シューマン",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1950年に西欧諸国の経済協力機構の創設を提唱したフランスの外相は誰か。"
  },
  {
    "answer": "ECSC（ヨーロッパ石炭鉄鋼共同体）",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1952年に発効した、フランスや西独など6カ国による石炭・鉄鋼の共同管理組織は何か。"
  },
  {
    "answer": "EEC（ヨーロッパ経済共同体）",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1958年に設立され、石炭・鉄鋼以外の全製品やサービスへ市場統合を拡大した組織は何か。"
  },
  {
    "answer": "EURATOM（ヨーロッパ原子力共同体）",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1958年に発足した、原子力資源の統合・管理と平和利用のための協力機関を何というか。"
  },
  {
    "answer": "EC（ヨーロッパ共同体）",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1967年、EEC・ECSC・EURATOMの3組織が統合して発足した組織は何か。"
  },
  {
    "answer": "EFTA（欧州自由貿易連合）",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1960年、イギリスの提案で結成された、ECに対抗するための自由貿易組織は何というか。"
  },
  {
    "answer": "拡大EC",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "イギリス、アイルランド、デンマークの加盟により、1973年から始まったECの呼称は何か。"
  },
  {
    "answer": "マーストリヒト条約",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "1992年に調印され、欧州の経済・通貨・政治を統合する道筋を規定した条約は何か。"
  },
  {
    "answer": "EU（ヨーロッパ連合）",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "マーストリヒト条約に基づき1993年に発足した、現在の欧州の統合組織は何か。"
  },
  {
    "answer": "ユーロ",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "2002年から紙幣・硬貨の流通が開始された、EUの多くの加盟国で採用されている共通通貨は何か。"
  },
  {
    "answer": "ポピュリズム",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "移民排斥など、大衆の感情を代弁すると主張し世論の支持を得る政治思想や活動を何というか。"
  },
  {
    "answer": "ブレグジット",
    "category": "欧州統合と現在",
    "chapter": "17",
    "number": "173",
    "question": "2016年の国民投票の結果に基づき、2020年に実行されたイギリスのEU離脱を何と呼ぶか。"
  },
  {
    "answer": "東欧革命",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1989年に東欧諸国で連鎖的に発生した、社会主義体制の崩壊と民主化・市場経済への転換を何というか。"
  },
  {
    "answer": "コメコン",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1991年、加盟国が計画経済を放棄したことで解散した、社会主義国の経済協力機構の略称は何か。"
  },
  {
    "answer": "ワルシャワ条約機構",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "冷戦の終結を背景に、ソ連と東欧諸国が結んでいた軍事同盟が1991年に解消された組織は何か。"
  },
  {
    "answer": "ハンガリー",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1989年1月から本格的な民主化が進行し、東欧革命の端緒となった国はどこか。"
  },
  {
    "answer": "チャウシェスク",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "東欧随一の石油資源を背景に独裁を行ったが、1989年に民衆と軍部により処刑されたルーマニアの指導者は誰か。"
  },
  {
    "answer": "ドプチェク",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1968年の「プラハの春」を主導し、「人間の顔をした社会主義」を提唱した改革派の人物は誰か。"
  },
  {
    "answer": "チェコ、スロヴァキア",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1993年、民族主義の台頭によって連邦国家から二つの独立国に分離した国はそれぞれどこか。"
  },
  {
    "answer": "ゴムウカ",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1956年のポズナニ暴動を収拾したが、後に保守化して1970年に解任されたポーランドの指導者は誰か。"
  },
  {
    "answer": "「連帯」",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1980年にポーランドで結成された、ワレサを指導者とする政府から自立した民主的労働組合は何か。"
  },
  {
    "answer": "ワレサ",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "「連帯」を率いてポーランドの自由化運動を象徴し、1990年に大統領に選出された人物は誰か。"
  },
  {
    "answer": "ティトー",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1980年に死去し、その死後にユーゴスラヴィアで民族対立が表面化する原因となった指導者は誰か。"
  },
  {
    "answer": "クロアティア、スロヴェニア",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1991年にユーゴスラヴィア連邦からの独立を宣言し、セルビアと衝突した二つの国はどこか。"
  },
  {
    "answer": "ボスニア・ヘルツェゴヴィナ",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "1992年に独立を宣言したが、新ユーゴの軍隊の侵攻を招き、凄惨な内戦に突入した国はどこか。"
  },
  {
    "answer": "コソヴォ",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "セルビア共和国内の自治州で、1990年代末にアルバニア系住民の弾圧と紛争が起きた地域はどこか。"
  },
  {
    "answer": "ミロシェヴィッチ",
    "category": "戦後の東欧",
    "chapter": "17",
    "number": "174",
    "question": "セルビア人の民族意識を扇動してコソヴォなどで弾圧を行い、NATO軍の空爆を招いた指導者は誰か。"
  },
  {
    "answer": "ラッセル・アインシュタイン宣言",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1955年、核兵器廃絶と紛争の平和的解決を訴え、2人の高名な学者が連名で発表した宣言は何か。"
  },
  {
    "answer": "パグウォッシュ会議",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "ラッセル・アインシュタイン宣言に基づき、1957年にカナダで開催された科学者の国際会議は何か。"
  },
  {
    "answer": "PTBT（部分的核実験禁止条約）",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1963年に調印された、地下実験を除く大気圏内・宇宙空間・水中での核爆発実験を禁止する条約は何か。"
  },
  {
    "answer": "NPT（核拡散防止条約）",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1968年に調印された、核保有国を5カ国に限定し核兵器の譲渡や製造援助を禁止した条約は何か。"
  },
  {
    "answer": "SALTⅠ（第1次戦略兵器制限交渉）",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1972年に成立した、ICBMなどの保有数を当時の水準で凍結した米ソ間の交渉を何というか。"
  },
  {
    "answer": "SALTⅡ（第2次戦略兵器制限交渉）",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1979年に署名されたが、ソ連のある軍事行動により米議会が批准を拒否し断念された交渉は何か。"
  },
  {
    "answer": "ソ連のアフガニスタン侵攻",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1979年に発生し、米ソのデタントを終結させSALTⅡの批准断念を招いたソ連による軍事行動は何か。"
  },
  {
    "answer": "中距離核戦力(INF)全廃条約",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1987年に調印された、米ソが史上初めて保有核兵器の削減に合意した軍縮条約は何か。"
  },
  {
    "answer": "STARTⅠ（第1次戦略兵器削減条約）",
    "category": "米ソの軍縮",
    "chapter": "17",
    "number": "175",
    "question": "1991年に調印された、米ソが核弾頭と運搬手段の削減に初めて本格的に合意した条約は何か。"
  },
  {
    "answer": "開発独裁",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "強権支配のもとで政治運動を抑圧しつつ、急速な工業化を強行する政治体制を何というか。"
  },
  {
    "answer": "南北問題",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "北側の先進工業国と、南側の開発途上国との間に生じている経済格差の問題を何というか。"
  },
  {
    "answer": "NIES（新興工業経済地域）",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "1970年代から、政府主導の輸出指向型工業化によって急速な成長を遂げた国や地域は何か。"
  },
  {
    "answer": "南南問題",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "開発途上国間において、産油国やNIESとそれ以外の国との間に生じている経済格差は何か。"
  },
  {
    "answer": "アジア通貨危機",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "1997年、タイの通貨暴落を契機に東南アジアや韓国へ波及した深刻な経済混乱は何か。"
  },
  {
    "answer": "アジア太平洋経済協力（APEC)会議",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "アジア・太平洋地域の経済発展を目的に、1989年にオーストラリアの提唱で創設された会議は何か。"
  },
  {
    "answer": "CPTTP",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "米国の離脱後、日本を含む11カ国で2018年に発効した環太平洋の自由貿易協定の略称は何か。"
  },
  {
    "answer": "NAFTA（北米自由貿易協定）",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "1994年に発足した、アメリカ、カナダ、メキシコによる自由貿易協定の略称は何か。"
  },
  {
    "answer": "GATT(関税と貿易に関する一般協定)",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "1947年に調印された、自由で平等な国際貿易を促進するための多国間協定を何というか。"
  },
  {
    "answer": "WTO（世界貿易機関）",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "1995年に発足し、サービスの自由化推進や貿易紛争の調停を担う国際機関は何か。"
  },
  {
    "answer": "先進国首脳会議（サミット）",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "1975年の石油危機を契機に始まった、主要国のトップが集まり経済問題を話し合う会議は何か。"
  },
  {
    "answer": "クリミア半島",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "2014年にロシアが強行した軍事併合により、サミットからロシアが排除される原因となった地はどこか。"
  },
  {
    "answer": "G20",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "G7にEUや新興経済国が加わり、2008年以降は首脳会合も実施されている国際会議の枠組みは何か。"
  },
  {
    "answer": "リーマン＝ショック（世界金融危機）",
    "category": "経済協力・通商の自由化",
    "chapter": "17",
    "number": "176",
    "question": "2008年、米国の投資銀行の破綻を機に、世界の金融システムを麻痺させた危機を何というか。"
  },
  {
    "answer": "チェチェン紛争",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "ロシア連邦からの独立を求め、1994年以降に激しい内戦やテロ活動が繰り返された北カフカスの地はどこか。"
  },
  {
    "answer": "クルド人",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "中東諸国に広く居住しながら自前の独立国家を持たず、「国を持たない最大の民族」と呼ばれる人々は誰か。"
  },
  {
    "answer": "シンハラ人",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "スリランカで多数派を占める仏教徒の民族で、独立後に政府の優遇政策を背景に少数派と対立したのは誰か。"
  },
  {
    "answer": "タミル人",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "スリランカの少数民族であるヒンドゥー教徒で、分離独立を求めて政府軍と長年の内戦を繰り広げたのは誰か。"
  },
  {
    "answer": "ソマリア",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "1988年以降、部族対立やイスラーム過激組織の活動により無政府状態に近い内戦が続いている東アフリカの国はどこか。"
  },
  {
    "answer": "ルワンダ",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "1994年、フツ族の過激派により少数派のツチ族に対する組織的な大虐殺（ジェノサイド）が発生した国はどこか。"
  },
  {
    "answer": "ダルフール紛争",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "スーダン西部の地方において、政府側のアラブ系住民と非アラブ系諸民族との間で起きた深刻な紛争は何か。"
  },
  {
    "answer": "サーリーフ",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "リベリア内戦後の混乱を収拾し、2006年にアフリカ初の女性大統領として就任した人物は誰か。"
  },
  {
    "answer": "北アイルランド(アルスター地方)",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "イギリスの領有継続を望むプロテスタント系と、アイルランド統合を望むカトリック系が激しく対立した地域はどこか。"
  },
  {
    "answer": "シリア",
    "category": "地域紛争",
    "chapter": "17",
    "number": "177",
    "question": "「アラブの春」以降、アサド政権と反体制派の戦いに米露が介入し「21世紀最大の人道危機」と呼ばれた国はどこか。"
  },
  {
    "answer": "福祉国家",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "1960年代、高度経済成長を背景に西側諸国で充実した、国民の生活や福祉を保障する国家のあり方は何か。"
  },
  {
    "answer": "省エネルギー",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "石油危機を機に、西側先進諸国が量から質への産業構造転換を図る中で追求した資源対策は何か。"
  },
  {
    "answer": "フェミニズム",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "性差別をなくし、社会的・政治的・経済的な平等を求める思想や運動を何というか。"
  },
  {
    "answer": "パンクハースト",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "20世紀初頭のイギリスで、ハンガーストライキなどの激しい手段で女性参政権獲得運動を率いた人物は誰か。"
  },
  {
    "answer": "男女雇用機会均等法",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "1985年に日本で制定され、雇用における男女の差別撤廃を目指した法律は何か。"
  },
  {
    "answer": "ジェンダー",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "21世紀に入り理解が進んだ、生物学的な性別に対して社会的な性別を指す言葉は何か。"
  },
  {
    "answer": "新型コロナウイルス感染症（COVID-19）",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "DX化を加速させる一方で、各国の自国第一主義を強める一因となった2019年末からの感染症は何か。"
  },
  {
    "answer": "地球温暖化",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "温室効果ガスの増加により、地球全体の平均気温が上昇している環境問題を何というか。"
  },
  {
    "answer": "公害",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "生産活動や消費生活の高度化に伴い、深刻な健康被害や環境悪化をもたらす災害を何というか。"
  },
  {
    "answer": "レイチェル＝カーソン",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "著書で殺虫剤や農薬が環境に与える危険性を指摘し、環境保護運動に大きな影響を与えた海洋学者は誰か。"
  },
  {
    "answer": "『沈黙の春』",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "レイチェル＝カーソンが1962年に発表し、農薬による環境汚染を警告した代表作は何か。"
  },
  {
    "answer": "国連人間環境会議",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "1972年に「かけがえのない地球」をスローガンに開催された、世界初の環境に関する国際会議は何か。"
  },
  {
    "answer": "ストックホルム",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "1972年に最初の国連人間環境会議が開催されたスウェーデンの都市はどこか。"
  },
  {
    "answer": "地球サミット（環境と開発に関する国連会議）",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "1992年にリオデジャネイロで開催され、「持続可能な開発」を目指すことが謳われた会議は何か。"
  },
  {
    "answer": "京都議定書",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "1997年のCOP3で採択され、先進国に温室効果ガスの削減目標を課した文書を何というか。"
  },
  {
    "answer": "パリ協定",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "2015年に採択され、21世紀後半の温室効果ガス排出実質ゼロを目指す国際的な枠組みは何か。"
  },
  {
    "answer": "SDGs（持続可能な開発目標）",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "2015年に国連で採択された、2030年までの解決を目指す17の国際目標を何というか。"
  },
  {
    "answer": "PKO（国連平和維持活動）",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "国連が紛争の平和的解決を目的に行う、停戦監視や治安維持などの活動を何というか。"
  },
  {
    "answer": "PKF（国連平和維持軍）",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "平和維持活動のうち、軽武装の部隊を編成して紛争地域での中立的な任務にあたる組織を何というか。"
  },
  {
    "answer": "NGO（非政府組織）",
    "category": "社会の変化/環境問題/平和のための活動",
    "chapter": "17",
    "number": "178",
    "question": "国境なき医師団のように、政府から独立して国際的な問題に取り組む民間組織を何というか。"
  },
  {
    "answer": "アインシュタイン",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "相対性理論を提唱し、量子力学の発展にも大きく貢献したドイツ出身のユダヤ代理論物理学者は誰か。"
  },
  {
    "answer": "量子力学",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "アインシュタインやハイゼンベルクらが基礎を築いた、原子の性質や構造を研究する物理学の分野は何か。"
  },
  {
    "answer": "相対性理論",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1905年に特殊、1915年に一般理論が発表された、時間や空間の概念を根本から変えた理論は何か。"
  },
  {
    "answer": "スリーマイル島原子力発電所",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1979年にアメリカのペンシルベニア州で事故が発生し、原子力発電の危険性を世界に知らしめた原発はどこか。"
  },
  {
    "answer": "チョルノービリ原子力発電所",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1986年に当時のソ連（現在のウクライナ）で事故が発生した、広範囲に放射線汚染を広げた原発はどこか。"
  },
  {
    "answer": "東京電力福島第一原子力発電所",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "2011年の東日本大震災に伴う津波で全電源を喪失し、メルトダウンが発生した原発はどこか。"
  },
  {
    "answer": "合成繊維",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1935年にアメリカのカロザースが開発したナイロンに代表される、高分子化合物の繊維を何というか。"
  },
  {
    "answer": "DNAの二重螺旋構造",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1953年にワトソンとクリックが提唱した、生物の遺伝情報の基本構造を指すモデルは何か。"
  },
  {
    "answer": "ペニシリン",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1928年にイギリスのフレミングによって発見された、世界初の抗生物質は何か。"
  },
  {
    "answer": "フレミング",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "ペニシリンを発見し、後の感染症治療に劇的な変化をもたらしたイギリスの細菌学者は誰か。"
  },
  {
    "answer": "ヒトゲノム計画",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1990年から2003年にかけて行われた、ヒトの全遺伝情報の塩基配列解読を目指した計画は何か。"
  },
  {
    "answer": "クローン技術",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1990年代にヒツジのドリーなどで現実化した、同一の遺伝情報を持つ個体を作る技術は何か。"
  },
  {
    "answer": "iPS細胞（人工多能性幹細胞）",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "2006年に山中伸弥らが作成に成功した、様々な組織に分化可能な人工多能性幹細胞の略称は何か。"
  },
  {
    "answer": "ライト兄弟",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1903年に人類初の動力飛行に成功し、航空機時代の幕を開けた兄弟は誰か。"
  },
  {
    "answer": "ICBM（大陸間弾道ミサイル）",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "宇宙開発と密接に連動して開発された、核弾頭を搭載して他大陸を攻撃可能な核ミサイルは何か。"
  },
  {
    "answer": "スプートニク1号",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1957年にソ連が打ち上げに成功した、人類史上初の人工衛星の名称は何か。"
  },
  {
    "answer": "アポロ11号",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1969年にアメリカが打ち上げ、人類史上初の月面着陸と帰還を成功させた宇宙船は何か。"
  },
  {
    "answer": "ポップ＝カルチャー",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "伝統的な文化に対して、映画やジャズ、ロックなど大衆によって広く享受される文化を何というか。"
  },
  {
    "answer": "カウンターカルチャー",
    "category": "現代文明①",
    "chapter": "17",
    "number": "179",
    "question": "1960年代に欧米の若者を中心に広まった、既存の社会秩序や既成の価値観に対抗して生み出された文化の総称は何か。"
  },
  {
    "answer": "プラグマティズム",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "物事の真理を理論ではなく、「行動の結果や実用性」によって判断する、アメリカで発展した哲学を何というか。"
  },
  {
    "answer": "デューイ",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "経験を重視し、問題解決を通じて社会を進化させる道具主義的な民主主義を唱えたアメリカの哲学者は誰か。"
  },
  {
    "answer": "精神分析学",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "人間の精神を理解する際、無意識の深層心理の重要性を主張する学問分野を何というか。"
  },
  {
    "answer": "フロイト",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "精神分析学の創始者で、無意識が行動を決定するとし、心的外傷の解明に尽力したオーストリアの学者は誰か。"
  },
  {
    "answer": "マックス＝ヴェーバー",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "『プロテスタントの倫理と資本主義の精神』を著し、近代社会における宗教と経済の関係を論じたドイツの社会学者は誰か。"
  },
  {
    "answer": "ポスト＝モダニズム",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "理性や進歩、自由や人権といった近代的な価値観を絶対視せず、それらを相対的なものとみなす思想を何というか。"
  },
  {
    "answer": "ポスト＝コロニアリズム",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "植民地支配の遺産を分析し、旧植民地のアイデンティティや文化を再構築しようとする思想を何というか。"
  },
  {
    "answer": "文化多元主義",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "各地域の文化には独自の意義があり、それらは対等であると主張する思想を何というか。"
  },
  {
    "answer": "ヘミングウェー",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "スペイン内戦を経験し、『武器よさらば』や『誰がために鐘は鳴る』を著したアメリカの作家は誰か。"
  },
  {
    "answer": "魯迅",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "文学や評論を通じて中国の封建体制や帝国主義に抵抗し、『阿Q正伝』などを著した作家は誰か。"
  },
  {
    "answer": "野獣派（フォービズム）",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "20世紀初頭に印象派に反発して生まれた、鮮明な原色と大胆な描写を特徴とする美術の流派は何か。"
  },
  {
    "answer": "マティス",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "野獣派の代表的な画家で、極度に単純明快な線と鮮明華麗な色彩を特徴とする人物は誰か。"
  },
  {
    "answer": "立体派（キュビズム）",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "物体の構成を幾何学的に解体し、総体的に表現しようとした20世紀初頭の絵画の流派を何というか。"
  },
  {
    "answer": "ピカソ",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "ジョルジュ＝ブラックとともに立体派を創始し、「ゲルニカ」などの作品で知られるスペイン出身の画家は誰か。"
  },
  {
    "answer": "ダダイズム",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "第一次世界大戦中に発生した、既成の美的価値観を否定・解体しようとした反芸術運動を何というか。"
  },
  {
    "answer": "超現実主義（シュルレアリスム）",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "フロイトの精神分析の影響を受け、夢や潜在意識下の世界を表現しようとした文芸・芸術運動は何か。"
  },
  {
    "answer": "ダリ",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "超現実主義の代表的な画家で、「記憶の固執」などの独創的な作品で知られるスペインの人物は誰か。"
  },
  {
    "answer": "シケイロス",
    "category": "現代文明②",
    "chapter": "17",
    "number": "180",
    "question": "メキシコ壁画運動を立ち上げ、社会主義リアリズムの立場から作品を描いた画家は誰か。"
  },
  {
    "answer": "年貢",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代の日本の百姓が、領主である幕府や藩に対して負担した主たる農産物の税を何というか。"
  },
  {
    "answer": "享保の改革",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "18世紀前半に江戸幕府の8代将軍が断行した、幕府財政の再建を目的とした一連の改革は何か。"
  },
  {
    "answer": "徳川吉宗",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "「享保の改革」を主導し、「米将軍」とも呼ばれた江戸幕府の第8代将軍は誰か。"
  },
  {
    "answer": "株仲間",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸幕府が公認した、商工業者が営業上の独占権を得るために結成した同業者組合を何というか。"
  },
  {
    "answer": "大坂、江戸、京都",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代に「三都」と呼ばれ、全国市場のネットワークの中心となった3つの都市はどこか。"
  },
  {
    "answer": "天下の台所",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "全国の物資が集まる経済・流通の中心地として機能した「大坂」の別称は何か。"
  },
  {
    "answer": "蔵屋敷",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "諸藩が大坂や江戸に設置し、自領の年貢米や特産物を保管・売却するために設けた施設は何か。"
  },
  {
    "answer": "菱垣廻船",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代、江戸と大坂の間で生活必需品などの物資を運んだ、定期航路の大型船を何というか。"
  },
  {
    "answer": "樽廻船",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代、主に大坂から江戸へ酒を運ぶために発達した、スピードの速い定期航路の船を何というか。"
  },
  {
    "answer": "俵物",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代、長崎貿易における主要な輸出品となった、乾燥させたナマコやアワビなどの海産物を総称して何というか。"
  },
  {
    "answer": "香辛料",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "15世紀以降、ヨーロッパ人が直接取引を求めてアジアへ参入する目的となった産品は何か。"
  },
  {
    "answer": "出島",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代の長崎において、オランダとの貿易のために築かれた人工の島はどこか。"
  },
  {
    "answer": "「オランダ風説書」",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "長崎のオランダ商館長が幕府に提出した、海外の情勢を知らせる報告書を何というか。"
  },
  {
    "answer": "対馬藩",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代に朝鮮との間の外交や貿易の実務を仲介した九州北部の藩はどこか。"
  },
  {
    "answer": "豊臣秀吉",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "16世紀末に朝鮮への侵略（文禄・慶長の役）を行い、日朝関係を一時断絶させた人物は誰か。"
  },
  {
    "answer": "通信使",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "将軍の代替わりなどの際に、朝鮮から日本へ派遣された対等な関係の外交使節を何というか。"
  },
  {
    "answer": "琉球",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "15世紀に統一され、江戸時代には薩摩藩と清の両方に服属しながら独立を保った国はどこか。"
  },
  {
    "answer": "島津氏",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1609年に琉球へ出兵し、同地を支配下に置いた薩摩藩の有力な氏族は何氏か。"
  },
  {
    "answer": "生糸、絹織物",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代の日本が、清から輸入していた代表的な中国産の繊維製品を２つ答えよ。"
  },
  {
    "answer": "砂糖",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代に琉球から日本へ輸入された、代表的な甘味料の原料となる産品は何か。"
  },
  {
    "answer": "人参",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代に朝鮮から日本へ輸入された、薬用として珍重された植物の根は何か。"
  },
  {
    "answer": "銅、俵物",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "江戸時代に日本から清に輸出されたものを二種答えなさい（金属・海産物の総称）。"
  },
  {
    "answer": "ラクスマン",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1792年に、根室へ来航して通商を求めたロシアの使節は誰か。"
  },
  {
    "answer": "レザノフ",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1804年に、長崎に来航して日本との通商を要求したロシアの使節は誰か。"
  },
  {
    "answer": "異国船打払令",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1825年に幕府が出した、日本沿岸に接近する外国船を砲撃して追い払う命令は何か。"
  },
  {
    "answer": "天保の薪水給与令",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "アヘン戦争の結果を受けて1842年に出された、打払令を緩和する法令は何か。"
  },
  {
    "answer": "ペリー",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1853年にアメリカ艦隊を率いて浦賀に来航し、日本の開国を求めた人物は誰か。"
  },
  {
    "answer": "阿部正弘",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "ペリー来航時の幕府老中で、安政の改革を進め近代化を推進した人物は誰か。"
  },
  {
    "answer": "日米和親条約",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1854年に、日本がアメリカと結んだ最初の条約を何というか。"
  },
  {
    "answer": "日米修好通商条約",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "1858年に大老の井伊直弼らが締結した、本格的な通商を認めた不平等条約は何か。"
  },
  {
    "answer": "ハリス",
    "category": "日：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "1",
    "question": "下田に着任して通商条約の締結を強く要求した、アメリカの初代総領事は誰か。"
  },
  {
    "answer": "イスタンブル",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1453年にビザンツ帝国を滅ぼしたオスマン帝国の首都で、現在はトルコ最大の都市はどこか。"
  },
  {
    "answer": "ムガル帝国",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "16世紀から19世紀半ばまで北インドを支配した、イスラーム教を国教とした帝国はどこか。"
  },
  {
    "answer": "満洲人",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "17世紀初めに明を滅ぼして「清」を建国した、中国東北地方を拠点とした民族は何か。"
  },
  {
    "answer": "景徳鎮",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "清の時代に陶磁器の生産地として栄え、現在も磁器の代名詞として知られる江西省の都市はどこか。"
  },
  {
    "answer": "トウモロコシ・サツマイモ",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "明・清の時代に中国へ伝来し、山地の開墾と人口増加を支えたアメリカ大陸原産の新作物（２つ）は何か。"
  },
  {
    "answer": "山西商人",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "清の時代、遠隔地商業や金融ネットワークを形成して台頭した、山西省出身の新興商人を何というか。"
  },
  {
    "answer": "新安（徽州）商人",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "清の時代、山西商人と並んで台頭した、安徽省（徽州）出身の新興商人を何というか。"
  },
  {
    "answer": "銀",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "海外貿易の結果、日本やアメリカから中国へ大量に流入し、貨幣経済の浸透や税の納税化をもたらした貴金属は何か。"
  },
  {
    "answer": "東インド会社",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "17世紀にイギリスやオランダがアジアでの商業活動を目的として設立した独占企業は何か。"
  },
  {
    "answer": "海禁",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "清が当初行っていた、民間人の海外渡航や私的な対外貿易を禁止・制限した政策を何というか。"
  },
  {
    "answer": "広州",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "清の乾隆帝が欧米諸国の船の入港を唯一認めた、貿易の制限が行われた港はどこか。"
  },
  {
    "answer": "権利の章典",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "17世紀末にイギリスで制定され、結果として、私的所有権を事実上保障し生産意欲を高めた文書は何か。"
  },
  {
    "answer": "大西洋三角貿易",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "18世紀のイギリスが、西アフリカや新大陸との間で行い資本を蓄積した貿易体制は何か。"
  },
  {
    "answer": "黒人奴隷",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "サトウキビや綿花のプランテーションで使役するため、西アフリカから新大陸へ送られたのは誰か。"
  },
  {
    "answer": "砂糖、綿花",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "大西洋三角貿易において、新大陸のアメリカからヨーロッパへ運ばれた主な産品は何か。"
  },
  {
    "answer": "武器・綿製品",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "大西洋三角貿易において、ヨーロッパから西アフリカへ送られた主な産品は何か。"
  },
  {
    "answer": "ジョン＝ケイ",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1733年に「飛び杼」を発明し、綿織物の作業効率を飛躍的に向上させた人物は誰か。"
  },
  {
    "answer": "ハーグリーヴズ",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1764年頃に、一度に多くの糸を紡ぐことができる「ジェニー紡績機」を発明したのは誰か。"
  },
  {
    "answer": "アークライト",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1769年に、水力を動力源とする「水力紡績機」を発明した人物は誰か。"
  },
  {
    "answer": "クロンプトン",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "ジェニー紡績機と水力紡績機の長所を取り入れた「ミュール紡績機」を発明したのは誰か。"
  },
  {
    "answer": "カートライト",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1785年に、織布工程を機械化するために「力織機」を発明した人物は誰か。"
  },
  {
    "answer": "ホイットニー",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1793年に、綿花の種子を取り除く「綿繰り機」を発明したアメリカ人は誰か。"
  },
  {
    "answer": "ワット",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1769年に蒸気機関を改良し、工場の動力源として実用化した人物は誰か。"
  },
  {
    "answer": "マンチェスター・リヴァプール",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1830年に鉄道が開通した、イギリスを代表する木綿工業都市と外港はどこか。"
  },
  {
    "answer": "マルクス",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "エンゲルスと共に『共産党宣言』を著し、社会主義思想を確立した人物は誰か。"
  },
  {
    "answer": "ドイツ関税同盟",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1834年に発足し、ドイツ国内の経済統合と産業革命を推進した枠組みは何か。"
  },
  {
    "answer": "大陸横断鉄道",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1869年に完成し、アメリカの国内市場統一と経済発展を支えた交通網は何か。"
  },
  {
    "answer": "第２次産業革命",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "19世紀後半、石油や電力を動力源として重化学工業が発達した技術革新を何というか。"
  },
  {
    "answer": "スティーヴンソン",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "蒸気機関車を実用化し、陸上の交通革命をリードしたイギリスの技術者は誰か。"
  },
  {
    "answer": "フルトン",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1807年に蒸気船を発明し、海上における交通革命をもたらしたアメリカ人は誰か。"
  },
  {
    "answer": "海底電信ケーブル",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "世界の一体化を加速させるため、19世紀に海を越えて敷設された情報伝達設備は何か。"
  },
  {
    "answer": "茶",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "18世紀から19世紀初めの片貿易において、清からイギリスへ輸出されていた主力商品は何か。"
  },
  {
    "answer": "アヘン",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "イギリスの対清貿易赤字を解消するため、インドから清へ密輸出された薬物は何か。"
  },
  {
    "answer": "綿製品",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "イギリス・インド・清の三角貿易において、イギリスからインドへ送られた工業製品は何か。"
  },
  {
    "answer": "アヘン戦争",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "清のアヘン取り締まりをきっかけに、1840年に勃発したイギリスとの戦争は何か。"
  },
  {
    "answer": "林則徐",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "アヘン密貿易を厳しく取り締まるため、欽差大臣として広州へ派遣された人物は誰か。"
  },
  {
    "answer": "南京条約",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "アヘン戦争に敗れた清が、1842年にイギリスと結んだ講和条約を何というか。"
  },
  {
    "answer": "香港島",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "南京条約によって、清からイギリスへ割譲された地域はどこか。"
  },
  {
    "answer": "領事裁判権",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "不平等条約において、外国人が在留国で犯した罪を自国の領事が裁く権利を何というか。"
  },
  {
    "answer": "アロー戦争",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "南京条約の履行に不熱心な清に対し、英仏連合軍が1856年から起こした戦争は何か。"
  },
  {
    "answer": "総理衙門（総理各国事務衙門）",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "アロー戦争後、清に設置された同国初の本格的な外交官庁を何というか。"
  },
  {
    "answer": "太平天国の乱",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "アヘン戦争後の重税に苦しむ民衆が、1851年に起こした大規模な反乱を何というか。"
  },
  {
    "answer": "洪秀全",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "キリスト教的秘密結社の拝上帝会を組織し、太平天国を建国した指導者は誰か。"
  },
  {
    "answer": "洋務運動",
    "category": "世：結びつく世界と日本の開国",
    "chapter": "S",
    "number": "2",
    "question": "1860年代半ばから清が進めた、西洋技術を導入して富国強兵を図る運動を何というか。"
  },
  {
    "answer": "井伊直弼",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "日米修好通商条約は勅許を得られないまま調印されたが，これを指示した大老はだれか。"
  },
  {
    "answer": "安政の大獄",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "井伊直弼は批判勢力に対して徹底的に弾圧を加え，処罰したが，これを何とよんでいるか。"
  },
  {
    "answer": "桜田門外の変",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "安政の大獄に反発した志士たちが，大老井伊直弼を登城途中に暗殺した事件を何というか。"
  },
  {
    "answer": "公武合体",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "江戸時代末期、幕府が朝廷との融和を図り、政治的安定を目指して推進した政策を何というか。"
  },
  {
    "answer": "徳川慶喜",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "14代将軍徳川家茂の将軍後見職に就いた人物は誰か。"
  },
  {
    "answer": "生麦事件",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1862年に，島津久光の行列を横切ったため，イギリス人が殺傷された。この事件を何というか。"
  },
  {
    "answer": "奇兵隊",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "長州藩では，1863年から正規兵以外に，農工商その他の人々で諸隊が編成されたが，その軍隊の名称は何か。"
  },
  {
    "answer": "高杉晋作",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "下関挙兵により長州藩では倒幕派が政権を掌握した。この中心となった、奇兵隊の創設者は誰か。"
  },
  {
    "answer": "木戸孝允",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "長州藩の倒幕勢力として活躍した、その時期には桂小五郎と名乗っていた人物は誰か。"
  },
  {
    "answer": "坂本龍馬",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "薩長同盟の成立の仲介をした土佐藩の人物は、中岡慎太郎と誰か。"
  },
  {
    "answer": "大政奉還",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "土佐藩のすすめに従い，将軍徳川慶喜は，朝廷に政権返上の上表を提出した。これを何というか。"
  },
  {
    "answer": "王政復古のクーデタ",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1867年、薩長の勢力が倒幕を目指し、幕府の政権を廃止して天皇中心の新政府樹立を宣言した事件を何というか。"
  },
  {
    "answer": "戊辰戦争",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1868-69年にかけて、新政府軍と旧幕府勢力との間で繰り広げられた、明治維新をめぐる内戦を何というか。"
  },
  {
    "answer": "五箇条の誓文",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府の基本方針は天皇が天地神明に誓うという形式で発表されたが，これを何というか。"
  },
  {
    "answer": "版籍奉還",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "木戸孝允・大久保利通らの画策で，４藩主が連名で領地や領民を奉還する上表を提出したが，これを何と言うか。"
  },
  {
    "answer": "廃藩置県",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1871年、明治政府が全国の藩を廃止し、府・県を設置して中央集権体制を確立した改革を何というか。"
  },
  {
    "answer": "華族・士族・平民",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府が身分制度改革として、旧大名や公家、旧武士、一般庶民を分類した新たな身分呼称をそれぞれ何というか。"
  },
  {
    "answer": "血税一揆",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "徴兵令に対して西日本を中心に反対の一揆がおこったが，これを何というか。"
  },
  {
    "answer": "地租改正",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府が1873年に実施し、地価を基準として地租を金納させた税制改革を何というか。"
  },
  {
    "answer": "民撰議院設立の建白書",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1874年に提出された、国民の代表による議会開設を要求した意見書を何というか。"
  },
  {
    "answer": "板垣退助",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "議会の開設要求を提出し、自由民権運動の中心的存在となった、旧土佐藩出身の人物は誰か。"
  },
  {
    "answer": "自由党",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "板垣退助を中心に結成され、フランス流の急進的民主主義を掲げて自由民権運動を推進した政党を何というか。"
  },
  {
    "answer": "立憲改進党",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "大隈重信を中心に結成され、イギリス流の立憲君主制と漸進的改革を掲げた政党を何というか。"
  },
  {
    "answer": "伊藤博文",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "憲法調査のためにプロイセン憲法を学びに渡欧した人物は誰か。"
  },
  {
    "answer": "華族令",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1884年，将来の上院議員選出のため，旧公卿・旧大名・維新の功臣などに，爵位を与えたが，その法令は何か。"
  },
  {
    "answer": "欽定憲法",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "第日本帝国憲法は，天皇が定め国民に与える形式をとったが，このような形式の憲法を何とよぶか。"
  },
  {
    "answer": "天皇大権",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "統治権の総攬者としての天皇が，議会の協賛なしに行使できる権能を何というか。"
  },
  {
    "answer": "衆議院・貴族院",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "大日本帝国憲法下における帝国議会は二院制を採用したが、それぞれの議院の名称は何か。"
  },
  {
    "answer": "大隈重信",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1898年に成立した、日本憲政史上初の政党内閣の内閣総理大臣は誰か。"
  },
  {
    "answer": "元老",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府の功労者で，第一線を退いた後，天皇を助け重要政策の決定や首相の推薦などにあたった人々を何と呼ぶか。"
  },
  {
    "answer": "福沢諭吉",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "著書『学問のすゝめ』で独立自尊の精神を説き、明治時代の啓蒙思想に大きな影響を与えた教育者・思想家は誰か。"
  },
  {
    "answer": "中村正直",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1866年にイギリスに留学し，イギリス人スマイルズの『自助論』などを翻訳・出版した啓蒙思想家はだれか。"
  },
  {
    "answer": "中江兆民",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "ルソーの『社会契約論』を抄訳し，東洋のルソーともいわれた思想家はだれか。"
  },
  {
    "answer": "太陽暦",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府が採用した暦は何か。"
  },
  {
    "answer": "教育勅語",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1890年に発布され、忠君愛国や道徳の重要性を説き、日本の教育の基本理念となった天皇による詔書を何というか。"
  },
  {
    "answer": "神道",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府で国教に指定された宗教は何か。"
  },
  {
    "answer": "自由貿易",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "19世紀後半に国際経済の枠組みとして形成された、国家の介入を最小限に抑えた貿易のあり方を何というか。"
  },
  {
    "answer": "居留地貿易",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "開港後の日本で、外国人が設定された特定地域内でのみ行うことを許された貿易形態を何というか。"
  },
  {
    "answer": "生糸・茶",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "開国後の日本は、何を輸出することで利益を上げていたか、２つ答えなさい。"
  },
  {
    "answer": "綿糸",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "開国後の日本において、綿織物産業が衰えかけるが、何を輸入することによって事態の打開を図ったか。"
  },
  {
    "answer": "殖産興業政策",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治政府が近代産業の育成を目指して行った、官営工場の設立や技術導入などの経済政策を何というか。"
  },
  {
    "answer": "新貨条例",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1871年に明治政府が発布し、円・銭・厘を基本単位とする金本位制の貨幣制度を定めた法令を何というか。"
  },
  {
    "answer": "国立銀行条例",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1872年に制定され、正貨と交換できる貨幣の発行を目的に、模範的銀行を設立するために定められた法令は何か。"
  },
  {
    "answer": "兌換紙幣",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "一定の金や銀と交換できることを保証された紙幣を何というか。"
  },
  {
    "answer": "大隈重信",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "西南戦争の戦費や殖産興業のために不換紙幣を増発した経済政策をとった、当時の大蔵卿は誰か。"
  },
  {
    "answer": "松方正義",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "インフレの沈静化を目指し、緊縮財政と日本銀行の設立などを進めた明治時代の財政家は誰か。"
  },
  {
    "answer": "日本銀行",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1882年に設立され、紙幣の発行権を独占する中央銀行として日本の金融制度の中核を担った機関は何か。"
  },
  {
    "answer": "金本位制",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "貨幣の価値を一定量の金に裏付ける制度で、日本では1897年に本格的に採用された通貨制度を何というか。"
  },
  {
    "answer": "渋沢栄一",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "日本資本主義の父と呼ばれ、第一国立銀行の設立や多数の企業の創立に関わった明治時代の実業家は誰か。"
  },
  {
    "answer": "大阪紡績会社",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "渋沢栄一によって設立され、近代紡績業の発展に大きく貢献した日本初の蒸気力を用いた紡績会社は何か。"
  },
  {
    "answer": "外貨獲得産業",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治時代の日本で、生糸や茶など海外に輸出して外貨を稼ぐことを目的とした産業を何というか。"
  },
  {
    "answer": "財閥",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "銀行や工場など多様な産業を支配し、経済的に大きな影響力を持った巨大な企業集団を何というか。"
  },
  {
    "answer": "領事裁判権",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "19世紀の不平等条約で外国人に認められた、自国の領土内であっても自国の法で裁かれない権利を何というか。"
  },
  {
    "answer": "関税自主権",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "不平等条約の内容の一つで、日本が独自に輸入品への税率を決定できなかった権利を何というか。"
  },
  {
    "answer": "岩倉具視",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "廃藩置県などの改革を主導し、不平等条約改正を目指して欧米を視察した使節団を率いた人物は誰か。"
  },
  {
    "answer": "井上馨",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治時代に外務卿として条約改正交渉を行ったが、欧化政策への批判を受けて辞任した政治家は誰か。"
  },
  {
    "answer": "鹿鳴館",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治時代の外交政策の一環として建設され、欧化政策を象徴する舞踏会などが行われた社交場は何か。"
  },
  {
    "answer": "青木周蔵",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "明治時代、ドイツ公使や外務大臣を務め、条約改正交渉中に大津事件が起きたため辞任した外交官は誰か。"
  },
  {
    "answer": "大津事件",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1891年，来日中のロシア皇太子が傷つけられた事件を何というか。"
  },
  {
    "answer": "樺太・千島交換条約",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1875年、開拓長官黒田清隆の建議により，ロシアとの国境を確定する条約が締結されたが，この条約は何か。"
  },
  {
    "answer": "日清修好条規",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "清国とのはじめての条約は，対等な形で締結されたが，これを何というか。"
  },
  {
    "answer": "台湾出兵",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "琉球漂流民殺害事件の責任問題をめぐり，日清間の対立がおこり，日本が武力行使を行った。これを何というか。"
  },
  {
    "answer": "琉球処分",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "琉球が日本に統合される過程を何というか，漢字４字で示せ。"
  },
  {
    "answer": "江華島事件",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1875年、日本の軍艦が，朝鮮の漢江河口付近で示威行動中に砲撃を受け，応戦した。この挑発事件を何というか。"
  },
  {
    "answer": "日朝修好条規",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "江華島事件で，日本政府は朝鮮に圧力をかけ，条約を締結したが，この条約を何というか。"
  },
  {
    "answer": "壬午軍乱",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1882年、大院君派の軍隊が首都でおこした反乱は何か。"
  },
  {
    "answer": "大院君",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "19世紀後半の朝鮮で、開国に反対して攘夷政策をとり、政権を握った高宗の父は誰か。"
  },
  {
    "answer": "甲申政変",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1884年、開化派が企てたが、失敗に終わったクーデタを何と呼ぶか。"
  },
  {
    "answer": "金玉均",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "開化派の指導者は誰か。"
  },
  {
    "answer": "天津条約",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1885年、甲申政変の事後処理に関して日本と清が結んだ条約は何か。"
  },
  {
    "answer": "日英通商航海条約",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "日英間で，日清戦争勃発直前に，領事裁判権の撤廃などを内容とする条約を締結したが，その条約を何というか。"
  },
  {
    "answer": "ボアソナード",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1890年に公布された民法を起草したフランス人法学者はだれか。"
  },
  {
    "answer": "甲午農民戦争",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1894年、東学の信徒を中心におこった農民反乱は何か。"
  },
  {
    "answer": "遼東半島・台湾",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "下関条約で清から日本に割譲されたのは、澎湖諸島とどこか。２か所答えなさい。"
  },
  {
    "answer": "三国干渉",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "下関条約で日本が領土を取得したことに反対して、ロシア・ドイツ・フランスが行った動きを何と呼ぶか。"
  },
  {
    "answer": "遼東半島",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "三国干渉の結果、日本が清に返還した領土はどこか。"
  },
  {
    "answer": "日英同盟",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "東アジアにおけるロシアの南下を阻止すべく、1902年イギリスが締結した軍事同盟は何か。"
  },
  {
    "answer": "日本海海戦",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "日露戦争で、日本海軍がロシアのバルチック艦隊を撃破した戦いは何か。"
  },
  {
    "answer": "ポーツマス条約",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1905年９月に結ばれた日露戦争の講和条約は何か。"
  },
  {
    "answer": "日比谷焼打ち事件",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "日露戦争の講和条約を屈辱的なものとして条約破棄を叫んで暴動化する事件が発生したが、これを何というか。"
  },
  {
    "answer": "統監府",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "1905年、韓国の外交権を掌握し保護国にした日本が、韓国に設置した統治機関は何か。"
  },
  {
    "answer": "伊藤博文",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "初代の韓国統監についた日本人は誰か。"
  },
  {
    "answer": "義兵闘争",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "韓国の保護国化に対して、1905年以降再びおこった朝鮮民衆の反日武装闘争を何と呼ぶか。"
  },
  {
    "answer": "朝鮮総督府",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "韓国併合ののち、日本が京城（現ソウル）においた朝鮮統治機関は何か。"
  },
  {
    "answer": "桂太郎・西園寺公望",
    "category": "日：国民国家と明治維新",
    "chapter": "S",
    "number": "3",
    "question": "日露戦争後の日本で、政権を交代で担当し「桂園時代」と呼ばれる政界の安定期を築いた２人の政治家は誰か。"
  },
  {
    "answer": "印紙法",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1765年に英国が制定した、刊行物に印紙を貼ることを義務づけた課税法は何か。"
  },
  {
    "answer": "「代表なくして課税なし」",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "印紙法に対し、北米の植民地側が抵抗の際に掲げた有名なスローガンは何か。"
  },
  {
    "answer": "茶法",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1773年に英東インド会社へ茶の独占販売権を与えた、独立戦争の契機となる法は何か。"
  },
  {
    "answer": "ボストン茶会事件",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "茶法への反対運動として、植民地人が茶箱を海へ投棄した1773年の事件は何か。"
  },
  {
    "answer": "ワシントン",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "アメリカ独立戦争において、植民地軍の総司令官を務め後に初代大統領となったのは誰か。"
  },
  {
    "answer": "独立宣言",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1776年に採択され、基本的人権や人民主権を主張した文書は何か。"
  },
  {
    "answer": "革命権（抵抗権）",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "アメリカの独立宣言において、人民が不当な政治に抵抗できるとした権利は何か。"
  },
  {
    "answer": "合衆国憲法",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1787年に制定された、三権分立や連邦主義を特色とする憲法を何というか。"
  },
  {
    "answer": "ルイ16世",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "フランス革命勃発時の国王で、後に処刑された人物は誰か。"
  },
  {
    "answer": "国民議会",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "フランス革命時、第三身分の代表が三部会から分離して成立させた議会は何か。"
  },
  {
    "answer": "人権宣言",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1789年に採択され、自由、平等、主権在民などの原理を掲げた宣言は何か。"
  },
  {
    "answer": "バスティーユ牢獄",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "フランス革命の始まりとされる、1789年7月に民衆が襲撃した場所はどこか。"
  },
  {
    "answer": "第一共和政",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1792年に王政が廃止され、ロベスピエールらが急進的改革を行った体制は何か。"
  },
  {
    "answer": "ロベスピエール",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "フランス革命の第一共和政下で、恐怖政治を指導した人物は誰か。"
  },
  {
    "answer": "徴兵制",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "革命下のフランスで実施された、国民に軍務を義務づける制度は何か。"
  },
  {
    "answer": "ナポレオン法典",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1804年に制定された、法の前の平等や私有財産の不可侵を認めた民法典は何か。"
  },
  {
    "answer": "第一帝政",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1804年にナポレオンが皇帝に即位したことで始まった体制を何というか。"
  },
  {
    "answer": "大陸閉鎖令",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "ナポレオンがイギリスに経済的打撃を与えるため、大陸諸国へ出した通商禁止令は何か。"
  },
  {
    "answer": "ロシア",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1812年にナポレオンが遠征に失敗し、没落の大きな原因となった国はどこか。"
  },
  {
    "answer": "ライプツィヒの戦い",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1813年にナポレオンが連合軍に敗れた、別名「諸国民戦争」とも呼ばれる戦いは何か。"
  },
  {
    "answer": "ワーテルローの戦い",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "一度復活したナポレオンが、1815年にイギリスなどの連合軍に敗れた戦いは何か。"
  },
  {
    "answer": "クリオーリョ",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "ラテンアメリカの独立運動で主体となった、植民地生まれの白人を何というか。"
  },
  {
    "answer": "ハイチ",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1804年にフランスから独立した、世界初の黒人共和国はどこか。"
  },
  {
    "answer": "ナショナリズム",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "国民や民族という政治的共同体を重視し、独立や統一を目指す思想や運動は何か。"
  },
  {
    "answer": "国民国家",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "近代において、一定の領域に主権者としての国民が集まって成立する国家を何というか。"
  },
  {
    "answer": "ビスマルク",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1871年、プロイセン王国主導でドイツ統一を成し遂げた首相は誰か。"
  },
  {
    "answer": "クリミア戦争",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "敗北したロシアが農奴解放令を出す契機となった、19世紀半ばの戦争は何か。"
  },
  {
    "answer": "米英戦争",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1812年に始まり、米国の経済的自立を促したイギリスとの戦争は何か。"
  },
  {
    "answer": "ジャクソン",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "先住民強制移住法を制定し、保留地への移住を強行した米国の第7代大統領は誰か。"
  },
  {
    "answer": "「西漸運動」",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "神から与えられた使命として正当化された、米国の西部開拓運動を何というか。"
  },
  {
    "answer": "南北戦争",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1861年、奴隷制や貿易方針をめぐる南北の対立から発生した米国内戦は何か。"
  },
  {
    "answer": "北部",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "アメリカで奴隷制に反対したのは北部・南部のどちらか。"
  },
  {
    "answer": "北部",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "アメリカで連邦主義を主張したのは北部・南部のどちらか。"
  },
  {
    "answer": "北部",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀半ばのアメリカで、共和党の主な支持基盤となったのは北部・南部のどちらか。"
  },
  {
    "answer": "南部",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "アメリカで奴隷制に賛成したのは北部・南部のどちらか。"
  },
  {
    "answer": "南部",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "アメリカで州権主義を主張したのは北部・南部のどちらか。"
  },
  {
    "answer": "南部",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀半ばのアメリカで、民主党の主な支持基盤となったのは北部・南部のどちらか。"
  },
  {
    "answer": "リンカン",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "南北戦争中に「奴隷解放宣言」を出し、合衆国の再統一を果たした大統領は誰か。"
  },
  {
    "answer": "奴隷解放宣言",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1863年に出され、アメリカ南部の奴隷の法的な自由を保障した宣言は何か。"
  },
  {
    "answer": "ギリシア",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1829年にオスマン帝国から独立を果たした、ヨーロッパの支援を受けた国はどこか。"
  },
  {
    "answer": "ムハンマド＝アリー",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "エジプトで近代化政策を行い、実質的な独立を勝ち取った人物は誰か。"
  },
  {
    "answer": "タンジマート",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1839年からオスマン帝国で開始された、西欧化を目指す恩恵改革を何というか。"
  },
  {
    "answer": "ミドハト憲法",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1876年に発布された、アジア最初の近代的な憲法ともされる文書は何か。"
  },
  {
    "answer": "ガージャール朝",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "18世紀末から20世紀初めまで、現在のイランを支配した王朝は何か。"
  },
  {
    "answer": "タバコ＝ボイコット運動",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "イギリスへの利権譲渡に反対して、1891年にイランで起きた反対運動は何か。"
  },
  {
    "answer": "アフガーニー",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "パン＝イスラーム主義を唱え、イスラーム世界の民族運動に影響を与えた人物は誰か。"
  },
  {
    "answer": "イラン立憲革命",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1906年にイランで発生し、憲法発布や議会開設を実現させた動きは何か。"
  },
  {
    "answer": "帝国主義",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "独占資本主義段階に入った欧米列強が，19世紀後半から展開した積極的な対外膨張政策を何と呼ぶか。"
  },
  {
    "answer": "カイロ・ケープタウン・カルカッタ",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀後半、イギリスの３C政策の拠点として重視した三大都市はどこか。"
  },
  {
    "answer": "米西戦争",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1898年、アメリカ合衆国がスペインと戦い、フィリピンやキューバの支配権を獲得した戦争を何というか。"
  },
  {
    "answer": "セオドア＝ローズヴェルト",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "棍棒外交により、ラテンアメリカ諸国に対する影響力を強めたアメリカ大統領は誰か。"
  },
  {
    "answer": "石油・電力",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "第２次産業革命以降使用された、燃料・動力は何か。"
  },
  {
    "answer": "ベルリン（＝コンゴ）会議",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "ベルギーのコンゴ領有をめぐる紛争を調停するため，1884〜85年に開催された国際会議は何か。"
  },
  {
    "answer": "ビスマルク",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "ベルギーのコンゴ領有をめぐる紛争を調停するため，国際会議を開いた人物は誰か。"
  },
  {
    "answer": "南アフリカ戦争",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1899-1902年、イギリスがブール人と戦い、イギリスの南アフリカ支配を確立した戦争を何というか。"
  },
  {
    "answer": "ファショダ事件",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1898年，イギリスとフランスのアフリカ進出政策が，スーダンで衝突・対立した事件を何と呼ぶか。"
  },
  {
    "answer": "英仏協商",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1904年，イギリスとフランスが北アフリカ地域での相互の優越権を承認した協定は何か。"
  },
  {
    "answer": "エチオピア帝国/リベリア共和国",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀のアフリカ分割の中で、ヨーロッパ列強による植民地支配をほぼ免れた二つの国はどこか。"
  },
  {
    "answer": "露仏同盟",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1894年に正式調印された，ロシアとフランスとのあいだで結ばれた同盟は何か。"
  },
  {
    "answer": "ベルリン・ビザンティウム・バグダード",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀後半、ドイツの３B政策の拠点として重視した三大都市はどこか。"
  },
  {
    "answer": "日英同盟",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1902年，ロシアの東アジア進出に対抗するため，イギリスが孤立主義外交を放棄して結んだ同盟は何か。"
  },
  {
    "answer": "英仏協商",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1904年，ドイツの進出政策に対抗するため，イギリスとフランスが結んだ協定は何か。"
  },
  {
    "answer": "英露協商",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1907年，イラン・アフガニスタン・チベット地域に関して，イギリスとロシアが結んだ協定は何か。"
  },
  {
    "answer": "グレート＝ゲーム",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀、イギリスとロシアが西アジア・中央アジアの支配権を巡って繰り広げた政治/軍事的な対立を何というか。"
  },
  {
    "answer": "イギリス",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "オスマン帝国はどこと通商条約を結んだことで関税自主権を失ったか。"
  },
  {
    "answer": "ロシア",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "オスマン帝国はどこと通商条約を結んだことで関税自主権を失ったか。"
  },
  {
    "answer": "スエズ運河",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "財政難に陥ったエジプトは、何を運営する会社の株式をイギリスに売却したか。"
  },
  {
    "answer": "シパーヒーの代反乱",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1857-59年に発生した、東インド会社のインド人傭兵による反乱は何か。"
  },
  {
    "answer": "ヴィクトリア女王",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1877年に建国されたインド帝国の皇帝は誰か。"
  },
  {
    "answer": "強制栽培制度(政府栽培制度)",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1830年からオランダがジャワ島の農民に導入した，コーヒー・サトウキビ・藍などを栽培させた経済政策は何か。"
  },
  {
    "answer": "イギリス",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "マレー半島やビルマを植民地化した列強はどこか。"
  },
  {
    "answer": "フランス",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "ベトナムをはじめとするインドシナ半島を植民地化した列強はどこか。"
  },
  {
    "answer": "ラーマ5世",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "近代化政策や外交交渉によって独立を維持した、タイの国王は誰か。"
  },
  {
    "answer": "膠州湾",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1898年、ドイツが租借した山東半島南西岸の湾はどこか。"
  },
  {
    "answer": "旅順・大連",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1898年、ロシアが租借して、要塞・軍港と商港を建設した都市はどこか。２か所答えなさい。"
  },
  {
    "answer": "威海衛",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "ロシアに対抗するため、1898年にイギリスが租借して東洋艦隊の基地とした山東半島の海港はどこか。"
  },
  {
    "answer": "広州湾",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1899年にフランスが租借した、広東省南岸の湾はどこか。"
  },
  {
    "answer": "戊戌の変法",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "日清戦争の敗北後、若手官僚を中心に、明治維新を規範に立憲制の樹立をめざした改革を何と呼ぶか。"
  },
  {
    "answer": "義和団",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "19世紀末の中国で、外国勢力やキリスト教徒を排斥し、清朝と連携して蜂起した民間武装集団は何か。"
  },
  {
    "answer": "扶清滅洋",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "義和団が掲げたスローガンは何か。"
  },
  {
    "answer": "北京議定書（辛丑和約）",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1901年に清が11カ国と調印した、義和団戦争の講和に関する議定書は何か。"
  },
  {
    "answer": "大韓帝国",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1897年、独立国であることを示すため、朝鮮が採用した国号は何か。"
  },
  {
    "answer": "科挙",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1905年、新政のなかで廃止された、官僚登用試験は何か。"
  },
  {
    "answer": "孫文",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "興中会を組織し、清朝打倒の革命の中心となった、広東出身の指導者は誰か。"
  },
  {
    "answer": "中国同盟会",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1905年、革命諸団体が結集して、東京で結成された組織で、『民報』などを発行したものは何か。"
  },
  {
    "answer": "辛亥革命",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1911年に武昌で起こり、清朝を倒して中華民国の成立へとつながった革命を何というか。"
  },
  {
    "answer": "袁世凱",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "孫文から臨時大総統の地位を引き継ぐも、帝政の宣言するなど、革命運動を混乱させた人物は誰か。"
  },
  {
    "answer": "宣統帝",
    "category": "世：国民国家と明治維新",
    "chapter": "S",
    "number": "4",
    "question": "1912年2月、退位した清朝最後の皇帝は誰か。"
  },
  {
    "answer": "二十一か条の要求",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "日：総力戦と社会運動"
  },
  {
    "answer": "大隈重信",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "二十一か条の要求を行った当時の内閣総理大臣は誰か。"
  },
  {
    "answer": "袁世凱",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "二十一か条の要求を、一部を除いて受諾した当時の中華民国の指導者は誰か。"
  },
  {
    "answer": "大戦景気",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "第一次世界大戦中に日本が輸出拡大により経験した好景気を何と呼ぶか。"
  },
  {
    "answer": "在華紡",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "第一次世界大戦中に急成長した、中国に進出した日本の紡績業を何と呼ぶか。"
  },
  {
    "answer": "造船業",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "第一次世界大戦中の需要急増により発展した日本の産業は何か。"
  },
  {
    "answer": "船成金",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "第一次世界大戦中に造船業で巨万の富を築いた人々を何と呼んだか。"
  },
  {
    "answer": "重化学工業",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "鉄鋼業・化学工業・機械工業など、第一次世界大戦中に発達した工業部門を総称して何と呼ぶか。"
  },
  {
    "answer": "戦後恐慌",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1920年に始まった、第一次世界大戦後の反動で生じた日本の不景気を何と呼ぶか。"
  },
  {
    "answer": "関東大震災",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1923年9月1日に発生し、日本経済に大きな打撃を与えた大災害は何か。"
  },
  {
    "answer": "金融恐慌",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1927年に発生した、震災手形処理問題をきっかけとした日本の経済危機を何と呼ぶか。"
  },
  {
    "answer": "震災手形",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "関東大震災後の復興資金として発行されたが、不良債権化して金融恐慌の原因となった手形は何か。"
  },
  {
    "answer": "田中義一",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1927年の金融恐慌時に首相として支払猶予令を出した政治家は誰か。"
  },
  {
    "answer": "井上準之助",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1929年に蔵相として金本位制復帰を実施した政治家は誰か。"
  },
  {
    "answer": "金輸出解禁",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "当時の大蔵大臣が1930年に実施した、金本位制復帰のための政策のことを何と呼ぶか。"
  },
  {
    "answer": "三・一独立運動",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1919年に朝鮮で起こった、日本からの独立を求める民族運動は何か。"
  },
  {
    "answer": "文化政治",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "三・一独立運動後に朝鮮総督府がとった、従来の武断政治を改めた統治政策は何か。"
  },
  {
    "answer": "憲政擁護運動(第１次護憲運動)",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "第３次桂太郎内閣の退陣を要求する全国的な運動を何とよぶか。"
  },
  {
    "answer": "大正政変",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "桂太郎内閣を打倒し、立憲政治の擁護を求めた第一次の民主主義運動を何とよぶか。"
  },
  {
    "answer": "「民本主義」",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "吉野作造が、政治の目的は国民の幸福にあるべきだと主張した、その思想を何とよぶか。"
  },
  {
    "answer": "米騒動",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "シベリア出兵に伴う米価高騰に不満を持った人々が起こし、寺内正毅内閣を退陣に追い込んだ暴動を何とよぶか。"
  },
  {
    "answer": "原敬",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "藩閥出身者ではなく、本格的な政党内閣を組織し、「平民宰相」と呼ばれた人物は誰か。"
  },
  {
    "answer": "大正デモクラシー",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "大正時代に、国民の政治参加を求める自由主義的な風潮が高まった社会運動を総称して何とよぶか。"
  },
  {
    "answer": "加藤高明",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "第2次護憲運動を主導し、護憲三派内閣の首相として、普通選挙法（男子普通選挙）を実現させた人物は誰か。"
  },
  {
    "answer": "治安維持法",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1925年に制定された、社会主義者などの政治活動を厳しく取り締まることを目的とした法律を何というか。"
  },
  {
    "answer": "平塚らいてう",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "「元始、女性は実に太陽であった」という宣言で知られる文芸雑誌『青鞜』を創刊した女性解放運動家は誰ですか。"
  },
  {
    "answer": "市川房枝",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "婦人参政権獲得を目指して活動し、平塚らと共に新婦人協会を設立した女性運動家は誰か。"
  },
  {
    "answer": "全国水平社",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1922年に京都で創立され、被差別部落民の解放を求めた団体は何か。"
  },
  {
    "answer": "職業婦人",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "大正・昭和初期、事務・サービス業などホワイトカラーで働いた女性は何と呼ばれたか。"
  },
  {
    "answer": "文化住宅",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "大正末期から戦前、洋間とモダンな台所・風呂場を備えた都市住宅の名称は何か。"
  },
  {
    "answer": "モダンガール",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "昭和初期の日本で、洋風の服装と自由なライフスタイルを好み、新しい女性像を象徴した女性を何と呼ぶか。"
  },
  {
    "answer": "大学令",
    "category": "日：総力戦と社会運動",
    "chapter": "S",
    "number": "5",
    "question": "1918年に原敬内閣によって公布され、公立・私立の単科大学や総合大学の設立を認めた法令を何と呼ぶか。"
  },
  {
    "answer": "サライェヴォ事件",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1914年6月28日にオーストリア皇太子が暗殺された、第１次世界大戦の発端となる事件は何か。"
  },
  {
    "answer": "ボスニア・ヘルツェゴヴィナ",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "サライェヴォを中心とする、スラブ人が多く居住するもオーストリアの支配下だった地域はどこか。"
  },
  {
    "answer": "塹壕戦",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "第１次世界大戦の西部戦線で展開され、特に西部戦線の長期化をもたらした戦術は何か。"
  },
  {
    "answer": "タンネンベルクの戦い",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1914年にドイツ軍がロシア軍を破った、東プロイセンでの戦いは何か。"
  },
  {
    "answer": "孤立主義",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "アメリカが国際政治から距離を置き、国内問題に専念したその外交政策を何と呼ぶか。"
  },
  {
    "answer": "ウィルソン",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "アメリカの第一次世界大戦への参加を決定した当時のアメリカ大統領は誰か。"
  },
  {
    "answer": "フセイン・マクマホン協定",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1915年から16年にかけてイギリスがアラブ人と結んだ、反オスマン蜂起を促す協定は何か。"
  },
  {
    "answer": "サイクス・ピコ協定",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1916年にイギリスとフランスが結んだ、オスマン帝国領土分割の秘密協定は何か。"
  },
  {
    "answer": "バルフォア宣言",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1917年にイギリスが発表した、ユダヤ人国家建設支持を表明した宣言は何か。"
  },
  {
    "answer": "十四か条の平和原則",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ウィルソンが1918年に発表した、戦後処理原則を示した平和原則は何か。"
  },
  {
    "answer": "民族自決",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "各民族が自らの意思で国家を形成する権利を何と呼ぶか。"
  },
  {
    "answer": "ブレスト＝リトフスク条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1918年3月にドイツとソヴィエト・ロシアが締結した単独講和条約は何か。"
  },
  {
    "answer": "ローザ＝ルクセンブルク",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ドイツの革命家で、スパルタクス団（共産党の前身）の指導者として活動し、殺害された女性は誰か。"
  },
  {
    "answer": "ヴァイマル共和国",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "第一次世界大戦後にドイツで成立した共和制国家の通称は何か。"
  },
  {
    "answer": "総力戦体制",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "国家が国民の政治・経済・社会・文化生活のすべてを動員・統制し、戦争遂行を目指す体制を何と呼ぶか"
  },
  {
    "answer": "二月革命",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1917年に発生した、ニコライ２世を退位させ、ロシアの帝政を終わらせた革命は何か。"
  },
  {
    "answer": "ペトログラード",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "二月革命の舞台となった、ロシアの首都の当時の名称は何か。"
  },
  {
    "answer": "ソヴィエト",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ロシアの革命をきっかけに結成された、労兵一致の自治組織のことを何と呼ぶか。"
  },
  {
    "answer": "レーニン",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1917年4月にロシアに帰国し、社会主義革命を呼びかけた革命家は誰か。"
  },
  {
    "answer": "十月革命",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1917年に発生した、史上初とされるの社会主義革命を何と呼ぶか。"
  },
  {
    "answer": "平和に関する布告",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "レーニンが発表した、無併合・無賠償・民族自決を訴え、第１次世界大戦からの離脱を表明した宣言は何か。"
  },
  {
    "answer": "土地に関する布告",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "レーニンが発表した、農地改革を宣言した布告は何か。"
  },
  {
    "answer": "共産党",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1918年にボリシェヴィキが改称した、ソヴィエト＝ロシアの党名は何か。"
  },
  {
    "answer": "コミンテルン",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1919年にレーニンが創設した、世界革命を目指す国際組織は何か。"
  },
  {
    "answer": "シベリア出兵",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1918年から1922年にかけて日本が革命後のロシアに派遣した軍事干渉は何か。"
  },
  {
    "answer": "赤軍",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1918年に創設された、ソヴィエト＝ロシアの軍隊を何と呼ぶか。"
  },
  {
    "answer": "戦時共産主義",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1918年から21年にかけてソヴィエト＝ロシアが実施した、統制経済政策を何と呼ぶか。"
  },
  {
    "answer": "ネップ",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1921年からソヴィエト＝ロシアが実施した、市場経済を部分的に導入した政策は何か。"
  },
  {
    "answer": "ソヴィエト社会主義共和国連邦",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1922年12月にロシア=ソヴィエト連邦社会主義共和国など4共和国により成立した国家は何か。"
  },
  {
    "answer": "スターリン",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "一国社会主義論を主張し、1924年以降ソ連の最高指導者となった人物は誰か。"
  },
  {
    "answer": "トロツキー",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "世界革命論を主張し、レーニンの死後スターリンとの権力闘争に敗れた革命家は誰か。"
  },
  {
    "answer": "第1次五ヵ年計画",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1928年に開始されたソ連の経済建設計画で、重工業の発展と農業の集団化を重視したものは何か。"
  },
  {
    "answer": "（農業の）集団化",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ソ連における第１次五ヵ年計画において、コルホーズ、ソフホーズの創設は何を目的としたものか。"
  },
  {
    "answer": "フォード",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "大量生産システムを確立し、自動車の普及に貢献したアメリカの実業家は誰か。"
  },
  {
    "answer": "禁酒法",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1920年から1933年まで施行され、アルコール飲料の製造・販売を禁止した法律は何か。"
  },
  {
    "answer": "移民法",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1924年にアメリカで制定され、特にアジア系移民を大幅に制限した法律は何か。"
  },
  {
    "answer": "パリ講和会議",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "第一次世界大戦の講和会議の名称は何か。"
  },
  {
    "answer": "ヴェルサイユ条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "第一次世界大戦の対ドイツ講和条約の名称は何か。"
  },
  {
    "answer": "国際連盟",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ウィルソンの提唱の結果、1920年に設立された、史上初の国際平和維持機構の名称は何か。"
  },
  {
    "answer": "集団安全保障",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "紛争が起こった場合に国際機関が集団で制裁を加えて平和を維持する仕組みを何と呼ぶか。"
  },
  {
    "answer": "ワシントン会議",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1921～22年にアメリカの呼びかけで開催され、太平洋・東アジア問題を討議した国際会議は何か。"
  },
  {
    "answer": "四カ国条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ワシントン会議で締結された、アメリカ・イギリス・フランス・日本が太平洋の現状維持を約束した条約は何か。"
  },
  {
    "answer": "日英同盟",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1902年に締結されたが、ワシントン会議の結果廃止された軍事同盟は何か。"
  },
  {
    "answer": "九カ国条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ワシントン会議で締結された、中国の主権尊重・領土保全・門戸開放・機会均等を定めた条約は何か。"
  },
  {
    "answer": "ワシントン海軍軍備制限条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ワシントン会議で締結された、米英日仏伊の主力艦保有比率を定めた条約は何か。"
  },
  {
    "answer": "ロカルノ条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1925年にドイツ・フランス・ベルギーなどが調印した、ドイツの西部国境の現状維持を確認した条約は何か。"
  },
  {
    "answer": "国際連盟",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ロカルノ条約の締結の結果、その翌年にドイツの参加が実現した国際組織は何か。"
  },
  {
    "answer": "不戦条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1928年にケロッグ（米）とブリアン（仏）が提唱し、戦争を放棄した条約は何か。"
  },
  {
    "answer": "ロンドン会議",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1930年にロンドンで開催された、日米英の補助艦制限を協議した軍縮会議は何か。"
  },
  {
    "answer": "孤立主義",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "アメリカが第一次世界大戦後にとった、国際政治への関与を避ける外交政策を何と呼ぶか。"
  },
  {
    "answer": "ドーズ案",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1924年にアメリカの財政専門家が提案した、ドイツの賠償問題を解決するための計画は何か。"
  },
  {
    "answer": "新文化運動",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1915年頃から中国で起こった、伝統的権威を否定し民主主義・科学を重視した文化革新運動は何か。"
  },
  {
    "answer": "五・四運動",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1919年に中国で起こった、ヴェルサイユ条約に反対する反日・反帝国主義運動は何か。"
  },
  {
    "answer": "中国国民党",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1919年に孫文により再建された中国の政党は何か。"
  },
  {
    "answer": "中国共産党",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1921年7月に上海で結成された、中国のマルクス主義政党は何か。"
  },
  {
    "answer": "ベンガル分割令",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1905年にイギリスがインドで実施したが、反発により11年に撤回した行政措置は何か。"
  },
  {
    "answer": "国民会議派",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1885年に結成された、反英運動を展開したインドの民族主義政党は何か。"
  },
  {
    "answer": "スワデーシ",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "「国産品愛用」を意味する、カルカッタ大会４綱領の１つは何か。"
  },
  {
    "answer": "スワラージ",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "「自治の獲得」を意味する、カルカッタ大会４綱領の１つは何か。"
  },
  {
    "answer": "英貨排斥",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "イギリス製品の不買運動につながる、カルカッタ大会４綱領の１つは何か。"
  },
  {
    "answer": "民族教育",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "イギリス系教育に対抗する運動につながる、カルカッタ大会４綱領の１つは何か。"
  },
  {
    "answer": "全インド＝ムスリム連盟",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "インドの民族運動の鈍化を目的に英によって1906年に結成された、インドのイスラーム教徒の政治組織は何か。"
  },
  {
    "answer": "ローラット法",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1919年にイギリスがインドで制定した、集会・出版の自由を制限し、令状なしの逮捕を認めた弾圧法は何か。"
  },
  {
    "answer": "ガンディー",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "「マハトマ（偉大な魂）」と呼ばれた、非暴力・不服従を説いたインド独立運動の指導者は誰か。"
  },
  {
    "answer": "ネルー",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "インド国民会議派の指導者で、のちに独立後初代首相となった政治家は誰か。"
  },
  {
    "answer": "委任統治領",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "第一次世界大戦後、敗戦国の植民地を戦勝国が国際連盟の監督下で統治したが、その領土を何と呼ぶか。"
  },
  {
    "answer": "エジプト王国",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ワフド党の活動の結果、1922年にイギリスから独立を達成した王国は何か。"
  },
  {
    "answer": "スエズ運河",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "エジプトの独立後もイギリスが権益を保持した、地中海世界とアジア世界を結ぶ交通の要衝は何か。"
  },
  {
    "answer": "セーヴル条約",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "第一次世界大戦後、連合国がオスマン帝国と結んだ講和条約は何か。"
  },
  {
    "answer": "ムスタファ＝ケマル（ケマル＝アタテュルク）",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "トルコ革命を指導し、トルコ共和国初代大統領となった軍人・政治家は誰か。"
  },
  {
    "answer": "スルタン制",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "1922年に廃止された、オスマン帝国皇帝の制度は何か。"
  },
  {
    "answer": "トルコ共和国",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "オスマン帝国の崩壊ののち、同じ地に建国された国家は何か。"
  },
  {
    "answer": "パフレヴィー朝",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "ガージャール朝がクーデタで滅んだのちイランで成立した王朝は何か。"
  },
  {
    "answer": "レザー＝シャー",
    "category": "世：総力戦と社会運動",
    "chapter": "S",
    "number": "6",
    "question": "パフレヴィー朝を建国し、イランの近代化を推進した軍人・国王は誰か。"
  },
  {
    "answer": "金輸出解禁",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1930年に日本が実施した金本位制復帰のための政策で、かえって国内の不況を深刻化させた措置は何か。"
  },
  {
    "answer": "浜口雄幸",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1930年に金輸出解禁を実施し、その後の経済の混乱の中で右翼に狙撃された当時の日本の首相は誰か。"
  },
  {
    "answer": "農業恐慌",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1930年代前半の日本で、米価や繭価の暴落により農村が極度の困窮に陥った経済現象を何と呼ぶか。"
  },
  {
    "answer": "犬養毅",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1932年、海軍青年将校らによる事件で暗殺された当時の日本の首相は誰か。"
  },
  {
    "answer": "高橋是清",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "大蔵大臣に就任し、金本位制を停止して積極財政に転換し、日本経済をいち早く回復させた政治家は誰か。"
  },
  {
    "answer": "管理通貨制度",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "金との兌換（交換）を停止し、政府や中央銀行が通貨の発行量を管理する制度を何と呼ぶか。"
  },
  {
    "answer": "積極財政",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "不況期に政府が意図的に国債を発行し、財政支出を拡大し、景気回復を図る経済政策を何と呼ぶか。"
  },
  {
    "answer": "満洲事変",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1931～1933年に発生した、日中間の武力衝突のことを何と呼ぶか。"
  },
  {
    "answer": "柳条湖事件",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "満洲事変の発端となった、南満洲鉄道の爆破事件を何と呼ぶか。"
  },
  {
    "answer": "関東軍",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1919年に設置された日本の中国駐留軍で、後に満洲事変を引き起こした組織は何か。"
  },
  {
    "answer": "若槻礼次郎",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "満洲事変発生時、事態の不拡大方針を掲げるが軍部の独走を抑えきれず、内閣総辞職に追い込まれた日本の首相は誰か。"
  },
  {
    "answer": "溥儀",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "満洲国執政、のちに皇帝に即位した人物は誰か。"
  },
  {
    "answer": "五・一五事件",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1932年に起きた、犬養毅首相暗殺事件を何と呼ぶか。"
  },
  {
    "answer": "リットン調査団",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "満洲事変を調査するため国際連盟が派遣した調査団を何と呼ぶか。"
  },
  {
    "answer": "二・二六事件",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1936年に起きた、青年将校による反乱事件を何と呼ぶか。"
  },
  {
    "answer": "日独防共協定",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1936年に日本とドイツの間で締結された、国際共産主義運動への対策を目的とした協定は何か。"
  },
  {
    "answer": "「東亜新秩序」",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1938年、近衛文麿内閣が日中戦争の目的として掲げた、日満華の三国による新たな国際秩序建設の構想を何と呼ぶか。"
  },
  {
    "answer": "北部仏印",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "パリ陥落から３ヶ月後、日本軍が軍事基地設置などを目的に進駐した北部地域を何と呼ぶか。"
  },
  {
    "answer": "日ソ中立条約",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1941年4月に日本とソ連が締結した、相互不侵犯を約束した条約は何か。"
  },
  {
    "answer": "武器貸与法",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1941年にアメリカが制定した、連合国への軍事援助を可能にした法律は何か。"
  },
  {
    "answer": "南部仏印",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1941年、日本が資源確保などを目的に進駐した地域を何と呼ぶか。この進駐がABCD包囲網の強化を招いた。"
  },
  {
    "answer": "ハル＝ノート",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1941年11月にアメリカが提示した、対日強硬要求を記した文書は何か。"
  },
  {
    "answer": "東条英機",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "対米開戦を御前会議で決定した内閣総理大臣は誰か。"
  },
  {
    "answer": "ハワイ（真珠湾）",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1941年12月8日、日本軍が奇襲攻撃を行い、太平洋戦争開戦のきっかけとなった米海軍の基地がある場所はどこか。"
  },
  {
    "answer": "「大東亜共栄圏」",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本が提唱した、東アジア・東南アジアの広域経済圏構想を何と呼ぶか。"
  },
  {
    "answer": "ミッドウェー海戦",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1942年6月にアメリカ軍が日本軍を破った、太平洋戦争の転換点となる海戦は何か。"
  },
  {
    "answer": "ソ連の対日参戦",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "ヤルタ会談で、秘密協定として結ばれた内容は何か。"
  },
  {
    "answer": "ポツダム宣言",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1945年7月、日本に無条件降伏を求めた宣言は何か。"
  },
  {
    "answer": "鈴木貫太郎",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1945年4月に首相に就任し、ポツダム宣言を受諾して第二次世界大戦の終結を実現した日本の政治家は誰か。"
  },
  {
    "answer": "国家総動員法",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1938年制定、日本政府が総力戦体制の構築のため、議会承認なしに経済等を統制する権限を持った法は何か。"
  },
  {
    "answer": "産業報国会",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "労資対立をなくし労働者を戦争に動員する目的で結成された日本の組織は何か。"
  },
  {
    "answer": "新体制運動",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1940年、近衛文麿を中心に全体主義的政治体制を目指した運動は何か。"
  },
  {
    "answer": "近衛文麿",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1940年に新体制運動を主導し、全政党を解散させた首相は誰か。"
  },
  {
    "answer": "大政翼賛会",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "第二次世界大戦の最中、全ての政党が解散して合流した日本の組織を何というか。"
  },
  {
    "answer": "学徒出陣",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "戦局悪化に伴い、文科系大学生や専門学校生が徴兵されたことを何というか。"
  },
  {
    "answer": "皇民化政策",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "朝鮮・台湾で行われた、日本語教育や天皇崇拝の強制などの政策を何というか。"
  },
  {
    "answer": "学童疎開",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "空襲を避けるため、大都市の小学生が地方へ集団で避難したことを何というか。"
  },
  {
    "answer": "沖縄",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "太平洋戦争末期、住民を巻き込んだ地上戦が行われた地域はどこか。"
  },
  {
    "answer": "間接統治",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "連合国軍の指令に基づき、日本政府を通じて政治を行う統治方式を何というか。"
  },
  {
    "answer": "小笠原諸島",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "戦後、沖縄などと共にアメリカ軍の直接統治下に置かれた、現在は東京都に属する諸島はどこか。"
  },
  {
    "answer": "SCAP(GHQ)",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本の占領政策を実施した、連合国軍最高司令官(総司令部)の略称を記せ。"
  },
  {
    "answer": "20歳以上の男女",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1945年の選挙法改正により、選挙権が与えられたのはどのような人々か。"
  },
  {
    "answer": "財閥解体",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "経済民主化のため、戦前の巨大企業グループを解散させた改革を何というか。"
  },
  {
    "answer": "農地改革",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "寄生地主制を解体し、自作農を創設するために行われた改革を何というか。"
  },
  {
    "answer": "極東国際軍事裁判",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本の戦争指導者の責任を追及するため、東京で開かれた裁判を何というか。"
  },
  {
    "answer": "国民主権",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本国憲法の原則で、国の政治の決定権は国民にあるとする原理を何というか。"
  },
  {
    "answer": "平和主義",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本国憲法の原則で、戦争放棄や戦力不保持を定めた原理を何というか。"
  },
  {
    "answer": "基本的人権の尊重",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本国憲法の原則で、人が生まれながらに持つ権利の保障を定めたものを何というか。"
  },
  {
    "answer": "象徴",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "日本国憲法第１条で、天皇は日本国および日本国民統合の何とされているか。"
  },
  {
    "answer": "日本自由党",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "戦後、旧政友会系の政治家を中心に結成された保守政党を何というか。"
  },
  {
    "answer": "日本社会党",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "生活困窮を背景に支持を集め、1947年の選挙で第一党となった左派政党は何か。"
  },
  {
    "answer": "360円",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "第二次世界大戦後、単一為替レートで、１ドルは何円とされたか。"
  },
  {
    "answer": "レッドパージ",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "冷戦激化に伴い、GHQの指令で行われた共産主義者の追放を何というか。"
  },
  {
    "answer": "警察予備隊",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "朝鮮戦争勃発に伴い、国内の治安維持を目的に1950年に創設された組織は何か。"
  },
  {
    "answer": "特需",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "朝鮮戦争に伴う米軍の物資調達等で、日本にもたらされた好景気を何というか。"
  },
  {
    "answer": "吉田茂",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "サンフランシスコ平和条約に調印した日本の内閣総理大臣は誰か。"
  },
  {
    "answer": "サンフランシスコ平和条約",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1951年に調印され、日本の主権回復を定めた条約を何というか。"
  },
  {
    "answer": "日米安全保障条約",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "平和条約と同時に結ばれた、米軍の日本駐留を認める条約を何というか。"
  },
  {
    "answer": "日米行政協定",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "安全保障条約に基づき、米軍への基地提供や費用分担等を定めた協定は何か。"
  },
  {
    "answer": "MSA協定",
    "category": "日：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "7",
    "question": "1954年、日本が米国の援助を受ける代わりに自衛力増強を義務付けられた協定は何か。"
  },
  {
    "answer": "大恐慌（世界恐慌）",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1929年10月のニューヨーク株式市場の暴落から始まり、世界各国に波及した深刻な経済危機を何と呼ぶか。"
  },
  {
    "answer": "フーヴァー＝モラトリアム",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1931年にアメリカ大統領が提案した、戦債・賠償の１年間支払い停止を何と呼ぶか。"
  },
  {
    "answer": "フランクリン＝ローズヴェルト",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ニューディールを推進した、アメリカ第32代大統領は誰か。"
  },
  {
    "answer": "ニューディール",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1933年にアメリカで開始された、大恐慌克服のための一連の政策を何と呼ぶか。"
  },
  {
    "answer": "テネシー川流域開発公社",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ニューディールで設立された、TVAと省略される、総合開発を行う公社の代表例は何か。"
  },
  {
    "answer": "ワグナー法",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1935年に制定された、労働者の団結権と団体交渉権を保障したアメリカの法律は何か。"
  },
  {
    "answer": "善隣外交",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1930年代にアメリカが推進した、ラテンアメリカ諸国などとの協調外交政策は何か。"
  },
  {
    "answer": "中立法",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1930年代のアメリカで、紛争当事国への武器輸出などを禁止し、第二次世界大戦への不介入の姿勢を示した法律は何か。"
  },
  {
    "answer": "ファシスト党",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ムッソリーニが1919年に結成したイタリアの政治組織は何か。"
  },
  {
    "answer": "ムッソリーニ",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1922年にイタリアで政権を獲得し、ファシズム体制を確立した指導者は誰か。"
  },
  {
    "answer": "ローマ進軍",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1922年10月にムッソリーニが権力掌握のために行った政治的示威行動は何か。"
  },
  {
    "answer": "ナチ党",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ヒトラーが率いた、ドイツの極右政党の名称は何か。"
  },
  {
    "answer": "ヒトラー",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1933年にドイツの首相となり、ナチ独裁体制を築いた政治家は誰か。"
  },
  {
    "answer": "全権委任法",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "国会議事堂放火事件後に制定された、内閣に立法権を与えたドイツの法律は何か。"
  },
  {
    "answer": "全体主義",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "個人の自由を抑圧し、国家のもとで国民生活の全てを統制しようとする政治体制や思想を何と呼ぶか。"
  },
  {
    "answer": "再軍備宣言",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1935年、ドイツがヴェルサイユ条約の条項を一方的に破棄し、徴兵制復活と軍備拡張を発表した宣言を何と呼ぶか。"
  },
  {
    "answer": "ロカルノ条約",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1925年に調印されたが、ドイツが一方的に破棄をした、独仏間の国境の現状維持などを定めた条約は何か。"
  },
  {
    "answer": "ラインラント",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1936年にドイツ軍が進駐した、フランス国境の非武装地帯はどこか。"
  },
  {
    "answer": "人民戦線政府",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1930年代にフランスやスペインなどで成立した、共産党などの左派政党が連合して樹立した内閣を何と呼ぶか。"
  },
  {
    "answer": "フランコ",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1936年にスペインで軍事クーデタを起こし、内戦を引き起こした軍人は誰か。"
  },
  {
    "answer": "日独伊防共協定",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1937年に成立した、共通の敵であるソ連共産主義に対抗するために結成した三カ国による協定を何と呼ぶか。"
  },
  {
    "answer": "ミュンヘン会談",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1938年9月に開催された、ズデーテン問題を協議した４か国首脳会議は何か。"
  },
  {
    "answer": "宥和政策",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ミュンヘン会談に象徴される、ヒトラーの要求を受け入れる英仏の外交政策は何か。"
  },
  {
    "answer": "独ソ不可侵条約",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1939年8月にドイツとソ連が締結した、相互不侵犯を約束した条約は何か。"
  },
  {
    "answer": "第１次国共合作",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1924年から1927年の上海クーデタまで続いた中国国民党と中国共産党の協力関係は何か。"
  },
  {
    "answer": "北伐",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1926年から中国の国民政府が、軍閥を打倒し、中国統一を目指して北京へ向けて行った軍事行動を何と呼ぶか。"
  },
  {
    "answer": "蔣介石",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "国民革命軍総司令として北伐を指導し、中国国民党の指導者となった人物は誰か。"
  },
  {
    "answer": "南京国民政府",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1927年4月に蔣介石により樹立され、中華民国の正統政府となった政権は何か。"
  },
  {
    "answer": "張作霖",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "奉天を根拠地とする満洲の軍閥で、日本の影響下にあった人物は誰か。"
  },
  {
    "answer": "張学良",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "張作霖の長男で、父の死後に満洲の実権を握った軍閥指導者は誰か。"
  },
  {
    "answer": "西安事件",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1936年12月に張学良が蔣介石を監禁し、抗日を迫った事件を何と呼ぶか。"
  },
  {
    "answer": "盧溝橋事件",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1937年7月7日に起きた、日中全面戦争の発端となる衝突事件は何か。"
  },
  {
    "answer": "抗日民族統一戦線",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "中国国民党と中国共産党が内戦を停止し、日本との全面戦争のために共同で戦うことを合意した体制を何と呼ぶか。"
  },
  {
    "answer": "重慶",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "日中戦争中に中華民国政府が首都とした、長江上流の都市はどこか。"
  },
  {
    "answer": "援蔣ルート",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "日中戦争下、日本軍の封鎖に対抗し、米英などが中国に物資を輸送するために利用した補給路を何と呼ぶか。"
  },
  {
    "answer": "汪兆銘",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "日中戦争中に日本と協力した、中華民国政府要人は誰か。"
  },
  {
    "answer": "ポーランド",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1939年9月1日、ドイツがこの国に侵攻したことをきっかけに、第二次世界大戦が始まったとされる国はどこか。"
  },
  {
    "answer": "ド＝ゴール",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "自由フランス政府を率いて抗戦を指導した、フランスの軍人・政治家は誰か。"
  },
  {
    "answer": "レジスタンス",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "第二次世界大戦中にヨーロッパ各地で展開された、対独抵抗運動を何と呼ぶか。"
  },
  {
    "answer": "チャーチル",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1940年にイギリス首相となり、対独戦を指導した保守党の政治家は誰か。"
  },
  {
    "answer": "連合国共同宣言",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1942年1月、米英などが、枢軸国に勝利するまで単独講和をしないことなどを表明した宣言は何か。"
  },
  {
    "answer": "大西洋憲章",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1941年8月、米大統領と英首相が大西洋上で会談し、戦後の国際秩序の基本原則を示した文書は何か。"
  },
  {
    "answer": "スターリングラードの戦い",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1942年から43年にかけて行われた、独ソ戦の転換点となったソ連南部での攻防戦は何か。"
  },
  {
    "answer": "カイロ会談",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1943年11月に開催され対日処理に関する議論がされた、連合国首脳による初の３か国会談は何か。"
  },
  {
    "answer": "テヘラン会談",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1943年11-12月に開催された、第二戦線形成するための作戦を立て、連合国の戦後を構想した会談は何か。"
  },
  {
    "answer": "北フランス（ノルマンディー）上陸作戦",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1944年6月6日に実行された、連合軍によるヨーロッパ第二戦線の開設作戦は何か。"
  },
  {
    "answer": "ヤルタ会談",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1945年2月に開催された、戦後処理を協議した３か国首脳会談は何か。"
  },
  {
    "answer": "トルーマン",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ポツダム会談に参加したアメリカ大統領は誰か。"
  },
  {
    "answer": "ホロコースト",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ナチスがユダヤ人を絶滅収容所などで大量に殺害したことを何というか。"
  },
  {
    "answer": "大西洋憲章",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1941年に米英首脳が発表し、戦後の国際平和機構の構想を示した宣言は何か。"
  },
  {
    "answer": "サンフランシスコ会議",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1945年4月から開催され、国際連合憲章を採択した会議を何というか。"
  },
  {
    "answer": "ニューヨーク",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "国際連合の本部が置かれているアメリカの都市はどこか。"
  },
  {
    "answer": "安全保障理事会",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "５カ国の常任理事国と１０カ国の非常任理事国で構成される国連の事実上の最高機関は何か。"
  },
  {
    "answer": "アメリカ・イギリス・フランス・中華民国・ソ連",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "国連発足時の安全保障理事会の常任理事国５カ国をすべて答えよ（漢字一次の略称は不可）。"
  },
  {
    "answer": "拒否権",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "安全保障理事会の常任理事国のみが持つ、決議を阻止できる権限を何というか。"
  },
  {
    "answer": "ブレトン＝ウッズ会議",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1944年に開催され、戦後の国際経済体制の枠組みを決めた会議は何か。"
  },
  {
    "answer": "基軸通貨",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "第二次世界大戦後のドルのように、国際通貨体制の中で、取引や為替の基準として中心となる通貨を何というか。"
  },
  {
    "answer": "IMF(国際通貨基金)",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "第二次世界大戦後、為替の安定を図るために設置された国際金融機関は何か。"
  },
  {
    "answer": "IBRD(国際復興開発銀行)",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "戦後復興と発展途上国開発への融資を目的に設立された国際金融機関は何か。"
  },
  {
    "answer": "GATT(関税と貿易に関する一般協定)",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1947年調印の、関税障壁を取り除き自由貿易を促す国際協定を何というか。"
  },
  {
    "answer": "ニュルンベルク",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "第二次大戦後、ナチスの戦争指導者を裁く国際軍事裁判が開かれた都市はどこか。"
  },
  {
    "answer": "「鉄のカーテン」",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "チャーチルが演説で述べた、欧州が東西に分断された状況を指す言葉は何か。"
  },
  {
    "answer": "封じ込め政策",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "アメリカがとった、ソ連の共産主義勢力の拡大を阻止する外交政策を総称して何というか。"
  },
  {
    "answer": "トルーマン＝ドクトリン",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1947年、ギリシアとトルコへの援助を表明した米大統領の宣言を何というか。"
  },
  {
    "answer": "マーシャル＝プラン",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1947年に発表された、アメリカによるヨーロッパ経済復興援助計画は何か。"
  },
  {
    "answer": "コミンフォルム",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "マーシャル＝プランに対抗して1947年に結成された共産党の情報交換機関は何か。"
  },
  {
    "answer": "ユーゴスラヴィア",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "ティトーの指導下で独自路線をとり、コミンフォルムから除名された国はどこか。"
  },
  {
    "answer": "チェコスロヴァキア",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1948年のクーデタで共産党独裁が成立し、冷戦激化の象徴となった国はどこか。"
  },
  {
    "answer": "ベルリン封鎖",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1948年、通貨改革に反発したソ連が西側への交通を遮断した事件を何というか。"
  },
  {
    "answer": "コメコン",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1949年、西側の経済援助計画に対抗してソ連側が結成した経済協力機構は何か。"
  },
  {
    "answer": "北大西洋条約機構(NATO)",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1949年に結成された、アメリカを中心とする西側諸国の軍事同盟を何というか。"
  },
  {
    "answer": "ワルシャワ条約機構",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1955年に結成された、ソ連を中心とする東側諸国の軍事同盟を何というか。"
  },
  {
    "answer": "ドイツ連邦共和国",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1949年、米英仏の占領地区に成立した「西ドイツ」の正式国名は何か。"
  },
  {
    "answer": "ドイツ民主共和国",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1949年、ソ連の占領地区に成立した「東ドイツ」の正式国名は何か。"
  },
  {
    "answer": "毛沢東",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1949年に成立した中華人民共和国の主席に就任した人物は誰か。"
  },
  {
    "answer": "中ソ友好同盟相互援助条約",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1950年に中国とソ連の間で結ばれた軍事同盟条約を何というか。"
  },
  {
    "answer": "台湾",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "内戦に敗れた国民党の蔣介石が逃れ、中華民国政府を維持した場所はどこか。"
  },
  {
    "answer": "北緯３８度",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "第二次大戦後、朝鮮半島を米ソの占領地域に分断する境界線とされた緯線は北緯/南緯何度か。"
  },
  {
    "answer": "朝鮮民主主義人民共和国",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1948年、朝鮮半島の北部に成立した社会主義国家の正式国名は何か。"
  },
  {
    "answer": "大韓民国",
    "category": "世：経済危機と第二次世界大戦",
    "chapter": "S",
    "number": "8",
    "question": "1948年、朝鮮半島の南部に成立した国家の正式国名は何か。"
  },
  {
    "answer": "「もはや戦後ではない」",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1955年の『経済白書』で、戦前の水準まで経済が回復したことを示したことを宣言した言葉は何か。"
  },
  {
    "answer": "自由民主党",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1955年に自由党と日本民主党が合同して結成した、保守合同による政党名は何か。"
  },
  {
    "answer": "鳩山一郎",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "ソ連との国交回復を達成した日本の内閣総理大臣は誰か。"
  },
  {
    "answer": "日ソ共同宣言",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1956年に鳩山一郎内閣がソ連との国交回復のために調印した宣言は何か。"
  },
  {
    "answer": "国際連合への加盟",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1956年に日ソ共同宣言の締結をきっかけに達成した、日本の国際社会への復帰を意味する出来事は何か。"
  },
  {
    "answer": "岸信介",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "日米相互協力及び安全保障条約への改定を強行採決し、大規模デモを引き起こした内閣総理大臣は誰か。"
  },
  {
    "answer": "池田勇人",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1960年代に「所得倍増計画」を掲げ、高度経済成長路線への転換を図った内閣総理大臣は誰か。"
  },
  {
    "answer": "所得倍増計画",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "池田勇人内閣が、減税や公共投資で10年間で国民総生産を倍増させようとした経済計画は何か。"
  },
  {
    "answer": "太平洋ベルト",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "高度経済成長期に、工業が集中し、都市と農村の格差拡大を生んだ東京から北九州に至る地帯は何か。"
  },
  {
    "answer": "過疎化",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "高度経済成長期における太平洋ベルト地帯への工業集中により、地方の農村部で人口が減少した現象は何か。"
  },
  {
    "answer": "田中角栄",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "日中国交正常化を実現し、公共投資の拡大が投機熱を呼び、第1次石油危機と重なり狂乱物価を招いた内閣総理大臣は誰か。"
  },
  {
    "answer": "狂乱物価",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "土地・株式への投機と第1次石油危機が重なり、1974年に戦後初のマイナス成長を招いた激しい物価上昇は何か。"
  },
  {
    "answer": "省エネルギー",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "石油危機に対応するため、産業用ロボットの導入や工場の自動化などを進め、資源とエネルギーの節約を目指した方針は何か。"
  },
  {
    "answer": "安定成長",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1980年代に年率3～5％の成長率を維持した、高度経済成長期終焉後の日本の経済成長の状況を何と呼ぶか。"
  },
  {
    "answer": "プラザ合意",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1985年にG5で合意された、ドル高を是正するための協調介入で、その後の円高とバブル経済を招いた合意は何か。"
  },
  {
    "answer": "経済摩擦",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "日本の貿易黒字拡大により、自動車などをめぐり、内需拡大の経済構造への転換を求められる原因となった対立は何か。"
  },
  {
    "answer": "日中共同声明",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1972年、田中角栄内閣が発表し、中華人民共和国との国交正常化を実現した声明は何か。"
  },
  {
    "answer": "日中平和友好条約",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "日中国交正常化の後、1978年に福田赳夫内閣が締結した条約は何か。"
  },
  {
    "answer": "一国二制度",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1997年のイギリスからの香港返還に際し、中国が香港の資本主義制度を維持することを約束した制度は何か。"
  },
  {
    "answer": "朴正煕",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "日韓基本条約を締結し、工業化・近代化を推進する「開発独裁」と呼ばれる強権的な政治体制を築いた韓国大統領は誰か。"
  },
  {
    "answer": "日韓基本条約",
    "category": "日：戦後社会",
    "chapter": "S",
    "number": "9",
    "question": "1965年に朴正熙政権下の韓国と日本との間で締結され、国交を樹立した条約は何か。"
  },
  {
    "answer": "ドル＝ショック",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1971年にニクソン大統領が金とドルの交換停止を宣言し、ブレトン＝ウッズ体制の転機となった出来事は何か。"
  },
  {
    "answer": "ニクソン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1971年に金とドルの交換停止を宣言し、また1972年に中華人民共和国を訪問したアメリカ大統領は誰か。"
  },
  {
    "answer": "変動相場制",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ドル＝ショック後の1973年、ドルを基軸とした固定相場制が崩壊し、各国が移行した制度は何か。"
  },
  {
    "answer": "オイル＝ショック",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "第4次中東戦争を背景に、アラブ諸国の石油戦略により原油価格が急騰し、世界経済に影響を与えた出来事は何か。"
  },
  {
    "answer": "イスラエル",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1948年5月に国連のパレスチナ分割案を受けてユダヤ人が建国を宣言し、第1次中東戦争の原因となった国はどこか。"
  },
  {
    "answer": "イラン＝イスラーム革命",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1979年にホメイニが指導し、親米路線をとったパフレヴィー2世を打倒した革命の名称は何か。"
  },
  {
    "answer": "先進国首脳会議（サミット）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "石油危機などの問題に対応するため、1975年以降毎年開催され、主要国の首脳が集まる国際会議は何か。"
  },
  {
    "answer": "新興工業経済地域（NIES）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "韓国・台湾・香港・シンガポールなど、開発途上国で急速な工業化を達成した国々や地域を指す名称は何か。"
  },
  {
    "answer": "「雪どけ」",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "スターリンの死後に始まった米ソ間の緊張緩和の動きを何と呼ぶか。"
  },
  {
    "answer": "スターリン批判",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1956年、ソ連のフルシチョフが秘密報告で行った、スターリンの独裁や個人崇拝を暴露し非難した出来事は何か。"
  },
  {
    "answer": "フルシチョフ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "スターリン批判を行い、資本主義国との平和共存路線を主張したソ連の指導者は誰か。"
  },
  {
    "answer": "平和共存路線",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "フルシチョフが、資本主義国との対立回避をめざして主張した外交方針は何か。"
  },
  {
    "answer": "ベルリンの壁",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1961年、東ドイツから西側への亡命を防ぐため、東西ベルリンの境界上に構築され、冷戦の象徴ともなった建造物は何か。"
  },
  {
    "answer": "キューバ危機",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1962年、ソ連がキューバにミサイル基地を建設したことで、アメリカとの間で開戦寸前まで緊張が高まった出来事は何か。"
  },
  {
    "answer": "カストロ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1959年のキューバ革命をゲバラと共に指導し、親米政権を打倒して米大陸初の社会主義宣言を行った指導者は誰か。"
  },
  {
    "answer": "ケネディ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "キューバ危機でソ連と交渉し危機を回避し、部分的核実験禁止条約を締結したが、1963年に暗殺されたアメリカ大統領は誰か。"
  },
  {
    "answer": "部分的核実験禁止条約",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1963年にキューバ危機を受けて米・ソ・英間で調印された、大気圏内などでの核実験を禁じた条約は何か。"
  },
  {
    "answer": "原水爆禁止世界大会",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "第五福竜丸事件を機に1955年に広島で開催された、核兵器廃絶を求める運動の中心的役割を果たした大会は何か。"
  },
  {
    "answer": "パグウォッシュ大会",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1957年にラッセル・アインシュタインらの提唱で実現し、科学者による核兵器禁止運動の中心的組織となった会議は何か。"
  },
  {
    "answer": "核拡散防止条約",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1968年に核兵器保有国を米・英・仏・中・ソに限定し、非核保有国への核兵器の譲渡や製造援助を禁じた条約は何か。"
  },
  {
    "answer": "INF（中距離核戦力）全廃条約",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1987年に米ソ間で締結され、初めて核兵器の削減に同意した、中距離核戦力の全廃を定めた歴史的な条約は何か。"
  },
  {
    "answer": "デタント",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "「多極化」を背景に1960年代後半から進展した、米ソ間の緊張緩和と関係改善の動きを指す言葉は何か。"
  },
  {
    "answer": "ブラント",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1970年前後、東ヨーロッパ諸国や東ドイツとの関係改善を目指す「東方外交」を推進した西ドイツの首相は誰か。"
  },
  {
    "answer": "東方外交",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1970年前後、西ドイツのブラント首相が推進した、東ヨーロッパ諸国や東ドイツとの関係改善を目指す外交政策は何か。"
  },
  {
    "answer": "アフガニスタン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1979年にソ連が軍事介入を行い、新冷戦の本格化を招き、米のモスクワオリンピック参加拒否の原因となった国はどこか。"
  },
  {
    "answer": "スリーマイル島原子力発電所",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1979年にアメリカで事故が発生し、原子力開発への懸念を高めた発電所は何か。"
  },
  {
    "answer": "ゴルバチョフ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1985年にソ連書記長に就任し、冷戦終結を導いた指導者は誰か。"
  },
  {
    "answer": "ペレストロイカ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ゴルバチョフが、ソ連の政治・社会体制の改革として推進した政策は何か。"
  },
  {
    "answer": "グラスノスチ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ゴルバチョフが実施した、情報公開や言論の自由を意味する政策は何か。"
  },
  {
    "answer": "チョルノービリ（チェルノブイリ）原子力発電所",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1986年に事故が発生し、ゴルバチョフに改革の必要性を痛感させる背景となり、ソ連の情報公開を促した発電所は何か。"
  },
  {
    "answer": "1989年",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "冷戦が終結したとされるのは西暦何年か。"
  },
  {
    "answer": "マルタ会談",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "アメリカのブッシュ大統領とソ連のゴルバチョフ書記長が会談し、東西冷戦の終結を宣言した会談は何か。"
  },
  {
    "answer": "ブッシュ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "マルタ会談で冷戦終結を宣言し、イラクのクウェート侵攻に対し国連軍を組織して湾岸戦争を遂行したアメリカ大統領は誰か。"
  },
  {
    "answer": "サッチャー",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1979年からイギリスの首相を務め、福祉削減、国有企業の民営化、減税などを実施し、経済を回復させたのは誰か。"
  },
  {
    "answer": "第五共和政",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "以前の政体より大統領権限を強化するために成立させた、フランスの政体は何か。"
  },
  {
    "answer": "ド＝ゴール",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1958年にフランス大統領に就任し、アルジェリア独立承認やNATO軍事協力拒否などの独自路線をとった指導者は誰か。"
  },
  {
    "answer": "五月危機",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1968年にフランスで発生し、翌年のド＝ゴール大統領退陣のきっかけの一つとなった学生と労働者による反対運動は何か。"
  },
  {
    "answer": "ECSC（ヨーロッパ石炭鉄鋼共同体）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1952年にフランス外相シューマンの提唱により結成された、ヨーロッパ統合の第一歩となった組織の名称は何か。"
  },
  {
    "answer": "EEC（ヨーロッパ経済共同体）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1958年に西欧で結成された、域内関税の引き下げや資本・労働力の移動の自由化などを目指した組織の名称は何か。"
  },
  {
    "answer": "EC（ヨーロッパ共同体）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1967年に3組織を統合して設立され、のちのEUの前身となる組織の名称は何か。"
  },
  {
    "answer": "イギリス",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ECSC・EECに当初は参加せずEFTAを結成して対抗したが、1973年にECに加入した国はどこか。"
  },
  {
    "answer": "EU（ヨーロッパ連合）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1993年にECが発展的に解消して設立された組織の名称は何か。"
  },
  {
    "answer": "マーストリヒト条約",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1992年に調印され、翌年にヨーロッパ共同体をヨーロッパ連合へと発展的に解消させる根拠となった条約は何か。"
  },
  {
    "answer": "ユーロ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ヨーロッパ連合が1999年に導入を始めた共通通貨で、導入していない国もある通貨は何か。"
  },
  {
    "answer": "「プラハの春」",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1968年にチェコスロヴァキアで発生したが、ソ連のブレジネフが軍事介入して崩壊させた民主化運動は何か。"
  },
  {
    "answer": "ブレジネフ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1960年代後半からソ連の指導者を務め、チェコスロヴァキアの「プラハの春」を軍事介入で崩壊させた人物は誰か。"
  },
  {
    "answer": "「連帯」",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1980年にポーランドで反体制運動を行い、1989年の政権獲得やワレサ大統領就任に繋がった自主管理労組は何か。"
  },
  {
    "answer": "1989年",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ベルリンの壁が開放されたのは西暦何年か。"
  },
  {
    "answer": "大躍進",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "工業生産の増大や人民公社による農業の集団化を図ったが、過大な目標設定などで失敗し経済混乱を招いた中国の政策は何か。"
  },
  {
    "answer": "毛沢東",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "大躍進の失敗で国家主席を辞任したが、その後、劉少奇らを批判する文化大革命を指導した人物は誰か。"
  },
  {
    "answer": "中ソ対立",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1960年代、ソ連の平和共存政策を中国が非難したことから本格化し、核兵器保有や国境紛争に発展した対立は何か。"
  },
  {
    "answer": "（プロレタリア）文化大革命",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "毛沢東ら左派による権力闘争として、劉少奇らを修正主義者として批判し、反主流派を容赦なく逮捕・処刑した出来事は何か。"
  },
  {
    "answer": "鄧小平",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "文化大革命期に失脚を繰り返したが、その後最高実力者となり、資本主義的な要素を取り入れた人物は誰か。"
  },
  {
    "answer": "改革・開放路線",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "鄧小平体制下で、経済改革として資本主義的な要素を取り入れ、経済の近代化を目指して推進された政策は何か。"
  },
  {
    "answer": "天安門事件",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1989年6月、北京で学生・労働者の民主化要求を中国政府が人民解放軍を出動させ実力で排除した事件は何か。"
  },
  {
    "answer": "ニクソン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "米中国交正常化前の1972年に、アメリカ大統領として中華人民共和国に訪問した人物は誰か。"
  },
  {
    "answer": "アジア通貨危機",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1997年にタイの通貨バーツの急落をきっかけに、東南アジア諸国や韓国にまで広がった経済危機は何か。"
  },
  {
    "answer": "ホー＝チ＝ミン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ベトナム民主共和国の初代大統領に就任し、フランスやアメリカとの独立戦争を指導した人物は誰か。"
  },
  {
    "answer": "ベトナム民主共和国",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1945年にホー＝チ＝ミンを大統領として成立した国家の名称は何か。"
  },
  {
    "answer": "インドシナ戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1946年から1954年まで、ベトナム民主共和国と独立を認めないフランスとの間で戦われた戦争は何か。"
  },
  {
    "answer": "ジュネーヴ国際会議",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "インドシナ戦争の休戦協定が締結され、ベトナムの南北分断やカンボジア・ラオスの独立が承認された会議は何か。"
  },
  {
    "answer": "北緯１７度線",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ジュネーヴ国際会議で、北ベトナムと南ベトナムを暫定的に分断する軍事境界線と定められたのは、緯度何度の線か。"
  },
  {
    "answer": "ベトナム戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1965年から1973年まで、アメリカが南ベトナムを支援し、泥沼化した国際的な戦争は何か。"
  },
  {
    "answer": "南ベトナム解放民族戦線",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "北ベトナムと連携し、ベトナム統一を目指して南ベトナム国内でゲリラ活動を展開した組織は何か。"
  },
  {
    "answer": "北爆",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ベトナム戦争中に、アメリカのジョンソン大統領が北ベトナムに対して行った大規模な空爆は何か。"
  },
  {
    "answer": "パリ和平協定",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1973年にニクソン大統領が調印し、アメリカ軍の南ベトナムからの完全撤退を決定した協定は何か。"
  },
  {
    "answer": "スカルノ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1949年にオランダとの独立闘争に勝利し、インドネシアの初代大統領となった人物は誰か。"
  },
  {
    "answer": "スハルト",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "スカルノの後にインドネシアの実権を掌握し、開発独裁と呼ばれる強権的政治体制を築いた人物は誰か。"
  },
  {
    "answer": "開発独裁",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "インドネシアのスハルトなどが推進した、工業化・近代化を優先し、強権的な政治体制を敷く手法は何か。"
  },
  {
    "answer": "ASEAN（東南アジア諸国連合）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "もとは反共軍事同盟として結成されたが、経済・社会基盤の確立を目指す組織へと発展した東南アジアの組織の名称は何か。"
  },
  {
    "answer": "ガンディー",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "国民会議派に属し、統一インドの独立を主張したが、狂信的なヒンドゥー教徒の青年により暗殺された人物は誰か。"
  },
  {
    "answer": "ジンナー",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "全インド＝ムスリム連盟を率い、統一インドではなくイスラーム国家であるパキスタンの分離・独立を主張した人物は誰か。"
  },
  {
    "answer": "印パ戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1947年から複数回発生した、インドとパキスタンがカシミール地方の帰属をめぐって戦った戦争は何か。"
  },
  {
    "answer": "カシミール地方",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "インドとパキスタンが、分離独立以来、その帰属をめぐって複数回にわたり戦争を行った地域はどこか。"
  },
  {
    "answer": "アラブ連盟",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1945年にエジプト、シリアなどで結成された、アラブ諸国民の主権擁護と相互協力の促進を目的とする組織は何か。"
  },
  {
    "answer": "第１次中東戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1948年にイスラエルが建国を宣言したことに対し、アラブ連盟が反対して起こった戦争は何か。"
  },
  {
    "answer": "第２次中東戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1956年にエジプトのスエズ運河国有化宣言に反発し、イスラエル・英・仏が侵攻した戦争は何か。"
  },
  {
    "answer": "スエズ運河",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1956年にエジプトのナセル大統領がアスワン＝ハイダム建設費捻出のために国有化を宣言した運河は何か。"
  },
  {
    "answer": "第３次中東戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1967年にイスラエルがエジプト・シリアなどのアラブ諸国を奇襲し、ゴラン高原などを占領した戦争は何か。"
  },
  {
    "answer": "パレスチナ解放機構（PLO）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1964年にパレスチナ人が、土地と権利回復のため、イスラエルに対し武装闘争を行う目的で結成した組織の名称は何か。"
  },
  {
    "answer": "アラファト",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "パレスチナ解放機構の指導者として、イスラエルに対する武装闘争を指導した人物は誰か。"
  },
  {
    "answer": "第４次中東戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "エジプト、シリアが失地回復を目指しイスラエルに侵攻し、アラブ石油輸出国機構の石油戦略を招いた戦争は何か。"
  },
  {
    "answer": "パレスチナ暫定自治協定",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1993年にアメリカの仲介で、イスラエルとパレスチナ解放機構が相互承認した協定は何か。"
  },
  {
    "answer": "白色革命",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "イランのパフレヴィー2世国王が推進したが、急速な工業化で農村を打撃し貧富の差を拡大させた親英米・近代化政策は何か。"
  },
  {
    "answer": "パフレヴィー2世",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "親英米路線と近代化政策の「白色革命」を推進したが、革命で打倒されたイランの国王は誰か。"
  },
  {
    "answer": "ホメイニ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1979年のイラン＝イスラーム革命を指揮し、イスラーム原理主義のイラン＝イスラーム共和国を成立させた人物は誰か。"
  },
  {
    "answer": "湾岸戦争",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "財政難に陥ったイラクがクウェートへ侵攻したことに対し、米軍中心の多国籍軍がイラクに侵攻した戦争は何か。"
  },
  {
    "answer": "同時多発テロ事件",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "2001年9月11日にビン＝ラーディンを中心に実行され、米が「テロとの戦い」を宣言するきっかけとなった事件は何か。"
  },
  {
    "answer": "ターリバーン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "同時多発テロ事件に関与したイスラーム主義勢力で、アメリカがアフガニスタンを軍事攻撃する対象となった組織は何か。"
  },
  {
    "answer": "「アラブの春」",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "2010年にチュニジアの革命をきっかけに起こった、中東地域の独裁政権が崩壊するなどした民主化運動を指す言葉は何か。"
  },
  {
    "answer": "ジャスミン革命",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "2010年にチュニジアの反政府デモにより独裁政権が崩壊した出来事は何か。"
  },
  {
    "answer": "平和五原則",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1954年にインドのネルーと中国の周恩来が発表し、領土主権の尊重、相互不侵略などを内容とする原則は何か。"
  },
  {
    "answer": "ネルー",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "平和五原則の発表やバンドン会議の開催に貢献し、非同盟諸国首脳会議にも参加したインドの首相は誰か。"
  },
  {
    "answer": "周恩来",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1954年にインドのネルーと共に平和五原則を発表し、翌年のバンドン会議にも出席した中国の政治家は誰か。"
  },
  {
    "answer": "バンドン会議（アジア＝アフリカ会議）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1955年にアジア・アフリカ29か国の代表者がインドネシアに集結し、平和十原則を採択した会議は何か。"
  },
  {
    "answer": "平和十原則",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1955年のバンドン会議で、平和五原則をさらに発展させて採択された原則は何か。"
  },
  {
    "answer": "(第1回)非同盟諸国首脳会議",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1961年にベオグラードで開催され、米ソどちらの陣営にも属さない非同盟中立路線を主張した国々の会議は何か。"
  },
  {
    "answer": "1960年",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "「アフリカの年」と呼ばれ、コンゴ、ナイジェリアなど一気に17カ国が独立を達成した年は西暦何年か。"
  },
  {
    "answer": "アパルトヘイト",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1991年に廃止されるまで、南アフリカ共和国で徹底してとられ、国際的な孤立を招いた人種隔離政策は何か。"
  },
  {
    "answer": "マンデラ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "アパルトヘイト廃止後、1994年に南アフリカ共和国で黒人として初の大統領に就任した人物は誰か。"
  },
  {
    "answer": "アフリカ統一機構（OAU）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1963年に、アフリカ統一と連帯、植民地主義の根絶などを目指して結成された組織の名称は何か。"
  },
  {
    "answer": "「赤狩り」",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1950年代にマッカーシズムとして行われた、リベラル派の官吏・外交官らを共産主義者として追放した運動は何か。"
  },
  {
    "answer": "公民権法",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1964年にアメリカのジョンソン大統領の下で制定された、黒人差別撤廃を目的とした法律は何か。"
  },
  {
    "answer": "フェミニズム",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1960年代に公民権運動と共に活発化した、性差別に反対する女性解放運動は何か。"
  },
  {
    "answer": "キング牧師",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "公民権運動の指導者として活動したが、1968年に黒人運動をめぐる対立のため暗殺された人物は誰か。"
  },
  {
    "answer": "レーガン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "1980年代に減税・歳出削減・規制緩和を柱とする政策を実施し、「双子の赤字」を抱えたアメリカ大統領は誰か。"
  },
  {
    "answer": "世界金融危機（リーマン＝ショック）",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "2008年にアメリカのブッシュ大統領（子）期に発生し、世界経済に大きな影響を与えた出来事は何か。"
  },
  {
    "answer": "エリツィン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ソ連崩壊後のロシア連邦の初代大統領に就任した人物は誰か。"
  },
  {
    "answer": "プーチン",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ロシアの指導者として、ウクライナからクリミアを分離し編入したことやウクライナ侵攻を主導した人物は誰か。"
  },
  {
    "answer": "ウクライナ",
    "category": "世：戦後社会",
    "chapter": "S",
    "number": "10",
    "question": "ロシアが2014年にクリミアを分離・編入し、2022年から本格的な軍事侵攻を開始した国はどこか。"
  }
];