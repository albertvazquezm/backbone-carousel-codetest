(function(app){
    'use strict';

    var SlideshowView = Backbone.Marionette.CompositeView.extend({
        template: '#slideshow-template',
        tagName: 'li',
        className: 'slide',
        itemView: app.SlideView,
        itemViewContainer: 'ul',
        initialize: function(){
            this.collection = this.model.get('images');
        },
    });

    app.SlideshowView = SlideshowView;
})(window.app);
