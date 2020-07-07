$(document).ready(function(){
    $('.relative').mouseenter(function (){
        $('.dropdown', this).show();
    });
    $('.relative').mouseleave(function (){
        $('.dropdown', this).hide();
    });

    console.log($(window).width()); 
    $(window).resize(function (){
        if ($(window).width() <= 1199) {
            $('header').hide();
            $('.navi').hide();
            $('#download').hide();
            $('.ham-menu').show();
            // console.log($(window).width());  
        } else if ($(window).width() >= 1200) {
            $('header').show();
            $('.navi').show();
            $('#download').show();
            $('.ham-menu').hide(); 
        }
    })  
});