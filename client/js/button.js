import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';

export default class Part extends Phaser.Button {
  constructor(game, action, context, data) {
    super(game, 0, 0, 'ui', action, context);

    this.title = data.title;
    this.frameName = 'inventory-button.png';

    var font = this.game.add.retroFont('pressStart', 20, 20, (Phaser.RetroFont.TEXT_SET3));
    font.text = data.title;
    this.label = this.game.add.image(0, 0, font);
    this.label.scale.x = 0.5;
    this.label.scale.y = 0.5;
    this.label.anchor.x = 0.5;
    this.label.anchor.y = 0.5;
    this.label.position.x = this.width / 2;
    this.label.position.y = this.height / 2;
    this.addChild(this.label);
  }
}
