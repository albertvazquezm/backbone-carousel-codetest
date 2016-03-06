(function(app){
    'use strict';

    app.addInitializer(function(options){
      var slideshow = new app.SlideshowCollection(options.slides);

      var slideshowView = new app.SlideshowView({
        collection: slideshow
      });
      app.mainRegion.show(slideshowView);
    });

    window.app.start({slides :
      [
        {image : 'http://placehold.it/300x300', alt : 'Image one!'},
        {image : 'http://placehold.it/300x300', alt : 'Image two!'},
        {image : 'http://placehold.it/300x300', alt : 'Image three!'}
      ]});

})(window.app);
