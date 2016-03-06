(function(app){
    'use strict';

    var SlideshowView = Backbone.Marionette.ItemView.extend({
        template: '#slide-template',
        tagName: 'li',
        className: 'slide'
    });

    app.SlideshowView = SlideshowView;
})(window.app);
