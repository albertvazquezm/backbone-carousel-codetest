(function(app){
    'use strict';

    var CarouselView = Backbone.View.extend({
        tagName: 'div',
        className: 'carousel four-elements',
        template: _.template($('#carousel-template').html()),

        initialize: initialize,
        render: render,
        events: {
            'click .fa-arrow-left': 'moveLeft',
            'click .fa-arrow-right': 'moveRight'
        },
        afterRender: afterRender,
        generateRandomIndex: generateRandomIndex,
        moveLeft: moveLeft,
        moveRight: moveRight,
        onIndexChanges: onIndexChanges
    });

    function initialize(){
        this.generateRandomIndex();
        this.render();
        this.model.on('change:index', this.onIndexChanges);
    }

    function render(){
        this.$el.html(this.template(this.model.toJSON()));
        this.afterRender();
    }

    function afterRender(){
        _buildCarousel.call(this);
    }

    function generateRandomIndex(){
        var randomIndex = _getRandomInt(0, this.model.get('images').length + 1);
        this.model.set({index: Math.min(randomIndex, this.model.config.numberOfSlides)});
    }

    /**
     * Moves left the carousel
     */
    function moveLeft(){
        this.model.set({index: this.model.get('index') + 1});
        this.$el.find('ul').animate({
            'margin-left':'-='+this.slideWidth
        }, 100);
    }

    /**
     * Moves right the carousel
     */
    function moveRight(){
        this.model.set({index: this.model.get('index') - 1});
        this.$el.find('ul').animate({
            'margin-left':'+='+this.slideWidth
        }, 100);
    }

    /**
     * @private
     * Builds the carousel
     */
    function _buildCarousel(){
        _(function() {
            this.numberOfSlides = this.model.get('images').length;
            this.slideWidth = this.$el.width() / this.model.config.numberOfSlides;
            this.$el.find('li').width(this.slideWidth);
            this.$el.find('ul').width(this.slideWidth * this.numberOfSlides);
            _setCarouselToIndex.call(this);
        }.bind(this)).defer();
    }

    /**
    * @private
    * @param {Number} minimum
    * @param {Number} maximum
    * Returns random integer
    */
    function _getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function onIndexChanges(model, value){
        console.log(value);
    }

    function _setCarouselToIndex(){
        var distance = this.model.get('index') * this.slideWidth;
        console.log(distance, this.model.get('index'));
        this.$el.find('ul').css({
            'margin-left':'-='+distance
        });
    }

    app.CarouselView = CarouselView;
})(window.app);
