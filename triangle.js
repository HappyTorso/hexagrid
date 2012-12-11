function Triangle(x,y,radius,vertex,pointy,angle) {
	createjs.Graphics.call(this);

	this.prototype = new Graphics();
	this.prototype.constructor = this;

	 var graphics = new createjs.Graphics();
        graphics.setStrokeStyle(3);
        graphics.beginStroke(createjs.Graphics.getRGB(255,255,255,0.8));
        graphics.beginFill(createjs.Graphics.getRGB(0,0,0,0.8));
        graphics.drawPolyStar ( x,y,radius,vertex,pointy,angle );
        graphics.closePath();
}