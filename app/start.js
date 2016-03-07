(function(app){
    'use strict';

    var carouselsData = [
        {
            title : 'Our services',
            images : [
                'http://fillmurray.com/200/300',
                'http://fillmurray.com/g/200/312',
                'http://placebear.com/g/200/315',
                'http://fillmurray.com/g/200/319',
                'http://placecage.com/g/200/300'

            ]
        },
        {
            title : 'Technology we love',
            images : [
                'http://fillmurray.com/210/300',
                'http://fillmurray.com/g/220/300',
                'http://placebear.com/200/310 ',
                'http://fillmurray.com/g/200/340',
                'http://placebear.com/g/203/300',
                'http://fillmurray.com/g/205/300',
                'http://fillmurray.com/208/300',
                'http://fillmurray.com/207/300'
            ]
        }
    ];

    app.mainCollectionInstance = new app.MainSectionCollection(carouselsData);

    var mainSectionView = new app.MainSectionView({collection:app.mainCollectionInstance});

    mainSectionView.render();

    $('#app').append(mainSectionView.el);

})(window.app);
