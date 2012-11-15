

(function (window) {
	Tower.prototype = Object.create( Unit.prototype );
	Tower.prototype.constructor = Tower;

	function Tower(stage, contentManager, game) { 
		Unit.call(this, stage, contentManager, game,  "img/lofi_char.png", 160);
	};

	Tower.prototype.tick = function () {
		Unit.prototype.tick.call(this);

    };

	window.Tower = Tower;
} (window));





	