let collectionOfColors = ["red","orange","yellow","green","blue","purple"];
let walkingTeam = [];
//for each colour of my CollectionOfColors
for(let t=0; t<collectionOfColors.length; t++){
  //populate walkingTeam with nodes of type walker
  walkingTeam.push( new walker(200,200,5,collectionOfColors[t]) );
}


function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(30)
  
}

function draw() {
  //make each team member walk
  for(let t=0; t<walkingTeam.length; t++){
    walkingTeam[t].doOneStep();
  }
}
