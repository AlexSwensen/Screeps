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
      creep.runRole();
    })
  },
  buildStructures(room) {
    // if this room is mine, build shit.
    if (room.controller.my) {
      constructionController.init(room);
    }
  }
};

module.exports = roomController;