import { default as PhaserContainer } from 'phaser';
import _ from 'lodash';
const Phaser = PhaserContainer.Phaser;

const partsMap = {
  body: { anchor: [0.5, 0.5], height: 150 },
  headDeco: { anchor: [0.5, 1], height: 70 },
  leftArm: { anchor: [1, 0.5], height: 90 },
  leftLeg: { anchor: [1, 0], height: 75 },
  rightArm: { anchor: [0, 0.5], height: 90 },
  rightLeg: { anchor: [0, 0], height: 75 },
  tailDeco: { anchor: [0, 0.5], height: 100 }
};

export default class Part extends Phaser.Sprite {
  constructor(game, x, y, data) {
    super(game, x, y, 'parts');

    this.id = data.id;
    this.frameName = `${data.species}/${_.kebabCase(data.slot)}.png`;
    this.species = data.species;
    this.slot = data.slot;
    this.stats = data.stats;

    this.anchor.x = partsMap[this.slot].anchor[0];
    this.anchor.y = partsMap[this.slot].anchor[1];

    this.scaleToHeight(partsMap[this.slot].height);
  }

  scaleToHeight(newHeight) {
    var ratio = newHeight / this.height;
    this.width = Math.floor(this.width * ratio);
    this.height = newHeight;
  }
}
