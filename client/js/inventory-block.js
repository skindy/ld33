import { default as PhaserContainer } from 'phaser';
import _ from 'lodash';
const Phaser = PhaserContainer.Phaser;

//new Phaser.Sprite(this.game);

export default class Part extends Phaser.Sprite {
  constructor(game) {
    super(game, 0, 0, 'ui', 'inventory-block.png');
  }

  highlight() {
    this.frameName = 'inventory-block-highlight.png';
  }

  removeHighlight() {
    this.frameName = 'inventory-block.png';
  }
}
