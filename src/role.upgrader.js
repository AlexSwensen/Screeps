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
      if (source.structureType) {
        this.harvestEnergyStorage(creep, source);
      } else {
        this.harvestEnergySource(creep, source)
      }
    }
  },
  findEnergySource: function (creep) {
    const source = creep.pos.findClosestByRange(FIND_SOURCES);
    const container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: function (structure) {
        return (structure.structureType == STRUCTURE_CONTAINER && _(structure.store).sum() > 0);
      }
    });

    return container || source;
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
