class Ball {
    constructor(x, y, r)  {
        var options = {
            isStatic: false,
            'friction': 2,
            'density': 1.2,
            'restitution': 0.1
        }
       // this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
    
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("pink");
        //imageMode(CENTER);
        //image(this.image,0,0, this.r, this.r);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
    }
}