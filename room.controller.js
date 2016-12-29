const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleDefender = require('role.defender');

const roomController = {
  rooms: [],
  run: function () {
    rooms = [];
    for (let name in Game.rooms) {
      let room = Game.rooms[name];
      let creeps = Game.rooms[room.name].find(FIND_MY_CREEPS);
      this.rooms.push(room);
      this.runRoomCreeps(room, creeps);
    }
  },
  runRoomCreeps: function (room, creeps) {
    creeps.forEach (function(creep){
      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
      }
      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      }
      if (creep.memory.role == 'builder') {
        roleBuilder.run(creep);
      }
      if (creep.memory.role == 'defender') {
        roleDefender.run(creep);
      }
    })
  }
};

module.exports = roomController;