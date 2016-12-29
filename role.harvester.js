/** role.harvester */
var roleHarvester = {

  run: creep => {
    if (creep.carry.energy < creep.carryCapacity) {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.say('harvesting');
        creep.moveTo(sources[0]);
      }
    }
    else {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION ||
            structure.structureType == STRUCTURE_SPAWN ||
            structure.structureType == STRUCTURE_TOWER) &&
            structure.energy < structure.energyCapacity;
        }
      });
      if (targets.length > 0) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.say('transferring');
          creep.moveTo(targets[0]);
        }
      }
      if(targets.length == 0 && creep.carry.energy == creep.carryCapacity) {
        creep.moveTo(23, 23);
        creep.say('ladeda');
      }
    }
  }
};

module.exports = roleHarvester;
