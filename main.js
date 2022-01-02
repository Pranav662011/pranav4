function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(500,150);


    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

noseX=0;
noseY=0;

difference=0;
rightWristX=0;
leftWristX=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results);
 noseX=results[0].pose.nose.x;
 noseY=results[0].pose.nose.y;
 console.log("noseX= "+noseX+", noseY=  "+noseY);

 leftWristX=results[0].pose.leftWrist.x;
 rightWristX=results[0].pose.rightWrist.x;
 difference=floor(leftWristX-rightWristX);
 console.log("leftWristX= "+leftWristX+", rightWristX=  "+rightWristX+", difference=  "+difference);
 

    }

      
    
}


function modelLoaded(){
    console.log("Model is Loaded");

}


function draw(){
    background("#DB6769");
    textSize(difference);
    fill("#fa0000");
    text("Pranav", 50, 400);
}