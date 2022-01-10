
export default class Win extends Phaser.Scene {

  constructor() {
    super({ key: 'win' });
  }

  create() {
      
    //this.easyButton = this.add.image(this.scale.width*0.30, 330, 'easy').setInteractive().setScale(1, 1);
    //this.easyButton.on('pointerdown', () => {
      //this.scene.start('level'); 
    //});

    //this.normalButton = this.add.image(this.scale.width*0.50, 330, 'normal').setInteractive().setScale(1, 1);
    //this.normalButton.on('pointerdown', () => {
      //this.scene.start('level'); 
    //});

    //this.hardButton = this.add.image(this.scale.width*0.70, 330, 'hard').setInteractive().setScale(1, 1);
    //this.hardButton.on('pointerdown', () => {
      //this.scene.start('level'); 
    //});

    //this.playButton = this.add.image(this.scale.width*0.70, 330, 'playButton').setInteractive().setScale(1, 1);´
    //this.playButton.on('pointerdown', () => {
      //this.scene.start('level'); 
    //});
    
    //this.exitButton = this.add.image(this.scale.width*0.70, 330, 'exitButton').setInteractive().setScale(1, 1);
    //this.exitButton.on('pointerdown', () => {
      //this.scene.start('menu'); 
    //});
  }
  preUpdate(t,dt)
  {
    super.preUpdate(t,dt);
  }
}