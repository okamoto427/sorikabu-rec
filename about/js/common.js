/*---------------------------------------------
 footerFloatingMenu
---------------------------------------------*/

jQuery(function() {
    var topBtn = jQuery('#footerFloatingMenu');
    topBtn.hide();
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) { // 200pxで表示
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

