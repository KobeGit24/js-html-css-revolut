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

    var denaroId = $('#ham-hidden-denaro');
    var denaroList = $('#ham-denaro-list');
    var investimentiId = $('#ham-hidden-investimenti');
    var investimentiList = $('#ham-investimenti-list');
    var controlloId = $('#ham-hidden-controllo');
    var controlloList = $('#ham-controllo-list');
    var altroId = $('#ham-hidden-altro');
    var altroList = $('#ham-altro-list');
    var plansId = $('#ham-hidden-plans');
    var plansList = $('#ham-plans-list');
    var aziendaId =  $('#ham-hidden-azienda');
    var aziendaList =  $('#ham-azienda-list');
    var aiutoId = $('#ham-hidden-aiuto');
    var aiutoList = $('#ham-aiuto-list');
    var seguiciId =   $('#ham-hidden-seguici');
    var seguiciList = $('#ham-seguici-list');

    dropdownSlide(denaroId,denaroList);
    dropdownSlide(investimentiId,investimentiList);
    dropdownSlide(controlloId,controlloList);
    dropdownSlide(altroId,altroList);
    dropdownSlide(plansId,plansList);
    dropdownSlide(aziendaId,aziendaList);
    dropdownSlide(aiutoId,aiutoList);
    dropdownSlide(seguiciId,seguiciList);
});

function dropdownSlide(x,y) {
    x.click(function(){
        y.slideToggle();
    });
}

    // $('#ham-hidden-denaro a i').css('transform', 'rota(180deg)');