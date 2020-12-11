class Stone{

    constructor(x,y,width,height){
    var op = {
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:1.2
    }
        this.body = Bodies.rectangle(x,y,width,height,op)
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png");
    World.add(world,this.body);
    }

    
    
    display(){
    
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill ("white");
       rectMode(CENTER);
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
    }