var player_car=new Car();
player_car.render();
var leftTrees = new Trees();
leftTrees.trees_render();
var road = document.getElementById('road');
var trees_left = document.getElementById('trees_left');
var trees_right = document.getElementById('trees_right');
function action() {
  if(event.code=="ArrowLeft"){
    player_car.steerLeft();
  }
  if(event.code=="ArrowRight"){
    player_car.steeringRight();
  }
  // if(event.code=="")
  if(event.code=="ArrowUp"){
    player_car.acceleration();
  }
  if(event.code=="ArrowDown"){
    player_car.breaking();
  }
}
function animate() {
  //extracting a number
  var y = parseInt(road.style.backgroundPositionY);
  y+=player_car.new_speed;
  road.style.backgroundPositionY=`${y}px`;

  var grassLeft = parseInt(left.style.backgroundPositionY);
  // leftTrees.position=grassLeft;
  // if(grassLeft%200==1){
    var tree_position = parseInt(trees_left.style.backgroundPositionY);
    trees_left.style.backgroundPositionY=`${y}px`;
    trees_right.style.backgroundPositionY=`${y}px`;
    // confirm("TREE RENDER");
  // }
  grassLeft+=player_car.new_speed;
  left.style.backgroundPositionY=`${y}px`;
  var grassRight = parseInt(right.style.backgroundPositionY);
  grassRight+=player_car.new_speed;
  right.style.backgroundPositionY=`${y}px`;
  // console.log(road.style.backgroundPositionY);
  // console.log(player_car.new_speed);
  console.log(leftTrees.position);
  // console.log(player_car.left);
  if(player_car.left>240||player_car.left<-10){
    player_car.decreasingSpeed();
  }
}
setInterval(animate,player_car.speed);
/***************************************************************************/


// leftTrees.trees_interval();
