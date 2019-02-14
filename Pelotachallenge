var x = 200;
var y = 200;
var vely = 20;
var velx = 50;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	mostrar();
	moverx();
	movery();
	botarx();
	botary();

}

function mostrar() {
	ellipse(x, y, 50, 50);
}

function moverx() {
	x = x + velx;
}

function movery() {
	y = y + vely;
}

function botarx() {
	if (x > 375) {
		velx = velx * -1
	}
	if (x < 25) {
		velx = velx * -1;
	}
}

function botary() {
	if (y > 375) {
		vely = vely * -1;
	}
	if (y < 25) {
		vely = vely * -1;
	}
}
