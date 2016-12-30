/** role.harvester */
var roleHarvester = {

  run: creep => {
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      creep.say('storing');
    }
    else if (!creep.memory.harvesting && creep.carry.energy < creep.carryCapacity) {
      creep.memory.harvesting = true;
      creep.say('harvesting');
    }

    if (creep.memory.harvesting) {
      var source = creep.pos.findClosestByRange(FIND_SOURCES);
      if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    }
    else {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION ||
            structure.structureType == STRUCTURE_SPAWN ||
            structure.structureType == STRUCTURE_TOWER ||
            structure.structureType == STRUCTURE_CONTAINER) &&
            structure.energy < structure.energyCapacity;
        }
      });
      if (targets.length > 0) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }
      if (targets.length == 0 && creep.carry.energy == creep.carryCapacity) {
        creep.moveTo(23, 23);
        creep.say('ladeda');
      }
    }
  }
};

module.exports = roleHarvester;
