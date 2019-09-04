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
        document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(2);
        document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(2);
        //let x = event.beta;  // In degree in the range [-180,180]
        //let y = event.gamma; // In degree in the range [-90,90]
        //alert ("maxX: " + maxX + " x: " + x);


        // 10 is half the size of the ball
        // It center the positioning point to the center of the ball
        // ball.style.top = (maxX * x / 180 - 10) + "px";
        //ball.style.left = (maxY * y / 180 - 10) + "px";
        let x = ball.style.top + event.beta / 10;
        let y = ball.style.top + event.gamma / 10;
        console.log("x: " + x + " beta: " + event.beta.toFixed(2));
        console.log("y: " + x + " gamma: " + event.gamma.toFixed(2));
        ball.style.top = Math.max(maxX, x) + "px";
        ball.style.left = Math.max(maxY, y) + "px";
        console.log("  " + ball.style.top);
        console.log("  " + ball.style.top);
 
        //ball.style.top = Math.max(maxX * x / 180 - 10) + "px";
        //ball.style.left = (maxY * y / 180 - 10) + "px";
    });
} else {
    document.getElementById("supported").innerText = "Device Orient wird nicht unterstützt!";
}
