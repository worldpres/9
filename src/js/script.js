jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut();
});


jQuery(document).ready(function () {

    jQuery(window).on("scroll load" ,function () {
        //console.log( jQuery(window).scrollTop() + ">" + jQuery("main > h5").eq(0).offset().top );
        if( jQuery(window).scrollTop() > ( jQuery("#home").outerHeight()-jQuery(".row.menu").outerHeight() ) ){
            jQuery(".row.menu").addClass("fixed");
        }
        if( jQuery(window).scrollTop() <= ( jQuery("#home").outerHeight()-jQuery(".row.menu").outerHeight() ) ){
            jQuery(".row.menu").removeClass("fixed");            
        }
    });

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

    jQuery(".menu a").each(function(){
        $(this).click(function(){
            jQuery('html, body').animate({
                scrollTop: jQuery( jQuery(this).attr("href") ).offset().top-60
            }, 1000 );
        });
    });
    jQuery(".menu-mobile a").each(function(){
        $(this).click(function(){
            jQuery('html, body').animate({
                scrollTop: jQuery( jQuery(this).attr("href") ).offset().top-60
            }, 10, function(){
                jQuery(".menu-mobile").removeClass("show");
            } );
        });
    });
    jQuery("#hamburger, #hamburger-mobile").click(function () {
        jQuery('.menu-mobile').toggleClass("show");
    });


    jQuery('.carousel').carousel({
        indicators: true,
        fullWidth: true,
        duration: 200,
        shift: 6,
    });
    setInterval(function () { $('.carousel').carousel('next'); }, 4000);

});