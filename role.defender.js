module.exports = {
  run: creep => {
    creep.memory.target = creep.room.find(FIND_HOSTILE_CREEPS);
    if (creep.memory.target) {
      creep.say('attacking!');
      creep.lookAt(creep.memory.target);
      creep.moveTo(creep.memory.target);
      creep.attack();
    } else {
      say('no target');
    }

  }
};