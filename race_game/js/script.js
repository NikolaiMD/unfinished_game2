// module -> Car component
class Car {
  constructor() {
    this.left=240; //PIXELS FROM LEFT
    this.speed=2; //PIXELS PER SECONDS
  }
  render(){
    //created div and remember the reference
    this.div = document.createElement('div');
    this.div.className = 'car main';
    this.updateStyle();
    var road = document.getElementById('road');
        road.appendChild(this.div);
  }
  steerLeft(){
    if(this.left>=-170){
      this.left-=10;
      this.updateStyle();
    }
  }
  steeringRight(){
    if(this.left<=400){
      this.left+=10;
      this.updateStyle();
    }
  }
  acceleration(){
    this.new_speed=this.speed+1;
  }
  breaking(){
    if(this.new_speed>1){
      this.new_speed=this.speed;
    }
  }
  decreasingSpeed(){
      this.new_speed=this.speed;
  }

  //UPDATES DIV STYLES
  updateStyle(){
    this.div.style.left=`${this.left}px`;
  }
}
/***************************************************************************/
class Trees{
  constructor(){
    this.position=0;
  }
  trees_render(){
    this.left_tree_div = document.createElement('div');
    this.left_tree_div.setAttribute("id","trees_left");
    var leftSideGrass=document.getElementById('left');
        leftSideGrass.appendChild(this.left_tree_div);
    this.right_tree_div = document.createElement('div');
    this.right_tree_div.setAttribute("id","trees_right");
    var rightSideGrass=document.getElementById('right');
        rightSideGrass.appendChild(this.right_tree_div);

  }
  // trees_interval(){
  //   this.div = document.getElementById('left');
  //   this.html = document.getElementByClassName('trees_left');
  //   div.innerHTML=html+html;
  // }
}
