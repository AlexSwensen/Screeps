const constructionController = {
  init: function(room) {
    if (!room.memory.roadsBuilt) {
      console.log('building roads');
      this.buildRoads(room);
      room.memory.roadsBuilt = true;
    }
  },

  /**
   * Builds all the roads in this room.
   * @param room {roomObject}
   */
  buildRoads: function (room) {
    var spawn = room.find(FIND_MY_SPAWNS)[0];
    var sources = room.find(FIND_SOURCES);
    console.log(sources);
    var roomController = room.controller;
    this.buildRoadTo(room, spawn.pos, roomController.pos);
    sources.forEach(source => {
      this.buildRoadTo(room, spawn.pos, source.pos);
    });
  },

  /**
   * Builds a road in this room between two points.
   * @param fromPos {pos}
   * @param toPos {pos}
   * @param room {roomObject}
   */
  buildRoadTo: function(room, fromPos, toPos) {
    var roadUnits = room.findPath(fromPos, toPos, {
      ignoreCreeps: true,
      ignoreRoads: true,
    });
    roadUnits.forEach(location => {

      const buildLocation = new RoomPosition(location.x, location.y, room.name);
      this.buildRoadUnit(room, buildLocation);
    })
  },
  buildRoadUnit: function (room, pos) {
    pos.createConstructionSite(STRUCTURE_ROAD)
  }
};

module.exports = constructionController;