 // APIのベース通貨を HKD に変更
    const API_URL = "https://open.er-api.com/v6/latest/HKD";

    async function fetchRate() {
      const rateEl = document.getElementById("rate");
      const metaEl = document.getElementById("meta");

      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // HKD→JPY のレートを取得
        const rate = data?.rates?.JPY;
        if (typeof rate !== "number") throw new Error("レートが取得できませんでした");

        // 数字だけ表示
        rateEl.textContent = rate.toFixed(2) + " HKD/JPYにて日本円目安算出";

        // 取得日時を日本時間で表示
        const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
        metaEl.textContent = `更新日時: ${now}`;
      } catch (e) {
        rateEl.textContent = "取得エラー";
        metaEl.textContent = "";
      }
    }

    // ページ読み込み時に実行
    fetchRate();