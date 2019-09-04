"use strict";

let ball = document.getElementById("meinBall");
let garden = document.getElementById("meinSpiefeld");

let maxX = garden.clientWidth - ball.clientWidth;
let maxY = garden.clientHeight - ball.clientHeight;

let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
    ball.style.top = 20 + "px";
    ball.style.left = 80 + "px";
}

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "OK - Device Orient wird unterstützt!";
    window.addEventListener('deviceorientation', function (event) {
        document.getElementById("alpha").innerHTML = 'alpha ' + event.alpha.toFixed(2);
        document.getElementById("beta").innerHTML = 'beta ' + event.beta;
        document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma;
        let x = event.beta;  // In degree in the range [-180,180]
        let y = event.gamma; // In degree in the range [-90,90]

               // Because we don't want to have the device upside down
        // We constrain the x value to the range [-90,90]
        if (x > 90) { x = 90; }
        if (x < -90) { x = -90; }

        // To make computation easier we shift the range of 
        // x and y to [0,180]
        x += 90;
        y += 90;

        // 10 is half the size of the ball
        // It center the positioning point to the center of the ball
        ball.style.top = (maxX * x / 180 - 10) + "px";
        ball.style.left = (maxY * y / 180 - 10) + "px";
    });
} else {
    document.getElementById("supported").innerText = "Device Orient wird nicht unterstützt!";
}
