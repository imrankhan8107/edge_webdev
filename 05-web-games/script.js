let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');  //webgl context can be used to create 3d games

let enemy1 = {
    color:'red',
    x: 250,
    y: 0,
    h: 50,
    w: 50,
    vx:0,
    vy:1
}

let enemy2 = {
    color:'red',
    x: 500,
    y: 0,
    h: 50,
    w: 50,
    vx:0,
    vy:1.5
}

let player = {
    color:'blue',
    x: 0,
    y: 175,
    h: 50,
    w: 50,
    vx:0.1,
    vy:0
}

let goal = {
    color:'green',
    x: context.canvas.width-50,
    y: 175,
    h: 50,
    w: 50,
    vx:0,
    vy:0
}

// drawBox function is used to draw the player and enemy
function drawBox(box){
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.w, box.h);
}


function drawImg() {
    // const ctx = document.getElementById("canvas").getContext("2d");
    const img = new Image();
    img.onload = () => {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          context.drawImage(img, j * 50, i * 38, 50, 38);
        }
      }
    };
    img.src = "mario.jpg";
}

function collisin(box1,box2){
    return box1.x < box2.x + box2.w &&
    box1.x + box1.w > box2.x &&
    box1.y < box2.y + box2.h &&
    box1.y + box1.h > box2.y;
}

function updateGameState(){
    // update the enemy1 position
    enemy1.y += enemy1.vy;
    // check if the enemy1 is out of the canvas
    if(enemy1.y+enemy1.h > canvas.height){    //bottom of enemy1 is hitting bottom of canvas, reverse the velocity
        enemy1.vy = -enemy1.vy;
    }
    else if(enemy1.y < 0){   //top of enemy1 is hitting top of canvas, reverse the velocity
        enemy1.vy = -enemy1.vy;
    }

    enemy2.y += enemy2.vy;
    // check if the enemy2 is out of the canvas
    if(enemy2.y+enemy2.h > canvas.height){    //bottom of enemy2 is hitting bottom of canvas, reverse the velocity
        enemy2.vy = -enemy2.vy;
    }
    else if(enemy2.y < 0){   //top of enemy2 is hitting top of canvas, reverse the velocity
        enemy2.vy = -enemy2.vy;
    }


    // player.x += player.vx;
    document.addEventListener('keydown', function(event){
        if(event.key == 'ArrowLeft'){
            player.x -= player.vx;
        }
        else if(event.key == 'ArrowRight'){
            player.x += player.vx;
        }
    });
    if(player.x+player.w > canvas.width){    //right of player is hitting right of canvas, reverse the velocity
        player.x = 0;
    }else if(player.x < 0){   //left of player is hitting left of canvas, reverse the velocity
        player.x = 0;
    }

    if(collisin(player,enemy1) || collisin(player,enemy2)){
        console.log('collision with enemy, You Lost!');
        player.x = 0;
    }
    if(collisin(player,goal)){
        console.log('you win');
        player.x = 0;
        player.y = 175;
        if(enemy1.vy>=-3 && enemy1.vy<=3){
            enemy1.vy = 1.05*enemy1.vy;
        }
        if(enemy2.vy>=-5 && enemy2.vy<=5){
            enemy2.vy = 1.1*enemy2.vy;
        }
    }
}

function updateGame(){
    //update game state
    updateGameState();
    // clean the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw the player
    drawBox(player);
    drawImg();
    drawBox(goal);

    // draw the enemy
    drawBox(enemy1);
    drawBox(enemy2);

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