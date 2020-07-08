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

    $('.header>.ham-close>a').click(function(){
        $('#ham-menu').removeClass('active');
    });

    dropdownSlide($('#ham-hidden-denaro'),$('#ham-denaro-list'));
    dropdownSlide($('#ham-hidden-investimenti'),$('#ham-investimenti-list'));
    dropdownSlide($('#ham-hidden-controllo'),$('#ham-controllo-list'));
    dropdownSlide($('#ham-hidden-altro'),$('#ham-altro-list'));
    dropdownSlide($('#ham-hidden-plans'),$('#ham-plans-list'));
    dropdownSlide($('#ham-hidden-azienda'),$('#ham-azienda-list'));
    dropdownSlide($('#ham-hidden-aiuto'),$('#ham-aiuto-list'));
    dropdownSlide($('#ham-hidden-seguici'),$('#ham-seguici-list'));

});

function dropdownSlide(mainSlide,hiddenSlide) {
    mainSlide.click(function(){
        hiddenSlide.slideToggle(); 
    });
}