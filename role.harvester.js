/** role.harvester */
var roleHarvester = {
  run: creep => {
    this.checkEnergy(creep); // check our energy

    if (creep.memory.harvesting) {
      this.harvest(creep);
    }
    else {
      this.storeEnergy(creep);
    }
  },
  checkEnergy: creep => {
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      creep.say('storing');
    }
    else if (!creep.memory.harvesting && creep.carry.energy == 0) {
      creep.memory.harvesting = true;
      creep.say('harvesting');
    }
  },
  harvest: creep => {
    creep.memory.energySource = creep.pos.findClosestByRange(FIND_SOURCES);
    if (creep.harvest(creep.memory.energySource) == ERR_NOT_IN_RANGE) {
      creep.moveTo(creep.memory.energySource);
    }
  },
  storeEnergy: creep => {
    creep.memory.storageTargets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION ||
          structure.structureType == STRUCTURE_SPAWN ||
          structure.structureType == STRUCTURE_TOWER ||
          structure.structureType == STRUCTURE_CONTAINER) &&
          structure.energy < structure.energyCapacity;
      }
    });
    if (creep.memory.storageTargets.length > 0) {
      if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0]);
      }
    }
    if (creep.memory.storageTargets.length == 0 && creep.carry.energy == creep.carryCapacity) {
      creep.moveTo(23, 23);
      creep.say('ladeda');
    }
  }
};

module.exports = roleHarvester;
