(function(app){
    'use strict';

    var SlideshowCollection = Backbone.Collection.extend({
      model: app.SlideModel
    });

    app.SlideshowCollection = SlideshowCollection;
})(window.app);
