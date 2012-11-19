
(function (window) {
	function Unit(stage, contentManager, game, spriteSheetFileName, spriteIndex) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.game = game;
		createjs.Ticker.addListener(this);
		this.x = 0;
		this.y = 0;
		this.dx = 0;
		this.dy = 0;
		this.enabled = true;


		var spriteSheet = new createjs.SpriteSheet({
			"images": [spriteSheetFileName],
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
		sprite.visible = this.enabled;
		this.sprite = sprite;
		
		stage.addChild(sprite);

	};

	Unit.prototype.disable = function () {
		this.enabled = false;
		this.sprite.visible = this.enabled;
	}
 
	Unit.prototype.enable = function () {
		this.enabled = true;
		this.sprite.visible = this.enabled;
	}
 
	Unit.prototype.setCellPosition = function (cx,cy) {
		this.x = cx * cellWidth;
		this.y = cy * cellHeight;
	}

	Unit.prototype.tick = function (timeElapsed) {
		if(this.enable == false)
			return;
		
		var dt = timeElapsed / 1000;
        this.dy += window.gravity * dt;
        this.y += this.dy;
        var maxY = this.game.getHeight() - window.cellHeight; 
        if(this.y>maxY)
        	this.y = maxY;



		this.sprite.x = this.x;
		this.sprite.y = this.y;

    };

	window.Unit = Unit;
} (window));





	