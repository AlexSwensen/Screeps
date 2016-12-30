var memoryController = {
  /**
   * Clear screeps that don't exist from memory
   */
  removeDeadCreeps: function () {
    for (var name in Memory.creeps) {
      if (!Game.creeps[name]) {
        const creepMem = Memory.creeps[name];
        delete Memory.creeps[name];
        console.log(`Clearing non-existing creep memory: ${name}`);
        console.log(`Role: ${creepMem.role}`);
      }
    }
  }
};

module.exports = memoryController;