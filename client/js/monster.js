import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import Part from './part';

export default class Monster extends Phaser.Group {
  constructor(game, data) {
    super(game);

    this.monsterName = data.name;
    this.body = this.add(new Part(game, 0, 0, data.parts.body));
    var partsLocations = {
      headDeco: [this.body.x, this.body.y - (this.body.height / 2)],
      leftArm: [this.body.x - (this.body.width / 2), this.body.y],
      rightArm: [this.body.x + (this.body.width / 2), this.body.y],
      tailDeco: [this.body.x + (this.body.width / 2), this.body.y + (this.body.height * (2/5)) ],
      leftLeg: [this.body.x - (this.body.width * (1/6)), this.body.y + (this.body.height / 2)],
      rightLeg: [this.body.x + (this.body.width * (1/6)), this.body.y + (this.body.height / 2)]
    };

    this.parts = _.forEach(['headDeco', 'leftArm', 'rightArm', 'tailDeco', 'leftLeg', 'rightLeg'], (part) => {
      this.add(new Part(game, partsLocations[part][0], partsLocations[part][1], data.parts[part]));
    });
    this.stats = data.stats;
  }
}
