var topum1 = document.getElementById('demo1');
var topum2 = document.getElementById('demo2');
var topum3 = document.getElementById('demo3');
var topum4 = document.getElementById('demo4');
var topum5 = document.getElementById('demo5');
var can=15;

topum1.onmouseover = function(){
can--;

var text = can;
document.getElementById('demo1').innerHTML = text;

if(can==0){
alert("Can Bitti Game Over");
window.location.reload(false);
}
var x1 = parseInt(Math.random()*1000);
var y1 = parseInt(Math.random()*800);

var x2 = parseInt(Math.random()*900);
var y2 = parseInt(Math.random()*800);

var x3 = parseInt(Math.random()*1000);
var y3 = parseInt(Math.random()*900);

var x4 = parseInt(Math.random()*800);
var y4 = parseInt(Math.random()*700);

var x5 = parseInt(Math.random()*800);
var y5 = parseInt(Math.random()*700);


topum1.style.left = x1 + "px";
topum1.style.top = y1 + "px";
topum1.style.width = this.clientWidth + 15 + "px";
topum1.style.height = this.clientHeight + 15 + "px";

topum2.style.left = x2 + "px";
topum2.style.top = y2 + "px";
topum2.style.width = this.clientWidth + 10 + "px";
topum2.style.height = this.clientHeight + 10 + "px";

topum3.style.left = x3 + "px";
topum3.style.top = y3 + "px";
topum3.style.width = this.clientWidth + 10 + "px";
topum3.style.height = this.clientHeight + 10 + "px";

topum4.style.left = x4 + "px";
topum4.style.top = y4 + "px";
topum4.style.width = this.clientWidth + 10 + "px";
topum4.style.height = this.clientHeight + 10 + "px";

topum5.style.left = x5 + "px";
topum5.style.top = y5 + "px";
topum5.style.width = this.clientWidth + 10 + "px";
topum5.style.height = this.clientHeight + 10 + "px";
}



topum1.onclick = function(){
var sefer;
sefer = 15 - can;
window.alert("Tebrikler "+sefer+". Seferde Yakaladın");
window.location.reload(false);
}

topum2.onclick = function(){
window.alert("Game Over");
window.location.reload(false);
}

topum3.onclick = function(){
window.alert("Game Over");
window.location.reload(false);
}

topum4.onclick = function(){
window.alert("Game Over");
window.location.reload(false);
}

topum5.onclick = function(){
window.alert("Game Over");
window.location.reload(false);
}