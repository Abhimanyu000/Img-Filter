function preload(){

}

function setup(){
    canvasincode=createCanvas(600, 600);
    canvasincode.position(300, 300);

    Video=createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image(Video, 0, 0, 600, 600);
    tint(filtercolor)
}

filtercolor="";

function filterApply(){
    filtercolor=document.getElementById("input").value;
}

function take_snapshot(){
    save("IMAGE_THAT_U_JUST_CLICKED_PART-.jpeg");
}