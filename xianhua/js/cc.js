// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div',null,true,null,null);
var game_state = {};

// Creates a new 'main' state that will contain the game

game_state.main = function() { };  
game_state.main.prototype = {

    // Function called first to load all the assets
    preload: function() { 
        // Change the background color of the game

        // Load the bird sprite
       
        this.game.load.image('bird', 'assets/hua.png'); 
        this.game.load.image('pipe', 'assets/girl.png'); 

    
    },

    // Fuction called after 'preload' to setup the game 
    create: function() { 
        // Display the bird on the screen
        this.bird = this.game.add.sprite(100, 245, 'bird');
        this.bird.height=60;
        this.bird.width=60;
        this.bird.anchor.setTo(0.5,0.5);
        this.pipe = this.game.add.sprite(700, 245, 'pipe');
        this.pipe.height=80;
        this.pipe.width=60;
        this.bird.inputEnabled = true;
        this.pipe.inputEnabled = true;
        this.bird.input.enableDrag(false);
        this.bird.events.onInputUp.add(this.jump,this);
      //  this.input.onDown.add(function(){this.score++;this.label_score.content = this.score;},this);
        this.score = 0;
        var style = { font: "30px Arial", fill: "#000000" };
        this.label_score = this.game.add.text(300, 500, "", style);
         
        this.srw=false;
        //this.ii=0;
        // var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        // space_key.onDown.add(this.jump, this);
        // // Add gravity to the bird to make it fall
        // this.bird.body.gravity.y = 1000; 
        // this.bird.body.velocity.y = -350;
        // this.bird.body.velocity.x = 350;
        // game.physics.arcade.moveToPointer(this.bird,350);
        // dogsprite = game.add.sprite(game.world.centerX, game.world.centerY);



        

    },

    // This function is called 60 times per second
    update: function() {
        // If the bird is out of the world (too high or too low), call the 'restart_game' function
        this.angle=Math.atan((this.bird_lasty- this.bird.y)/(this.bird_lastx - this.bird.x))*180/Math.PI;
        if(this.angle<90)
            if(this.srw)this.bird.angle=this.angle;
        if(!this.srw)Math.abs(this.bird.x-100)<20
            ?this.bird.angle=0:this.bird.angle=Math.atan((245- this.bird.y)/(100- this.bird.x))*180/Math.PI;
        this.bird_lastx = this.bird.x;
        this.bird_lasty = this.bird.y;
        
        if (this.bird.inWorld == false)
            this.restart_game(); 
        this.game.physics.overlap(this.bird, this.pipe, this.add_pipe, null, this); 
     //   this.game.physics.collide(this.bird, this.pipe, this.function, null, this); 
     
    },

    jump: function() {
        // Add a vertical velocity to the bird
        // this.bird.y = this.game.input.activePointer.y-this.bird.height/2;
        // this.bird.x = this.game.input.activePointer.x-this.bird.height/2;
        this.srw=true;
        this.bird.body.velocity.y=10*(245+this.bird.height/2-this.game.input.activePointer.y);
        this.bird.body.velocity.x=10*(100+this.bird.width/2-this.game.input.activePointer.x);
        this.bird.body.gravity.y = 1500;
    },


    // Restart the game
    restart_game: function() {
        // Remove the timer
        this.bird.body.velocity.y=0;
        this.bird.body.velocity.x=0;
        this.bird.body.gravity.y = 0;
        this.srw=false;
        this.bird.angle=0;
        this.bird.x=100; 
        this.bird.y=245; 
        
        this.angle=0;
        
    },

    // Add a pipe on the screen
    add_pipe: function() {
        var hole = Math.floor(Math.random()*8)+1;
        this.pipe.y=hole*60+10;  
        this.score += 1;
        this.label_score.content = "哎呦！不错哦+"+this.score;  
    },


};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 