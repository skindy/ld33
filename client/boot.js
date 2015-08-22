import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;

export default class Boot {
  init() {
    this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
  }

  create() {
    this.game.state.start('Game');
  }
}
