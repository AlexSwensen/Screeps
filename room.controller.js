const roomController = {
  rooms: [],
  run: function () {
    rooms = [];
    for (let room in Game.rooms) {
      RoomObject.prototype.creeps = RoomObject.find(FIND_MY_CREEPS);
      rooms.push(room);
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