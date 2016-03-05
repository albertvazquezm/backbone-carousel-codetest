(function(app){
    'use strict';

    var SlideModel = Backbone.Model.extend({
        defaults : {
            image : '',
            alt : ''
        }
    });

    app.SlideModel = SlideModel;
})(window.app);
