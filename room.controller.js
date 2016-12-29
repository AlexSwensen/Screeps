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
      console.log(JSON.stringify({'room': room}));
      room.creeps = Game.rooms[room.name].find(FIND_MY_CREEPS);
      console.log(JSON.stringify(room.creeps));
      rooms.push(room);
      // this.runRoomCreeps(room);
    }
  },
  runRoomCreeps: function (room) {
    for (let name in room.creeps) {
      console.log(name);
      let creep = room.creeps[name];
      console.log(JSON.stringify(creep));
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