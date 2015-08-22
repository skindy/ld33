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
  parts: {
    headDeco: {
      "slot": "headDeco",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    },
    body: {
      "slot": "body",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    },
    rightArm: {
      "slot": "rightArm",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    },
    leftArm: {
      "slot": "leftArm",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    },
    rightLeg: {
      "slot": "rightLeg",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    },
    leftLeg: {
      "slot": "leftLeg",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    },
    tailDeco: {
      "slot": "tailDeco",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    }
  },
  "inventory": [
    {
      "slot": "leftLeg",
      "species": "ghosty",
      "stats": stats(1, 1, 1)
    }
  ]
}
