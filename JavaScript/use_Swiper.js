window.addEventListener('load', () => {
    const sliderTarget = '.js-slider'; //メインのスライダー
    const navSliderTarget = '.js-slider-nav'; //サムネイルのスライダー

    const sliderElem = document.querySelector(sliderTarget);
    const navSliderElem = document.querySelector(navSliderTarget);

    if (sliderElem === null && navSliderElem === null) return;
    
    //メインのスライダーのオプション
    const sliderParams = {
      loop: true, // ループさせる
      loopAdditionalSlides: 10, // ループのときに作られるクローンの枚数。
      parallax: true, // パパラックスさせる
      allowTouchMove: false, // マウスでのスワイプを禁止
    };

    //サムネイルのスライダーのオプション
    const navSliderParams = {
      loop: true,
      loopAdditionalSlides: 10,
      speed: 1200,
      autoplay: {
        delay: 3000, // ３秒後に次のスライドへ
        disableOnInteraction: false, // ユーザー側で操作してもスライドを止めない
      },
      slidesPerView: 3, // 画面状で見れるスライドの枚数を指定
      centeredSlides: true, // アクティブのスライドを中央にする
      allowTouchMove: false, // マウスでのスワイプを禁止
      slideToClickedSlide: true, // スワイプ中にクリックした時、今の動きをキャンセルしてクリックした側のスライドに移動する
      navigation: {
        // 左右のページ送りを有効にする
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    const slider = new Swiper(sliderTarget, sliderParams);
    const navSlider = new Swiper(navSliderTarget, navSliderParams);

    slider.controller.control = navSlider; // メインスライダーとナビの紐付け
    navSlider.controller.control = slider; // ナビとメインスライダーの紐付け
  });