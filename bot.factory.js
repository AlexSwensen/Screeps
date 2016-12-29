module.exports = {
  spawns: Game.spawns,
  creeps: Game.creeps,
  update: function () {
    this.spawns = Game.spawns;
    this.creeps = Game.creeps;
  },
  run: function () {
    this.update();
    console.log(`you have ${this.creeps.length} units`);
  }
};