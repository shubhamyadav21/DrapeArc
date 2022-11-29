$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.toTop:hidden').stop(true, true).fadeIn();
    } else {
        $('.toTop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".toTop").offset().top},"1000");return false})})