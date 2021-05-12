class Block {
    constructor(x,y,width,height){
        var options = {
           // isStatic : false
           restitution : 0.4,
           friction : 0.0
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world,this.body);
    }
       score() {
            if(this.Visibility<0 && this.Visibility >-105){
                score++;
            }

        }

    display(){

        console.log(this.body.speed);
            var pos = this.body.position;
           // var angle = this.body.angle;
           if(this.body.speed < 3){
            imageMode(CENTER);
            image(this.image, pos.x, pos.y,this.width,this.height);
           }
         else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
         }   
}