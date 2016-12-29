module.exports = {
  spawns: [],
  updateSpawns: () => {
    this.spawns = Game.find(FIND_MY_STRUCTURES, {
      filter: structure => {
        return structure.structureType == STRUCTURE_SPAWN;
      }
    });
  }
};