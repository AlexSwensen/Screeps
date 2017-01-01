/** role.upgrader */

var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function (creep) {

    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      creep.say('harvesting');
    }
    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      creep.say('upgrading');
    }

    if (creep.memory.upgrading) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    }
    else {
      var source = this.findEnergySource(creep);
      if (source && source.structureType) {
        this.harvestEnergyStorage(creep, source);
      } else if (source) {
        this.harvestEnergySource(creep, source)
      } else {
        // something wrong is going on if we get here.
        /*
        It also seems we get here if we have no open energy nodes.
        TODO: We should build a common function to manage energy harvesting, storage, and which sources should be prioritized.
         */
        creep.say('lol nope');
      }
    }
  },
  findEnergySource: function (creep) {
    const source = creep.pos.findClosestByPath(FIND_SOURCES);
    const container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
      filter: structure => {
        return (structure.structureType == STRUCTURE_CONTAINER && _(structure.store).sum() > 0) && creep.room.name == structure.room.name;
      }
    });

    if (container) {
      return container
    } else {
      return source
    }
  },
  harvestEnergySource: function (creep, source) {
    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(source);
    }
  },
  harvestEnergyStorage: function (creep, structure) {
    if (creep.withdraw(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(structure);
    }
  }
};

module.exports = roleUpgrader;
