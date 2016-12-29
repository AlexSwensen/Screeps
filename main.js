/* Main */
const botFactory = require('bot.factory');
const roomController = require('room.controller');

module.exports.loop = function () {

  //Clear screeps that don't exist memory
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      const creepMem = Memory.creep[name];
      console.log(JSON.stringify(creepMem));
      delete Memory.creeps[name];
      console.log(`Clearing non-existing creep memory: ${name} Type: `);
    }
  }

  botFactory.run();

  roomController.run();

};
