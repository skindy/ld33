import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import Button from './button';
import monsterService from './services/monster-service';

export default class Encounter extends Phaser.Group {
  constructor(game, monster, enemy) {
    super(game);

    this.background = new Phaser.Sprite(this.game, 0, 0, 'encounter', 'background.png');
    this.add(this.background);
    this.position.x = -800;

    this.monster = monster;
    this.enemy = enemy;

    this.add(this.monster);
    this.monster.position.x = 200;
    this.monster.position.y = 500;
    this.monster.scale.x = -3.0;
    this.monster.scale.y = 3.0;

    this.add(this.enemy);
    this.enemy.position.x = 585;
    this.enemy.position.y = 200;
    this.enemy.scale.x = 0.8;
    this.enemy.scale.y = 0.8;

    this.addButtons();
    this.game.add.tween(this.position).to( { x: 0, y: 0 }, 800, Phaser.Easing.Cubic.Out, true);
  }

  addButtons() {
    var buttonY = 380;
    this.fightButton = new Button(this.game, this.fight, this, {title: 'Fight'});
    this.fightButton.position.x = 440;
    this.fightButton.position.y = buttonY;
    this.add(this.fightButton);
    this.fuckButton = new Button(this.game, this.fuck, this, {title: 'Fuck'});
    this.fuckButton.position.x = 540;
    this.fuckButton.position.y = buttonY;
    this.add(this.fuckButton);
    this.fleeButton = new Button(this.game, this.flee, this, {title: 'Flee'});
    this.fleeButton.position.x = 640;
    this.fleeButton.position.y = buttonY;
    this.add(this.fleeButton);
  }

  fight() {
    monsterService.fight(this.monster.id, this.enemy.id).then(function(response) {
      if (response.won) {

      } else {
      }
    });
  }

  fuck() {
    monsterService.fuck(this.monster.id, this.enemy.id).then(function(response) {
      if (response.success) {

      } else {
      }
    });
  }

  flee() {
    monsterService.flee(this.monster.id, this.enemy.id).then(function(response) {
      if (response.success) {

      } else {
      }
    });
  }
}
