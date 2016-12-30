//Todo: make this not freak out in enemy rooms.

var roleDefender = {
  run: function (creep) {
    this.findTargets(creep);
    if (creep.memory.targetCreeps.length == 0 && creep.memory.targetStructures.length == 0 && creep.memory.flag) {
      this.goToFlag(creep);
    } else {
      this.goToController(creep);
      this.attackTargets(creep);
    }
  },
  findTargets: function (creep) {
    creep.memory.targetCreeps = creep.room.find(FIND_HOSTILE_CREEPS);
    creep.memory.targetStructures = creep.room.find(FIND_HOSTILE_STRUCTURES);
    creep.memory.flag = Game.flags['attack'];
  },
  attackTargets: function (creep) {
    creep.say('attacking');
    if (creep.memory.targetCreeps) {
      this.attackTarget(creep, creep.memory.targetCreeps[0]);
    } else if (creep.memory.targetStructures) {
      this.attackTarget(creep, creep.memory.targetStructures[0]);
    }
  },
  attackTarget: function (creep, target) {
    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  },
  goToController: function (creep) {
    creep.say('going home');
    creep.moveTo(creep.room.controller.pos);
  },
  goToFlag: function (creep) {
    if (creep.memory.flag) {
      creep.moveTo(creep.memory.flag);
    }
  }
};

module.exports = roleDefender;