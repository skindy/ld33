import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;

export default {
  eatPart: new Phaser.Signal(),
  replacePart: new Phaser.Signal(),
  addToInventory: new Phaser.Signal()
};
