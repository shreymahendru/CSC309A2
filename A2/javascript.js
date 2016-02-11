/**
 * Created by shreymahendru on 2016-02-08.
 */



var canvas;
var ctx;
var foods = []; //array that has all the foods


window.onload =function()
{
    canvas = document.getElementById("viewport");
    ctx =canvas.getContext("2d");
    foods = createGame();
    //window.setInterval(reDraw, 1000/60);
    window.setInterval();

};

function reDraw()
{
    console.log("doinf shit");
    for(var i = 0; i < foods.length; i++)
    {
            foods[i].drawFood(ctx);
    }
}


function makeBug(x, y, color){
    
    color = color;
    alpha = ".5";
    
    //http://www.w3schools.com/tags/canvas_globalalpha.asp
    context.globalAlpha = alpha;
    
    /*-- Whiskers, legs and arms--*/
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+5, y-15);
    context.lineTo(x+10, y);
    context.moveTo(x+5, y-20);
    context.lineTo(x+4, y-22);
    context.lineTo(x+6, y-22);
    context.lineTo(x+5, y-20);
    context.moveTo(x, y-20);
    context.lineTo(x+10, y-40);
    context.moveTo(x+10, y-20);
    context.lineTo(x, y-40);
    context.lineWidth = 2;
    context.strokeStyle = color;
    
    /*-- Triangles on the tips --*/
    context.moveTo(x,y);
    context.lineTo(x, y-3);
    context.lineTo(x+1.73, y-2.4);
    context.lineTo(x, y);
    context.moveTo(x+10, y);
    context.lineTo(x+8.27, y-2.4);
    context.lineTo(x+10, y-3);
    context.lineTo(x+10, y);
    context.moveTo(x, y-20);
    context.lineTo(x, y-22);
    context.lineTo(x+1.6, y-21.25);
    context.lineTo(x, y-22);
    context.moveTo(x+10, y-20);
    context.lineTo(x+8.4, y-21.25);
    context.lineTo(x+10, y-22);
    context.lineTo(x+10, y-20);
    context.moveTo(x, y-40);
    context.lineTo(x, y-38);
    context.lineTo(x+1.6, y-38.25);
    context.lineTo(x, y-38);
    context.moveTo(x+10, y-40);
    context.lineTo(x+8.4, y-38.25);
    context.lineTo(x+10, y-38);
    context.lineTo(x+10, y-40);
    context.stroke();
    
    /*-- Body parts --*/
    context.beginPath();
    context.arc(x+5, y-15, 5, 0, 2*Math.PI);
    context.moveTo(x+5, y-21);
    context.bezierCurveTo(x, y-20, x, y-30, x+5, y-38.75);
    context.moveTo(x+5, y-21);
    context.bezierCurveTo(x+10, y-20, x+10, y-30, x+5, y-38.75);
    context.fillStyle = color;
    context.lineWidth = 1;
    context.strokeStyle = "#000000"
    context.stroke();
    context.fill();
    
    /*-- Eyes and Mouth --*/
    context.beginPath();
    context.arc(x+3.3, y-13.2, 1, 0, 2*Math.PI);
    context.arc(x+6.75, y-13.2, 1, 0, 2*Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.beginPath();
    context.arc(x+5, y-15, 2.5, 0, Math.PI, false);
    context.stroke();
}


var Food  = function(x, y, eaten) {  //food object has x and y coordinates and if it is eaten or not
    this.x =x;
    this.y= y;
    this.eaten= eaten;

};

function createGame()
{
    var allFood = [];
    for(var i = 0; i < 5; i++)
    {
        var crd = getFoodCoord();
        console.log(crd);
        var food1 = new Food(crd[0], crd[1], false);
        allFood.push(food1);
        food1.drawFood(ctx);
    }
    return allFood;
}





    Food.prototype.drawFood = function(ctx){    // checks if the food is eaten or not and draws an image
        var img = document.getElementById("food");
        if (!this.eaten) {
            ctx.drawImage(img, this.x, this.y, 10, 10);
        }
    };

    function getFoodCoord()  // generates random x and y coordinates
    {
        var miny =  .20* canvas.height;  // not in top  20%
        var maxy = canvas.height- 10 ;
        var y= Math.floor(Math.random() * (maxy - miny) + miny);
        var x=Math.floor( (Math.random() * (canvas.width-20)+10));
        return [x, y];
    }



//window.onload =function(){
//    var canvas = document.getElementById("myCanvas");
//    var ctx = canvas.getContext("2d");
//    ctx.fillStyle = "black";
//    ctx.fill();
//    var radius = canvas.height / 2;
//    ctx.translate(radius, radius);
//    radius = radius * 0.90;
//
//    drawClock(radius,ctx);
//
//
//
//};
//
//function drawClock(radius, ctx) {
//    ctx.arc(0, 0, radius, 0 , 2*Math.PI);
//    ctx.fillStyle = "white";
//    ctx.fill();
//    drawFace(radius, ctx);
//}
//
//function drawFace(radius, ctx)
//{
//    var grad;
//    ctx.beginPath();
//    ctx.arc(0, 0, radius, 0, 2*Math.PI);
//    ctx.fillStyle = 'white';
//    ctx.fill();
//
//    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//    grad.addColorStop(0, '#333');
//    grad.addColorStop(0.5, 'white');
//    grad.addColorStop(1, '#333');
//    ctx.strokeStyle = grad;
//    ctx.lineWidth = radius*0.1;
//    ctx.stroke();
//
//    ctx.beginPath();
//    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//    ctx.fillStyle = '#333';
//    ctx.fill();
//    drawNumbers(ctx, radius);
//}
//
//function drawNumbers(ctx, radius) {
//    var ang;
//    var num;
//    ctx.font = radius * 0.15 + "px arial";
//    ctx.textBaseline = "middle";
//    ctx.textAlign = "center";
//    for (num = 1; num < 13; num++) {
//        ang = num * Math.PI / 6;
//        ctx.rotate(ang);
//        ctx.translate(0, -radius * 0.85);
//        ctx.rotate(-ang);
//        ctx.fillText(num.toString(), 0, 0);
//        ctx.rotate(ang);
//        ctx.translate(0, radius * 0.85);
//        ctx.rotate(-ang);
//    }
//}
//
//
