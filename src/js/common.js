/**
 * Created by SINO on 2016/11/25.
 */
$(function () {
    var cmObj = {
        dom: {
            navMenu: $('.dropdown-toggle'),
            noSub: $('.nosub')
        },
        init:function () {
            cmObj.bindEvent();
        },
        bindEvent: function () {
            cmObj.dom.navMenu.click(function () {
                cmObj.dom.noSub.removeClass('active');
                $(this).toggleClass('active');
            });
            cmObj.dom.noSub.click(function(){
                cmObj.dom.noSub.removeClass('active');
                $(this).toggleClass('active');

                cmObj.dom.navMenu.removeClass('active');
            });
        }
    };
    cmObj.init();
});