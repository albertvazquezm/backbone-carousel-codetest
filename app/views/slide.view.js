(function(app){
    'use strict';

    var SlideView = Backbone.Marionette.CompositeView.extend({
        template: _.template('<img src="<%=image%>" alt="<%=alt%>"/>'),
        tagName: 'li',
        className: 'slide'
    });

    app.SlideView = SlideView;
})(window.app);
