

(function (window) {
	Hero.prototype = Object.create( Unit.prototype );
	Hero.prototype.constructor = Hero;

	function Hero(stage, contentManager, game) { 
		Unit.call(this, stage, contentManager, game,  "img/lofi_char.png", 1);
		this.gold = 10;
		this.stealRange = 16;

        this.components = [];
        this.components.push(new HeroSimpleMove(this));
	};
	Hero.prototype.reset = function () {
		Unit.prototype.reset.call(this);
		this.hasGold = false;
	}

	Hero.prototype.hit = function (hitPoints) {
		if(this.enable == false)
			return;
		if(true)
		{
			this.game.score.gold += this.gold;
			this.destroy();
		}
	}

	Hero.prototype.destroy = function () {
		if(this.enable == false)
			return;
		if(this.hasGold) {
			this.game.spawn(Treasure,this.x,this.y);
		}

		this.disable();
	}

	Hero.prototype.tick = function (timeElapsed) {
		if(this.enable == false)
			return;
		Unit.prototype.tick.call(this, timeElapsed);

        for (var i = 0; i < this.components.length; i++) {
            this.components[i].tick(timeElapsed);
        };

        if(this.x>this.game.getWidth())
        	this.destroy();

		if(this.hasGold == false) {
	        var treasure = this.game.findNearest(Treasure,this.x,this.y);
			if(treasure != null) {
				var dx = this.x - treasure.x;
				var dy = this.y - treasure.y;
				var dist = NormVec2D(dx,dy);
				if(dist<this.stealRange)
				{
					treasure.destroy();
					this.hasGold = true;
				}
			}
		}

		this.sprite.currentFrame = this.hasGold ? 3 : 1; 

    };

	window.Hero = Hero;
} (window));





	