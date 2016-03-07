(function(app){
    'use strict';

    var SlideModel = Backbone.Model.extend({
        defaults : {
            images : [],
            title : ''
        }
    });

    app.SlideModel = SlideModel;
})(window.app);
