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
      if (!Game.spawns[this.spawns[0]].spawning) {

        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.harvester.body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.harvester.body,
            botDefinitions.basic.harvester.name,
            botDefinitions.basic.harvester.memory);
        }
      }
    } else if (this.creeps.upgraders.size() < settings.upgraders) {
      if (!Game.spawns[this.spawns[0]].spawning) {
        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.upgrader.body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.upgrader.body,
            botDefinitions.basic.upgrader.name,
            botDefinitions.basic.upgrader.memory);
        }
      }
    } else if (this.creeps.builders.size() < settings.builders) {
      if (!Game.spawns[this.spawns[0]].spawning) {
        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.builder.body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.builder.body,
            botDefinitions.basic.builder.name,
            botDefinitions.basic.builder.memory);
        }
      }
    } else if (this.creeps.defenders.size() < settings.defenders) {
      if (!Game.spawns[this.spawns[0]].spawning) {
        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.defender.body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.defender.body,
            botDefinitions.basic.defender.name,
            botDefinitions.basic.defender.memory);
        }
      }
    }
  }
};