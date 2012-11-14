
(function (window) {
var stage;

});

function init() {

	// create a new stage and point it at our canvas:
	var stage = new createjs.Stage(document.getElementById("testCanvas"));
	window.stage = stage;

	stage.enableMouseOver();

	//stage.snapToPixelsEnabled = true;
	
	createjs.Ticker.setFPS(30);
    createjs.Ticker.useRAF = true;

	//createjs.Ticker.addListener(stage);
	createjs.Ticker.addListener(window);

	var game = new Game(window.stage, null, mapTileCountX, mapTileCountY);
	var itemUI = new ItemUI(window.stage, null, game); 

	stage.update();
}

function reset() {
	window.stage.removeAllChildren();
	createjs.Ticker.removeAllListeners();
	window.stage.update();
}

 function tick() {
	window.stage.update();
 	
 	var curFPS = createjs.Ticker.getMeasuredFPS();
 	document.getElementById("fps").innerHTML ="fps = " + curFPS.toFixed(2); 
 }

