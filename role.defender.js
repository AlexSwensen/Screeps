module.exports = {
  run: creep => {
    var target = creep.room.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
};