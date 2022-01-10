import Player from './Player/player.js';
import Chrono from './Timer/Chrono.js';
import StaticObject from './StaticObjects/staticobject.js';
import Interface from './Interfaz/interface.js';


export default class Level extends Phaser.Scene {

  constructor() {
    super({ key: 'level' });
  }

  init(data){
    //En caso de tener que pasar algo entre escenas o distintos niveles de dificultad
  }

  /**
   * Creation of the elements of the main game scene
   */
  create() {

    const width = this.scale.width;
    const height = this.scale.height;
    
    this.createObjects(width,height);
 
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, width, height)
    this.cameras.main.followOffset.set(0, height / 2 - 64);
    this.cameras.main.setLerp(0.9, 0.9);
  }

  update(t, dt){
    super.update(t, dt);
  }

/**
 * Create GameObjects and adjust its size
 * @param {*} width -specifies individual ground width for its creation
 */
  createObjects(width,height)
  {
    this.createObjectGroups();

    //-400, 300
    this.player = new Player(this, width/2,height/2, 250);

    this.createStaticObject(width/2,height,'platform');

    this.chrono= new Chrono(this, true);

    //this.createGroundZone(width); // En caso de necesitar suelo

    this.interface = new Interface(this, this.player);

    // Handle colliders
    this.handleColliders(); //Crear grupos para las colisiones
  }

  /**
  * Used to resize sprites
  * @param {*} object - Objects to resize
  * @param {*} factorX - ScaleX factor
  * @param {*} factorY - ScaleY factor
  */  
  changeBoundingBox(object, factorX, factorY){
    object.body.setSize(object.width/factorX, object.height/factorY, true);
  }

  /**
  * Used to create all objects groups
  */  
  createObjectGroups()
  {
    this.staticObjects=this.physics.add.staticGroup();
  }

  /**
  * Used to create a staticObject
  * @param {*} x - Initial pos x
  * @param {*} y - Initial pos y
  * @param {*} spriteName - Sprite name
  */  
  createStaticObject(x, y, spriteName)
  {
    this.staticObject = new StaticObject (this, x, y, spriteName);
    this.staticObjects.add(this.staticObject);
  }

  /**
  * Used to create all physics collides
  */  
  handleColliders()
  {
    //PLAYER->STATICOBJECTS
    this.physics.add.collider(this.player,this.staticObjects);

    //GROUNDZONE->PLAYER
    //this.physics.add.collider(this.groundZone, this.player); // En caso de necesitar suelo
  }
  /**
  * Used to create the ground zone of the game
  */  
  createGroundZone(widht,height)
  {
    this.groundZone = this.add.zone(widht/2, height, widht, 64);
    this.physics.world.enable(this.groundZone);
    this.groundZone.body.setAllowGravity(false);
    this.groundZone.body.setImmovable(true);
  }
}

