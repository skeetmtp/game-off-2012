
(function (window) {
	function Game(stage, contentManager, tileCountX, tileCountY) {
        this.treasureSpawnPeriod = 100;

		this.stage = stage;
        this.contentManager = contentManager;
        this.tileCountX = tileCountX;
        this.tileCountY = tileCountY;

        this.map = new Map(stage, contentManager, tileCountX, tileCountY);
        this.cursor = new Cursor(stage, contentManager, this); 
        //this.itemUI = new ItemUI(stage, contentManager, this); 
        this.score = new ScoreUI(stage, contentManager, this); 


        this.preAllocs = [];

        this.heroes = this.preAlloc(Hero, 5);
        this.preAllocs.push(this.heroes);

        this.towers = this.preAlloc(Tower, 10);
        this.preAllocs.push(this.towers);

        this.treasures = this.preAlloc(Treasure, 10);
        this.preAllocs.push(this.treasures);

        this.bullets = this.preAlloc(Bullet, 10);
        this.preAllocs.push(this.bullets);


        this.wave = new Wave(this);

        this.reset();

 
        createjs.Ticker.addListener(this);
	};

    Game.prototype.reset = function () {
        this.goldRequiredToSpawnNextTreasure = 0;
    }

    Game.prototype.getWidth = function () {
        return this.map.getWidth();
    }

    Game.prototype.getHeight = function () {
        return this.map.getHeight();
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
                    res.setPosition(x,y);
                    return res;
                }
            };
        }
        return null;
    }

    Game.prototype.findNearest = function (Type,x,y) {
        var minDist = 100000000;
        var res = null;
        for (var j = 0; j < this.preAllocs.length; j++) {
            var elements = this.preAllocs[j];
            for (var i = 0; i < elements.length; i++) {
                var elem = elements[i]; 
                if(elem.constructor != Type)
                    break;
                if(elem.enabled)
                {
                    var dx = x - elem.x;
                    var dy = y - elem.y;
                    var dist = NormVec2D(dx,dy);
                    if(minDist>dist)
                    {
                        res = elem;
                        minDist=dist;
                    }                    
                }
            };
            if(res) return res;
        }
        return res;
    }


	Game.prototype.tick = function (timeElapsed) {
        if(this.score.gold >= this.goldRequiredToSpawnNextTreasure) {
           this.goldRequiredToSpawnNextTreasure += this.treasureSpawnPeriod;
           var treasure    = this.spawn(Treasure, this.getWidth() * MyRandom()|0,0);
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





	