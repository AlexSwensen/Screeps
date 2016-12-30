/* Main */
const botFactory = require('bot.factory');
const roomController = require('room.controller');

module.exports.loop = function () {


  console.log('hello!');
  //Clear screeps that don't exist memory
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      const creepMem = Memory.creeps[name];
      delete Memory.creeps[name];
      console.log(`Clearing non-existing creep memory: ${name}`);
      console.log(`Role: ${creepMem.role}`);
    }
  }

  botFactory.run();

  roomController.run();

};
