function preload() {
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent("game_console")
	posenet = ml5.posenet(video, modelLoaded)
	posenet.on("pose", gotResults)
}

function draw() {
	game()
	
}







