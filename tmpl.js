'use strict';

var APP = window.APP = window.APP || {};

APP.tmpl = (function(){
    
    var bindEventsToUI = function() {
        
    };

    var init = function() {
        console.log('APP.tmpl');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
