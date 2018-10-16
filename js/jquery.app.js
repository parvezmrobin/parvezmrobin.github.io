/*  Theme Name: Blogezy - Responsive Blog Template
    Author: Zoyothemes
    Version: 1.0.0
    File Description:Main JS file of the template
*/
(function($) {

    'use strict';

    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu();
    }

    function initLeftMenuCollapse() {
        // Left menu collapse
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });
    }

    function init() {
        initMetisMenu();
        initLeftMenuCollapse();
    }
    init();

})(jQuery)

