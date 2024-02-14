class Rover {
   constructor(position, mode, generatorWatts) {
      this.postion = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      this.message = Message;
   }
}

module.exports = Rover;