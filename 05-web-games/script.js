let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');  //webgl context can be used to create 3d games
// context is a way to paint thing on the canvas, we can use context object to do things like fill a rectangle

context.fillStyle = 'brown';
context.fillRect(10,10,20,20);

context.clearRect(0,0,canvas.width,canvas.height);



let posX = 0;
let posY = 0;
setInterval(function(){
    posX+=10;
    posY+=10;
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(posX,posY,20,20);
},2000) 