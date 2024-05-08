
// wrapper區
$(document).ready(function() {
    var $slider = $('.spot_bg_show');
    $slider.slick({
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false,
        draggable: false,
        rtl: false,
        autoplay: false,
        speed: 600
    });

    var scrollTrigger = 450;
    var totalSlides = $slider.slick('getSlick').slideCount;

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        var relativeScroll = st - scrollTrigger;
        
        if (st >= scrollTrigger) {
            var slideIndex = Math.max(0, Math.min(Math.floor(relativeScroll / (1000 / totalSlides)), totalSlides - 1));
            $slider.slick('slickGoTo', slideIndex, false);
        } else {
            $slider.slick('slickGoTo', 0, true); // 保持在第一張圖片
        }
    });
});


// wrapper test
document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var maxScroll = document.body.scrollHeight - window.innerHeight;

    // 計算移動的比例
    var movePercentage = scrollPosition / maxScroll;

    // 根據滾動的百分比來計算移動距離（這裡的 1000 是示例值，可以根據實際內容調整）
    var moveX = movePercentage * 10000; // 可以調整這個數值來控制移動的範圍

    // 應用 GSAP 動畫
    gsap.to('.spot_bg_show', {x: -moveX}); // 向左移動，如果需要向右移動可以改變符號
});



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
