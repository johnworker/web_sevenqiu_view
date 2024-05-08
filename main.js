
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
