/*jshint esversion: 6 */
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let miriam = new Person('miriam', 0, 5);
let pau = new Person('pau', 2, 9);
let miguel = new Person('miguel', 10, 1);
let jesus = new Person('jesus', 3, 5);

elevator.call(miriam);
elevator.call(pau);
elevator.start(miriam);
elevator.start(pau);
// elevator.stop();
