(function(app){
    'use strict';

    var CarouselModel = Backbone.Model.extend({
        defaults: {
            index: 0,
            images : [],
            title : ''
        },
        config: {
            numberOfSlides: 4
        }
    });

    app.CarouselModel = CarouselModel;
})(window.app);
