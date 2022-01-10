
export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.speed = 300;

    this.jumpForce=-300;

    //Input para el movimiento
    const { LEFT, RIGHT, UP, DOWN, W, A, S, D } = Phaser.Input.Keyboard.KeyCodes;
    this.cursors = scene.input.keyboard.addKeys({
      left: A,
      right: D,
      up: W,
      down: S
    })
    this.spaceBar=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //ANIMACIONES    
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'idleLeft',
      frames: scene.anims.generateFrameNumbers('player', { start: 3, end: 3 }),
      repeat: 0
    });

    scene.anims.create({
      key: 'up',
      frames: scene.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'idleUp',
      frames: scene.anims.generateFrameNumbers('player', { start: 10, end: 10 }),
      repeat: 0
    });
    scene.anims.create({
      key: 'idle',
      frames: scene.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
      frameRate: 7,
      repeat: -1
    });

    scene.anims.create({
      key: 'down',
      frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'idleRight',
      frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 6 }),
      repeat: 0
    });
  }

  calculateVelocity() {
    this.dirX = 0;
    if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.onFloor) {
      this.body.setVelocityY(this.jumpForce);
    }
    if (this.cursors.left.isDown) {
      this.dirX = -1;
    }
    if (this.cursors.right.isDown) {
      this.dirX = 1;
    }
    this.body.setVelocityX(this.dirX * this.speed);
  }

  stopX() {
    this.body.setVelocityX(0);
  }

  checkAnims() {

    if (this.body.newVelocity.x === 0) {
      if(this.scene.physics.world.bounds.contains(this.x, this.y))
        this.play('idle', true);
      else
        this.play('down', true);
    }
    else if (this.body.newVelocity.x < 0)
      this.play('left', true);
    else
      this.play('right', true);
  }


  preUpdate(t, d) {
    super.preUpdate(t, d);
    this.onFloor = this.body.touching.down;
    this.stopX();
 
    this.calculateVelocity();
    this.checkAnims();
  }
}
