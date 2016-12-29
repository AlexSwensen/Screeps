const settings = require('settings');
module.exports = {
  spawns: Game.spawns,
  creeps: [],
  run: function () {
    this.spawns = Game.spawns;
    this.creeps = {
      harvesters: _(Game.creeps).filter({memory: {role: 'harveste'}}),
      builders: _(Game.creeps).filter({memory: {role: 'builder'}}),
      defenders: _(Game.creeps).filter({memory: {role: 'defender'}}),
      upgraders: _(Game.creeps).filter({memory: {role: 'upgrader'}})
    };

    if (this.creeps.harvesters.size() > settings.harvesters) {
      console.log('you dont have enough!');
    }
    console.log(`you have ${this.creeps.defenders.size()} defenders`);
  }
};