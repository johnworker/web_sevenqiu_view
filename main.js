
// wrapper區
document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var wrapperStart = document.querySelector('.wrapper').offsetTop;
    var wrapperHeight = document.querySelector('.wrapper').offsetHeight;
    var startScroll = 150; // 將觸發點設定為 150px
    

    // 只在滾動位置進入 .wrapper 區域時執行動畫
    if (scrollPosition >= wrapperStart && scrollPosition <= (wrapperStart + wrapperHeight)) {
        var totalWidth = document.querySelector('.spot_bg_show').scrollWidth - window.innerWidth;
        var moveX = ((scrollPosition - wrapperStart) / wrapperHeight) * totalWidth;

        // 根據滾動比例移動圖片
        gsap.to('.spot_bg_show', {x: -moveX, ease: "none"});
    }else {
        gsap.to('.spot_bg_show', {x: 0});
    }
});


// wrapper區測試


// recommend區
$(document).ready(function() {
    var $slider = $('.recommend_slider');
    $slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear'
    });
});

// intelligence區
$(document).ready(function() {
    var $slider = $('.info_post');
    $slider.slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        draggable: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear'
    });
});


// 捲動效果
$(function () {
    //捲動至top0的位置
    $("#arrow").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    //指定捲軸位置淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#arrow').stop().fadeTo('fast', 1);
        } else {
            $('#arrow').stop().fadeOut('fast');
        }
    });
});


// 輪播系統(SlickCarousel)
$('.service_img').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
    arrows: false
  });