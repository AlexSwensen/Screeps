/** role.harvester */
var roleHarvester = {

  run: function (creep) {
    this.checkEnergy(creep); // check our energy

    if (creep.memory.harvesting) {
      this.harvest(creep);
    }
    else {
      this.storeEnergy(creep);
    }
  },
  checkEnergy: function (creep) {
    if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
      creep.memory.harvesting = false;
      creep.say('storing');
    }
    else if (!creep.memory.harvesting && creep.carry.energy == 0) {
      creep.memory.harvesting = true;
      creep.say('harvesting');
    }
  },
  harvest: function (creep) {
    creep.memory.energySource = creep.pos.findClosestByRange(FIND_SOURCES);
    if (creep.harvest(creep.memory.energySource) == ERR_NOT_IN_RANGE) {
      creep.moveTo(creep.memory.energySource);
    }
  },
  storeEnergy: function (creep) {
    creep.memory.storageTarget = this.findStorageTargets(creep);
    if (creep.memory.storageTarget.length > 0) {
      if (creep.transfer(creep.memory.storageTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.memory.storageTarget);
      }
    }
    if (creep.memory.storageTarget.length == 0 && creep.carry.energy == creep.carryCapacity) {
      creep.moveTo(23, 23);
      creep.say('fa-la-la');
    }
  },
  findStorageTargets: function (creep) {
    return creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION ||
          structure.structureType == STRUCTURE_SPAWN ||
          structure.structureType == STRUCTURE_TOWER ||
          structure.structureType == STRUCTURE_CONTAINER) &&
          structure.energy < structure.energyCapacity;
      }
    });
  }
};

module.exports = roleHarvester;