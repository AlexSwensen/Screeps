module.exports = {
  run: creep => {
    var target = creep.room.find(FIND_HOSTILE_CREEPS);
      creep.moveTo(target);
      creep.attack();

  }
};