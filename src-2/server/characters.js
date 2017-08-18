const Entities = require('./entities-new')

module.exports = function Characters(
  _characters = {
    name: [''],
    status: [''],
    player: [0],
    latency: [0.1], // test 0.0
    district: [0],
    stratum: [0],
    driving: [0],
    passenging: [0],
    occupying: [0],
    entering: [0],
    exiting: [0],
    vehicleMasterKeys: [[0]],
    vehicleKeys: [[0]],
    vehicleWelcomes: [[0]],
    roomMasterKeys: [[0]],
    roomKeys: [[0]],
    roomUnwelcomes: [[0]],
    x: [0.1],
    y: [0.1],
    z: [0.1],
    width: [0],
    height: [0],
    direction: ['right'],
    speed: [0.1],
    maxSpeed: [0],
    element: ['img'],
    elementID: [''],
    src: ['images/characters/man.png'],
    log: ['']
  }
) {
  const characters = Entities(_characters)

  return Object.freeze(Object.create(characters))
}
