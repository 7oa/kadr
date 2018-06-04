// js jquery
$(document).ready(function() {
    $('.index-cat__slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1
    });
    $('.services-prev__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
    $('.index-banners').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500
    });
    $('.js-show-menu').click(function() {
        if($('.header-menu-wrapper').hasClass('open')){
            $('.header-menu-wrapper').removeClass('open').animate({
                left: '-200px'
            }, 200);
        }
        else{
            $('.header-menu-wrapper').addClass('open').animate({
                left: '0px'
            }, 200);
        }
    });
    $('.js-open-send').click(function(){
        $('#send').arcticmodal();
    });

});