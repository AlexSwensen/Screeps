/* Main */
const botFactory = require('bot.factory');
const roomController = require('room.controller');
const memoryController = require('memory.controller');

module.exports.loop = function () {

  memoryController.removeDeadCreeps();

  botFactory.run(); // Keeps our but quota up

  roomController.run(); // Manages rooms and bots.

};
