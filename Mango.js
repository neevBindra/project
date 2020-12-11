class Mango{
    constructor(x,y){
    var op ={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
   

       this.body = Bodies.circle(x,y,10,op)
        this.image = loadImage("mango.png");
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
     push ();
     
        fill ("white")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,10);
        imageMode (CENTER);
        image(this.image,pos.x,pos.y,50,70);
        pop ();
    }

}