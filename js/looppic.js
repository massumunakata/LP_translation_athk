const images = [
  "img/works/LP_tr_foodex_1.webp",
  "img/works/LP_tr_foodex_2.webp",
  "img/works/LP_tr_foodex_3.webp"
];

let index = 0;
let prevIndex = 0; // 前回のインデックスを記録
const img1 = document.getElementById("portfolio-img1");
const img2 = document.getElementById("portfolio-img2");
let showingImg1 = true;

img1.src = images[index];      // 初期表示
img1.classList.add("active");

setInterval(() => {
  // 次のインデックスを決める
  do {
    index = (index + 1) % images.length;
  } while (index === prevIndex); // 前回と同じならもう一度回す

  if (showingImg1) {
    img2.src = images[index];
    img2.classList.add("active");
    img1.classList.remove("active");
  } else {
    img1.src = images[index];
    img1.classList.add("active");
    img2.classList.remove("active");
  }

  prevIndex = index;   // 今回のインデックスを記録
  showingImg1 = !showingImg1;
}, 6000);


// cp用
const images1 = [
  "img/works/LP_tr_cp_1.webp",
  "img/works/LP_tr_cp_2.webp",
  "img/works/LP_tr_cp_3.webp",
  "img/works/LP_tr_cp_4.webp"
];

let index2 = 0;
let prevIndex2 = 0; // 前回のインデックスを記録
const img3 = document.getElementById("portfolio-img3");
const img4 = document.getElementById("portfolio-img4");
let showingImg2 = true;

// 初期表示
img3.src = images1[index2];
img3.classList.add("active");

setInterval(() => {
  // 次のインデックスを決める（前回と同じならもう一度回す）
  do {
    index2 = (index2 + 1) % images1.length;
  } while (index2 === prevIndex2);

  if (showingImg2) {
    img4.src = images1[index2];
    img4.classList.add("active");
    img3.classList.remove("active");
  } else {
    img3.src = images1[index2];
    img3.classList.add("active");
    img4.classList.remove("active");
  }

  prevIndex2 = index2;   // 今回のインデックスを記録
  showingImg2 = !showingImg2;
}, 8000);

// china用
const images3 = [
  "img/works/LP_tr_china_1.webp",
  "img/works/LP_tr_china_2.webp",
  "img/works/LP_tr_china_3.webp"
];

let index3 = 0;
let prevIndex3 = 0; // 前回のインデックスを記録
const img5 = document.getElementById("portfolio-img5");
const img6 = document.getElementById("portfolio-img6");
let showingImg3 = true;

// 初期表示
img5.src = images3[index3];
img5.classList.add("active");

setInterval(() => {
  // 次のインデックスを決める（前回と同じならもう一度回す）
  do {
    index3 = (index3 + 1) % images3.length;
  } while (index3 === prevIndex3);

  if (showingImg3) {
    img6.src = images3[index3];
    img6.classList.add("active");
    img5.classList.remove("active");
  } else {
    img5.src = images3[index3];
    img5.classList.add("active");
    img6.classList.remove("active");
  }

  prevIndex3 = index3;   // 今回のインデックスを記録
  showingImg3 = !showingImg3;
}, 5000);
