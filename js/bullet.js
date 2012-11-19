
(function (window) {
	function Bullet(stage, contentManager, game, spriteIndex) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.game = game;
		createjs.Ticker.addListener(this);
		this.x = 0;
		this.y = 0;
		this.dir = {x:0, y:0};
		this.speed = 100;
		this.lifeTime = 1500;
		this.hitRange = 16;
		this.enabled = true;


		var spriteSheet = new createjs.SpriteSheet({
			"images": ["img/lofi_obj.png"],
			"frames":
				{
					"height": cellWidth,
					"width": cellHeight,
					"regX": 0,
					"regY": 0,
				} 
	
		});

		var sprite = new createjs.BitmapAnimation(spriteSheet);
		sprite.x = this.x;
		sprite.y = this.y;
		sprite.currentFrame = spriteIndex;
		sprite.paused = true;
		this.sprite = sprite;
		
		stage.addChild(sprite);

	};
 
	Bullet.prototype.setTarget = function (target) {
		this.dir.x = target.x - this.x;
		this.dir.y = target.y - this.y;

		this.dir = NormalizeVec2D(this.dir);
	}

	Bullet.prototype.setPosition = function (x,y) {
		this.x = x;
		this.y = y;
		this.sprite.x = this.x;
		this.sprite.y = this.y;
	}

	Bullet.prototype.setCellPosition = function (cx,cy) {
		setPosition(cx * cellWidth,cy * cellHeight);
	}

	Bullet.prototype.disable = function () {
		this.enabled = false;
		this.sprite.visible = false;
	}

	Bullet.prototype.tick = function (timeElapsed) {

		if(this.enabled==false)
			return;

		if(this.lifeTime>=0) {
			this.lifeTime -= timeElapsed;
			if(this.lifeTime<0) {
				this.disable();
			}
		}



		var dt = timeElapsed / 1000;
		this.x += dt * this.speed * this.dir.x;
		this.y += dt * this.speed * this.dir.y;

		this.sprite.x = this.x;
		this.sprite.y = this.y;

		var hero = this.game.findNearestHero(this.x,this.y);
		if(hero != null) {
			var dx = this.x - hero.x;
			var dy = this.y - hero.y;
			var dist = NormVec2D(dx,dy);
			if(dist<this.hitRange)
				console.log("hit");
		}
    };

	window.Bullet = Bullet;
} (window));





	