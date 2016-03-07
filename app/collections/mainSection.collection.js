(function(app){
    'use strict';

    var MainSectionCollection = Backbone.Collection.extend({
      model: app.CarouselModel
    });

    app.MainSectionCollection = MainSectionCollection;
})(window.app);
