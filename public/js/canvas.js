var canvas = null, ctx = null, x = 900, y = 20;
var img = new Image();
var contador = 1;

function paint(ctx) {
    if(contador>31){
        contador=1;
    }
    console.log(contador);
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    img.src = "public/img/canvas/"+ contador +".png";
    ctx.drawImage(img, x, y);
    contador++;
}

function run() {
    paint(ctx);
    window.setTimeout(run, 50);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

window.addEventListener('load', init, false);
