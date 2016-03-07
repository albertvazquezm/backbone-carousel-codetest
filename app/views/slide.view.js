(function(app){
    'use strict';

    var SlideView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#slideshow-template').html()),

        initialize: function(){
            this.render();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    app.SlideView = SlideView;
})(window.app);
