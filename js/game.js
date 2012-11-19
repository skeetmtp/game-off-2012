
(function (window) {
	function Game(stage, contentManager, tileCountX, tileCountY) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.tileCountX = tileCountX;
        this.tileCountY = tileCountY;

        this.map = new Map(stage, contentManager, tileCountX, tileCountY);
        this.cursor = new Cursor(stage, null, this); 

		createjs.Ticker.addListener(this);

        this.heroes = [];
        this.treasures = [];
 
	};

    Game.prototype.getWidth = function () {
        return this.map.getWidth();
    }

    Game.prototype.getHeight = function () {
        return this.map.getHeight();
    }

    Game.prototype.spawnHero = function (x,y) {
        var hero = new Hero(this.stage, this.contentManager, this); 
        hero.setCellPosition(x,y);
        this.heroes.push(hero);
        return hero;
    }

    Game.prototype.findNearestHero = function (x,y) {
        for (var i = 0; i < this.heroes.length; i++) {
            return this.heroes[i];
        };
        return null;
    }

    Game.prototype.spawnTreasure = function (x,y) {
        var treasure = new Treasure(this.stage, this.contentManager, this); 
        treasure.setCellPosition(x,y);
        this.treasures.push(treasure);
        return treasure;
    }



	Game.prototype.tick = function (timeElapsed) {
        try {
            //console.log('ok');
        }
        catch (e) {
            console.log('Error', e);
        }
    };

    Game.prototype.onMouseMove = function (event) {
            var x = event.rawX;
            var y = event.rawY;
            var cx = Math.round(x / cellWidth  - 0.5);
            var cy = Math.round(y / cellHeight - 0.5);
            /*
            var visible = true;
            if(cx>=this.tileCountX)
                visible = false;
            if(cy>=this.tileCountY)
                visible = false;
            this.cursor.sprite.visible = visible;
            */
            this.cursor.cellX = cx;
            this.cursor.cellY = cy;
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





	