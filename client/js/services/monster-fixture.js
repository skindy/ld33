import uuid from 'uuid';
import _ from 'lodash';

const SPECIES = ['ghosty', 'ghosty-red'];
const SLOTS = ['headDeco', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg', 'tailDeco'];

const SLOTS_MAP = {
  headDeco: 'heads',
  body: 'bodies',
  leftArm: 'arms',
  rightArm: 'arms',
  leftLeg: 'legs',
  rightLeg: 'legs',
  tailDeco: 'tails'
};

function stats(a, b, c) {
  return {
    health: a,
    hunger: b,
    horniness: c
  };
}

function part() {
  let slot = _.sample(SLOTS);
  return {
    id: uuid.v4(),
    slot: slot,
    species: _.sample(SPECIES),
    category: SLOTS_MAP[slot],
    stats: stats(4, 2, 5)
  };
}

export default {
  id: uuid.v4(),
  name: 'fart',
  currentHealth: 4,
  currentHunger: 3,
  parts: {
    headDeco: {
      id: uuid.v4(),
      name: 'Ghosty Head Strap-On',
      'slot': 'headDeco',
      'species': 'ghosty',
      category: 'heads',
      'stats': stats(1, 1, 1)
    },
    body: {
      id: uuid.v4(),
      name: 'Ghosty Body',
      'slot': 'body',
      'species': 'ghosty',
      'stats': stats(1, 1, 1)
    },
    rightArm: {
      id: uuid.v4(),
      name: 'Ghosty Right Arm',
      'slot': 'rightArm',
      'species': 'ghosty',
      category: 'arms',
      'stats': stats(1, 1, 1)
    },
    leftArm: {
      id: uuid.v4(),
      name: 'Ghosty Left Arm',
      'slot': 'leftArm',
      'species': 'ghosty',
      category: 'arms',
      'stats': stats(1, 1, 1)
    },
    rightLeg: {
      id: uuid.v4(),
      name: 'Ghosty Right Leg',
      'slot': 'rightLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    },
    leftLeg: {
      id: uuid.v4(),
      name: 'Ghosty Left Leg',
      'slot': 'leftLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    },
    tailDeco: {
      id: uuid.v4(),
      name: 'Ghosty Tail',
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    }
  },
  'inventory': _.map(_.range(0, 20), () => {
    return part();
  })
};
