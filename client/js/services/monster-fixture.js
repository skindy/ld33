import uuid from 'uuid';

function stats(a, b, c) {
  return {
    health: a,
    hunger: b,
    horniness: c
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
      'slot': 'headDeco',
      'species': 'ghosty',
      category: 'heads',
      'stats': stats(1, 1, 1)
    },
    body: {
      id: uuid.v4(),
      'slot': 'body',
      'species': 'ghosty',
      'stats': stats(1, 1, 1)
    },
    rightArm: {
      id: uuid.v4(),
      'slot': 'rightArm',
      'species': 'ghosty',
      category: 'arms',
      'stats': stats(1, 1, 1)
    },
    leftArm: {
      id: uuid.v4(),
      'slot': 'leftArm',
      'species': 'ghosty',
      category: 'arms',
      'stats': stats(1, 1, 1)
    },
    rightLeg: {
      id: uuid.v4(),
      'slot': 'rightLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    },
    leftLeg: {
      id: uuid.v4(),
      'slot': 'leftLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    },
    tailDeco: {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    }
  },
  'inventory': [
    {
      id: uuid.v4(),
      'slot': 'headDeco',
      'species': 'ghosty',
      category: 'heads',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'headDeco',
      'species': 'ghosty',
      category: 'heads',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'leftArm',
      'species': 'ghosty',
      category: 'arms',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'rightArm',
      'species': 'ghosty',
      category: 'arms',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'tailDeco',
      'species': 'ghosty',
      category: 'tails',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'leftLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'leftLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    },
    {
      id: uuid.v4(),
      'slot': 'rightLeg',
      'species': 'ghosty',
      category: 'legs',
      'stats': stats(1, 1, 1)
    }
  ]
};
