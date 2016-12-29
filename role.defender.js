module.exports = {
  run: creep => {
    creep.memory.target = creep.room.find(FIND_HOSTILE_CREEPS);
    if (creep.memory.target[0]) {
      creep.say('attacking!');
      creep.moveTo(creep.memory.target[0]);
      creep.attack();
    } else {
      creep.memory.destination = creep.room.find(STRUCTURE_CONTROLLER);
      creep.moveTo(creep.memory.destination);
    }

  }
};