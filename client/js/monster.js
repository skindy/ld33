import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import Part from './part';
import events from './events';

export default class Monster extends Phaser.Group {
  constructor(game, data) {
    super(game);

    this.monsterName = data.name;
    this.body = this.add(new Part(game, 0, 0, data.parts.body));
    this.body.scaleToMonster();
    this.partsLocations = {
      headDeco: [this.body.x, this.body.y - (this.body.height / 2)],
      leftArm: [this.body.x - (this.body.width / 2), this.body.y],
      rightArm: [this.body.x + (this.body.width / 2), this.body.y],
      tailDeco: [this.body.x + (this.body.width / 2), this.body.y + (this.body.height * (2/5)) ],
      leftLeg: [this.body.x - (this.body.width * (1/6)), this.body.y + (this.body.height / 2)],
      rightLeg: [this.body.x + (this.body.width * (1/6)), this.body.y + (this.body.height / 2)]
    };

    this.parts = {};
    _.forEach(['headDeco', 'leftArm', 'rightArm', 'tailDeco', 'leftLeg', 'rightLeg'], (slot) => {
      let part = new Part(game, 0, 0, data.parts[slot]);
      this.movePart(part);
      part.scaleToMonster();
      this.parts[slot] = part;
      console.log(part.x);
      console.log(part.y);
      this.add(part);
    });
    this.stats = data.stats;
    this.inventory = _.map(data.inventory, (partData) => {
      return new Part(this.game, 0, 0, partData);
    });
    events.eatPart.add(this.eatPart, this);
    events.replacePart.add(this.replacePart, this);
  }

  movePart(part) {
    part.x = this.partsLocations[part.slot][0];
    part.y = this.partsLocations[part.slot][1];
  }

  eatPart(part) {
    part.destroy();
  }

  replacePart(part) {
    var removed = this.parts[part.slot];
    this.remove(removed);
    this.parts[part.slot] = part;
    this.movePart(part);
    part.scaleToMonster();
    this.add(part);
    this.inventory.push(removed);
    events.addToInventory.dispatch(removed);
  }
}
