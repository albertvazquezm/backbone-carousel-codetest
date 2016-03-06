(function(app){
    'use strict';

    var SlideshowView = Backbone.Marionette.CollectionView.extend({
      template: "#slideshow-template",
      childView: app.SlideView,
    });

    app.SlideshowView = SlideshowView;
})(window.app);
