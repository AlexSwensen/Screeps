module.exports = {
  run: creep => {
    creep.memory.target = creep.room.find(FIND_HOSTILE_CREEPS);
    if (creep.memory.target[0]) {
      if (_.some(creep.memory.target[0].body, {type: RANGED_ATTACK})) {
        creep.say('hope he doesnt come this way.');
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