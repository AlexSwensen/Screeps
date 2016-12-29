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
      // console.log(JSON.stringify(room));
      let creeps = Game.rooms[room.name].find(FIND_MY_CREEPS);
      // console.log(JSON.stringify(Game.rooms[room.name].find(FIND_MY_CREEPS)[0]));
      this.rooms.push(room);
      this.runRoomCreeps(room, creeps);
    }
  },
  runRoomCreeps: function (room, creeps) {
    for (let creepObj in creeps) {
      let creep = Game.creeps[creepObj.name];
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