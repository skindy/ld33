import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import Part from './part';
import InventoryBlock from './inventory-block';

const PADDING = {x: 40, y: 20};

export default class Inventory extends Phaser.Group {
  constructor(game, width, height, parts) {
    super(game);
    this.width = width;
    this.height = height;
    this.blocks = [];

    this.background = new Phaser.Sprite(this.game, 0, 0, 'ui', 'inventory-background.png');
    this.add(this.background);
    this.tilesBackground = new Phaser.Sprite(this.game, PADDING.x, PADDING.y + 40, 'ui', 'inventory-blocks-background.png');
    this.add(this.tilesBackground);
    this.statsBackground = new Phaser.Sprite(this.game, PADDING.x, this.height - PADDING.y - 120, 'ui', 'inventory-stats-background.png');
    this.add(this.statsBackground);
    this.addButtons();
    this.addParts(parts);
    this.addStats();
    this.panels.heads.visible = true;
  }

  addButtons() {
    let spacing = (this.width - (PADDING.x * 2)) / 4;
    this.buttons = _.map(['heads', 'legs', 'arms', 'tails'], (name, index) => {
      let button = new Phaser.Button(this.game, 0, 0, 'ui', this.changePanel, this);
      button.title = name;
      button.frameName = 'inventory-button.png';
      button.x = PADDING.x + (spacing * index);
      button.y = PADDING.y;
      this.add(button);
    });
  }

  changePanel(event) {
    _.forEach(this.panels, (panel) => {
      panel.visible = false;
    });
    this.panels[event.title].visible = true;
  }

  addParts(parts) {
    let spacing = (this.tilesBackground.width - 20) / 4;

    this.panels = {};
    _.forEach(['heads', 'legs', 'arms', 'tails'], (name) => {
      let panel = new Phaser.Group(this.game);

      let partGroup = _.filter(parts, part => part.category === name);
      this.parts = _.forEach(partGroup, (partData, index) => {
        let tile = new Phaser.Group(this.game);
        let block = new InventoryBlock(this.game);
        this.blocks.push(block);
        tile.add(block);
        let part = new Part(this.game, 0, 0, partData);
        part.anchor.x = 0.5;
        part.anchor.y = 0.5;
        part.scaleToHeight(block.height - 10);
        part.x = block.width / 2;
        part.y = block.height / 2;
        block.part = part;

        tile.x = PADDING.x + 5 + (spacing * (index % 4));
        tile.y = 71 + (block.height + 4) * Math.floor(index / 4);

        tile.add(part);
        block.inputEnabled = true;
        block.input.useHandCursor = true;
        block.events.onInputDown.add(this.updatePartStats, this);
        panel.add(tile);
      });
      this.panels[name] = panel;
      panel.visible = false;

      this.add(panel);
    });
  }

  addStats() {
    this.partStatsNameText = this.game.add.retroFont('pressStart', 20, 20, (Phaser.RetroFont.TEXT_SET3));
    let text = this.game.add.image(400 + PADDING.x + 20, 330, this.partStatsNameText);
    text.scale.x = 0.5;
    text.scale.y = 0.5;

    this.partStatsText = this.game.add.retroFont('pressStart', 20, 20, (Phaser.RetroFont.TEXT_SET3));
    text = this.game.add.image(400 + PADDING.x + 20, 360, this.partStatsText);
    text.scale.x = 0.5;
    text.scale.y = 0.5;
  }

  updatePartStats(block) {
    _.forEach(this.blocks, block => block.removeHighlight());
    block.highlight();

    let part = block.part;
    this.partStatsNameText.text = `${part.species} ${_.startCase(part.slot)}`;
    this.partStatsText.text = `${JSON.stringify(part.stats)}`;
  }
}
