// movingRect = ob1  fixedRect - ob2
function isTouching(ob1, ob2){

    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
      && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
    
        return true;
  }
  else {
    
    return false;
  }
  }
  
  function BounceOff(ob1, ob2){
  
    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
    
        //(-1)*4 = -4
        ob1.velocityX = (-1)*ob1.velocityX;
  
      }
  
  
      else if(ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  
        ob1.velocityY = (-1)*ob1.velocityY;
  }
  }