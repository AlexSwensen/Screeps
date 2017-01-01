var roleBuilder = {
  /** @param {Creep} creep **/
  run: creep => {

    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      creep.say('harvesting');
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      creep.say('building');
    }

    if (creep.memory.building) {
      creep.memory.targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (creep.memory.targets.length) {
        // build at the next one in the list
        if (creep.build(creep.memory.targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.memory.targets[0]);
        }
      }
      else {
        creep.moveTo(25, 25);
      }
    }
    else {
      creep.memory.energySource = creep.pos.findClosestByPath(FIND_SOURCES);
      if (creep.harvest(creep.memory.energySource) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.memory.energySource);
      }
    }
  }
};
module.exports = roleBuilder;
