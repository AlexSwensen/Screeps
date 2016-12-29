// spawn creep
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Upgrader1');


// set memory
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';


// spawn creep with memory
Game.spawns['Spawn1'].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined,
  {role: 'builder'}); // memory

Game.spawns['Spawn1'].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined,
  {role: 'harvester'}); // memory

Game.spawns['Spawn1'].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], 'Upgrader1',
  {role: 'upgrader'}); // memory

Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE],
  'HarvesterBig2',
  {role: 'harvester'});

Game.spawns['Spawn1'].createCreep([MOVE, MOVE, ATTACK], undefined, {role: 'defender'});


// We have underscore/lodash?
var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
console.log('Harvesters: ' + harvesters.length);

// remove dead creep memory (GOOD IDEA)
for (var name in Memory.creeps) {
  if (!Game.creeps[name]) {
    delete Memory.creeps[name];
    console.log('Clearing non-existing creep memory:', name);
  }
}
// activates safe mode
Game.spawns['Spawn1'].room.controller.activateSafeMods();

// builds tower at specified location
Game.spawns['Spawn1'].room.createConstructionSite(23, 22, STRUCTURE_TOWER);

// Control by object ID
var tower = Game.getObjectById('b9a97ddb5ea72b9ffde714bc');
if (tower) {
  var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    filter: (structure) => structure.hits < structure.hitsMax
  });
  if (closestDamagedStructure) {
    tower.repair(closestDamagedStructure);
  }

  var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  if (closestHostile) {
    tower.attack(closestHostile);
  }
}