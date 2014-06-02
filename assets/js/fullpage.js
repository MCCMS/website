$(document).ready(function() {
    $('#full-page').fullpage({
        menu: '#menu',
        slidesColor: ['#27ae60', '#2c3e50', '#e74c3c', '#27ae60', '#27ae60'],
        slidesNavigation: true,			
        slidesNavPosition: 'top pull-left',
        animateAnchor: true,
        verticalCentered: true,
        resize : true,
    });
    $.fn.fullpage.moveTo(0,4); 
    $("#full-page .controlArrow.prev").append('<i class="fa fa-chevron-left fa-3x"></i>');
    $("#full-page .controlArrow.next").append('<i class="fa fa-chevron-right fa-3x"></i>');
    $(".fullPage-slidesNav").css("margin-left", "0px"); 
});