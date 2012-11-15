

(function (window) {
	Hero.prototype = Object.create( Unit.prototype );
	Hero.prototype.constructor = Hero;

	function Hero(stage, contentManager, game) { 
		Unit.call(this, stage, contentManager, game,  "img/lofi_char.png", 1);
	};

	Hero.prototype.tick = function () {
		Unit.prototype.tick.call(this);

    };

	window.Hero = Hero;
} (window));





	