class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length :90
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add (world,this.launcher);
    }
    
    attach(body){
        this.launcher.bodyA = body;
    }
   
    fly(){
        this.launcher.bodyA = null;
    }
    
    display(){
        if(this.launcher.bodyA){
    
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        push ();
        strokeWeight (3);
        line ( pointA.x, pointA.y,pointB.x,pointB.y);
        pop ();
        }
    }
    }