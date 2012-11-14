
(function (window) {
	function Game(stage, contentManager, tileCountX, tileCountY) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.tileCountX = tileCountX;
        this.tileCountY = tileCountY;

        this.map = new Map(stage, contentManager, tileCountX, tileCountY);


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

	window.Game = Game;
} (window));





	