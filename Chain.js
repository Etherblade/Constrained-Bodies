class Chain {
    constructor(A,B) {
      var options = {
          bodyA: A,
          bodyB: B,
          stiffness: 0.1,
          length: 9,
      }
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
    }
    display(){
      var posA =this.chain.bodyA.position;
      var posB =this.chain.bodyB.position;
      strokeWeight(5);
      line(posA.x, posA.y, posB.x, posB.y);
    }
  };