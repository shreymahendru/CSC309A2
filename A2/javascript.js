/**
 * Created by shreymahendru on 2016-02-08.
 */



var canvas;
var ctx;
var foods = [];


window.onload =function()
{
    canvas = document.getElementById("viewport");
    ctx =canvas.getContext("2d");
    foods = createGame();
   // window.setInterval(reDraw, 1000/60);
    //window,setTimeout(cr)

};

function reDraw()
{
    console.log("doinf shit");
    for(var i = 0; i < foods.length; i++)
    {
            foods[i].drawFood(ctx);
    }
}
function creatBug()
{

}
var Food  = function(x, y, eaten) {
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





    Food.prototype.drawFood = function(ctx){
        var img = document.getElementById("food");
        if (!this.eaten) {
            ctx.drawImage(img, this.x, this.y, 10, 10);
        }
    };

    function getFoodCoord()
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
