(function(app){
    'use strict';

    var CarouselModel = Backbone.Model.extend({
        defaults: {
            index: 0,
            images : [],
            title : ''
        },
        config: {
            numberOfSlides: 4,
            animationDelay: 200
        }
    });

    app.CarouselModel = CarouselModel;
})(window.app);
