(function(app){
    'use strict';

    var SlideView = Backbone.Marionette.ItemView.extend({
      template: "#slide-template",
    });

    app.SlideView = SlideView;
})(window.app);
