// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,,l
    // we've provided one for you to get startedd
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
     return this;
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x+(this.speed*dt);
    // if the enemy is off screen
    if (this.x>500){
        this.x=-10;
    }
    // checking for collisions
    if ((this.x>=player.x-40)&&(this.y>=player.y-40)&&(this.x<=player.x+40)&&(this.y<=player.y+40))
        {
            console.log('You Lose');
            player.x=202;
            player.y=383;
        }
  
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get('images/enemy-bug.png'), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y) {

    this.x=x;
    this.y=y;
    this.score=0;
    this.sprite= 'images/char-boy.png';
    return this;
};

Player.prototype.update = function(dt,x,y) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   // this.x=(this.x*dt)+x;
//    this.y=(this.y*dt)+y;
    
};
Player.prototype.render = function() {

    ctx.drawImage(Resources.get('images/char-boy.png'), this.x, this.y);
};

// check when the player has reached the sea
Player.prototype.checkwin=function(){
    if (this.y<=-17)
        {
            this.x=202;
            this.y=383;
            this.score++;
            $("h1").text('Score=' +this.score);
        }
}
// check if the player goes out of screen
Player.prototype.checkout=function(){
    if (this.y>=480)
        {
            this.x=202;
            this.y=383;
        }
    if (this.x>=450)
        {
            this.x=2;
            
        }
       if (this.x<=0)
        {
            this.x=450;
            
        }
            


}
Player.prototype.handleInput = function(key) {
switch(key){
    case 'up':
        this.y-=50;
        this.checkwin();
        this.checkout();
        //console.log(this.x," ",this.y);
        break;
    case 'down':
        this.y+=50;
        this.checkwin();
         this.checkout();
         // console.log(this.x," ",this.y);
        break;
    case 'left':
        this.x-=50;
        this.checkwin();
         this.checkout();
         // console.log(this.x," ",this.y);
        break;
    case 'right':
        this.x+=50;
        this.checkwin();
         this.checkout();
        // console.log(this.x," ",this.y);
        break;
        
}
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[];
var player= new Player(202,383,1);

for (i=1;i<4;i++){
  allEnemies[i]= new Enemy(10,83*i,i*50);
  
}




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
