(function(app){
    'use strict';

    var CarouselView = Backbone.View.extend({
        tagName: 'div',
        className: 'carousel',
        template: _.template($('#carousel-template').html()),

        initialize: function(){
            this.render();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    app.CarouselView = CarouselView;
})(window.app);
