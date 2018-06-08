// js jquery
$(document).mouseup(function (e){
    var div = $(".header-menu-wrapper.open");
    var btn = $(".js-show-menu");
    if (!btn.is(e.target)
        && !div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('open').animate({
            left: '-200px'
        }, 200);
    }
});
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
    $('.js-enter').click(function(){
        $('#enter').arcticmodal();
        $('.form-reg').hide();
        $('.form-enter').show();
    });
    $('.js-registration').click(function(){
        var reg = $(this).data('reg');
        var regClass = '.form-'+reg;
        $('.form-enter').hide();
        $(regClass).fadeIn();
    });
    $('.js-tab').click(function(){
        var tab = $(this).data('tab');

        $(this).addClass('active')
            .siblings().removeClass('active');

        $(this).parent().next().children('.tab-'+tab).show()
            .siblings().hide();
    });
    $('.js-filter').click(function(){
        $('.filter-panel').slideToggle();
    });

});