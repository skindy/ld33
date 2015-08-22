import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';

export default class Monster extends Phaser.Group {
  constructor(game, data) {
    super(game);

    this.monsterName = data.name;
    this.parts = data.parts;
    this.stats = data.stats;
  }
}
