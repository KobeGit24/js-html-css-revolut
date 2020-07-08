$(document).ready(function(){
    $('.relative').mouseenter(function (){
        $('.dropdown', this).show();
    });
    $('.relative').mouseleave(function (){
        $('.dropdown', this).hide();
    });

    $('#ham-open>a').click(function(){
        $('#ham-menu').addClass('active');
    });

    $('.ham-close>a').click(function(){
        $('#ham-menu').removeClass('active');
    });

    $('#ham-hidden-denaro').click(function(){
        $('#ham-denaro-list').slideToggle();
        // $('#ham-hidden-denaro a i').css('transform', 'rotate(180deg)');
    });

    $('#ham-hidden-investimenti').click(function(){
        $('#ham-investimenti-list').slideToggle();
    });

    $('#ham-hidden-controllo').click(function(){
        $('#ham-controllo-list').slideToggle();
    });

    $('#ham-hidden-altro').click(function(){
        $('#ham-altro-list').slideToggle();
    });

    $('#ham-hidden-plans').click(function(){
        $('#ham-plans-list').slideToggle();
    });

    $('#ham-hidden-azienda').click(function(){
        $('#ham-azienda-list').slideToggle();
    });
});
