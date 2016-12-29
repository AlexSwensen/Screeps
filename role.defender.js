module.exports = {
  run: creep => {
    creep.memory.target = creep.room.find(FIND_HOSTILE_CREEPS);
    if (creep.memory.target[0]) {
      if (_.some(creep.memory.target[0].body, {type: RANGED_ATTACK})) {
        // We need numbers to attack ranged. for now we will just move them out of the way
        creep.memory.destination = creep.room.find(FIND_MY_STRUCTURES, {
        filter: (structure) => {
          return structure.structureType == STRUCTURE_CONTROLLER;
        }
      });

      creep.moveTo(creep.memory.destination[0]);
      } else {
        creep.say('attacking!');
        creep.moveTo(creep.memory.target[0]);
        creep.attack();
      }
    } else {
      creep.memory.destination = creep.room.find(FIND_MY_STRUCTURES, {
        filter: (structure) => {
          return structure.structureType == STRUCTURE_CONTROLLER;
        }
      });

      creep.moveTo(creep.memory.destination[0]);
    }

  }
};