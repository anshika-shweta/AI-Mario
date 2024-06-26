function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_gameover=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log("modelLoaded");
}
function gotPoses(results){
	if(results.length>0)
	{
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("x="+noseX+",Y="+noseY);
		console.log(results)
	}
}
function draw() {
	game()
}






