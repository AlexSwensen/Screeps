const settings = require('settings');
const botDefinitions = require('bot.definitions');
module.exports = {
  spawns: Game.spawns,
  creeps: [],
  run: function () {

    this.spawns = [];
    for (var spawn in Game.spawns) {
      this.spawns.push(spawn);
    }
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
      if (!Game.spawns[this.spawns[0]].spawning) {

        console.log(Game.spawns[this.spawns[0]]);
        console.log('building harvester');
        Game.spawns['Spawn1'].createCreep(botDefinitions.basic.harvester.body,
          botDefinitions.basic.harvester.name,
          botDefinitions.basic.harvester.memory);
      }
    }
  }
};