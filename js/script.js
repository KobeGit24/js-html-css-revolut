$(document).ready(function(){
    $('.relative').mouseenter(function (){
        $('.dropdown', this).show();
    });
    $('.relative').mouseleave(function (){
        $('.dropdown', this).hide();
    });

    $('#ham-open>a').click(function(){
        // $(this).hide();
        $('#ham-menu').show();
    });
});