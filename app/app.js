(function(exports){
    var app = new Backbone.Marionette.Application();

    app.addRegions({
      mainRegion: "#app"
    });

    exports.app = app;
})(window);
