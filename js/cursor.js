
(function (window) {
	function Cursor(stage, contentManager, game) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.game = game;
		createjs.Ticker.addListener(this);


		var spriteSheet = new createjs.SpriteSheet({
			"images": ["img/lofi_char.png"],
			"frames":
				{
					"height": cellWidth,
					"width": cellHeight,
					"regX": 0,
					"regY": 0,
				} 
	
		});

		var sprite = new createjs.BitmapAnimation(spriteSheet);
		sprite.x = 0;
		sprite.y = 0;
		sprite.regX = 0;//cellWidth / 2;
		sprite.regY = 0;//cellHeight / 2;
		sprite.currentFrame = 2;
		sprite.paused = true;
		this.sprite = sprite;

		this.cellX = 1;
		this.cellY = 1;

		stage.addChild(sprite);

	};

	Cursor.prototype.tick = function () {
		this.sprite.x = this.cellX * cellWidth;
		this.sprite.y = this.cellY * cellHeight;
    };

	window.Cursor = Cursor;
} (window));





	