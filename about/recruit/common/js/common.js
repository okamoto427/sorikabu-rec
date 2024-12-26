/*---------------------------------------------
 footerFloatingMenu
---------------------------------------------*/

jQuery(function () {
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

/*---------------------------------------------
 PageTOP
---------------------------------------------*/
$(document).ready(function () {
        var pagetop = $('.pagetop');
        $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                        pagetop.fadeIn();
                } else {
                        pagetop.fadeOut();
                }
        });
        pagetop.click(function () {
                $('body, html').animate({
                        scrollTop: 0
                }, 500);
                return false;
        });
});

/*---------------------------------------------
 SPナビゲーション
---------------------------------------------*/
$(function () {
        var centeringModalSyncer, isIE, isIE9, modalYtUrl, notList, timer, ua, viewport1, viewport2, viewportSet, windowW;
        ua = navigator.userAgent;
        if (ua.match(/MSIE/) || ua.match(/Trident/)) {
                if (ua.match(/MSIE 9./)) {
                        isIE9 = true;
                } else {
                        isIE = true;
                }
        }
        if (isIE) {
                $('body').addClass('ie');
        } else if (isIE9) {
                $('body').addClass('ie9');
        }
        if ($('img.over').length) {
                $('img.over').mouseenter(function () {
                        $(this).attr('src', $(this).attr('src').replace('_no', '_on'));
                }).mouseleave(function () {
                        $(this).attr('src', $(this).attr('src').replace('_on', '_no'));
                });
        }

        $('#searchBox input').on('focus', function () {
                if (!$('#searchBox').hasClass('focus')) {
                        $('#searchBox').addClass('focus');
                }
        });
        $('#searchBox input').on('blur', function () {
                if ($(this).val() === '') {
                        $('#searchBox').removeClass('focus');
                }
        });
        $('#searchBox button').on('click touch', function () {
                $('#search').submit();
        });
        $('#menu button').on('click touch', function () {
                $(this).toggleClass('open');
                if ($(this).hasClass('open')) {
                        $('#headerIn').stop().slideDown(300, function () {
                                $(this).removeAttr('style').attr('style', 'display:block;');
                        });
                } else {
                        $('#headerIn').stop().slideUp(300, function () {
                                $(this).removeAttr('style');
                        });
                }
        });
        if (ua.search(/Android 2./) === -1) {
                $(document).on('touchstart mouseenter', '#gNavi a,#lNavi a,.btn,.sNavi a,.logoList a', function () {
                        if ($('#menu').css('display') === 'block') {
                                $(this).addClass('hover');
                                setTimeout(function () {
                                        if (($(this)).hasClass('hover')) {
                                                $(this).addClass('hover');
                                        }
                                }, 5000);
                        }
                });
                $(document).on('touchend mouseleave', '#gNavi a,#lNavi a,.btn,.sNavi a,.logoList a', function () {
                        if ($('#menu').css('display') === 'block') {
                                $(this).removeClass('hover');
                        }
                });
        }
})(document, window, jQuery);


/*---------------------------------------------
 copyright自動更新
---------------------------------------------*/
function year() {
        var data = new Date();
        var now_year = data.getFullYear();
        document.write(now_year);
}

/*---------------------------------------------
 イメージロールオーバー
---------------------------------------------*/
function smartRollover() {
        if (document.getElementsByTagName) {
                var images = document.getElementsByTagName("img");

                for (var i = 0; i < images.length; i++) {
                        if (images[i].getAttribute("src").match("_off.")) {
                                images[i].onmouseover = function () {
                                        this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
                                }
                                images[i].onmouseout = function () {
                                        this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
                                }
                        }
                }
        }
}

if (window.addEventListener) {
        window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
        window.attachEvent("onload", smartRollover);
}
