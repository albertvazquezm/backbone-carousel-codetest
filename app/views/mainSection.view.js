(function(app){
    'use strict';

    var MainSectionView = Backbone.View.extend({
        tagName: 'section',
        className: 'main',

        initialize: initialize
    });

    function initialize(){
        this.collection.each(function(carousel){
            var carouselView = new app.CarouselView({
               model : carousel
            });
            this.$el.append(carouselView.el);
        }, this);
    }

    app.MainSectionView = MainSectionView;
})(window.app);
