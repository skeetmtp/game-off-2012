
(function (window) {
	function Wave(game) {
		createjs.Ticker.addListener(this);
		this.game = game;
		this.defaultCooldown = 500;
		this.currentCooldown = 0;
	};

	Wave.prototype.spawn = function (timeElapsed) {
		this.currentCooldown = this.defaultCooldown;
		this.game.spawn(Hero, 0, this.game.getHeight()-cellHeight*2);
	}
 
	Wave.prototype.tick = function (timeElapsed) {
		if(this.currentCooldown>=0) {
			this.currentCooldown -= timeElapsed;
			if(this.currentCooldown<0) {
				this.spawn();
			}
		}
    };

	window.Wave = Wave;
} (window));





	