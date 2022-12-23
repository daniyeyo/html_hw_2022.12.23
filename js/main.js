$(function () {
    $('h1').on('click', function () {
        console.log('작동함')
    })

    
    $(window).on('scroll', function () {
        console.log('스크롤 : ', $(window).scrollTop())

    
        var sct = $(window).scrollTop()
        sct > 0 ? $('#header').addClass('on')
            : $('#header').removeClass('on')
    
    })










    $('.artist-name li').on('click', function () {
        $('.mainSlide').toggleClass('on')
    });


    $('.mainSlide').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,

        cssEase: 'linear'
    });



    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.artist-name li').eq(c).addClass('on').siblings().removeClass('on');
        $('.artist-name li').text(c + 1)
    })

    $('.artist-name li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })











})

