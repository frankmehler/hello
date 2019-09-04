"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke(); 

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "OK - Device Orient wird unterstützt!";
    window.addEventListener('deviceorientation', function(event) {
        document.getElementById("xBeschl").innerHTML = 'alpha ' + event.alpha.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'beta ' + event.beta;
        document.getElementById("zBeschl").innerHTML = 'gamme ' + event.gamma;
    });
} else {
    document.getElementById("supported").innerText = "Device Orient wird nicht unterstützt!";
}
