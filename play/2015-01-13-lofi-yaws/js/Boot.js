var BasicGame = {
	SEA_SCROLL_SPEED: 12,
	PLAYER_SPEED: 300,
	ENEMY_MIN_Y_VELOCITY: 30,
	ENEMY_MAX_Y_VELOCITY: 60,
	SHOOTER_MIN_VELOCITY: 30,
	SHOOTER_MAX_VELOCITY: 80,
	BOSS_Y_VELOCITY: 15,
	BOSS_X_VELOCITY: 200,
	BULLET_VELOCITY: 500,
	ENEMY_BULLET_VELOCITY: 150,
	POWERUP_VELOCITY: 100,

	SPAWN_ENEMY_DELAY: Phaser.Timer.SECOND,
	SPAWN_SHOOTER_DELAY: Phaser.Timer.SECOND * 3,

	SHOT_DELAY: Phaser.Timer.SECOND * 0.1,
	SHOOTER_SHOT_DELAY: Phaser.Timer.SECOND * 2,
	BOSS_SHOT_DELAY: Phaser.Timer.SECOND,

	ENEMY_HEALTH: 2,
	SHOOTER_HEALTH: 5,
	BOSS_HEALTH: 500,

	BULLET_DAMAGE: 1,
	CRASH_DAMAGE: 5,

	ENEMY_REWARD: 100,
	SHOOTER_REWARD: 400,
	BOSS_REWARD: 10000,
	POWERUP_REWARD: 100,

	ENEMY_DROP_RATE: 0.3,
	SHOOTER_DROP_RATE: 0.5,
	BOSS_DROP_RATE: 0,

	PLAYER_EXTRA_LIVES: 3,
	PLAYER_GHOST_TIME: Phaser.Timer.SECOND * 3,

	INSTRUCTION_EXPIRE: Phaser.Timer.SECOND * 10,
	RETURN_MESSAGE_DELAY: Phaser.Timer.SECOND * 2,

	BOSS_SCORE_THRESHOLD: 10000
};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

	init: function () {
		this.input.maxPointers = 1;

		if (this.game.device.desktop) {
			// desktop customizations
		} else {
			// mobile customizations
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.scale.setMinMax(480, 360, 1024, 768);
			this.scale.forceLandscape = true;
		}
	},

	preload: function () {
		this.load.image('preloaderBar', 'images/preloader-bar.png');
	},

	create: function () {
		this.state.start('Preloader');
	}

};
