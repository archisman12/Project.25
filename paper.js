class Paper{
      constructor(x,y,width,height){
         var  option={'isStatic':false,
         'restitution':0.3,
         'friction':0.5,
         'density':1.2
        }
        this.body=Bodies.rectangle(x,y,80,80,option)
         this.width=80;
         this.height=80;
    
    //    tis.radius=50;
        this.image=loadImage("paper.png")
      
      
      World.add(world,this.body)
      }
      display(){
        var angle = this.body.angle;
        push();
       translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.width,this.height);

         pop();
    
    }
}


      