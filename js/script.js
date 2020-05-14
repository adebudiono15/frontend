$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
        $('.fixed-top').css('background', 'transparent');
        $('.nav_logo').css('color', '#59555D');
    } else {
        $('.fixed-top').css('background', 'rgb(254,151,85)');
        $('.nav_logo').css('color', 'rgb(255,255,255)');
    }
});