const settings = require('settings');
const botDefinitions = require('bot.definitions');
module.exports = {
  spawns: Game.spawns,
  creeps: [],
  run: function () {
    this.spawns = Game.spawns;
    this.creeps = {
      harvesters: _(Game.creeps).filter({memory: {role: 'harvester'}}),
      builders: _(Game.creeps).filter({memory: {role: 'builder'}}),
      defenders: _(Game.creeps).filter({memory: {role: 'defender'}}),
      upgraders: _(Game.creeps).filter({memory: {role: 'upgrader'}})
    };
    this.checkBots();
  },
  checkBots: function () {
    if (this.creeps.harvesters.size() < settings.harvesters) {
      console.log('we need more harvesters');
      if (!this.spawns['Spawn1'].spawning) {

        console.log(this.spawns['Spawn1'].spawning);
        console.log('building harvester');
        this.spawns['Spawn1'].createCreep(botDefinitions.harvester);
      }
    }
  }
};