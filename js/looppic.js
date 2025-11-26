const images = [
  "img/works/LP_tr_foodex_1.webp",
  "img/works/LP_tr_foodex_2.webp",
  "img/works/LP_tr_foodex_3.webp"
];

let index = 0;
const img1 = document.getElementById("portfolio-img1");
const img2 = document.getElementById("portfolio-img2");
let showingImg1 = true;
img1.classList.add("active"); // 初期表示用


setInterval(() => {
  index = (index + 1) % images.length;

  if (showingImg1) {
    img2.src = images[index];
    img2.classList.add("active");
    img1.classList.remove("active");
  } else {
    img1.src = images[index];
    img1.classList.add("active");
    img2.classList.remove("active");
  }

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
const img3 = document.getElementById("portfolio-img3");
const img4 = document.getElementById("portfolio-img4");
let showingImg2 = true;
img3.classList.add("active"); // 初期表示用


setInterval(() => {
  index = (index + 1) % images1.length;

  if (showingImg2) {
    img4.src = images1[index];
    img4.classList.add("active");
    img3.classList.remove("active");
  } else {
    img3.src = images1[index];
    img3.classList.add("active");
    img4.classList.remove("active");
  }

  showingImg2 = !showingImg2;
}, 8000);




// china用
const images3 = [
  "img/works/LP_tr_china_1.webp",
  "img/works/LP_tr_china_2.webp",
  "img/works/LP_tr_china_3.webp"
];

let index3 = 0;
const img5 = document.getElementById("portfolio-img5");
const img6 = document.getElementById("portfolio-img6");
let showingImg3 = true;
img5.classList.add("active"); // 初期表示用


setInterval(() => {
  index = (index + 1) % images3.length;

  if (showingImg3) {
    img6.src = images3[index];
    img6.classList.add("active");
    img5.classList.remove("active");
  } else {
    img5.src = images3[index];
    img5.classList.add("active");
    img6.classList.remove("active");
  }

  showingImg3 = !showingImg3;
}, 5000);


