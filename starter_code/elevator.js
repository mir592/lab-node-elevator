/*jshint esversion: 6 */
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = []; //PETICIONES, donde se guarda cada vez que le das al boton
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
    this.time;
  }

  start() {
    this.time = setInterval(() => { this.update(); }, 1000);
  }
  stop() {
    clearInterval(this.time);
  }
  update() {
    this.log();
    if (this.requests.length == 0) {
      this.stop();
    }else if(this.requests[0] == this.floor){
        this.requests.shift();
        this._passengersLeave();
        this._passengersEnter();
      }
      else if(this.requests[0] > this.floor){
        this.floorUp();
      }else{this.floorDown();}
    }
    
  _passengersEnter() {
    if (this.waitingList.length > 0) {
      for (let i = 0; i < this.waitingList.length; i++) {
        if (this.floor === this.waitingList[i].originFloor) {
          this.passengers.push(this.waitingList[i]);
          this.requests.push(this.waitingList[i].destinationFloor);
          this.waitingList.splice(i, 1);
          console.log(`${this.passengers[i].name} has enter the elevator`);
        }
      }
    }
  }
  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.floor === this.passengers[i].destinationFloor) {
        this.passengers.splice(i, 1);
        console.log(`${this.passengers[i].name} has left the elevator`);
      }
    }
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = 'UP';
      this.floor +=1;
    } else {
      this.stop();
      return 'The elevator is in 10';
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.direction = 'DOWN';
      this.floor -=1;
    } else {
      this.stop();
      return 'The elevator is in 0';
    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
