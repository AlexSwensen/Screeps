/* Main */
const roleHarvester = require('roles/harvester');
const roleUpgrader = require('roles/upgrader');
const roleBuilder = require('roles/builder');
const roleDefender = require('roles/defender');
const botFactory = require('roles/factory');


module.exports.loop = function () {
  for (let name in Game.rooms) {
    console.log(`Room ${name} has ${Game.rooms[name].energyAvailable} energy`);
  }

  botFactory.run();

  //Clear screeps that don't exist memory
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
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
    if (creep.memory.role == 'defender') {
      roleDefender.run(creep);
    }
  }
};
