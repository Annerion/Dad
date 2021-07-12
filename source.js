
// Make an instance of two and place it on the page.

var two = new Two({
        fullscreen: true,
        autostart: true
}).appendTo(document.body);


var pagewidth=$(document).width();
var pageheight=$(document).height();

var width= pagewidth/5;
var height= pageheight/4;


let pictures = [];
let textures = [];

for(var i= 1; i<=20; i++){
        pictures[i]= two.makeRectangle(i%5*width,(i/height|0)*height,width,height);
        textures[i]= two.makeTexture("./image"+i+".png");
        pictures[i].fill=textures[i];
}




two.update();


