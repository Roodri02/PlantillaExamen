


export default class Boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
  
    /**
     * Loading of game assets
     */
    preload() {

      this.load.setPath('./assets/backgrounds');
      this.load.image('sky', 'sky.png');

      //Player Sprites
      this.load.setPath('./assets/Sprites/Player');
      this.load.spritesheet('player','player.png', { frameWidth: 32, frameHeight: 32 });

      //StaticObjects Sprites
      this.load.setPath('./assets/Sprites/StaticObjects');
      this.load.image('platform', 'platform.png');

      //Interfaz Sprites
      this.load.setPath('./assets/Sprites/Interface');

      //PowerUp Sprites
      this.load.setPath('./assets/Sprites/Interactuables/PowerUps');

      //Menu Sprites
      this.load.setPath('./assets/Sprites/Menu');
      this.load.image('playButton' , 'PlayButton.png');
      this.load.image('exitButton', 'ExitButton.png');
      this.load.image('easy','easy.png');
      this.load.image('normal','normal.png');
      this.load.image('hard','hard.png');
    }
    /**
     * Creation of the scene. In this case, we only switch to the scene representing the
     */
    create() {
      this.scene.start('menu');
    }
  }