// Rover Object Goes Here
class Rover {
  constructor(startDirection, startPosition) {
  this.direction = startDirection;
  this.position = startPosition;
  this.travelLog = [];
}

  turnLeft() {
    switch(this.direction) {
      case "N":
        console.log("Turning West");
        return this.direction = "w";
      break;

      case "S":
        console.log("Turning East");
        return this.direction = "E";
      break;

      case "E":
        console.log("Turning North");
        return this.direction = "N";
      break;

      case "W":
        console.log("Turning South");
        return this.direction = "S";
      break;

      default:
        console.log("Error in turnLeft")
      }
  }

  turnRight() {
    console.log("turnRight was called!");
    switch(this.direction) {
      case "S":
        console.log("Turning West");
        return this.direction = "w";
      break;

      case "N":
        console.log("Turning East");
        return this.direction = "E";
      break;

      case "W":
        console.log("Turning North");
        return this.direction = "N";
      break;

      case "E":
        console.log("Turning South");
        return this.direction = "S";
      break;

      default:
      console.log("Error in turnRight")
    }
  }

  moveForward() {
    console.log("moveForward was called");
    switch(this.direction) {
      case "S":
        if(this.position.y >= 10){
          console.log("this reached limit grid");
        }else{
          console.log("Moving South to position " + this.position.x + ", " + (this.position.y +1));
          return this.position.y += 1;
        }
      break;

      case "N":
        if(this.position.y <= 0){
          console.log("this reached limit grid");
        }else {
          console.log("Moving North to position " + this.position.x + ", " + (this.position.y -1));
          return this.position.y -= 1;
        }
      break;

      case "W":
        if(this.position.x <= 0){
          console.log("this reached limit grid");
        }else{
          console.log("Moving West to position " + (this.position.x -1) + ", " + this.position.y);
          return this.position.x -= 1;
        }
      break;

      case "E":
      if(this.position.x >= 10){
        console.log("this reached limit grid");
      }else{
        console.log("Moving West to position " + (this.position.x +1) + ", " + this.position.y);
        return this.position.x += 1;
      }
      break;
    }
  }

  moveBackward() {
    console.log("moveBackward was called");
    switch(this.direction) {
      case "S":
        if(this.position.y <= 0){
          console.log("this reached limit grid");
        }else{
          console.log("Moving North to position " + this.position.x + ", " + (this.position.y -1));
          return this.position.y -= 1;
        }
      break;

      case "N":
        if(this.position.y >= 10){
          console.log("this reached limit grid");
        }else {
          console.log("Moving Soth to position " + this.position.x + ", " + (this.position.y +1));
          return this.position.y += 1;
        }
      break;

      case "W":
        if(this.position.x >= 10){
          console.log("this reached limit grid");
        }else{
          console.log("Moving East to position " + (this.position.x +1) + ", " + this.position.y);
          return this.position.x += 1;
        }
      break;

      case "E":
      if(this.position.x <= 0){
        console.log("this reached limit grid");
      }else{
        console.log("Moving West to position " + (this.position.x -1) + ", " + this.position.y);
        return this.position.x -= 1;
      }
      break;
    }
  }

  registerLog() {
    this.travelLog.push(this.position);
  }
}

let rover1 = new Rover ("N", {x: 5, y:5});



function commands(orders, rover){
  for(let i = 0; i < orders.length; i++){
    switch(orders[i]){
      case 'f':
        rover.moveForward();
        rover.registerLog()
      break;
      case 'b':
        rover.moveBackward();
        rover.registerLog()
      break;
      case 'r':
        rover.turnRight();
        rover.registerLog()
      break;
      case 'l':
         rover.turnLeft();
         rover.registerLog()
      break;
      default:
        console.log('There is an error in the command');
      break;
    }
  }
}

function readTravelLog(rover) {
  let string = '';
  rover.travelLog.forEach(function(position, index) {
    string += `position ${index+1} es x: ${position.x} y: ${position.y} ` 
  })
  return string
}


commands("rffrbbfflfrff", rover1);

console.log(`You've been in: ${readTravelLog(rover1)}`)






