import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import Button from './button';
import encounterService from './services/encounter-service';
import Alert from './alert';

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
    this.game.add.tween(this.position).to({ x: 0, y: 0 }, 800, Phaser.Easing.Cubic.Out, true);

    this.message = new Alert(this.game, '');
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
    var originalPosition = { x: this.monster.position.x, y: this.monster.position.y };
    var originalScale = { x: this.monster.scale.x, y: this.monster.scale.y };
    var move = this.game.add.tween(this.monster.position).to({ x: this.enemy.position.x, y: this.enemy.position.y }, 500, Phaser.Easing.Cubic.InOut, true);
    this.game.add.tween(this.monster.scale).to({ x: -this.enemy.scale.x, y: this.enemy.scale.y }, 500, Phaser.Easing.Cubic.InOut, true);
    var fight = encounterService.fight(this.monster.id, this.enemy.id);
    move.onComplete.add(() => {
      setTimeout(() => {
        fight.then((response) => {
          this.dealWithIt(response);
          this.game.add.tween(this.monster.position).to({ x: originalPosition.x, y: originalPosition.y }, 500, Phaser.Easing.Cubic.InOut, true);
          this.game.add.tween(this.monster.scale).to({ x: originalScale.x, y: originalScale.y }, 500, Phaser.Easing.Cubic.InOut, true);
        });
      }, 1000);
    }, this);
  }

  fuck() {
    var originalPosition = { x: this.monster.position.x, y: this.monster.position.y };
    var originalScale = { x: this.monster.scale.x, y: this.monster.scale.y };
    var move = this.game.add.tween(this.monster.position).to({ x: this.enemy.position.x, y: this.enemy.position.y }, 500, Phaser.Easing.Cubic.InOut, true);
    this.game.add.tween(this.monster.scale).to({ x: -this.enemy.scale.x, y: this.enemy.scale.y }, 500, Phaser.Easing.Cubic.InOut, true);
    var fuck = encounterService.fuck(this.monster.id, this.enemy.id);
    move.onComplete.add(() => {
      setTimeout(() => {
        fuck.then((response) => {
          this.dealWithIt(response);
          this.game.add.tween(this.monster.position).to({ x: originalPosition.x, y: originalPosition.y }, 500, Phaser.Easing.Cubic.InOut, true);
          this.game.add.tween(this.monster.scale).to({ x: originalScale.x, y: originalScale.y }, 500, Phaser.Easing.Cubic.InOut, true);
        });
      }, 1000);
    }, this);
  }

  flee() {
    var originalPosition = { x: this.monster.position.x, y: this.monster.position.y };
    var originalScale = { x: this.monster.scale.x, y: this.monster.scale.y };
    var move = this.game.add.tween(this.monster.position).to({ x: this.enemy.position.x, y: this.enemy.position.y }, 500, Phaser.Easing.Cubic.InOut, true);
    this.game.add.tween(this.monster.scale).to({ x: -this.enemy.scale.x, y: this.enemy.scale.y }, 500, Phaser.Easing.Cubic.InOut, true);
    var flee = encounterService.flee(this.monster.id, this.enemy.id);
    move.onComplete.add(() => {
      setTimeout(() => {
        flee.then((response) => {
          this.dealWithIt(response);
          this.game.add.tween(this.monster.position).to({ x: originalPosition.x, y: originalPosition.y }, 500, Phaser.Easing.Cubic.InOut, true);
          this.game.add.tween(this.monster.scale).to({ x: originalScale.x, y: originalScale.y }, 500, Phaser.Easing.Cubic.InOut, true);
        });
      }, 1000);
    }, this);
  }

  dealWithIt(result) {
    if (result.won) {
      this.message.setText(`You successfully ${result.monster.action}ed your way out!`);
      this.message.visible = true;
      setTimeout(() => {
        this.message.visible = false;
      }, 2000);
    } else {
      this.message.setText(`You got ${result.enemy.action}ed to death.`);
      this.message.visible = true;
      setTimeout(() => {
        this.message.visible = false;
      }, 2000);
    }
  }
}
