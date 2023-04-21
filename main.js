song1 = "";
song2 = "";

function preload()
{
song1 = loadSound("bright-positive-corporate-technology-143545.mp3");
song1 = loadSound("happy-upbeat-ukulele-142304.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill ("#FF0000");
    stroke("#FF0000");
}

function gotPoses(results)
{
    
}
