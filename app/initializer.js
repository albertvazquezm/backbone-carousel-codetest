(function(app){
    'use strict';

    app.addInitializer(function(options){
      var slideshowView = new app.SlideshowView({
        collection: options.slides
      });
      app.mainRegion.show(slideshowView);
    });

})(window.app);
