
(function (window) {
	function HeroSimpleMove(hero) {
		this.hero = hero;
		this.speed = 100;
	};
 
	HeroSimpleMove.prototype.tick = function (timeElapsed) {
		var dt = timeElapsed / 1000;

		this.hero.x += dt * this.speed;

    };

	window.HeroSimpleMove = HeroSimpleMove;
} (window));





	