import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import Boot from './boot';
import Game from './game';

const width = 800;
const height = 450;

let FFF = {};

FFF.Boot = Boot;
FFF.Game = Game;
FFF.Game = Encounter;

let game = new Phaser.Game(
  width,
  height,
  Phaser.AUTO,
  'fff',
  null,
  false
);

game.state.add('Boot', FFF.Boot);
game.state.add('Game', FFF.Game);
game.state.start('Boot');
