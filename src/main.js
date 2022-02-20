import Phaser from 'phaser'

import MainScene from './scenes/MainScene'

const config = {
	type: Phaser.AUTO,
	width: 512,
	height: 512,
	backgroundColor: '#333333',
	physics: {
		default: 'matter',
		matter: {
			debug: true,
			gravity: {y: 0}
		}
	},
	scene: [MainScene]
}

export default new Phaser.Game(config)

