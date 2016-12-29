const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleDefender = require('role.defender');

const roomController = {
  rooms: [],
  run: function () {
    rooms = [];
    for (let room in Game.rooms) {
      room.creeps = Game.rooms[room].find(FIND_MY_CREEPS);
      rooms.push(room);
      console.log(JSON.stringify(room));
      this.runRoomCreeps(room);
    }
  },
  runRoomCreeps: function (room) {
    for (let creep in room.creeps) {
      // let creep = Game.creeps[name];
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
    }
  }
};

module.exports = roomController;