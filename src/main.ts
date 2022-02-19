import Phaser from 'phaser'
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";

import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#333333',
	physics: {
		default: 'matter',
		matter: {
			debug: true,
			gravity: {y: 0}
		}
	},
	scene: [HelloWorldScene]
}

export default new Phaser.Game(config)

