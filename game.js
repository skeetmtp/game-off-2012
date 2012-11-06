var stage;

function init() {

	// create a new stage and point it at our canvas:
	 stage = new createjs.Stage(document.getElementById("testCanvas"));

	// Define a spritesheet. Note that this data was exported by Zoë.
	var ss = new createjs.SpriteSheet({
		
		"animations":
			{ "run": [0, 9, "run", 4] },
			"images": ["img/MonsterARun.png"],
			"frames":
				{
					"height": 64,
					"width": 64,
					"regX": 32,
					"regY": 32,
				}
	
	});

	var grant = new createjs.BitmapAnimation(ss);
	grant.x = 350;
	grant.y = 100;

	grant.gotoAndPlay("run");

	// Add Grant to the stage, and add it as a listener to Ticker to get updates each frame.
	stage.addChild(grant);
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addListener(stage);

	createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true;
}

function reset() {
	stage.removeAllChildren();
	createjs.Ticker.removeAllListeners();
	stage.update();
}

 function tick() {
 	//stage.update();

 	var curFPS = createjs.Ticker.getMeasuredFPS();
 	document.getElementById("fps").innerHTML ="fps = " + curFPS.toFixed(2); 
 }