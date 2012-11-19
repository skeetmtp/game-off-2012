
(function (window) {
	function Game(stage, contentManager, tileCountX, tileCountY) {
		this.stage = stage;
        this.contentManager = contentManager;
        this.tileCountX = tileCountX;
        this.tileCountY = tileCountY;

        this.map = new Map(stage, contentManager, tileCountX, tileCountY);
        this.cursor = new Cursor(stage, null, this); 

		createjs.Ticker.addListener(this);

        this.preAllocs = [];

        this.heroes = this.preAlloc(Hero, 10);
        this.preAllocs.push(this.heroes);

        this.towers = this.preAlloc(Tower, 10);
        this.preAllocs.push(this.towers);

        this.treasures = this.preAlloc(Treasure, 10);
        this.preAllocs.push(this.treasures);

        this.bullets = this.preAlloc(Bullet, 10);
        this.preAllocs.push(this.bullets);



 
	};

    Game.prototype.getWidth = function () {
        return this.map.getWidth();
    }

    Game.prototype.getHeight = function () {
        return this.map.getHeight();
    }

    Game.prototype.spawnBullet = function (x,y) {
        var res = new Bullet(this.stage, this.contentManager, this); 
        res.setPosition(x,y);
        this.bullets.push(res);
        return res;
    }

    Game.prototype.spawnTower = function (x,y) {
        var res = new Tower(this.stage, this.contentManager, this); 
        res.setCellPosition(x,y);
        this.towers.push(res);
        return res;
    }

    Game.prototype.spawnTreasure = function (x,y) {
        var res = new Treasure(this.stage, this.contentManager, this); 
        res.setCellPosition(x,y);
        this.treasures.push(res);
        return res;
    }

    Game.prototype.preAlloc = function (Type, count) {
        var res = [];
        for (var i = 0; i < count; i++) {
            var element = new Type(this.stage, this.contentManager, this);
            element.disable();
            res.push(element);
        };
        return res;
    }

    Game.prototype.spawn = function (Type, x,y) {
        for (var j = 0; j < this.preAllocs.length; j++) {
            var elements = this.preAllocs[j];
            for (var i = 0; i < elements.length; i++) {
                var res = elements[i]; 
                if(res.constructor != Type)
                    break;
                if(res.enabled==false)
                {
                    res.enable();
                    res.setCellPosition(x,y);
                    return res;
                }
            };
        }
        return null;
    }

    Game.prototype.findNearestHero = function (x,y) {
        for (var i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].enabled)
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





	