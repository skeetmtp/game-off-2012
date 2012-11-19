

(function (window) {
	Treasure.prototype = Object.create( Unit.prototype );
	Treasure.prototype.constructor = Treasure;

	function Treasure(stage, contentManager, game) {
		Unit.call(this, stage, contentManager, game,  "img/lofi_obj.png", 0);
	};

	Treasure.prototype.tick = function (timeElapsed) {
		Unit.prototype.tick.call(this, timeElapsed);
		
    };

	window.Treasure = Treasure;
} (window));





	