$(function(){
    $('.menu > li').each(function(){

        var sub = $(this).find('.submenu');

        $(this).hover(function(){
            sub.stop().slideDown();
        }, function(){
            sub.stop().slideUp();
        });

    });

});