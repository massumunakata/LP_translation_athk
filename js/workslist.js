const data = [
    { career: "元日系上場企業香港セールスマネージャー", languages: "広東語、普通語、英語、日本語" },
    { career: "元日系専門商社製造工場長",               languages: "広東語、普通語、日本語" },
    { career: "元日系PR企業アカウントマネージャー",     languages: "広東語、英語、日本語" },
    { career: "元F&B企業ダイレクター",          languages: "広東語、普通語、日本語" },
    { career: "元在香港地方自治体事務所勤務",           languages: "広東語、普通語、英語、日本語" },
    { career: "元在香港日本領事館勤務",           languages: "広東語、普通語、英語、日本語" },
    { career: "元会計事務所マネージャー",               languages: "英語、日本語" },
    { career: "元金融マネージャー",                     languages: "英語、日本語" },
    { career: "弁護士",                                 languages: "広東語、英語" },
    { career: "弁護士",                                 languages: "広東語、英語、日本語" },
    { career: "香港中文大学MBAコーディネーター",        languages: "広東語、普通語、英語、日本語" },
    { career: "通訳者@日本メディアロケ班通訳",                 languages: "広東語、日本語" },
    { career: "通訳者@国際会議同時通訳",  languages: "英語、日本語" },
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

  const API_URL = "https://open.er-api.com/v6/latest/HKD";

    const priceData = [
      { item: "展示会半日４時間", px: 5000 },
      { item: "商談",             px: 8000 },
      { item: "会議同時通訳",     px: 10000 }
    ];

    async function fetchRateAndTable() {
      const rateEl = document.getElementById("rate");
      const metaEl = document.getElementById("meta");
      const tableEl = document.getElementById("priceTable");

      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const rate = data.rates.JPY; // HKD→JPYレート

        // レート表示
        rateEl.textContent = `1 HKD = ${rate.toFixed(3)} JPY`;

        // 更新日時
        const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
        metaEl.textContent = `更新日時: ${now}`;

        // テーブル生成
        tableEl.innerHTML = "";
        priceData.forEach(p => {
          // HKD表記（カンマ区切り）
          const hkdValue = `${p.px.toLocaleString()} HKD`;

          // JPY換算（万円単位、小数1桁、千の位四捨五入）
          const jpyValue = (p.px * rate / 10000).toFixed(1) + "万円";

          const row = `
            <tr>
              <td>${p.item}</td>
              <td>${hkdValue}</td>
              <td>${jpyValue}</td>
            </tr>
          `;
          tableEl.insertAdjacentHTML("beforeend", row);
        });

      } catch (e) {
        rateEl.textContent = "レート取得エラー";
        metaEl.textContent = "";
      }
    }

    // ページ読み込み時に実行
    fetchRateAndTable();