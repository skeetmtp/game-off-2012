
(function (window) {
var stage;

});


function init() {

	// create a new stage and point it at our canvas:
	var canvas = document.getElementById("testCanvas");
	var stage = new createjs.Stage(canvas);
	window.stage = stage;

	stage.enableMouseOver();
	//stage.suppressCrossDomainErrors  = true;

	//stage.snapToPixelsEnabled = true;
	
	createjs.Ticker.setFPS(30);
    createjs.Ticker.useRAF = true;

	//createjs.Ticker.addListener(stage);
	createjs.Ticker.addListener(window);


	var game = new Game(window.stage, null, mapTileCountX, mapTileCountY);
	//console.log(game);
	 
	var tower 		= game.spawn(Tower,700,0);
	var tower 		= game.spawn(Tower,500,0);

	//var bullet = new Bullet(window.stage, null, game, 96); 
	//var myUnit = new Unit(window.stage, null, game, "img/lofi_char.png", 1); 

	
	canvas.addEventListener("click", function (event) { game.onClick(event); }, false); //stage.onClick broke my button event !! :(
	stage.onMouseMove = function (event) { game.onMouseMove(event); }


	stage.update();
}

function reset() {
	window.stage.removeAllChildren();
	createjs.Ticker.removeAllListeners();
	window.stage.update();
}

 function tick(timeElapsed) {
	window.stage.update();
 	
 	var curFPS = createjs.Ticker.getMeasuredFPS();
 	document.getElementById("fps").innerHTML ="fps = " + curFPS.toFixed(2); 
 }

