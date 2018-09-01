var canvas, ctx;
var clockRadius=90;
$(function() {
	canvas = $("#canvas");
	ctx = canvas[0].getContext("2d");
	setInterval("drawClock()", 1000);
});

function drawClock() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	hours = hours > 12 ? hours - 12 : hours;
	var hour = hours + minutes / 60;
	var minute = minutes + seconds / 60;
	ctx.save();

	ctx.translate(78, 75);
	ctx.beginPath();
	ctx.font = "11px Arial";
	ctx.fillStyle = "#333";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	for (var n = 1; n <= 12; n++) {
		var theta = (n - 3) * 2 * Math.PI / 12;
		var x = clockRadius * 0.7 * Math.cos(theta);
		var y = clockRadius * 0.7 * Math.sin(theta);
		ctx.closePath();
		ctx.fillText("●", x, y);
	}
	ctx.save();

	var theta = (hour - 3) * 2 * Math.PI / 12;
	ctx.rotate(theta);
	ctx.beginPath();
	ctx.moveTo(-15, -5);
	ctx.lineTo(-15, 5);
	ctx.lineTo(clockRadius * 0.4, 1);
	ctx.lineTo(clockRadius * 0.4, -1);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
	ctx.save();

	var theta = (minute - 15) * 2 * Math.PI / 60;
	ctx.rotate(theta);
	ctx.beginPath();
	ctx.moveTo(-15, -4);
	ctx.lineTo(-15, 4);
	ctx.lineTo(clockRadius * 0.6, 1);
	ctx.lineTo(clockRadius * 0.6, -1);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
	ctx.save();

	var theta = (seconds - 15) * 2 * Math.PI / 60;
	ctx.rotate(theta);
	ctx.beginPath();
	ctx.moveTo(-15, -3);
	ctx.lineTo(-15, 3);
	ctx.lineTo(clockRadius * 0.8, 1);
	ctx.lineTo(clockRadius * 0.8, -1);
	ctx.fillStyle = "#f00";
	ctx.closePath();
	ctx.fill();
	ctx.restore();

	ctx.restore();
}
