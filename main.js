
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
