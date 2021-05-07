class Drops {
    constructor(x, y,r) {

        var options ={
            friction:0.1
        }
        this.r=r;
      
        this.rain= Bodies.circle(x, y, this.r,options);       
      //  this.color=color("blue")
        World.add(world, this.rain);

    }
    display() {

        var pos = this.rain.position;
        var angle = this.rain.angle;

        push();
       
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }


    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
        
    }
    


};

