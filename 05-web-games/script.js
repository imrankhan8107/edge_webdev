let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');  //webgl context can be used to create 3d games

let enemy = {
    color:'red',
    x: 100,
    y: 0,
    h: 50,
    w: 50,
    vx:0,
    vy:1
}

let player = {
    color:'blue',
    x: 0,
    y: 175,
    h: 50,
    w: 50,
    vx:3,
    vy:0
}
// drawBox function is used to draw the player and enemy
function drawBox(box){
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.w, box.h);
}

function updateGameState(){
    // update the enemy position
    enemy.y += enemy.vy;
    // check if the enemy is out of the canvas
    if(enemy.y+enemy.h > canvas.height){    //bottom of enemy is hitting bottom of canvas, reverse the velocity
        enemy.vy = -enemy.vy;
    }
    else if(enemy.y < 0){   //top of enemy is hitting top of canvas, reverse the velocity
        enemy.vy = -enemy.vy;
    }
    player.x += player.vx;
    if(player.x+player.w > canvas.width){    //right of player is hitting right of canvas, reverse the velocity
        player.vx = -player.vx;
        // enemy.vy = 1.1*enemy.vy;
    }else if(player.x < 0){   //left of player is hitting left of canvas, reverse the velocity
        player.vx = -player.vx;
    }
}

function updateGame(){
    //update game state
    updateGameState();
    // clean the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw the player
    drawBox(player);
    // draw the enemy
    drawBox(enemy);

    window.requestAnimationFrame(updateGame);

}

updateGame();


/* basic code:
// context is a way to paint thing on the canvas, we can use context object to do things like fill a rectangle

context.fillStyle = 'brown';
context.fillRect(10,10,20,20);

context.clearRect(0,0,canvas.width,canvas.height);



let posX = 0;
let posY = 0;
let speed = 1.5;   // speed of the rectangle

context.fillRect(10,10,300,300);
context.clearRect(20,20,30,30);

// setInterval(function(){
//     posX+=10;
//     posY+=10;
//     context.clearRect(0,0,canvas.width,canvas.height);   // clear everything from 0,0 to width and height of canvas
//     context.fillRect(posX,posY,20,20);
// },2000);

function drawNext(){
    posX+=speed;
    posY+=speed;
    context.clearRect(0,0,canvas.width,canvas.height);   // clear everything from 0,0 to width and height of canvas
    context.fillRect(posX,posY,20,20);
    window.requestAnimationFrame(drawNext);
}

drawNext();
*/