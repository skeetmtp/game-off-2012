
(function (window) {
	function Unit(stage, contentManager, game, spriteSheetFileName, spriteIndex) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.game = game;
		createjs.Ticker.addListener(this);
		this.x = 0;
		this.y = 0;


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
		this.sprite = sprite;
		
		stage.addChild(sprite);

	};
 
	Unit.prototype.setCellPosition = function (cx,cy) {
		this.x = cx * cellWidth;
		this.y = cy * cellHeight;
	}

	Unit.prototype.tick = function () {
		this.sprite.x = this.x;
		this.sprite.y = this.y;
    };

	window.Unit = Unit;
} (window));





	