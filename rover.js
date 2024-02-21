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
      let response = [];
      let results = [];
      message = new Message(message, results);
      //response returned includes two results if two commands are sent
      results = message.commands; 
      //responds correctly to status check command
      if (results.commands = 'STATUS_CHECK') {
         let roverStatus = new Rover(this.mode, this.generatorWatts, this.position);
         results.push(roverStatus);

      }
      //responds correctly to mode change command
      if (Command = 'MODE_CHANGE') {
         let completed = true; 
         this.mode = Command.value; 
         results.push(completed);
      }
      //responds with a false completed value when attempting to move in low power
      if (Command = 'LOW_POWER') {
         let completed = false;
         results.push(completed);
      }
      if (Command = 'MOVE') {
         roverStatus = this.position;
      };
      //responds with the position for the move command
      response = [message,results]
      return response
   }
}

module.exports = Rover;

//console.log(JSON.stringify(response,null, 2));