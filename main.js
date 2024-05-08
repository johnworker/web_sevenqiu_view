
// // wrapper區
// $(document).ready(function() {
//     var $slider = $('.spot_bg_show');
//     $slider.slick({
//         initialSlide: 0,
//         infinite: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         vertical: false,
//         arrows: false,
//         draggable: false,
//         rtl: false,
//         autoplay: false,
//         speed: 600
//     });

//     var scrollTrigger = 450;
//     var totalSlides = $slider.slick('getSlick').slideCount;

//     $(window).scroll(function() {
//         var st = $(this).scrollTop();
//         var relativeScroll = st - scrollTrigger;
        
//         if (st >= scrollTrigger) {
//             var slideIndex = Math.max(0, Math.min(Math.floor(relativeScroll / (1000 / totalSlides)), totalSlides - 1));
//             $slider.slick('slickGoTo', slideIndex, false);
//         } else {
//             $slider.slick('slickGoTo', 0, true); // 保持在第一張圖片
//         }
//     });
// });


// wrapper test
document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var startScroll = 500;  // 設定起始滾動距離為 500px

    if (scrollPosition > startScroll) {
        var maxScroll = document.body.scrollHeight - window.innerHeight - startScroll;

        // 當滾動距離大於 150px 時，計算移動的比例
        var movePercentage = (scrollPosition - startScroll) / maxScroll;

        // 計算移動距離（這裡的 800 是示例值，可以根據實際內容調整）
        var moveX = movePercentage * 1800;  // 可以調整這個數值來控制移動的範圍

        // 應用 GSAP 動畫，移動 `.spot_bg_show`
        gsap.to('.spot_bg_show', {x: -moveX}); // 向左移動
    } else {
        // 當滾動距離小於或等於 150px 時，確保圖片位置不變
        gsap.to('.spot_bg_show', {x: 0});
    }
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
