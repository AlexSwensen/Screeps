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

        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.harvester[0].body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.harvester[0].body,
            botDefinitions.basic.harvester[0].name,
            botDefinitions.basic.harvester[0].memory);
        }
      }
    } else if (this.creeps.upgraders.size() < settings.upgraders) {
      if (!Game.spawns[this.spawns[0]].spawning) {
        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.upgrader[0].body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.upgrader[0].body,
            botDefinitions.basic.upgrader[0].name,
            botDefinitions.basic.upgrader[0].memory);
        }
      }
    } else if (this.creeps.builders.size() < settings.builders) {
      if (!Game.spawns[this.spawns[0]].spawning) {
        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.builder[0].body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.builder[0].body,
            botDefinitions.basic.builder[0].name,
            botDefinitions.basic.builder[0].memory);
        }
      }
    } else if (this.creeps.defenders.size() < settings.defenders) {
      if (!Game.spawns[this.spawns[0]].spawning) {
        if (Game.spawns[this.spawns[0]].canCreateCreep(botDefinitions.basic.defender[0].body) == OK) {
          Game.spawns[this.spawns[0]].createCreep(botDefinitions.basic.defender[0].body,
            botDefinitions.basic.defender[0].name,
            botDefinitions.basic.defender[0].memory);
        }
      }
    }
  }
};