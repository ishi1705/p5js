class walker {
  //an idea of a dot that can move UP, DOWN, 
  constructor (x=200, y=200, step=10, c="red"){
    console.log("Hello, the idea was created");
    this.x = 200;
    this.y = 200;
     this.step = step;
    this.coloring = c;
  }
  
  showUp(){  
    stroke(this.coloring);
    strokeWeight(10);
    
    point(this.x, this.y) 
   
  }
  doOneStep(){
    //change direcctionX
    let doIwantToGoX = random([-1, 1]);
    //change directionY
    let doIwantToGoY = random([-1, 1]);
    
    //change position
    this.x += this.step * doIwantToGoX;
    //if X reaches the end of horizontal maximum 
    //or X reaches zero
    //if(this.x >= windowWidth | | this.x <= 0){
    //  doIwantToGoX = -doIwantToGoX;
      //this.x += this.step * doIwantToGoX;
     // console.log(this.coloring + "reversed horizontal step")
    //}
    //reverse the step
    this.y += this.step * doIwantToGoY;
    //draw dot again 
    this.showUp();
  }
  
}