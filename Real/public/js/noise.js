function noiseAnimation() {
	"use strict";

	var canvas = document.querySelector("#tv"),
		context = canvas.getContext("gl") || canvas.getContext("2d"),
		stats = document.querySelector("#fpsstats"),
		lastRender = 0,
		fps = 0,
		scaleFactor = 2.2, // Noise size
		samples = [],
		sampleIndex = 0,
		scanOffsetY = 0,
		scanSize = 0,
		FPS = 50,
		scanSpeed = FPS * 4, // 15 seconds from top to bottom
		SAMPLE_COUNT = 10

	window.onresize = function() {
		canvas.width = canvas.offsetWidth / scaleFactor;
		canvas.height = canvas.width / (canvas.offsetWidth / canvas.offsetHeight);
		scanSize = (canvas.offsetHeight / scaleFactor) / 4;

		samples = []
		for(var i = 0; i < SAMPLE_COUNT; i++)
			samples.push(generateRandomSample(context, canvas.width, canvas.height));
	};

	function interpolate(x, x0, y0, x1, y1) {
		return y0 + (y1 - y0)*((x - x0)/(x1 - x0));
	}


	function generateRandomSample(context, w, h) {	
		var intensity = [];
		var random = 0;
		var factor = h / 10;

		var intensityCurve = [];
		for(var i = 0; i < Math.floor(h / factor) + factor; i++)
			intensityCurve.push(Math.floor(Math.random() * 10));

		for(var i = 0; i < h; i++) {
			var value = interpolate((i/factor), Math.floor(i / factor), intensityCurve[Math.floor(i / factor)], Math.floor(i / factor) + 1, intensityCurve[Math.floor(i / factor) + 1]);
			intensity.push(value);
		}

		var imageData = context.createImageData(w, h);
		for(var i = 0; i < (w * h); i++) {
			var k = i * 4;
			var color = Math.floor(36 * Math.random());
			// Optional: add an intensity curve to try to simulate scan lines
			color += intensity[Math.floor(i / w)];
			imageData.data[k] = imageData.data[k + 1] = imageData.data[k + 2] = color;
			imageData.data[k + 3] = 255;
		}
		return imageData;
	}

	function render() {
		context.globalCompositeOperation = "source-over";
		context.putImageData(samples[Math.floor(sampleIndex)], 0, 0);

		sampleIndex += 30 / FPS; // 1/FPS == 1 second
		if(sampleIndex >= samples.length) sampleIndex = 0;

		var grd = context.createLinearGradient(0, Math.max(0, scanOffsetY), 0, scanSize);

		context.globalCompositeOperation = "lighter";
		grd.addColorStop(0, 'rgba(255,255,255,0.08)');
		grd.addColorStop(1, 'rgba(255,255,255,0.08)');
		context.fillStyle = grd;
		context.fillRect(0, scanOffsetY, canvas.width, scanSize);

		scanOffsetY += (canvas.height / scanSpeed);
		if(scanOffsetY > canvas.height) scanOffsetY = -scanSize;
		
		window.requestAnimationFrame(render);
		fps = Math.floor(1 / ((Date.now() - lastRender) / 1000));
		lastRender = Date.now();
	}
	window.onresize();
	window.requestAnimationFrame(render);
	window.setInterval(function() {
		stats.innerText = fps;
	}, 1000);
};

noiseAnimation();