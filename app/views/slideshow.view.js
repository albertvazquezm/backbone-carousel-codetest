(function(app){
    'use strict';

    var SlideshowView = Backbone.Marionette.CompositeView.extend({
      tagName: "div",
      className: "slideshow",
      template: "#slideshow-template",
      itemView: app.SlideView,

      appendHtml: function(collectionView, itemView){
        collectionView.$("tbody").append(itemView.el);
      }
    });

    app.SlideshowView = SlideshowView;
})(window.app);
