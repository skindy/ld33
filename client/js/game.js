import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import uuid from 'uuid';

import Monster from './monster';
import Inventory from './inventory';
import Encounter from './encounter';

import monsterService from './services/monster-service';
import authService from './services/auth-service';
import Button from './button';

const MONSTER_CENTER = [190, 165];

export default class Game {
  preload() {
    this.load.atlasJSONHash('parts', 'client/img/parts.png', 'client/json/parts.json');
    this.load.atlasJSONHash('ui', 'client/img/ui.png', 'client/json/ui.json');
    this.load.atlasJSONHash('encounter', 'client/img/encounter.png', 'client/json/encounter.json');
    this.load.image('pressStart', 'client/img/press-start.png');
  }

  create() {
    this.getOrCreateMonster().then((monsterData) => {
      this.game.add.existing(this.monster);
      this.monster.x = MONSTER_CENTER[0];
      this.monster.y = MONSTER_CENTER[1];
      this.inventory = new Inventory(this.game, 400, 225, monsterData.inventory);
      this.game.add.existing(this.inventory);
      this.inventory.position.x = 400;
    });

    this.game.stage.backgroundColor = 'e0dfcd';

    this.encounterButton = new Button(this.game, this.startEncounter, this, {title: 'Fight'});
    this.encounterButton.x = 200;
    this.encounterButton.y = 350;
    this.game.add.existing(this.encounterButton);
  }

  getOrCreateMonster() {
    this.authToken = localStorage.getItem('fff/authToken');
    if (this.authToken) {
      authService.token = this.authToken;
      return monsterService.get().catch(function(response) {
        if (response.code === 404) {
          return monsterService.post();
        } else {
          throw new Error('Got a horrible response from the server!');
        }
      }).then((monsterData) => {
        this.monster = new Monster(this.game, monsterData);
        return monsterData;
      }).catch(() => {
        this.error = 'OH GOD';
      });
    } else {
      this.authToken = uuid.v4();
      localStorage.setItem('fff/authToken', this.authToken);
      authService.token = this.authToken;
      return monsterService.post().then((monsterData) => {
        this.monster = new Monster(this.game, monsterData);
        return monsterData;
      });
    }
  }

  startEncounter() {
    monsterService.encounter(this.monster.id).then((data) => {
      let enemy = new Monster(this.game, data.enemy);
      var encounter = new Encounter(this.game, this.monster, enemy);
    });
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
