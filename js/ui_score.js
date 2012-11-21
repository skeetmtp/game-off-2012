
(function (window) {
	function ScoreUI(stage, contentManager, game) {
		this.stage = stage;
        this.contentManager = contentManager;

		createjs.Ticker.addListener(this);

		this.goldText = new ShadowText(stage, "123", "bold 20px Helvetica", "#FFFFFF", "rgba(0,0,0,0.8)");
		this.gold = 0;

		ScoreUI.prototype.tick = function (timeElapsed) {
			this.goldText.text  = this.gold.toString();
		}
	};


	window.ScoreUI = ScoreUI;
} (window));





	