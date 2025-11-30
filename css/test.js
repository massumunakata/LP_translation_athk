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