

(function (window) {
	Hero.prototype = Object.create( Unit.prototype );
	Hero.prototype.constructor = Hero;

	function Hero(stage, contentManager, game) { 
		Unit.call(this, stage, contentManager, game,  "img/lofi_char.png", 1);

        this.components = [];
        this.components.push(new HeroSimpleMove(this));
	};

	Hero.prototype.hit = function (hitPoints) {
		this.destroy();
	}

	Hero.prototype.destroy = function () {
		this.disable();
	}

	Hero.prototype.tick = function (timeElapsed) {
		Unit.prototype.tick.call(this, timeElapsed);

        for (var i = 0; i < this.components.length; i++) {
            this.components[i].tick(timeElapsed);
        };

        if(this.x>this.game.getWidth())
        	this.destroy();

    };

	window.Hero = Hero;
} (window));





	