/* Main */
const botFactory = require('bot.factory');
const roomController = require('room.controller');

module.exports.loop = function () {
  for (let name in Game.rooms) {
    console.log(`Room ${name} has ${Game.rooms[name].energyAvailable} energy`);
  }

  botFactory.run();

  //Clear screeps that don't exist memory
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }

  roomController.run();

};
