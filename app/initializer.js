(function(app){
    'use strict';

    var slidesData = [
        {
            image : 'http://placehold.it/200x340',
            alt : 'image two!'
        },
        {
            image : 'http://placehold.it/300x300',
            alt : 'image one!'
        }
    ];

    var list = new Backbone.Collection(slidesData);

    //var slidesCollection = new app.SlideshowCollection(slidesData);

    var slideshowView = new app.SlideshowView({
        collection : list
    });

    slideshowView.render();

    $('#app').append(slideshowView.el);

})(window.app);
