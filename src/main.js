/* Main */
const botFactory = require('bot.factory');
const roomController = require('room.controller');
const memoryController = require('memory.controller');

Creep.prototype.type

module.exports.loop = function () {
  memoryController.removeDeadCreeps();
  botFactory.run(); // Keeps our bot quota up
  roomController.run(); // Manages rooms and bots.

};
