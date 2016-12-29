/* Main */
const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');


module.exports.loop = function () {
  for (let name in Game.rooms) {
    console.log(`Room ${name} has ${Game.rooms[name].energyAvailable} energy`);
  }

  for (let name in Game.creeps) {
    let creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == 'builder') {
      roleBuilder.run(creep);
    }
  }
};
