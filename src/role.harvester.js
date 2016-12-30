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
    creep.memory.energySource = creep.pos.findClosestByPath(FIND_SOURCES);
    if (creep.harvest(creep.memory.energySource) == ERR_NOT_IN_RANGE) {
      creep.moveTo(creep.memory.energySource);
    }
  },
  storeEnergy: function (creep) {
    creep.memory.storageTargets = this.findStorageTargets(creep);
    if (creep.memory.storageTargets.length > 0) {
      if (creep.transfer(creep.memory.storageTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.memory.storageTargets[0]);
      }
      else if (creep.transfer(creep.memory.storageTargets[0], RESOURCE_ENERGY) == ERR_FULL) {
        creep.memory.storageTargets = this.findStorageTargets(creep);
      }
    }
    if (creep.memory.storageTargets.length == 0 && creep.carry.energy == creep.carryCapacity) {
      this.standby(creep);
    }
  },
  findStorageTargets: function (creep) {
    return creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return ((structure.structureType == STRUCTURE_EXTENSION ||
        structure.structureType == STRUCTURE_SPAWN ||
        structure.structureType == STRUCTURE_TOWER));
        //&&
        // structure.energy < structure.energyCapacity) ||
        // (structure.structureType == STRUCTURE_CONTAINER &&
        // _(structure.store).sum() < structure.storeCapacity)
      }
    });
  },
  standby: function (creep) {
    creep.moveTo(creep.room.find(FIND_MY_SPAWNS)[0]);
    creep.say('la-de-da');
  }
};

module.exports = roleHarvester;