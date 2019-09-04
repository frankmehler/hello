"use strict";

let ball = document.getElementById("meinBall");
let garden = document.getElementById("meinSpiefeld");
let output = document.getElementById("output");

//let maxX = garden.clientWidth - ball.clientWidth;
//let maxY = garden.clientHeight - ball.clientHeight;

let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
    ball.style.top = 20 + "px";
    ball.style.left = 80 + "px";
}

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "OK - Device Orient wird unterstützt!";
    window.addEventListener('deviceorientation', ereignisEingetreten(event));
}
else
document.getElementById("supported").innerText = "Keine Device Orient!";

function ereignisEingetreten(event) {
    alert ("Hallo");
    //document.getElementById("alpha").innerHTML = 'alpha ' + event.alpha.toFixed(2);
    document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(2);
    document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(2);
    let x = event.beta;  // In degree in the range [-180,180] nach vorne - hinten +
    let y = event.gamma; // In degree in the range [-90,90] nach rechts + nach links -

    if (x > 0)
        x = Math.max(20, x);
    else
        x = Math.max(-20, x);

    if (y > 0)
        y = Math.max(20, y);
    else
        y = Math.max(-20, y);

    if (ball.style.top > 100)
        x = 100;
    if (ball.style.left < -100)
        y = -100;

    x = x / 10;
    y = y / 10;

    ball.style.top = x + "px";
    ball.style.left = y + "px";

    let ausgabe = "x: " + x + " beta: " + event.beta.toFixed(2) + "\n";
    ausgabe = ausgabe + "y: " + x + " gamma: " + event.gamma.toFixed(2) + "\n";
    ausgabe = ausgabe + "  " + "  " + ball.style.top + "\n";
    ausgabe = ausgabe + "  " + ball.style.left + "\n";
    output.innerHTML = ausgabe;
}
