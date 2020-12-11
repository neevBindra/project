class Boy{

    constructor(x,y,width,height){
    var op = {
        isStatic:true
    }
        this.body = Bodies.rectangle(x,y,width,height,op)
    this.width = width;
    this.height = height;
    this.image = loadImage("boy.png");
    World.add(world,this.body);
    }
    
    display(){
    
        var pos = this.body.position;
        rectMode(CENTER);
        fill ("white");
        rect(pos.x, pos.y, this.width, this.height);
        imageMode (CENTER);
        image(this.image,170,600,150,270);
        
    }
    }
