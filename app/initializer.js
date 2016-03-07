(function(app){
    'use strict';

    var carouselsData = [
        {
            title : 'Our services',
            images : [
                'http://placehold.it/300x300',
                'http://placehold.it/300x300',
                'http://placehold.it/300x300'
            ]
        },
        {
            title : 'Technology we love',
            images : [
                'http://placehold.it/300x300',
                'http://placehold.it/300x300',
                'http://placehold.it/300x300'
            ]
        }
    ];

    app.mainCollectionInstance = new app.MainSectionCollection(carouselsData);

    var mainSectionView = new app.MainSectionView({collection:app.mainCollectionInstance});

    mainSectionView.render();

    $('#app').append(mainSectionView.el);

})(window.app);
