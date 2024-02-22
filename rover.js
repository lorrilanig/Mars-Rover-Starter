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
      //response returns the message.name
      let results = [];
      message = new Message(message);
      //response returned includes two results if two commands are sent
      
      results = message.commands; 
      
      //responds correctly to status check command
      if (this.mode === 'STATUS_CHECK') {
         let roverStatus = new Rover(this.mode, this.generatorWatts, this.position);
         results.push(roverStatus);

      }
      //responds correctly to mode change command
      if (this.mode  === 'MODE_CHANGE') {
         let completed = true; 
         this.mode = Command.value; 
         results.push(completed);
      }
      //responds with a false completed value when attempting to move in low power
      if (this.mode === 'LOW_POWER') {
         let completed = false;
         results.push(completed);
      }
      if (this.mode === 'MOVE') {
         Rover.position = this.position;
      };
      
      return {message: this.message, results: this.results}
      
   }
}
let rover = new Rover(100);
let message = new Message('TA power');
console.log(rover.receiveMessage(message))

module.exports = Rover;
// let rover = new Rover(100);
// let commands = [
//    new Command('MOVE', 4321),
//    new Command('STATUS_CHECK'),
//    new Command('MODE_CHANGE', 'LOW_POWER'),
//    new Command('MOVE', 3579),
//    new Command('STATUS_CHECK')
// ];
// let message = new Message('TA power', commands);
// let response = rover.receiveMessage(message);
//console.log(JSON.stringify(response,null, 2));