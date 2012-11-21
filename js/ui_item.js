
(function (window) {
	function ItemUI(stage, contentManager, game) {
		this.stage = stage;
        this.contentManager = contentManager;

		createjs.Ticker.addListener(this);

		var posX = game.map.getWidth();
		var posY = 0;

		for (var i = 0; i < 10; i++) {
			var btn = new Button();
			btn.x = posX;
			btn.y = posY;

			btn.release = function(event){ 
				//console.log( 'smarty release'  ); 
			};

			stage.addChild( btn );
			posY += btn.getHeight();
		};

	


	};


	window.ItemUI = ItemUI;
} (window));





	