module.exports = {
  run: creep => {
    var target = creep.room.find(FIND_HOSTILE_CREEPS);
    if (target) {
      creep.say('attacking!');
      creep.moveTo(target);
      creep.attack();
    } else {
      say('no target');
    }

  }
};