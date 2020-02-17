BasicGame.MainMenu = function(game) {
	this.playButton = null;
	this.titleScreen = null;
	this.loadingText = null;
};

BasicGame.MainMenu.prototype = {

	create: function() {
		this.titleScreen = this.add.sprite(0, 0, 'titlepage');
		this.titleScreen.width = this.game.width;
		this.titleScreen.height = this.game.height;

		this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 80, "Press Z or tap/click game to start", { font: "20px monospace", fill: "#fff" });
		this.loadingText.anchor.setTo(0.5, 0.5);
		this.add.text(this.game.width / 2, this.game.height - 90, "image assets Copyright (c) 2002 Ari Feldman", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
		this.add.text(this.game.width / 2, this.game.height - 75, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
	},

	update: function() {
		if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
			this.startGame();
		}
	},

	startGame: function(pointer) {
		this.state.start('Game');
	}

};