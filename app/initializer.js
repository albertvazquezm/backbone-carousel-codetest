(function(app){
    'use strict';

    var slidesData = [
        {
            title : 'Slideshow 1',
            images : [
                'http://placehold.it/300x300',
                'http://placehold.it/300x300',
                'http://placehold.it/300x300'
            ]
        }
    ];


    var list = new Backbone.Collection(slidesData);

    var slideshowView = new app.SlideshowColView({
        collection : list
    });

    var slidesh

    slideshowView.each(function(slide){
        var slides = slide.get('images');
        var slidesCollection = new app.SlideshowCollection(slides);
        hero.set('images', slidesCollection);
    });

    slideshowView.render();

    $('#app').append(slideshowView.el);

})(window.app);
