(function(app){
    'use strict';

    var CarouselModel = Backbone.Model.extend({
        defaults : {
            images : [],
            title : ''
        }
    });

    app.CarouselModel = CarouselModel;
})(window.app);
