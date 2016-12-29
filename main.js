/* Main */
const botFactory = require('bot.factory');
const roomController = require('room.controller');

module.exports.loop = function () {

  //Clear screeps that don't exist memory
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }

  botFactory.run();

  roomController.run();

};
