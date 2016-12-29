module.exports = {
  spawns: [],
  updateSpawns: () => {
    this.spawns = Game.rooms[0].find(FIND_MY_STRUCTURES, {
      filter: structure => {
        return structure.structureType == STRUCTURE_SPAWN;
      }
    });
  }
};