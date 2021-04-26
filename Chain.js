class Chain{
    constructor(bodyA, bodyB){
      var options ={ 
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness: 0.5,

        }
      
      this.chain =  Constraint.create(options);
      World.add(World,this.body);
      
    
     
     
    }
    show()

    {
        var postion1=this.chain.bodyA.position
        var position2=this.chain.bodyB.position
        stroke(0)
        strokeWeight(5)
        line(position1.x,position1.y,position2.x,position2.y)
    }
  
  
  }
  