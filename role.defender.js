module.exports = {
  run: creep => {
    creep.memory.target = creep.room.find(FIND_HOSTILE_CREEPS);
    if (creep.memory.target[0]) {
      creep.say('attacking!');
      creep.moveTo(creep.memory.target[0]);
      creep.attack();
    } else {
      creep.moveTo(creep.room.find(STRUCTURE_SPAWN));
    }

  }
};