class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};

        this.bodyX = 0;
        this.bodyY = 0;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.leftHandX = this.bodyX - 125;
        this.lefthandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 125;
        this.rightHandY = this.bodyY + 20;
    }
    preload() {}
    
    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'
        //Listener
        this.input.on('pointerup', pointer => {
            if (pointer.leftButtonReleased()) {
                let my = this.my;
                this.bodyX = pointer.x;
                this.bodyY = pointer.y;
                this.smileX = this.bodyX;
                this.smileY = this.bodyY + 20;

                this.leftHandX = this.bodyX - 125;
                this.lefthandY = this.bodyY + 20;

                this.rightHandX = this.bodyX + 125;
                this.rightHandY = this.bodyY + 20;

                //Main Body
                my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");

                //Dimple
                my.sprite.dimple = this.add.sprite(this.smileX, this.smileY, "smileDimple");
                
                //Hands
                my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "handOpen");
                my.sprite.leftOpenHand.flipX = true;
                my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "handOpen");

                
            }
        });
    }
    update() {}

}