class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage('sprites/sling1.png')
        this.sling2=loadImage('sprites/sling2.png') 
        this.sling3=loadImage('sprites/sling3.png')
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,169,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           // strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            push();
            stroke(48,22,8);
            if(pointA.x<200){
            strokeWeight(10);
            line(pointA.x-10,pointA.y,pointB.x+40,pointB.y);
            line(pointA.x-10,pointA.y,pointB.x-5,pointB.y+20);
            image(this.sling3,pointA.x-30,pointA.y,20,20)
            }
            else{
                strokeWeight(5);
                line(pointA.x-10,pointA.y,pointB.x+40,pointB.y);
                line(pointA.x-10,pointA.y,pointB.x-5,pointB.y+20);
                image(this.sling3,pointA.x-30,pointA.y,20,20)
            }
            pop();
        } 
    }
    
}