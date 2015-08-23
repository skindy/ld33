import fetch from 'fetch';
import _ from 'lodash';

let fightResults = [
  {
    enemy: {
      action: 'flee',
      stats: {
        currentHeath: 40,
        currentHunger: 20
      }
    },
    monster: {
      action: 'fight',
      stats: {
        currentHealth: 40,
        currentHunger: 40
      }
    },
    won: true
  },
  {
    enemy: {
      action: 'fuck',
      stats: {
        currentHeath: 40,
        currentHunger: 20
      }
    },
    monster: {
      action: 'fight',
      stats: {
        currentHealth: 40,
        currentHunger: 40
      }
    },
    won: false
  }
];

let fuckResults = [
  {
    enemy: {
      action: 'fuck',
      stats: {
        currentHeath: 40,
        currentHunger: 20
      }
    },
    monster: {
      action: 'fuck',
      stats: {
        currentHealth: 40,
        currentHunger: 40
      }
    },
    won: true
  },
  {
    enemy: {
      action: 'fight',
      stats: {
        currentHeath: 40,
        currentHunger: 20
      }
    },
    monster: {
      action: 'fuck',
      stats: {
        currentHealth: 40,
        currentHunger: 40
      }
    },
    won: false
  }
];

let fleeResults = [
  {
    enemy: {
      action: 'fuck',
      stats: {
        currentHeath: 40,
        currentHunger: 20
      }
    },
    monster: {
      action: 'flee',
      stats: {
        currentHealth: 40,
        currentHunger: 40
      }
    },
    won: true
  },
  {
    enemy: {
      action: 'fight',
      stats: {
        currentHeath: 40,
        currentHunger: 20
      }
    },
    monster: {
      action: 'flee',
      stats: {
        currentHealth: 40,
        currentHunger: 40
      }
    },
    won: false
  }
];

export default {
  fight: function (monsterId, enemyId) {
    return Promise.resolve(_.sample(fightResults));
  },
  fuck: function(monsterId, enemyId) {
    return Promise.resolve(_.sample(fuckResults));
  },
  flee: function(monsterId, enemyId) {
    return Promise.resolve(_.sample(fleeResults));
  }
};
