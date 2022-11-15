nose_X = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;
function preload() {

}
function setup() {
canvas = createCanvas(500 , 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500 , 500);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);

}
function draw() {
background("gainsboro");
fill("green");
stroke("black");
square(nose_x,nose_y,difference);
}
 function modelLoaded() {
    console.log("PoseNet is Initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log(" nose x = " + nose_x);
    console.log(" nose y = " + nose_y);
    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;
    difference = floor(left_wrist_x-right_wrist_x);
    console.log( "left wrist x = " + left_wrist_x); 
    console.log( "right wrist x = "    + right_wrist_x); 
    console.log( "difference" + difference); 

    }
}