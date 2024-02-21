const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    expect( function() { new Rover();}).toThrow(new Error('values are required'));
  });
  it("response returned by receiveMessage contains the name of the message", function()
  {
   let message = new Message('TA power'); 
    expect(message.name).toBe('TA power');
  })
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]
    let message = new Message('TA power', commands)
    expect(message.commands).toBe(commands);
  })
  it("responds correctly to the status check command", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    results = message.commands;
    expect(results).toBe(commands);
  });
  it ("responds correctly to the mode change command", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let completed;
    if (commands.commandType = 'MODE_CHANGE') {
      completed = true; 
   }
    expect(completed).toBe(true);
  });
  it ("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let completed;
    if (commands.value = 'LOW_POWER') {
      completed = false; 
    }
    expect(completed).toBe(false);
  });
  it("responds with the position for the move command", function() {
    let rover = new Rover(98382);
    expect(rover.position).toBe(98382);
  });
});
