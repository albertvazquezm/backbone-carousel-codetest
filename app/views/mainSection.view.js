(function(app){
    'use strict';

    var MainSectionView = Backbone.View.extend({
        tagName: 'section',
        className: 'main-section',

        initialize: function(){
            this.collection.each(function(carousel){
                var carouselView = new app.CarouselView({
                   model : carousel
                });
                this.$el.append(carouselView.el);
            }, this);
        },

        render: function(){

        }
    });

    app.MainSectionView = MainSectionView;
})(window.app);
