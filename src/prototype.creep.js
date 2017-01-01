var roles = {
  harvester: require("./role.harvester"),
  builder: require("./role.builder"),
  upgrader: require("./role.upgrader"),
  defender: require("./role.defender")
};

/**
 * The total amount of resources currently being carried.
 * @type {Number}
 */
Creep.prototype.carryTotal = _(this.carry).sum();

/**
 * Run the correct code for the assigned role.
 */
Creep.prototype.runRole = function() {
  roles[this.memory.role].run(this);
};