import { default as PhaserContainer } from 'phaser';
const Phaser = PhaserContainer.Phaser;
import _ from 'lodash';
import InventoryBlock from './inventory-block';
import Button from './button';
import Part from './part';
import events from './events';

const PADDING = {x: 40, y: 20};

export default class Inventory extends Phaser.Group {
  constructor(game, width, height, parts) {
    super(game);
    this.width = width;
    this.height = height;

    this.background = new Phaser.Sprite(this.game, 0, 0, 'ui', 'inventory-background.png');
    this.add(this.background);
    this.tilesBackground = new Phaser.Sprite(this.game, PADDING.x, PADDING.y + 40, 'ui', 'inventory-blocks-background.png');
    this.add(this.tilesBackground);
    this.statsBackground = new Phaser.Sprite(this.game, PADDING.x, this.height - PADDING.y - 120, 'ui', 'inventory-stats-background.png');
    this.add(this.statsBackground);
    this.addButtons();
    this.addParts(parts);
    this.addStats();
    this.addStatButtons();
    this.panels.heads.visible = true;

    events.addToInventory.add(this.addToInventory, this);
  }

  addButtons() {
    let spacing = (this.width - (PADDING.x * 2)) / 4;
    this.buttons = _.map(['heads', 'legs', 'arms', 'tails'], (name, index) => {
      let button = new Button(this.game, this.changePanel, this, {title: name});
      button.x = PADDING.x + (spacing * index);
      button.y = PADDING.y;
      this.add(button);
    });
  }

  addToInventory(part) {
    this.createTile(part);
    this.updateTiles(part.category);
  }

  createTile(part) {
    let tile = new Phaser.Group(this.game);
    let block = new InventoryBlock(this.game);
    tile.add(block);
    part.anchor.x = 0.5;
    part.anchor.y = 0.5;
    part.scaleToHeight(block.height - 10);
    part.x = block.width / 2;
    part.y = block.height / 2;
    block.part = part;
    block.tile = tile;
    tile.block = block;

    tile.add(part);
    block.inputEnabled = true;
    block.input.useHandCursor = true;
    block.events.onInputDown.add(this.updatePartStats, this);

    this.tiles[part.category].push(tile);
    this.panels[part.category].add(tile);
    return tile;
  }

  updateTiles(categories) {
    if (categories && !Array.isArray(categories)) categories = [categories];
    if (!categories) categories = ['heads', 'legs', 'arms', 'tails'];
    let spacing = (this.tilesBackground.width - 20) / 4;

    _.forEach(categories, (category) => {
      _.forEach(this.tiles[category], (tile, index) => {
        tile.x = PADDING.x + 5 + (spacing * (index % 4));
        tile.y = 71 + (tile.block.height + 4) * Math.floor(index / 4);
      });
    });
  }

  changePanel(event) {
    _.forEach(this.panels, (panel) => {
      panel.visible = false;
    });
    this.panels[event.title].visible = true;
  }

  addParts(partsData) {
    this.panels = {};
    this.tiles = {};
    _.forEach(['heads', 'legs', 'arms', 'tails'], (category) => {
      let panel = new Phaser.Group(this.game);
      panel.visible = false;
      this.panels[category] = panel;
      this.tiles[category] = [];

      let partGroup = _.filter(partsData, part => part.category === category);
      _.forEach(partGroup, (partData) => {
        let part = new Part(this.game, 0, 0, partData);
        this.createTile(part);
      });
      this.panels[category] = panel;

      this.add(panel);
    });
    this.updateTiles();
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

  addStatButtons() {
    this.eatButton = new Button(this.game, this.eatPart, this, {title: 'Eat'});
    this.eatButton.x = this.width - PADDING.x - this.eatButton.width - 20;
    this.eatButton.y = 380;
    this.add(this.eatButton);

    this.replaceButton = new Button(this.game, this.replacePart, this, {title: 'Replace'});
    this.replaceButton.x = this.width - PADDING.x - this.replaceButton.width - 20;
    this.replaceButton.y = 340;
    this.add(this.replaceButton);
  }

  eatPart() {
    this.removeTile(this.selectedBlock);
    let part = this.selectedBlock.part;
    events.eatPart.dispatch(part);
    let tile = this.selectedBlock.tile;
    this.selectedBlock.part = null;
    this.selectedBlock.tile = null;
    tile.destroy();
    this.selectedBlock.destroy();
    this.updateTiles();
  }

  removeTile(block) {
    _.pull(this.tiles[block.part.category], block.tile);
  }

  replacePart() {
    this.removeTile(this.selectedBlock);
    let part = this.selectedBlock.part;
    events.replacePart.dispatch(part);
    let tile = this.selectedBlock.tile;
    this.selectedBlock.part = null;
    this.selectedBlock.tile = null;
    tile.destroy();
    this.selectedBlock.destroy();
  }

  updatePartStats(block) {
    this.selectedBlock = block;
    _.forEach(this.tiles, (tileList) => {
      _.forEach(tileList, (tile) => tile.block.removeHighlight());
    });
    block.highlight();

    let part = block.part;
    this.partStatsNameText.text = `${part.title}`;
    this.partStatsText.text = `${JSON.stringify(part.stats)}`;
  }
}
