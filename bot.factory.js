const settings = require('settings');
module.exports = {
  spawns: Game.spawns,
  creeps: [],
  run: function () {
    this.spawns = Game.spawns;
    this.creeps = {
      harvesters: _(Game.creeps).filter({memory: {role: 'harvester'}}),
      builders: _(Game.creeps).filter({memory: {role: 'builders'}}),
      defenders: _(Game.creeps).filter({memory: {role: 'defenders'}}),
      upgraders: _(Game.creeps).filter({memory: {role: 'upgraders'}})
    };
    console.log(`you have ${defenders.count()} defenders`);:
  }
};