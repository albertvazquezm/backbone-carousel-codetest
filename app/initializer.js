(function(app){
    'use strict';

    var carouselsData = [
        {
            title : 'Our services',
            images : [
                'http://fillmurray.com/200/300',
                'http://fillmurray.com/g/200/300',
                'http://placebear.com/g/200/300',
                'http://fillmurray.com/g/200/300',
                'http://placecage.com/g/200/300',
                'http://fillmurray.com/g/200/300',
                'http://placecage.com/c/200/300'
            ]
        },
        {
            title : 'Technology we love',
            images : [
                'http://fillmurray.com/200/300',
                'http://fillmurray.com/g/200/300',
                'http://placebear.com/200/300 ',
                'http://fillmurray.com/g/200/300',
                'http://placebear.com/g/200/300',
                'http://fillmurray.com/g/200/300',
                'http://fillmurray.com/200/300',
                'http://nicenicejpg.com/600/400'
            ]
        }
    ];

    app.mainCollectionInstance = new app.MainSectionCollection(carouselsData);

    var mainSectionView = new app.MainSectionView({collection:app.mainCollectionInstance});

    mainSectionView.render();

    $('#app').append(mainSectionView.el);

})(window.app);
