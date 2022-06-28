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
	ページ内リンク
*********************************/
$('.js-home-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top; //idの上部の距離を取得
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

/*********************************
	スクロール途中でヘッダー表示
*********************************/
$(function () {
  // 変数にクラスを入れる
  const headerFix = $(".js-header-fix");
  const target = $(".js-slider");

  if ($(window).width() < 1024) {
    $(window).on("load scroll", function () {
      if ($(this).scrollTop() > 900) {
        headerFix.addClass("is-show-done");
      } else {
        headerFix.removeClass("is-show-done");
      }
    });
  } else {
    $(window).on("load scroll", function () {
      if ($(this).scrollTop() > 1200) {
        headerFix.addClass("is-show-done");
      } else {
        headerFix.removeClass("is-show-done");
      }
    });
  }
});

/*********************************
	トグルメニュー
*********************************/
//クリックした時の動作
$(".js-toggle").on("click", function () {
  //タイトル要素をクリックしたら
  const findParent = $(this).parents(".js-toggle-parent"); //親要素を取得し
  const findElm = $(findParent).find(".js-toggle-content"); //親要素内にある表示したい要素を取得

  $(findElm).stop().fadeToggle(300);

  if ($(this).hasClass("is-show-done")) {
    //タイトル要素にクラス名is-show-doneがあれば
    $(this).removeClass("is-show-done"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("is-show-done"); //クラス名is-show-doneを付与
  }
});

/*********************************
	スライダー
*********************************/
$(function () {
  $(".js-slider").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 50000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
  });
});
