
export default class Interface extends Phaser.GameObjects.GameObject {

    constructor(scene, player) {
      super(scene);
      this.scene.add.existing(this);
  
      //lifeBar creation
      this.x = 35;
      this.y = 35;

      this.text=this.scene.add.text(this.x,this.y,"Texto")
      this.text.setAlign('center');
      this.text.setFont('Arial Black');
      this.text.setFontSize(26);
    }

    actualiza(n){
      //Para puntuación por ejemplo
      this.text.setText(n);
    }
  
}
  