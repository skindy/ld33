import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';

export default class Part extends Phaser.Button {
  constructor(game, action, context, data) {
    super(game, 0, 0, 'ui', action, context);

    this.title = data.title;
    this.frameName = 'inventory-button.png';
  }
}
