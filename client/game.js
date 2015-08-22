import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import Monster from './monster';
import monsterService from './services/monster-service';
import uuid from 'uuid';

const TILE_SIZE = 40;

export default class Game {
  preload() {
    this.load.tilemap('partsMap', 'client/assets/parts.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.spritesheet('parts', 'client/img/parts.png', TILE_SIZE, TILE_SIZE);
    this.load.image('pressStart', 'client/img/press-start.png');
  }

  create() {
    this.authToken = localStorage.getItem('fff/authToken');
    if (!this.authToken) {
      this.authToken = uuid.v4();
      localStorage.setItem('fff/authToken', this.authToken);
      monsterService.post().then((monsterData) => {
        this.monster = new Monster(this.game, monsterData);
      });
    } else {
      monsterService.get().then((monsterData) => {
        this.monster = new Monster(this.game, monsterData);
      });
    }

  }

  createMonster() {
    console.log()
  }

  update() {

  }

  showLose() {
    this.lost = true;

    let graphics = this.game.add.graphics(80, 280);
    graphics.beginFill('#000000');
    graphics.drawRect(0, 0, 240, 60);
    graphics.endFill();

    let font = this.game.add.retroFont('pressStart', 20, 20, (Phaser.RetroFont.TEXT_SET3));
    font.text = 'YOUR LOSER';
    this.game.add.image(100, 300, font);
  }

  showWin() {
    this.won = true;
  }
}
