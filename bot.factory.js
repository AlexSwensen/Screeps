module.exports = {
  spawns: Game.spawns,
  creeps: Game.creeps,
  update: () => {
    this.spawns = Game.spawns;
    this.creeps = Game.creeps;
  },
  run: () => {
    this.update();
    console.log(`you have ${this.creeps.length} units`);
  }
};