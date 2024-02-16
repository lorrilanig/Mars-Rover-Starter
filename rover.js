const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
      if (!position || !mode || !generatorWatts){
         throw Error('values are required');
      }
   }
   receiveMessage(message) {
      message = new Message
      
   }
}
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);


module.exports = Rover;