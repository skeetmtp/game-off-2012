
(function (window) {
	function Map(stage, contentManager, tileCountX, tileCountY) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.tileCountX = tileCountX;
        this.tileCountY = tileCountY;
        this.tiles = [];

		createjs.Ticker.addListener(this);


		var spriteSheet = new createjs.SpriteSheet({
			"images": ["img/lofi_environment.png"],
			//"images": ["img/lofi_char.png"],
			"frames":
				{
					"height": cellWidth,
					"width": cellHeight,
					"regX": 0,
					"regY": 0,
				}
	
		});
/*
		var mapDesc = "[	"+	    
			"[113, 113, 113]," +
			"[113, 113, 113]," +
			"[113, 113, 113]"+
		"]";

		mapArray = JSON.parse(mapDesc);
		//console.log(JSON.stringify(mapArray));


		for (var j = 0; j < mapArray.length; j++) {
			var row = mapArray[j];
			for (var i = 0; i < row.length; i++) {
				var elem = row[i];

				var tileSprite = new createjs.BitmapAnimation(spriteSheet);
				tileSprite.x = 0 + i * 32;
				tileSprite.y = 0 + j * 32;
				tileSprite.currentFrame = elem;
				tileSprite.paused = true;
				stage.addChild(tileSprite);
			}
		}
*/

		for (var j = 0; j < tileCountY; j++) {
			this.tiles[j] = [];
			for (var i = 0; i < tileCountX; i++) {
				var val = 113;
				var row = this.tiles[j];
				var sprite = new createjs.BitmapAnimation(spriteSheet);
				row[i] = {"val" : val, "sprite" : sprite};
				sprite.x = i * cellWidth;
				sprite.y = j * cellHeight;
				sprite.currentFrame = val;
				sprite.paused = true;
				stage.addChild(sprite);
			}
		}


	};

	Map.prototype.setTile = function (x,y,val) {
        	var elem = this.tiles[x][y];
        	elem.val = val;
        	elem.sprite.currentFrame = elem.val;
	}

	Map.prototype.getWidth = function () {
		return cellWidth * this.tileCountX;
	}

	Map.prototype.getHeight = function () {
		return cellHeight * this.tileCountY;
	}

	Map.prototype.tick = function () {
        try {
        	//this.setTile(1,8,112);
            //console.log('ok');
        }
        catch (e) {
            console.log('Error', e);
        }
    };

	window.Map = Map;
} (window));





	