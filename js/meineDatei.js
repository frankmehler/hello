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
    window.addEventListener('deviceorientation', ereignisEingetreten);
}
else {
    document.getElementById("supported").innerText = "Keine Device Orient!";
}

function ereignisEingetreten(event) {
    //window.setInterval(handleEreignis(event), 3000);
    handleEreignis(event);
}

function handleEreignis(event) {
    alert("Hallo9");
    //document.getElementById("alpha").innerHTML = 'alpha ' + event.alpha.toFixed(2);
    document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(2);
    document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(2);
    let x = event.beta;  // In degree in the range [-180,180] nach vorne - hinten +
    let y = event.gamma; // In degree in the range [-90,90] nach rechts + nach links -
    //Transformation in positiven Bereich
    if (x > 0)
        x = Math.max(20, x);
    else
        x = Math.max(-20, x);

    if (y > 0)
        y = Math.max(20, y);
    else
        y = Math.max(-20, y);

    if (ball.style.top > 200) ball.style.top = 190;
    if (ball.style.top < 0) ball.style.top = 10;
    if (ball.style.left > 200) ball.style.left = 190;
    if (ball.style.left < 0) ball.style.left = 10;
    alert("Hallo9.1");
    x = x / 10;
    y = y / 10;

    ball.style.top = (ball.style.top + x) + "px";
    ball.style.left = (ball.style.left + y) + "px";
    alert("Hallo9.2");

    let ausgabe = "x: " + x.toFixed(2) + " beta: " + event.beta.toFixed(2) + "\n";
    ausgabe = ausgabe + "y: " + y.toFixed(2) + " gamma: " + event.gamma.toFixed(2) + "\n";
    ausgabe = ausgabe + "top: " + ball.style.top.toFixed(2) + "\n";
    ausgabe = ausgabe + "left: " + ball.style.left.toFixed(2) + "\n";
    output.innerHTML = ausgabe;
    alert("Hallo9.3");
}


