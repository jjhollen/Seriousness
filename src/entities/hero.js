Hero = BaseEntity.extend({
	defaults: {
	    'speed' : 5,
	},
	initialize: function(){
		var model = this;
		var entity = Crafty.e("2D, " + gameContainer.conf.get('renderType') + ", Twoway, Keyboard, hero, SpriteAnimation, Mouse, Collision, MouseHover, Gravity, Box2D");
 
		entity
			.attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300})
			.animate("walking", 0, 0, 2)
            .twoway(model.get('speed'))
			.gravity("TiledLevel")
			.gravityConst(.5)
			.bind('EnterFrame', function(e){
			  this.animate("walking", 20);
			})
            .bind('Click', function(){
                
            })
			.setName('Hero');
 
			entity.origin(entity.w/2, entity.h/2);
 
		model.set({'entity' : entity });
	}
});