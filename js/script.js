$(document).ready(function(){
    $('.relative').mouseenter(function (){
        $('.dropdown', this).show();
    });
    $('.relative').mouseleave(function (){
        $('.dropdown', this).hide();
    });

    $(window).resize(function (){
        console.log($(window).width()); 
        if ($(window).width() >= 1200) {
            $('header').show();
            $('.navi').show();
            $('#download').show();
            $('.ham-menu').hide();
        } else if ($(window).width() <= 1199) {
            $('header').hide();
            $('.navi').hide();
            $('#download').hide();
            $('.ham-menu').show(); 
        } else if ($(window).width() <= 992) {
            $('header').hide();
            $('.navi').hide();
            $('#download').hide();
            $('.ham-menu').show();
            $('.title #open-count').hide();
            $('.info').hide();
        }
    })  
});