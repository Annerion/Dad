
// Make an instance of two and place it on the page.

var two = new Two({
        fullscreen: true,
        autostart: true
}).appendTo(document.body);

var debug=true;
var pagewidth=$(document).width();
var pageheight=$(document).height();

var width= pagewidth/5;
var height= pageheight/4;


let pictures = [];

var margin=0.94;

  
const iwidth=496;
const iheight=351;
var xt=width*margin/iwidth;
var yt=height*margin/iheight;
for(var i= 0; i<20; i++){

        pictures[i]= two.makeSprite("https://annerion.github.io/Dad/images/image"+(i+1)+".png",(i)%5*width+width/2,Math.floor((i)/5)*height+height/2);
        pictures[i].scale= new Two.Vector(xt,yt);
        pictures[i].opacity=0.5;
}

two.update();

var selectionMade=false;
var selection;
pictures.forEach(function(elem) {
        elem._renderer.elem.addEventListener('mouseover', function(e) {
                elem.opacity=1;
        }, false);
        elem._renderer.elem.addEventListener('mouseout', function(e) {
                elem.opacity=0.5;
        }, false);
        elem._renderer.elem.addEventListener('click', function(e) {
                if(selectionMade){
                        selection.noStroke();
                        selectionMade=false;
                }
                if(selection!=elem){
                        selectionMade=true;
                        selection=elem;
                        selection.stroke='green';
                        selection.linewidth=width/20;
                }
                else{
                        selection=null;
                }
                var data= pictures.indexOf(selection);
                //$.post("https://annerion.github.io/instructor.html", data);
                $.post("instructor.html",data);
                if(debug){console.log(data)};
        }, false);
});

two.play();