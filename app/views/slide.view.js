(function(app){
    'use strict';

    var SlideView = Backbone.Marionette.ItemView.extend({
      template: "#slide-template",
      tagName: 'tr',
      className: 'slide'
    });

    app.SlideView = SlideView;
})(window.app);
