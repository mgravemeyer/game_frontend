import Phaser from 'phaser'
import Player from '../objects/Player.js'

export default class MainScene extends Phaser.Scene {
	constructor() {
		super('main-scene')
	}

	preload() {
        Player.preload(this);
        this.load.image('tiles', 'assets/images/map.png');
        this.load.tilemapTiledJSON('map', 'assets/images/map.json');
    }

    create() {
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);

        map.createLayer('Tile Layer 1', tileset, 0, 0);

        this.player = new Player({ scene:this, x:0 ,y:0 ,texture:'archer' ,frame:'archer_idle_1' });
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        })
    }

    update() {
        this.player.update();
    }
}
