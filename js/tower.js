

(function (window) {
	Tower.prototype = Object.create( Unit.prototype );
	Tower.prototype.constructor = Tower;

	function Tower(stage, contentManager, game) { 
		Unit.call(this, stage, contentManager, game,  "img/lofi_char.png", 160);

		this.defaultCooldown = 2000;
		this.currentCooldown = 0;
	};

	Tower.prototype.tick = function (timeElapsed) {
		Unit.prototype.tick.call(this, timeElapsed);

		if(this.currentCooldown>=0) {
			this.currentCooldown -= timeElapsed;
			if(this.currentCooldown<0) {
				this.throwBullet();
			}
		}

    };

	Tower.prototype.throwBullet = function () {
		//console.log("throwBullet");
		this.currentCooldown = this.defaultCooldown;
		var target = this.game.findNearestHero(this.x,this.y);
		var bullet = this.game.spawnBullet(this.x, this.y);
		bullet.setTarget(target);
	}

	window.Tower = Tower;
} (window));





	