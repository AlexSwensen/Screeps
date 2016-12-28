// spawn creep
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Upgrader1');


// set memory
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';


// spawn creep with memory
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Builder1',
  {role: 'builder'}); // memory

Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
  'HarvesterBig2',
  {role: 'harvester'});
