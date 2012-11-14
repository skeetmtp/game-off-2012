
(function (window) {
	function Game(stage, contentManager, tileCountX, tileCountY) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.tileCountX = tileCountX;
        this.tileCountY = tileCountY;

        this.map = new Map(stage, contentManager, tileCountX, tileCountY);
        this.cursor = new Cursor(stage, null, this); 

		createjs.Ticker.addListener(this);
 

	};

	Game.prototype.tick = function () {
        try {
            //console.log('ok');
        }
        catch (e) {
            console.log('Error', e);
        }
    };

    Game.prototype.onMouseMove = function (event) {
            var x = event.rawX;
            var maxX = this.map.getWidth();
            if(x>maxX)
                x=maxX;
            var y = event.rawY;
            var maxY = this.map.getHeight();
            if(y>maxY)
                y=maxY;
            this.cursor.cellX = Math.round(x / cellWidth);
            this.cursor.cellY = Math.round(y / cellHeight);
    };

    Game.prototype.onClick = function (event) {
            //console.log('ok');
            var cx = this.cursor.cellX;
            var cy = this.cursor.cellY;
            if(cx>=this.tileCountX)
                return;
            if(cy>=this.tileCountY)
                return;

            var myUnit = new Unit(window.stage, null, this); 
            myUnit.x = cx * cellWidth;
            myUnit.y = cy * cellHeight;
    };

	window.Game = Game;
} (window));





	