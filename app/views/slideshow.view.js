(function(app){
    'use strict';

    var SlideshowView = Backbone.Marionette.CollectionView.extend({
        template: _.template('<div><i class="arrow right"><ul></ul>'),
        className: 'slideshow',
        childView: app.SlideView,
    });

    app.SlideshowView = SlideshowView;
})(window.app);
