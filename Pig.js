class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibilty = 255;
  }
  display(){
    if(this.body.speed > 3){
      World.remove(world,this.body);      
      push();
      this.visibilty = this.visibilty - 10;
      tint(255,this.visibilty);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
    else{
      super.display();
    }
    console.log(this.body.speed)
  }

};