module.exports = {
  basic: {
    harvester: [
      {
        body: [WORK, CARRY, CARRY, MOVE, MOVE],
        name: undefined,
        memory: {role: 'harvester'}
      }
    ],
    upgrader: [
      {
        body: [WORK, CARRY, CARRY, MOVE, MOVE],
        name: undefined,
        memory: {role: 'upgrader'}
      }
    ],
    builder: [
      {
        body: [WORK, CARRY, CARRY, MOVE, MOVE],
        name: undefined,
        memory: {role: 'builder'}
      }
    ],
    defender: [
      {
        body: [MOVE, MOVE, ATTACK, ATTACK],
        name: undefined,
        memory: {role: 'defender'}
      }
    ]
  }
};