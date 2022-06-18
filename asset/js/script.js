/*********************************
	ハンバーガー、モーダルメニュー
*********************************/
/******** 要素を取得 **********/
const hamburger = document.querySelector(".js-hamburger");
const open = document.querySelector(".js-modal-open");
const modal = document.querySelector(".js-modal-menu");
const mask = document.querySelector(".js-modal-mask");

/******** js-hamburgerをクリックするとモーダルを表示 **********/
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active"); //is-activeクラスを付与、削除
  modal.classList.toggle("is-hidden"); //is-hiddenクラスを削除
  mask.classList.toggle("is-hidden"); //is-hiddenクラスを削除
});

/******** js-modal-maskをクリックするとモーダルを非表示 **********/
mask.addEventListener("click", function () {
  modal.classList.toggle("is-hidden"); //is-hiddenクラスを削除
  mask.classList.toggle("is-hidden"); //is-hiddenクラスを削除
  hamburger.classList.toggle("is-active"); //is-activeクラスを付与、削除
});

/*********************************
	トグルメニュー
*********************************/
/******** 要素を取得 **********/
const toggle = document.querySelectorAll(".js-toggle");
const menu = document.querySelectorAll(".js-toggle-menu");

/******** js-toggleをクリックするとトグルメニューが追加 ※１つの要素の場合 **********/
// toggle.addEventListener("click", function () {
//   toggle.classList.toggle("is-hidden"); //is-hiddenクラスを付与、削除
//   menu.classList.toggle("is-hidden"); //is-hiddenクラスを付与、削除
// });

/******** js-toggleをクリックするとトグルメニューが追加 ※複数要素の場合 **********/
for (let i = 0; i < toggle.length; i++) {
  toggle[i].onclick = function (e) {
    toggle[i].classList.toggle("is-hidden"); //is-hiddenクラスを付与、削除
    menu[i].classList.toggle("is-hidden"); //is-hiddenクラスを付与、削除
  };
}
