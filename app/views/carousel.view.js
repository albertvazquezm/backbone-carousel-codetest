(function(app){
    'use strict';

    var CarouselView = Backbone.View.extend({
        tagName: 'div',
        className: 'carousel four-elements',
        template: _.template($('#carousel-template').html()),

        initialize: initialize,
        render: render,
        events: {
            'click .fa-arrow-left': 'onClickOnLeft',
            'click .fa-arrow-right': 'onClickOnRight'
        },

        onClickOnLeft: onClickOnLeft,
        onClickOnRight: onClickOnRight
    });


    /**
     * Initialize function
     */
    function initialize(){
        this.render();
        this.model.on('change:index', onIndexChanges.bind(this));
    }


    /**
     * Render function
     */
    function render(){
        this.$el.html(this.template(this.model.toJSON()));
        _afterRender.call(this);
    }

    /**
     * Handles afterRender event
     */
    function _afterRender(){
        _buildCarousel.call(this);
    }

    /**
     * On click on left handler
     */
    function onClickOnLeft(){
        this.model.set({
            index: this.model.get('index') + 1
        });
        _moveCarousel.call(this, 'left');
    }

    /**
     * On click on right handler
     */
    function onClickOnRight(){
        this.model.set({
            index: this.model.get('index') - 1
        });
        _moveCarousel.call(this, 'right');
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
            this.$el.find('.fa-arrow-left').hide();
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

    /**
    * Handler for index changes
    * @param {Object} model
    * @param {*} new value
    */
    function onIndexChanges(model, value){
        this.$el.find('.fa-arrow-right, .fa-arrow-left').show();
        if(value === 0){
            _disableArrow.call(this, 'left');
        }else if((Math.abs(value) + this.model.config.numberOfSlides) >= this.numberOfSlides){
            _disableArrow.call(this, 'right');
        }
    }

    /**
    * Moves the carousel
    * @param {String left|right} direction
    */
    function _moveCarousel(direction){
        var operator = (direction === 'right' ? '-=' : '+=');
        this.$el.find('ul').animate({
            'margin-left': operator + this.slideWidth
        }, this.model.config.animationDelay);
    }

    /**
    * Disables given arrow
    * @param {String left|right} arrow to be moved
    */
    function _disableArrow(arrow){
        var selector = (arrow === 'right' ? '.fa-arrow-right' : '.fa-arrow-left');
        this.$el.find(selector).hide();
    }

    app.CarouselView = CarouselView;

})(window.app);
