class ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.width(x, y,radius, options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
  }

  //show() {
    //var pos = this.body.position;
    
  }