const data = [
    { career: "元日系上場企業香港セールスマネージャー", languages: "広東語、普通語、英語、日本語" },
    { career: "元日系専門商社製造工場長",               languages: "広東語、普通語、日本語" },
    { career: "元日系企業部長",                         languages: "広東語、普通語、英語、日本語" },
    { career: "元日系PR企業アカウントマネージャー",     languages: "広東語、英語、日本語" },
    { career: "元金融マネージャー",                     languages: "英語、日本語" },
    { career: "元在香港地方自治体事務所勤務",           languages: "広東語、普通語、英語、日本語" },
    { career: "元在香港領事館勤務",           languages: "広東語、普通語、英語、日本語" },
    { career: "元会計事務所マネージャー",               languages: "英語、日本語" },
    { career: "元F&B輸入販売業者ダイレクター",          languages: "広東語、普通語、日本語" },
    { career: "弁護士",                                 languages: "広東語、英語" },
    { career: "弁護士",                                 languages: "広東語、英語、日本語" },
    { career: "香港中文大学MBAコーディネーター",        languages: "広東語、普通語、英語、日本語" },
    { career: "通訳者@日本メディアロケ班通訳",                 languages: "広東語、日本語" },
    { career: "通訳者@商談、会議通訳経験豊富",  languages: "広東語、普通語、英語、日本語" },
    { career: "通訳者@展示会ブース通訳、アテンド通訳経験豊富",  languages: "広東語、普通語、英語、日本語" },
    { career: "通訳者@展示会ブース通訳、アテンド通訳経験豊富",  languages: "広東語、普通語、英語、日本語" },
    ];

  const tbody = document.querySelector("#careerTable tbody");
  data.forEach(item => {
    const tr = document.createElement("tr");
    const tdCareer = document.createElement("td");
    tdCareer.textContent = item.career;
    const tdLang = document.createElement("td");
    tdLang.textContent = item.languages;
    tr.appendChild(tdCareer);
    tr.appendChild(tdLang);
    tbody.appendChild(tr);
  });

  // 2つ目のテーブル用データ
 // 1つ目のテーブル用データ
const worksData1 = [
  { project: "メディア香港ロケ取材通訳" },
  { project: "自治体PRイベント通訳及びアテンド" },
  { project: "日本人社長による秘匿性を要する社内インタビュー" },
  { project: "裁判業務通訳" },
  { project: "複数の商談通訳" },
  { project: "会議のウィスパリング通訳" },
  { project: "工場見学通訳及びアテンド" },
  { project: "市場調査通訳及び報告書作成" },
  { project: "展示会通訳及びアテンド及びレポート作成" },
  { project: "セミナー同時通訳" },
];

const worksTbody1 = document.querySelector("#worksTable1 tbody");
worksData1.forEach(item => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = item.project;
  tr.appendChild(td);
  worksTbody1.appendChild(tr);
});

// 2つ目のテーブル用データ
const worksData2 = [
  { project: "製品説明会ウィスパリング通訳" },
  { project: "アーティスト通訳" },
  { project: "飲食店メニュー翻訳" },
  { project: "観光案内通訳及びアテンド" },
  { project: "ビジネスマッチング通訳及びアテンド" },
  { project: "契約交渉通訳" },
  { project: "工場監査通訳及びアテンド" },
  { project: "不動産視察通訳及びアテンド" },
  { project: "文化交流イベント多言語MC" },
  { project: "自治体イベント多言語MC" },
];

const worksTbody2 = document.querySelector("#worksTable2 tbody");
worksData2.forEach(item => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = item.project;
  tr.appendChild(td);
  worksTbody2.appendChild(tr);
});


// 3つ目のテーブル用データ（料金表）
const priceData = [
  { item: "展示会半日４時間", px: "8万円" },
  { item: "商談",             px: "12万円" },
  { item: "会議同時通訳",     px: "28万円" },
];

const priceTbody = document.querySelector("#priceTable tbody");
priceData.forEach(item => {
  const tr = document.createElement("tr");
  const tdItem = document.createElement("td");
  tdItem.textContent = item.item;
  const tdPx = document.createElement("td");
  tdPx.textContent = item.px;
  tr.appendChild(tdItem);
  tr.appendChild(tdPx);
  priceTbody.appendChild(tr);
});
