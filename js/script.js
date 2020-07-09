$(document).ready(function(){
    $('.relative').mouseenter(function (){
        $('.dropdown', this).show();
    }).mouseleave(function (){
        $('.dropdown', this).hide();
    });

    $('#ham-open>a').click(function(){
        $('#ham-menu').addClass('active');
    });

    $('.header>.ham-close>a').click(function(){
        $('#ham-menu').removeClass('active');
    });
    
    dropdownSlide($('#ham-hidden-denaro'),$('#ham-denaro-list'),$('#ham-main>.ham-list>.ham-navi li a #denaro-icon'));

    dropdownSlide($('#ham-hidden-investimenti'),$('#ham-investimenti-list'),$('#ham-main>.ham-list>.ham-navi li a #investimenti-icon'));

    dropdownSlide($('#ham-hidden-controllo'),$('#ham-controllo-list'),$('#ham-main>.ham-list>.ham-navi li a #controllo-icon'));

    dropdownSlide($('#ham-hidden-altro'),$('#ham-altro-list'),$('#ham-main>.ham-list>.ham-navi li a #altro-icon'));

    dropdownSlide($('#ham-hidden-plans'),$('#ham-plans-list'),$('#ham-main>.ham-list>.ham-navi li a #plans-icon'));

    dropdownSlide($('#ham-hidden-azienda'),$('#ham-azienda-list'),$('#ham-main>.ham-list>.ham-navi li a #azienda-icon'));

    dropdownSlide($('#ham-hidden-aiuto'),$('#ham-aiuto-list'),$('#ham-main>.ham-list>.ham-navi li a #aiuto-icon'));

    dropdownSlide($('#ham-hidden-seguici'),$('#ham-seguici-list'),$('#ham-main>.ham-list>.ham-navi li a #seguici-icon'));

});

// FUNCTION

function dropdownSlide(mainSlide,hiddenSlide,arrow) {
    mainSlide.click(function(){
        if (arrow.hasClass('rotate')==false) {
            arrow.addClass('rotate'); 
        } else {
            arrow.removeClass('rotate');
        }
        hiddenSlide.slideToggle();   
    });
}