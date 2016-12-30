var roleDefender = {
  run: function (creep) {
    this.findTargets(creep);
    this.goToFlag(creep);
    this.attackTargets(creep);
    this.goToController(creep);
  },
  findTargets: function (creep) {
    creep.memory.targetCreeps = creep.room.find(FIND_HOSTILE_CREEPS);
    creep.memory.targetStructures = creep.room.find(FIND_HOSTILE_STRUCTURES);
  },
  attackTargets: function (creep) {
    if (creep.memory.targetCreeps) {
      this.attackTarget(creep, creep.memory.targetCreeps[0]);
    } else if (creep.memory.targetStructures) {
      this.attackTarget(creep, creep.memory.targetStructures[0]);
    } else {

    }
  },
  attackTarget: function (creep, target) {
    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  },
  goToController: function (creep) {
    creep.moveTo(creep.room.controller.pos);
  },
  goToFlag: function (creep) {
    creep.memory.flag = _(Game.flags).filter(flag => {
      return flag.name = 'attack';
    }).value()[0];
    if (creep.memory.flag) {
      /**
       * buggy code
       */
      console.log(JSON.stringify(creep.memory.flag));
      creep.memory.destination = new RoomPosition(creep.memory.flag.pos.x, creep.memory.flag.pos.y, creep.memory.flag.pos.roomName);
      // creep.memory.path = creep.room.findPath(creep.pos, creep.memory.flag.pos, {array: true});
      // console.log(creep.moveByPath(creep.memory.path));
      console.log(creep.moveTo(creep.memory.destination));
    }
  }
};

module.exports = roleDefender;