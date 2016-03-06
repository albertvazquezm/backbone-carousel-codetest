(function(app){
    'use strict';

    var SlideshowColView = Backbone.Marionette.CollectionView.extend({
        //template: _.template('<div><i class="arrow right"><ul></ul>'),
        className: 'slideshow',
        childView: app.SlideshowView
    });

    app.SlideshowColView = SlideshowColView;
})(window.app);
