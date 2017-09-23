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

    jQuery(".arrow_down").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".row.menu").offset().top
        }, 1000, function(){
            //nothing :P
        });
    });

    jQuery(".arrow_up").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("body").offset().top
        }, 1000 );
    });

    jQuery("#aboutme2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#aboutme").offset().top-100
        }, 1000 );
    });
    jQuery("#works2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#works").offset().top-100
        }, 1000 );
    });
    jQuery("#contact2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#contact").offset().top-60
        }, 1000 );
    });
    jQuery("#followme2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#followme").offset().top-100
        }, 1000 );
    });

    jQuery("#home2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#home").offset().top-100
        }, 1000 );
    });

    jQuery(window).on("scroll, load" ,function () {
        if( jQuery(window).scrollTop() > ( jQuery("#home").outerHeight()-jQuery(".row.menu").outerHeight() ) ){
            jQuery(".row.menu").addClass("fixed");
        }
        if( jQuery(window).scrollTop() <= ( jQuery("#home").outerHeight()-jQuery(".row.menu").outerHeight() ) ){
            jQuery(".row.menu").removeClass("fixed");            
        }
        console.log( jQuery(window).scrollTop() + ">" + jQuery("main > h5").eq(0).offset().top );
    });
});