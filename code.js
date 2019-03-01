var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'my-game', { preload: preload, create: create, update: update });

var text;
var button;
var player;
var x = 32;
var y = 80;

function preload() {
    game.load.spritesheet('button', 'assets/images/but.png');
  //  game.load.spritesheet('guy', 'assets/images/player.png', 64, 64);
}

function create() {
    game.stage.backgroundColor = '#182d3b';
    //	You can listen for each of these events from Phaser.Loader
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);

    //	Just to kick things off
    button = game.add.button(50, 400, 'button', start, this, 2, 1, 0);

    //	Progress report
    text = game.add.text( 250, 40,'Time Runner', { fill: '#ffffff' ,fontSize: '60px'});
    text.anchor.set(0.5, 0.5);

}
function start() {
    game.load.spritesheet('guy', 'assets/images/player.png', 64, 64);
    game.load.start();

    button.visible = false;

}
function loadStart() {

	text.setText("Loading ...");

}
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
//
}

function loadComplete() {
    text.setText("");

    
    loadLevel1();
}

function loadLevel1(){
    game.world.setBounds(0, 0, 5000, 5000);
    player = game.add.sprite(50, 50, 'guy');
    player.anchor.set(0.5, 0.5);
    player.collideWorldBounds = true;
    
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    
}

function update(){
    
}
