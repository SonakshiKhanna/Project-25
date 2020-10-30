class Box {
    constructor(x, y, width, height){
      var options = {
          isStatic: true
      }
      this.image = loadImage("sprites/dustbin.png");
      this.body = Bodies.rectangle(x, y, height, width, options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x, pos.y, this.width, this.height);    
        pop();    
    }
}