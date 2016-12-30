const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleDefender = require('role.defender');
const constructionController = require('construction.controller');

const roomController = {
  rooms: [],
  run: function () {
    this.rooms = [];
    for (let name in Game.rooms) {
      let room = Game.rooms[name];
      this.buildStructures(room);
      console.log(`Room ${room.name} has ${room.energyAvailable} energy`);
      let creeps = Game.rooms[room.name].find(FIND_MY_CREEPS);
      this.rooms.push(room);
      this.runRoomCreeps(creeps);
    }
  },
  runRoomCreeps: function (creeps) {
    creeps.forEach(creep => {
      this.assignCreep(creep);
    })
  },
  assignCreep: function (creep) {
    switch (creep.memory.role) {
      case 'harvester':
        roleHarvester.run(creep);
        break;
      case 'upgrader':
        roleUpgrader.run(creep);
        break;
      case 'builder':
        roleBuilder.run(creep);
        break;
      case 'defender':
        roleDefender.run(creep);
        break;
    }
  },
  buildStructures(room) {
    // if this room is mine, build shit.
    if (room.controller.my) {
      constructionController.init(room);
    }
  }
};

module.exports = roomController;