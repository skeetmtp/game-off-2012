
(function (window) {
	function ShadowText(stage, Text, Font, FrontColor, BackColor) {
		this.stage = stage;
		this.x = 0;
		this.y = 0;
		this.textAlign = 0;
		this.text = Text;
		this.shadowOffset = 2;
		this.frontColor = FrontColor;
		this.backColor = BackColor;

		createjs.Ticker.addListener(this);

		this.labelBack = new createjs.Text(Text, Font, BackColor);
		this.labelBack.textAlign = "left";
		this.labelBack.x = this.x + this.shadowOffset;
		this.labelBack.y = this.y + this.shadowOffset;
		stage.addChild(this.labelBack);

		this.labelFront = new createjs.Text(Text, Font, FrontColor);
		this.labelFront.textAlign = "left";
		this.labelFront.x = this.x;
		this.labelFront.y = this.y;
		stage.addChild(this.labelFront);
	

		ShadowText.prototype.tick = function (timeElapsed) {
			this.labelFront.color = this.frontColor;
			this.labelFront.x = this.x;
			this.labelFront.y = this.y;
			this.labelFront.textAlign = this.textAlign;
			this.labelFront.text = this.text;

			this.labelBack.color = this.backColor;
			this.labelBack.x = this.x + this.shadowOffset;
			this.labelBack.y = this.y + this.shadowOffset;
			this.labelBack.textAlign = this.textAlign;
			this.labelBack.text = this.text;
			
	    };
	};


	window.ShadowText = ShadowText;
} (window));

