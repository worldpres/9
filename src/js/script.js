jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut();
});

jQuery(document).ready(function () {
    jQuery('.carousel').carousel({
        indicators: true,
        fullWidth: true,
        duration: 200,
        shift: 6,
    });
    setInterval(function () { $('.carousel').carousel('next'); }, 4000);

    /*
    jQuery(".scroll-icon").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#aboutus").offset().top
        }, 1000, function(){
            //nothing :P
        });
    });
    */
});