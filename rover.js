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
      //response returned includes two results if two commands are sent
      //responds correctly to status check command
      //responds correctly to mode change command
      //responds with a false completed value when attempting to move in low power
      //responds with the position for the move command
      return response
   }
}


module.exports = Rover;