status = ""

function preload(){
    img = loadImage("globe.jpg");
}


function setup(){
    canvas = createCanvas(600,600)
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "status : Detecting objects"
}

function modelLoaded(){
    console.log("model is loaded")
    status = true
   objectDetector.detect(img,gotResults)
}


function gotResults(error,results){
 if(error){
     console.error(error);
 }
 else{
     console.log(results)
 }
}



function draw(){
    image(img,0,0,600,600)
    fill('#FF0000')
    text("Globe",150,300)
    noFill()
    rect(150,300,260,200)
}