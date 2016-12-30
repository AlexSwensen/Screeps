module.exports = {
  basic: {
    harvester: [
      {
        body: [WORK, WORK, CARRY, MOVE],
        name: undefined,
        memory: {role: 'harvester'}
      }
    ],
    upgrader: [
      {
        body: [WORK, WORK, CARRY, MOVE],
        name: undefined,
        memory: {role: 'upgrader'}
      }
    ],
    builder: [
      {
        body: [WORK, WORK, CARRY, MOVE],
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