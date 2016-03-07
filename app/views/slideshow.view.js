(function(app){
    'use strict';

    var SlideshowView = Backbone.View.extend({
        tagName: 'ul',
        className: 'slideshow',

        initialize: function(){
            this.collection.each(function(slide){
                var slideView = new app.SlideView({
                   model : slide
                });
                this.$el.append(slideView.el);
            }, this);
        },

        render: function(){

        }
    });

    app.SlideshowView = SlideshowView;
})(window.app);
