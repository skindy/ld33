function stats(a, b, c) {
  return {
    health: a,
    hunger: b,
    horniness: c
  }
}

export default {
  "name": "fart",
  currentHealth: 4,
  currentHunger: 3,
  "body": [
    {
      "slot": "head",
      "species": "human",
      "stats": stats(1, 1, 1)
    },
    {
      "slot": "body",
      "species": "human",
      "stats": stats(1, 1, 1)
    },
    {
      "slot": "rightArm",
      "species": "human",
      "stats": stats(1, 1, 1)
    },
    {
      "slot": "leftArm",
      "species": "human",
      "stats": stats(1, 1, 1)
    },
    {
      "slot": "rightLeg",
      "species": "human",
      "stats": stats(1, 1, 1)
    },
    {
      "slot": "leftLeg",
      "species": "human",
      "stats": stats(1, 1, 1)
    }
  ],
  "inventory": [
    {
      "slot": "leftLeg",
      "species": "human",
      "stats": stats(1, 1, 1)
    }
  ]
}
