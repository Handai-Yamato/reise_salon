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
/*--------------------------------
	ヘッダー
--------------------------------*/

/******** 要素を取得 **********/
const toggle = document.querySelectorAll(".js-toggle");
const menu = document.querySelectorAll(".js-toggle-menu");

/******** js-toggleをクリックするとトグルメニューが追加 ※複数要素にイベントを発生させる場合 **********/
for (let i = 0; i < toggle.length; i++) {
  toggle[i].onclick = function (e) {
    toggle[i].classList.toggle("is-hidden"); //is-hiddenクラスを付与、削除
    menu[i].classList.toggle("is-hidden"); //is-hiddenクラスを付与、削除

  };
}


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


// for(var n=1;n<=2;n++){
//   //----] <td> を取得
//   var td = document.querySelectorAll( ".js-table td:nth-child("+n+")" );
//   //----] <td> の設定
//   for(var i=0;i<td.length;i++){
//   //----]----] スタイルシート
//   td[ i ].style.textAlign = "center";
//   //----]----] 中身を <span> で囲う
//   td[ i ].innerHTML = ""
//   + "<span style='display:inline-block; text-align:"+( n==1 ? "left" : "right" )+";'>"
//   + td[ i ].innerHTML
//   + "</span>";
//   }
//   //----] <span> を取得
//   var span = document.querySelectorAll( ".js-table tr td:nth-child("+n+") > span" );
//   //----] <span> を最大幅に揃える
//   var maxw = 0;
//   for(var i=0;i<span.length;i++){
//   if( span[ i ].offsetWidth>maxw ){ maxw = span[ i ].offsetWidth }
//   }
//   for(var i=0;i<span.length;i++){
//   span[ i ].style.width = maxw+"px";
//   }
//   }