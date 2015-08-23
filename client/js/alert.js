import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';

export default class Part extends Phaser.Group {
  constructor(game, message) {
    super(game);

    this.font = this.game.add.retroFont('pressStart', 20, 20, (Phaser.RetroFont.TEXT_SET3));
    this.font.text = message;
    this.result = this.game.add.image(0, 0, this.font);
    this.result.anchor.x = 0.5;
    this.result.anchor.y = 0.5;
    this.result.position.x = 400;
    this.result.position.y = 75;
    this.addChild(this.result);
    this.visible = false;
  }

  setText(text) {
    this.font.text = text;
  }
}
