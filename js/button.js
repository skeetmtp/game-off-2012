
(function (window) {

	Button.prototype = new createjs.Container();
	Button.prototype.constructor = Button;

	function Button() {
		this.iconOffsetX = 4;
		this.iconOffsetY = 4;
  	  	this.initialize();
    	this.mouseEventsEnabled = true;

		this.states = {up:null, over:null, down:null };
		this.lastState = 'up';
		this.buttonMode = true;

		var spriteSheet = new createjs.SpriteSheet({
			//"images": ["img/lofi_environment.png"],
			"images": ["img/lofi_char.png"],
			"frames":
				{
					"height": cellWidth,
					"width": cellHeight,
					"regX": 0,
					"regY": 0,
				}
	
		});

		this.up( new createjs.Bitmap( 'img/button_bg.png') );
		this.over( new createjs.Bitmap( 'img/button_bg.png') );
		this.down( new createjs.Bitmap( 'img/button_bg.png') );

		this.sprite = new createjs.BitmapAnimation(spriteSheet);
		this.sprite.currentFrame = 0;
		this.sprite.paused = true;
		this.sprite.x = this.iconOffsetX;
		this.sprite.y = this.iconOffsetY;
		this.addChild(this.sprite);

		this.press;
		this.rollOver;
		this.rollOut;
		this.release;
		
		this.states;
		this.lastState;

	};

	Button.prototype.setIcon = function (index) {
		this.sprite.currentFrame = index;
	}
	
	Button.prototype.getWidth = function () {
		return cellWidth + this.iconOffsetX * 2;
	}
	
	Button.prototype.getHeight  = function () {
		return cellHeight + this.iconOffsetY * 2;
	}
	

	Button.prototype.up = function (displayObject) {
		this.states.up = displayObject;
		displayObject.mouseEventsEnabled = false;
		this.addChild( displayObject );
	}
	
	Button.prototype.over = function (displayObject) {
		this.states.over = displayObject;
		displayObject.mouseEventsEnabled = false;
		displayObject.visible = false;
		this.addChild( displayObject );
	}
	
	Button.prototype.down = function (displayObject) {
		this.states.down = displayObject;
		displayObject.mouseEventsEnabled = false;
		displayObject.visible = false;
		this.addChild( displayObject );
	}


	//////////////////
	Button.prototype.onMouseOver = function (event) {
		this.swapStates( this.lastState, 'over' );		
		this.showHandCursor( true );			
	}
	
	Button.prototype.onPress = function (event) {
		if( !createjs.Touch.isSupported() )
		{
			if( this.states['down'] )
				this.swapStates( this.lastState, 'down' );
			else
			if( this.states['over'] )
				this.swapStates( this.lastState, 'over' );
			
			this.showHandCursor( true );  
		}
				
		if( this.press )
			this.press( event );
	}
	
	Button.prototype.onClick = function (event) {
		this.swapStates( this.lastState, 'up' );		
		this.showHandCursor( true );
		
		if( this.release )
			this.release( event );
	}
	
	Button.prototype.onMouseOut = function (event) {
		if( !createjs.Touch.isSupported() )
		{
			this.swapStates( this.lastState, 'up' );
			this.showHandCursor( false );
		}		
		
		if( this.rollOut )
			this.rollOut( event );
	}
	
	
	Button.prototype.swapStates = function (last, current) {
		if( (last!=current) && this.states[last] && this.states[current] )
		{
			if(current=='over')
			{
				this.scaleX = 1.1;
				this.scaleY = 1.1;
			}
			else
			{
				this.scaleX = 1;
				this.scaleY = 1;
			}
			this.states[current].visible = true;
			this.states[last].visible = false;
			
			this.lastState = current;
			
			return true;
		}
		
		return false;
	}
	
	Button.prototype.showHandCursor = function (show) {
		if( this.buttonMode )
		{
					
			if( show )
			{
				jQuery('body').css( 'cursor', 'pointer' );
			}
			else
			{
				jQuery('body').css( 'cursor', 'default' );
			}
		}		
	}	
	

	window.Button = Button;
} (window));





	